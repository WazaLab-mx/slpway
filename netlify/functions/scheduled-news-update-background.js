const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');
const { fetchAllFeeds } = require('./lib/rss-feeds');
const { NEWS_CATEGORIES, TRENDING_CATEGORIES, curateFromFeeds } = require('./lib/news-curation');

const MAX_AI_ATTEMPTS = 3;
const AI_RETRY_BASE_MS = 1500;
const MIN_FEED_ITEMS = 10;
const MIN_ACCEPTABLE_NEWS = 6;

const handler = async () => {
  console.log('Starting scheduled news update (RSS pipeline)...');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Supabase credentials' }) };
  }
  if (!openaiApiKey) {
    console.error('Missing OPENAI_API_KEY — cannot curate news. Aborting without modifying existing data.');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENAI_API_KEY' }) };
  }

  const feedItems = await fetchAllFeeds();
  console.log(`Fetched ${feedItems.length} feed items.`);
  if (feedItems.length < MIN_FEED_ITEMS) {
    console.error('Too few feed items — feeds may be down. Aborting without modifying existing data.');
    return { statusCode: 502, body: JSON.stringify({ error: 'Too few feed items', count: feedItems.length }) };
  }

  let curated = null;
  let best = null;
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_AI_ATTEMPTS; attempt++) {
    console.log(`Curation attempt ${attempt}/${MAX_AI_ATTEMPTS}...`);
    try {
      const result = await curateFromFeeds(openaiApiKey, feedItems, 0.2 + 0.3 * (attempt - 1));
      if (!best || result.news.length > best.news.length) best = result;
      if (result.news.length >= 8) { curated = result; break; }
      lastError = `Only ${result.news.length} valid news items (want 8)`;
      console.error(lastError);
    } catch (err) {
      lastError = err && err.message ? err.message : String(err);
      console.error(`Attempt ${attempt} threw:`, lastError);
    }
    if (attempt < MAX_AI_ATTEMPTS) {
      await new Promise(r => setTimeout(r, AI_RETRY_BASE_MS * Math.pow(2, attempt - 1)));
    }
  }

  // Degraded acceptance: 6-7 clean items still means 3 community cards plus a
  // 3-4 item ticker — far better than publishing nothing and going stale.
  if (!curated && best && best.news.length >= MIN_ACCEPTABLE_NEWS) {
    console.log(`Accepting degraded result with ${best.news.length} news items.`);
    curated = best;
  }

  if (!curated) {
    console.error('All curation attempts failed. Leaving existing news untouched. Last error:', lastError);
    return { statusCode: 502, body: JSON.stringify({ error: 'Curation failed', lastError, attempts: MAX_AI_ATTEMPTS }) };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const errors = [];

  const communityNews = curated.news.slice(0, 3);
  const headlines = curated.news.slice(3, 8);
  const trending = curated.trending;

  console.log('Inserting fresh community_news rows...');
  let communityInserted = 0;
  const { error: communityInsertError } = await supabase
    .from('community_news')
    .insert(communityNews.map((n, i) => ({
      title_es: n.title_es,
      title_en: n.title_en,
      title_de: n.title_de,
      title_ja: n.title_ja,
      summary_es: n.summary_es,
      summary_en: n.summary_en,
      summary_de: n.summary_de,
      summary_ja: n.summary_ja,
      category: NEWS_CATEGORIES.includes(n.category) ? n.category : 'community',
      priority: i + 1,
      // URL stored in `source` column (acts as link target for clickable cards)
      source: n.url,
      active: true,
      published_at: new Date().toISOString(),
      expires_at: getExpiryDate(7),
    })));

  if (communityInsertError) {
    errors.push(`Community insert: ${communityInsertError.message}`);
    console.error('Community insert error:', communityInsertError.message);
  } else {
    communityInserted = communityNews.length;
    const { error: deactivateErr } = await supabase
      .from('community_news')
      .update({ active: false })
      .eq('active', true)
      .lt('published_at', new Date(Date.now() - 1000).toISOString());
    if (deactivateErr) errors.push(`Community deactivate: ${deactivateErr.message}`);
  }

  console.log('Inserting fresh news_headlines rows...');
  let headlinesInserted = 0;
  const { error: headlinesInsertError } = await supabase
    .from('news_headlines')
    .insert(headlines.map((h, i) => ({
      text_es: h.title_es,
      text_en: h.title_en,
      text_de: h.title_de,
      text_ja: h.title_ja,
      summary_es: h.summary_es,
      summary_en: h.summary_en,
      summary_de: h.summary_de,
      summary_ja: h.summary_ja,
      source: h.source || 'San Luis Potosí',
      source_url: h.url,
      priority: i + 1,
      active: true,
      expires_at: getExpiryDate(3),
    })));

  if (headlinesInsertError) {
    errors.push(`Headlines insert: ${headlinesInsertError.message}`);
    console.error('Headlines insert error:', headlinesInsertError.message);
  } else {
    headlinesInserted = headlines.length;
    const { error: deactivateErr } = await supabase
      .from('news_headlines')
      .update({ active: false })
      .eq('active', true)
      .lt('created_at', new Date(Date.now() - 1000).toISOString());
    if (deactivateErr) errors.push(`Headlines deactivate: ${deactivateErr.message}`);
  }

  // Trending topics run alongside the news flow but MUST NOT break it.
  let trendingInserted = 0;
  if (trending.length > 0) {
    try {
      await supabase.from('trending_topics').update({ active: false }).eq('active', true);
      const { error: trendingInsertError } = await supabase
        .from('trending_topics')
        .insert(trending.map((t, i) => ({
          title_es: t.title_es,
          title_en: t.title_en,
          title_de: t.title_de,
          title_ja: t.title_ja,
          summary_es: t.summary_es,
          summary_en: t.summary_en,
          summary_de: t.summary_de,
          summary_ja: t.summary_ja,
          category: TRENDING_CATEGORIES.includes(t.category) ? t.category : 'community',
          source: t.source || 'San Luis Potosí',
          url: t.url,
          priority: i + 1,
          active: true,
        })));
      if (trendingInsertError) {
        errors.push(`Trending insert: ${trendingInsertError.message}`);
        console.error('Trending insert error:', trendingInsertError.message);
      } else {
        trendingInserted = trending.length;
      }
    } catch (err) {
      const msg = err && err.message ? err.message : String(err);
      errors.push(`Trending: ${msg}`);
      console.error('Trending update failed (non-fatal):', msg);
    }
  } else {
    console.log('No clean trending topics this run — keeping previous ones active.');
  }

  const success = errors.length === 0;
  const response = {
    success,
    message: `Inserted ${communityInserted} community news, ${headlinesInserted} headlines, ${trendingInserted} trending (from ${feedItems.length} RSS items)`,
    errors: errors.length ? errors : undefined,
    timestamp: new Date().toISOString(),
  };
  console.log('News update completed:', response);
  return { statusCode: success ? 200 : 500, body: JSON.stringify(response) };
};

function getExpiryDate(days = 1) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

// Run every 6 hours so a single failed curation can recover within the day.
// Times in UTC: 13:00 (7am MX), 19:00 (1pm MX), 01:00 (7pm MX), 07:00 (1am MX)
exports.handler = schedule('0 1,7,13,19 * * *', handler);
