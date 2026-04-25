require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'mexico-city-to-guadalajara-road-trip-via-san-luis-potosi-2026';

const HERO = '/images/centro-historico/teatro-de-la-paz.jpg';
const IMG_TANGAMANGA = '/images/parque-tangamanga/banner.jpg';
const IMG_FOOD = '/images/food/enchiladas-potosinas.jpg';
const IMG_HUASTECA = '/images/outdoors/huasteca-jungle.jpg';

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long is the drive from Mexico City to Guadalajara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct via Hwy 15D it is ~540 km / 6h 30m without stops. Via San Luis Potosí (Hwy 57D north then Hwy 80/90 west) it is ~730 km / 8h 30m of pure driving — but you split it into two manageable days with a worthwhile overnight in SLP and end up only ~2 hours behind the direct route. The difference buys you a UNESCO Centro Histórico, the Huasteca Potosina region, and one of Mexico\'s best food cities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is the road from Mexico City to Guadalajara via SLP safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Hwy 57D (CDMX to SLP) and Hwy 80/90 (SLP to GDL) are tolled federal highways with regular Federal Highway Police patrols and well-maintained pavement. Daytime driving is the default recommendation. Avoid driving after dark on intercity stretches. The US State Department lists SLP and Jalisco at Travel Advisory Level 2 (Exercise Increased Caution) — the same as France or the UK — for the toll-road corridors.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do tolls cost on the CDMX–SLP–Guadalajara route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 700–800 MXN ($40–46 USD) in tolls each way for a regular passenger car. CDMX–SLP via Hwy 57D has 3 main toll booths (Chichimequillas, Palmillas, Tepotzotlán). SLP–Guadalajara via Hwy 80/90 has 2 main toll booths. A TAG transponder speeds up booth crossings but is not required.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is worth stopping for between Mexico City and Guadalajara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí is the standout midpoint — UNESCO Centro Histórico, internationally-recognized food scene, Parque Tangamanga (411 ha), and access to the Huasteca Potosina day trip. Other stops worth considering: Querétaro (UNESCO Centro), San Miguel de Allende (UNESCO), Guanajuato (UNESCO), Aguascalientes (Feria de San Marcos in April), and Tlaquepaque on the Guadalajara approach.'
      }
    },
    {
      '@type': 'Question',
      name: 'Should I rent a car or take the bus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both work. ETN executive bus runs CDMX–SLP (6–7h, ~700 MXN) and SLP–GDL (5–6h, ~650 MXN) with comfortable reclining seats and onboard wifi. Rental car gives flexibility for spontaneous stops (Real de Catorce, Huasteca, Tlaquepaque) and costs ~$50–80 USD/day plus fuel. For a 2-city trip, bus is fine; for a multi-stop road trip with day trips, rent.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long should the road trip be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimum 4 days (1 in CDMX, 2 in SLP, 1 in GDL — leaves no time for anything else). Comfortable 7 days (2 in CDMX, 3 in SLP including a Huasteca day trip, 2 in GDL). Ideal 10 days (CDMX 2, SLP 3, side trip to San Miguel de Allende and Guanajuato 2, GDL 3).'
      }
    }
  ]
});

