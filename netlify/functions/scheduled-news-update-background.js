const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');

const MAX_AI_ATTEMPTS = 3;
const AI_RETRY_BASE_MS = 1500;

const handler = async () => {
  console.log('Starting scheduled news update...');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Supabase credentials' }) };
  }

  if (!openaiApiKey) {
    console.error('Missing OPENAI_API_KEY — cannot fetch fresh news. Aborting without modifying existing data.');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENAI_API_KEY' }) };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let aiResults = null;
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_AI_ATTEMPTS; attempt++) {
    console.log(`OpenAI fetch attempt ${attempt}/${MAX_AI_ATTEMPTS}...`);
    try {
      aiResults = await fetchNewsWithOpenAI(openaiApiKey);
      if (aiResults) break;
      lastError = 'fetchNewsWithOpenAI returned null';
    } catch (err) {
      lastError = err && err.message ? err.message : String(err);
      console.error(`Attempt ${attempt} threw:`, lastError);
    }
    if (attempt < MAX_AI_ATTEMPTS) {
      const wait = AI_RETRY_BASE_MS * Math.pow(2, attempt - 1);
      console.log(`Waiting ${wait}ms before retry...`);
      await sleep(wait);
    }
  }

  if (!aiResults) {
    console.error('All OpenAI attempts failed. Leaving existing news untouched. Last error:', lastError);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'OpenAI fetch failed', lastError, attempts: MAX_AI_ATTEMPTS })
    };
  }

  const { communityNews, headlines } = aiResults;
  if (!communityNews.length || !headlines.length) {
    console.error('OpenAI returned empty results. Aborting without modifying existing data.');
    return { statusCode: 502, body: JSON.stringify({ error: 'OpenAI returned empty results' }) };
  }

  const errors = [];
  let communityInserted = 0;
  let headlinesInserted = 0;

  console.log('Inserting fresh community_news rows...');
  const { error: communityInsertError } = await supabase
    .from('community_news')
    .insert(communityNews.map(n => ({
      title_es: n.title_es,
      title_en: n.title_en,
      title_de: n.title_de || n.title_en,
      title_ja: n.title_ja || n.title_en,
      summary_es: n.summary_es || '',
      summary_en: n.summary_en || '',
      summary_de: n.summary_de || n.summary_en || '',
      summary_ja: n.summary_ja || n.summary_en || '',
      category: n.category,
      priority: n.priority,
      // URL stored in `source` column (acts as link target for clickable cards)
      source: n.url || null,
      active: true,
      published_at: new Date().toISOString(),
      expires_at: getExpiryDate(7)
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
  const { error: headlinesInsertError } = await supabase
    .from('news_headlines')
    .insert(headlines.map(h => ({
      text_es: h.text_es,
      text_en: h.text_en,
      text_de: h.text_de || h.text_en,
      text_ja: h.text_ja || h.text_en,
      summary_es: h.summary_es || '',
      summary_en: h.summary_en || '',
      summary_de: h.summary_de || h.summary_en || '',
      summary_ja: h.summary_ja || h.summary_en || '',
      source: h.source,
      source_url: h.url || null,
      priority: h.priority,
      active: true,
      expires_at: getExpiryDate(3)
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
  try {
    console.log('Fetching trending conversation topics...');
    const trending = await fetchTrendingTopics(openaiApiKey);
    if (trending.length > 0) {
      await supabase.from('trending_topics').update({ active: false }).eq('active', true);
      const { error: trendingInsertError } = await supabase
        .from('trending_topics')
        .insert(trending.map(t => ({
          title_es: t.title_es,
          title_en: t.title_en || t.title_es,
          title_de: t.title_de || t.title_en,
          title_ja: t.title_ja || t.title_en,
          summary_es: t.summary_es,
          summary_en: t.summary_en || t.summary_es,
          summary_de: t.summary_de || t.summary_en,
          summary_ja: t.summary_ja || t.summary_en,
          category: t.category,
          source: t.source || null,
          url: t.url || null,
          priority: t.priority,
          active: true
        })));
      if (trendingInsertError) {
        errors.push(`Trending insert: ${trendingInsertError.message}`);
        console.error('Trending insert error:', trendingInsertError.message);
      } else {
        trendingInserted = trending.length;
      }
    }
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    errors.push(`Trending: ${msg}`);
    console.error('Trending fetch failed (non-fatal):', msg);
  }

  const success = errors.length === 0;
  const response = {
    success,
    message: `Inserted ${communityInserted} community news, ${headlinesInserted} headlines, ${trendingInserted} trending`,
    errors: errors.length ? errors : undefined,
    timestamp: new Date().toISOString()
  };
  console.log('News update completed:', response);
  return { statusCode: success ? 200 : 500, body: JSON.stringify(response) };
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractJSON(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  const raw = fenced ? fenced[1].trim() : text;

  const start = raw.indexOf('{');
  if (start === -1) return null;

  let depth = 0;
  let end = -1;
  for (let i = start; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) { end = i; break; } }
    else if (ch === '"') {
      i++;
      while (i < raw.length && raw[i] !== '"') { if (raw[i] === '\\') i++; i++; }
    }
  }

  if (end === -1) return null;
  const jsonStr = raw.substring(start, end + 1);

  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    const cleaned = jsonStr.replace(/,\s*([}\]])/g, '$1');
    try {
      return JSON.parse(cleaned);
    } catch (e2) {
      console.error('JSON parse failed:', e2.message);
      return null;
    }
  }
}

// OpenAI Responses API returns web citations as inline markdown; strip them so
// only clean prose reaches the DB, and drop tracking params from real URLs.
function stripCitations(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/\s*\(\[[^\]]*\]\([^)]*\)\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

function cleanUrl(url) {
  if (typeof url !== 'string' || !url) return undefined;
  return url.replace(/([?&])utm_[^=]+=[^&]*/g, '$1').replace(/[?&]$/, '');
}

function sanitizeItem(item) {
  const out = {};
  for (const [key, val] of Object.entries(item)) {
    out[key] = key === 'url' ? cleanUrl(val) : stripCitations(val);
  }
  return out;
}

const NEWS_CATEGORIES = ['social', 'community', 'culture', 'local'];

const TRENDING_CATEGORIES = ['debate', 'viral', 'event', 'controversy', 'culture', 'sports', 'community'];

function buildNewsPrompt() {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  return `HOY ES: ${today}

Eres el editor de noticias locales de San Luis Potosí, México. Busca en la web (haz VARIAS búsquedas) noticias POSITIVAS o NEUTRALES de San Luis Potosí de hoy o esta semana (comunidad, cultura, vida local, economía, empleo, gobierno, turismo, seguridad).

Devuelve un objeto JSON con UN SOLO array llamado "news" que contenga EXACTAMENTE 8 objetos, cada uno una noticia real y distinta.

Cada objeto DEBE tener estos campos:
- "title_es","title_en","title_de","title_ja": el titular en 4 idiomas (español, inglés, alemán, japonés).
- "summary_es","summary_en","summary_de","summary_ja": resumen de 2-3 oraciones en 4 idiomas, con cifras, nombres, fechas e impacto. Texto limpio, SIN URLs ni citas markdown.
- "category": una de "community","culture","local","social".
- "source": nombre del medio (ej. "El Sol de San Luis", "Pulso SLP", "Gobierno SLP").
- "url": enlace REAL y verificable a la nota original (elsoldesanluis.com.mx, planoinformativo.com, pulsoslp.com.mx, slp.gob.mx, codigosanluis.com, imei.slp.gob.mx, quadratin.com.mx, etc.). La URL va SOLO en este campo. NUNCA inventes URLs.
- "priority": número entero.

CRÍTICO - FORMATO: Tu respuesta DEBE empezar con '{' y terminar con '}'. Sin preámbulo, sin explicación, sin markdown, sin backticks. SOLO el objeto JSON con las 8 noticias.`;
}

async function callOpenAIResponses(apiKey, prompt) {
  const toolTypes = ['web_search', 'web_search_preview'];
  let lastResponse = null;
  for (const toolType of toolTypes) {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        tools: [{ type: toolType }],
        input: prompt,
        max_output_tokens: 9000
      })
    });
    if (response.ok) return response;
    lastResponse = response;
    if (response.status !== 400) break;
  }
  return lastResponse;
}

