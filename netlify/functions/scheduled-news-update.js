const { schedule } = require('@netlify/functions');
const { createClient } = require('@supabase/supabase-js');

const handler = async () => {
  console.log('Starting scheduled news update...');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Supabase credentials' }) };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const results = { headlines: 0, communityNews: 0, errors: [], usedAI: false };

  try {
    let communityNews = [];
    let headlines = [];

    // Use Claude AI to search and generate news
    if (anthropicApiKey) {
      console.log('Fetching news with Claude AI...');
      const aiResults = await fetchNewsWithClaude(anthropicApiKey);
      if (aiResults) {
        communityNews = aiResults.communityNews;
        headlines = aiResults.headlines;
        results.usedAI = true;
        console.log(`AI returned ${communityNews.length} community news and ${headlines.length} headlines`);
      }
    }

    // Fallback to defaults if AI didn't return results
    if (communityNews.length === 0) {
      console.log('Using default community news');
      communityNews = getDefaultCommunityNews();
    }
    if (headlines.length === 0) {
      console.log('Using default headlines');
      headlines = getDefaultHeadlines();
    }

    // Update community_news table
    console.log('Updating community_news table...');
    await supabase.from('community_news').update({ active: false }).eq('active', true);

    const { error: communityError } = await supabase
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
        active: true,
        published_at: new Date().toISOString(),
        expires_at: getExpiryDate(7)
      })));

    if (communityError) {
      results.errors.push(`Community: ${communityError.message}`);
      console.error('Community news error:', communityError.message);
    } else {
      results.communityNews = communityNews.length;
    }

    // Update news_headlines table
    console.log('Updating news_headlines table...');
    await supabase.from('news_headlines').update({ active: false }).eq('active', true);

    const { error: headlinesError } = await supabase
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
        priority: h.priority,
        active: true,
        expires_at: getExpiryDate(3)
      })));

    if (headlinesError) {
      results.errors.push(`Headlines: ${headlinesError.message}`);
      console.error('Headlines error:', headlinesError.message);
    } else {
      results.headlines = headlines.length;
    }

    const response = {
      success: results.errors.length === 0,
      message: `Updated ${results.communityNews} community news, ${results.headlines} headlines`,
      usedAI: results.usedAI,
      errors: results.errors.length > 0 ? results.errors : undefined,
      timestamp: new Date().toISOString()
    };

    console.log('News update completed:', response);
    return { statusCode: 200, body: JSON.stringify(response) };
  } catch (error) {
    console.error('Scheduled news update failed:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to update news' }) };
  }
};

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

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
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

Cada resumen debe tener 2-3 oraciones con cifras, nombres e impacto.

Devuelve SOLO JSON puro sin markdown ni backticks. Formato exacto:

{"communityNews":[{"title_es":"...","title_en":"...","summary_es":"...","summary_en":"...","category":"community","priority":1}],"headlines":[{"text_es":"...","text_en":"...","summary_es":"...","summary_en":"...","source":"...","priority":1}]}

