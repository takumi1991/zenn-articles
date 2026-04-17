import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ICON_MAP } from "./aws-icon-map.js";

/* ======================================
   ▼ 設定
   ====================================== */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash-lite" });

const CACHE_PATH = 'scripts/cache/aws_cache.json';
const BATCH_SIZE = 5;

// TTL（30日）
const TTL_DAYS = 30;
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

/* ======================================
   ▼ キャッシュ処理
   ====================================== */
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    const text = fs.readFileSync(CACHE_PATH, 'utf8');
    if (!text.trim()) return {};
    return JSON.parse(text);
  } catch {
    console.warn('⚠️ cache broken, reset');
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function isExpired(entry) {
  if (!entry) return true;
  return Date.now() - entry.updatedAt > TTL_MS;
}

/* ======================================
   ▼ Gemini生成
   ====================================== */
async function generateDescription(title, description) {
  const prompt = `
以下のAWSサービスについて、日本語で300文字程度の解説を書いてください。

# サービス名
${title}

# 概要
${description}

# 条件
・最初の1文で何ができるか説明
・ユースケースを含める
・箇条書き禁止
・冗長禁止
`;

  const result = await model.generateContent(prompt);
  return (await result.response).text().trim();
}

/* ======================================
   ▼ カテゴリ
   ====================================== */
function toJapaneseCategory(name) {
  const MAP = {
    "Compute": "コンピューティング",
    "Storage": "ストレージ",
    "Database": "データベース",
    "Networking": "ネットワーク",
    "Security": "セキュリティ",
    "Analytics": "データ分析",
    "AI": "AI",
    "Developer Tools": "開発者ツール",
    "Management & Governance": "管理とガバナンス",
    "Application Integration": "アプリケーション統合",
    "Migration": "移行"
  };
  return MAP[name] || name;
}

function getCategoryIcon(name) {
  const MAP = {
    "Compute": "💻",
    "Storage": "🗄️",
    "Database": "🧱",
    "Networking": "🌐",
    "Security": "🔐",
    "Analytics": "📊",
    "AI": "🧠",
    "Developer Tools": "🛠️",
    "Management & Governance": "🏛️",
    "Application Integration": "🧩",
    "Migration": "✈️"
  };
  return MAP[name] || "📦";
}

/* ======================================
   ▼ アイコン取得（修正版）
   ====================================== */
function getIconPath(name) {
  let key = ICON_MAP[name];

  console.log("🔍 ICON_LOOKUP:", name, "→", key);

  // fallback（Aurora DSQL対策含む）
  if (!key) {
    key = name
      .replace(/^Amazon |^AWS /, "")
      .toLowerCase()
      .replace(/\s+/g, "-");

    console.log("⚠️ fallback:", name, "→", key);
  }

  const url = `https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/${key}.png`;

  console.log("🖼️ ICON_URL:", url);

  return url;
}

/* ======================================
   ▼ メイン
   ====================================== */
async function main() {
  try {
    const items = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    const cache = loadCache();

    console.log(`📦 Loaded items: ${items.length}`);

    /* ===== Gemini生成 ===== */
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      const batch = items.slice(i, i + BATCH_SIZE);

      console.log(`🚀 Batch ${i}`);

      await Promise.all(
        batch.map(async (item) => {
          const key = item.title_ja;
          const entry = cache[key];

          if (entry && !isExpired(entry)) {
            console.log(`⚡ cache hit: ${key}`);
            return;
          }

          console.log(`🤖 generating: ${key}`);

          const text = await generateDescription(
            item.title_ja,
            item.description_ja
          );

          cache[key] = { text, updatedAt: Date.now() };
          saveCache(cache);

          await new Promise(r => setTimeout(r, 1000));
        })
      );
    }

    /* ===== Markdown生成 ===== */
    let md = `---
title: "AWSの常時無料サービス一覧 (Always Free Services)"
emoji: "🟧"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料サービス 一覧 (Always Free Services)

`;

    const grouped = {};
    items.forEach(i => {
      grouped[i.category] ??= [];
      grouped[i.category].push(i);
    });

    const CATEGORY_ORDER = [
      "Compute","Storage","Database","Application Integration",
      "Networking","Security","Analytics","AI",
      "Developer Tools","Management & Governance","Migration"
    ];

    for (const category of CATEGORY_ORDER) {
      const list = grouped[category];
      if (!list) continue;

      md += `## ${getCategoryIcon(category)} ${toJapaneseCategory(category)}\n\n`;

      list.forEach((item, index) => {
        const icon = getIconPath(item.title_ja);

         if (icon) {
           md += `<div style="margin-bottom:-8px;">\n`;
           md += `![](${icon})\n`;
           md += `</div>\n`;
         }
         
         md += `### ${item.title_ja}\n`;
         md += `\n`;

        const generated = cache[item.title_ja]?.text;
        md += `${generated || item.description_ja || ""}\n\n`;

        if (item.link) {
          md += `🔗 ${item.link}\n\n`;
        }

        md += index !== list.length - 1 ? `---\n\n` : `<br><br>\n`;
      });
    }

    fs.writeFileSync('articles/aws-always-free.md', md);
    console.log('📄 Markdown updated!');

  } catch (err) {
    console.error('❌ ERROR:', err);
    process.exit(1);
  }
}

main();
