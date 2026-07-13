import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { format, addDays } from 'date-fns';
import { fetchWeatherForecast, WeatherForecast, fetchExchangeRates } from './api/dashboard-data';


export function getCurrentNewsletterDates(now: Date = new Date()) {
  // Get current time in Mexico City timezone for accurate local time
  const mexicoCityTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);

  console.log(`Newsletter generation timestamp: ${now.toISOString()}`);
  console.log(`Mexico City local time: ${mexicoCityTime}`);

  // Use TODAY as start date and 7 days from now as end date
  const startDate = now;
  const endDate = addDays(now, 7);

  return {
    currentDate: format(now, 'MMMM d, yyyy'),
    currentDateTime: format(now, 'MMMM d, yyyy \'at\' h:mm a'),
    weekStartDate: startDate,
    weekEndDate: endDate,
    weekStartIso: startDate.toISOString(),
    weekEndIso: endDate.toISOString(),
    dateRangeStr: `${format(startDate, 'MMMM d')} - ${format(endDate, 'MMMM d, yyyy')}`,
    todayFormatted: format(now, 'EEEE, MMMM d, yyyy'),
    mexicoCityLocalTime: mexicoCityTime,
  };
}

/**
 * Fetch authoritative current time from timeapi.io (zone America/Mexico_City).
 * Falls back to the server clock if the API is unreachable. Mexico City has
 * not observed DST since 2022, so it's UTC-6 year-round.
 */
export async function fetchAuthoritativeNow(): Promise<{ now: Date; source: 'timeapi.io' | 'server-clock' }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(
      'https://timeapi.io/api/Time/current/zone?timeZone=America/Mexico_City',
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`timeapi.io returned ${res.status}`);
    const data = await res.json();
    if (data && typeof data.dateTime === 'string') {
      const parsed = new Date(`${data.dateTime}-06:00`);
      if (!isNaN(parsed.getTime())) {
        return { now: parsed, source: 'timeapi.io' };
      }
    }
    throw new Error('timeapi.io: unexpected response shape');
  } catch (err) {
    console.warn('[newsletter] Authoritative time API unavailable, falling back to server clock:', err);
    return { now: new Date(), source: 'server-clock' };
  }
}

/**
 * Fetch the real USD/MXN exchange rate (Frankfurter API via dashboard-data).
 * Returns a prompt-ready string block. Never invents values — if the API
 * fails, returns null and the prompt is told to print "Consulta Banxico".
 */
export async function fetchUsdMxnForPrompt(): Promise<{
  rateStr: string;
  rateBlock: string;
} | null> {
  try {
    const rates = await fetchExchangeRates();
    const usd = rates.find(r => r.code === 'USD');
    if (!usd || !Number.isFinite(usd.rate)) return null;
    const rateStr = `$${usd.rate.toFixed(2)} MXN`;
    const rateBlock = `
📊 REAL USD/MXN EXCHANGE RATE (from Frankfurter API — USE THIS EXACT VALUE, DO NOT SEARCH):
1 USD = ${rateStr}
Retrieved at: ${new Date().toISOString()}
`;
    return { rateStr, rateBlock };
  } catch (err) {
    console.warn('[newsletter] Could not fetch USD/MXN rate:', err);
    return null;
  }
}

// Initialize Gemini with SEARCH GROUNDING
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  tools: [
    {
      googleSearch: {}
    } as never,
  ],
  generationConfig: {
    maxOutputTokens: 16384,
    temperature: 0.95,
    topP: 0.95,
  }
});

// Initialize OpenAI as fallback
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const OPENAI_NEWSLETTER_SYSTEM = `You are the editor of "San Luis Way Weekly", a newsletter for expats and locals in San Luis Potosí, MEXICO (not USA).

VOICE: Write like a knowledgeable friend who lives in SLP. Casual but informed, use "we" and "our city". Sprinkle Spanish naturally. Always actionable - tell readers what to DO, where to GO.

RULES:
- ALL content must be about San Luis Potosí, MEXICO only (not Arizona, California, or any US location)
- All prices in MXN pesos, phone numbers with +52 country code
- Include specific dates, times, addresses for every event/place
- No vague language - be specific with real details
- No <img> tags
- Generate HTML that fills the provided template placeholders with real content
- USE web_search for anything time-sensitive (events, news, business hours, current prices) — do not rely on training data for dated facts`;

