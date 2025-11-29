import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

//
// 1. Apify の output.json を読み込む
//
const INPUT_PATH = process.env.APIFY_JSON_PATH || "./output.json"; 
const OUTPUT_MD = "./articles/aws-always-free.md";

function stripHtml(html) {
    if (!html) return "";
    const dom = new JSDOM(html);
    return dom.window.document.body.textContent.trim();
}

function buildServiceMarkdown(item) {
    const title = item.title || item.heading || "Untitled Service";
    const bodyText = stripHtml(item.body);
    return `## ${title}\n${bodyText}\n`;
}

function generateFullMarkdown(items) {
    const header = `---
title: "AWS Always Free 一覧（自動更新）"
emoji: "☁️"
type: "tech"
topics: ["aws", "free-tier"]
published: true
---

# AWS Always Free 一覧（自動更新）

本記事は Apify Actor により自動取得した **AWS Always Free サービス一覧（タイトル＋概要）** を掲載しています。  
GitHub Actions により毎月自動的に上書き更新されます。

---

`;

    const servicesMd = items
        .map((item) => buildServiceMarkdown(item))
        .join("\n");

    return header + servicesMd;
}

// --------------------
// メイン処理
// --------------------

console.log("📘 Loading Apify JSON:", INPUT_PATH);

const json = JSON.parse(fs.readFileSync(INPUT_PATH, "utf8"));

console.log(`📘 ${json.length} 件を Markdown に変換します…`);

const markdown = generateFullMarkdown(json);

// articles フォルダがなければ作る
const dir = path.dirname(OUTPUT_MD);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(OUTPUT_MD, markdown, "utf8");

console.log("✅ 完了: ", OUTPUT_MD);
