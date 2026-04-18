import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* ========================= */
const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";
const CACHE_PATH = "./scripts/cache/azure_cache_jp.json";
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
Azureサービスの説明を日本語で280文字前後で書いてください。

# サービス名
${title}

# ルール
・本文のみ
・見出し禁止
・ラベル禁止
・最初の1文で機能説明
・ユースケース含む
・同じ文を繰り返さない
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
// clean
function cleanGenerated(text, title) {
  if (!text) return text;

  const name = title.trim();
  let t = text.trim();

  t = t
    .replace(/サービス名[:：]?/g, "")
    .replace(/説明文[:：]?/g, "")
    .replace(/拡張された説明文[:：]?/g, "");

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

  while (lines.length && lines[0] === name) {
    lines.shift();
  }

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

  return Array.from(map.values())
    .filter(i => i.period === "always");
}

/* ========================= */
function formatItem(item, cache) {
  const key = normalize(item.title);
  const raw = cache[key]?.text;
  const text = cleanGenerated(raw, item.title);

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

🌈 Google Cloud Platform  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

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

  /* ========================= */
  // 🔥 FrontMatter（これが今回の本質）
  const updatedAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  let md = `---
title: "Microsoft Azure 常時無料サービス一覧 (Always Free Services)"
emoji: "🔵"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Azure常時無料サービス一覧

最終更新日: ${updatedAt}

Azureには常時無料で利用できるサービスが多数用意されています。本記事ではそれらを一覧で整理しています。

`;

  items.forEach(i => {
    md += formatItem(i, cache) + "\n---\n\n";
  });

  md += buildFooter();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, md, "utf8");

  console.log("✅ done");
}

main();
