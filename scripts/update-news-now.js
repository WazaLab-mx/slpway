require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkMigration() {
  console.log('1. Verificando estructura de tablas para 4 idiomas...');

  const { data: headlineColumns } = await supabase
    .from('news_headlines')
    .select('*')
    .limit(1);

  const missingHeadlineCols = [];
  if (headlineColumns && headlineColumns[0]) {
    if (!('text_de' in headlineColumns[0])) missingHeadlineCols.push('text_de');
    if (!('text_ja' in headlineColumns[0])) missingHeadlineCols.push('text_ja');
    if (!('summary_de' in headlineColumns[0])) missingHeadlineCols.push('summary_de');
    if (!('summary_ja' in headlineColumns[0])) missingHeadlineCols.push('summary_ja');
  }

  const { data: communityColumns } = await supabase
    .from('community_news')
    .select('*')
    .limit(1);

  const missingCommunityCols = [];
  if (communityColumns && communityColumns[0]) {
    if (!('title_de' in communityColumns[0])) missingCommunityCols.push('title_de');
    if (!('title_ja' in communityColumns[0])) missingCommunityCols.push('title_ja');
    if (!('summary_de' in communityColumns[0])) missingCommunityCols.push('summary_de');
    if (!('summary_ja' in communityColumns[0])) missingCommunityCols.push('summary_ja');
  }

  if (missingHeadlineCols.length > 0 || missingCommunityCols.length > 0) {
    console.log('   ⚠️  Ejecuta esta SQL en Supabase Dashboard (SQL Editor):');
    if (missingHeadlineCols.length > 0) {
      console.log('   -- Para news_headlines:');
      missingHeadlineCols.forEach(col => {
        console.log(`   ALTER TABLE news_headlines ADD COLUMN IF NOT EXISTS ${col} TEXT;`);
      });
    }
    if (missingCommunityCols.length > 0) {
      console.log('   -- Para community_news:');
      missingCommunityCols.forEach(col => {
        console.log(`   ALTER TABLE community_news ADD COLUMN IF NOT EXISTS ${col} TEXT;`);
      });
    }
    console.log('');
  } else {
    console.log('   ✓ Tablas listas con soporte para 4 idiomas (es, en, de, ja)');
  }
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
      console.error('   JSON parse failed:', e2.message);
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

function buildNewsPrompt(today) {
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

async function callOpenAIResponses(prompt) {
  const toolTypes = ['web_search', 'web_search_preview'];
  let lastResponse = null;
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

function buildTrendingPrompt(today) {
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

async function fetchTrendingTopics() {
  if (!openaiApiKey) return [];

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  const response = await callOpenAIResponses(buildTrendingPrompt(today));

  if (!response || !response.ok) {
    console.error('   Error de API (trending):', response ? response.status : 'no-response');
    return [];
  }

  const data = await response.json();
  const content = extractResponsesText(data);
  if (!content) return [];

  const parsed = extractJSON(content);
  if (!parsed || !Array.isArray(parsed.trending)) {
    return [];
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

async function fetchNewsWithOpenAI() {
  if (!openaiApiKey) {
    console.log('   No hay API key de OpenAI');
    return null;
  }

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Mexico_City'
  });

  console.log(`   Fecha actual: ${today}`);
  console.log('   Buscando noticias reales con web search...');

  const response = await callOpenAIResponses(buildNewsPrompt(today));

  if (!response || !response.ok) {
    console.error('   Error de API:', response ? response.status : 'no-response');
    return null;
  }

  const data = await response.json();
  const content = extractResponsesText(data);

  if (!content) return null;

  const parsed = extractJSON(content);
  if (!parsed || !Array.isArray(parsed.news)) {
    return null;
  }

  const items = parsed.news.map(sanitizeItem).filter(n =>
    n.url &&
    n.title_es && n.title_en && n.title_de && n.title_ja &&
    n.summary_es && n.summary_en && n.summary_de && n.summary_ja
  );

  if (items.length < 8) {
    console.log(`   Muy pocos items válidos (${items.length}, se necesitan 8)`);
    return null;
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
    url: n.url,
    priority: i + 1
  }));

  return { communityNews, headlines };
}

function getDefaultNews() {
  const year = new Date().getFullYear();
  const nextYear = year + 1;

  return {
    communityNews: [
      {
        title_es: `Gobierno de SLP abre convocatoria para becas universitarias ${nextYear}, más de 5,000 espacios disponibles`,
        title_en: `SLP Government opens ${nextYear} university scholarship applications, over 5,000 spots available`,
        title_de: `SLP-Regierung eröffnet Stipendienbewerbungen für ${nextYear}, über 5.000 Plätze verfügbar`,
        title_ja: `SLP州政府が${nextYear}年大学奨学金の募集を開始、5,000名以上の枠`,
        summary_es: 'Registro abierto en linea. Incluye apoyo para transporte, materiales y manutención mensual.',
        summary_en: 'Online registration open. Includes support for transportation, materials and monthly stipend.',
        summary_de: 'Online-Registrierung geöffnet. Beinhaltet Unterstützung für Transport, Materialien und monatliches Stipendium.',
        summary_ja: 'オンライン登録受付中。交通費、教材費、月額生活費のサポートを含みます。',
        category: 'community',
        priority: 1
      },
      {
        title_es: 'Centro de las Artes presenta nueva exposición de artistas potosinos este mes',
        title_en: 'Arts Center presents new exhibition by local artists this month',
        title_de: 'Kunstzentrum präsentiert diesen Monat neue Ausstellung lokaler Künstler',
        title_ja: '芸術センターが今月、地元アーティストの新展覧会を開催',
        summary_es: 'Entrada gratuita de martes a domingo. Incluye obras de pintura, escultura y fotografía.',
        summary_en: 'Free entry Tuesday to Sunday. Features painting, sculpture and photography works.',
        summary_de: 'Freier Eintritt Dienstag bis Sonntag. Zeigt Werke der Malerei, Skulptur und Fotografie.',
        summary_ja: '火曜日から日曜日まで入場無料。絵画、彫刻、写真作品を展示。',
        category: 'culture',
        priority: 2
      },
      {
        title_es: 'Ayuntamiento inaugura nuevo parque lineal en zona sur de la ciudad',
        title_en: 'City government inaugurates new linear park in southern zone',
        title_de: 'Stadtverwaltung eröffnet neuen Linearpark in der Südzone',
        title_ja: '市政府が南部地区に新しいリニアパークを開設',
        summary_es: 'Incluye ciclovía, áreas de ejercicio y zona de juegos infantiles. Abierto al público.',
        summary_en: 'Includes bike path, exercise areas and playground. Open to the public.',
        summary_de: 'Beinhaltet Radweg, Fitnessbereiche und Spielplatz. Öffentlich zugänglich.',
        summary_ja: '自転車道、運動エリア、子供の遊び場を含む。一般公開中。',
        category: 'local',
        priority: 3
      }
    ],
    headlines: [
      {
        text_es: `BMW Villa de Reyes abre convocatoria de empleo para ${nextYear}, más de 500 vacantes disponibles`,
        text_en: `BMW Villa de Reyes opens ${nextYear} job applications, over 500 positions available`,
        text_de: `BMW Villa de Reyes eröffnet Stellenbewerbungen für ${nextYear}, über 500 Positionen verfügbar`,
        text_ja: `BMW Villa de Reyesが${nextYear}年の求人募集を開始、500以上のポジション`,
        summary_es: 'Postulaciones en línea. Puestos para técnicos, ingenieros y operadores de producción.',
        summary_en: 'Online applications. Positions for technicians, engineers and production operators.',
        summary_de: 'Online-Bewerbungen. Stellen für Techniker, Ingenieure und Produktionsoperateure.',
        summary_ja: 'オンライン応募受付中。技術者、エンジニア、生産オペレーターを募集。',
        source: 'BMW Group',
        priority: 1
      },
      {
        text_es: 'Gobierno estatal anuncia programa de pavimentación para colonias de la zona metropolitana',
        text_en: 'State government announces paving program for metropolitan area neighborhoods',
        text_de: 'Landesregierung kündigt Asphaltierungsprogramm für Stadtvierteln an',
        text_ja: '州政府が大都市圏の住宅地舗装プログラムを発表',
        summary_es: 'Beneficiará a más de 50 colonias con inversión de recursos estatales y federales.',
        summary_en: 'Will benefit over 50 neighborhoods with state and federal investment.',
        summary_de: 'Wird über 50 Stadtteile mit staatlichen und bundesstaatlichen Investitionen unterstützen.',
        summary_ja: '州と連邦の投資により50以上の地区が恩恵を受ける予定。',
        source: 'Gobierno SLP',
        priority: 2
      },
      {
        text_es: 'UASLP abre inscripciones para cursos de educación continua y diplomados',
        text_en: 'UASLP opens enrollment for continuing education courses and certificates',
        text_de: 'UASLP eröffnet Einschreibung für Weiterbildungskurse und Zertifikate',
        text_ja: 'UASLPが継続教育コースと資格講座の登録を開始',
        summary_es: 'Más de 30 opciones en áreas de tecnología, negocios, salud y humanidades.',
        summary_en: 'Over 30 options in technology, business, health and humanities areas.',
        summary_de: 'Über 30 Optionen in Technologie, Wirtschaft, Gesundheit und Geisteswissenschaften.',
        summary_ja: 'テクノロジー、ビジネス、医療、人文科学分野で30以上のコースを提供。',
        source: 'UASLP',
        priority: 3
      },
      {
        text_es: 'Secretaría de Turismo lanza campaña para promover la Huasteca Potosina a nivel nacional',
        text_en: 'Tourism Ministry launches campaign to promote Huasteca Potosina nationwide',
        text_de: 'Tourismusministerium startet Kampagne zur landesweiten Förderung der Huasteca Potosina',
        text_ja: '観光省がウアステカ・ポトシーナの全国プロモーションキャンペーンを開始',
        summary_es: 'Destaca cascadas, gastronomía y cultura de la región como destino imperdible.',
        summary_en: 'Highlights waterfalls, gastronomy and regional culture as must-visit destination.',
        summary_de: 'Hebt Wasserfälle, Gastronomie und regionale Kultur als Must-See-Reiseziel hervor.',
        summary_ja: '滝、美食、地域文化を必見の観光地としてアピール。',
        source: 'Turismo SLP',
        priority: 4
      },
      {
        text_es: 'Zona Industrial de SLP registra llegada de nuevas empresas del sector automotriz',
        text_en: 'SLP Industrial Zone registers arrival of new automotive sector companies',
        text_de: 'SLP-Industriezone verzeichnet Ankunft neuer Automobilunternehmen',
        text_ja: 'SLP工業地帯に新たな自動車関連企業が進出',
        summary_es: 'Las inversiones generarán empleos directos e indirectos en la zona metropolitana.',
        summary_en: 'Investments will create direct and indirect jobs in the metropolitan area.',
        summary_de: 'Investitionen werden direkte und indirekte Arbeitsplätze im Großraum schaffen.',
        summary_ja: '投資により大都市圏で直接・間接雇用が創出される見込み。',
        source: 'SEDECO',
        priority: 5
      }
    ]
  };
}

async function updateNews() {
  console.log('\n2. Actualizando noticias...');

  let newsData = await fetchNewsWithOpenAI();

  if (!newsData || !newsData.headlines?.length) {
    console.log('   Usando noticias por defecto (no se pudo hacer web search)');
    newsData = getDefaultNews();
  } else {
    console.log('   ✓ Noticias reales obtenidas con web search');
  }

  // Deactivate old headlines
  await supabase.from('news_headlines').update({ active: false }).eq('active', true);

  // Insert new headlines with all language translations
  const headlinesToInsert = newsData.headlines.map(h => ({
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
    expires_at: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  }));

  const { error: headlinesError } = await supabase
    .from('news_headlines')
    .insert(headlinesToInsert);

  if (headlinesError) {
    console.error('   Error insertando headlines:', headlinesError.message);
  } else {
    console.log(`   ✓ ${headlinesToInsert.length} titulares insertados`);
  }

  // Deactivate old community news
  await supabase.from('community_news').update({ active: false }).eq('active', true);

  // Insert new community news with all language translations
  // URL stored in `source` column (acts as link target for clickable cards)
  const communityToInsert = newsData.communityNews.map(n => ({
    title_es: n.title_es,
    title_en: n.title_en,
    title_de: n.title_de || n.title_en,
    title_ja: n.title_ja || n.title_en,
    summary_es: n.summary_es,
    summary_en: n.summary_en,
    summary_de: n.summary_de || n.summary_en || '',
    summary_ja: n.summary_ja || n.summary_en || '',
    category: n.category,
    priority: n.priority,
    source: n.url || null,
    active: true,
    published_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  }));

  const { error: communityError } = await supabase
    .from('community_news')
    .insert(communityToInsert);

  if (communityError) {
    console.error('   Error insertando community news:', communityError.message);
  } else {
    console.log(`   ✓ ${communityToInsert.length} noticias comunitarias insertadas`);
  }

  // Trending topics run alongside the news flow but MUST NOT break it.
  try {
    const trending = await fetchTrendingTopics();
    if (trending.length > 0) {
      await supabase.from('trending_topics').update({ active: false }).eq('active', true);
      const trendingToInsert = trending.map(t => ({
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
      }));
      const { error: trendingError } = await supabase
        .from('trending_topics')
        .insert(trendingToInsert);
      if (trendingError) {
        console.error('   Error insertando trending topics:', trendingError.message);
      } else {
        console.log(`   ✓ ${trendingToInsert.length} temas de tendencia insertados`);
      }
    } else {
      console.log('   Sin temas de tendencia (no-fatal)');
    }
  } catch (err) {
    console.error('   Trending fetch falló (no-fatal):', err && err.message ? err.message : String(err));
  }
}

async function main() {
  console.log('=== Actualizando noticias de San Luis Way ===\n');

  await checkMigration();
  await updateNews();

  console.log('\n✅ Proceso completado. Recarga la página para ver las noticias.');
}

main().catch(console.error);