const faqJsonLdES = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto se hace de Ciudad de México a Guadalajara en auto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Directo por la Hwy 15D son ~540 km / 6h 30m sin paradas. Vía San Luis Potosí (Hwy 57D al norte y luego Hwy 80/90 al oeste) son ~730 km / 8h 30m de manejo puro — pero lo divides en dos días manejables con un buen overnight en SLP y terminas solo ~2 horas atrás de la ruta directa. La diferencia te da un Centro Histórico UNESCO, la región de la Huasteca Potosina y una de las mejores ciudades gastronómicas de México.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Es segura la carretera CDMX–SLP–Guadalajara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tanto la Hwy 57D (CDMX a SLP) como la Hwy 80/90 (SLP a GDL) son carreteras federales de cuota con patrullas regulares de la Policía Federal de Caminos y pavimento bien mantenido. Manejar de día es la recomendación por default. Evita manejar de noche en tramos intercitarios. El Departamento de Estado de EUA clasifica a SLP y Jalisco en Nivel 2 (Mayor Precaución) — el mismo que Francia o Reino Unido — para los corredores de cuota.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuestan las casetas en la ruta CDMX–SLP–Guadalajara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aproximadamente 700–800 MXN ($40–46 USD) en casetas por sentido para auto particular. CDMX–SLP por Hwy 57D tiene 3 casetas principales (Chichimequillas, Palmillas, Tepotzotlán). SLP–Guadalajara por Hwy 80/90 tiene 2 casetas principales. Un TAG agiliza el paso pero no es obligatorio.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué vale la pena parar entre CDMX y Guadalajara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí es la parada estrella en medio — Centro Histórico UNESCO, escena gastronómica reconocida internacionalmente, Parque Tangamanga (411 ha) y acceso a la Huasteca Potosina como day trip. Otras paradas a considerar: Querétaro (Centro UNESCO), San Miguel de Allende (UNESCO), Guanajuato (UNESCO), Aguascalientes (Feria de San Marcos en abril) y Tlaquepaque en la aproximación a Guadalajara.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Renta de auto o autobús?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambos funcionan. El autobús ETN ejecutivo corre CDMX–SLP (6–7h, ~700 MXN) y SLP–GDL (5–6h, ~650 MXN) con asientos reclinables cómodos y wifi a bordo. La renta de auto te da flexibilidad para paradas espontáneas (Real de Catorce, Huasteca, Tlaquepaque) y cuesta ~$50–80 USD/día más combustible. Para un viaje de 2 ciudades, el autobús está bien; para road trip de varias paradas con day trips, renta.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuántos días debe durar el road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mínimo 4 días (1 en CDMX, 2 en SLP, 1 en GDL — no deja tiempo para nada más). Cómodo 7 días (2 en CDMX, 3 en SLP incluyendo day trip a Huasteca, 2 en GDL). Ideal 10 días (CDMX 2, SLP 3, escapada a San Miguel de Allende y Guanajuato 2, GDL 3).'
      }
    }
  ]
});

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Teatro de la Paz in San Luis Potosí — UNESCO Centro Histórico, the natural midpoint of the Mexico City to Guadalajara road trip" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">🚗 Road Trip Guide · Verified April 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">Most CDMX→Guadalajara visitors take the direct 6h 30m drive on Hwy 15D and miss one of Mexico's best cities.</p>
  <p class="text-gray-700">The detour through San Luis Potosí adds about 2 hours of total driving but unlocks a UNESCO Centro Histórico, the Huasteca Potosina day-trip region, and a food scene that punches way above its weight. This is the trip you should be planning for summer 2026.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">The Bottom Line</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Direct route (Hwy 15D):</strong> ~540 km / 6h 30m. Boring but fast.</li>
    <li><strong>Via San Luis Potosí (Hwy 57D + 80/90):</strong> ~730 km / 8h 30m of driving, split into 2 days.</li>
    <li><strong>What you gain:</strong> UNESCO World Heritage Centro Histórico, the Huasteca Potosina, internationally-recognized SLP food scene, and a real Mexican city most foreigners never visit.</li>
    <li><strong>What you trade:</strong> ~2 hours of net travel time. Worth it.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Direct vs. via SLP — Compared</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">Route</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Distance</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Drive time</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Tolls (each way)</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">What you see</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Direct (Hwy 15D)</td><td class="px-4 py-3 text-center">~540 km</td><td class="px-4 py-3 text-center">6h 30m</td><td class="px-4 py-3 text-center">~600 MXN</td><td class="px-4 py-3">Highway and Toluca/Morelia bypass</td></tr>
      <tr class="bg-orange-50"><td class="px-4 py-3 font-semibold">Via SLP (Hwy 57D + 80/90)</td><td class="px-4 py-3 text-center">~730 km</td><td class="px-4 py-3 text-center">8h 30m total</td><td class="px-4 py-3 text-center">~750 MXN</td><td class="px-4 py-3 text-orange-900 font-medium">UNESCO Centro Histórico SLP, optional Huasteca + Real de Catorce, food scene</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">The direct route makes sense if you have a fixed deadline. The SLP detour makes sense for almost everyone else — especially anyone visiting Mexico for the 2026 tournament who wants a real cultural experience between matches. See our <a href="/blog/mexico-2026-stopover-san-luis-potosi" class="text-blue-600 underline font-medium">Mexico 2026 Stopover Guide</a> for the tournament-specific case.</p>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">The 3-Day Itinerary (CDMX → SLP → GDL)</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Day 1 — CDMX departure to SLP arrival</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>7:30 AM</strong> — Leave CDMX. Take Periférico Norte to Hwy 57D. Aim to clear the metro area before traffic.</li>
  <li><strong>11:30 AM</strong> — Stop at <strong>Querétaro</strong> for lunch in the historic center (UNESCO inscribed, walkable, 1 hour off your trip is enough for a sandwich and a stretch). Or push through.</li>
  <li><strong>1:30 PM</strong> — Continue north on Hwy 57D. ~3 main toll booths.</li>
  <li><strong>3:00 PM</strong> — Arrive SLP. Check in to your hotel (Centro Histórico or Lomas).</li>
  <li><strong>4:30 PM</strong> — Walking tour: Plaza de Armas, Catedral, Plaza de los Fundadores, Caja del Agua, Templo del Carmen.</li>
  <li><strong>8:00 PM</strong> — Dinner. La Posta del Carmen (Centro), or Cuatro Almas if you arrive early enough for a brunch dinner.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Day 2 — Full day in San Luis Potosí</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>9:00 AM</strong> — Brunch at La Parroquia Potosina (Av. Carranza 300) — try enchiladas potosinas, the city signature.</li>
  <li><strong>11:00 AM</strong> — Museo Federico Silva (sculpture museum) or Museo Nacional de la Máscara.</li>
  <li><strong>1:00 PM</strong> — Lunch at Mercado República — gorditas at the stalls.</li>
  <li><strong>3:00 PM</strong> — Parque Tangamanga I — 411 hectares, free, includes the zoo and a Japanese garden.</li>
  <li><strong>6:00 PM</strong> — Sunset on the steps of Templo del Carmen, then drinks on Av. Carranza.</li>
  <li><strong>8:30 PM</strong> — Dinner. Antica Trattoria for Italian, or Tres60 Bistro for fusion.</li>
