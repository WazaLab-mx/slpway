/**
 * Backs the start_date of the Cara Sucia Country Fest sponsor ad to today,
 * so the /admin/newsletter ad selector picks it up immediately.
 *
 * Run:  node scripts/fix-cara-sucia-ad-start-date.js
 */
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

(async () => {
  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('sponsor_ads')
    .update({ start_date: today })
    .ilike('name', '%Cara Sucia Country Fest 2026%')
    .select();

  if (error) {
    console.error('Update failed:', error);
    process.exit(1);
  }

  console.log(`✅ Updated ${data.length} ad(s). start_date is now ${today}.`);
  data.forEach((ad) =>
    console.log(`   - ${ad.id} · placement=${ad.placement} · active=${ad.active} · ${ad.start_date} → ${ad.end_date}`),
  );
})();
