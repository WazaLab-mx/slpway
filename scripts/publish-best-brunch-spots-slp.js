require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'best-brunch-spots-san-luis-potosi';
const HERO = '/images/food/fusion-restaurant.jpg';
const IMG_TRADITIONAL = '/images/food/traditional-potosino-main.jpg';
const IMG_ENCHILADAS = '/images/food/enchiladas-potosinas.jpg';
const IMG_MODERN = '/images/food/modern-presentation.jpg';
const IMG_ALL = '/images/food/all-restaurants-main.jpg';

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best brunch spot in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most visitors, Cuatro Almas in Lomas Cuarta Sección is the top pick — a specialty brunch restaurant open 8:00 AM to 2:00 PM with a devoted local following for its chipotle chilaquiles and eggs benedict. For a traditional Potosino brunch, La Parroquia Potosina (Av. Venustiano Carranza 300) is the institution, especially on weekends for its enchiladas potosinas and buffet."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for brunch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not usually required on weekdays, but strongly recommended on Saturday and Sunday between 11:00 AM and 1:30 PM, which is peak brunch time in SLP. Popular spots like Cuatro Almas, Refugio Tierra, BRUNA, and Dos Amores routinely fill up — expect a 30–60 minute wait without a booking. Call the restaurant directly or send a WhatsApp message the day before."
      }
    },
    {
      "@type": "Question",
      "name": "Where do locals go for Sunday brunch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Locals favor three clusters: Lomas / Chapultepec (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual near Parque Tangamanga), Centro (La Parroquia Potosina, Tres60 Bistro, Café Corta'o, Café Bostonia, Croque La Vie), and Colinas del Parque (Dos Amores). La Oruga y La Cebada in Centro is a weekend hangout that opens at noon on Saturdays and Sundays with a brunch menu and live music."
      }
    },
    {
      "@type": "Question",
      "name": "Is brunch a Mexican tradition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brunch as a named meal is imported, but the concept of a late weekend morning meal is deeply Mexican — almuerzo, typically eaten between 10 AM and 1 PM, combines what English speakers would split into breakfast and lunch. Modern SLP brunch culture fuses this tradition (chilaquiles, huevos divorciados, enchiladas potosinas) with international additions like eggs benedict, avocado toast, pancakes, and mimosas."
      }
    },
    {
      "@type": "Question",
      "name": "How much does brunch cost in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget brunch for two runs 250–350 MXN (~$14–20 USD) at market stalls like Mercado República or neighborhood cafés. Mid-tier spots like Cuatro Almas, Tres60, or BRUNA average 400–700 MXN (~$22–39 USD) for two with drinks. Upscale hotel brunches (Hyatt Regency, Hilton) and specialty restaurants come in at 800–1,400 MXN (~$45–78 USD) for two."
      }
    },
    {
      "@type": "Question",
      "name": "Which restaurants serve Mexican brunch vs international brunch in SLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For authentic Mexican brunch: La Parroquia Potosina, El Mesón de San Pascual, Gorditas Carmelita, and Mercado República stalls. For international / modern brunch: Cuatro Almas, Refugio Tierra, BRUNA, Dos Amores, and Croque La Vie (French). For fusion that blends both: Tres60 Bistro and Café Bostonia serve chilaquiles alongside eggs benedict and avocado toast."
      }
    },
    {
      "@type": "Question",
      "name": "What should I order at brunch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Don't leave without trying enchiladas potosinas — the city's signature dish, made with guajillo-infused masa folded around Oaxaca cheese and topped with crema, potato, and carrot. Other Potosino brunch musts: chilaquiles with cecina, asado de boda, huevos divorciados, and gorditas from Mercado República. On the international side, eggs benedict at Cuatro Almas and the Jamaican omelette at BRUNA are local favorites."
      }
    },
    {
      "@type": "Question",
      "name": "Do brunch spots in SLP have vegan or vegetarian options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Refugio Tierra offers vegan, vegetarian, and gluten-free options and is the top veggie-friendly brunch spot in the city. Café Bostonia, Cuatro Almas, and Capital Coffee SLP all have vegetarian menus with dishes like chilaquiles verdes, avocado toast, açaí bowls, and plant-based burritos. Ask for 'sin carne' (without meat) or 'vegano' (vegan)."
      }
    }
  ]
});

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Best brunch spots in San Luis Potosí — modern restaurant table with chilaquiles, eggs benedict, and mimosas" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Brunch in San Luis Potosí: The Scene</a></li>
    <li><a href="#quick-pick" class="text-blue-600 hover:text-blue-800">Quick-Pick Table: Top 10 Spots</a></li>
    <li><a href="#profiles" class="text-blue-600 hover:text-blue-800">Restaurant Profiles (10 Spots)</a></li>
    <li><a href="#by-vibe" class="text-blue-600 hover:text-blue-800">Best Brunch by Vibe</a></li>
    <li><a href="#what-to-order" class="text-blue-600 hover:text-blue-800">What to Order: Potosino Brunch Dishes</a></li>
    <li><a href="#drinks" class="text-blue-600 hover:text-blue-800">Drinks to Pair</a></li>
    <li><a href="#neighborhoods" class="text-blue-600 hover:text-blue-800">Brunch Neighborhoods Map</a></li>
    <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Tips for Visitors</a></li>
    <li><a href="#budget" class="text-blue-600 hover:text-blue-800">Budget Guide</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">FAQ</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Key Takeaways</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Best overall brunch:</strong> Cuatro Almas (Lomas Cuarta Sección) — chipotle chilaquiles, eggs benedict, open 8 AM–2 PM.</li>
    <li><strong>Best traditional Potosino brunch:</strong> La Parroquia Potosina (Centro) — weekend buffet, legendary enchiladas potosinas.</li>
    <li><strong>Best trendy / instagrammable:</strong> BRUNA SLP and Dos Amores — covered terraces, innovative plates.</li>
    <li><strong>Best French-style brunch:</strong> Croque La Vie — croque-monsieur, pain perdu, crème brûlée.</li>
    <li><strong>Peak time:</strong> Sunday 11:00 AM–1:00 PM — book 24 hours ahead at any of the top spots.</li>
    <li><strong>Brunch for two:</strong> 250 MXN (~$14 USD) budget up to 1,400 MXN (~$78 USD) upscale.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Brunch in San Luis Potosí: A Newer Tradition with Deep Roots</h2>

<p class="text-gray-700 mb-6"><strong>If you're searching for the best brunch spots near me in San Luis Potosí, the good news is the scene has exploded in the last five years.</strong> Brunch as a named meal is relatively new to SLP, but the cultural foundation has always been here: almuerzo, the late-morning meal eaten between 10 AM and 1 PM, is how Potosino families have always closed out their weekends. What's changed is the aesthetic — specialty coffee bars, sourdough bakeries, covered terraces, and the mimosa-forward weekend energy you'd expect in Polanco or Roma Norte.</p>