</ul>

<div class="mb-8">
<img src="${IMG_TANGAMANGA}" alt="Parque Tangamanga in San Luis Potosí — 411 hectares of urban green space" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Day 3 — SLP to Guadalajara</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>8:00 AM</strong> — Breakfast at hotel. Check out.</li>
  <li><strong>9:00 AM</strong> — Leave SLP via Hwy 80 west.</li>
  <li><strong>12:30 PM</strong> — Arrive Guadalajara metro. Stop at <strong>Tlaquepaque</strong> for lunch and shopping (15 minutes off the highway, easily 2 hours of artisan markets and tequila tastings).</li>
  <li><strong>3:00 PM</strong> — Check in to your GDL hotel.</li>
</ul>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">The 7-Day Itinerary (recommended)</h2>

<p class="text-gray-700 mb-6">If you have a week, this is the version that does justice to the route:</p>

<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Days 1–2:</strong> Mexico City — Coyoacán, Xochimilco, museums.</li>
  <li><strong>Day 3:</strong> Drive CDMX → SLP via Hwy 57D. Arrive afternoon, walk Centro Histórico.</li>
  <li><strong>Day 4:</strong> Full day SLP — brunch on Carranza, museums, Tangamanga.</li>
  <li><strong>Day 5:</strong> <strong>Huasteca Potosina day trip</strong> from SLP. Leave 6 AM, return after dark. See <a href="/outdoors" class="text-blue-600 underline font-medium">our outdoors guide</a> for waterfalls and rivers.</li>
  <li><strong>Day 6:</strong> Drive SLP → GDL via Hwy 80/90 with stop in Tlaquepaque.</li>
  <li><strong>Day 7:</strong> Guadalajara — historic center, Tequila day trip, mariachis at Plaza de los Mariachis.</li>
