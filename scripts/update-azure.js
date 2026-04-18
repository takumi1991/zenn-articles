import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* =========================
   ▼ 設定
========================= */
const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";
const CATEGORY_MAP = "./data/azure-jp-category-map.json";

const CACHE_PATH = "./scripts/cache/azure_cache_jp.json";
const BATCH_SIZE = 5;
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

/* =========================
   ▼ APIキー確認
========================= */
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY not set");
  process.exit(1);
}

/* =========================
   ▼ Gemini
========================= */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-flash-lite"
});

/* =========================
   ▼ 正規化
========================= */
const normalize = (s) =>
  s
    ?.toLowerCase()
    .replace(/azure\s*/g, "")
    .replace(/microsoft\s*/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[（）]/g, "")
    .replace(/\s+/g, "")
    .trim();

/* =========================
   ▼ 整形
========================= */
const normalizeTitle = (t) =>
  t?.replace("、サービス カタログ", "");

const normalizeFreeTier = (t) =>
  t?.trim() === "無料" ? "なし" : t;

/* =========================
   ▼ キャッシュ
========================= */
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    const text = fs.readFileSync(CACHE_PATH, "utf8");
    if (!text.trim()) return {};
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });

  // atomic write（壊れ防止）
  const tmp = CACHE_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(cache, null, 2));
  fs.renameSync(tmp, CACHE_PATH);
}

function isExpired(entry) {
  return !entry || Date.now() - entry.updatedAt > TTL_MS;
}

/* =========================
   ▼ Gemini生成
========================= */
async function generateDescription(title, description) {
  const prompt = `
以下のAzureサービスについて、日本語で約280文字の解説を書いてください。

# サービス名
${title}

# 参考情報（そのまま使わないこと）
${description}

# 条件
・参考情報に依存せず再構成
・内容は矛盾しないこと
・最初の1文で機能説明
・ユースケースを含める
・箇条書き禁止
・見出し禁止
・本文のみ出力
・300文字前後
`;

  const result = await model.generateContent(prompt);
  return (await result.response).text().trim();
}

/* =========================
   ▼ サニタイズ（強化版）
========================= */
function cleanGenerated(text, title) {
  if (!text) return text;

  let t = text;

  // ラベル削除
  t = t
    .replace(/^\s*サービス名.*$/gim, "")
    .replace(/^\s*拡張された説明文.*$/gim, "")
    .replace(/^\s*説明文.*$/gim, "");

  // タイトル重複削除
  const escaped = title?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (escaped) {
    const re = new RegExp(`^\\s*${escaped}\\s*$`, "gim");
    t = t.replace(re, "");
  }

  // 見出しっぽい行削除
  t = t
    .split("\n")
    .filter(line => {
      const s = line.trim();
      if (!s) return false;

      if (s.length <= 20 && !/[。．.!?]$/.test(s)) return false;
      if (/(サービス名|説明文|概要)/.test(s)) return false;

      return true;
    })
    .join("\n");

  return t.replace(/\n{3,}/g, "\n\n").trim();
}

/* =========================
   ▼ footer
========================= */
function buildFooter({ exclude = "" } = {}) {
  const links = [
    { name: "Google Cloud Platform", emoji: "🌈", url: "https://zenn.dev/good_sleeper/articles/gcp-always-free", key: "gcp" },
    { name: "AWS", emoji: "🟧", url: "https://zenn.dev/good_sleeper/articles/aws-always-free", key: "aws" },
    { name: "Microsoft Azure", emoji: "🟦", url: "https://zenn.dev/good_sleeper/articles/azure-always-free", key: "azure" }
  ];

  const filtered = links.filter(l => l.key !== exclude);

  return `

## 関連記事：他クラウドの常時無料枠まとめ

${filtered.map(l => `${l.emoji} ${l.name} の常時無料枠  
👉 ${l.url}`).join("\n\n")}
`;
}

/* =========================
   ▼ Markdown整形
========================= */
function formatItem(item, cache) {
  const key = normalize(item.title);
  let generated = cleanGenerated(cache[key]?.text, item.title);

  return `### ${normalizeTitle(item.title)}

${generated || item.description}

**毎月の上限：** ${normalizeFreeTier(item.free_tier)}

🔗 ${item.link}
`;
}

/* =========================
   ▼ メイン
========================= */
async function main() {
  try {
    const data = JSON.parse(fs.readFileSync(INPUT, "utf8"));
    const filtered = data.filter(d => d.period === "always");
    const cache = loadCache();

    console.log(`📦 items: ${filtered.length}`);

    /* ===== 逐次処理（重要：Promise.all禁止）===== */
    for (const item of filtered) {
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
        console.warn("⚠️ fallback:", item.title);
        text = item.description;
      }

      cache[key] = { text, updatedAt: Date.now() };
      console.log("💾 saving:", key);
      saveCache(cache);

      await new Promise(r => setTimeout(r, 1000));
    }

    /* ===== Markdown生成 ===== */
    let md = `# Azure常時無料サービス一覧\n\n`;

    filtered.forEach(item => {
      md += formatItem(item, cache) + "\n---\n\n";
    });

    const footer = buildFooter({ exclude: "azure" });

    fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
    fs.writeFileSync(OUTPUT, md + footer, "utf8");

    console.log("✅ done:", OUTPUT);

  } catch (e) {
    console.error("❌", e);
    process.exit(1);
  }
}

main();
