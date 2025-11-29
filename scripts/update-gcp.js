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

# Google Cloud 無料枠プロダクトまとめ

Google Cloud（GCP）には、アカウント作成直後だけ利用できる  
**12 ヶ月間の無料トライアル枠とは別に**、  
毎月一定の使用量まで **期限なく “ずっと無料” で使い続けられる「Always Free」枠** が存在します。

例えば Cloud Run、BigQuery、Firestore などの実用的なサービスが  
無料範囲内であれば **毎月ずっと課金ゼロ** で使えるため、  
個人開発・小規模 SaaS・学習用途でも非常に強力な基盤になります。

本記事では GCP の Always Free 対象プロダクトについて、  
**「毎月無料で使える上限」** を中心にわかりやすく整理しています。  
コストを抑えながらクラウドを最大活用したい方に最適です。

---

`;

    const body = data
        .map(item => {
            return `## ${item.title}

${item.description}

**上限**: ${item.free_tier}

${item.link}

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
