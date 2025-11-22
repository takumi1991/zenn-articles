import { ApifyClient } from 'apify-client';
import fs from 'fs';

async function main() {
  try {
    const client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });

    const actorId = process.env.APIFY_ACTOR_ID;

    console.log("ACTOR ID:", actorId);

    const lastRun = await client.actor(actorId).lastRun({ status: 'SUCCEEDED' });
    const datasetId = lastRun.defaultDatasetId;

    const dataset = await client.dataset(datasetId).listItems();
    const items = dataset.items;

    console.log(`Fetched items: ${items.length}`);

    let md = `# AWS Always Free 一覧\n\n更新日: ${new Date().toISOString().slice(0,10)}\n\n`;

    for (const item of items) {
      md += `## ${item.title}\n\n`;
      if (item.body) {
        const text = item.body.replace(/<[^>]+>/g, '').trim();
        md += `${text}\n\n`;
      } else {
        md += '_No description_\n\n';
      }
    }

    fs.writeFileSync("articles/aws-always-free.md", md);

    console.log("Markdown file updated.");
  } catch (err) {
    console.error("ERROR:", err);
    process.exit(1);
  }
}

main();
