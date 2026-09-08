async function publishSocialTopics(supabase, topics) {
  if (topics.length < 3) throw new Error('At least three verified topics required to replace the current selection');
  const { data: previous, error: readError } = await supabase.from('trending_topics').select('id').eq('active', true);
  if (readError) throw new Error(`Read previous trends: ${readError.message}`);
  const rows = topics.map(({ evidence, ...topic }, index) => ({
    ...topic, priority: index + 1, active: false,
    created_at: evidence.observedAt,
  }));
  const { data: inserted, error } = await supabase.from('trending_topics').insert(rows).select('id');
  if (error) throw new Error(`Insert social trends: ${error.message}`);
  const { error: activateError } = await supabase.from('trending_topics')
    .update({ active: true }).in('id', inserted.map(row => row.id));
  if (activateError) throw new Error(`Activate social trends: ${activateError.message}`);
  if (previous.length) {
    const { error: retireError } = await supabase.from('trending_topics')
      .update({ active: false }).in('id', previous.map(row => row.id));
    if (retireError) throw new Error(`Retire previous trends: ${retireError.message}`);
  }
  return inserted.length;
}

module.exports = { publishSocialTopics };
