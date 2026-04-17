import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ICON_MAP } from "./aws-icon-map.js";

/* ======================================
   ▼ 設定
   ====================================== */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash-lite" });

const CACHE_PATH = 'scripts/cache/aws_cache_en.json'; // ←分離
const BATCH_SIZE = 5;

const TTL_MS = 30 * 24 * 60 * 60 * 1000;

/* ======================================
   ▼ キャッシュ
   ====================================== */
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    const text = fs.readFileSync(CACHE_PATH, 'utf8');
    if (!text.trim()) return {};
    return JSON.parse(text);
  } catch {
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
   ▼ Gemini（英語版）
   ====================================== */
async function generateDescription(title, description, retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const prompt = `
Write a concise explanation (~150 words) of the following AWS service in English.

# Service
${title}

# Description
${description}

- First sentence: what it does
- Include use cases
- No bullet points
`;

      const result = await model.generateContent(prompt);
      return (await result.response).text().trim();

    } catch (e) {
      console.warn(`⚠️ Retry ${i + 1} failed:`, e.status);

      // 503 or rate limitだけリトライ
      if (i === retries - 1) break;

      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }

  // 🔥 フォールバック（これが重要）
  console.warn(`❌ fallback used: ${title}`);
  return description; // 元の説明使う
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
   ▼ アイコン
   ====================================== */
function getIconPath(name) {
  let key = ICON_MAP[name];

  if (!key) {
    key = name
      .replace(/^Amazon |^AWS /, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  return `https://raw.githubusercontent.com/takumi1991/zenn-articles/main/images/services/${key}.png`;
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

      await Promise.all(
        batch.map(async (item) => {
          const key = item.title_en;
          const entry = cache[key];

          if (entry && !isExpired(entry)) {
            console.log(`⚡ cache hit: ${key}`);
            return;
          }

          console.log(`🤖 generating: ${key}`);

          const text = await generateDescription(
            item.title_en,
            item.description_en
          );

          cache[key] = { text, updatedAt: Date.now() };
          saveCache(cache);

          await new Promise(r => setTimeout(r, 1000));
        })
      );
    }

    /* ===== Markdown生成 ===== */
    let md = `---
title: "AWS Always Free Services (Complete List)"
emoji: "🟧"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS Always Free Services (Complete List)

AWS offers a set of services under the **Always Free tier**, which allows you to use certain resources within defined limits at no cost indefinitely. Unlike the standard Free Tier that expires after 12 months, these services remain available beyond the initial period.

Each service has usage limits (e.g., requests, storage, compute), and exceeding them results in pay-as-you-go charges.

This article provides a complete list of AWS Always Free services for learning, prototyping, and cost-efficient development.

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

      md += `## ${getCategoryIcon(category)} ${category}\n\n`;

      list.forEach((item, index) => {

        md += `### ${item.title_en}\n\n`;

        const generated = cache[item.title_en]?.text;
        md += `${generated || item.description_en || ""}\n\n`;

        if (item.link) {
          md += `🔗 ${item.link}\n\n`;
        }

        md += index !== list.length - 1 ? `---\n\n` : `<br><br>\n`;
      });
    }

   md += `
   
     
   ## Related: Always Free tiers in other clouds
   
   Azure Always Free
   👉 https://zenn.dev/good_sleeper/articles/azure-always-free-en
   
   `;

    fs.writeFileSync('articles/aws-always-free-en.md', md);
    console.log('📄 EN Markdown updated!');

  } catch (err) {
    console.error('❌ ERROR:', err);
    process.exit(1);
  }
}

main();
