import fs from "fs";
import path from "path";

const INPUT_PATH = "./data.json";
const CATEGORY_MAP_PATH = "./data/gcp-jp-categories-map.json";
const OUTPUT_MD = "./articles/gcp-always-free.md";

const categoryEmoji = {
    "コンピューティング": "🖥️",
    "サーバーレス": "⚡",
    "コンテナ": "📦",
    "ストレージ": "💾",
    "データベース": "🗄️",
    "データ分析": "📈",
    "生成AI": "🧠",
    "会話型AI": "💬",
    "MLとMLOps": "📊",
    "AIインフラ": "🧮",
    "画像・動画・AR API": "🎥",
    "音声・自然言語API": "🗣️",
    "ドキュメントAI": "📄",
    "ネットワーキング": "🌐",
    "Web3": "🪙",
    "ハイブリッド クラウドとマルチクラウド": "🌉",
    "ビジネス インテリジェンス": "📊",
    "デベロッパー ツール": "🛠️",
    "アプリの開発": "📱",
    "インテグレーション サービス": "🔗",
    "オブザーバビリティ": "👀",
    "運用": "⚙️",
    "セキュリティと ID": "🔐",
    "ウェブアプリのホスティング": "🚀",
    "ウェブサイトのホスティング": "🌍",
    "生産性とコラボレーション": "🤝",
    "その他": "📂"
};

async function main() {
    console.log("📘 Loading data.json");

    const raw = fs.readFileSync(INPUT_PATH, "utf8");
    const data = JSON.parse(raw);

    const categoryRaw = fs.readFileSync(CATEGORY_MAP_PATH, "utf8");
    const categoryMap = JSON.parse(categoryRaw);

    if (!data || data.length === 0) {
        console.error("❌ data.json が空です");
        process.exit(1);
    }

    console.log(`📦 ${data.length} 件を取得しました。`);

    // 逆引きマップ
    const serviceToCategory = {};
    for (const [category, services] of Object.entries(categoryMap)) {
        for (const s of services) {
            serviceToCategory[s] = category;
        }
    }

    // グルーピング
    const grouped = {};
    for (const item of data) {
        const cat = serviceToCategory[item.title] || "その他";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
    }

    const orderedCategories = [...Object.keys(categoryMap), "その他"];

    const header = `---
title: "Google Cloud 常時無料枠プロダクト一覧(Always Free Tier products)"
emoji: "☁️"
type: "tech"
topics: ["gcp", "free-tier", "cloud"]
published: true
---

# Google Cloud 常時無料枠プロダクト一覧<br>(Always Free Tier products)

Google Cloud offers Free Tier products that remain free within monthly usage limits, separate from the 12-month trial. This article summarizes the eligible services and their limits. Note: This article covers the Japan region.

Google Cloud Platform(GCP)には、アカウント作成直後の **12 ヶ月無料トライアル** とは別に、  
毎月の使用量が上限内であれば、**期限なく “ずっと無料” で使える 永久無料枠(Free Tier products)** が存在します。

Cloud Run・Firestore・BigQuery などは、この無料枠だけでも  
小規模アプリやデータ基盤を実用レベルで運用できるのが大きな特徴です。

本記事では、Google Cloud の Free Tier products 対象サービスを  
**「毎月無料で使える上限」** とともにまとめています。

---

`;

    const body = orderedCategories
        .filter(cat => grouped[cat]?.length)
        .map(category => {
            const items = grouped[category];

            const section = items.map(item => {
                return `### ${item.title}

${item.description_ja || ""}
毎月無料で使える上限: ${item.free_tier_ja || ""}

${item.description_en || ""}
Free Tier(monthly limits): ${item.free_tier_en || ""}

🔗 ${item.link}
`;
            }).join("\n");

            return `## ${categoryEmoji[category] || ""} ${category}\n\n${section}`;
        })
        .join("\n\n");

    const footer = `
---

## おわりに

Google Cloud の Free Tier products は、単なる試用期間ではなく  
**「毎月の上限内であれば永久に無料で使える」** という大変ありがたいサービスです。

特に Cloud Run、Firestore、BigQuery は無料枠だけでも  
本番運用に近い構成が組めるため、個人開発者や学習者にとって非常に魅力的です。

ただし無料枠には上限があるため、利用前に最新の公式ドキュメントを確認してください。 

---
## 関連リンク：他クラウドサービスの常時無料枠まとめ

AWS の上限付きの常時無料枠 (Always Free Services)
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

Azure の上限付きの常時無料枠 (Always Free Services)
👉 https://zenn.dev/good_sleeper/articles/azure-always-free
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
