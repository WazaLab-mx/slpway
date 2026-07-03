// SEO title fixes, July 2026 (idempotent). De-cannibalizes the brunch blog
// post vs the /breakfast-spots-san-luis-potosi page (GSC audit: ~2,700
// impressions at ~0% CTR split between the two):
//   1. Retitles the brunch post to own the "brunch" query space.
//   2. Rewrites the early in-content cross-link anchor to point readers (and
//      Google) at the breakfast page with a breakfast-intent anchor.
// Titles are set unconditionally (same value = no-op); content patches use
// from->to string replacement and report "already corrected" when the old
// string is gone. Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'best-brunch-spots-san-luis-potosi';

const NEW_TITLES = {
  title: 'Brunch in San Luis Potosí: The 10 Spots Locals Pick (2026, with Prices)',
  meta_title: 'Brunch in San Luis Potosí: The 10 Spots Locals Pick (2026, with Prices)',
  title_es: 'Brunch en San Luis Potosí: los 10 lugares que eligen los locales (2026, con precios)',
  meta_title_es: 'Brunch en San Luis Potosí: los 10 lugares que eligen los locales (2026, con precios)',
  title_de: 'Brunch in San Luis Potosí: die 10 Spots, die Locals wählen (2026, mit Preisen)',
  meta_title_de: 'Brunch in San Luis Potosí: die 10 Spots der Locals (2026)',
  title_ja: 'サンルイスポトシのブランチ：地元の人が選ぶ10店（2026年・価格つき）',
  meta_title_ja: 'サンルイスポトシのブランチ：地元の人が選ぶ10店（2026年）',
};

// Early-in-content cross-link anchors -> breakfast-intent anchor text.
const CONTENT_PATCHES = {
  content: [
    ['<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">early breakfast spots guide</a>',
     '<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">where to eat breakfast in San Luis Potosí</a>'],
  ],
  content_es: [
    ['<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">guía de desayunos tempraneros</a>',
     '<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">dónde desayunar en San Luis Potosí</a>'],
  ],
  content_de: [
    ['<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">Frühstücksführer</a>',
     '<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">Guide: Frühstück in San Luis Potosí</a>'],
  ],
  content_ja: [
    ['<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">早朝の朝食スポットガイド</a>',
     '<a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">サンルイスポトシで朝食を食べる場所ガイド</a>'],
  ],
};

const snip = (s) => (s.length > 70 ? s.slice(0, 70) + '…' : s);

function applyPatches(html, patches, label) {
  let out = html || '';
  for (const [from, to] of patches) {
    if (out.includes(from)) {
      const count = out.split(from).length - 1;
      out = out.split(from).join(to);
      console.log(`  [${label}] (${count}x) "${snip(from)}"\n    -> "${snip(to)}"`);
    } else {
      const already = out.includes(to);
      console.log(`  [${label}] NOT FOUND${already ? ' (already corrected)' : ' — REVIEW MANUALLY'}: "${snip(from)}"`);
    }
  }
  return out;
}

async function main() {
  console.log(`===== ${SLUG} =====`);
  const cols = [...Object.keys(NEW_TITLES), ...Object.keys(CONTENT_PATCHES)];
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`id, ${cols.join(', ')}`)
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const update = {};
  for (const [col, value] of Object.entries(NEW_TITLES)) {
    if (data[col] === value) {
      console.log(`  [${col}] already set.`);
    } else {
      console.log(`  [${col}] "${snip(data[col] || '')}"\n    -> "${snip(value)}"`);
      update[col] = value;
    }
  }
  for (const [col, patches] of Object.entries(CONTENT_PATCHES)) {
    const patched = applyPatches(data[col], patches, col);
    if (patched !== (data[col] || '')) update[col] = patched;
  }

  if (Object.keys(update).length === 0) {
    console.log('\nNothing to update (already applied).');
    process.exit(0);
  }

  const { error: upErr } = await supabase.from('blog_posts').update(update).eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log(`\nUpdated columns: ${Object.keys(update).join(', ')}`);

  // Verify: re-fetch, confirm titles match and no stale anchors remain.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select(cols.join(', '))
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }
  let ok = true;
  for (const [col, value] of Object.entries(NEW_TITLES)) {
    if (check[col] !== value) {
      console.error(`VERIFY FAIL [${col}]: got "${snip(check[col] || '')}"`);
      ok = false;
    }
  }
  for (const [col, patches] of Object.entries(CONTENT_PATCHES)) {
    for (const [from, to] of patches) {
      if ((check[col] || '').includes(from)) {
        console.error(`VERIFY FAIL [${col}]: old string still present: "${snip(from)}"`);
        ok = false;
      }
      if (!(check[col] || '').includes(to)) {
        console.error(`VERIFY FAIL [${col}]: new string missing: "${snip(to)}"`);
        ok = false;
      }
    }
  }
  console.log(ok ? 'Verified: titles set and cross-link anchors updated.' : 'Verification found problems — review output.');
  process.exit(ok ? 0 : 1);
}

main();
