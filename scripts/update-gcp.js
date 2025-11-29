import { ApifyClient } from "apify-client";
import fs from "fs";
import path from "path";

const DATASET_ID = "Lvnyi6fUL1M1mHB2N";
const OUTPUT_MD = "./articles/gcp-always-free.md";

async function main() {
    console.log("📘 Fetching dataset from Apify:", DATASET_ID);

    const client = new ApifyClient({
        token: process.env.APIFY_TOKEN
    });

    // Dataset から items を取得
    const dataset = await client.dataset(DATASET_ID).listItems();
    const data = dataset.items || [];

    if (data.length === 0) {
        console.error("❌ Dataset に items がありません。");
        process.exit(1);
    }

    console.log(`📦 ${data.length} 件を取得しました。`);

    const fetchedAt = new Date().toISOString();

    const header = `---
title: "Google Cloud Always Free（自動更新）"
emoji: "☁️"
type: "tech"
topics: ["gcp", "free-tier", "cloud"]
published: true
---

# Google Cloud Always Free（自動更新）

本記事は **Google Cloud Always Free（常時無料）サービス一覧** を掲載しています。  

---

`;

    const body = data
        .map(item => {
            return `## 🌟 ${item.title}

${item.description}

**無料枠**: ${item.free_tier}

🔗 ${item.link}

`;
        })
        .join("\n");

    const markdown = header + body;

    // フォルダを作成
    const dir = path.dirname(OUTPUT_MD);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_MD, markdown, "utf8");

    console.log("✅ 完了:", OUTPUT_MD);
}

main();
