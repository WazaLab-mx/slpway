const DAY = 86400000;
const LOCAL = /san\s*luis\s*potos[ií]|#?slp\b|potosin[oa]s?|huasteca|tangamanga|cerro de san pedro/i;

function postIdentity(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    const host = url.hostname.replace(/^www\./, '');
    const patterns = {
      'x.com': ['X (Twitter)', /^\/(?:[\w]+|i)\/status\/\d+/],
      'instagram.com': ['Instagram', /^\/(?:p|reel)\/[\w-]+/],
      'facebook.com': ['Facebook', /^\/(?:groups\/\d+|[\w.]+)\/(?:posts|videos)\/(?:[^/]+\/)?\d+/],
      'tiktok.com': ['TikTok', /^\/@[\w.]+\/video\/\d+/],
    };
    const definition = patterns[host];
    const path = definition && url.pathname.match(definition[1])?.[0];
    return path ? { platform: definition[0], url: `https://${host}${path}` } : null;
  } catch { return null; }
}

function countMetric(match, type) {
  if (!match) return null;
  const display = match[1];
  const multiplier = /k$/i.test(display) ? 1000 : /m$/i.test(display) ? 1000000 : 1;
  const value = Number(display.replace(/,/g, '').replace(/[km]$/i, '')) * multiplier;
  return Number.isFinite(value) ? { type, value, display } : null;
}

function readEvidence(result, platform) {
  // Snippets can mix related posts. Only the extracted primary page is evidence.
  const raw = result.raw_content?.split(/More posts from|Related posts|You may also like/i)[0];
  if (!raw) return null;
  const stamp = platform === 'X (Twitter)'
    ? raw.match(/\d{1,2}:\d{2}\s*[AP]M\s*·\s*([A-Z][a-z]+ \d{1,2}, \d{4})/)
    : platform === 'Instagram' ? raw.match(/(?:Photo|Video) by [^\n]+? on ([A-Z][a-z]+ \d{1,2}, \d{4})\./)
      : raw.match(/(?:Published|Posted)[:\s]+([A-Z][a-z]+ \d{1,2}, \d{4})/);
  const timestamp = Date.parse(stamp?.[1] ? `${stamp[1]} UTC` : result.published_date || '');
  if (!Number.isFinite(timestamp)) return null;
  const count = '(\\d[\\d,]*(?:\\.\\d+)?[KMkm]?)';
  let metric;
  let primary = raw;
  if (platform === 'X (Twitter)') {
    const afterStamp = raw.slice(raw.indexOf(stamp?.[0] || '') + (stamp?.[0].length || 0));
    metric = countMetric(afterStamp.match(new RegExp(`^\\s*${count}\\s*Views`, 'i')), 'views');
    primary = raw.slice(0, raw.indexOf(stamp?.[0] || '')).trim();
  } else if (platform === 'Instagram') {
    const replies = (raw.match(/\nReply\n/g) || []).length;
    metric = replies >= 2 ? { type: 'replies', value: replies, display: String(replies) } : null;
    primary = result.title.match(/on Instagram:\s*"([\s\S]*)"/)?.[1] || '';
  } else {
    const metrics = raw.split(/All reactions:/i)[1] || '';
    metric = countMetric(metrics.slice(0, 160).match(new RegExp(`${count}\\s*(?:comments|comentarios)`, 'i')), 'comments');
    primary = raw.split(/All reactions:|Comments/i)[0];
  }
  if (!metric || (metric.type === 'views' ? metric.value < 1000 : metric.value < 2)) return null;
  const caption = primary.match(/on X:\s*"([\s\S]*?)(?:"|\n\s*(?:Image \d|[^\n]+\n@))/)?.[1] || primary;
  return { publishedAt: new Date(timestamp).toISOString(), metric, description: caption.slice(0, 3500), dateEvidence: stamp?.[0] || result.published_date };
}

function collectTavilyConversations(results, now = Date.now()) {
  const accepted = new Map();
  for (const result of results) {
    const identity = postIdentity(result.url);
    if (!identity) continue;
    const evidence = readEvidence(result, identity.platform);
    if (!evidence || !LOCAL.test(evidence.description)) continue;
    const published = Date.parse(evidence.publishedAt);
    if (published > now || published < now - 7 * DAY) continue;
    accepted.set(identity.url, {
      ...identity, ...evidence, id: identity.url, title: evidence.description.slice(0, 180),
      source: `${identity.platform} · Tavily`, evidenceKind: 'indexed_post',
      observedAt: new Date(now).toISOString(), comments: [],
      score: Math.log10(evidence.metric.value + 1) / Math.sqrt(1 + (now - published) / DAY),
    });
  }
  return [...accepted.values()].sort((a, b) => b.score - a.score).slice(0, 12);
}

async function fetchTavilyConversations(apiKey) {
  if (!apiKey) throw new Error('Missing TAVILY_API_KEY');
  const month = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const searches = [
    { query: '"San Luis Potosí" (cultura OR comida OR festival OR concierto) inurl:status', include_domains: ['x.com'] },
    { query: `"San Luis Potosí" "${month}"`, include_domains: ['instagram.com','tiktok.com'] },
    { query: '"San Luis Potosí" comunidad recomendaciones conversación', include_domains: ['facebook.com'] },
  ];
  const batches = await Promise.allSettled(searches.map(async search => {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST', signal: AbortSignal.timeout(60000),
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...search, search_depth: 'advanced', max_results: 10,
        time_range: 'week', include_raw_content: 'text', include_answer: false }),
    });
    if (!response.ok) throw new Error(`Tavily search HTTP ${response.status}`);
    const data = await response.json();
    return data.results || [];
  }));
  if (batches.every(batch => batch.status === 'rejected')) throw new Error('All Tavily social searches failed');
  for (const batch of batches) if (batch.status === 'rejected') console.warn(batch.reason.message);
  const results = batches.flatMap(batch => batch.status === 'fulfilled' ? batch.value : []);
  const pending = [...new Map(results.filter(result => !result.raw_content && postIdentity(result.url))
    .map(result => [result.url, result])).values()].slice(0, 6);
  if (pending.length) {
    try {
      const response = await fetch('https://api.tavily.com/extract', {
        method: 'POST', signal: AbortSignal.timeout(60000),
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: pending.map(result => result.url), extract_depth: 'advanced', format: 'text' }),
      });
      if (!response.ok) throw new Error(`Tavily extraction HTTP ${response.status}`);
      const extracted = await response.json();
      for (const page of extracted.results || []) {
        const source = results.find(result => postIdentity(result.url)?.url === postIdentity(page.url)?.url);
        if (source) source.raw_content = page.raw_content;
      }
    } catch (error) { console.warn(error.message); }
  }
  const candidates = collectTavilyConversations(results);
  console.log(`Tavily: ${results.length} search results, ${candidates.length} posts with dated activity evidence`);
  return candidates;
}

module.exports = { collectTavilyConversations, fetchTavilyConversations };
