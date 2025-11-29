# Google Cloud Always Free
import fs from "fs";
import path from "path";

// ==============================
// ▼ 設定
// ==============================
const OUTPUT_MD = "./articles/gcp-always-free.md";
const DATA_JSON_PATH = "./data.json";

console.log("📘 Loading GCP data JSON:", DATA_JSON_PATH);

// ==============================
// ▼ data.json の読み込み
// ==============================
if (!fs.existsSync(DATA_JSON_PATH)) {
    console.error("❌ data.json が存在しません。workflow 側で data.json を生成できていません。");
    process.exit(1);
}

const json = JSON.parse(fs.readFileSync(DATA_JSON_PATH, "utf8"));
const items = json.items || [];

console.log(`📘 ${items.length} 件を Markdown に変換します…`);

// ==============================
// ▼ Markdown 生成関数
// ==============================
function generateFullMarkdown(items, fetchedAt) {
    const header = `---
title: "Google Cloud Always Free（自動更新）"
emoji: "☁️"
type: "tech"
topics: ["gcp", "free-tier", "cloud"]
published: true
---

# Google Cloud Always Free（自動更新）

本記事は Apify Actor により自動取得した **Google Cloud Always Free（常時無料）サービス一覧** を掲載しています。  
GitHub Actions により毎月自動的に上書き更新されます。

最終取得日: ${fetchedAt}

---

`;

    const body = items
        .map((item) => {
            return `## 🌟 ${item.title}

${item.description}

**無料枠**: ${item.free_tier}

🔗 ${item.link}

`;
        })
        .join("\n");

    return header + body;
}

// ==============================
// ▼ Markdown 生成
// ==============================
const markdown = generateFullMarkdown(items, json.fetchedAt);

// articles フォルダがなければ作る
const dir = path.dirname(OUTPUT_MD);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(OUTPUT_MD, markdown, "utf8");

console.log("✅ 完了:", OUTPUT_MD);
