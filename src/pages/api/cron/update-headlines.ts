import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { logger } from '@/lib/logger';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

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

  if (!anthropicApiKey) {
    return res.status(500).json({ error: 'Missing ANTHROPIC_API_KEY' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let aiResults: { communityNews: CommunityNews[]; headlines: NewsHeadline[] } | null = null;
  let lastError: string | null = null;

  for (let attempt = 1; attempt <= MAX_AI_ATTEMPTS; attempt++) {
    try {
      aiResults = await fetchNewsWithClaude();
      if (aiResults) break;
      lastError = 'fetchNewsWithClaude returned null';
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
      error: 'Claude fetch failed — leaving existing data untouched',
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

  return res.status(errors.length ? 500 : 200).json({
    success: errors.length === 0,
    message: `Inserted ${communityNews.length} community news, ${headlines.length} headlines`,
    errors: errors.length ? errors : undefined,
    timestamp: new Date().toISOString()
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchNewsWithClaude(): Promise<{ communityNews: CommunityNews[]; headlines: NewsHeadline[] } | null> {
  if (!anthropicApiKey) return null;

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': anthropicApiKey,
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

Busca noticias POSITIVAS/NEUTRALES de San Luis Potosí, México para HOY o esta semana.

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

  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('No JSON found in Claude response');
  }

  const parsed = JSON.parse(jsonMatch[0]);

  if (!Array.isArray(parsed.communityNews) || !Array.isArray(parsed.headlines)) {
    throw new Error('Claude JSON missing communityNews or headlines arrays');
  }

  return {
    communityNews: parsed.communityNews.slice(0, 3),
    headlines: parsed.headlines.slice(0, 5)
  };
}

function getExpiryDate(days = 1): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}
