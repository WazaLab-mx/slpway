const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');
const { fetchRedditConversations } = require('./lib/social-reddit');
const { fetchTavilyConversations } = require('./lib/social-tavily');
const { curateSocialTopics } = require('./lib/social-curation');
const { publishSocialTopics } = require('./lib/social-publisher');

async function updateSocialTrends() {
  try {
    const { NEXT_PUBLIC_SUPABASE_URL: url, SUPABASE_SERVICE_ROLE_KEY: key, OPENAI_API_KEY: apiKey } = process.env;
    if (!url || !key || !apiKey) throw new Error('Missing social updater credentials');
    const batches = await Promise.allSettled([
      fetchTavilyConversations(process.env.TAVILY_API_KEY), fetchRedditConversations(),
    ]);
    for (const batch of batches) if (batch.status === 'rejected') console.warn(batch.reason.message);
    const groups = batches.map(batch => batch.status === 'fulfilled' ? batch.value : []);
    const candidates = [];
    for (let index = 0; index < Math.max(...groups.map(group => group.length)); index++) {
      for (const group of groups) if (group[index]) candidates.push(group[index]);
    }
    console.log(`Observed ${candidates.length} eligible social posts and conversations`);
    const supabase = createClient(url, key);
    const { data: community, error } = await supabase.from('community_news')
      .select('title_es, source').eq('active', true);
    if (error) throw new Error(`Read community news: ${error.message}`);
    const topics = await curateSocialTopics(apiKey, candidates, community.map(item => ({ ...item, url: item.source })));
    const published = await publishSocialTopics(supabase, topics);
    console.log(`Published ${published} verified social conversations`);
    return { statusCode: 200, body: JSON.stringify({ published, sources: [...new Set(topics.map(topic => topic.evidence.platform))], checkedAt: new Date().toISOString() }) };
  } catch (error) {
    console.error('Social trends update failed; previous selection retained:', error.message);
    return { statusCode: 502, body: JSON.stringify({ error: error.message, retainedPrevious: true }) };
  }
}

exports.handler = schedule('30 1,7,13,19 * * *', updateSocialTrends);