</ol>
</section>

<div class="mb-8">
<img src="${IMG_HUASTECA}" alt="Huasteca Potosina jungle and rivers — accessible day trip from San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Practical: Tolls, Fuel, Safety</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Tolls:</strong> ~700–800 MXN each way for the full CDMX–SLP–GDL route. Pay in cash (pesos) or with a TAG transponder.</li>
  <li><strong>Fuel:</strong> ~5–6 fuel stops total round-trip. Premium (gasolina premium) is generally a few pesos more per liter than Magna; both are widely available.</li>
  <li><strong>Safety:</strong> Daytime driving on the federal toll highways is the standard recommendation. Avoid intercity driving after dark. The toll roads have Federal Highway Police patrols.</li>
  <li><strong>Insurance:</strong> If renting, take Mexican-issued auto insurance — US/Canadian policies do not extend below the border.</li>
  <li><strong>Cell coverage:</strong> Telcel works almost everywhere on the route. AT&amp;T Mexico has solid coverage in cities but spottier on the desert stretches between SLP and the Huasteca.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Get the SLP weekly during your trip</h3>
<p class="text-orange-900 mb-4">We send a free Monday newsletter with: this week's events, restaurant openings, transport changes, and tips for visitors. Used by 2,800+ readers.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Subscribe — free, takes 10 seconds</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">FAQ</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">How long is the drive from Mexico City to Guadalajara?</summary>
  <p class="text-gray-700 mt-3">Direct: ~540 km / 6h 30m via Hwy 15D. Via SLP: ~730 km / 8h 30m of driving, split over 2 days.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">Is the road safe?</summary>
  <p class="text-gray-700 mt-3">Yes during daytime on the federal toll highways. Both SLP and Jalisco are at US State Department Travel Advisory Level 2 — same as France or the UK.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">How much do tolls cost?</summary>
  <p class="text-gray-700 mt-3">~700–800 MXN ($40–46 USD) each way for a passenger car.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">What is worth stopping for between CDMX and Guadalajara?</summary>
  <p class="text-gray-700 mt-3">SLP is the standout. Other options: Querétaro, San Miguel de Allende, Guanajuato, Aguascalientes, Tlaquepaque on the GDL approach.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Rental car or bus?</summary>
  <p class="text-gray-700 mt-3">ETN bus works for 2-city trips (~700 MXN segments). Rental car (~$50–80 USD/day) makes sense for multi-stop road trips with day trips.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">How long should the trip be?</summary>
  <p class="text-gray-700 mt-3">Minimum 4 days, comfortable 7 days, ideal 10 days with side trips to San Miguel de Allende and Guanajuato.</p>
</details>
</section>

