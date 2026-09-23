// Second, independent source for each provider: a web search (Tavily) that
// looks for the business outside Google and checks that its phone matches.
const SOCIAL = /(^|\.)(facebook|instagram|tiktok)\.com$/i;
const IGNORED = /(^|\.)(google\.[a-z.]+|goo\.gl|waze\.com)$/i;

function digits(phone) {
  return String(phone || '').replace(/\D/g, '').slice(-10);
}

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; }
}

function nameTokens(name) {
  return String(name).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .split(/[^a-z0-9]+/).filter(t => t.length >= 4);
}

// Pure: turns search results into presence signals.
function assessPresence(candidate, results) {
  const phone = digits(candidate.phone);
  const tokens = nameTokens(candidate.name);
  const independent = results.filter(r => {
    const host = hostOf(r.url);
    if (!host || IGNORED.test(host)) return false;
    const text = `${r.title} ${r.content || ''}`.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    return tokens.some(t => text.includes(t));
  });
  const phoneConfirmed = phone.length === 10 && independent.some(r =>
    `${r.title} ${r.content || ''}`.replace(/\D/g, '').includes(phone));
  const social = independent.find(r => SOCIAL.test(hostOf(r.url)));
  return {
    sources: independent.slice(0, 5).map(r => r.url),
    phoneConfirmed,
    socialUrl: social ? social.url : null,
  };
}

async function findPresence(apiKey, candidate) {
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    signal: AbortSignal.timeout(45000),
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `"${candidate.name}" San Luis Potosí ${candidate.phone || ''}`.trim(),
      search_depth: 'basic', max_results: 8, include_answer: false,
    }),
  });
  if (!response.ok) throw new Error(`Tavily search HTTP ${response.status}`);
  const data = await response.json();
  return assessPresence(candidate, data.results || []);
}

module.exports = { assessPresence, findPresence, digits };
