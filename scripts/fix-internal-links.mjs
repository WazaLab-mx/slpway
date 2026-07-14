import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// [oldHref, newHref] — verified against published slugs and real page routes.
const FIXES = [
  ['/best-brunch-spots-san-luis-potosi', '/blog/best-brunch-spots-san-luis-potosi'],
  ['/blog/best-brunch-spots-slp', '/blog/best-brunch-spots-san-luis-potosi'],
  ['/blog/best-parks-kids-slp', '/blog/best-parks-for-kids-san-luis-potosi'],
  ['/blog/fly-direct-slp-from-texas', '/blog/direct-flights-from-texas-to-san-luis-potosi'],
  ['/directory', '/places'],
  ['/guides/digital-nomad', '/digital-nomad-guide'],
  ['/guides/relocation', '/san-luis-potosi-relocation-support'],
  ['/is-san-luis-potosi-safe-2026', '/blog/is-san-luis-potosi-safe-2026'],
  ['/san-luis-potosi-airport-guide', '/blog/san-luis-potosi-airport-guide'],
  ['/things-to-do-san-luis-potosi-2026', '/blog/things-to-do-san-luis-potosi-2026'],
];
const COLS = ['content', 'content_es', 'content_de', 'content_ja'];

// Replace only inside href attributes (both quote styles) to avoid touching prose.
function applyFixes(text) {
  if (!text) return { text, n: 0 };
  let n = 0;
  for (const [oldH, newH] of FIXES) {
    for (const q of ['"', "'"]) {
      const needle = `href=${q}${oldH}${q}`;
      const repl = `href=${q}${newH}${q}`;
      const parts = text.split(needle);
      if (parts.length > 1) { n += parts.length - 1; text = parts.join(repl); }
    }
  }
  return { text, n };
}

const { data, error } = await s.from('blog_posts').select('id, slug, ' + COLS.join(', '));
if (error) throw error;

let totalRepl = 0, rowsChanged = 0;
for (const row of data) {
  const update = {};
  let rowN = 0;
  for (const c of COLS) {
    const { text, n } = applyFixes(row[c]);
    if (n > 0) { update[c] = text; rowN += n; }
  }
  if (rowN > 0) {
    const { error: upErr } = await s.from('blog_posts').update(update).eq('id', row.id);
    if (upErr) { console.log(`  ✗ ${row.slug}: ${upErr.message}`); continue; }
    rowsChanged++;
    totalRepl += rowN;
    console.log(`  ✓ ${row.slug}: ${rowN} link(s) fixed [${Object.keys(update).join(', ')}]`);
  }
}
console.log(`\nDone. ${totalRepl} replacements across ${rowsChanged} posts.`);
