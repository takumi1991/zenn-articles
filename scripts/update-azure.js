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
   ▼ Gemini
========================= */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-flash-lite"
});

/* =========================
   ▼ カテゴリ絵文字
========================= */
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
  "Web": "🌎"
};

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
   ▼ 軽微整形
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
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8") || "{}");
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function isExpired(entry) {
  return !entry || Date.now() - entry.updatedAt > TTL_MS;
}

/* =========================
   ▼ Gemini（拡張生成）
========================= */
async function generateDescription(title, description) {
  const prompt = `
以下のAzureサービスの説明文を、日本語で約300文字に膨らませてください。

# サービス名
${title}

# 元の説明文
${description}

# 条件
・元の内容をベースにする（創作しない）
・最初の1文で何ができるか明確にする
・ユースケースを自然に補足する
・冗長な表現は禁止
・箇条書き禁止
・300文字前後
`;

  const result = await model.generateContent(prompt);
  return (await result.response).text().trim();
}

/* =========================
   ▼ footer（関数化）
========================= */
function buildFooter({ exclude = "" } = {}) {
  const links = [
    {
      name: "Google Cloud Platform",
      emoji: "🌈",
      url: "https://zenn.dev/good_sleeper/articles/gcp-always-free",
      key: "gcp"
    },
    {
      name: "AWS",
      emoji: "🟧",
      url: "https://zenn.dev/good_sleeper/articles/aws-always-free",
      key: "aws"
    },
    {
      name: "Microsoft Azure",
      emoji: "🟦",
      url: "https://zenn.dev/good_sleeper/articles/azure-always-free",
      key: "azure"
    }
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
  const generated = cache[key]?.text;

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
    const categoryMap = JSON.parse(fs.readFileSync(CATEGORY_MAP, "utf8"));

    const filtered = data.filter(d => d.period === "always");
    const cache = loadCache();

    console.log(`📦 items: ${filtered.length}`);

    /* ===== Gemini生成 ===== */
    for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
      const batch = filtered.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map(async (item) => {
          const key = normalize(item.title);

          if (cache[key] && !isExpired(cache[key])) {
            return;
          }

          const text = await generateDescription(
            item.title,
            item.description
          );

          cache[key] = {
            text,
            updatedAt: Date.now()
          };

          saveCache(cache);
          await new Promise(r => setTimeout(r, 1000));
        })
      );
    }

    /* ===== itemMap ===== */
    const itemMap = {};
    for (const item of filtered) {
      itemMap[normalize(item.title)] = item;
    }

    const findItem = (name) => {
      const key = normalize(name);
      if (itemMap[key]) return itemMap[key];

      const found = Object.entries(itemMap).find(([k]) =>
        k.includes(key) || key.includes(k)
      );
      return found?.[1];
    };

    const used = new Set();

    const updatedAt = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    let md = `---
title: "Microsoft Azure 常時無料サービス一覧(Always Free Services)"
emoji: "🔵"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Azure常時無料サービス一覧

最終更新日: ${updatedAt}

AzureにもAWSやGoogle Cloud同様に「常時無料枠（Always Free Services）」が${filtered.length}件ほど用意されています。
`;

    /* ===== カテゴリ描画 ===== */
    for (const [category, services] of Object.entries(categoryMap)) {
      const validItems = services
        .map(name => {
          const item = findItem(name);
          if (item) used.add(item.title);
          return item;
        })
        .filter(Boolean);

      if (validItems.length === 0) continue;

      md += `\n\n## ${CATEGORY_META[category] || "📁"} ${category}\n\n`;

      validItems.forEach((item, i) => {
        md += formatItem(item, cache);
        md += i !== validItems.length - 1 ? "\n---\n\n" : "\n";
      });
    }

    /* ===== その他 ===== */
    const others = filtered.filter(i => !used.has(i.title));

    if (others.length > 0) {
      md += `\n\n## 🧩 その他（${others.length}件）\n\n`;

      others.forEach((item, i) => {
        md += formatItem(item, cache);
        md += i !== others.length - 1 ? "\n---\n\n" : "\n";
      });
    }

    /* ===== footer ===== */
    const footer = buildFooter({ exclude: "azure" });

    /* ===== 出力 ===== */
    fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
    fs.writeFileSync(OUTPUT, md + footer, "utf8");

    console.log("✅ done:", OUTPUT);

  } catch (e) {
    console.error("❌", e);
    process.exit(1);
  }
}

main();