<p class="text-gray-700 mb-6">Brunch in SLP lives in three overlapping worlds. First, the <strong>traditional Potosino kitchens</strong> — places like La Parroquia Potosina and El Mesón de San Pascual — which have served enchiladas potosinas, huevos rancheros, and café de olla for decades and happen to hit every note of what expats call brunch. Second, the <strong>new-wave brunch restaurants</strong> like Cuatro Almas, Refugio Tierra, BRUNA, and Dos Amores, which launched in the late 2010s and early 2020s specifically to serve the late-morning weekend crowd with eggs benedict, avocado toast, açaí bowls, and mimosas. Third, the <strong>specialty coffee and bakery scene</strong> — Café Bostonia, Café Corta'o, Capital Coffee SLP — which pair sourdough, canelés, and flat whites with chilaquiles and omelettes.</p>

<p class="text-gray-700 mb-6">The altitude matters more than you'd think. SLP sits at 1,863 m (6,112 ft), which means mimosas, micheladas, and mezcal cocktails hit harder than at sea level. Hydrate. Order the agua de jamaica alongside. The upside of the elevation is cool weather nearly year-round — brunch on a sunny terrace in SLP between November and April is one of the genuinely great weekend experiences in central Mexico.</p>

<p class="text-gray-700 mb-6">This guide profiles the <strong>10 best brunch places in San Luis Potosí</strong> — verified addresses, weekend hours, signature dishes, price ranges, and practical details for parking, reservations, and kids. It's aimed at locals hunting for a new Sunday spot, expats who just moved in and want the insider list, and tourists looking for something better than the hotel buffet. For related reading, see our <a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">early breakfast spots guide</a>, <a href="/traditional-cuisine" class="text-blue-600 underline">traditional Potosino cuisine overview</a>, and the full <a href="/restaurants" class="text-blue-600 underline">SLP restaurant directory</a>.</p>
</section>

<section id="quick-pick" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Quick-Pick Table: Top 10 Brunch Spots in San Luis Potosí</h2>

<div class="overflow-x-auto mb-12">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #ea580c, #db2777);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Restaurant</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Vibe</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Signature Dish</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Price (2 ppl)</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Weekend Wait</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Area</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Cuatro Almas</td><td class="px-4 py-3">Chic local</td><td class="px-4 py-3">Chipotle chilaquiles</td><td class="px-4 py-3 text-center">$450–650 MXN</td><td class="px-4 py-3 text-center">30–45 min</td><td class="px-4 py-3">Lomas 4ta</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">La Parroquia Potosina</td><td class="px-4 py-3">Traditional</td><td class="px-4 py-3">Enchiladas potosinas</td><td class="px-4 py-3 text-center">$300–450 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Refugio Tierra</td><td class="px-4 py-3">Healthy chic</td><td class="px-4 py-3">Eggs benedict, veggie bowls</td><td class="px-4 py-3 text-center">$500–700 MXN</td><td class="px-4 py-3 text-center">30–60 min</td><td class="px-4 py-3">Chapultepec</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">El Mesón de San Pascual</td><td class="px-4 py-3">Traditional / garden</td><td class="px-4 py-3">Chilaquiles con cecina</td><td class="px-4 py-3 text-center">$350–500 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Chapultepec</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">BRUNA SLP</td><td class="px-4 py-3">Trendy terrace</td><td class="px-4 py-3">Jamaican omelette</td><td class="px-4 py-3 text-center">$450–650 MXN</td><td class="px-4 py-3 text-center">20–45 min</td><td class="px-4 py-3">Lomas</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Dos Amores</td><td class="px-4 py-3">Instagrammable</td><td class="px-4 py-3">Brunch plates, açaí</td><td class="px-4 py-3 text-center">$450–600 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Colinas del Parque</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Croque La Vie</td><td class="px-4 py-3">French casual</td><td class="px-4 py-3">Croque-monsieur, pain perdu</td><td class="px-4 py-3 text-center">$400–600 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Café Bostonia</td><td class="px-4 py-3">Bakery café</td><td class="px-4 py-3">Huevos divorciados, sourdough</td><td class="px-4 py-3 text-center">$350–550 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro / Universidad</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Tres60 Bistro</td><td class="px-4 py-3">Bistro casual</td><td class="px-4 py-3">Chilaquiles, enchiladas suizas</td><td class="px-4 py-3 text-center">$350–550 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">La Oruga y La Cebada</td><td class="px-4 py-3">Live-music brunch</td><td class="px-4 py-3">Sunday brunch + live music</td><td class="px-4 py-3 text-center">$500–800 MXN</td><td class="px-4 py-3 text-center">30–60 min</td><td class="px-4 py-3">Centro</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Prices in Mexican pesos, two people with drinks; approximate at 18 MXN = $1 USD. Waits reflect Sunday 11:30 AM–1:30 PM peak.</p>
</section>

<section id="profiles" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Brunch Restaurant Profiles</h2>

<div class="mb-8">
<img src="${IMG_MODERN}" alt="Modern brunch plating in San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<!-- 1 Cuatro Almas -->
<div class="bg-white border-2 border-orange-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-orange-900 mb-2">1. Cuatro Almas — The Locals' Favorite</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Lomas Cuarta Sección &nbsp;|&nbsp; <strong>Address:</strong> Sierra Pedroso 105 &nbsp;|&nbsp; <strong>Hours:</strong> Daily 8:00 AM–2:00 PM &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 652 9008</p>
<p class="text-gray-700 mb-3">The consensus pick for the best brunch in San Luis Potosí. Tucked into a quiet residential street in Lomas, Cuatro Almas (cuatroalmas.mx) is a dedicated breakfast-and-brunch concept — no dinner, no happy hour distractions. The <strong>chipotle chilaquiles</strong> are the dish locals bring out-of-town friends for. The eggs benedict and the house French toast are the gringo-friendly alternatives.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-orange-50 rounded p-2"><strong>Price:</strong> $$<br/>$450–650 MXN / 2</div>
<div class="bg-orange-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended weekends</div>
<div class="bg-orange-50 rounded p-2"><strong>Parking:</strong><br/>Street + valet</div>
<div class="bg-orange-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Wifi:</strong> Yes</div>
</div>
</div>

