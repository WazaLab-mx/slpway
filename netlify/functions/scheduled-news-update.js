const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');

const MAX_AI_ATTEMPTS = 3;
const AI_RETRY_BASE_MS = 1500;

const handler = async () => {
  console.log('Starting scheduled news update...');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Supabase credentials' }) };
  }

  if (!anthropicApiKey) {
    console.error('Missing ANTHROPIC_API_KEY — cannot fetch fresh news. Aborting without modifying existing data.');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing ANTHROPIC_API_KEY' }) };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let aiResults = null;
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_AI_ATTEMPTS; attempt++) {
    console.log(`Claude fetch attempt ${attempt}/${MAX_AI_ATTEMPTS}...`);
    try {
      aiResults = await fetchNewsWithClaude(anthropicApiKey);
      if (aiResults) break;
      lastError = 'fetchNewsWithClaude returned null';
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
    console.error('All Claude attempts failed. Leaving existing news untouched. Last error:', lastError);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Claude fetch failed', lastError, attempts: MAX_AI_ATTEMPTS })
    };
  }

  const { communityNews, headlines } = aiResults;
  if (!communityNews.length || !headlines.length) {
    console.error('Claude returned empty results. Aborting without modifying existing data.');
    return { statusCode: 502, body: JSON.stringify({ error: 'Claude returned empty results' }) };
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

  const success = errors.length === 0;
  const response = {
    success,
    message: `Inserted ${communityInserted} community news, ${headlinesInserted} headlines`,
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

async function fetchNewsWithClaude(apiKey) {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 8000,
      tools: [{
        type: 'web_search_20250305',
        name: 'web_search',
        max_uses: 5
      }],
      messages: [{
        role: 'user',
        content: `HOY ES: ${today}

Busca noticias POSITIVAS/NEUTRALES de San Luis Potosí, México de hoy o esta semana.

IMPORTANTE - 4 IDIOMAS: Cada campo de texto debe tener versiones en español (_es), inglés (_en), alemán (_de) y japonés (_ja).
IMPORTANTE - RESÚMENES DETALLADOS: 2-3 oraciones con cifras específicas, nombres de empresas/funcionarios, fechas, e impacto.
IMPORTANTE - URLs REALES: Cada item DEBE incluir el campo "url" con un enlace REAL y verificable a la nota original (medio mexicano: elsoldesanluis.com.mx, planoinformativo.com, pulsoslp.com.mx, slp.gob.mx, codigosanluis.com, etc.). NUNCA inventes URLs. Si no tienes una URL real, omite ese item.

Devuelve SOLO JSON puro sin markdown ni backticks. Formato exacto:

{"communityNews":[{"title_es":"...","title_en":"...","title_de":"...","title_ja":"...","summary_es":"...","summary_en":"...","summary_de":"...","summary_ja":"...","category":"community","priority":1,"url":"https://..."}],"headlines":[{"text_es":"...","text_en":"...","text_de":"...","text_ja":"...","summary_es":"...","summary_en":"...","summary_de":"...","summary_ja":"...","source":"...","url":"https://...","priority":1}]}

Genera exactamente 3 communityNews y 5 headlines, todos con URL real.`
      }]
    })
  });

  if (!response.ok) {
    const errBody = await response.text().catch(() => '');
    throw new Error(`Anthropic API ${response.status}: ${errBody.slice(0, 300)}`);
  }

  const data = await response.json();

  let content = '';
  for (const block of data.content || []) {
    if (block.type === 'text') {
      content += block.text;
    }
  }

  if (!content) {
    throw new Error('Claude returned no text content');
  }

  const parsed = extractJSON(content);
  if (!parsed) {
    throw new Error('Failed to extract JSON from Claude response');
  }
  if (!Array.isArray(parsed.communityNews) || !Array.isArray(parsed.headlines)) {
    throw new Error('Claude JSON missing communityNews or headlines arrays');
  }

  return {
    communityNews: parsed.communityNews.slice(0, 3),
    headlines: parsed.headlines.slice(0, 5)
  };
}

function getExpiryDate(days = 1) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

// Run every 6 hours so a single failed Claude call can recover within the day.
// Times in UTC: 13:00 (7am MX), 19:00 (1pm MX), 01:00 (7pm MX), 07:00 (1am MX)
exports.handler = schedule('0 1,7,13,19 * * *', handler);
