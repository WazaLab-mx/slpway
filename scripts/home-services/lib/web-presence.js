// Second, independent source for each provider: a web search (Firecrawl) that
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

async function search(apiKey, candidate) {
  return fetch('https://api.firecrawl.dev/v2/search', {
    method: 'POST',
    signal: AbortSignal.timeout(45000),
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `"${candidate.name}" San Luis Potosí ${candidate.phone || ''}`.trim(),
      limit: 8, country: 'MX', lang: 'es',
    }),
  });
}

// Firecrawl rate-limits bursts (429); wait as told, then retry.
async function findPresence(apiKey, candidate, attempts = 4) {
  let response;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    response = await search(apiKey, candidate);
    if (response.status !== 429 || attempt === attempts) break;
    const wait = Number(response.headers.get('retry-after')) || 15 * attempt;
    await new Promise(r => setTimeout(r, wait * 1000));
  }
  if (!response.ok) throw new Error(`Firecrawl search HTTP ${response.status}`);
  const data = await response.json();
  const results = (data.data?.web || []).map(r => ({ url: r.url, title: r.title || '', content: r.description || '' }));
  return assessPresence(candidate, results);
}

module.exports = { assessPresence, findPresence, digits };
