import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { logger } from '@/lib/logger';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const openaiApiKey = process.env.OPENAI_API_KEY;

const MAX_AI_ATTEMPTS = 3;
const AI_RETRY_BASE_MS = 1500;

interface CommunityNews {
  title_es: string;
  title_en: string;
  title_de: string;
  title_ja: string;
  summary_es: string;
  summary_en: string;
  summary_de: string;
  summary_ja: string;
  category: 'social' | 'community' | 'culture' | 'local';
  priority: number;
  url?: string;
}

interface NewsHeadline {
  text_es: string;
  text_en: string;
  text_de: string;
  text_ja: string;
  summary_es: string;
  summary_en: string;
  summary_de: string;
  summary_ja: string;
  source: string;
  priority: number;
  url?: string;
}

type TrendingCategory = 'debate' | 'viral' | 'event' | 'controversy' | 'culture' | 'sports' | 'community';

interface TrendingTopic {
  title_es: string;
  title_en: string;
  title_de: string;
  title_ja: string;
  summary_es: string;
  summary_en: string;
  summary_de: string;
  summary_ja: string;
  category: TrendingCategory;
  source: string;
  priority: number;
  url?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authHeader = req.headers.authorization;
  const isAuthorized = authHeader === `Bearer ${process.env.CRON_SECRET}`;
  const isDev = process.env.NODE_ENV !== 'production';

  if (!isAuthorized && !isDev) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({ error: 'Missing Supabase credentials' });
  }

  if (!openaiApiKey) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let aiResults: { communityNews: CommunityNews[]; headlines: NewsHeadline[] } | null = null;
  let lastError: string | null = null;

  for (let attempt = 1; attempt <= MAX_AI_ATTEMPTS; attempt++) {
    try {
      aiResults = await fetchNewsWithOpenAI();
      if (aiResults) break;
      lastError = 'fetchNewsWithOpenAI returned null';
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      logger.error(`Attempt ${attempt} failed:`, lastError);
    }
    if (attempt < MAX_AI_ATTEMPTS) {
      await sleep(AI_RETRY_BASE_MS * Math.pow(2, attempt - 1));
    }
  }

  if (!aiResults || aiResults.communityNews.length === 0 || aiResults.headlines.length === 0) {
    return res.status(502).json({
      error: 'OpenAI fetch failed — leaving existing data untouched',
      lastError,
      attempts: MAX_AI_ATTEMPTS
    });
  }

  const { communityNews, headlines } = aiResults;
  const errors: string[] = [];

  const { error: communityInsertError } = await supabase
    .from('community_news')
    .insert(communityNews.map(n => ({
      title_es: n.title_es,
      title_en: n.title_en,
      title_de: n.title_de || n.title_en,
      title_ja: n.title_ja || n.title_en,
      summary_es: n.summary_es,
      summary_en: n.summary_en,
      summary_de: n.summary_de || n.summary_en,
      summary_ja: n.summary_ja || n.summary_en,
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
  } else {
    await supabase
      .from('community_news')
      .update({ active: false })
      .eq('active', true)
      .lt('published_at', new Date(Date.now() - 1000).toISOString());
  }

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
  } else {
    await supabase
      .from('news_headlines')
      .update({ active: false })
      .eq('active', true)
      .lt('created_at', new Date(Date.now() - 1000).toISOString());
  }

  // Trending topics run alongside the news flow but MUST NOT break it.
  let trendingInserted = 0;
  try {
    const trending = await fetchTrendingTopics();
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
      } else {
        trendingInserted = trending.length;
      }
    }
  } catch (err) {
    errors.push(`Trending: ${err instanceof Error ? err.message : String(err)}`);
  }

  return res.status(errors.length ? 500 : 200).json({
    success: errors.length === 0,
    message: `Inserted ${communityNews.length} community news, ${headlines.length} headlines, ${trendingInserted} trending`,
    errors: errors.length ? errors : undefined,
    timestamp: new Date().toISOString()
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const NEWS_CATEGORIES = ['social', 'community', 'culture', 'local'] as const;

const TRENDING_CATEGORIES = ['debate', 'viral', 'event', 'controversy', 'culture', 'sports', 'community'] as const;

function buildNewsPrompt(): string {
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

// OpenAI Responses API returns web citations as inline markdown; strip them so
// only clean prose reaches the DB, and drop tracking params from real URLs.
function stripCitations(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  return value
    .replace(/\s*\(\[[^\]]*\]\([^)]*\)\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

function cleanUrl(url: unknown): string | undefined {
  if (typeof url !== 'string' || !url) return undefined;
  return url.replace(/([?&])utm_[^=]+=[^&]*/g, '$1').replace(/[?&]$/, '');
}

function sanitizeItem<T>(item: T): T {
  const out: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(item as Record<string, unknown>)) {
    out[key] = key === 'url' ? cleanUrl(val) : stripCitations(val);
  }
  return out as T;
}

function extractJsonObject(text: string): any | null {
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
  } catch {
    try {
      return JSON.parse(jsonStr.replace(/,\s*([}\]])/g, '$1'));
    } catch {
      return null;
    }
  }
}

