import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* ========================= */
const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";
const CACHE_PATH = "./scripts/cache/azure_cache_jp.json";
const CATEGORY_MAP = "./data/azure-jp-category-map.json";
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
    .replace(/[（）]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

const CATEGORY_META = {
  "AI + 機械学習": "🧠",
  "分析": "📊",
  "コンピューティング": "🖥️",
  "コンテナー": "📦",
  "データベース": "🗄️",
  "開発者ツール": "🛠️",
  "DevOps": "⚙️",
  "ハイブリッド+マルチクラウド": "🌐",
  "ID": "🔐",
  "統合": "🧩",
  "モノのインターネット (IoT)": "📡",
  "管理とガバナンス": "📋",
  "移行": "✈️",
  "ネットワーク": "🌍",
  "セキュリティ": "🛡️",
  "ストレージ": "💾",
  "仮想デスクトップ インフラストラクチャ": "🖥️",
  "Web": "🌎",
  "その他": "📁"

};

/* ========================= */
// 🔥 category index生成（これが正解）
function buildCategoryIndex(categoryMap) {
  const index = new Map();

  for (const [category, services] of Object.entries(categoryMap)) {
    for (const name of services) {
      const key = normalize(name);
      index.set(key, category);
    }
  }

  return index;
}

function resolveCategory(title, index) {
  const key = normalize(title);

  // 完全一致
  if (index.has(key)) return index.get(key);

  // 部分一致（保険）
  for (const [k, v] of index.entries()) {
    if (key.includes(k) || k.includes(key)) {
      return v;
    }
  }

  return "その他";
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
Azureサービスの説明を日本語で320文字前後で書いてください。

# サービス名
${title}

# ルール
・本文のみ
・見出し禁止
・ラベル禁止
・最初の1文で機能説明
・初心者にとってわかりやすく
・ユースケース含む
・冗長禁止
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
// clean
function cleanGenerated(text, title) {
  if (!text) return text;

  const name = title.trim();

  let t = text
    .replace(/サービス名[:：]?/g, "")
    .replace(/説明文[:：]?/g, "")
    .replace(/拡張された説明文[:：]?/g, "")
    .trim();

  let lines = t.split("\n").map(l => l.trim());

  lines = lines.filter(l => {
    if (!l) return false;
    if (l === name) return false;
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

**毎月の上限：** ${item.free_tier}

🔗 ${item.link}
`;
}

/* ========================= */
function buildFooter() {
  return `

## 関連記事

🌈 Google Cloud Platform の常時無料枠(Always Free Services)  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS の常時無料枠(Always Free Services)
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

  /* ===== 生成 ===== */
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

  /* ===== カテゴリ分類 ===== */
  const grouped = {};

  for (const item of items) {
    const category = resolveCategory(item.title, index);

    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(item);

    console.log("📂", item.title, "→", category);
  }

  /* ===== Markdown ===== */
  let md = `---
title: "Azure常時無料サービス一覧(Always Free Services)"
emoji: "🟦"
type: "tech"
topics: ["azure", "cloud", "free-tier"]
published: true
---

# Azure常時無料サービス一覧

Azureには常時無料で利用できるサービスが多数存在しており、各サービス一定の上限までは課金されずに利用できます。
本記事ではカテゴリごとにそれらの常時無料サービスを整理しています。

👉 English version: https://zenn.dev/good_sleeper/articles/azure-always-free-en

`;

  for (const [category, list] of Object.entries(grouped)) {
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
