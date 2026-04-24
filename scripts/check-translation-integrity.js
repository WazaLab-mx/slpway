require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

function countTags(html, tag) {
  const re = new RegExp(`<${tag}\\b`, 'g');
  return (html.match(re) || []).length;
}

function findFactcheckLinks(html, slug) {
  const re = new RegExp(`/blog/factchecks/${slug}`, 'g');
  return (html.match(re) || []).length;
}

(async () => {
  const slugs = ['best-parks-for-kids-san-luis-potosi', 'best-brunch-spots-san-luis-potosi'];
  for (const slug of slugs) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('content,content_es,content_de,content_ja')
      .eq('slug', slug)
      .single();
    if (error) { console.log('ERR', slug, error.message); continue; }
    console.log('===', slug);
    const fields = { en: 'content', es: 'content_es', de: 'content_de', ja: 'content_ja' };
    for (const [loc, field] of Object.entries(fields)) {
      const html = data[field] || '';
      console.log(`  [${loc}] sections:${countTags(html, 'section')}, h2:${countTags(html, 'h2')}, h3:${countTags(html, 'h3')}, img:${countTags(html, 'img')}, a:${countTags(html, 'a')}, table:${countTags(html, 'table')}, factcheck-link:${findFactcheckLinks(html, slug)}`);
      // Critical: image URLs preserved?
      const imgs = (html.match(/src="[^"]+"/g) || []).slice(0, 3);
      if (imgs.length) console.log('    sample imgs:', imgs.join(', '));
    }
    console.log();
  }
})();
