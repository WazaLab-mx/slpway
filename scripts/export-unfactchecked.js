/**
 * Writes plain-text copies of published posts that have no fact-check report.
 * Output goes to the OS temp dir so it is not committed.
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

function stripHtml(html) {
  return (html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function main() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug,title,published_at,content')
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });

  if (error) {
    console.error(error);
    process.exit(1);
  }

  const done = new Set(
    fs
      .readdirSync(path.join(process.cwd(), 'public', 'factchecks'))
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.slice(0, -3))
  );

  const missing = data.filter((p) => !done.has(p.slug));
  const dir = path.join(process.env.TEMP || '/tmp', 'slp-factcheck-src');
  fs.mkdirSync(dir, { recursive: true });

  const index = [];
  for (const post of missing) {
    const text = stripHtml(post.content);
    const body = [
      `TITLE: ${post.title}`,
      `SLUG: ${post.slug}`,
      `PUBLISHED: ${post.published_at}`,
      `URL: https://www.sanluisway.com/blog/${post.slug}`,
      '',
      text,
    ].join('\n');
    fs.writeFileSync(path.join(dir, `${post.slug}.txt`), body, 'utf8');
    index.push(`${post.slug}\t${text.length}\t${post.title}`);
  }

  fs.writeFileSync(path.join(dir, '_index.txt'), index.join('\n'), 'utf8');
  console.log(dir);
  console.log(`MISSING ${missing.length}`);
  console.log(index.join('\n'));
}

main();