async function callOpenAIResponses(prompt: string): Promise<Response> {
  const toolTypes = ['web_search', 'web_search_preview'];
  let lastResponse: Response | null = null;
  for (const toolType of toolTypes) {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
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
    // Only fall back to the preview tool name when the tool type was rejected.
    if (response.status !== 400) break;
  }
  return lastResponse as Response;
}

function extractResponsesText(data: any): string {
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

async function fetchNewsWithOpenAI(): Promise<{ communityNews: CommunityNews[]; headlines: NewsHeadline[] } | null> {
  if (!openaiApiKey) return null;

  const response = await callOpenAIResponses(buildNewsPrompt());

  if (!response.ok) {
    const errBody = await response.text().catch(() => '');
    throw new Error(`OpenAI API ${response.status}: ${errBody.slice(0, 300)}`);
  }

  const data = await response.json();
  const content = extractResponsesText(data);

  if (!content) {
    throw new Error('OpenAI returned no text content');
  }

  const parsed = extractJsonObject(content);
  if (!parsed) {
    throw new Error(`No JSON found in OpenAI response: ${content.slice(0, 200)}`);
  }

  if (!Array.isArray(parsed.news)) {
    throw new Error('OpenAI JSON missing news array');
  }

  const items = (parsed.news as Record<string, unknown>[])
    .map(n => sanitizeItem(n))
    .filter(n =>
      n.url &&
      n.title_es && n.title_en && n.title_de && n.title_ja &&
      n.summary_es && n.summary_en && n.summary_de && n.summary_ja
    );

  if (items.length < 8) {
    throw new Error(`OpenAI returned too few valid news items (${items.length}, need 8)`);
  }

  const communityNews: CommunityNews[] = items.slice(0, 3).map((n, i) => ({
    title_es: n.title_es as string,
    title_en: n.title_en as string,
    title_de: n.title_de as string,
    title_ja: n.title_ja as string,
    summary_es: n.summary_es as string,
    summary_en: n.summary_en as string,
    summary_de: n.summary_de as string,
    summary_ja: n.summary_ja as string,
    category: NEWS_CATEGORIES.includes(n.category as any) ? (n.category as CommunityNews['category']) : 'community',
    priority: i + 1,
    url: n.url as string
  }));

  const headlines: NewsHeadline[] = items.slice(3, 8).map((n, i) => ({
    text_es: n.title_es as string,
    text_en: n.title_en as string,
    text_de: n.title_de as string,
    text_ja: n.title_ja as string,
    summary_es: n.summary_es as string,
    summary_en: n.summary_en as string,
    summary_de: n.summary_de as string,
    summary_ja: n.summary_ja as string,
    source: (n.source as string) || 'San Luis Potosí',
    priority: i + 1,
    url: n.url as string
  }));

  return { communityNews, headlines };
}

function buildTrendingPrompt(): string {
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

async function fetchTrendingTopics(): Promise<TrendingTopic[]> {
  if (!openaiApiKey) return [];

  const response = await callOpenAIResponses(buildTrendingPrompt());

  if (!response.ok) {
    const errBody = await response.text().catch(() => '');
    throw new Error(`OpenAI API ${response.status}: ${errBody.slice(0, 300)}`);
  }

  const data = await response.json();
  const content = extractResponsesText(data);

  if (!content) {
    throw new Error('OpenAI returned no text content for trending');
  }

  const parsed = extractJsonObject(content);
  if (!parsed) {
    throw new Error(`No JSON found in trending response: ${content.slice(0, 200)}`);
  }

  if (!Array.isArray(parsed.trending)) {
    throw new Error('OpenAI JSON missing trending array');
  }

  const items = (parsed.trending as Record<string, unknown>[])
    .map(n => sanitizeItem(n))
    .filter(n =>
      n.url &&
      n.title_es && n.title_en && n.title_de && n.title_ja &&
      n.summary_es && n.summary_en && n.summary_de && n.summary_ja
    );

  return items.slice(0, 3).map((n, i) => ({
    title_es: n.title_es as string,
    title_en: n.title_en as string,
    title_de: n.title_de as string,
    title_ja: n.title_ja as string,
    summary_es: n.summary_es as string,
    summary_en: n.summary_en as string,
    summary_de: n.summary_de as string,
    summary_ja: n.summary_ja as string,
    category: TRENDING_CATEGORIES.includes(n.category as any) ? (n.category as TrendingCategory) : 'community',
    source: (n.source as string) || 'San Luis Potosí',
    priority: i + 1,
    url: n.url as string
  }));
}

function getExpiryDate(days = 1): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}