<!-- 2 La Parroquia Potosina -->
<div class="bg-white border-2 border-red-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-red-900 mb-2">2. La Parroquia Potosina — The Institution</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro Histórico &nbsp;|&nbsp; <strong>Address:</strong> Av. Venustiano Carranza 300 &nbsp;|&nbsp; <strong>Hours:</strong> Mon–Sat 7:00 AM–midnight; weekend brunch buffet Fri–Sun</p>
<p class="text-gray-700 mb-3">If you only eat one traditional brunch in SLP, eat it here. La Parroquia has been serving Potosinos since before brunch was a word, and its <strong>enchiladas potosinas</strong> — guajillo-stained masa folded around queso Oaxaca, topped with potato-and-carrot guiso, crema, and crumbled queso fresco — are the benchmark against which every other plate in the city is measured. The Friday-through-Sunday buffet is the best-value sit-down meal in Centro.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-red-50 rounded p-2"><strong>Price:</strong> $<br/>$300–450 MXN / 2</div>
<div class="bg-red-50 rounded p-2"><strong>Reservations:</strong><br/>Not required</div>
<div class="bg-red-50 rounded p-2"><strong>Parking:</strong><br/>Street + nearby lots</div>
<div class="bg-red-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Wifi:</strong> Limited</div>
</div>
</div>

<!-- 3 Refugio Tierra -->
<div class="bg-white border-2 border-green-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-green-900 mb-2">3. Refugio Tierra — Best Healthy / Veggie Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Privadas del Pedregal (near Chapultepec) &nbsp;|&nbsp; <strong>Address:</strong> Av. Parque Chapultepec 1335 &nbsp;|&nbsp; <strong>Hours:</strong> Tue–Sun 8:00 AM–2:30 PM (closed Mon) &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 210 0778</p>
<p class="text-gray-700 mb-3">The Lomas-area spot for anyone wanting the brunch experience without the heaviness. Refugio Tierra offers <strong>vegan, vegetarian, and gluten-free menus</strong> alongside the standard chilaquiles and eggs benedict, with an emphasis on fresh juices, smoothie bowls, and garden-forward plating. The patio is one of the city's most photogenic brunch spaces.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-green-50 rounded p-2"><strong>Price:</strong> $$<br/>$500–700 MXN / 2</div>
<div class="bg-green-50 rounded p-2"><strong>Reservations:</strong><br/>Strongly recommended</div>
<div class="bg-green-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-green-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Dog-friendly:</strong> Patio</div>
</div>
</div>

<!-- 4 El Mesón de San Pascual -->
<div class="bg-white border-2 border-yellow-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-yellow-900 mb-2">4. El Mesón de San Pascual — Best Traditional + Garden</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Chapultepec (near Parque Tangamanga I) &nbsp;|&nbsp; <strong>Address:</strong> Av. Parque Chapultepec 404 &nbsp;|&nbsp; <strong>Hours:</strong> Daily 7:30 AM–1:45 PM</p>
<p class="text-gray-700 mb-3">A hidden-gem Potosino kitchen wedged against Parque Tangamanga, Mesón de San Pascual is a locals' secret for traditional brunch in a quiet garden setting. Order the <strong>chilaquiles con cecina</strong> in cascabel or pasilla salsa, paired with café de olla in clay mugs. Very popular with families walking or cycling in the park on Sunday mornings.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-yellow-50 rounded p-2"><strong>Price:</strong> $<br/>$350–500 MXN / 2</div>
<div class="bg-yellow-50 rounded p-2"><strong>Reservations:</strong><br/>Not required</div>
<div class="bg-yellow-50 rounded p-2"><strong>Parking:</strong><br/>Yes (lot)</div>
<div class="bg-yellow-50 rounded p-2"><strong>Kids:</strong> Excellent<br/><strong>Wifi:</strong> Yes</div>
</div>
</div>

<!-- 5 BRUNA -->
<div class="bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-purple-900 mb-2">5. BRUNA SLP — Best Trendy Terrace</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Lomas area (outside Centro) &nbsp;|&nbsp; <strong>Hours:</strong> Weekend brunch 9:00 AM–3:00 PM (check Facebook BRUNA SLP)</p>
<p class="text-gray-700 mb-3">BRUNA is what happens when a CDMX-style brunch concept lands in SLP and nails it. The covered terrace, the Jamaican omelette, the aguas frescas in cut-crystal pitchers — it's the current favorite for expat group brunches and birthday celebrations. Reasonably priced despite the Instagram feed appearance, with ample parking across the median.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-purple-50 rounded p-2"><strong>Price:</strong> $$<br/>$450–650 MXN / 2</div>
<div class="bg-purple-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended</div>
<div class="bg-purple-50 rounded p-2"><strong>Parking:</strong><br/>Yes (across street)</div>
<div class="bg-purple-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Groups:</strong> Ideal</div>
</div>
</div>

<!-- 6 Dos Amores -->
<div class="bg-white border-2 border-pink-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-pink-900 mb-2">6. Dos Amores Brunch &amp; Meal — Most Instagrammable</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Colinas del Parque &nbsp;|&nbsp; <strong>Address:</strong> Parque Central 455 &nbsp;|&nbsp; <strong>Hours:</strong> Mon &amp; Wed–Sun 8:30 AM–4:00 PM (closed Tue) &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 165 3308</p>
<p class="text-gray-700 mb-3">A dedicated brunch concept with pastel-toned interiors, açaí bowls, elaborate French toast, and the full social-media-friendly plating. Dos Amores has become the go-to for Sunday dates and girls' brunches in the south-west of the city. Portions are generous, coffee is excellent, and they do dine-in, takeout, and small-event catering.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-pink-50 rounded p-2"><strong>Price:</strong> $$<br/>$450–600 MXN / 2</div>
<div class="bg-pink-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended weekends</div>
<div class="bg-pink-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-pink-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Wifi:</strong> Yes</div>
</div>
</div>

<!-- 7 Croque La Vie -->
<div class="bg-white border-2 border-blue-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-blue-900 mb-2">7. Croque La Vie — Best French-Style Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro / Universidad &nbsp;|&nbsp; <strong>Address:</strong> Av. Universidad 260 &nbsp;|&nbsp; <strong>Hours:</strong> Tue–Sat 9:00 AM–10:00 PM; Sun 10:00 AM–8:00 PM (closed Mon) &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 123 4391</p>
<p class="text-gray-700 mb-3">Mexico's regional food culture meets Paris here. The first French restaurant in SLP specialized in <strong>croque-monsieur</strong>, Croque La Vie is the move when you want something different on Sunday — pain perdu (French toast), croque madame with a perfect sunny-side egg, crème brûlée for dessert, or their fusion <em>croque de cochinita</em> blending Yucatán pork with serrano-jalapeño sauce and purple onion.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-blue-50 rounded p-2"><strong>Price:</strong> $$<br/>$400–600 MXN / 2</div>
<div class="bg-blue-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended Sunday</div>
<div class="bg-blue-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-blue-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Date night:</strong> Ideal</div>
</div>
</div>

