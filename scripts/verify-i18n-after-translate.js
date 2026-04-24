require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
  const slugs = ['best-parks-for-kids-san-luis-potosi', 'best-brunch-spots-san-luis-potosi'];
  for (const slug of slugs) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug,content,content_es,content_de,content_ja')
      .eq('slug', slug)
      .single();
    if (error) { console.log('ERR', slug, error.message); continue; }
    console.log('===', slug);
    const en = data.content || '';
    const es = data.content_es || '';
    const de = data.content_de || '';
    const ja = data.content_ja || '';
    console.log('EN length:', en.length);
    console.log('ES length:', es.length, '| identical to EN?', es === en);
    console.log('DE length:', de.length, '| identical to EN?', de === en);
    console.log('JA length:', ja.length, '| identical to EN?', ja === en);

    const enKeyMarker = '/blog/factchecks/' + slug;
    console.log('EN has factcheck banner?', en.includes(enKeyMarker));
    console.log('ES has factcheck banner?', es.includes(enKeyMarker));
    console.log('DE has factcheck banner?', de.includes(enKeyMarker));
    console.log('JA has factcheck banner?', ja.includes(enKeyMarker));

    if (de.length > 0) {
      const sample = de.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
      console.log('DE plaintext sample:', sample);
    }
    if (ja.length > 0) {
      const sample = ja.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
      console.log('JA plaintext sample:', sample);
    }
    console.log();
  }
})();
