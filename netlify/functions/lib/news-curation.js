// LLM curation of RSS items: selection, classification, summaries, and
// 4-locale translation. No web search — URLs must come from the feed items,
// enforced in code so the model can never invent a link.
const NEWS_CATEGORIES = ['social', 'community', 'culture', 'local'];
const TRENDING_CATEGORIES = ['debate', 'viral', 'event', 'controversy', 'culture', 'sports', 'community'];

// Hard content filters (safety net beyond the prompt) — crime/insecurity for
// everything, government-PR additionally for trending. Kept in CODE on purpose.
const BANNED_CONTENT = /\b(inseguridad|ensu|crimen|criminal|violen|homicid|feminicid|secuestr|delito|delincuen|nota roja|narco|asesinat|balacera|ejecuci[oó]n|inundaci|desbordamiento|torrencial|socav[oó]n|derrumbe)\b/i;
const GOV_PR = /\b(gallardo|gobernador|alcalde|edil|funcionari|mandatario estatal|aprobaci[oó]n del|desempe[ñn]o del|operativo|ayuntamiento|cabildo|regidor|s[ií]ndico|diputad|congreso del estado|legislatura|secretar[ií]a|gobierno del estado|gobierno (estatal|municipal)|obra p[uú]blica|programa (estatal|municipal|de gobierno|social)|rescate del centro)\b/i;

function itemText(item) {
  return `${item.title_es || ''} ${item.summary_es || ''}`;
}

function feedItemText(feedItem) {
  return feedItem ? `${feedItem.title || ''} ${feedItem.description || ''}` : '';
}

// Filters run on the curated text AND on the linked feed item's own text —
// a clean rewritten title must not smuggle in a crime/gov-PR nota.
function isBannedNews(item, feedItem) {
  return BANNED_CONTENT.test(itemText(item)) || BANNED_CONTENT.test(feedItemText(feedItem));
}

function isBannedTrending(item, feedItem) {
  const own = itemText(item);
  const feed = feedItemText(feedItem);
  return BANNED_CONTENT.test(own) || GOV_PR.test(own) || BANNED_CONTENT.test(feed) || GOV_PR.test(feed);
}

// Place-generic words that appear in most SLP headlines carry no matching signal.
const SIG_STOPWORDS = new Set(['potosi', 'potosina', 'potosino', 'potosinas', 'potosinos', 'mexico']);

// Significant words (len >= 6, accent-stripped) to catch near-duplicate topics.
function sigWords(title) {
  return new Set(
    String(title || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 6 && !SIG_STOPWORDS.has(w))
  );
}

function overlapCount(a, b) {
  let shared = 0;
  for (const w of a) if (b.has(w)) shared++;
  return shared;
}

function tooSimilar(words, accepted) {
  return accepted.some(b => overlapCount(words, b) >= 2);
}

// The model sometimes points a rewritten title at the wrong item index. When
// the curated Spanish title shares no significant word with the actual feed
// item's title, the pairing is wrong — drop it rather than publish a mismatch.
function titleMatchesFeedItem(curated, feedItem) {
  if (!feedItem) return true;
  const a = sigWords(curated.title_es);
  const b = sigWords(feedItem.title);
  if (a.size === 0 || b.size === 0) return true; // too short to judge
  return overlapCount(a, b) >= 1;
}

function str(v) {
  return typeof v === 'string' && v.trim() ? v.trim() : '';
}

// The model occasionally omits some translations. Spanish is mandatory (it's
// the source content); missing locales fall back en -> es, de/ja -> en.
function fillLocales(item) {
  const title_es = str(item.title_es);
  const summary_es = str(item.summary_es);
  if (!title_es || !summary_es) return null;
  const title_en = str(item.title_en) || title_es;
  const summary_en = str(item.summary_en) || summary_es;
  return {
    ...item,
    title_es, summary_es, title_en, summary_en,
    title_de: str(item.title_de) || title_en,
    title_ja: str(item.title_ja) || title_en,
    summary_de: str(item.summary_de) || summary_en,
    summary_ja: str(item.summary_ja) || summary_en,
  };
}

