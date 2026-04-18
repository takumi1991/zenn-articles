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
// normalize（強化版）
const normalize = (s) =>
  s?.toLowerCase()
    .replace(/azure|microsoft/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[（）]/g, "")
    .replace(/[^a-z0-9]/g, "") // ←重要：完全キー化
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
・ラベル禁止（サービス名など出さない）
・最初の1文で機能説明
・ユースケース含む
・同じ文を繰り返さない
`;

  const r = await model.generateContent(prompt);
  return (await r.response).text().trim();
}

/* ========================= */
// 🔥 clean（最強版）
function cleanGenerated(text, title) {
  if (!text) return text;

  const name = title.trim();
  let t = text.trim();

  // 1. ラベル削除
  t = t
    .replace(/サービス名[:：]?/g, "")
    .replace(/説明文[:：]?/g, "")
    .replace(/拡張された説明文[:：]?/g, "");

  // 2. 行分解
  let lines = t.split("\n").map(l => l.trim());

  // 3. ゴミ行削除
  lines = lines.filter(l => {
    if (!l) return false;
    if (l === name) return false;
    if (l.length < 5) return false;
    return true;
  });

  // 4. 完全重複削除（重要）
  const seen = new Set();
  lines = lines.filter(l => {
    if (seen.has(l)) return false;
    seen.add(l);
    return true;
  });

  // 5. 先頭タイトル潰し（保険）
  while (lines.length && lines[0] === name) {
    lines.shift();
  }

  return lines.join("\n\n").trim();
}

/* ========================= */
// 🔥 重複排除（完全版）
function prepare(items) {
  const map = new Map();

  for (const i of items) {
    const key = normalize(i.title);

    // always優先
    if (!map.has(key) || i.period === "always") {
      map.set(key, i);
    }
  }

  const result = Array.from(map.values())
    .filter(i => i.period === "always");

  return result;
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

🌈 GCP  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free
`;
}

/* ========================= */
async function main() {
  const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const items = prepare(raw);

  // ⚠️ キャッシュ削除推奨
  let cache = loadCache();

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

  let md = `# Azure常時無料サービス一覧\n\n`;

  items.forEach(i => {
    md += formatItem(i, cache) + "\n---\n\n";
  });

  md += buildFooter();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, md, "utf8");

  console.log("✅ done");
}

main();
