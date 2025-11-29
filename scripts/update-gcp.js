import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = process.env.APIFY_ACTOR_ID_GCP;

const OUTPUT_PATH = path.join('articles', 'gcp-always-free.md');

async function fetchActorOutput() {
    console.log("Fetching GCP Always Free data from Apify...");

    // 最新の Actor run を取得
    const runsRes = await fetch(
        `https://api.apify.com/v2/actors/${ACTOR_ID}/runs?token=${APIFY_TOKEN}`
    );
    const runsJson = await runsRes.json();
    const runId = runsJson.data.items[0].id;

    console.log(`Latest Run ID: ${runId}`);

    // KV ストアから JSON を取得
    const kvRes = await fetch(
        `https://api.apify.com/v2/actor-runs/${runId}/key-value-stores/GCP_ALWAYS_FREE/records/GCP_ALWAYS_FREE?disableRedirect=true&token=${APIFY_TOKEN}`
    );

    const data = await kvRes.json();
    return data;
}

function generateMarkdown(data) {
    let md = `# Google Cloud Always Free\n\n`;
    md += `最終更新日: ${data.fetchedAt}\n\n`;

    for (const item of data.items) {
        md += `## 🌟 ${item.title}\n`;
        md += `${item.description}\n`;
        md += `**無料枠**：${item.free_tier}  \n`;
        md += `${item.link}\n\n`;
        md += `---\n\n`;
    }

    return md;
}

(async () => {
    try {
        const data = await fetchActorOutput();
        const markdown = generateMarkdown(data);

        fs.writeFileSync(OUTPUT_PATH, markdown);
        console.log("Updated gcp-always-free.md successfully!");

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