function extractResponsesText(data) {
  if (typeof data.output_text === 'string' && data.output_text.trim()) {
    return data.output_text;
  }
  let text = '';
  for (const item of data.output || []) {
    if (item.type === 'message') {
      for (const c of item.content || []) {
        if (c.type === 'output_text') text += c.text;
      }
    }
  }
  return text;
}

function buildTrendingPrompt() {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  return `HOY ES: ${today}

Eres el editor de conversación social de San Luis Potosí, México. Busca en la web (haz VARIAS búsquedas) los 3 temas que MÁS dominan la conversación pública y social en San Luis Potosí AHORA MISMO: de qué está hablando, debatiendo o comentando la gente (debates cívicos y urbanos, momentos virales, grandes eventos, deportes, cultura, festivales, decisiones de gobierno o de ciudad que se están discutiendo).

Estos temas pueden ser animados o debatidos (la polémica de un evento o concierto, una obra o decisión urbana que se discute, algo viral), pero DEBEN ser REALES y estar respaldados por una fuente. IMPORTANTE — este bloque aparece en un sitio que PROMUEVE San Luis Potosí a turistas y nuevos residentes: EVITA por completo temas de inseguridad, crimen, violencia o nota roja, y NO uses estadísticas de percepción de inseguridad. Prefiere temas cívicos, culturales, deportivos, de eventos, virales y comunitarios. NO inventes rumores, NO difames, NO acuses de delitos ni señales a personas identificadas.

Devuelve un objeto JSON con UN SOLO array llamado "trending" que contenga EXACTAMENTE 3 objetos, cada uno un tema distinto.

Cada objeto DEBE tener estos campos:
- "title_es","title_en","title_de","title_ja": el tema en 4 idiomas (español, inglés, alemán, japonés), corto.
- "summary_es","summary_en","summary_de","summary_ja": 2-3 oraciones en 4 idiomas que expliquen QUÉ se está diciendo y POR QUÉ es tendencia. Texto limpio, SIN URLs ni citas markdown.
- "category": una de "debate","viral","event","controversy","culture","sports","community".
- "source": nombre del medio o plataforma (ej. "El Sol de San Luis", "Pulso SLP", "X/Twitter", "Facebook").
- "url": enlace REAL y verificable (nota local que cubre el tema o fuente pública). La URL va SOLO en este campo. NUNCA inventes URLs.
- "priority": número entero.

CRÍTICO - FORMATO: Tu respuesta DEBE empezar con '{' y terminar con '}'. Sin preámbulo, sin explicación, sin markdown, sin backticks. SOLO el objeto JSON con los 3 temas.`;
}

