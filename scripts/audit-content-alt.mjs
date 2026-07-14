import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const COLS = ['content', 'content_es', 'content_de', 'content_ja'];

const { data, error } = await s
  .from('blog_posts')
  .select('slug, status, ' + COLS.join(', '))
  .eq('status', 'published');
if (error) throw error;

const imgRe = /<img\b[^>]*>/gi;
const altRe = /\balt\s*=\s*("([^"]*)"|'([^']*)')/i;

let totalImgs = 0, missing = 0, empty = 0;
const offenders = [];
for (const row of data) {
  let rowMissing = 0, rowEmpty = 0, rowImgs = 0;
  for (const c of COLS) {
    const body = row[c];
    if (!body) continue;
    for (const tag of body.match(imgRe) || []) {
      rowImgs++; totalImgs++;
      const m = tag.match(altRe);
      if (!m) { rowMissing++; missing++; }
      else if (!(m[2] || m[3] || '').trim()) { rowEmpty++; empty++; }
    }
  }
  if (rowMissing + rowEmpty > 0) offenders.push({ slug: row.slug, rowMissing, rowEmpty, rowImgs });
}

offenders.sort((a, b) => (b.rowMissing + b.rowEmpty) - (a.rowMissing + a.rowEmpty));
console.log(`Published posts: ${data.length} | content <img> tags: ${totalImgs}`);
console.log(`Missing alt: ${missing} | empty alt: ${empty}\n`);
for (const o of offenders) {
  console.log(`  ${String(o.rowMissing + o.rowEmpty).padStart(3)} bad / ${o.rowImgs} imgs  ${o.slug}  (missing:${o.rowMissing} empty:${o.rowEmpty})`);
}
if (!offenders.length) console.log('  All content images have non-empty alt text. ✓');
