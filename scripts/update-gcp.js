import fs from "fs";
import path from "path";

const INPUT_PATH = "./data.json";
const OUTPUT_MD = "./articles/gcp-always-free.md";

async function main() {
    console.log("📘 Loading data.json");

    const raw = fs.readFileSync(INPUT_PATH, "utf8");
    const data = JSON.parse(raw);

    if (!data || data.length === 0) {
        console.error("❌ data.json が空です");
        process.exit(1);
    }

    console.log(`📦 ${data.length} 件を取得しました。`);

    const header = `---
title: "Google Cloud 無料枠プロダクト一覧(Free Tier products)"
emoji: "☁️"
type: "tech"
topics: ["gcp", "free-tier", "cloud"]
published: true
---

# Google Cloud 無料枠プロダクト一覧<br>(Free Tier products)

Google Cloud offers Free Tier products that remain free within monthly usage limits, separate from the 12-month trial. This article summarizes the eligible services and their limits. Note: This article covers the Japan region.

Google Cloud(GCP)には、アカウント作成直後の **12 ヶ月無料トライアル** とは別に、  
毎月の使用量が上限内であれば、**期限なく “ずっと無料” で使える 永久無料枠(Free Tier products)** が存在します。

Cloud Run・Firestore・BigQuery などは、この無料枠だけでも  
小規模アプリやデータ基盤を実用レベルで運用できるのが大きな特徴です。

本記事では、Google Cloud の Free Tier products 対象サービスを  
**「毎月無料で使える上限」** とともにまとめています。

---

`;

    const body = data
        .map(item => {
            return `## ${item.title}

${item.description_ja || ""}
毎月無料で使える上限: ${item.free_tier_ja || ""}

${item.description_en || ""}
Free Tier(monthly limits): ${item.free_tier_en || ""}

🔗 ${item.link}

`;
        })
        .join("\n");

    const footer = `
---

## おわりに

Google Cloud の Free Tier products は、単なる試用期間ではなく  
**「毎月の上限内であれば永久に無料で使える」** という大変ありがたいサービスです。

特に Cloud Run、Firestore、BigQuery は無料枠だけでも  
本番運用に近い構成が組めるため、個人開発者や学習者にとって非常に魅力的です。

ただし無料枠には明確な制限があるため、  
利用前に最新の公式ドキュメントを確認してください。  
`;

    const markdown = header + body + footer;

    const dir = path.dirname(OUTPUT_MD);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_MD, markdown, "utf8");

    console.log("✅ 完了:", OUTPUT_MD);
}

main();