// Fills locale fallbacks and keeps only items whose URL is a real feed URL.
function validateCurated(items, allowedUrls, { requireUrl = true } = {}) {
  const out = [];
  for (const raw of items || []) {
    const item = raw ? fillLocales(raw) : null;
    if (!item) {
      console.error(`Dropped (missing Spanish fields): ${raw && raw.title_es}`);
      continue;
    }
    if (requireUrl && !allowedUrls.has(item.url)) {
      console.error(`Dropped (url not in feeds): ${item.title_es} -> ${item.url}`);
      continue;
    }
    out.push(item);
  }
  return out;
}

function formatFeedItems(feedItems) {
  return feedItems
    .map((item, i) => `${i + 1}. [${item.source}] ${item.title}\n   url: ${item.url}\n   ${item.publishedAt ? `fecha: ${item.publishedAt.slice(0, 10)} — ` : ''}${item.description}`)
    .join('\n');
}

function buildCurationPrompt(feedItems) {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City',
  });

  return `HOY ES: ${today}

Eres el editor de un sitio INDEPENDIENTE que promueve San Luis Potosí a turistas y nuevos residentes (NO es un sitio de gobierno). Abajo tienes notas reales tomadas de los feeds RSS de medios locales. Trabaja SOLO con esas notas: no inventes hechos, cifras ni enlaces.

TAREA 1 — "news": elige EXACTAMENTE 12 notas POSITIVAS o NEUTRALES, todas distintas entre sí (12 notas DIFERENTES de la lista, nunca repitas una nota), ordenadas de mejor a peor (solo las 8 mejores se publican; las extra son tolerancia). Prioriza sociedad civil: comunidad, cultura, arte, deportes, gastronomía, negocios locales, universidades, ciencia, medio ambiente, turismo y vida cotidiana. EVITA nota roja, inseguridad y desastres. EVITA el sesgo de gobierno: no boletines ni logros oficiales, no destaques a gobernador/alcalde/funcionarios; máximo 1 de las 8 puede tocar temas de gobierno y solo si es de utilidad real al ciudadano, redactada neutral. Máximo 4 notas del mismo medio.

TAREA 2 — "trending": identifica los 3 temas de los que MÁS se está hablando según estas notas (temas con varias notas o claramente destacados). Deben ser asuntos DISTINTOS entre sí, con variedad (al menos uno cultural, festivo, deportivo o positivo). Nada de inseguridad/crimen ni propaganda o figuras de gobierno. Cada tema se respalda con la URL de una de las notas.

Cada objeto de "news" y de "trending" DEBE tener:
- "title_es","title_en","title_de","title_ja": titular corto en 4 idiomas.
- "summary_es","summary_en","summary_de","summary_ja": resumen de 2-3 oraciones en 4 idiomas basado SOLO en el título y descripción de la nota. Texto limpio, sin URLs.
- "category": para news una de ${JSON.stringify(NEWS_CATEGORIES)}; para trending una de ${JSON.stringify(TRENDING_CATEGORIES)}.
- "item": el NÚMERO de la nota elegida tal como aparece en la lista (entero). Es la referencia que usaremos para el enlace — no inventes números.
- "priority": entero (1 = más importante).

NOTAS DISPONIBLES:
${formatFeedItems(feedItems)}

CRÍTICO — cada elemento de "news" Y TAMBIÉN cada elemento de "trending" es UN SOLO objeto plano con TODAS estas llaves, sin omitir ningún idioma (nunca separes títulos y resúmenes en objetos distintos, nunca acortes los objetos de trending):
{"item": 4, "category": "culture", "priority": 1, "title_es": "…", "title_en": "…", "title_de": "…", "title_ja": "…", "summary_es": "…", "summary_en": "…", "summary_de": "…", "summary_ja": "…"}

Responde ÚNICAMENTE con un objeto JSON: {"news": [...12 objetos...], "trending": [...3 objetos...]}`;
}

// Strict JSON Schema (OpenAI structured outputs): guarantees every curated
// object carries all locale fields — removes the missing-fields failure class.
const CURATED_ITEM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    item: { type: 'integer' },
    category: { type: 'string' },
    priority: { type: 'integer' },
    title_es: { type: 'string' }, title_en: { type: 'string' },
    title_de: { type: 'string' }, title_ja: { type: 'string' },
    summary_es: { type: 'string' }, summary_en: { type: 'string' },
    summary_de: { type: 'string' }, summary_ja: { type: 'string' },
  },
  required: ['item', 'category', 'priority', 'title_es', 'title_en', 'title_de', 'title_ja', 'summary_es', 'summary_en', 'summary_de', 'summary_ja'],
};

