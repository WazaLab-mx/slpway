require('dotenv').config();
const BEEHIIV_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB = process.env.BEEHIIV_PUBLICATION_ID;

const EMAILS = [
  'webhook-test-2026-05-11@sanluisway.com',
  'webhook-test-2026-05-11b@sanluisway.com',
];

async function lookup(email) {
  const url = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB}/subscriptions/by_email/${encodeURIComponent(email)}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${BEEHIIV_KEY}` } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Beehiiv ${res.status}: ${await res.text()}`);
  return (await res.json()).data;
}

(async () => {
  for (const e of EMAILS) {
    const r = await lookup(e);
    if (!r) {
      console.log(`${e} → NOT in Beehiiv`);
    } else {
      console.log(`${e} → status=${r.status} created=${new Date(r.created * 1000).toISOString()} id=${r.id}`);
    }
  }
})();