Genera exactamente 3 communityNews y 5 headlines.`
        }]
      })
    });

    if (!response.ok) {
      console.error('Anthropic API error:', response.status);
      return null;
    }

    const data = await response.json();

    let content = '';
    for (const block of data.content || []) {
      if (block.type === 'text') {
        content += block.text;
      }
    }

    if (!content) return null;

    const parsed = extractJSON(content);
    if (!parsed || !Array.isArray(parsed.communityNews) || !Array.isArray(parsed.headlines)) {
      return null;
    }

    return {
      communityNews: parsed.communityNews.slice(0, 3),
      headlines: parsed.headlines.slice(0, 5)
    };
  } catch (error) {
    console.error('Claude fetch error:', error);
    return null;
  }
}

function getExpiryDate(days = 1) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

function getDefaultCommunityNews() {
  const nextYear = new Date().getFullYear() + 1;
  return [
    {
      title_es: `Gobierno de SLP abre convocatoria para becas universitarias ${nextYear}`,
      title_en: `SLP Government opens ${nextYear} university scholarship applications`,
      title_de: `SLP-Regierung eröffnet Stipendienbewerbungen für ${nextYear}`,
      title_ja: `SLP州政府が${nextYear}年大学奨学金の募集を開始`,
      summary_es: 'Registro abierto en linea. Incluye apoyo para transporte, materiales y manutención mensual.',
      summary_en: 'Online registration open. Includes support for transportation, materials and monthly stipend.',
      summary_de: 'Online-Registrierung geöffnet. Beinhaltet Unterstützung für Transport, Materialien und monatliches Stipendium.',
      summary_ja: 'オンライン登録受付中。交通費、教材費、月額生活費のサポートを含みます。',
      category: 'community',
      priority: 1
    },
    {
      title_es: 'Centro de las Artes presenta nueva exposición de artistas potosinos',
      title_en: 'Arts Center presents new exhibition by local artists',
      title_de: 'Kunstzentrum präsentiert neue Ausstellung lokaler Künstler',
      title_ja: '芸術センターが地元アーティストの新展覧会を開催',
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
  ];
}

function getDefaultHeadlines() {
  const nextYear = new Date().getFullYear() + 1;
  return [
    {
      text_es: `BMW Villa de Reyes abre convocatoria de empleo para ${nextYear}`,
      text_en: `BMW Villa de Reyes opens ${nextYear} job applications`,
      text_de: `BMW Villa de Reyes eröffnet Stellenbewerbungen für ${nextYear}`,
      text_ja: `BMW Villa de Reyesが${nextYear}年の求人募集を開始`,
      summary_es: 'Postulaciones en línea. Puestos para técnicos, ingenieros y operadores de producción.',
      summary_en: 'Online applications. Positions for technicians, engineers and production operators.',
      summary_de: 'Online-Bewerbungen. Stellen für Techniker, Ingenieure und Produktionsoperateure.',
      summary_ja: 'オンライン応募受付中。技術者、エンジニア、生産オペレーターを募集。',
      source: 'BMW Group', priority: 1
    },
    {
      text_es: 'Gobierno estatal anuncia programa de pavimentación para colonias',
      text_en: 'State government announces paving program for neighborhoods',
      text_de: 'Landesregierung kündigt Asphaltierungsprogramm für Stadtvierteln an',
      text_ja: '州政府が住宅地舗装プログラムを発表',
      summary_es: 'Beneficiará a más de 50 colonias con inversión de recursos estatales y federales.',
      summary_en: 'Will benefit over 50 neighborhoods with state and federal investment.',
      summary_de: 'Wird über 50 Stadtteile mit staatlichen und bundesstaatlichen Investitionen unterstützen.',
      summary_ja: '州と連邦の投資により50以上の地区が恩恵を受ける予定。',
      source: 'Gobierno SLP', priority: 2
    },
    {
      text_es: 'UASLP abre inscripciones para cursos de educación continua',
      text_en: 'UASLP opens enrollment for continuing education courses',
      text_de: 'UASLP eröffnet Einschreibung für Weiterbildungskurse',
      text_ja: 'UASLPが継続教育コースの登録を開始',
      summary_es: 'Más de 30 opciones en áreas de tecnología, negocios, salud y humanidades.',
      summary_en: 'Over 30 options in technology, business, health and humanities areas.',
      summary_de: 'Über 30 Optionen in Technologie, Wirtschaft, Gesundheit und Geisteswissenschaften.',
      summary_ja: 'テクノロジー、ビジネス、医療、人文科学分野で30以上のコースを提供。',
      source: 'UASLP', priority: 3
    },
    {
      text_es: 'Secretaría de Turismo lanza campaña para promover la Huasteca Potosina',
      text_en: 'Tourism Ministry launches campaign to promote Huasteca Potosina',
      text_de: 'Tourismusministerium startet Kampagne zur Förderung der Huasteca Potosina',
      text_ja: '観光省がウアステカ・ポトシーナのプロモーションキャンペーンを開始',
      summary_es: 'Destaca cascadas, gastronomía y cultura de la región como destino imperdible.',
      summary_en: 'Highlights waterfalls, gastronomy and regional culture as must-visit destination.',
      summary_de: 'Hebt Wasserfälle, Gastronomie und regionale Kultur als Must-See-Reiseziel hervor.',
      summary_ja: '滝、美食、地域文化を必見の観光地としてアピール。',
      source: 'Turismo SLP', priority: 4
    },
    {
      text_es: 'Zona Industrial de SLP registra llegada de nuevas empresas',
      text_en: 'SLP Industrial Zone registers arrival of new companies',
      text_de: 'SLP-Industriezone verzeichnet Ankunft neuer Unternehmen',
      text_ja: 'SLP工業地帯に新たな企業が進出',
      summary_es: 'Las inversiones generarán empleos directos e indirectos en la zona metropolitana.',
      summary_en: 'Investments will create direct and indirect jobs in the metropolitan area.',
      summary_de: 'Investitionen werden direkte und indirekte Arbeitsplätze im Großraum schaffen.',
      summary_ja: '投資により大都市圏で直接・間接雇用が創出される見込み。',
      source: 'SEDECO', priority: 5
    }
  ];
}

// Run daily at 7am Mexico City time (13:00 UTC)
exports.handler = schedule('0 13 * * *', handler);
