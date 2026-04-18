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
// normalize（完全キー化）
const normalize = (s) =>
  s?.toLowerCase()
    .replace(/azure|microsoft/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

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
// index生成
function buildCategoryIndex(categoryMap) {
  const index = new Map();

  for (const [category, services] of Object.entries(categoryMap)) {
    for (const name of services) {
      const key = normalize(name);
      index.set(key, category);

      const simplified = key.replace(/^azure/, "");
      index.set(simplified, category);
    }
  }

  return index;
}

/* ========================= */
// カテゴリ解決（最長一致）
function resolveCategory(title, index) {
  const key = normalize(title);

  if (index.has(key)) return index.get(key);

  let best = null;
  let bestLen = 0;

  for (const [k, v] of index.entries()) {
    if (key.includes(k) || k.includes(key)) {
      if (k.length > bestLen) {
        best = v;
        bestLen = k.length;
      }
    }
  }

  return best || "Other";
}

/* ========================= */
// cache
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
  const tmp = CACHE_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(cache, null, 2));
  fs.renameSync(tmp, CACHE_PATH);
}

function isExpired(entry) {
  return !entry || Date.now() - entry.updatedAt > TTL_MS;
}

/* ========================= */
// Gemini
async function generateDescription(title) {
  const prompt = `
Explain this Azure service in about 280 words.

Service:
${title}

Rules:
- No headings
- First sentence explains what it does
- Include use cases
- No repetition
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
// clean
function cleanGenerated(text, title) {
  if (!text) return text;

  let t = text
    .replace(/service[:：]?/gi, "")
    .replace(/description[:：]?/gi, "")
    .trim();

  let lines = t.split("\n").map(l => l.trim());

  lines = lines.filter(l => {
    if (!l) return false;
    if (l === title) return false;
    if (l.length < 5) return false;
    return true;
  });

  const seen = new Set();
  lines = lines.filter(l => {
    if (seen.has(l)) return false;
    seen.add(l);
    return true;
  });

  return lines.join("\n\n").trim();
}

/* ========================= */
// 重複排除
function prepare(items) {
  const map = new Map();

  for (const i of items) {
    const key = normalize(i.title);
    if (!map.has(key) || i.period === "always") {
      map.set(key, i);
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

🟦 Azure (JP)  
👉 https://zenn.dev/good_sleeper/articles/azure-always-free

🟧 AWS  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free
`;
}

/* ========================= */
async function main() {
  const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const items = prepare(raw);
  const cache = loadCache();

  const categoryMap = JSON.parse(fs.readFileSync(CATEGORY_MAP, "utf8"));
  const index = buildCategoryIndex(categoryMap);

  console.log("📦 items:", items.length);

  /* ===== generate ===== */
  for (const item of items) {
    const key = normalize(item.title);

    if (cache[key] && !isExpired(cache[key])) {
      console.log("⚡ cache:", item.title);
      continue;
    }

    let text;
    try {
      console.log("🤖 gen:", item.title);
      text = await generateDescription(item.title);
    } catch {
      text = item.description;
    }

    cache[key] = { text, updatedAt: Date.now() };
    saveCache(cache);

    await new Promise(r => setTimeout(r, 800));
  }

  /* ===== grouping（完全版）===== */
  const grouped = {};

  // 初期化（これが最重要）
  for (const c of CATEGORY_ORDER) {
    grouped[c] = [];
  }

  for (const item of items) {
    const category = resolveCategory(item.title, index);

    if (!grouped[category]) grouped["Other"].push(item);
    else grouped[category].push(item);

    console.log("📂", item.title, "→", category);
  }

  /* ===== Markdown ===== */
  let md = `---
title: "Azure Always Free Services"
emoji: "🟦"
type: "tech"
topics: ["azure", "cloud", "free-tier"]
published: true
---

# Azure Always Free Services

Azure provides many services that can be used for free within certain limits. This article organizes those services by category.

`;

  for (const category of CATEGORY_ORDER) {
    const list = grouped[category];
    if (!list || list.length === 0) continue;

    const icon = CATEGORY_META[category] || "📁";

    md += `## ${icon} ${category}\n\n`;

    list.forEach((item, i) => {
      md += formatItem(item, cache);

      if (i !== list.length - 1) {
        md += "\n---\n\n";
      } else {
        md += "\n<br><br>\n";
      }
    });
  }

  md += buildFooter();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, md, "utf8");

  console.log("✅ done");
}

main();