async function generateWithOpenAI(prompt: string): Promise<string> {
  if (!openai) {
    throw new Error('OpenAI API key not configured');
  }

  // Use the Responses API with the web_search_preview tool so gpt-5.4 can
  // ground events/news/business info in live search results rather than
  // training data. Chat completions don't support web_search directly.
  const response = await openai.responses.create({
    model: 'gpt-5.4',
    tools: [{ type: 'web_search_preview' }],
    instructions: OPENAI_NEWSLETTER_SYSTEM,
    input: prompt,
    max_output_tokens: 16384,
    temperature: 0.9,
    top_p: 0.95,
  });

  return response.output_text || '';
}

// This module now orchestrates generation; the building blocks live in focused
// sibling modules. Re-exported below so existing importers keep working.
export { CLOSING_AND_FOOTER_HTML, NEWSLETTER_TEMPLATE } from './newsletter-template';
export { injectAdsIntoHtml, fetchAdsForPlacement } from './newsletter-ads';
export type { AdPlacementData } from './newsletter-ads';
export { addUtmTracking, injectHeroImage, injectFeaturedBlogImage } from './newsletter-html';
export { extractContentDigest, generateSubjectAndPreview } from './newsletter-subject';

import { buildNewsletterPrompt } from './newsletter-prompt';
import { getSupabaseClient } from './newsletter-supabase';
import { validateAndCleanUrls } from './newsletter-links';
import { injectComunidadSection } from './newsletter-comunidad';
import { generateSubjectAndPreview } from './newsletter-subject';
import {
  cleanHtmlForBeehiiv,
  injectResponsiveStyles,
  detectUnfilledPlaceholders,
  CRITICAL_PLACEHOLDERS,
  removeAllImages,
  injectFooterIntoNewsletter,
  addUtmTracking,
  injectHeroImage,
  injectFeaturedBlogImage,
} from './newsletter-html';