<!-- 8 Café Bostonia -->
<div class="bg-white border-2 border-amber-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-amber-900 mb-2">8. Café Bostonia — Best Bakery + Coffee Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro / Av. Universidad &nbsp;|&nbsp; <strong>Address:</strong> Av. Universidad 285 &nbsp;|&nbsp; <strong>Hours:</strong> Mon–Sat 9:00 AM–9:00 PM; Sun 9:00 AM–5:30 PM &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 812 0174</p>
<p class="text-gray-700 mb-3">A specialty-coffee-and-sourdough brunch spot — think flat whites, canelés, savory tarts, plus a proper brunch menu including <strong>huevos divorciados</strong>, chilaquiles, and enchiladas. Strong vegetarian options. The space is small but bright, and the Sunday hours are more generous than most Centro competitors.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-amber-50 rounded p-2"><strong>Price:</strong> $$<br/>$350–550 MXN / 2</div>
<div class="bg-amber-50 rounded p-2"><strong>Reservations:</strong><br/>Optional</div>
<div class="bg-amber-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-amber-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Solo dining:</strong> Great</div>
</div>
</div>

<!-- 9 Tres60 -->
<div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-teal-900 mb-2">9. Tres60 Bistro — Best Casual Centro Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro &nbsp;|&nbsp; <strong>Address:</strong> Av. Venustiano Carranza 390 &nbsp;|&nbsp; <strong>Hours:</strong> Daily 8:00 AM–10:00 PM (check per day)</p>
<p class="text-gray-700 mb-3">Tres60 bills itself as a bistro-bakery-brunch hybrid and delivers on all three. Freshly baked bread and pastries, a deep chilaquiles and enchiladas suizas lineup, and a casual vibe that works as well solo as in a group. Conveniently right on Carranza, so you can stack it with a walk through Plaza de Armas.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-teal-50 rounded p-2"><strong>Price:</strong> $$<br/>$350–550 MXN / 2</div>
<div class="bg-teal-50 rounded p-2"><strong>Reservations:</strong><br/>Not required</div>
<div class="bg-teal-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-teal-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Wifi:</strong> Yes</div>
</div>
</div>

<!-- 10 La Oruga -->
<div class="bg-white border-2 border-indigo-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-indigo-900 mb-2">10. La Oruga y La Cebada — Best Late Brunch + Live Music</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro &nbsp;|&nbsp; <strong>Address:</strong> Av. Universidad 169 &nbsp;|&nbsp; <strong>Weekend Hours:</strong> Sat–Sun 12:00 PM–11:00 PM</p>
<p class="text-gray-700 mb-3">If you want brunch that edges into afternoon drinks and live music, La Oruga y La Cebada is the answer. The top floor hosts Sunday brunch with a band — exactly the "chilaquiles with cocktails" energy that defines modern SLP brunch culture. Larger menu than the pure brunch spots (pizzas, salads, seafood), so good for mixed groups.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-indigo-50 rounded p-2"><strong>Price:</strong> $$$<br/>$500–800 MXN / 2</div>
<div class="bg-indigo-50 rounded p-2"><strong>Reservations:</strong><br/>Required Sunday</div>
<div class="bg-indigo-50 rounded p-2"><strong>Parking:</strong><br/>Street + nearby lots</div>
<div class="bg-indigo-50 rounded p-2"><strong>Groups:</strong> Ideal<br/><strong>Music:</strong> Live Sun</div>
</div>
</div>

<!-- Honorable mentions -->
<div class="bg-gray-50 border-l-4 border-gray-300 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-gray-800">Honorable Mentions</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700">
<li><strong>Café Corta'o</strong> (Calle Independencia 1150) — small Veracruz-tinged Mexican breakfast spot; Sundays 9:00 AM–2:30 PM during anniversary season.</li>
<li><strong>Capital Coffee SLP</strong> — specialty coffee with vegetarian/vegan brunch plates, good for digital nomads who need wifi.</li>
<li><strong>Petit Bistro &amp; Café</strong> (Sierra Leona, Lomas 3) — Parisian ambiance, baguettes, board games, ideal for slow brunches.</li>
<li><strong>Cielo Tinto</strong> — upscale hacienda-style Mexican brunch with a chilaquiles bar and made-to-order eggs.</li>
<li><strong>Hyatt Regency SLP</strong> — buffet breakfast daily 6 AM–12 PM, ~350–390 MXN per adult; classic hotel brunch option for tourists.</li>
<li><strong>Mercado República</strong> — not a brunch restaurant per se, but the gorditas stalls (Doña Evangelina local 3–4) open 10 AM–6 PM daily and are where locals actually eat mid-morning.</li>
</ul>
</div>
</section>

<section id="by-vibe" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Best Brunch by Vibe</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5"><h4 class="font-bold text-rose-900 mb-2">Best for a Date</h4><p class="text-sm text-rose-900">Croque La Vie (French intimacy) or Refugio Tierra (patio aesthetic).</p></div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5"><h4 class="font-bold text-amber-900 mb-2">Best with Kids</h4><p class="text-sm text-amber-900">El Mesón de San Pascual (garden + Parque Tangamanga adjacent) or La Parroquia (classic family institution).</p></div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5"><h4 class="font-bold text-purple-900 mb-2">Best for Groups</h4><p class="text-sm text-purple-900">BRUNA SLP or La Oruga y La Cebada — big tables, live music, shareable plates.</p></div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h4 class="font-bold text-red-900 mb-2">Best Traditional</h4><p class="text-sm text-red-900">La Parroquia Potosina — the enchiladas potosinas benchmark.</p></div>
<div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-5"><h4 class="font-bold text-pink-900 mb-2">Best Trendy / Instagram</h4><p class="text-sm text-pink-900">Dos Amores (pastel interiors) or BRUNA (terrace + plating).</p></div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5"><h4 class="font-bold text-green-900 mb-2">Best Outdoor Patio</h4><p class="text-sm text-green-900">Refugio Tierra (garden patio) or BRUNA (covered terrace).</p></div>
<div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"><h4 class="font-bold text-blue-900 mb-2">Best Buffet</h4><p class="text-sm text-blue-900">La Parroquia Potosina (Fri–Sun) or Hyatt Regency breakfast buffet (daily).</p></div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900 mb-2">Best Vegan / Veggie</h4><p class="text-sm text-emerald-900">Refugio Tierra — dedicated vegan, vegetarian, and gluten-free menus.</p></div>
<div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5"><h4 class="font-bold text-yellow-900 mb-2">Best Coffee-Focused</h4><p class="text-sm text-yellow-900">Café Bostonia or Capital Coffee SLP — specialty espresso with full brunch plates.</p></div>
<div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><h4 class="font-bold text-indigo-900 mb-2">Best Late Brunch (after 1 PM)</h4><p class="text-sm text-indigo-900">La Oruga y La Cebada (opens noon) or Refugio Tierra (until 2:30 PM).</p></div>
</div>
</section>

