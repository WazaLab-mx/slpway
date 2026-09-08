function normalizeText(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function normalizeUrl(value) {
  try {
    const url = new URL(value);
    for (const key of [...url.searchParams.keys()]) {
      if (/^utm_/i.test(key) || ['fbclid', 'gclid', 'msclkid'].includes(key.toLowerCase())) url.searchParams.delete(key);
    }
    url.searchParams.sort();
    return `${url.hostname.replace(/^www\./, '')}${url.pathname.replace(/\/+$/, '')}${url.search}`;
  } catch {
    return '';
  }
}

function sameStory(first, second) {
  const firstUrl = normalizeUrl(first.url || first.sourceUrl);
  const secondUrl = normalizeUrl(second.url || second.sourceUrl);
  if (firstUrl && firstUrl === secondUrl) return true;
  const firstTitle = normalizeText(first.title_es || first.titleEs);
  const secondTitle = normalizeText(second.title_es || second.titleEs);
  if (!firstTitle || !secondTitle) return false;
  if (firstTitle === secondTitle) return true;
  const stopwords = new Set(['potosi', 'potosina', 'potosino', 'potosinas', 'potosinos']);
  const words = title => new Set(title.split(' ').filter(word => word.length >= 6 && !stopwords.has(word)));
  const firstWords = words(firstTitle);
  const secondWords = words(secondTitle);
  const shared = [...firstWords].filter(word => secondWords.has(word)).length;
  return shared >= 2 && shared / Math.min(firstWords.size, secondWords.size) >= 0.6;
}

// A platform mention or the medical use of "viral" does not establish social buzz.
function hasSocialEvidence(text) {
  const normalized = normalizeText(text);
  const platform = /\b(redes sociales|reddit|tiktok|facebook|instagram|youtube|twitter|en x|social media)\b/;
  const conversation = /\b(viral|viralizo|viralizaron|viralizado|viraliza|viralizan|tendencia|tendencias|debate|reacciones|comentarios|respuestas|conversacion|conversaciones|memes|compartido|compartieron|visualizaciones|views|reactions|comments|replies|discussion|trending)\b/;
  return platform.test(normalized) && conversation.test(normalized);
}

function selectDistinctTrending(topics, communityNews) {
  const accepted = [];
  for (const topic of topics) {
    if (!hasSocialEvidence(`${topic.title_es || topic.titleEs || ''} ${topic.summary_es || topic.summaryEs || ''}`)) continue;
    if ([...communityNews, ...accepted].some(other => sameStory(topic, other))) continue;
    accepted.push(topic);
    if (accepted.length === 3) break;
  }
  return accepted;
}

module.exports = { sameStory, hasSocialEvidence, selectDistinctTrending };