export async function generateWeeklyNewsletter(customContent?: string) {
  // Step 0: Anchor the entire generation to an authoritative wall-clock time
  // (timeapi.io, Mexico City). This ensures every date reference, search
  // query, and "reject content from prev month" rule is pinned to a verified
  // timestamp rather than whatever the server clock happens to say.
  console.log('0. 🕐 Fetching authoritative current time...');
  const { now: authoritativeNow, source: timeSource } = await fetchAuthoritativeNow();
  console.log(`   ✅ Anchor time: ${authoritativeNow.toISOString()} (source: ${timeSource})`);

  const dates = getCurrentNewsletterDates(authoritativeNow);
  const dateRangeStr = dates.dateRangeStr;
  const supabase = getSupabaseClient();

  if (customContent) {
    console.log('Custom content will be included in newsletter generation');
  }

  console.log('1. Fetching events from DB...');
  const { data: events } = await supabase
    .from('events')
    .select('*')
    .gte('start_date', dates.weekStartIso)
    .lte('start_date', dates.weekEndIso)
    .order('start_date', { ascending: true });

  const eventsList = events?.map((e) =>
    `- ${e.title} (${format(new Date(e.start_date as string), 'MMM d')}) @ ${e.location}`
  ).join('\n') || 'No specific DB events.';

  console.log('1.5. Fetching real blog posts from DB...');
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, title, title_en, excerpt, excerpt_en, category, image_url')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(10);

  const blogPostsList = blogPosts?.map(post => {
    const title = post.title_en || post.title;
    const excerpt = post.excerpt_en || post.excerpt;
    return `- "${title}" (${post.category || 'general'}) - URL: https://www.sanluisway.com/blog/${post.slug}\n  Excerpt: ${excerpt}`;
  }).join('\n\n') || 'No blog posts available.';

  // Fetch a curated hero photo — a real, DB-hosted image (same source as the
  // homepage). Rotates weekly so consecutive editions don't reuse the same shot.
  console.log('1.7. 🖼️ Fetching hero photo from featured_photos...');
  let heroPhoto: { image_url: string; title: string | null } | null = null;
  try {
    const { data: photos, error: photosError } = await supabase
      .from('featured_photos')
      .select('image_url, title')
      .eq('active', true)
      .order('created_at', { ascending: false });
    if (!photosError && photos && photos.length > 0) {
      const weekIndex = Math.floor(dates.weekStartDate.getTime() / (7 * 24 * 3600 * 1000));
      heroPhoto = photos[weekIndex % photos.length] as { image_url: string; title: string | null };
      console.log(`   ✅ Hero photo: "${heroPhoto.title || 'untitled'}"`);
    } else {
      console.log('   ⚠️ No active featured_photos — will fall back to a recent blog image');
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch featured_photos:', e);
  }

  // Fallback hero: if featured_photos is empty, rotate through recent blog post
  // images (real, DB-hosted). Keeps a hero on every edition even before the
  // featured_photos table is curated.
  if (!heroPhoto && blogPosts && blogPosts.length > 0) {
    const withImage = (blogPosts as Array<{ image_url?: string | null; title?: string | null; title_en?: string | null }>)
      .filter((p) => p.image_url);
    if (withImage.length > 0) {
      const weekIndex = Math.floor(dates.weekStartDate.getTime() / (7 * 24 * 3600 * 1000));
      const bp = withImage[weekIndex % withImage.length];
      heroPhoto = { image_url: bp.image_url as string, title: bp.title_en || bp.title || 'San Luis Potosí' };
      console.log('   ↩️ Hero fallback: using a recent blog image');
    }
  }

  console.log('1.6. Fetching previously used content to avoid repetition...');

  // Fetch used facts (with error handling for missing tables)
  let usedFactsList = '';
  let usedTipsList = '';
  let usedPlacesList = '';
  let factsCount = 0, tipsCount = 0, placesCount = 0;

  try {
    const { data: usedFacts, error: factsError } = await supabase
      .from('newsletter_facts')
      .select('fact_title, fact_body')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!factsError && usedFacts) {
      usedFactsList = usedFacts.map(f => `- ${f.fact_title}`).join('\n');
      factsCount = usedFacts.length;
    } else if (factsError) {
      console.log('   ⚠️ newsletter_facts table not available:', factsError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch facts:', e);
  }

  try {
    const { data: usedTips, error: tipsError } = await supabase
      .from('newsletter_tips')
      .select('tip_title, tip_body')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!tipsError && usedTips) {
      usedTipsList = usedTips.map(t => `- ${t.tip_title}`).join('\n');
      tipsCount = usedTips.length;
    } else if (tipsError) {
      console.log('   ⚠️ newsletter_tips table not available:', tipsError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch tips:', e);
  }

  try {
    const { data: usedPlaces, error: placesError } = await supabase
      .from('newsletter_places')
      .select('place_name, place_address')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!placesError && usedPlaces) {
      usedPlacesList = usedPlaces.map(p => `- ${p.place_name}`).join('\n');
      placesCount = usedPlaces.length;
    } else if (placesError) {
      console.log('   ⚠️ newsletter_places table not available:', placesError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch places:', e);
  }



  // Fetch used spots (Spot of the Week)
  let usedSpotsList = '';
  let spotsCount = 0;
  try {
    const { data: usedSpots, error: spotsError } = await supabase
      .from('newsletter_spots')
      .select('spot_name')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!spotsError && usedSpots) {
      usedSpotsList = usedSpots.map(s => `- ${s.spot_name}`).join('\n');
      spotsCount = usedSpots.length;
    } else if (spotsError) {
      console.log('   ⚠️ newsletter_spots table not available:', spotsError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch spots:', e);
  }

  // Fetch used phrases (Spanish Corner)
  let usedPhrasesList = '';
  let phrasesCount = 0;
  try {
    const { data: usedPhrases, error: phrasesError } = await supabase
      .from('newsletter_phrases')
      .select('phrase')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!phrasesError && usedPhrases) {
      usedPhrasesList = usedPhrases.map(p => `- "${p.phrase}"`).join('\n');
      phrasesCount = usedPhrases.length;
    } else if (phrasesError) {
      console.log('   ⚠️ newsletter_phrases table not available:', phrasesError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch phrases:', e);
  }

  // Fetch used questions (Ask an Expat)
  let usedQuestionsList = '';
  let questionsCount = 0;
  try {
    const { data: usedQuestions, error: questionsError } = await supabase
      .from('newsletter_questions')
      .select('question')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!questionsError && usedQuestions) {
      usedQuestionsList = usedQuestions.map(q => `- "${q.question}"`).join('\n');
      questionsCount = usedQuestions.length;
    } else if (questionsError) {
      console.log('   ⚠️ newsletter_questions table not available:', questionsError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch questions:', e);
  }

  // Fetch used spotlights (Community Spotlight)
  let usedSpotlightsList = '';
  let spotlightsCount = 0;
  try {
    const { data: usedSpotlights, error: spotlightsError } = await supabase
      .from('newsletter_spotlights')
      .select('spotlight_name, spotlight_type')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!spotlightsError && usedSpotlights) {
      usedSpotlightsList = usedSpotlights.map(s => `- ${s.spotlight_name} (${s.spotlight_type})`).join('\n');
      spotlightsCount = usedSpotlights.length;
    } else if (spotlightsError) {
      console.log('   ⚠️ newsletter_spotlights table not available:', spotlightsError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch spotlights:', e);
  }

  // Fetch used escapes (Weekend Escape)
  let usedEscapesList = '';
  let escapesCount = 0;
  try {
    const { data: usedEscapes, error: escapesError } = await supabase
      .from('newsletter_escapes')
      .select('escape_name')
      .order('used_at', { ascending: false })
      .limit(50);
    if (!escapesError && usedEscapes) {
      usedEscapesList = usedEscapes.map(e => `- ${e.escape_name}`).join('\n');
      escapesCount = usedEscapes.length;
    } else if (escapesError) {
      console.log('   ⚠️ newsletter_escapes table not available:', escapesError.message);
    }
  } catch (e) {
    console.log('   ⚠️ Could not fetch escapes:', e);
  }

  console.log(`   Found: ${factsCount} facts, ${tipsCount} tips, ${placesCount} places, ${spotsCount} spots, ${phrasesCount} phrases, ${questionsCount} questions, ${spotlightsCount} spotlights, ${escapesCount} escapes used previously`);

  // Fetch real weather data from OpenWeatherMap API
  console.log('2. 🌤️ Fetching real weather forecast from OpenWeatherMap...');
  let weatherForecast: WeatherForecast | null = null;
  let weatherDataStr = '';
  try {
    weatherForecast = await fetchWeatherForecast();
    if (weatherForecast) {
      const dailyForecast = weatherForecast.daily.map(d =>
        `  - ${d.dayName}: ${d.tempMin}°C - ${d.tempMax}°C, ${d.condition} (${d.conditionEs}), ${d.chanceOfRain}% rain chance`
      ).join('\n');
      weatherDataStr = `
📊 REAL WEATHER DATA FROM OPENWEATHERMAP API (USE THIS - DO NOT SEARCH FOR WEATHER):
Current Temperature: ${weatherForecast.current.temp}°C
Current Condition: ${weatherForecast.current.conditionEn} (${weatherForecast.current.conditionEs})
Humidity: ${weatherForecast.current.humidity}%
Sunrise: ${weatherForecast.current.sunrise} / Sunset: ${weatherForecast.current.sunset}

5-Day Forecast for San Luis Potosí, México:
${dailyForecast}

Overall Summary: ${weatherForecast.summary}
`;
      console.log('   ✅ Real weather data fetched successfully');
      console.log(`   📊 Temperature range: ${Math.min(...weatherForecast.daily.map(d => d.tempMin))}°C - ${Math.max(...weatherForecast.daily.map(d => d.tempMax))}°C`);
    } else {
      console.log('   ⚠️ Could not fetch weather forecast - AI will search for weather');
      weatherDataStr = '⚠️ Weather API unavailable - Search for "Clima San Luis Potosí" to get current weather.';
    }
  } catch (error) {
    console.error('   ❌ Weather fetch error:', error);
    weatherDataStr = '⚠️ Weather API error - Search for "Clima San Luis Potosí" to get current weather.';
  }

  // Step 2.5: Fetch real USD/MXN exchange rate. We inject this directly into
  // the prompt (same pattern as weather) because Gemini has repeatedly
  // hallucinated outdated rates even with Google Search grounding enabled.
  console.log('2.5. 💱 Fetching real USD/MXN exchange rate...');
  const usdMxn = await fetchUsdMxnForPrompt();
  const exchangeRateBlock = usdMxn
    ? usdMxn.rateBlock
    : '⚠️ Exchange rate API unavailable — set [EXCHANGE_RATE] to "Consulta Banxico" rather than fabricating a value.';
  if (usdMxn) {
    console.log(`   ✅ USD/MXN = ${usdMxn.rateStr}`);
  } else {
    console.log('   ⚠️ Could not fetch FX rate — AI will be instructed to print "Consulta Banxico"');
  }

  console.log('3. 🧠 Performing Deep Research with Gemini Grounding...');
  console.log(`   📅 Newsletter date range: ${dateRangeStr}`);
  console.log(`   📅 Today is: ${dates.todayFormatted}`);
  console.log(`   📅 Current month: ${dates.weekStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`);

  // Get current year and month for search queries
  const currentYear = dates.weekStartDate.getFullYear();
  const currentMonth = format(dates.weekStartDate, 'MMMM');
  const currentMonthSpanish = format(dates.weekStartDate, 'MMMM', { locale: undefined }); // Will use default

  // Map English months to Spanish for search queries
  const monthsInSpanish: Record<string, string> = {
    'January': 'enero', 'February': 'febrero', 'March': 'marzo', 'April': 'abril',
    'May': 'mayo', 'June': 'junio', 'July': 'julio', 'August': 'agosto',
    'September': 'septiembre', 'October': 'octubre', 'November': 'noviembre', 'December': 'diciembre'
  };
  const spanishMonth = monthsInSpanish[currentMonth] || currentMonth.toLowerCase();

  // Calculate previous months dynamically to reject old content
  const prevMonth1 = new Date(dates.weekStartDate);
  prevMonth1.setMonth(prevMonth1.getMonth() - 1);
  const prevMonth2 = new Date(dates.weekStartDate);
  prevMonth2.setMonth(prevMonth2.getMonth() - 2);
  const prevMonthName1 = format(prevMonth1, 'MMMM yyyy');
  const prevMonthName2 = format(prevMonth2, 'MMMM yyyy');
  const prevMonthSpanish1 = monthsInSpanish[format(prevMonth1, 'MMMM')] || format(prevMonth1, 'MMMM').toLowerCase();
  const prevMonthSpanish2 = monthsInSpanish[format(prevMonth2, 'MMMM')] || format(prevMonth2, 'MMMM').toLowerCase();

  const prompt = buildNewsletterPrompt({
    dates, dateRangeStr, currentMonth, currentYear, spanishMonth,
    prevMonthName1, prevMonthName2, prevMonthSpanish1, prevMonthSpanish2,
    weatherDataStr, exchangeRateBlock, usdMxn, eventsList, blogPostsList,
    usedFactsList, usedTipsList, usedPlacesList, usedSpotsList, usedEscapesList,
    usedQuestionsList, usedPhrasesList, usedSpotlightsList, customContent,
  });

  let htmlContent = '';

  // Validate API key before attempting generation
  if (!openai) {
    console.error('❌ OPENAI_API_KEY is not set');
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  try {
    console.log('2.5. 🔑 Using OpenAI GPT-5.4 as primary generator...');

    // Try OpenAI first (primary)
    htmlContent = await generateWithOpenAI(prompt);

    // Check if response looks like a refusal or error
    const refusalSignals = ['sorry', "can't assist", 'cannot assist', "i'm sorry", 'unable to help'];
    const firstChunk = htmlContent.trim().slice(0, 200).toLowerCase();
    if (htmlContent.length < 500 && refusalSignals.some(s => firstChunk.includes(s))) {
      throw new Error('OpenAI returned a refusal-style short response');
    }

    console.log('3. ✅ OpenAI generation successful, content length:', htmlContent.length);

  } catch (openaiError: unknown) {
    const errorMessage = openaiError instanceof Error ? openaiError.message : String(openaiError);
    console.error("OpenAI Generation Error:", errorMessage);

    // Fallback to Gemini (with googleSearch grounding — useful for live events)
    if (process.env.GOOGLE_API_KEY) {
      try {
        console.log('4. 🔄 Falling back to Gemini 2.0 Flash...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        htmlContent = response.text();

        if (htmlContent.trim().toLowerCase().startsWith('<html') || htmlContent.trim().toLowerCase().startsWith('<!doctype')) {
          if (htmlContent.includes('error') || htmlContent.includes('Error') || htmlContent.length < 1000) {
            throw new Error('Gemini returned an HTML error page instead of newsletter content');
          }
        }
        console.log('5. ✅ Gemini fallback successful');
      } catch (geminiError) {
        console.error("Gemini Fallback Error:", geminiError);
        throw new Error(`Both OpenAI and Gemini failed. OpenAI error: ${errorMessage}`);
      }
    } else {
      throw new Error(`OpenAI failed: ${errorMessage}. Add GOOGLE_API_KEY to .env as fallback`);
    }
  }

  // Clean up markdown code fences if present
  htmlContent = htmlContent.replace(/^```html\n?/i, '').replace(/^```\n?/, '').replace(/\n?```$/i, '');

  // REMOVE ALL IMAGES - This is done FIRST to ensure no images slip through
  console.log('4. 🖼️ Removing all images from newsletter...');
  htmlContent = removeAllImages(htmlContent);

  // INJECT COMUNIDAD SECTION - Programmatically inject custom content
  // This GUARANTEES the custom content appears, regardless of what AI generated
  if (customContent) {
    console.log('4.5. 🤝 Injecting Comunidad section with custom content...');
    htmlContent = await injectComunidadSection(htmlContent, customContent);
    console.log('   ✅ Comunidad section injected successfully');
  }

  // IMPORTANT: Inject the standardized footer/closing section
  // This ensures the footer is ALWAYS included exactly as defined, regardless of AI output
  console.log('5. 📧 Injecting standardized footer and closing section...');
  htmlContent = injectFooterIntoNewsletter(htmlContent);

  // Validate that the AI filled every placeholder before we strip the leftovers.
  // cleanHtmlForBeehiiv silently removes [PLACEHOLDER] patterns, which used to
  // produce half-filled sections with no signal that anything went wrong.
  const unfilledPlaceholders = detectUnfilledPlaceholders(htmlContent);
  const missingCritical = unfilledPlaceholders.filter((p) => CRITICAL_PLACEHOLDERS.has(p));
  if (unfilledPlaceholders.length > 0) {
    console.warn('   ⚠️ Unfilled placeholders remaining after generation:');
    for (const p of unfilledPlaceholders) {
      const critical = CRITICAL_PLACEHOLDERS.has(p) ? ' (CRITICAL)' : '';
      console.warn(`      - ${p}${critical}`);
    }
  }
  if (missingCritical.length > 0) {
    throw new Error(
      `AI left ${missingCritical.length} critical placeholder(s) unfilled: ${missingCritical.join(', ')}. ` +
      `Re-run generation; if it persists, simplify the prompt or add examples for these fields.`
    );
  }

  // Clean HTML for Beehiiv compatibility (remove <head>, class attributes)
  console.log('6. 🧹 Cleaning HTML for Beehiiv compatibility...');
  htmlContent = cleanHtmlForBeehiiv(htmlContent);

  // Inject responsive + dark-mode-safe styles. MUST happen after cleaning —
  // cleanHtmlForBeehiiv wipes the <head>, which is where any AI-returned
  // @media rules would have lived.
  console.log('6.5. 📱 Injecting responsive styles...');
  htmlContent = injectResponsiveStyles(htmlContent);

  // Validate and clean URLs (static cleanup + async HEAD verification of sanluisway.com links)
  console.log('7. 🔗 Validating and cleaning URLs...');
  const linkValidation = await validateAndCleanUrls(htmlContent);
  htmlContent = linkValidation.html;

  // Tag every sanluisway.com link with utm_content = its section, so GA4 shows
  // which section drove each click. Beehiiv supplies source/medium/campaign on
  // send; we only add the section dimension it lacks. Runs AFTER link validation
  // (HEAD checks use clean URLs) and BEFORE ad injection (ads carry their own
  // click tracking, added later in the API route).
  console.log('7.5. 🏷️ Adding per-section utm_content to internal links...');
  htmlContent = addUtmTracking(htmlContent);

  // Inject verified, DB-sourced images: a rotating hero (featured_photos) above
  // the first card, and the featured blog post's real thumbnail in its card.
  // Runs AFTER removeAllImages (step 4) so only these known-good images ship —
  // the AI never supplies image URLs (they'd 404), preserving the
  // no-hallucinated-images guarantee.
  console.log('7.6. 🖼️ Injecting hero + featured blog images...');
  htmlContent = injectHeroImage(htmlContent, heroPhoto);
  htmlContent = injectFeaturedBlogImage(
    htmlContent,
    (blogPosts || []) as Array<{ slug: string; image_url?: string | null; title?: string | null; title_en?: string | null }>
  );

  // Extract and save content to avoid repetition in future newsletters
  console.log('7. 💾 Extracting and saving content to prevent repetition...');

  // Save "Did You Know?" fact
  // In the 4-card layout, the emoji title lives in <h3> and the actual
  // fact title/body live in <h4>/<p>. Extract from those inner elements.
  try {
    const factTitleMatch = htmlContent.match(/🧠 Did You Know\?[\s\S]*?<h4[^>]*>([^<]+)<\/h4>/i);
    const factBodyMatch = htmlContent.match(/🧠 Did You Know\?[\s\S]*?<\/h4>\s*<p[^>]*>([^<]+)<\/p>/i);

    if (factTitleMatch && factBodyMatch) {
      const factTitle = factTitleMatch[1].trim();
      const factBody = factBodyMatch[1].trim();

      if (factTitle && factBody && factTitle.length > 3 && factBody.length > 20) {
        await supabase.from('newsletter_facts').insert({
          fact_title: factTitle,
          fact_body: factBody,
        });
        console.log(`   ✅ Saved fact: "${factTitle.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save fact:', e);
  }

  // Save "Expat Pro Tip"
  try {
    const tipTitleMatch = htmlContent.match(/💡 Expat Pro Tip[\s\S]*?<h4[^>]*>([^<]+)<\/h4>/i);
    const tipBodyMatch = htmlContent.match(/💡 Expat Pro Tip[\s\S]*?<\/h4>\s*<p[^>]*>([^<]+)<\/p>/i);

    if (tipTitleMatch && tipBodyMatch) {
      const tipTitle = tipTitleMatch[1].trim();
      const tipBody = tipBodyMatch[1].trim();

      if (tipTitle && tipBody && tipTitle.length > 3 && tipBody.length > 20) {
        await supabase.from('newsletter_tips').insert({
          tip_title: tipTitle,
          tip_body: tipBody,
        });
        console.log(`   ✅ Saved tip: "${tipTitle.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save tip:', e);
  }

  // Save "Now Open" place
  try {
    const placeMatch = htmlContent.match(/✨ NOW OPEN[\s\S]*?<h4[^>]*>([^<]+)<\/h4>[\s\S]*?<p[^>]*>([^<]+)<\/p>/i);

    if (placeMatch) {
      const placeName = placeMatch[1].trim();
      const placeDesc = placeMatch[2].trim();

      if (placeName && placeName.length > 2) {
        await supabase.from('newsletter_places').insert({
          place_name: placeName,
          place_description: placeDesc,
        });
        console.log(`   ✅ Saved place: "${placeName.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save place:', e);
  }

  // Save "Weekend Escape" destination
  try {
    const escapeNameMatch = htmlContent.match(/🌿 Weekend Escape[\s\S]*?<h4[^>]*>([^<]+)<\/h4>/i);
    if (escapeNameMatch) {
      const escapeName = escapeNameMatch[1].trim();
      if (escapeName && escapeName.length > 2) {
        await supabase.from('newsletter_escapes').insert({ escape_name: escapeName });
        console.log(`   ✅ Saved escape: "${escapeName.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save escape:', e);
  }

  // Save "Spot of the Week"
  try {
    const spotNameMatch = htmlContent.match(/📍 Spot of the Week[\s\S]*?<h4[^>]*>([^<]+)<\/h4>/i);
    const spotDescMatch = htmlContent.match(/📍 Spot of the Week[\s\S]*?<\/h4>\s*<p[^>]*>([^<]+)<\/p>/i);
    if (spotNameMatch) {
      const spotName = spotNameMatch[1].trim();
      const spotDesc = spotDescMatch ? spotDescMatch[1].trim() : '';
      if (spotName && spotName.length > 2) {
        await supabase.from('newsletter_spots').insert({ spot_name: spotName, spot_description: spotDesc });
        console.log(`   ✅ Saved spot: "${spotName.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save spot:', e);
  }

  // Save "Spanish Corner" phrases
  try {
    const phrase1Match = htmlContent.match(/🗣️ Spanish Corner[\s\S]*?"([^"]{2,50})"/i);
    const phrase2Match = htmlContent.match(/🗣️ Spanish Corner[\s\S]*?<div[^>]*>[\s\S]*?<\/div>\s*<div[^>]*>[\s\S]*?"([^"]{2,50})"/i);
    const phrases = [phrase1Match?.[1], phrase2Match?.[1]].filter(Boolean);
    for (const phrase of phrases) {
      if (phrase && phrase.length > 2) {
        await supabase.from('newsletter_phrases').insert({ phrase });
        console.log(`   ✅ Saved phrase: "${phrase}"`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save phrases:', e);
  }

  // Save "Ask an Expat" question
  try {
    const questionMatch = htmlContent.match(/🙋 Ask an Expat[\s\S]*?Q: "([^"]+)"/i);
    const answerMatch = htmlContent.match(/🙋 Ask an Expat[\s\S]*?Q: "[^"]*"[\s\S]*?<p[^>]*>([^<]+)<\/p>/i);

    if (questionMatch && answerMatch) {
      const question = questionMatch[1].trim();
      const answerSummary = answerMatch[1].trim().substring(0, 200);

      if (question && question.length > 5) {
        await supabase.from('newsletter_questions').insert({
          question: question,
          answer_summary: answerSummary,
        });
        console.log(`   ✅ Saved question: "${question.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save question:', e);
  }

  // Save "Community Spotlight" entry
  try {
    const spotlightNameMatch = htmlContent.match(/✨ Community Spotlight[\s\S]*?<h4[^>]*>([^<]+)<\/h4>/i);
    const spotlightTypeMatch = htmlContent.match(/✨ Community Spotlight[\s\S]*?<\/h4>\s*<p[^>]*>([^<]+)<\/p>/i);

    if (spotlightNameMatch) {
      const spotlightName = spotlightNameMatch[1].trim();
      const spotlightType = spotlightTypeMatch ? spotlightTypeMatch[1].trim() : '';

      if (spotlightName && spotlightName.length > 2) {
        await supabase.from('newsletter_spotlights').insert({
          spotlight_name: spotlightName,
          spotlight_type: spotlightType,
        });
        console.log(`   ✅ Saved spotlight: "${spotlightName.substring(0, 40)}..."`);
      }
    }
  } catch (e) {
    console.error('   ⚠️ Could not save spotlight:', e);
  }

  // Generate an open-rate-optimized subject + preview from this edition's
  // actual top story/event (falls back to generic strings on any failure).
  console.log('8. ✍️ Generating smart subject line and preview text...');
  const { subject, previewText } = await generateSubjectAndPreview(htmlContent, dateRangeStr);
  console.log(`   ✅ Subject: "${subject}"`);
  console.log(`   ✅ Preview: "${previewText}"`);

  return {
    subject,
    preview_text: previewText,
    html_content: htmlContent,
    date_range: dateRangeStr,
    link_validation: {
      total_sanluisway_links: linkValidation.totalSanluiswayLinks,
      broken_links_replaced: linkValidation.brokenLinks,
    },
    unfilled_placeholders: unfilledPlaceholders,
  };
}
