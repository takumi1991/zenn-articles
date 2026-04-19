import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* ========================= */
const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free-en.md";
const CACHE_PATH = "./scripts/cache/azure_cache_en.json";
const CATEGORY_MAP = "./data/azure-en-category-map.json";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

/* ========================= */
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY not set");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-flash-lite"
});

/* ========================= */
// 🔥 タイトル補正（誤記対策）
function sanitizeTitle(title) {
  if (!title) return title;

  return title
    .replace(/,\s*Service\s*catalog/i, "") // ←今回の本丸
    .replace(/\s*\/\s*.*/g, "")
    .replace(/\s*-\s*preview.*$/i, "")
    .trim();
}

/* ========================= */
// normalize（sanitize統合）
const normalize = (s) =>
  sanitizeTitle(s)
    ?.toLowerCase()
    .replace(/azure|microsoft/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

/* ========================= */
// alias（必要最低限）
const ALIAS = {
  speechtotext: "speech",
  texttospeech: "speech",
  speechtranslation: "speech",
  securitycenter: "defenderforcloud",
  activedirectoryb2c: "entraexternalid",
  updatemanager: "updatemanagementcenter",
  bandwidth: "virtualnetwork",
  datatransfer: "virtualnetwork"
};

/* ========================= */
const CATEGORY_META = {
  "AI + machine learning": "🧠",
  "Analytics": "📊",
  "Compute": "🖥️",
  "Containers": "📦",
  "Databases": "🗄️",
  "Developer tools": "🛠️",
  "DevOps": "⚙️",
  "Hybrid + multicloud": "🌐",
  "Identity": "🔐",
  "Integration": "🧩",
  "Internet of Things": "📡",
  "Management and governance": "📋",
  "Migration": "✈️",
  "Networking": "🌍",
  "Security": "🛡️",
  "Storage": "💾",
  "Virtual desktop infrastructure": "🖥️",
  "Web": "🌎",
  "Other": "📁"
};

const CATEGORY_ORDER = Object.keys(CATEGORY_META);

/* ========================= */
function buildCategoryIndex(categoryMap) {
  const index = new Map();

  for (const [category, services] of Object.entries(categoryMap)) {
    for (const name of services) {
      const key = normalize(name);
      index.set(key, category);

      const noAzure = key.replace(/^azure/, "");
      index.set(noAzure, category);
    }
  }

  return index;
}

/* ========================= */
function resolveCategory(title, index) {
  let key = normalize(title);

  if (ALIAS[key]) {
    key = normalize(ALIAS[key]);
  }

  if (index.has(key)) {
    const cat = index.get(key);
    console.log("✅ EXACT:", title, "→", key, "→", cat);
    return cat;
  }

  console.error("❌ UNMATCHED:", title, "→", key);
  return "Other";
}

/* ========================= */
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function isExpired(entry) {
  return !entry || Date.now() - entry.updatedAt > TTL_MS;
}

/* ========================= */
async function generateDescription(title) {
  const prompt = `
Explain this Azure service in about 120 words.

Service:
${title}

Rules:
- No headings
- First sentence explains what it does
- Include one concrete use case
- Avoid repetition
- Use simple, clear language for beginners
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
function cleanGenerated(text, title) {
  if (!text) return text;

  return text
    .replace(title, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* ========================= */
function prepare(items) {
  const map = new Map();

  for (const i of items) {
    const cleanTitle = sanitizeTitle(i.title);
    const key = normalize(cleanTitle);

    if (!map.has(key) || i.period === "always") {
      map.set(key, {
        ...i,
        title: cleanTitle
      });
    }
  }

  return Array.from(map.values()).filter(i => i.period === "always");
}

/* ========================= */
function formatItem(item, cache) {
  const key = normalize(item.title);
  const text = cleanGenerated(cache[key]?.text, item.title);

  return `### ${item.title}

${text || item.description}

**Free tier:** ${item.free_tier}

🔗 ${item.link}
`;
}

/* ========================= */
function buildFooter() {
  return `

## Related Articles

🟧 AWS  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free-en

🟦 Azure (JP)  
👉 https://zenn.dev/good_sleeper/articles/azure-always-free
`;
}

/* ========================= */
async function main() {
  const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const items = prepare(raw);
  const cache = loadCache();

  const categoryMap = JSON.parse(fs.readFileSync(CATEGORY_MAP, "utf8"));
  const index = buildCategoryIndex(categoryMap);

  for (const item of items) {
    const key = normalize(item.title);

    if (cache[key] && !isExpired(cache[key])) continue;

    let text;
    try {
      text = await generateDescription(item.title);
    } catch {
      text = item.description;
    }

    cache[key] = { text, updatedAt: Date.now() };
    saveCache(cache);

    await new Promise(r => setTimeout(r, 500));
  }

  const grouped = {};
  const unmatched = [];

  for (const c of CATEGORY_ORDER) grouped[c] = [];

  for (const item of items) {
    const category = resolveCategory(item.title, index);

    if (category === "Other") unmatched.push(item.title);

    grouped[category]?.push(item) ?? grouped["Other"].push(item);
  }

  console.log("\n===== UNMATCHED =====");
  console.log(unmatched);
  console.log("=====================\n");

  let md = `---
title: "Azure Always Free Services"
emoji: "🟦"
type: "tech"
topics: ["azure", "cloud", "free-tier"]
published: true
---

# Azure Always Free Services

Updated: ${new Date().toISOString()}(UTC)

Azure provides many services that can be used for free within certain limits. This article organizes those services by category.
`;

  for (const category of CATEGORY_ORDER) {
    const list = grouped[category];
    if (!list.length) continue;

    const icon = CATEGORY_META[category];

    md += `\n## ${icon} ${category}\n\n`;

    list.forEach((item, i) => {
      md += formatItem(item, cache);
    
      if (i !== list.length - 1) {
        md += "\n---\n\n";   // ← 区切り線
      } else {
        md += "\n<br><br>\n"; // ← カテゴリ最後
      }
    });
  }

  md += buildFooter();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, md, "utf8");

  console.log("✅ done");
}

main();
