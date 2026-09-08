const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');
const { fetchRedditConversations } = require('./lib/social-reddit');
const { curateSocialTopics } = require('./lib/social-curation');
const { publishSocialTopics } = require('./lib/social-publisher');

async function updateSocialTrends() {
  try {
    const { NEXT_PUBLIC_SUPABASE_URL: url, SUPABASE_SERVICE_ROLE_KEY: key, OPENAI_API_KEY: apiKey } = process.env;
    if (!url || !key || !apiKey) throw new Error('Missing social updater credentials');
    const candidates = await fetchRedditConversations();
    console.log(`Observed ${candidates.length} active Reddit conversations`);
    const supabase = createClient(url, key);
    const { data: community, error } = await supabase.from('community_news')
      .select('title_es, source').eq('active', true);
    if (error) throw new Error(`Read community news: ${error.message}`);
    const topics = await curateSocialTopics(apiKey, candidates, community.map(item => ({ ...item, url: item.source })));
    const published = await publishSocialTopics(supabase, topics);
    console.log(`Published ${published} verified social conversations`);
    return { statusCode: 200, body: JSON.stringify({ published, sources: ['Reddit'], checkedAt: new Date().toISOString() }) };
  } catch (error) {
    console.error('Social trends update failed; previous selection retained:', error.message);
    return { statusCode: 502, body: JSON.stringify({ error: error.message, retainedPrevious: true }) };
  }
}

exports.handler = schedule('30 1,7,13,19 * * *', updateSocialTrends);