<script type="application/ld+json">
${faqJsonLd}
</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Teatro de la Paz en San Luis Potosí — Centro Histórico UNESCO, el punto medio natural del road trip CDMX–Guadalajara" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">🚗 Guía de road trip · Verificada en abril 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">La mayoría de los visitantes que van de CDMX a Guadalajara toman el directo de 6h 30m por la Hwy 15D y se pierden una de las mejores ciudades de México.</p>
  <p class="text-gray-700">El desvío por San Luis Potosí suma como 2 horas de manejo total pero te abre un Centro Histórico UNESCO, la región de la Huasteca Potosina y una escena gastronómica que pega muy por encima de su peso. Este es el viaje que deberías estar planeando para el verano 2026.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">El Resumen</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Ruta directa (Hwy 15D):</strong> ~540 km / 6h 30m. Aburrida pero rápida.</li>
    <li><strong>Vía San Luis Potosí (Hwy 57D + 80/90):</strong> ~730 km / 8h 30m de manejo, divididos en 2 días.</li>
    <li><strong>Lo que ganas:</strong> Centro Histórico Patrimonio UNESCO, la Huasteca Potosina, escena gastronómica reconocida internacionalmente y una ciudad mexicana real que la mayoría de los extranjeros nunca visita.</li>
    <li><strong>Lo que cambias:</strong> ~2 horas de tiempo neto de viaje. Vale la pena.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Directo vs. vía SLP — Comparativo</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">Ruta</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Distancia</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Manejo</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Casetas (sentido)</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">Lo que ves</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Directo (Hwy 15D)</td><td class="px-4 py-3 text-center">~540 km</td><td class="px-4 py-3 text-center">6h 30m</td><td class="px-4 py-3 text-center">~600 MXN</td><td class="px-4 py-3">Carretera y libramiento Toluca/Morelia</td></tr>
      <tr class="bg-orange-50"><td class="px-4 py-3 font-semibold">Vía SLP (Hwy 57D + 80/90)</td><td class="px-4 py-3 text-center">~730 km</td><td class="px-4 py-3 text-center">8h 30m total</td><td class="px-4 py-3 text-center">~750 MXN</td><td class="px-4 py-3 text-orange-900 font-medium">Centro Histórico UNESCO SLP, opcional Huasteca + Real de Catorce, escena gastronómica</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">La ruta directa tiene sentido si tienes una fecha tope fija. El desvío por SLP tiene sentido para casi todos los demás — especialmente quien viaje a México para el torneo 2026 buscando experiencia cultural real entre partidos. Mira nuestra <a href="/blog/mexico-2026-stopover-san-luis-potosi" class="text-blue-600 underline font-medium">Guía de Parada en SLP para México 2026</a> para el caso específico del torneo.</p>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Itinerario de 3 días (CDMX → SLP → GDL)</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Día 1 — Salida CDMX a llegada SLP</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>7:30 AM</strong> — Sales de CDMX. Toma Periférico Norte hacia la Hwy 57D. Aim a salir del área metropolitana antes del tráfico.</li>
  <li><strong>11:30 AM</strong> — Para en <strong>Querétaro</strong> para comer en el centro histórico (UNESCO, caminable, 1 hora basta para un sandwich y estirarte). O sigue derecho.</li>
  <li><strong>1:30 PM</strong> — Continúas al norte por Hwy 57D. ~3 casetas principales.</li>
  <li><strong>3:00 PM</strong> — Llegada SLP. Check in al hotel (Centro Histórico o Lomas).</li>
  <li><strong>4:30 PM</strong> — Caminata: Plaza de Armas, Catedral, Plaza de los Fundadores, Caja del Agua, Templo del Carmen.</li>
  <li><strong>8:00 PM</strong> — Cena. La Posta del Carmen (Centro), o Cuatro Almas si llegas suficientemente temprano para una cena de brunch.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Día 2 — Día completo en San Luis Potosí</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>9:00 AM</strong> — Brunch en La Parroquia Potosina (Av. Carranza 300) — prueba enchiladas potosinas, el platillo signature.</li>
  <li><strong>11:00 AM</strong> — Museo Federico Silva (escultura) o Museo Nacional de la Máscara.</li>
  <li><strong>1:00 PM</strong> — Comida en Mercado República — gorditas en los puestos.</li>
  <li><strong>3:00 PM</strong> — Parque Tangamanga I — 411 hectáreas, gratis, incluye zoológico y jardín japonés.</li>
  <li><strong>6:00 PM</strong> — Atardecer en las escaleras del Templo del Carmen, luego copas en Av. Carranza.</li>
  <li><strong>8:30 PM</strong> — Cena. Antica Trattoria para italiano, o Tres60 Bistro para fusión.</li>
</ul>

<div class="mb-8">
<img src="${IMG_TANGAMANGA}" alt="Parque Tangamanga en San Luis Potosí — 411 hectáreas de espacio verde urbano" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Día 3 — SLP a Guadalajara</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>8:00 AM</strong> — Desayuno en hotel. Check out.</li>
  <li><strong>9:00 AM</strong> — Sales de SLP por Hwy 80 al oeste.</li>
  <li><strong>12:30 PM</strong> — Llegas al área metro de Guadalajara. Para en <strong>Tlaquepaque</strong> para comer y comprar (15 minutos fuera de la carretera, fácil 2 horas de mercados artesanales y catas de tequila).</li>
  <li><strong>3:00 PM</strong> — Check in a tu hotel en GDL.</li>