const CURATION_RESPONSE_FORMAT = {
  type: 'json_schema',
  json_schema: {
    name: 'news_curation',
    strict: true,
    schema: {
      type: 'object',
      additionalProperties: false,
      properties: {
        news: { type: 'array', items: CURATED_ITEM_SCHEMA },
        trending: { type: 'array', items: CURATED_ITEM_SCHEMA },
      },
      required: ['news', 'trending'],
    },
  },
};

async function callCurationModel(apiKey, feedItems, temperature = 0.2) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      response_format: CURATION_RESPONSE_FORMAT,
      temperature,
      max_tokens: 16000,
      messages: [{ role: 'user', content: buildCurationPrompt(feedItems) }],
    }),
  });
  if (!response.ok) {
    const errBody = await response.text().catch(() => '');
    throw new Error(`OpenAI API ${response.status}: ${String(errBody).slice(0, 300)}`);
  }
  const data = await response.json();
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!content) throw new Error('OpenAI returned no content');
  return JSON.parse(content);
}

// Resolves each curated object's url/source into a real feed item, so the
// model can never emit a wrong or invented URL. The "item" index is used only
// when it agrees with the curated title (gpt-4o-mini often miscopies indexes);
// otherwise we recover the intended item by best title-word overlap.
function resolveItemRefs(items, feedItems) {
  return (items || []).map(n => {
    if (!n) return n;
    const idx = Number(n.item);
    if (Number.isInteger(idx) && idx >= 1 && idx <= feedItems.length) {
      const f = feedItems[idx - 1];
      if (titleMatchesFeedItem(n, f)) return { ...n, url: f.url, source: f.source };
    }
    const a = sigWords(n.title_es);
    let best = null;
    let bestScore = 0;
    for (const f of feedItems) {
      const score = overlapCount(a, sigWords(f.title));
      if (score > bestScore) { best = f; bestScore = score; }
    }
    if (best && (bestScore >= 2 || (bestScore >= 1 && (a.size <= 2 || sigWords(best.title).size <= 2)))) {
      return { ...n, url: best.url, source: best.source };
    }
    return n; // falls through to plain URL validation
  });
}

// Full pipeline for one attempt: model call -> URL/locale validation -> filters.
// `temperature` escalates across retries so a failed attempt isn't repeated verbatim.
async function curateFromFeeds(apiKey, feedItems, temperature = 0.2) {
  const allowedUrls = new Set(feedItems.map(i => i.url));
  const byUrl = new Map(feedItems.map(i => [i.url, i]));
  const parsed = await callCurationModel(apiKey, feedItems, temperature);

  const seenNewsUrls = new Set();
  const news = validateCurated(resolveItemRefs(parsed.news, feedItems), allowedUrls).filter(n => {
    if (seenNewsUrls.has(n.url)) {
      console.error(`Dropped (duplicate url): ${n.title_es}`);
      return false;
    }
    if (!titleMatchesFeedItem(n, byUrl.get(n.url))) {
      console.error(`Dropped (title/item mismatch): ${n.title_es} -> ${n.url}`);
      return false;
    }
    if (isBannedNews(n, byUrl.get(n.url))) {
      console.error(`Dropped (banned content): ${n.title_es}`);
      return false;
    }
    seenNewsUrls.add(n.url);
    return true;
  });

  const acceptedWords = [];
  const seenTrendingUrls = new Set();
  const trending = [];
  for (const t of validateCurated(resolveItemRefs(parsed.trending, feedItems), allowedUrls)) {
    if (isBannedTrending(t, byUrl.get(t.url)) || seenTrendingUrls.has(t.url)) continue;
    if (!titleMatchesFeedItem(t, byUrl.get(t.url))) continue;
    const words = sigWords(t.title_es);
    if (tooSimilar(words, acceptedWords)) continue;
    acceptedWords.push(words);
    seenTrendingUrls.add(t.url);
    trending.push(t);
    if (trending.length >= 3) break;
  }

  return { news, trending };
}

module.exports = {
  NEWS_CATEGORIES,
  TRENDING_CATEGORIES,
  isBannedNews,
  isBannedTrending,
  sigWords,
  tooSimilar,
  validateCurated,
  resolveItemRefs,
  buildCurationPrompt,
  curateFromFeeds,
};
