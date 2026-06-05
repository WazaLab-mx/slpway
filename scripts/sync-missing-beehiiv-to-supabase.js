/**
 * Inserts ONLY the Beehiiv active subscribers that are missing from
 * newsletter_subscribers. Does NOT update existing rows (so webhook-set
 * fields like confirmed_at / source are preserved).
 *
 * Idempotent — re-running is a no-op once the gap is closed.
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const BEEHIIV_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB = process.env.BEEHIIV_PUBLICATION_ID;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!BEEHIIV_KEY || !BEEHIIV_PUB || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing env vars.');
  process.exit(1);
}

const API_BASE = 'https://api.beehiiv.com/v2';
const PAGE_LIMIT = 100;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchBeehiivPage(page) {
  const url = `${API_BASE}/publications/${BEEHIIV_PUB}/subscriptions?limit=${PAGE_LIMIT}&page=${page}&expand[]=custom_fields`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${BEEHIIV_KEY}` } });
  const text = await res.text();
  if (!res.ok) throw new Error(`Beehiiv ${res.status}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

async function fetchAllBeehiiv() {
  const all = [];
  let page = 1;
  let totalPages = null;
  while (true) {
    const res = await fetchBeehiivPage(page);
    const rows = res.data || [];
    all.push(...rows);
    totalPages = res.total_pages ?? totalPages;
    process.stdout.write(`  beehiiv page ${page}/${totalPages ?? '?'} — ${all.length}\r`);
    if (!rows.length || (totalPages && page >= totalPages)) break;
    page += 1;
    await new Promise((r) => setTimeout(r, 150));
  }
  console.log('');
  return all;
}

async function fetchSupabaseEmails() {
  const set = new Set();
  const PAGE = 1000;
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .range(from, from + PAGE - 1);
    if (error) throw new Error(`Supabase: ${error.message}`);
    if (!data || data.length === 0) break;
    for (const r of data) set.add(r.email.toLowerCase());
    if (data.length < PAGE) break;
    from += PAGE;
  }
  return set;
}

function toIso(unix) {
  if (!unix) return null;
  return new Date(unix * 1000).toISOString();
}

function extractFirstName(sub) {
  for (const cf of sub.custom_fields || []) {
    const name = (cf?.name || '').toLowerCase();
    if (name === 'first_name' || name === 'firstname' || name === 'first name' || name === 'name') {
      return String(cf.value || '').trim().split(/\s+/)[0] || null;
    }
  }
  return null;
}

function isLikelyTestEmail(email) {
  const e = email.toLowerCase();
  return (
    e.includes('verify-conversion') ||
    e.includes('test-conv-') ||
    e.endsWith('@example.com') ||
    e.startsWith('test@wazalab')
  );
}

async function main() {
  console.log('Paginating Beehiiv...');
  const beehiiv = await fetchAllBeehiiv();
  console.log(`Beehiiv total: ${beehiiv.length}`);

  console.log('Fetching Supabase emails...');
  const existing = await fetchSupabaseEmails();
  console.log(`Supabase total: ${existing.size}`);

  const missing = beehiiv.filter(
    (s) =>
      s.email &&
      s.status === 'active' &&
      !existing.has(s.email.toLowerCase()) &&
      !isLikelyTestEmail(s.email)
  );

  console.log(`\nReal active subscribers missing from Supabase: ${missing.length}`);
  if (missing.length === 0) {
    console.log('✅ Nothing to insert.');
    return;
  }

  const rows = missing.map((s) => ({
    email: s.email.toLowerCase().trim(),
    first_name: extractFirstName(s),
    status: 'active',
    source: `beehiiv:${s.utm_source || s.utm_channel || 'backfill'}`,
    subscribed_at: toIso(s.created),
    confirmed_at: toIso(s.created),
    beehiiv_subscription_id: s.id,
    preferences: {
      utm_source: s.utm_source || null,
      utm_medium: s.utm_medium || null,
      utm_channel: s.utm_channel || null,
      referring_site: s.referring_site || null,
      synced_from: 'beehiiv_backfill_2026-05-11',
    },
  }));

  console.log(`\nSample (first 5):`);
  for (const r of rows.slice(0, 5)) {
    console.log(`  ${r.subscribed_at} ${r.email} (source=${r.source})`);
  }

  const BATCH = 100;
  let inserted = 0;
  let skipped = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert(chunk);
    if (error) {
      // If a row sneaks in via a race, try one-by-one to skip dupes
      console.log(`\nBatch failed (${error.message}); retrying per-row...`);
      for (const row of chunk) {
        const { error: e2 } = await supabase
          .from('newsletter_subscribers')
          .insert([row]);
        if (e2) {
          if (e2.message.includes('duplicate') || e2.message.includes('unique')) {
            skipped += 1;
          } else {
            console.error(`  row failed: ${row.email} — ${e2.message}`);
          }
        } else {
          inserted += 1;
        }
      }
    } else {
      inserted += chunk.length;
    }
    process.stdout.write(`  inserted ${inserted}, skipped ${skipped}\r`);
  }

  console.log(`\n✅ Done. Inserted ${inserted}, skipped (dupes) ${skipped}, total processed ${rows.length}`);

  const { count } = await supabase
    .from('newsletter_subscribers')
    .select('*', { count: 'exact', head: true });
  console.log(`Supabase newsletter_subscribers now has: ${count} rows`);
}

main().catch((err) => {
  console.error('\n❌', err.message);
  if (err.details) console.error('   details:', err.details);
  if (err.hint) console.error('   hint:', err.hint);
  process.exit(1);
});
