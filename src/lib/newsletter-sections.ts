/**
 * Newsletter Section Parser and Regenerator
 * Parses newsletter HTML into editable sections and regenerates individual sections
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { format, addDays } from 'date-fns';
import { fetchWeatherForecast } from './api/dashboard-data';
import { fetchAuthoritativeNow, fetchUsdMxnForPrompt } from './newsletter-generator';

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// Helper to get current dates for prompts
function getCurrentDates(now: Date = new Date()) {
  const endDate = addDays(now, 7);

  const currentYear = now.getFullYear();
  const currentMonth = format(now, 'MMMM');

  const monthsInSpanish: Record<string, string> = {
    'January': 'enero', 'February': 'febrero', 'March': 'marzo', 'April': 'abril',
    'May': 'mayo', 'June': 'junio', 'July': 'julio', 'August': 'agosto',
    'September': 'septiembre', 'October': 'octubre', 'November': 'noviembre', 'December': 'diciembre'
  };
  const spanishMonth = monthsInSpanish[currentMonth] || currentMonth.toLowerCase();

  // Calculate previous months
  const prevMonth1 = new Date(now);
  prevMonth1.setMonth(prevMonth1.getMonth() - 1);
  const prevMonth2 = new Date(now);
  prevMonth2.setMonth(prevMonth2.getMonth() - 2);

  return {
    todayFormatted: format(now, 'EEEE, MMMM d, yyyy'),
    dateRange: `${format(now, 'MMMM d')} - ${format(endDate, 'MMMM d, yyyy')}`,
    currentMonth,
    currentYear,
    spanishMonth,
    prevMonthName1: format(prevMonth1, 'MMMM yyyy'),
    prevMonthName2: format(prevMonth2, 'MMMM yyyy'),
    prevMonthSpanish1: monthsInSpanish[format(prevMonth1, 'MMMM')] || format(prevMonth1, 'MMMM').toLowerCase(),
    prevMonthSpanish2: monthsInSpanish[format(prevMonth2, 'MMMM')] || format(prevMonth2, 'MMMM').toLowerCase(),
  };
}

export interface NewsletterSection {
  id: string;
  name: string;
  type: 'opening' | 'weather' | 'market_watch' | 'news' | 'events' | 'fact' | 'spot_of_the_week' | 'around_town' | 'escape' | 'coming_up' | 'ask_an_expat' | 'tip' | 'spanish_corner' | 'blog' | 'community_spotlight' | 'comunidad' | 'cta';
  html: string;
  editable: boolean;
}

// Section markers for parsing
const SECTION_PATTERNS: { id: string; name: string; type: NewsletterSection['type']; startPattern: RegExp; endPattern: RegExp; editable: boolean }[] = [
  {
    id: 'opening',
    name: 'Opening Hook',
    type: 'opening',
    startPattern: /<!-- OPENING HOOK -->/i,
    endPattern: /<!-- WEATHER/i,
    editable: true
  },
  {
    id: 'weather',
    name: 'Weather Watch',
    type: 'weather',
    startPattern: /<!-- WEATHER/i,
    endPattern: /<!-- MARKET WATCH|<!-- NEWS SECTION/i,
    editable: true
  },
  {
    id: 'market_watch',
    name: 'Market Watch',
    type: 'market_watch',
    startPattern: /<!-- MARKET WATCH/i,
    endPattern: /<!-- NEWS SECTION/i,
    editable: true
  },
  {
    id: 'news',
    name: 'The Week in SLP',
    type: 'news',
    startPattern: /<!-- NEWS SECTION/i,
    endPattern: /<!-- QUICK HITS|<!-- TOP PICKS/i,
    editable: true
  },
  {
    id: 'events',
    name: "This Week's Top Picks",
    type: 'events',
    startPattern: /<!-- TOP PICKS/i,
    endPattern: /<!-- MORE THIS WEEK/i,
    editable: true
  },
  {
    id: 'more_events',
    name: 'More This Week',
    type: 'events',
    startPattern: /<!-- MORE THIS WEEK/i,
    endPattern: /<!-- SPOT OF THE WEEK|<!-- DID YOU KNOW/i,
    editable: true
  },
  {
    id: 'spot_of_the_week',
    name: 'Spot of the Week',
    type: 'spot_of_the_week',
    startPattern: /<!-- SPOT OF THE WEEK/i,
    endPattern: /<!-- AROUND TOWN/i,
    editable: true
  },
  {
    id: 'around_town',
    name: 'Around Town',
    type: 'around_town',
    startPattern: /<!-- AROUND TOWN/i,
    endPattern: /<!-- COMING UP|<!-- WEEKEND ESCAPE/i,
    editable: true
  },
  {
    id: 'coming_up',
    name: 'Coming Up',
    type: 'coming_up',
    startPattern: /<!-- COMING UP/i,
    endPattern: /<!-- AD_PLACEMENT_MIDDLE|<!-- CARD 3|<!-- ASK AN EXPAT|<!-- PRO TIP/i,
    editable: true
  },
  {
    id: 'ask_an_expat',
    name: 'Ask an Expat',
    type: 'ask_an_expat',
    startPattern: /<!-- ASK AN EXPAT/i,
    endPattern: /<!-- PRO TIP/i,
    editable: true
  },
  {
    id: 'tip',
    name: 'Expat Pro Tip',
    type: 'tip',
    startPattern: /<!-- PRO TIP/i,
    endPattern: /<!-- SPANISH CORNER|<!-- FROM THE BLOG/i,
    editable: true
  },
  {
    id: 'spanish_corner',
    name: 'Spanish Corner',
    type: 'spanish_corner',
    startPattern: /<!-- SPANISH CORNER/i,
    endPattern: /<!-- DID YOU KNOW|<!-- FROM THE BLOG/i,
    editable: true
  },
  {
    id: 'fact',
    name: 'Did You Know?',
    type: 'fact',
    startPattern: /<!-- DID YOU KNOW/i,
    endPattern: /<!-- CARD 4|<!-- WEEKEND ESCAPE|<!-- FROM THE BLOG/i,
    editable: true
  },
  {
    id: 'escape',
    name: 'Weekend Escape',
    type: 'escape',
    startPattern: /<!-- WEEKEND ESCAPE/i,
    endPattern: /<!-- FROM THE BLOG|<!-- COMING UP/i,
    editable: true
  },
  {
    id: 'blog',
    name: 'From the Blog',
    type: 'blog',
    startPattern: /<!-- FROM THE BLOG/i,
    endPattern: /<!-- COMMUNITY SPOTLIGHT|<!-- COMUNIDAD|<!-- CALL TO ACTION/i,
    editable: false
  },
  {
    id: 'community_spotlight',
    name: 'Community Spotlight',
    type: 'community_spotlight',
    startPattern: /<!-- COMMUNITY SPOTLIGHT/i,
    endPattern: /<!-- COMUNIDAD|<!-- CALL TO ACTION/i,
    editable: true
  },
  {
    id: 'comunidad',
    name: 'Comunidad',
    type: 'comunidad',
    startPattern: /<!-- COMUNIDAD/i,
    endPattern: /<!-- CALL TO ACTION/i,
    editable: true
  },
  {
    id: 'cta',
    name: 'Call to Action',
    type: 'cta',
    startPattern: /<!-- CALL TO ACTION/i,
    endPattern: /<!-- EXPLORE SAN LUIS|<!-- CLOSING/i,
    editable: false
  }
];

/**
 * Parse newsletter HTML into sections
 */