</ul>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Itinerario de 7 días (recomendado)</h2>

<p class="text-gray-700 mb-6">Si tienes una semana, esta es la versión que le hace justicia a la ruta:</p>

<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Días 1–2:</strong> Ciudad de México — Coyoacán, Xochimilco, museos.</li>
  <li><strong>Día 3:</strong> Manejo CDMX → SLP por Hwy 57D. Llegada por la tarde, caminata por Centro Histórico.</li>
  <li><strong>Día 4:</strong> Día completo en SLP — brunch en Carranza, museos, Tangamanga.</li>
  <li><strong>Día 5:</strong> <strong>Day trip a la Huasteca Potosina</strong> desde SLP. Sales 6 AM, regresas después de oscurecer. Mira nuestra <a href="/outdoors" class="text-blue-600 underline font-medium">guía de outdoors</a> para cascadas y ríos.</li>
  <li><strong>Día 6:</strong> Manejas SLP → GDL por Hwy 80/90 con parada en Tlaquepaque.</li>
  <li><strong>Día 7:</strong> Guadalajara — centro histórico, day trip a Tequila, mariachis en Plaza de los Mariachis.</li>
</ol>
</section>

<div class="mb-8">
<img src="${IMG_HUASTECA}" alt="Selva y ríos de la Huasteca Potosina — day trip accesible desde San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Práctico: Casetas, Combustible, Seguridad</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Casetas:</strong> ~700–800 MXN por sentido para la ruta completa CDMX–SLP–GDL. Pago en efectivo (pesos) o con TAG.</li>
  <li><strong>Combustible:</strong> ~5–6 paradas totales en el viaje redondo. Premium suele ser unos pesos más por litro que Magna; ambos ampliamente disponibles.</li>
  <li><strong>Seguridad:</strong> manejar de día en las federales de cuota es la recomendación estándar. Evita el manejo intercitario de noche. Las cuotas tienen patrullas de la Policía Federal de Caminos.</li>
  <li><strong>Seguro:</strong> si rentas, contrata seguro mexicano — pólizas de EUA/Canadá no aplican abajo de la frontera.</li>
  <li><strong>Cobertura celular:</strong> Telcel funciona casi en toda la ruta. AT&amp;T México tiene buena cobertura en ciudades pero más floja en los tramos desérticos entre SLP y la Huasteca.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Recibe el SLP semanal durante tu viaje</h3>
<p class="text-orange-900 mb-4">Mandamos un newsletter gratis los lunes con: eventos de la semana, aperturas de restaurantes, cambios de transporte y tips para visitantes. Lo leen 2,800+ personas.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Suscríbete — gratis, toma 10 segundos</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas frecuentes</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuánto se hace de CDMX a Guadalajara en auto?</summary>
  <p class="text-gray-700 mt-3">Directo: ~540 km / 6h 30m por la Hwy 15D. Vía SLP: ~730 km / 8h 30m de manejo, divididos en 2 días.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Es segura la carretera?</summary>
  <p class="text-gray-700 mt-3">Sí durante el día en las federales de cuota. SLP y Jalisco están en Travel Advisory Nivel 2 del Departamento de Estado de EUA — igual que Francia o Reino Unido.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuánto cuestan las casetas?</summary>
  <p class="text-gray-700 mt-3">~700–800 MXN ($40–46 USD) por sentido para auto particular.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Qué vale la pena parar entre CDMX y Guadalajara?</summary>
  <p class="text-gray-700 mt-3">SLP es la parada estrella. Otras opciones: Querétaro, San Miguel de Allende, Guanajuato, Aguascalientes, Tlaquepaque en la aproximación a GDL.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Renta de auto o autobús?</summary>
  <p class="text-gray-700 mt-3">El autobús ETN funciona para viajes de 2 ciudades (~700 MXN por tramo). La renta (~$50–80 USD/día) tiene sentido para road trips de varias paradas con day trips.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuántos días debe durar el viaje?</summary>
  <p class="text-gray-700 mt-3">Mínimo 4 días, cómodo 7 días, ideal 10 días con escapadas a San Miguel de Allende y Guanajuato.</p>
