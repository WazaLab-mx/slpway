const { sameStory } = require('../../../src/lib/news-section-policy');

async function publishSocialTopics(supabase, topics) {
  if (!topics.length || topics.length > 3) throw new Error('At least one and at most three verified topics required');
  const { data: previous, error: readError } = await supabase.from('trending_topics')
    .select('id, url, title_es, created_at').eq('active', true).order('created_at', { ascending: false });
  if (readError) throw new Error(`Read previous trends: ${readError.message}`);
  const retained = previous.filter(row => !topics.some(topic => sameStory(topic, row))).slice(0, 3 - topics.length);
  const retired = previous.filter(row => !retained.some(kept => kept.id === row.id));
  const rows = topics.map(({ evidence, ...topic }, index) => ({
    ...topic, priority: index + 1, active: false,
    created_at: evidence.observedAt,
  }));
  const { data: inserted, error } = await supabase.from('trending_topics').insert(rows).select('id');
  if (error) throw new Error(`Insert social trends: ${error.message}`);
  const { error: activateError } = await supabase.from('trending_topics')
    .update({ active: true }).in('id', inserted.map(row => row.id));
  if (activateError) throw new Error(`Activate social trends: ${activateError.message}`);
  if (retired.length) {
    const { error: retireError } = await supabase.from('trending_topics')
      .update({ active: false }).in('id', retired.map(row => row.id));
    if (retireError) throw new Error(`Retire previous trends: ${retireError.message}`);
  }
  return inserted.length;
}

module.exports = { publishSocialTopics };