<section id="what-to-order" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">What to Order: Potosino Brunch Dishes Deep Dive</h2>

<div class="mb-8">
<img src="${IMG_ENCHILADAS}" alt="Enchiladas potosinas — the signature dish of San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Enchiladas Potosinas — The City's Signature Dish</h3>
<p class="text-gray-700 mb-6">Enchiladas potosinas are unlike any enchilada you've had elsewhere in Mexico. The masa itself is dyed deep red-orange by being kneaded with a <strong>guajillo chile sauce</strong> before being pressed into small tortillas. Each tortilla is filled with <strong>queso Oaxaca</strong> (the stringy white melting cheese), folded in half — not rolled — and lightly pan-fried on a comal. They're served topped with a warm potato-and-carrot <em>guiso</em> (a mirepoix-style sauté), a spoonful of red salsa, a generous drizzle of crema, crumbled queso fresco, thinly sliced white onion, and a side of refried beans. The flavor is smoky-sweet from the guajillo, the texture is crispy-soft, and the portion is usually 4–6 pieces — ideal brunch size.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Other Must-Try Potosino Plates</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
<li><strong>Asado de boda potosino</strong> — a thick, sweet-savory red-chile pork stew historically served at weddings; brunch version is usually spooned over rice with tortillas.</li>
<li><strong>Chilaquiles con cecina</strong> — fried tortilla triangles bathed in red or green salsa, crowned with Potosino-style cured beef (cecina), crema, onion, and queso fresco. Often served with a fried egg on top.</li>
<li><strong>Huevos rancheros potosinos</strong> — eggs on lightly-fried tortillas, swimming in a rustic tomato-chile sauce, served with refried beans and a side of cecina or chorizo.</li>
<li><strong>Huevos divorciados</strong> — two fried eggs, one in red salsa and one in green, separated by a runway of refried beans. A staple at Café Bostonia and Tres60.</li>
<li><strong>Molletes</strong> — split bolillos slathered with refried beans, melted cheese, and pico de gallo. Budget brunch at its best.</li>
<li><strong>Gorditas</strong> — thick corn-masa pockets griddled and stuffed with guisos (nopales, chicharrón prensado, picadillo, rajas con queso). Mercado República stalls are the pilgrimage destination.</li>
<li><strong>Machaca norteña</strong> — shredded dried beef scrambled with eggs, tomato, onion, and chile. Heavier option for big appetites.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">International Brunch Favorites in SLP</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
<li><strong>Eggs benedict</strong> — best versions at Cuatro Almas, Refugio Tierra, and BRUNA.</li>
<li><strong>Avocado toast</strong> — standard at every new-wave brunch spot; Refugio Tierra does a sourdough version with local honey.</li>
<li><strong>Açaí bowls</strong> — Dos Amores and Refugio Tierra lead here.</li>
<li><strong>French toast / pain perdu</strong> — Croque La Vie's pain perdu is the gold standard; Cuatro Almas does a great brioche version.</li>
<li><strong>Croque-monsieur / croque-madame</strong> — only Croque La Vie in SLP.</li>
<li><strong>Pancakes &amp; waffles</strong> — Dos Amores, Tres60, and most hotel brunches.</li>
<li><strong>Shakshuka</strong> — occasional special at Refugio Tierra and Café Bostonia.</li>
</ul>
</section>

<section id="drinks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Drinks to Pair with SLP Brunch</h2>

<div class="mb-8">
<img src="${IMG_TRADITIONAL}" alt="Traditional Potosino drinks — café de olla and atole" class="w-full rounded-xl shadow-lg" />
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
<h4 class="text-xl font-bold text-amber-900 mb-3">Traditional Side</h4>
<ul class="list-disc pl-6 space-y-2 text-amber-900">
<li><strong>Café de olla</strong> — coffee brewed with cinnamon and piloncillo in a clay pot. The defining SLP brunch coffee.</li>
<li><strong>Atole</strong> — thick, warm masa-based drink, often flavored with chocolate, guava, or strawberry.</li>
<li><strong>Champurrado</strong> — chocolate atole, perfect on cool mornings.</li>
<li><strong>Agua de jamaica</strong> — hibiscus iced tea, tart and deep red.</li>
<li><strong>Agua de horchata</strong> — cinnamon-rice milk, the classic pairing for enchiladas potosinas.</li>
<li><strong>Chocolate caliente</strong> — hot chocolate, especially at traditional spots.</li>
</ul>
</div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
<h4 class="text-xl font-bold text-purple-900 mb-3">Modern / Boozy Side</h4>
<ul class="list-disc pl-6 space-y-2 text-purple-900">
<li><strong>Mimosas</strong> — standard at Cuatro Almas, BRUNA, Dos Amores, Refugio Tierra.</li>
<li><strong>Micheladas</strong> — spiced beer with lime, sauces, and chile; a brunch-appropriate Mexican alternative to a Bloody Mary.</li>
<li><strong>Mezcal</strong> — the Altiplano Potosino produces excellent mezcal; brunch cocktails often use local expressions.</li>
<li><strong>Specialty espresso drinks</strong> — flat whites, cortados, and pour-overs at Café Bostonia and Capital Coffee SLP.</li>
<li><strong>Cold brew &amp; nitro coffee</strong> — increasingly common at new-wave spots.</li>
<li><strong>Fresh juices</strong> — orange, green detox, and beet-ginger blends; Refugio Tierra's juice bar is exceptional.</li>
</ul>
</div>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
<p class="text-yellow-800"><strong>Altitude tip:</strong> At 1,863 m, alcohol hits harder than at sea level. Pace yourself on the mimosas and keep an agua fresca on the table alongside. Ibuprofen before brunch &gt; ibuprofen after.</p>
</div>
</section>

<section id="neighborhoods" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Neighborhood Map: Where the Brunch Scene Lives</h2>