export function parseNewsletterSections(html: string): NewsletterSection[] {
  const sections: NewsletterSection[] = [];

  // Add section markers if they don't exist (for older newsletters)
  let markedHtml = html;

  // Try to find sections by content patterns if markers don't exist
  if (!html.includes('<!-- OPENING HOOK -->')) {
    markedHtml = markedHtml.replace(/(Hey there! 👋)/i, '<!-- OPENING HOOK -->\n$1');
  }
  if (!html.includes('<!-- WEATHER')) {
    markedHtml = markedHtml.replace(/(🌦️ Weather Watch)/i, '<!-- WEATHER & ENVIRONMENT -->\n$1');
  }
  if (!html.includes('<!-- MARKET WATCH')) {
    markedHtml = markedHtml.replace(/(💰 Market Watch)/i, '<!-- MARKET WATCH -->\n$1');
  }
  if (!html.includes('<!-- NEWS SECTION')) {
    markedHtml = markedHtml.replace(/(📰 The Week in SLP)/i, '<!-- NEWS SECTION -->\n$1');
  }
  if (!html.includes('<!-- TOP PICKS')) {
    markedHtml = markedHtml.replace(/(🌟 This Week's Top Picks)/i, '<!-- TOP PICKS -->\n$1');
  }
  if (!html.includes('<!-- DID YOU KNOW')) {
    markedHtml = markedHtml.replace(/(🧠 Did You Know)/i, '<!-- DID YOU KNOW -->\n$1');
  }
  if (!html.includes('<!-- SPOT OF THE WEEK')) {
    markedHtml = markedHtml.replace(/(📍 Spot of the Week)/i, '<!-- SPOT OF THE WEEK -->\n$1');
  }
  if (!html.includes('<!-- AROUND TOWN')) {
    markedHtml = markedHtml.replace(/(🏙️ Around Town)/i, '<!-- AROUND TOWN -->\n$1');
  }
  if (!html.includes('<!-- WEEKEND ESCAPE')) {
    markedHtml = markedHtml.replace(/(🌿 Weekend Escape)/i, '<!-- WEEKEND ESCAPE -->\n$1');
  }
  if (!html.includes('<!-- COMING UP')) {
    markedHtml = markedHtml.replace(/(📅 Coming Up)/i, '<!-- COMING UP -->\n$1');
  }
  if (!html.includes('<!-- ASK AN EXPAT')) {
    markedHtml = markedHtml.replace(/(🙋 Ask an Expat)/i, '<!-- ASK AN EXPAT -->\n$1');
  }
  if (!html.includes('<!-- PRO TIP')) {
    markedHtml = markedHtml.replace(/(💡 Expat Pro Tip)/i, '<!-- PRO TIP -->\n$1');
  }
  if (!html.includes('<!-- SPANISH CORNER')) {
    markedHtml = markedHtml.replace(/(🗣️ Spanish Corner)/i, '<!-- SPANISH CORNER -->\n$1');
  }
  if (!html.includes('<!-- FROM THE BLOG')) {
    markedHtml = markedHtml.replace(/(📖 From the Blog)/i, '<!-- FROM THE BLOG -->\n$1');
  }
  if (!html.includes('<!-- COMMUNITY SPOTLIGHT')) {
    markedHtml = markedHtml.replace(/(✨ Community Spotlight)/i, '<!-- COMMUNITY SPOTLIGHT -->\n$1');
  }
  if (!html.includes('<!-- COMUNIDAD')) {
    markedHtml = markedHtml.replace(/(🤝 Comunidad)/i, '<!-- COMUNIDAD SECTION -->\n$1');
  }

  for (const pattern of SECTION_PATTERNS) {
    const startMatch = markedHtml.match(pattern.startPattern);
    if (startMatch && startMatch.index !== undefined) {
      const startIndex = startMatch.index;
      const endMatch = markedHtml.substring(startIndex + 1).match(pattern.endPattern);

      let endIndex: number;
      if (endMatch && endMatch.index !== undefined) {
        endIndex = startIndex + 1 + endMatch.index;
      } else {
        // If no end pattern found, take until end or a reasonable length
        endIndex = Math.min(startIndex + 5000, markedHtml.length);
      }

      const sectionHtml = markedHtml.substring(startIndex, endIndex).trim();

      if (sectionHtml.length > 50) { // Only add if section has meaningful content
        sections.push({
          id: pattern.id,
          name: pattern.name,
          type: pattern.type,
          html: sectionHtml,
          editable: pattern.editable
        });
      }
    }
  }

  return sections;
}

/**
 * Regenerate a specific section of the newsletter
 */
export async function regenerateSection(
  sectionType: NewsletterSection['type'],
  sectionId: string,
  currentHtml: string,
  context?: string
): Promise<string> {
  if (!openai && !process.env.GOOGLE_API_KEY) {
    throw new Error('OPENAI_API_KEY or GOOGLE_API_KEY is required');
  }

  // Anchor dates to an authoritative current time (timeapi.io) so the AI
  // operates on a verified "today", not a possibly-drifted server clock.
  const { now: authoritativeNow, source: timeSource } = await fetchAuthoritativeNow();
  const dates = getCurrentDates(authoritativeNow);
  console.log(`Regenerating section [${sectionType}] anchored to ${dates.todayFormatted} (time source: ${timeSource})`);

  // Fetch real USD/MXN exchange rate if regenerating market_watch.
  // Gemini hallucinates exchange rates from training data otherwise.
  let exchangeRateBlock = '';
  if (sectionType === 'market_watch') {
    console.log('Fetching real USD/MXN exchange rate for market_watch section...');
    const usdMxn = await fetchUsdMxnForPrompt();
    exchangeRateBlock = usdMxn
      ? usdMxn.rateBlock
      : '⚠️ Exchange rate API unavailable — print "Consulta Banxico" rather than fabricating a value.';
    if (usdMxn) console.log(`USD/MXN = ${usdMxn.rateStr}`);
  }

  // Fetch real weather data if regenerating weather section
  let weatherDataStr = '';
  if (sectionType === 'weather') {
    console.log('Fetching real weather data for weather section...');
    try {
      const forecast = await fetchWeatherForecast();
      if (forecast) {
        const dailyForecast = forecast.daily.map(d =>
          `  - ${d.dayName}: ${d.tempMin}°C - ${d.tempMax}°C, ${d.condition} (${d.conditionEs}), ${d.chanceOfRain}% rain chance`
        ).join('\n');
        weatherDataStr = `
📊 REAL WEATHER DATA FROM OPENWEATHERMAP API (USE THIS DATA):
Current Temperature: ${forecast.current.temp}°C
Current Condition: ${forecast.current.conditionEn} (${forecast.current.conditionEs})
Humidity: ${forecast.current.humidity}%

5-Day Forecast:
${dailyForecast}

Summary: ${forecast.summary}
`;
        console.log('Real weather data fetched successfully');
      }
    } catch (error) {
      console.error('Could not fetch weather data:', error);
    }
  }

  const geminiFallback = process.env.GOOGLE_API_KEY
    ? new GoogleGenerativeAI(process.env.GOOGLE_API_KEY).getGenerativeModel({
        model: "gemini-2.0-flash",
        generationConfig: { maxOutputTokens: 2000, temperature: 0.95, topP: 0.95 }
      })
    : null;

  // Randomization seed bakes into every prompt so consecutive regenerations
  // don't land on the exact same angle / opener / phrasing.
  const variationSeed = `${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;

  const prompts: Record<string, string> = {
    opening: `Generate a fresh opening block for the "San Luis Way Weekly" newsletter.

🎲 Variation seed (use this to pick a DIFFERENT angle than last time): ${variationSeed}

Output 2-3 short paragraphs wrapped in <p style="font-size: 16px; line-height: 1.7;">...</p> tags.
The first <p> IS the greeting. DO NOT start with "Hey there! 👋".

Rotate the greeting each time — pick ONE of these (or invent a similar variant):
- "¡Hola, potosinos!" / "¡Hola, SLP!" / "Buenos días, San Luis 👋"
- "Happy ${dates.todayFormatted.split(',')[0]}, SLP!"
- "Welcome back to the weekly brief."
- A weather-forward opener ("Frosty mornings, sunny tardes — classic SLP this week.")
- A season-forward opener ("Semana Santa is knocking — here's your week ahead.")
- A direct lead ("Big week ahead in the city...") — no greeting, dive straight in
- An emoji-only opener ("🌵 Back with your weekly SLP brief.")

Then 1-2 sentences that tease something SPECIFIC and TIMELY this week — a real event,
the actual weather, a holiday, a city milestone. No generic filler like "we hope you're
doing well".

Return ONLY the HTML <p> tags. No <tr>, no <td>, no code fences.`,

    weather: `Generate a weather section for San Luis Potosí, México.
📅 TODAY IS: ${dates.todayFormatted}
📅 FORECAST PERIOD: ${dates.dateRange}

🚨 IMPORTANT: Use the REAL WEATHER DATA below. DO NOT make up temperatures.
${weatherDataStr || '⚠️ Weather API unavailable - use realistic winter temperatures for SLP (around 5-15°C in January)'}

Include forecast summary, temperature range in Celsius (USE THE EXACT VALUES FROM DATA ABOVE), and a practical tip.
Format as HTML with the 🌦️ Weather Watch header.
Return the complete <tr> section HTML.`,

    news: `Generate EXACTLY 3 distinct local news items for San Luis Potosí, MÉXICO (NOT USA), each on a different topic.

🚨 CRITICAL DATE REQUIREMENT:
📅 TODAY IS: ${dates.todayFormatted}
📅 CURRENT MONTH: ${dates.currentMonth} ${dates.currentYear}
⛔ REJECT any news from ${dates.prevMonthName1} or ${dates.prevMonthName2}
⛔ REJECT any news with dates in "${dates.prevMonthSpanish1}" or "${dates.prevMonthSpanish2}"
✅ ONLY include news from ${dates.currentMonth} ${dates.currentYear}

Search for: "noticias San Luis Potosí ${dates.spanishMonth} ${dates.currentYear}"

Focus on: city announcements, infrastructure, business news, or community events.
Each of the 3 news items should have: headline, 3-4 sentence summary, and "why it matters" explanation.
After the 3 news items, include 3 "Quick Hits" - short practical one-line updates that do NOT duplicate the 3 news items above.
Return the complete <tr> section HTML with the 📰 The Week in SLP header.`,

    events: `Generate 3 events happening in San Luis Potosí, MÉXICO.

🚨🚨🚨 ABSOLUTELY CRITICAL DATE REQUIREMENT 🚨🚨🚨
📅 TODAY IS: ${dates.todayFormatted}
📅 THIS NEWSLETTER COVERS: ${dates.dateRange}
📅 CURRENT MONTH: ${dates.currentMonth} ${dates.currentYear}

⛔ REJECT ANY EVENT FROM ${dates.prevMonthName1} OR ${dates.prevMonthName2}
⛔ REJECT ANY EVENT with dates in "${dates.prevMonthSpanish1}" or "${dates.prevMonthSpanish2}"
✅ ONLY include events happening in ${dates.currentMonth} ${dates.currentYear}
✅ Events must be between ${dates.dateRange}

Search queries to use:
- "eventos San Luis Potosí México ${dates.spanishMonth} ${dates.currentYear}"
- "conciertos SLP ${dates.spanishMonth} ${dates.currentYear}"
- "agenda cultural San Luis Potosí ${dates.currentMonth} ${dates.currentYear}"

🚨 REQUIRED FOR EACH EVENT (ALL fields mandatory):
- Event name (specific, not generic like "DJ Night" - include performer/details)
- Exact date (e.g., "January 19")
- Venue name AND address (e.g., "Arena Potosí, Av. Himno Nacional 4010")
- Time (e.g., "9:00 PM")
- Cost in MXN pesos (or "Free")
- Brief description (2-3 sentences about what to expect)

⛔ If you can't find venue/time for an event, SKIP IT and find another
Categories: culture, music, food, sports, family, or nightlife.
Return the complete <tr> section HTML.`,

    fact: `Generate a unique "Did You Know?" fact about San Luis Potosí, México.
Topics: history, culture, famous potosinos, local traditions, architecture, cuisine, or nature.
Make it interesting and educational.
Return the complete <tr> section HTML with the 🧠 Did You Know? header.`,

    around_town: `Generate an "Around Town" section featuring:
1. A NEW place that recently opened in San Luis Potosí (2024-2025)
2. A "Good to Know" practical city update
Include specific addresses and details.
Return the complete <tr> section HTML with the 🏙️ Around Town header.`,

    escape: `Generate a "Weekend Escape" section about a day trip destination near San Luis Potosí.
Options: Huasteca Potosina, Real de Catorce, Xilitla, local hot springs, hiking spots.
Include practical info: distance, travel time, what to do, costs.
Return the complete <tr> section HTML with the 🌿 Weekend Escape header.`,

    coming_up: `Generate a "Coming Up" section with 4 upcoming events in San Luis Potosí, MÉXICO.

🚨 CRITICAL DATE REQUIREMENT:
📅 TODAY IS: ${dates.todayFormatted}
📅 SHOW EVENTS FOR: Next 2-4 weeks starting from today
⛔ NO events from ${dates.prevMonthName1} or ${dates.prevMonthName2}
✅ All dates must be in ${dates.currentMonth} ${dates.currentYear} or later

Search for: "eventos San Luis Potosí ${dates.spanishMonth} ${dates.currentYear}"

🚨 EACH EVENT MUST INCLUDE:
- Event name (specific, not generic)
- Date (e.g., "January 25")
- Venue name (e.g., "Teatro de la Paz", "Arena Potosí")
- Time (e.g., "8:00 PM")
- One-line description

⛔ If missing venue/time, find a different event
Return the complete <tr> section HTML with the 📅 Coming Up header.`,

    ask_an_expat: `Generate an "Ask an Expat" Q&A section answering ONE common question that expats or newcomers frequently ask about living in San Luis Potosí, México.

QUESTION BANK (choose one):
- "Is tap water safe to drink in SLP?"
- "How do I find a reliable housekeeper/cleaning person?"
- "What's the best neighborhood for expats?"
- "Can I use my foreign driver's license?"
- "How do I set up internet at home?"
- "Where can I find a good English-speaking doctor?"
- "Is SLP safe for walking at night?"
- "How do I get a Mexican phone number?"
- "Where do expats hang out in SLP?"
- "How does trash collection work?"
- "Can I bring my pet to Mexico?"
- "How do I get a bank account as a foreigner?"
- "What's the deal with propinas (tips)?"
- "Is Uber reliable in SLP?"
- "What's the altitude and how does it affect me?"

FORMAT:
- Q: The question in natural language
- A: 3-4 sentences with a practical, specific answer. Include at least one specific detail (address, app name, price, phone number).

TONE: Friendly, been-there-done-that. Like a friend who moved to SLP two years ago sharing what they learned.

Return the complete <tr> section HTML with the 🙋 Ask an Expat header.
Use background-color: #F5F3FF, accent color #5B21B6, and a white card with border #DDD6FE.`,

    tip: `Generate an "Expat Pro Tip" for living in San Luis Potosí, México.
Topics: navigating bureaucracy, finding services, local customs, money-saving tips, etc.
Be specific with addresses, phone numbers, or websites when possible.
Return the complete <tr> section HTML with the 💡 Expat Pro Tip header.`,

    community_spotlight: `Generate a "Community Spotlight" section profiling ONE local business, artisan, or community initiative in San Luis Potosí, México.
This is NOT limited to new places - feature established gems that deserve recognition.

TYPES OF FEATURES:
- A family-run restaurant with decades of history
- A local artisan or craftsperson (pottery, textiles, leather)
- A community organization or charity
- A local artist, musician, or cultural figure
- A traditional market vendor with a great story
- A small business doing something unique

SEARCH: "emprendedores San Luis Potosí", "negocios locales SLP", "artesanos SLP"

FORMAT:
- Name of the business/person
- Type (e.g., "Family Restaurant · Est. 1985", "Local Artisan · Ceramics")
- 3-4 sentences telling their story
- Full address
- Instagram, phone, or website

TONE: Celebratory and genuine.
Return the complete <tr> section HTML with warm amber styling (background #FFFBEB, accent #92400E).`,

    comunidad: `Generate a "Comunidad" section with a community announcement or local business feature.
Make it friendly and engaging, like a friend sharing a recommendation.
${context ? `Use this content as inspiration: ${context}` : 'Create a general community update.'}
Return the complete <tr> section HTML with the 🤝 Comunidad header.`,

    market_watch: `Generate a "Market Watch" USD/MXN snapshot for San Luis Potosí, México.
📅 TODAY IS: ${dates.todayFormatted}

🚨 ABSOLUTE RULE: Ship verified numbers only. Do NOT invent, estimate, or recall
from memory. This section shows ONE data point: the USD/MXN exchange rate.

USD/MXN EXCHANGE RATE — USE THIS EXACT VALUE (already fetched from a live API):
${exchangeRateBlock}

⛔ Do NOT search for the exchange rate. Do NOT modify the value above.
⛔ Do NOT use any rate from your training data (e.g. ~$19 or ~$20 MXN).
⛔ Do NOT add gasoline prices, LP gas prices, or any other number to this block.
✅ Copy the rate above EXACTLY and display it centered and prominent.

TREND NOTE (one short line below the rate):
- Factual only, based on the rate above. No predictions, no direction claims.
- Good: "Tipo de cambio actualizado hoy."
- Bad: any claim about momentum or forecast.

LAYOUT: One centered block — 💰 Market Watch header, the USD/MXN rate in large
bold green text, and a small muted trend note underneath. No 3-column table.
Return the complete <tr> section HTML with the 💰 Market Watch header.`,

    spot_of_the_week: `Generate a "Spot of the Week" feature for San Luis Potosí, México.
Feature ONE established but lesser-known place in SLP city — NOT a new opening.
Types: scenic viewpoints, hidden courtyards, neighborhood parks, traditional market stalls,
quiet cafés, street art corridors, lesser-known museums, artisan workshops.

🎲 Variation seed (pick something DIFFERENT): ${variationSeed}

Include:
- Specific name and exact address
- 3-4 sentences on what makes it special
- Best time to visit
- Approximate cost or "Free"

Match the HTML structure and styling of the original.
Return the complete <tr> section HTML with the 📍 Spot of the Week header.`,

    spanish_corner: `Generate a "Spanish Corner" section teaching one useful potosino/Mexican phrase or expression.

🎲 Variation seed (pick a DIFFERENT phrase than last time): ${variationSeed}

Include:
- The phrase in Spanish (bold)
- Literal translation
- What it actually means / when to use it
- A short example in context
- Pronunciation tip if it helps

Topics: potosino slang, Mexican idioms, useful expat phrases, formal vs. informal usage,
regional food vocabulary. Keep it light and actually useful.

Match the HTML structure of the original section.
Return the complete <tr> section HTML with the 🗣️ Spanish Corner header.`,

    more_events: `Generate 2-3 additional events happening in San Luis Potosí, MÉXICO this week.

📅 TODAY IS: ${dates.todayFormatted}
📅 EVENTS MUST BE BETWEEN: ${dates.dateRange}
⛔ REJECT any event from ${dates.prevMonthName1} or ${dates.prevMonthName2}
✅ ONLY events in ${dates.currentMonth} ${dates.currentYear}

These are SECONDARY picks — shorter format than the "Top Picks" above.
Each event needs: name, date, venue + neighborhood, time, cost in MXN.

Match the HTML structure of the original section.
Return the complete <tr> section HTML.`
  };

  const prompt = prompts[sectionType];
  if (!prompt) {
    throw new Error(
      `No regeneration prompt is defined for section type "${sectionType}". ` +
      `Supported types: ${Object.keys(prompts).join(', ')}.`
    );
  }

  const fullPrompt = `
You are the editor of "San Luis Way Weekly", a newsletter for expats and locals in San Luis Potosí, MÉXICO.

╔══════════════════════════════════════════════════════════════════════════╗
║  🚨 CRITICAL: DATE AND LOCATION REQUIREMENTS 🚨                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║  📅 TODAY IS: ${dates.todayFormatted}
║  📅 CURRENT MONTH: ${dates.currentMonth} ${dates.currentYear}
║                                                                          ║
║  ⛔ REJECT content from ${dates.prevMonthName1} or ${dates.prevMonthName2}
║  ⛔ REJECT content with "${dates.prevMonthSpanish1}" or "${dates.prevMonthSpanish2}" dates
║  ✅ ONLY include content from ${dates.currentMonth} ${dates.currentYear}
║                                                                          ║
║  🇲🇽 ALL content must be about SAN LUIS POTOSÍ, MÉXICO                   ║
║  ❌ NOT Arizona, California, Texas, or any US location                   ║
║  💰 Prices in MXN (Mexican pesos) | 📞 Phone numbers start with +52     ║
╚══════════════════════════════════════════════════════════════════════════╝

${prompt}

Current section being replaced:
${currentHtml.substring(0, 500)}...

Generate a fresh, engaging replacement. Match the HTML structure and styling of the original.
Return ONLY the raw HTML, no markdown code blocks.
`;

  const cleanOutput = (raw: string): string => {
    let out = raw.trim()
      .replace(/^```html\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .replace(/<img[^>]*>/gi, '');
    return out;
  };

  // Try OpenAI with web_search_preview first (Responses API — gpt-5.4 can
  // ground events/news in live search), fall back to Gemini.
  let lastError: unknown = null;
  if (openai) {
    try {
      const res = await openai.responses.create({
        model: 'gpt-5.4',
        tools: [{ type: 'web_search_preview' }],
        instructions: 'You generate HTML newsletter sections for "San Luis Way Weekly" (San Luis Potosí, México). Return ONLY the raw HTML section, no markdown fences. Use web_search for time-sensitive facts (events, news, hours, prices).',
        input: fullPrompt,
        max_output_tokens: 2000,
        temperature: 0.9,
        top_p: 0.95,
      });
      const newHtml = cleanOutput(res.output_text || '');
      if (!newHtml || newHtml.length < 20) throw new Error('OpenAI returned empty or truncated content');
      return newHtml;
    } catch (err) {
      console.error('OpenAI section regen error, trying Gemini fallback:', err);
      lastError = err;
    }
  }

  if (geminiFallback) {
    try {
      const result = await geminiFallback.generateContent(fullPrompt);
      const response = await result.response;
      const newHtml = cleanOutput(response.text());
      if (!newHtml || newHtml.length < 20) throw new Error('Gemini returned empty or truncated content');
      return newHtml;
    } catch (err) {
      console.error('Gemini fallback also failed:', err);
      lastError = err;
    }
  }

  const message = lastError instanceof Error ? lastError.message : 'Unknown error';
  throw new Error(`Section regeneration failed: ${message}`);
}

/**
 * Reconstruct newsletter HTML from sections
 */
export function reconstructNewsletter(sections: NewsletterSection[], originalHtml: string): string {
  let newHtml = originalHtml;

  for (const section of sections) {
    // Find and replace the section in the original HTML
    const pattern = SECTION_PATTERNS.find(p => p.id === section.id);
    if (pattern) {
      const startMatch = newHtml.match(pattern.startPattern);
      if (startMatch && startMatch.index !== undefined) {
        const startIndex = startMatch.index;
        const endMatch = newHtml.substring(startIndex + 1).match(pattern.endPattern);

        if (endMatch && endMatch.index !== undefined) {
          const endIndex = startIndex + 1 + endMatch.index;
          const before = newHtml.substring(0, startIndex);
          const after = newHtml.substring(endIndex);
          newHtml = before + section.html + '\n\n          ' + after;
        }
      }
    }
  }

  return newHtml;
}
