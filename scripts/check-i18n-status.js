require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
  const slugs = ['best-parks-for-kids-san-luis-potosi', 'best-brunch-spots-san-luis-potosi'];
  for (const slug of slugs) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug,title,title_es,title_de,title_ja,content,content_es,content_de,content_ja,excerpt,excerpt_es,excerpt_de,excerpt_ja,meta_title,meta_title_es,meta_title_de,meta_title_ja,meta_description,meta_description_es,meta_description_de,meta_description_ja')
      .eq('slug', slug)
      .single();
    if (error) { console.log('ERR', slug, error.message); continue; }
    console.log('===', slug);
    console.log('TITLE   en:', JSON.stringify((data.title || '').slice(0, 80)));
    console.log('TITLE   es:', JSON.stringify((data.title_es || '').slice(0, 80)));
    console.log('TITLE   de:', JSON.stringify((data.title_de || '').slice(0, 80)));
    console.log('TITLE   ja:', JSON.stringify((data.title_ja || '').slice(0, 80)));
    console.log('CONTENT lengths -> en:', (data.content || '').length,
      ' es:', (data.content_es || '').length,
      ' de:', (data.content_de || '').length,
      ' ja:', (data.content_ja || '').length);
    console.log('EXCERPT lengths -> en:', (data.excerpt || '').length,
      ' es:', (data.excerpt_es || '').length,
      ' de:', (data.excerpt_de || '').length,
      ' ja:', (data.excerpt_ja || '').length);
    console.log('META    en:', JSON.stringify((data.meta_title || '').slice(0, 60)));
    console.log('META    es:', JSON.stringify((data.meta_title_es || '').slice(0, 60)));
    console.log('META    de:', JSON.stringify((data.meta_title_de || '').slice(0, 60)));
    console.log('META    ja:', JSON.stringify((data.meta_title_ja || '').slice(0, 60)));
    console.log();
  }
})();
