/**
 * Polls Supabase for the test emails just submitted to confirm the
 * Beehiiv webhook is firing into newsletter_subscribers.
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const EMAILS = [
  'webhook-test-2026-05-11@sanluisway.com',
  'webhook-test-2026-05-11b@sanluisway.com',
];

async function check() {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('email, status, source, subscribed_at, confirmed_at')
    .in('email', EMAILS);
  if (error) throw error;
  return data || [];
}

async function main() {
  const DEADLINE_MS = 90_000;
  const start = Date.now();
  let found = [];
  while (Date.now() - start < DEADLINE_MS) {
    found = await check();
    if (found.length === EMAILS.length) break;
    const elapsed = Math.round((Date.now() - start) / 1000);
    process.stdout.write(`  ${elapsed}s — found ${found.length}/${EMAILS.length}\r`);
    await new Promise((r) => setTimeout(r, 5000));
  }
  console.log('');
  if (found.length === 0) {
    console.log('❌ Neither test email arrived in Supabase after 90s — webhook is likely BROKEN or not registered.');
    process.exit(2);
  } else if (found.length < EMAILS.length) {
    console.log(`⚠️  Only ${found.length}/${EMAILS.length} arrived. Webhook may be flaky.`);
  } else {
    console.log(`✅ Both test emails arrived. Webhook is firing.`);
  }
  for (const row of found) {
    console.log(`  ${row.subscribed_at}  status=${row.status}  source=${row.source}  ${row.email}`);
  }
}

main().catch((e) => {
  console.error('❌', e.message);
  process.exit(1);
});