</details>
</section>

<script type="application/ld+json">
${faqJsonLdES}
</script>

</div>`;

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: HERO,
  category: 'Travel',
  tags: ['mexico-road-trip', 'cdmx-to-guadalajara', 'san-luis-potosi', 'mexico-2026', 'travel-mexico', 'highway-57', 'highway-80'],

  title: 'Mexico City to Guadalajara Road Trip via San Luis Potosí (2026 Guide)',
  excerpt: 'Skip the boring direct Hwy 15D. The detour via San Luis Potosí adds 2 hours but unlocks a UNESCO Centro Histórico, the Huasteca Potosina, and one of Mexico\'s best food cities. 3- and 7-day itineraries, tolls, safety, fuel.',
  content: contentEN,
  meta_title: 'Mexico City to Guadalajara Road Trip via SLP — 2026 Guide',
  meta_description: 'CDMX to GDL the smart way: detour through San Luis Potosí for UNESCO Centro Histórico, Huasteca Potosina, and a food-city stop. Itineraries, tolls, safety.',

  title_es: 'Road Trip Ciudad de México a Guadalajara vía San Luis Potosí (Guía 2026)',
  excerpt_es: 'Sáltate la aburrida ruta directa Hwy 15D. El desvío por San Luis Potosí suma 2 horas pero te abre un Centro Histórico UNESCO, la Huasteca Potosina y una de las mejores ciudades gastronómicas de México. Itinerarios de 3 y 7 días.',
  content_es: contentES,
  meta_title_es: 'CDMX a Guadalajara vía SLP — Road Trip 2026',
  meta_description_es: 'CDMX a GDL de la forma inteligente: desvío por San Luis Potosí para Centro UNESCO, Huasteca Potosina y parada gastronómica. Itinerarios, casetas, seguridad.',

  title_de: 'Roadtrip Mexiko-Stadt nach Guadalajara über San Luis Potosí (2026)',
  excerpt_de: 'Den langweiligen Direktweg Hwy 15D überspringen. Der Umweg über San Luis Potosí kostet 2 Stunden mehr, eröffnet dafür UNESCO-Welterbe, Huasteca Potosina und eine der besten Food-Städte Mexikos.',
  content_de: contentEN,
  meta_title_de: 'CDMX nach GDL über SLP — Roadtrip 2026',
  meta_description_de: 'Mexiko-Stadt nach Guadalajara: Smarter Umweg über San Luis Potosí für UNESCO-Centro, Huasteca Potosina und Food-Stop. Routen, Maut, Sicherheit.',

  title_ja: 'メキシコシティからグアダラハラへのロードトリップ：サン・ルイス・ポトシ経由（2026年ガイド）',
  excerpt_ja: 'つまらない直行ルートHwy 15Dをスキップ。サン・ルイス・ポトシ経由の迂回は2時間長くなりますが、ユネスコ歴史地区、ワステカ・ポトシナ、メキシコ屈指のグルメシティが楽しめます。',
  content_ja: contentEN,
  meta_title_ja: 'CDMXからGDLへSLP経由 — 2026年ロードトリップ',
  meta_description_ja: 'メキシコシティからグアダラハラへの賢いルート：サン・ルイス・ポトシ経由でユネスコ歴史地区、ワステカ・ポトシナ、グルメ立ち寄り。日程、料金、安全。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }

  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', SLUG)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('Post inserted:', data.id);
  }
  console.log('View at: https://sanluisway.com/blog/' + SLUG);
}

main().then(() => process.exit(0)).catch((err) => { console.error('Fatal:', err); process.exit(1); });