<div class="space-y-6 mb-8">
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Centro Histórico</h4>
<p class="text-gray-700">The UNESCO-linked downtown of pink cantera stone and walkable plazas. Home to traditional institutions (La Parroquia Potosina, Mercado República), newer bistros (Tres60, Café Bostonia, Café Corta'o, Croque La Vie), and live-music brunch (La Oruga y La Cebada). Best if you're a tourist staying downtown or if you plan to combine brunch with a morning at Templo del Carmen or Museo Federico Silva.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Lomas (1ra, 2da, 3ra, 4ta Sección)</h4>
<p class="text-gray-700">Leafy upper-middle-class residential zone west of Centro. Epicenter of the new-wave brunch scene — Cuatro Almas, BRUNA, Petit Bistro, and multiple specialty coffee shops. Best if you're renting here or want a quieter, less touristy brunch.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Chapultepec / Privadas del Pedregal</h4>
<p class="text-gray-700">The corridor along Av. Parque Chapultepec, running along Parque Tangamanga I. Home to Refugio Tierra and El Mesón de San Pascual. Ideal if you want to combine brunch with a morning walk or bike ride in the park.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Villa Magna / Altamira / Colinas del Parque</h4>
<p class="text-gray-700">South-west side of the city, master-planned residential with newer commercial plazas. Dos Amores Brunch &amp; Meal is the anchor, and more concepts are opening here as the area grows.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Zona Industrial / Hotel corridor</h4>
<p class="text-gray-700">Less scenic but where the Hyatt Regency, Hilton, and Real de Minas hotel brunches live. Best if you want a predictable buffet or you're coming for business.</p>
</div>
</div>
</section>

<section id="tips" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tips for Visitors</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
<h4 class="font-bold text-blue-900 mb-2">Reservation Timing</h4>
<p class="text-sm text-blue-900">Sunday 11:00 AM–1:00 PM is peak. Book 24 hours ahead via phone or WhatsApp at Cuatro Almas, Refugio Tierra, BRUNA, Dos Amores, and La Oruga y La Cebada. Walk-ins are fine on weekdays and Saturdays before 10 AM.</p>
</div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5">
<h4 class="font-bold text-green-900 mb-2">Tipping</h4>
<p class="text-sm text-green-900">10% is standard, 15% for excellent service. Check the bill first — some upscale spots add servicio. Leave the tip in cash if possible.</p>
</div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
<h4 class="font-bold text-purple-900 mb-2">Payment</h4>
<p class="text-sm text-purple-900">Cards (Visa, Mastercard, Amex at most) are widely accepted at brunch restaurants. Market stalls and small traditional spots may be cash-only. ATMs are plentiful in Centro and Lomas.</p>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
<h4 class="font-bold text-amber-900 mb-2">Dress Code</h4>
<p class="text-sm text-amber-900">Smart casual at most spots; Centro institutions accept anything short of beachwear. Hotel brunches expect business casual.</p>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5">
<h4 class="font-bold text-red-900 mb-2">Allergens (Spanish Phrases)</h4>
<p class="text-sm text-red-900">"Soy alérgico/a a ___" (I'm allergic to ___). Common: gluten (gluten), lactosa (lactose), huevo (egg), nueces (nuts), mariscos (shellfish). "Sin picante" = no spice.</p>
</div>
<div class="bg-teal-50 border-2 border-teal-200 rounded-xl p-5">
<h4 class="font-bold text-teal-900 mb-2">Portion Sizes</h4>
<p class="text-sm text-teal-900">Mexican brunch portions are large. A plate of enchiladas potosinas typically includes 4–6 pieces. Chilaquiles plates are dinner-sized. Order one entrée each; add one shared appetizer.</p>
</div>
</div>
</section>

<section id="budget" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Budget Guide: Brunch for Two in SLP</h2>

<div class="overflow-x-auto mb-8">
<table class="min-w-full bg-white border border-gray-200 rounded-lg">
<thead style="background: linear-gradient(to right, #059669, #0284c7);"><tr>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">Tier</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">MXN (2 ppl)</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">USD (2 ppl)</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">Example Spots</th>
</tr></thead>
<tbody class="divide-y divide-gray-200">
<tr><td class="px-6 py-4 font-semibold text-green-700">Budget</td><td class="px-6 py-4">&lt;$300 MXN</td><td class="px-6 py-4">&lt;$17 USD</td><td class="px-6 py-4">Mercado República gorditas, Gorditas Carmelita, Café Corta'o</td></tr>
<tr class="bg-gray-50"><td class="px-6 py-4 font-semibold text-blue-700">Mid-tier</td><td class="px-6 py-4">$400–700 MXN</td><td class="px-6 py-4">$22–39 USD</td><td class="px-6 py-4">Cuatro Almas, BRUNA, Dos Amores, Refugio Tierra, Tres60, Café Bostonia, Croque La Vie, El Mesón de San Pascual, La Parroquia</td></tr>
<tr><td class="px-6 py-4 font-semibold text-purple-700">Upscale</td><td class="px-6 py-4">$800–1,400 MXN</td><td class="px-6 py-4">$45–78 USD</td><td class="px-6 py-4">La Oruga y La Cebada (with cocktails + live music), Hyatt Regency buffet, Cielo Tinto brunch buffet</td></tr>
</tbody>
</table>
</div>

<p class="text-gray-700 mb-6">As context: a comparable Sunday brunch for two in San Miguel de Allende typically runs $900–1,800 MXN (~$50–100 USD) at the mid-tier, and upwards of $2,500 MXN in places like Aperí or Jacinto 1930. SLP's brunch scene delivers similar quality at roughly half the price, especially at Cuatro Almas, Refugio Tierra, and BRUNA. See our <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="text-blue-600 underline">full cost-of-living comparison</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Frequently Asked Questions</h2>
<div class="space-y-6">

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">What is the best brunch spot in San Luis Potosí?</h3>
<p class="text-gray-700">For most visitors, <strong>Cuatro Almas</strong> in Lomas Cuarta Sección is the top pick — a specialty brunch restaurant open 8:00 AM to 2:00 PM with a devoted local following for its chipotle chilaquiles and eggs benedict. For a traditional Potosino brunch, <strong>La Parroquia Potosina</strong> (Av. Venustiano Carranza 300) is the institution, especially on weekends for its enchiladas potosinas and buffet.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Are reservations needed for brunch in San Luis Potosí?</h3>
<p class="text-gray-700">Not usually required on weekdays, but strongly recommended on Saturday and Sunday between 11:00 AM and 1:30 PM, which is peak brunch time in SLP. Popular spots like Cuatro Almas, Refugio Tierra, BRUNA, and Dos Amores routinely fill up — expect a 30–60 minute wait without a booking. Call the restaurant directly or send a WhatsApp message the day before.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Where do locals go for Sunday brunch in San Luis Potosí?</h3>
<p class="text-gray-700">Locals favor three clusters: <strong>Lomas / Chapultepec</strong> (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual near Parque Tangamanga), <strong>Centro</strong> (La Parroquia Potosina, Tres60 Bistro, Café Corta'o, Café Bostonia, Croque La Vie), and <strong>Colinas del Parque</strong> (Dos Amores). La Oruga y La Cebada in Centro is a weekend hangout that opens at noon on Saturdays and Sundays with a brunch menu and live music.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Is brunch a Mexican tradition?</h3>
<p class="text-gray-700">Brunch as a named meal is imported, but the concept of a late weekend morning meal is deeply Mexican — <em>almuerzo</em>, typically eaten between 10 AM and 1 PM, combines what English speakers would split into breakfast and lunch. Modern SLP brunch culture fuses this tradition (chilaquiles, huevos divorciados, enchiladas potosinas) with international additions like eggs benedict, avocado toast, pancakes, and mimosas.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">How much does brunch cost in San Luis Potosí?</h3>
<p class="text-gray-700">Budget brunch for two runs 250–350 MXN (~$14–20 USD) at market stalls like Mercado República or neighborhood cafés. Mid-tier spots like Cuatro Almas, Tres60, or BRUNA average 400–700 MXN (~$22–39 USD) for two with drinks. Upscale hotel brunches (Hyatt Regency, Hilton) and specialty restaurants come in at 800–1,400 MXN (~$45–78 USD) for two.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Which restaurants serve Mexican brunch vs international brunch in SLP?</h3>
<p class="text-gray-700">For authentic Mexican brunch: <strong>La Parroquia Potosina, El Mesón de San Pascual, Gorditas Carmelita, and Mercado República stalls</strong>. For international / modern brunch: <strong>Cuatro Almas, Refugio Tierra, BRUNA, Dos Amores, and Croque La Vie</strong> (French). For fusion that blends both: <strong>Tres60 Bistro and Café Bostonia</strong> serve chilaquiles alongside eggs benedict and avocado toast.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">What should I order at brunch in San Luis Potosí?</h3>
<p class="text-gray-700">Don't leave without trying <strong>enchiladas potosinas</strong> — the city's signature dish, made with guajillo-infused masa folded around Oaxaca cheese and topped with crema, potato, and carrot. Other Potosino brunch musts: chilaquiles with cecina, asado de boda, huevos divorciados, and gorditas from Mercado República. On the international side, eggs benedict at Cuatro Almas and the Jamaican omelette at BRUNA are local favorites.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Do brunch spots in SLP have vegan or vegetarian options?</h3>
<p class="text-gray-700">Yes. <strong>Refugio Tierra</strong> offers vegan, vegetarian, and gluten-free options and is the top veggie-friendly brunch spot in the city. Café Bostonia, Cuatro Almas, and Capital Coffee SLP all have vegetarian menus with dishes like chilaquiles verdes, avocado toast, açaí bowls, and plant-based burritos. Ask for "sin carne" (without meat) or "vegano" (vegan).</p>
</div>

</div>
</section>

<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-blue-900">Keep Exploring San Luis Potosí</h3>
<p class="text-blue-800 mb-3">Related guides on sanluisway.com:</p>
<ul class="space-y-2 text-blue-800">
<li>→ <a href="/breakfast-spots-san-luis-potosi" class="underline font-medium">Early Breakfast Spots in San Luis Potosí (before 9 AM)</a></li>
<li>→ <a href="/traditional-cuisine" class="underline font-medium">Traditional Potosino Cuisine Guide</a></li>
<li>→ <a href="/restaurants" class="underline font-medium">Full SLP Restaurant Directory</a></li>
<li>→ <a href="/cultural/culinary-traditions" class="underline font-medium">Culinary Traditions of San Luis Potosí</a></li>
<li>→ <a href="/resources/expat-guide" class="underline font-medium">Expat Guide to San Luis Potosí</a></li>
</ul>
</div>

<div class="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-orange-900">Ready to Brunch?</h3>
<p class="text-orange-800 mb-3"><strong>San Luis Way is your complete local guide to the best brunch places in San Luis Potosí.</strong> Save this guide, book ahead for Sunday, and start with enchiladas potosinas. Your mimosa is waiting.</p>
<p class="text-orange-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Browse more SLP food guides →</a></p>
</div>

<script type="application/ld+json">${faqJsonLd}</script>

</div>`;

const contentES = contentEN
  .replace(/Table of Contents/g, 'Tabla de Contenidos')
  .replace(/Key Takeaways/g, 'Puntos Clave')
  .replace(/Brunch in San Luis Potosí: The Scene/g, 'Brunch en San Luis Potosí: La Escena')
  .replace(/Brunch in San Luis Potosí: A Newer Tradition with Deep Roots/g, 'Brunch en San Luis Potosí: Una Tradición Nueva con Raíces Profundas')
  .replace(/Quick-Pick Table: Top 10 Spots/g, 'Tabla Rápida: Top 10 Lugares')
  .replace(/Quick-Pick Table: Top 10 Brunch Spots in San Luis Potosí/g, 'Tabla Rápida: Los 10 Mejores Lugares de Brunch en San Luis Potosí')
  .replace(/Restaurant Profiles \(10 Spots\)/g, 'Perfiles de Restaurantes (10 Lugares)')
  .replace(/Brunch Restaurant Profiles/g, 'Perfiles de Restaurantes de Brunch')
  .replace(/Best Brunch by Vibe/g, 'Mejor Brunch por Ambiente')
  .replace(/What to Order: Potosino Brunch Dishes/g, 'Qué Pedir: Platillos Potosinos de Brunch')
  .replace(/What to Order: Potosino Brunch Dishes Deep Dive/g, 'Qué Pedir: Platillos Potosinos de Brunch')
  .replace(/Drinks to Pair/g, 'Bebidas para Maridar')
  .replace(/Drinks to Pair with SLP Brunch/g, 'Bebidas para Maridar con el Brunch en SLP')
  .replace(/Brunch Neighborhoods Map/g, 'Mapa de Colonias para Brunch')
  .replace(/Neighborhood Map: Where the Brunch Scene Lives/g, 'Mapa de Colonias: Dónde Vive la Escena del Brunch')
  .replace(/Tips for Visitors/g, 'Consejos para Visitantes')
  .replace(/Budget Guide/g, 'Guía de Presupuesto')
  .replace(/Budget Guide: Brunch for Two in SLP/g, 'Guía de Presupuesto: Brunch para Dos en SLP')
  .replace(/FAQ/g, 'Preguntas Frecuentes')
  .replace(/Frequently Asked Questions/g, 'Preguntas Frecuentes')
  .replace(/Best overall brunch:/g, 'Mejor brunch en general:')
  .replace(/Best traditional Potosino brunch:/g, 'Mejor brunch tradicional potosino:')
  .replace(/Best trendy \/ instagrammable:/g, 'Más trendy / instagrameable:')
  .replace(/Best French-style brunch:/g, 'Mejor brunch estilo francés:')
  .replace(/Peak time:/g, 'Hora pico:')
  .replace(/Brunch for two:/g, 'Brunch para dos:')
  .replace(/The Locals' Favorite/g, 'El Favorito de los Locales')
  .replace(/The Institution/g, 'La Institución')
  .replace(/Best Healthy \/ Veggie Brunch/g, 'Mejor Brunch Saludable / Vegetariano')
  .replace(/Best Traditional \+ Garden/g, 'Mejor Tradicional + Jardín')
  .replace(/Best Trendy Terrace/g, 'Mejor Terraza Trendy')
  .replace(/Most Instagrammable/g, 'El Más Instagrameable')
  .replace(/Best French-Style Brunch/g, 'Mejor Brunch Francés')
  .replace(/Best Bakery \+ Coffee Brunch/g, 'Mejor Brunch de Panadería + Café')
  .replace(/Best Casual Centro Brunch/g, 'Mejor Brunch Casual en Centro')
  .replace(/Best Late Brunch \+ Live Music/g, 'Mejor Brunch Tardío + Música en Vivo')
  .replace(/Honorable Mentions/g, 'Menciones Honoríficas')
  .replace(/Best for a Date/g, 'Mejor para Cita')
  .replace(/Best with Kids/g, 'Mejor con Niños')
  .replace(/Best for Groups/g, 'Mejor para Grupos')
  .replace(/Best Traditional/g, 'Mejor Tradicional')
  .replace(/Best Trendy \/ Instagram/g, 'Más Trendy / Instagram')
  .replace(/Best Outdoor Patio/g, 'Mejor Patio al Aire Libre')
  .replace(/Best Buffet/g, 'Mejor Buffet')
  .replace(/Best Vegan \/ Veggie/g, 'Mejor Vegano / Vegetariano')
  .replace(/Best Coffee-Focused/g, 'Mejor Enfocado en Café')
  .replace(/Best Late Brunch \(after 1 PM\)/g, 'Mejor Brunch Tardío (después de 1 PM)')
  .replace(/Reservation Timing/g, 'Tiempo de Reservación')
  .replace(/Tipping/g, 'Propinas')
  .replace(/Payment/g, 'Pago')
  .replace(/Dress Code/g, 'Código de Vestimenta')
  .replace(/Allergens \(Spanish Phrases\)/g, 'Alergias (Frases en Español)')
  .replace(/Portion Sizes/g, 'Tamaño de Porciones')
  .replace(/Traditional Side/g, 'Lado Tradicional')
  .replace(/Modern \/ Boozy Side/g, 'Lado Moderno / con Alcohol')
  .replace(/Keep Exploring San Luis Potosí/g, 'Sigue Explorando San Luis Potosí')
  .replace(/Ready to Brunch\?/g, '¿Listo para el Brunch?')
  .replace(/Browse more SLP food guides/g, 'Ver más guías de comida de SLP')
  .replace(/Related guides on sanluisway\.com:/g, 'Guías relacionadas en sanluisway.com:');

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: HERO,
  category: 'Food & Drink',
  tags: ['brunch', 'restaurants', 'san-luis-potosi', 'food', 'weekend', 'breakfast', 'mexican-food', 'enchiladas-potosinas', 'chilaquiles', 'expats'],

  title: 'Best Brunch Spots Near Me in San Luis Potosí (2026): 10 Top Picks',
  excerpt: 'A verified 2026 guide to the 10 best brunch spots in San Luis Potosí — from Cuatro Almas and BRUNA to La Parroquia Potosina. Addresses, hours, signature dishes, prices, and insider tips.',
  content: contentEN,
  meta_title: 'Best Brunch Spots Near Me | San Luis Potosí 2026',
  meta_description: 'The 10 best brunch spots in San Luis Potosí for 2026 — verified addresses, weekend hours, signature dishes, and prices from 250 to 1,400 MXN. Book ahead for Sunday.',

  title_es: 'Mejores Lugares de Brunch en San Luis Potosí (2026): 10 Favoritos',
  excerpt_es: 'Guía verificada 2026 de los 10 mejores lugares de brunch en San Luis Potosí — desde Cuatro Almas y BRUNA hasta La Parroquia Potosina. Direcciones, horarios, platillos y precios.',
  content_es: contentES,
  meta_title_es: 'Mejores Brunch Cerca de Mí | San Luis Potosí 2026',
  meta_description_es: 'Los 10 mejores lugares de brunch en San Luis Potosí 2026 — direcciones verificadas, horarios de fin de semana, platillos estrella y precios de 250 a 1,400 MXN.',

  title_de: 'Beste Brunch-Spots in San Luis Potosí (2026): Top 10',
  excerpt_de: 'Verifizierter 2026-Guide zu den 10 besten Brunch-Spots in San Luis Potosí — von Cuatro Almas und BRUNA bis La Parroquia Potosina. Adressen, Öffnungszeiten, Signature-Gerichte und Preise.',
  content_de: contentEN,
  meta_title_de: 'Beste Brunch-Spots | San Luis Potosí 2026',
  meta_description_de: 'Die 10 besten Brunch-Spots in San Luis Potosí 2026 — verifizierte Adressen, Wochenend-Öffnungszeiten, Signature-Gerichte und Preise von 250 bis 1.400 MXN.',

  title_ja: 'サン・ルイス・ポトシのベスト・ブランチ・スポット10選（2026年）',
  excerpt_ja: 'サン・ルイス・ポトシのベスト・ブランチ・スポット10選 2026年版 — Cuatro Almas、BRUNA、La Parroquia Potosinaなど。住所、週末営業時間、定番料理、価格を網羅。',
  content_ja: contentEN,
  meta_title_ja: 'ベスト・ブランチ | サン・ルイス・ポトシ 2026',
  meta_description_ja: 'サン・ルイス・ポトシの2026年ベスト・ブランチ10選 — 検証済み住所、週末営業時間、定番料理、価格250〜1,400 MXN。日曜日は事前予約推奨。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
  }

  console.log('Checking for existing post...');
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id, slug')
    .eq('slug', SLUG)
    .maybeSingle();

  if (existing) {
    console.log('Updating existing post:', existing.id);
    const { error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('id', existing.id);
    if (error) {
      console.error('Update error:', error);
      process.exit(1);
    }
    console.log('Post updated');
  } else {
    console.log('Inserting new post...');
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
      .single();
    if (error) {
      console.error('Insert error:', error);
      process.exit(1);
    }
    console.log('Post published! ID:', data.id);
  }

  console.log(`\nView at: https://sanluisway.com/blog/${SLUG}`);
}

main();
