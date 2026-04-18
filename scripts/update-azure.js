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
async function generateDescription(title) {
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
// 🔥 完全clean（最重要）
function cleanGenerated(text, title) {
  if (!text) return text;

  const name = title.trim();
  let t = text.trim();

  // ① 行配列化
  let lines = t.split("\n").map(l => l.trim());

  // ② タイトル・ラベル完全削除
  lines = lines.filter(l => {
    if (!l) return false;
    if (l === name) return false;
    if (/^(サービス名|説明文|拡張された説明文)$/.test(l)) return false;
    return true;
  });

  // ③ 先頭にまだタイトルが残るパターン対策（再帰的）
  while (lines.length && lines[0] === name) {
    lines.shift();
  }

  // ④ 連続重複行削除（←これが効く）
  const dedup = [];
  for (const l of lines) {
    if (dedup[dedup.length - 1] !== l) {
      dedup.push(l);
    }
  }

  return dedup.join("\n\n").trim();
}

/* ========================= */
// 🔥 正しい重複排除（always優先）
function prepare(items) {
  const map = new Map();

  for (const i of items) {
    const key = normalize(i.title);

    // alwaysを優先して上書き
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
