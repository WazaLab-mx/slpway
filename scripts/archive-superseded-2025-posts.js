/**
 * Archives the two 2025 blog posts that were superseded by their 2026 editions.
 * Setting status to 'archived' drops them from getBlogPosts / getStaticPaths /
 * the sitemap (all filter status='published'); the 308 redirects in
 * next.config.js consolidate their URLs onto the 2026 versions.
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUGS = [
  'cost-of-living-san-luis-potosi-2025',
  'guia-completa-rentar-casa-san-luis-potosi-2025',
];

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .update({ status: 'archived' })
    .in('slug', SLUGS)
    .select('slug, status');

  if (error) {
    console.error('Update failed:', error.message);
    process.exit(1);
  }
  console.log('Archived:', data.map((r) => `${r.slug} -> ${r.status}`).join(', '));
}

main();
