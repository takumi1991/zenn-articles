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

    const header = `---
title: "Google Cloud Always Free（無料枠一覧）"
emoji: "☁️"
type: "tech"
topics: ["gcp", "free-tier", "cloud"]
published: true
---

# Google Cloud 無料枠プロダクト一覧

Google Cloud（GCP）には、アカウント作成直後の **12 ヶ月無料トライアル** とは別に、  
毎月の使用量が上限内であれば、**期限なく “ずっと無料” で使える Always Free 枠** が存在します。

Cloud Run・Firestore・BigQuery などは、この無料枠だけでも  
小規模アプリやデータ基盤を実用レベルで運用できるのが大きな特徴です。

本記事では、Google Cloud の Always Free 対象プロダクトを  
**「毎月無料で使える上限」** とともにわかりやすくまとめています。

---

`;

    const body = data
        .map(item => {
            return `## ${item.title}

${item.description}

**毎月無料で使える上限**：${item.free_tier}

${item.link}

`;
        })
        .join("\n");

    const footer = `
---

## おわりに

Google Cloud の Always Free 枠は、単なる試用期間ではなく  
**「毎月の上限内であれば永久に無料で使える」** という強力な仕組みです。

特に Cloud Run、Firestore、BigQuery は無料枠だけでも  
本番運用に近い構成が組めるため、個人開発者にとって非常に魅力的です。

ただし無料枠には明確な制限があるため、  
本格運用を行う場合は最新の公式ドキュメントを確認しながら  
コスト管理を行うことをおすすめします。
`;

    const markdown = header + body + footer;

    // フォルダを作成
    const dir = path.dirname(OUTPUT_MD);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_MD, markdown, "utf8");

    console.log("✅ 完了:", OUTPUT_MD);
}

main();
