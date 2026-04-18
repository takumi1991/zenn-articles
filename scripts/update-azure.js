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
// 正規化
const normalize = (s) =>
  s?.toLowerCase()
    .replace(/azure\s*/g, "")
    .replace(/microsoft\s*/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[（）]/g, "")
    .replace(/\s+/g, "")
    .trim();

/* ========================= */
// キャッシュ
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    const t = fs.readFileSync(CACHE_PATH, "utf8");
    if (!t.trim()) return {};
    return JSON.parse(t);
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
async function generateDescription(title, description) {
  const prompt = `
Azureサービスの説明を日本語で約280文字で書いてください。

# サービス名
${title}

# 条件
・本文のみ
・見出し禁止
・最初の1文で機能説明
・ユースケース含む
・箇条書き禁止
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
// タイトル除去（重要）
function stripTitle(text, title) {
  if (!text) return text;

  let t = text.trim();
  const name = title.trim();

  // 先頭にタイトルが連続する限り削除
  while (t.startsWith(name)) {
    t = t.slice(name.length).trim();
  }

  return t;
}

/* ========================= */
// clean（最終版）
function cleanGenerated(text, title) {
  if (!text) return text;

  let t = stripTitle(text, title);

  t = t
    .replace(/サービス名/g, "")
    .replace(/拡張された説明文/g, "")
    .replace(/説明文/g, "");

  // 行整理
  t = t
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean)
    .join("\n\n");

  return t;
}

/* ========================= */
// 重複除去（最重要）
function uniqueByTitle(items) {
  const map = {};
  for (const i of items) {
    const key = normalize(i.title);
    if (!map[key]) map[key] = i;
  }
  return Object.values(map);
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

🌈 GCP  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free
`;
}

/* ========================= */
async function main() {
  const data = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const filtered = data.filter(d => d.period === "always");
  const unique = uniqueByTitle(filtered);
  const cache = loadCache();

  console.log("📦 unique:", unique.length);

  // 生成（逐次）
  for (const item of unique) {
    const key = normalize(item.title);

    if (cache[key] && !isExpired(cache[key])) {
      console.log("⚡ cache:", item.title);
      continue;
    }

    let text;
    try {
      console.log("🤖 gen:", item.title);
      text = await generateDescription(item.title, item.description);
    } catch {
      text = item.description;
    }

    cache[key] = { text, updatedAt: Date.now() };
    saveCache(cache);

    await new Promise(r => setTimeout(r, 800));
  }

  // Markdown
  let md = `# Azure常時無料サービス一覧\n\n`;

  unique.forEach(i => {
    md += formatItem(i, cache) + "\n---\n\n";
  });

  md += buildFooter();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, md, "utf8");

  console.log("✅ done");
}

main();