async function fetchTrendingTopics(apiKey) {
  const response = await callOpenAIResponses(apiKey, buildTrendingPrompt());

  if (!response || !response.ok) {
    const errBody = response ? await response.text().catch(() => '') : '';
    const status = response ? response.status : 'no-response';
    throw new Error(`OpenAI API ${status}: ${String(errBody).slice(0, 300)}`);
  }

  const data = await response.json();
  const content = extractResponsesText(data);

  if (!content) {
    throw new Error('OpenAI returned no text content for trending');
  }

  const parsed = extractJSON(content);
  if (!parsed || !Array.isArray(parsed.trending)) {
    throw new Error('OpenAI JSON missing trending array');
  }

  const items = parsed.trending.map(sanitizeItem).filter(n =>
    n.url &&
    n.title_es && n.title_en && n.title_de && n.title_ja &&
    n.summary_es && n.summary_en && n.summary_de && n.summary_ja
  );

  return items.slice(0, 3).map((n, i) => ({
    title_es: n.title_es,
    title_en: n.title_en,
    title_de: n.title_de,
    title_ja: n.title_ja,
    summary_es: n.summary_es,
    summary_en: n.summary_en,
    summary_de: n.summary_de,
    summary_ja: n.summary_ja,
    category: TRENDING_CATEGORIES.includes(n.category) ? n.category : 'community',
    source: n.source || 'San Luis Potosí',
    priority: i + 1,
    url: n.url
  }));
}

async function fetchNewsWithOpenAI(apiKey) {
  const response = await callOpenAIResponses(apiKey, buildNewsPrompt());

  if (!response || !response.ok) {
    const errBody = response ? await response.text().catch(() => '') : '';
    const status = response ? response.status : 'no-response';
    throw new Error(`OpenAI API ${status}: ${String(errBody).slice(0, 300)}`);
  }

  const data = await response.json();
  const content = extractResponsesText(data);

  if (!content) {
    throw new Error('OpenAI returned no text content');
  }

  const parsed = extractJSON(content);
  if (!parsed) {
    throw new Error('Failed to extract JSON from OpenAI response');
  }
  if (!Array.isArray(parsed.news)) {
    throw new Error('OpenAI JSON missing news array');
  }

  const items = parsed.news.map(sanitizeItem).filter(n =>
    n.url &&
    n.title_es && n.title_en && n.title_de && n.title_ja &&
    n.summary_es && n.summary_en && n.summary_de && n.summary_ja
  );

  if (items.length < 8) {
    throw new Error(`OpenAI returned too few valid news items (${items.length}, need 8)`);
  }

  const communityNews = items.slice(0, 3).map((n, i) => ({
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
    url: n.url
  }));

  const headlines = items.slice(3, 8).map((n, i) => ({
    text_es: n.title_es,
    text_en: n.title_en,
    text_de: n.title_de,
    text_ja: n.title_ja,
    summary_es: n.summary_es,
    summary_en: n.summary_en,
    summary_de: n.summary_de,
    summary_ja: n.summary_ja,
    source: n.source || 'San Luis Potosí',
    priority: i + 1,
    url: n.url
  }));

  return { communityNews, headlines };
}

function getExpiryDate(days = 1) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

// Run every 6 hours so a single failed OpenAI call can recover within the day.
// Times in UTC: 13:00 (7am MX), 19:00 (1pm MX), 01:00 (7pm MX), 07:00 (1am MX)
exports.handler = schedule('0 1,7,13,19 * * *', handler);
