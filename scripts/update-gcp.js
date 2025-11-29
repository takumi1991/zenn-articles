import fs from 'fs';
import fetch from 'node-fetch';

const TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = process.env.APIFY_ACTOR_ID_GCP;

async function fetchActorOutput(runId) {
  const url = `https://api.apify.com/v2/actor-runs/${runId}/key-value-stores/ALWAYS_FREE_GCP/records/ALWAYS_FREE_GCP?disableRedirect=true&token=${TOKEN}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch JSON: ${res.status}`);
  }

  return await res.json();
}

async function run() {
  console.log("Fetching GCP Always Free data...");

  const runRes = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${TOKEN}`,
    { method: "POST" }
  );
  const runJson = await runRes.json();
  const runId = runJson.data.id;

  let status = "RUNNING";
  while (status !== "SUCCEEDED") {
    const st = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${TOKEN}`
    );
    const stJson = await st.json();
    status = stJson.data.status;
    console.log("STATUS:", status);
    if (status !== "SUCCEEDED") await new Promise(r => setTimeout(r, 5000));
  }

  const data = await fetchActorOutput(runId);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  console.log("DONE.");
}

run();
