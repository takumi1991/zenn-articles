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
// normalize
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
// category index
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
// category resolve
function resolveCategory(title, index) {
  const key = normalize(title);

  // ① 完全一致
  if (index.has(key)) {
    const cat = index.get(key);
    console.log("✅ EXACT:", title, "→", key, "→", cat);
    return cat;
  }

  // ② 前方一致
  for (const [k, v] of index.entries()) {
    if (key.startsWith(k)) {
      console.log("🟡 PREFIX:", title, "→", key, "≈", k, "→", v);
      return v;
    }
  }

  // ③ 最長部分一致（危険ゾーン）
  let best = null;
  let bestLen = 0;
  let matchedKey = null;

  for (const [k, v] of index.entries()) {
    if (key.includes(k) || k.includes(key)) {
      if (k.length > bestLen) {
        best = v;
        bestLen = k.length;
        matchedKey = k;
      }
    }
  }

  if (best) {
    console.warn("⚠️ PARTIAL:", title, "→", key, "≈", matchedKey, "→", best);
    return best;
  }

  // ④ 完全失敗
  console.error("❌ UNMATCHED:", title, "→", key);
  return "Other";
}

/* ========================= */
// cache
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};

  try {
    const c = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
    console.log("📦 cache loaded:", Object.keys(c).length);
    return c;
  } catch {
    console.warn("⚠️ cache load failed");
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });

  const tmp = CACHE_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(cache, null, 2));
  fs.renameSync(tmp, CACHE_PATH);

  console.log("💾 cache saved:", Object.keys(cache).length);
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
- Avoid repetition
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
// dedupe
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

  if (!cache[key]) {
    console.warn("❌ cache miss:", item.title, "key:", key);
  }

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

  console.log("📦 items:", items.length);
  console.log("📦 cache sample:", Object.keys(cache).slice(0, 10));

  const categoryMap = JSON.parse(fs.readFileSync(CATEGORY_MAP, "utf8"));
  const index = buildCategoryIndex(categoryMap);

  /* ===== generate ===== */
  for (const item of items) {
    const key = normalize(item.title);

    console.log("🔑", item.title, "→", key);

    if (cache[key] && !isExpired(cache[key])) {
      console.log("⚡ cache hit:", item.title);
      continue;
    }

    let text;
    try {
      console.log("🤖 gen:", item.title);
      text = await generateDescription(item.title);
    } catch {
      console.warn("⚠️ fallback:", item.title);
      text = item.description;
    }

    cache[key] = { text, updatedAt: Date.now() };

    console.log("📝 write:", key, "len:", text.length);

    saveCache(cache);

    await new Promise(r => setTimeout(r, 800));
  }

  /* ===== grouping ===== */
  const grouped = {};
  const stats = {
    exact: 0,
    prefix: 0,
    partial: 0,
    other: 0
  };
  
  for (const c of CATEGORY_ORDER) grouped[c] = [];
  
  for (const item of items) {
    const category = resolveCategory(item.title, index);
  
    if (!grouped[category]) {
      grouped["Other"].push(item);
      stats.other++;
    } else {
      grouped[category].push(item);
    }
  
    console.log("📂 RESULT:", item.title, "→", category);
  }

  console.log("\n===== CATEGORY STATS =====");
for (const [cat, list] of Object.entries(grouped)) {
  console.log(`${cat}: ${list.length}`);
}
console.log("==========================\n");


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

// 🔥 カテゴリ出力
for (const category of CATEGORY_ORDER) {
  const list = grouped[category];
  if (!list || list.length === 0) continue;

  const icon = CATEGORY_META[category] || "📁";

  // ✅ 空行を必ず入れる（Zenn崩れ防止）
  md += `\n## ${icon} ${category}\n\n`;

  list.forEach((item, i) => {
    md += formatItem(item, cache);

    // ❌ "---"はZennで崩れる原因 → 削除
    if (i !== list.length - 1) {
      md += "\n\n"; 
    } else {
      md += "\n<br><br>\n";
    }
  });
}

// フッター前にも空行
md += `\n`;
md += buildFooter();

/* ===== Debug（必須） ===== */
console.log("\n===== MARKDOWN PREVIEW =====");
console.log(md.slice(0, 1200));
console.log("============================\n");

/* ===== Write ===== */
fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, md, "utf8");

console.log("✅ done");
}

main();
