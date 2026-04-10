import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";

function formatItem(item) {
  return `## ${item.title_en}

${item.description_en}

${item.description_ja}

---

**Free Tier (${item.period === "always" ? "Always Free" : "12 months"})**  
${item.free_tier}

🔗 ${item.url}

`;
}

async function main() {
  const raw = fs.readFileSync(INPUT, "utf8");
  const data = JSON.parse(raw);

  if (!data.length) {
    console.error("❌ data empty");
    process.exit(1);
  }

  // ソート（安定）
  data.sort((a, b) =>
    a.title_en.localeCompare(b.title_en)
  );

  const header = `---
title: "Azure 無料枠一覧 (Free Services)"
emoji: "🔵"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Azure 無料サービス一覧 (Free Services)

Microsoft Azure には、12 ヶ月無料トライアルとは別に、  
一定の使用量まで無料で利用できるサービスが存在します。

This article summarizes Azure free services, including Always Free and 12-month free tiers.

---

`;

  const body = data.map(formatItem).join("\n");

  const footer = `
---

## 注意

無料枠には上限があります。超過すると課金されます。  
必ず公式ページで最新情報を確認してください。
`;

  const markdown = header + body + footer;

  const dir = path.dirname(OUTPUT);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT, markdown, "utf8");

  console.log("✅ Zenn記事生成:", OUTPUT);
}

main();
