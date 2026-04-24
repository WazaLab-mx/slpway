require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'best-brunch-spots-san-luis-potosi';
// Hero swapped from fusion-restaurant.jpg (brochetas — not brunch-related) to
// enchiladas potosinas, the signature Potosino brunch dish referenced
// throughout the post as the city's benchmark.
const HERO = '/images/food/enchiladas-potosinas.jpg';
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
      "name": "Is San Luis Potosí a good city for breakfast and brunch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — San Luis Potosí is widely considered one of the best cities in Mexico for breakfast. Desayuno is treated as a social event rather than a quick meal, and the city's culinary patrimony (enchiladas potosinas, gorditas de Morales, asado de boda, cecina, café de olla) gives it more regional breakfast options than most Mexican cities. Modern brunch culture layers specialty coffee, bakery-driven menus, and international plates (eggs benedict, avocado toast, French toast) on top of that tradition."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best brunch spot in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most visitors, Cuatro Almas in Lomas Cuarta Sección is the top pick — a specialty brunch restaurant open 8:00 AM to 2:00 PM with a devoted local following for its chipotle chilaquiles and eggs benedict. For a traditional Potosino brunch, La Parroquia Potosina (Av. Venustiano Carranza 300) is the institution, especially on weekends for its enchiladas potosinas buffet. For the OG Potosino brunch, head to Calle de las Gorditas de Morales — any stall with a line is guaranteed quality."
      }
    },
    {
      "@type": "Question",
      "name": "Where are the Gorditas de Morales in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calle de las Gorditas de Morales runs along Camino a la Presa de San José in the Loma de los Filtros / Morales corridor — a short taxi ride from Centro Histórico, anchored historically by weekend traffic to the Presa de San José. The street is lined with dozens of gordita stalls and loncherías. Gorditas de Morales are the original Potosino brunch — thick corn-masa pockets griddled on a comal, split open, and stuffed with guisos (chicharrón prensado, nopales, rajas con queso, picadillo, asado de boda). The rule of thumb locals use: any stall with a line is guaranteed. No reservations, cash is king, and peak time is 9:30 AM to 1:00 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for brunch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not usually required on weekdays, but strongly recommended on Saturday and Sunday between 11:00 AM and 1:30 PM, which is peak brunch time in SLP. Popular spots like Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier, and Dos Amores routinely fill up — expect a 30–60 minute wait without a booking. Call the restaurant directly or send a WhatsApp message the day before."
      }
    },
    {
      "@type": "Question",
      "name": "Where do locals go for Sunday brunch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Locals favor four clusters: Lomas / Chapultepec (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual, Fork Chapultepec), Centro (La Parroquia Potosina, Oliva on Carranza, Tres60 Bistro, Fork Centro, Croque La Vie, Hogaza), Colinas del Parque (Dos Amores), and Las Aguilas 3ra Secc (Fork Le Brunch Atelier on Olmos 145). For the most authentic Potosino experience, locals head to Calle de las Gorditas de Morales."
      }
    },
    {
      "@type": "Question",
      "name": "Does Fork have more than one location in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Fork operates three locations in SLP. Fork Centro at Galeana 443 in the historic center; Fork Chapultepec inside Torre Avancer at Av. Parque Chapultepec 1922; and Fork Le Brunch Atelier at Olmos 145 in Las Aguilas 3ra Secc, which is the brunch-specific concept. Reservations: Fork Centro / Chapultepec at +52 444 481 1996; Fork Le Brunch Atelier at +52 444 817 0705."
      }
    },
    {
      "@type": "Question",
      "name": "Is brunch a Mexican tradition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brunch as a named meal is imported, but the concept of a late weekend morning meal is deeply Mexican — almuerzo, typically eaten between 10 AM and 1 PM, combines what English speakers would split into breakfast and lunch. In San Luis Potosí specifically, desayuno is a cornerstone of weekend culture: families gather for gorditas de Morales, enchiladas potosinas, and café de olla. Modern SLP brunch culture fuses this tradition with international additions like eggs benedict, avocado toast, pancakes, and mimosas."
      }
    },
    {
      "@type": "Question",
      "name": "How much does brunch cost in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget brunch for two runs 200–350 MXN (~$11–20 USD) at gordita stalls on Calle de Morales or neighborhood cafés. Mid-tier spots like Cuatro Almas, Tres60, Oliva, Fork, Hogaza, or Dos Amores average 400–700 MXN (~$22–39 USD) for two with drinks. Upscale hotel brunches (Hyatt Regency, Hilton) and specialty restaurants come in at 800–1,400 MXN (~$45–78 USD) for two."
      }
    },
    {
      "@type": "Question",
      "name": "Which restaurants serve Mexican brunch vs international brunch in SLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For authentic Mexican brunch: La Parroquia Potosina, El Mesón de San Pascual, Gorditas de Morales (the street), and Mercado República stalls. For international / modern brunch: Cuatro Almas, Refugio Tierra, Dos Amores, and Croque La Vie (French). For fusion that blends both: Fork, Oliva, Hogaza, and Tres60 Bistro all serve chilaquiles alongside eggs benedict, croque madame, omelettes, and avocado toast."
      }
    },
    {
      "@type": "Question",
      "name": "Do brunch spots in SLP have vegan or vegetarian options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Refugio Tierra offers dedicated vegan, vegetarian, and gluten-free menus and is the top veggie-friendly brunch spot in the city. Hogaza, Oliva, Cuatro Almas, and Fork all have vegetarian options including chilaquiles verdes, avocado toast, açaí bowls, and plant-based bowls. Ask for 'sin carne' (without meat) or 'vegano' (vegan)."
      }
    }
  ]
});

const faqJsonLdES = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿San Luis Potosí es una buena ciudad para desayunar y hacer brunch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí — San Luis Potosí es considerada una de las mejores ciudades de México para desayunar. El desayuno se vive como un evento social más que como una comida rápida, y el patrimonio culinario de la ciudad (enchiladas potosinas, gorditas de Morales, asado de boda, cecina, café de olla) le da más opciones regionales de desayuno que a la mayoría de las ciudades mexicanas. La cultura moderna de brunch suma café de especialidad, menús de panadería artesanal y platillos internacionales (eggs benedict, avocado toast, pain perdu) a esa tradición."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el mejor lugar de brunch en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para la mayoría de los visitantes, Cuatro Almas en Lomas Cuarta Sección es la mejor opción — un restaurante de brunch especializado abierto de 8:00 AM a 2:00 PM, con una base leal de clientes locales por sus chilaquiles al chipotle y sus eggs benedict. Para un brunch tradicional potosino, La Parroquia Potosina (Av. Venustiano Carranza 300) es la institución, sobre todo los fines de semana por su bufete de enchiladas potosinas. Para el OG del brunch potosino, ve a la Calle de las Gorditas de Morales — cualquier puesto con fila es garantía."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde están las Gorditas de Morales en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Calle de las Gorditas de Morales corre por el Camino a la Presa de San José, en el corredor de Loma de los Filtros / Morales — a un corto viaje en taxi del Centro Histórico, anclada históricamente por el tráfico de fin de semana hacia la Presa de San José. La calle está cubierta de decenas de puestos de gorditas y loncherías. Las gorditas de Morales son el brunch potosino original — discos gruesos de masa de maíz asados al comal, abiertos por en medio y rellenos de guisos (chicharrón prensado, nopales, rajas con queso, picadillo, asado de boda). La regla que siguen los locales: cualquier puesto con fila es garantía. No hay reservaciones, solo efectivo, y la hora pico es de 9:30 AM a 1:00 PM."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se necesitan reservaciones para hacer brunch en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Normalmente no entre semana, pero sí muy recomendadas sábado y domingo entre 11:00 AM y 1:30 PM, que es la hora pico del brunch en SLP. Lugares populares como Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier y Dos Amores se llenan rápido — espera de 30 a 60 minutos sin reservación. Llama directo al restaurante o manda un WhatsApp un día antes."
      }
    },
    {
      "@type": "Question",
      "name": "¿A dónde van los locales a desayunar o hacer brunch los domingos en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los locales prefieren cuatro zonas: Lomas / Chapultepec (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual, Fork Chapultepec), Centro (La Parroquia Potosina, Oliva sobre Carranza, Tres60 Bistro, Fork Centro, Croque La Vie, Hogaza), Colinas del Parque (Dos Amores) y Las Águilas 3ra Secc (Fork Le Brunch Atelier en Olmos 145). Para la experiencia potosina más auténtica, los locales van a la Calle de las Gorditas de Morales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Fork tiene más de una sucursal en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí — Fork opera tres sucursales en SLP. Fork Centro en Galeana 443 en el centro histórico; Fork Chapultepec dentro de Torre Avancer, en Av. Parque Chapultepec 1922; y Fork Le Brunch Atelier en Olmos 145, Las Águilas 3ra Secc, que es el concepto dedicado al brunch. Reservaciones: Fork Centro / Chapultepec al +52 444 481 1996; Fork Le Brunch Atelier al +52 444 817 0705."
      }
    },
    {
      "@type": "Question",
      "name": "¿El brunch es una tradición mexicana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El brunch como nombre es importado, pero el concepto de una comida a media mañana de fin de semana es profundamente mexicano — el almuerzo, que generalmente se come entre las 10 AM y la 1 PM, combina lo que en inglés se separa entre desayuno y comida. En San Luis Potosí, el desayuno es un pilar de la vida de fin de semana: las familias se reúnen por gorditas de Morales, enchiladas potosinas y café de olla. La cultura moderna de brunch en SLP fusiona esta tradición con añadidos internacionales como eggs benedict, avocado toast, hot cakes y mimosas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta el brunch en San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un brunch económico para dos personas va de 200 a 350 MXN (~$11–20 USD) en los puestos de gorditas de la Calle de Morales o en cafés de barrio. Lugares de gama media como Cuatro Almas, Tres60, Oliva, Fork, Hogaza o Dos Amores promedian entre 400 y 700 MXN (~$22–39 USD) por dos personas con bebidas. Los brunches de hotel de alta gama (Hyatt Regency, Hilton) y restaurantes de autor rondan los 800–1,400 MXN (~$45–78 USD) para dos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué restaurantes sirven brunch mexicano y cuáles brunch internacional en SLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para brunch mexicano auténtico: La Parroquia Potosina, El Mesón de San Pascual, las Gorditas de Morales (la calle) y los puestos del Mercado República. Para brunch internacional / moderno: Cuatro Almas, Refugio Tierra, Dos Amores y Croque La Vie (francés). Para fusión que mezcla ambos: Fork, Oliva, Hogaza y Tres60 Bistro sirven chilaquiles junto a eggs benedict, croque madame, omelettes y avocado toast."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los lugares de brunch en SLP tienen opciones veganas o vegetarianas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Refugio Tierra ofrece menús dedicados vegano, vegetariano y sin gluten, y es el mejor lugar de brunch para vegetarianos en la ciudad. Hogaza, Oliva, Cuatro Almas y Fork tienen opciones vegetarianas como chilaquiles verdes, avocado toast, bowls de açaí y bowls de base vegetal. Pide 'sin carne' o 'vegano' al ordenar."
      }
    }
  ]
});

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Best brunch spots in San Luis Potosí — modern restaurant table with chilaquiles, eggs benedict, and mimosas" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-8">
  <div class="flex items-start gap-3">
    <div class="text-2xl" aria-hidden="true">✅</div>
    <div class="flex-1">
      <div class="text-xs font-bold uppercase tracking-wide text-blue-700 mb-1">Independently Fact-Checked</div>
      <p class="text-base font-bold text-gray-900 mb-1">Every venue, address, phone number, and dish in this guide was verified on April 24, 2026.</p>
      <p class="text-sm text-gray-700">Read the full <a href="/blog/factchecks/best-brunch-spots-san-luis-potosi" class="text-blue-700 hover:text-blue-900 underline font-semibold">verification report</a> with sources, evidence chains, and the corrections we made before publishing.</p>
    </div>
  </div>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Brunch in San Luis Potosí: The Scene</a></li>
    <li><a href="#breakfast-city" class="text-blue-600 hover:text-blue-800">Why SLP is One of Mexico's Best Breakfast Cities</a></li>
    <li><a href="#quick-pick" class="text-blue-600 hover:text-blue-800">Quick-Pick Table: Top 10 Spots</a></li>
    <li><a href="#profiles" class="text-blue-600 hover:text-blue-800">Restaurant Profiles (10 Spots)</a></li>
    <li><a href="#honorable" class="text-blue-600 hover:text-blue-800">Honorable Mentions (Gorditas de Morales)</a></li>
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
    <li><strong>OG of Potosino brunch:</strong> Gorditas de Morales — the Morales corridor on Camino a la Presa de San José (Loma de los Filtros) is where locals actually eat. Any stall with a line is guaranteed.</li>
    <li><strong>Best multi-location bistro:</strong> Fork — three SLP branches (Centro, Chapultepec, Las Aguilas) with the brunch-dedicated Fork Le Brunch Atelier on Olmos 145.</li>
    <li><strong>Best artisan bakery brunch:</strong> Hogaza — specialty sourdough, pan artesanal, and café de especialidad.</li>
    <li><strong>Best Mediterranean brunch:</strong> Oliva (Av. Venustiano Carranza 1325) — "Mantequilla, Pan y Vino" concept with salmon toast, chilaquiles, and cazuela de huevos rotos.</li>
    <li><strong>Peak time:</strong> Sunday 11:00 AM–1:00 PM — book 24 hours ahead at any of the top spots.</li>
    <li><strong>Brunch for two:</strong> 200 MXN (~$11 USD) budget up to 1,400 MXN (~$78 USD) upscale.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Brunch in San Luis Potosí: A Newer Tradition with Deep Roots</h2>

<p class="text-gray-700 mb-6"><strong>If you're searching for the best brunch spots near me in San Luis Potosí, the good news is the scene has exploded in the last five years — and it sits on top of one of Mexico's strongest breakfast traditions.</strong> Brunch as a named meal is relatively new to SLP, but the cultural foundation has always been here: almuerzo, the late-morning meal eaten between 10 AM and 1 PM, is how Potosino families have always closed out their weekends. What's changed is the aesthetic — specialty coffee bars, sourdough bakeries, covered terraces, and the mimosa-forward weekend energy you'd expect in Polanco or Roma Norte.</p>

<p class="text-gray-700 mb-6">Brunch in SLP lives in three overlapping worlds. First, the <strong>traditional Potosino kitchens</strong> — places like La Parroquia Potosina and El Mesón de San Pascual — which have served enchiladas potosinas, huevos rancheros, and café de olla for decades and happen to hit every note of what expats call brunch. Second, the <strong>new-wave brunch restaurants</strong> like Cuatro Almas, Refugio Tierra, Dos Amores, and the multi-branch Fork, which launched in the late 2010s and early 2020s specifically to serve the late-morning weekend crowd with eggs benedict, avocado toast, açaí bowls, and mimosas. Third, the <strong>specialty bakery and Mediterranean scene</strong> — Hogaza for artisan bread and café de especialidad, Oliva for its butter-bread-wine Mediterranean brunch, Croque La Vie for Parisian croque-monsieur.</p>

<p class="text-gray-700 mb-6">The altitude matters more than you'd think. SLP sits at 1,863 m (6,112 ft), which means mimosas, micheladas, and mezcal cocktails hit harder than at sea level. Hydrate. Order the agua de jamaica alongside. The upside of the elevation is cool weather nearly year-round — brunch on a sunny terrace in SLP between November and April is one of the genuinely great weekend experiences in central Mexico.</p>

<p class="text-gray-700 mb-6">This guide profiles the <strong>10 best brunch places in San Luis Potosí</strong> — verified addresses, weekend hours, signature dishes, price ranges, and practical details for parking, reservations, and kids. It's aimed at locals hunting for a new Sunday spot, expats who just moved in and want the insider list, and tourists looking for something better than the hotel buffet. For related reading, see our <a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">early breakfast spots guide</a>, <a href="/traditional-cuisine" class="text-blue-600 underline">traditional Potosino cuisine overview</a>, and the full <a href="/restaurants" class="text-blue-600 underline">SLP restaurant directory</a>.</p>
</section>

<section id="breakfast-city" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Why San Luis Potosí is One of Mexico's Best Breakfast Cities</h2>

<div class="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
<p class="text-gray-800 mb-4"><strong>If you ask people who have eaten their way across Mexico which cities have the best desayuno, San Luis Potosí is on almost every short list.</strong> Potosinos do not treat breakfast as a utility meal. It is a social ritual — families meet at the same lonchería every Sunday, friends schedule 10 AM meetings over café de olla, and entire streets exist for no other purpose than serving breakfast to crowds.</p>

<p class="text-gray-800 mb-4">Three things make SLP's breakfast culture exceptional:</p>

<ol class="list-decimal pl-6 space-y-3 text-gray-800 mb-4">
<li><strong>The food patrimony is deep and specific.</strong> Enchiladas potosinas, gorditas de Morales, asado de boda, cecina potosina, chilaquiles con cecina, and café de olla in clay pots — these are dishes that exist at this quality nowhere else in Mexico. Other regions have their own signatures, but SLP stacks several world-class breakfast plates in one city.</li>
<li><strong>Variety across every price point.</strong> You can eat extraordinarily well on 40 MXN at a gordita stall on Calle de Morales, have a mid-tier bakery brunch at Hogaza for 250 MXN, or splurge at Oliva or Cuatro Almas for 450 MXN — and all three experiences feel authentic to the city.</li>
<li><strong>The morning is the city's most sociable hours.</strong> SLP's evenings are quiet compared to CDMX or Guadalajara. Its mornings, by contrast, are packed — specialty coffee roasters open by 7:30 AM, Mercado República's gordita stalls fill by 10, and by 11 AM the Lomas brunch restaurants have waits out the door. If you want to understand Potosino social life, come for breakfast, not dinner.</li>
</ol>

<p class="text-gray-800 mb-0">International publications (Food &amp; Wine, Condé Nast Traveler, Eater) have repeatedly flagged SLP for enchiladas potosinas specifically, but the city deserves a broader reputation as one of the country's top breakfast destinations. If you're visiting only one or two days, build your itinerary around breakfast — you'll eat better than you will at dinner, for half the price.</p>
</div>
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
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Hogaza</td><td class="px-4 py-3">Artisan bakery café</td><td class="px-4 py-3">Sourdough, café de especialidad</td><td class="px-4 py-3 text-center">$250–450 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Check IG @hogaza.cafe</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Dos Amores</td><td class="px-4 py-3">Instagrammable</td><td class="px-4 py-3">Brunch plates, açaí</td><td class="px-4 py-3 text-center">$450–600 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Colinas del Parque</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Croque La Vie</td><td class="px-4 py-3">French casual</td><td class="px-4 py-3">Croque-monsieur, pain perdu</td><td class="px-4 py-3 text-center">$400–600 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Fork (3 sucursales)</td><td class="px-4 py-3">Brunch bistro</td><td class="px-4 py-3">Chilaquiles, croque madame</td><td class="px-4 py-3 text-center">$400–650 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Centro / Chapultepec / Las Águilas</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Oliva</td><td class="px-4 py-3">Mediterranean</td><td class="px-4 py-3">Salmon toast, cazuela de huevos rotos</td><td class="px-4 py-3 text-center">$400–600 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Av. Carranza</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Tres60 Bistro</td><td class="px-4 py-3">Bistro casual</td><td class="px-4 py-3">Chilaquiles, enchiladas suizas</td><td class="px-4 py-3 text-center">$350–550 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Prices in Mexican pesos, two people with drinks; approximate at 18 MXN = $1 USD. Waits reflect Sunday 11:30 AM–1:30 PM peak. See the Honorable Mentions section below for Gorditas de Morales, the OG Potosino brunch.</p>
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

<!-- 5 Hogaza -->
<div class="bg-white border-2 border-amber-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-amber-900 mb-2">5. Hogaza — Best Artisan Bakery Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Concept:</strong> Artisan bakery + café de especialidad &nbsp;|&nbsp; <strong>Hours:</strong> Mon–Fri 7:30 AM–8:30 PM, Sat–Sun 8:30 AM–8:30 PM &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/hogaza.cafe/" target="_blank" rel="noopener" class="text-blue-600 underline">@hogaza.cafe</a></p>
<p class="text-gray-700 mb-3">"Hogaza" means loaf in Spanish, and that single word tells you the restaurant's philosophy. This is where the new wave of Potosino specialty-coffee-and-sourdough culture crystallized. Expect long-fermented crusty loaves, canelés, and laminated pastries paired with flat whites, pour-overs, and a short but tight brunch menu — toasts topped with burrata or smoked salmon, savory tarts, and a small rotation of Mexican plates like chilaquiles. Confirm the current location via Instagram before visiting — the obrador and café spaces have moved as the brand has grown. Great for solo brunch and take-home bread.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-amber-50 rounded p-2"><strong>Price:</strong> $<br/>$250–450 MXN / 2</div>
<div class="bg-amber-50 rounded p-2"><strong>Reservations:</strong><br/>Not required</div>
<div class="bg-amber-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-amber-50 rounded p-2"><strong>Solo dining:</strong> Ideal<br/><strong>Take-home:</strong> Bread</div>
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

<!-- 8 Fork -->
<div class="bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-purple-900 mb-2">8. Fork — Best Multi-Location Brunch Bistro</h3>
<p class="text-gray-700 mb-3"><strong>Three SLP locations:</strong></p>
<ul class="list-disc pl-6 text-gray-700 mb-3">
<li><strong>Fork Centro</strong> — Galeana 443, Centro Histórico.</li>
<li><strong>Fork Chapultepec</strong> — Torre Avancer, Av. Parque Chapultepec 1922.</li>
<li><strong>Fork Le Brunch Atelier</strong> — Olmos 145, Las Águilas 3ra Secc (the brunch-dedicated concept).</li>
</ul>
<p class="text-gray-700 mb-3"><strong>Reservations:</strong> Centro / Chapultepec +52 444 481 1996 · Le Brunch Atelier +52 444 817 0705 &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/forkslp/" target="_blank" rel="noopener" class="text-blue-600 underline">@forkslp</a></p>
<p class="text-gray-700 mb-3">Fork is the homegrown SLP bistro-brunch brand with three branches, one of which — Fork Le Brunch Atelier on Olmos 145 — is dedicated specifically to the weekend brunch crowd. The menu stretches from Potosino classics (chilaquiles, molletes) to French-influenced plates (croque madame). It is one of the highest-rated brunch concepts in SLP on Restaurant Guru (4.4 stars, 1,400+ reviews at the Atelier). Pick the branch closest to you — they share the kitchen DNA but each has a slightly different vibe (Centro is the most touristy, Chapultepec is corporate-friendly, Las Águilas is the quietest for a long Sunday brunch).</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-purple-50 rounded p-2"><strong>Price:</strong> $$<br/>$400–650 MXN / 2</div>
<div class="bg-purple-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended weekends</div>
<div class="bg-purple-50 rounded p-2"><strong>Parking:</strong><br/>Varies by branch</div>
<div class="bg-purple-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Groups:</strong> Ideal</div>
</div>
</div>

<!-- 9 Oliva -->
<div class="bg-white border-2 border-emerald-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-emerald-900 mb-2">9. Oliva (Mantequilla, Pan y Vino) — Best Mediterranean Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Av. Carranza corridor &nbsp;|&nbsp; <strong>Address:</strong> Av. Venustiano Carranza 1325 &nbsp;|&nbsp; <strong>Hours:</strong> Breakfast Mon–Sat 8:00 AM–1:00 PM, Sun 9:00 AM–2:00 PM; Dinner Tue–Sat 6:00 PM–11:00 PM &nbsp;|&nbsp; <strong>Phone:</strong> +52 444 892 6286 &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/olivamantequillapanyvino/" target="_blank" rel="noopener" class="text-blue-600 underline">@olivamantequillapanyvino</a></p>
<p class="text-gray-700 mb-3">Oliva's tagline — <em>Mantequilla, Pan y Vino</em> (butter, bread, and wine) — signals the concept: a Mediterranean-leaning bistro where brunch centers on toasted breads, good butter, and late-morning glasses of wine. The menu mixes SLP classics (chilaquiles) with European-inflected plates: <strong>salmon toast, omelettes, cazuela de huevos rotos</strong>, and rotating weekend specials. Average ticket is $200–300 MXN per person, making it one of the better-value Carranza-corridor brunches. Some days feature live music — check their Instagram before going. It's also one of the few spots in SLP that serves both breakfast/brunch and a proper dinner service, so it's a good pick for visitors who want a single reliable restaurant for a weekend.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-emerald-50 rounded p-2"><strong>Price:</strong> $$<br/>$400–600 MXN / 2</div>
<div class="bg-emerald-50 rounded p-2"><strong>Reservations:</strong><br/>Recommended Sunday</div>
<div class="bg-emerald-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-emerald-50 rounded p-2"><strong>Wine:</strong> Yes<br/><strong>Live music:</strong> Some days</div>
</div>
</div>

<!-- 10 Tres60 -->
<div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-teal-900 mb-2">10. Tres60 Bistro — Best Casual Centro Brunch</h3>
<p class="text-gray-700 mb-3"><strong>Neighborhood:</strong> Centro &nbsp;|&nbsp; <strong>Address:</strong> Av. Venustiano Carranza 390 &nbsp;|&nbsp; <strong>Hours:</strong> Daily 8:00 AM–10:00 PM (check per day)</p>
<p class="text-gray-700 mb-3">Tres60 bills itself as a bistro-bakery-brunch hybrid and delivers on all three. Freshly baked bread and pastries, a deep chilaquiles and enchiladas suizas lineup, and a casual vibe that works as well solo as in a group. Conveniently right on Carranza, so you can stack it with a walk through Plaza de Armas or pair it with a visit to Oliva next door if you're moving up the avenue.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-teal-50 rounded p-2"><strong>Price:</strong> $$<br/>$350–550 MXN / 2</div>
<div class="bg-teal-50 rounded p-2"><strong>Reservations:</strong><br/>Not required</div>
<div class="bg-teal-50 rounded p-2"><strong>Parking:</strong><br/>Street</div>
<div class="bg-teal-50 rounded p-2"><strong>Kids:</strong> Yes<br/><strong>Wifi:</strong> Yes</div>
</div>
</div>

</section>

<section id="honorable" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Honorable Mentions — Including the OG Potosino Brunch</h2>

<!-- Gorditas de Morales — the OG -->
<div class="bg-gradient-to-r from-red-50 to-orange-50 border-4 border-red-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-red-900 mb-3">Gorditas de Morales — The OG of Potosino Brunch</h3>
<p class="text-gray-800 mb-4"><strong>If there is one "honorable mention" that locals would argue is actually #1, it's Gorditas de Morales.</strong> Calle de las Gorditas de Morales — running along Camino a la Presa de San José in the Loma de los Filtros / Morales corridor, a short taxi ride from Centro Histórico — is the original Potosino weekend brunch. The historical anchor is weekend family traffic heading to the Presa de San José. Dozens of stalls and loncherías line the block, each gridding up thick corn-masa gorditas on a comal, splitting them open, and stuffing them with guisos: chicharrón prensado, rajas con queso, picadillo, nopales, papa con chorizo, asado de boda, frijoles, mole.</p>
<p class="text-gray-800 mb-4">The rule of thumb locals swear by: <strong>any stall with a line is guaranteed.</strong> The vendors without customers at 10 AM on a Sunday are the ones to skip. Regulars have their favorite, but newcomers should just walk the street, follow the crowd, and order 3–4 gorditas each with a Jarrito or a café de olla. No reservations. Cash is king. Peak time is 9:30 AM to 1:00 PM, and the best tables are the plastic stools at whatever stall is busiest.</p>
<p class="text-gray-800 mb-0"><strong>Why this is the OG:</strong> gorditas de Morales predate every modern brunch restaurant in this guide by decades. This is how Potosino families ate the weekend meal before "brunch" was even a word in the city. If you have one shot at a Potosino breakfast and want the most local experience possible, skip the sit-down restaurants and go here.</p>
</div>

<div class="bg-gray-50 border-l-4 border-gray-300 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-gray-800">Other Spots Worth a Visit</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700">
<li><strong>Café Corta'o</strong> (Calle Independencia 1150) — small Veracruz-tinged Mexican breakfast spot; Sundays 9:00 AM–2:30 PM during peak season.</li>
<li><strong>Capital Coffee SLP</strong> — specialty coffee with vegetarian/vegan brunch plates, good for digital nomads who need wifi.</li>
<li><strong>Petit Bistro &amp; Café</strong> (Sierra Leona, Lomas 3) — Parisian ambiance, baguettes, board games, ideal for slow brunches.</li>
<li><strong>Cielo Tinto</strong> — upscale hacienda-style Mexican brunch with a chilaquiles bar and made-to-order eggs.</li>
<li><strong>Hyatt Regency SLP</strong> — buffet breakfast daily 6 AM–12 PM, ~$350–390 MXN per adult; classic hotel brunch option for tourists.</li>
<li><strong>Mercado República</strong> — not a brunch restaurant per se, but the gorditas and enchilada stalls (Doña Evangelina local 3–4) open 10 AM–6 PM daily and are a secondary pilgrimage for the traditional almuerzo experience.</li>
<li><strong>Napoletano by Fork</strong> — Fork's pizza spin-off; not a brunch spot but worth knowing about if you loved Fork and want dinner later.</li>
</ul>
</div>
</section>

<section id="by-vibe" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Best Brunch by Vibe</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5"><h4 class="font-bold text-rose-900 mb-2">Best for a Date</h4><p class="text-sm text-rose-900">Croque La Vie (French intimacy), Oliva (wine + Mediterranean), or Refugio Tierra (patio aesthetic).</p></div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5"><h4 class="font-bold text-amber-900 mb-2">Best with Kids</h4><p class="text-sm text-amber-900">El Mesón de San Pascual (garden + Parque Tangamanga adjacent) or La Parroquia Potosina (classic family institution).</p></div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5"><h4 class="font-bold text-purple-900 mb-2">Best for Groups</h4><p class="text-sm text-purple-900">Fork Le Brunch Atelier or Dos Amores — big tables, shareable plates, weekend energy.</p></div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h4 class="font-bold text-red-900 mb-2">Best Traditional (Sit-Down)</h4><p class="text-sm text-red-900">La Parroquia Potosina — the enchiladas potosinas benchmark.</p></div>
<div class="bg-orange-50 border-2 border-orange-200 rounded-xl p-5"><h4 class="font-bold text-orange-900 mb-2">Best OG / Street-Style</h4><p class="text-sm text-orange-900">Gorditas de Morales — any busy stall on the Morales street. No reservations, cash only.</p></div>
<div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-5"><h4 class="font-bold text-pink-900 mb-2">Best Trendy / Instagram</h4><p class="text-sm text-pink-900">Dos Amores (pastel interiors) or Hogaza (moody bakery aesthetic).</p></div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5"><h4 class="font-bold text-green-900 mb-2">Best Outdoor Patio</h4><p class="text-sm text-green-900">Refugio Tierra (garden patio) or El Mesón de San Pascual (park-adjacent garden).</p></div>
<div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"><h4 class="font-bold text-blue-900 mb-2">Best Buffet</h4><p class="text-sm text-blue-900">La Parroquia Potosina (Fri–Sun) or Hyatt Regency breakfast buffet (daily).</p></div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900 mb-2">Best Vegan / Veggie</h4><p class="text-sm text-emerald-900">Refugio Tierra — dedicated vegan, vegetarian, and gluten-free menus.</p></div>
<div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5"><h4 class="font-bold text-yellow-900 mb-2">Best Coffee-Focused</h4><p class="text-sm text-yellow-900">Hogaza or Capital Coffee SLP — specialty espresso with tight brunch plates.</p></div>
<div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><h4 class="font-bold text-indigo-900 mb-2">Best Multi-Location</h4><p class="text-sm text-indigo-900">Fork — three branches (Centro, Chapultepec, Las Águilas). Pick the closest one to you.</p></div>
<div class="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-5"><h4 class="font-bold text-cyan-900 mb-2">Best Mediterranean</h4><p class="text-sm text-cyan-900">Oliva — butter, bread, wine, and a solid salmon toast on Av. Carranza.</p></div>
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
<li><strong>Gorditas de Morales</strong> — thick corn-masa pockets griddled on a comal, split open, stuffed with guisos. This is <em>the</em> Potosino brunch. Head to the Morales street, follow the crowd to whichever stall has the line, and order 3–4 per person.</li>
<li><strong>Asado de boda potosino</strong> — a thick, sweet-savory red-chile pork stew historically served at weddings; brunch version is usually spooned over rice with tortillas, or inside a gordita.</li>
<li><strong>Chilaquiles con cecina</strong> — fried tortilla triangles bathed in red or green salsa, crowned with Potosino-style cured beef (cecina), crema, onion, and queso fresco. Often served with a fried egg on top.</li>
<li><strong>Huevos rancheros potosinos</strong> — eggs on lightly-fried tortillas, swimming in a rustic tomato-chile sauce, served with refried beans and a side of cecina or chorizo.</li>
<li><strong>Huevos divorciados</strong> — two fried eggs, one in red salsa and one in green, separated by a runway of refried beans. A staple at Tres60 and Oliva.</li>
<li><strong>Molletes</strong> — split bolillos slathered with refried beans, melted cheese, and pico de gallo. Budget brunch at its best.</li>
<li><strong>Cazuela de huevos rotos</strong> — a clay-cazuela ensemble of runny eggs over fried potatoes, often with jamón serrano or chorizo. A specialty at Oliva.</li>
<li><strong>Machaca norteña</strong> — shredded dried beef scrambled with eggs, tomato, onion, and chile. Heavier option for big appetites.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">International Brunch Favorites in SLP</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
<li><strong>Eggs benedict</strong> — best versions at Cuatro Almas, Refugio Tierra, and Fork Le Brunch Atelier.</li>
<li><strong>Avocado toast</strong> — standard at every new-wave brunch spot; Hogaza and Refugio Tierra lead with sourdough + local honey variations.</li>
<li><strong>Açaí bowls</strong> — Dos Amores and Refugio Tierra do the best versions.</li>
<li><strong>French toast / pain perdu</strong> — Croque La Vie's pain perdu is the gold standard; Cuatro Almas does a great brioche version.</li>
<li><strong>Croque-monsieur / croque-madame</strong> — Croque La Vie is the specialist, but Fork's croque madame is an excellent, more casual alternative.</li>
<li><strong>Salmon toast</strong> — Oliva is the city's benchmark; Hogaza also does a strong version on house-baked sourdough.</li>
<li><strong>Pancakes &amp; waffles</strong> — Dos Amores, Tres60, and most hotel brunches.</li>
<li><strong>Shakshuka</strong> — occasional special at Refugio Tierra and Oliva.</li>
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
<li><strong>Mimosas</strong> — standard at Cuatro Almas, Fork, Dos Amores, Refugio Tierra, Oliva.</li>
<li><strong>Micheladas</strong> — spiced beer with lime, sauces, and chile; a brunch-appropriate Mexican alternative to a Bloody Mary.</li>
<li><strong>Mezcal</strong> — the Altiplano Potosino produces excellent mezcal; brunch cocktails often use local expressions.</li>
<li><strong>Specialty espresso drinks</strong> — flat whites, cortados, and pour-overs at Hogaza and Capital Coffee SLP.</li>
<li><strong>Cold brew &amp; nitro coffee</strong> — increasingly common at new-wave spots.</li>
<li><strong>Wine by the glass</strong> — Oliva is the obvious pick; late-morning glass of Mexican rosé pairs with salmon toast.</li>
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
<p class="text-gray-700">The UNESCO-linked downtown of pink cantera stone and walkable plazas. Home to traditional institutions (La Parroquia Potosina, Mercado República), newer bistros (Tres60, Café Corta'o, Croque La Vie), Fork Centro on Galeana, and Hogaza (when it's running its downtown café). Best if you're a tourist staying downtown or if you plan to combine brunch with a morning at Templo del Carmen or Museo Federico Silva.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Av. Carranza corridor</h4>
<p class="text-gray-700">The avenue that connects Centro to Lomas, running through some of SLP's most historic residential blocks. La Parroquia Potosina (no. 300), Tres60 Bistro (no. 390), and Oliva (no. 1325) all sit on Carranza — you can literally brunch-crawl this stretch.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Lomas (1ra, 2da, 3ra, 4ta Sección)</h4>
<p class="text-gray-700">Leafy upper-middle-class residential zone west of Centro. Epicenter of the new-wave brunch scene — Cuatro Almas, Petit Bistro, and multiple specialty coffee shops. Best if you're renting here or want a quieter, less touristy brunch.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Chapultepec / Privadas del Pedregal</h4>
<p class="text-gray-700">The corridor along Av. Parque Chapultepec, running along Parque Tangamanga I. Home to Refugio Tierra, El Mesón de San Pascual, and Fork Chapultepec (Torre Avancer, no. 1922). Ideal if you want to combine brunch with a morning walk or bike ride in the park.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Villa Magna / Altamira / Colinas del Parque / Las Águilas</h4>
<p class="text-gray-700">South-west side of the city, master-planned residential with newer commercial plazas. Dos Amores Brunch &amp; Meal in Colinas del Parque and Fork Le Brunch Atelier on Olmos 145 in Las Águilas 3ra Secc are the anchors, and more concepts are opening here as the area grows.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Loma de los Filtros / Morales — Calle de las Gorditas de Morales</h4>
<p class="text-gray-700">The original Potosino brunch neighborhood. A short taxi from Centro, this is where locals actually go for weekend almuerzo. No sit-down restaurants to book — just walk the street, find the busiest stall, sit on a plastic stool, and order gorditas until you can't anymore.</p>
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
<p class="text-sm text-blue-900">Sunday 11:00 AM–1:00 PM is peak. Book 24 hours ahead via phone or WhatsApp at Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier, Dos Amores, and Oliva. Walk-ins are fine on weekdays and Saturdays before 10 AM. Gorditas de Morales never takes reservations — just show up.</p>
</div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5">
<h4 class="font-bold text-green-900 mb-2">Tipping</h4>
<p class="text-sm text-green-900">10% is standard, 15% for excellent service. Check the bill first — some upscale spots add servicio. Leave the tip in cash if possible. Street stalls (Morales, Mercado República) don't expect tips but appreciate rounding up.</p>
</div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
<h4 class="font-bold text-purple-900 mb-2">Payment</h4>
<p class="text-sm text-purple-900">Cards (Visa, Mastercard, Amex at most) are widely accepted at brunch restaurants. Market stalls, gorditas stalls on Morales, and small traditional spots are cash-only. ATMs are plentiful in Centro and Lomas.</p>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
<h4 class="font-bold text-amber-900 mb-2">Dress Code</h4>
<p class="text-sm text-amber-900">Smart casual at most spots; Centro institutions accept anything short of beachwear. Hotel brunches expect business casual. Street stalls expect comfortable clothes you don't mind getting a drop of salsa on.</p>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5">
<h4 class="font-bold text-red-900 mb-2">Allergens (Spanish Phrases)</h4>
<p class="text-sm text-red-900">"Soy alérgico/a a ___" (I'm allergic to ___). Common: gluten (gluten), lactosa (lactose), huevo (egg), nueces (nuts), mariscos (shellfish). "Sin picante" = no spice.</p>
</div>
<div class="bg-teal-50 border-2 border-teal-200 rounded-xl p-5">
<h4 class="font-bold text-teal-900 mb-2">Portion Sizes</h4>
<p class="text-sm text-teal-900">Mexican brunch portions are large. A plate of enchiladas potosinas typically includes 4–6 pieces. Chilaquiles plates are dinner-sized. Order one entrée each; add one shared appetizer. Gorditas are smaller — 3–4 per person is a good starting point.</p>
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
<tr><td class="px-6 py-4 font-semibold text-green-700">Budget</td><td class="px-6 py-4">&lt;$300 MXN</td><td class="px-6 py-4">&lt;$17 USD</td><td class="px-6 py-4">Gorditas de Morales, Mercado República stalls, Hogaza pastries + coffee, Café Corta'o</td></tr>
<tr class="bg-gray-50"><td class="px-6 py-4 font-semibold text-blue-700">Mid-tier</td><td class="px-6 py-4">$400–700 MXN</td><td class="px-6 py-4">$22–39 USD</td><td class="px-6 py-4">Cuatro Almas, Fork (all branches), Dos Amores, Refugio Tierra, Oliva, Tres60, Croque La Vie, El Mesón de San Pascual, La Parroquia</td></tr>
<tr><td class="px-6 py-4 font-semibold text-purple-700">Upscale</td><td class="px-6 py-4">$800–1,400 MXN</td><td class="px-6 py-4">$45–78 USD</td><td class="px-6 py-4">Hyatt Regency buffet, Cielo Tinto brunch buffet, extended brunches at Oliva with wine pairings</td></tr>
</tbody>
</table>
</div>

<p class="text-gray-700 mb-6">As context: a comparable Sunday brunch for two in San Miguel de Allende typically runs $900–1,800 MXN (~$50–100 USD) at the mid-tier, and upwards of $2,500 MXN in places like Aperí or Jacinto 1930. SLP's brunch scene delivers similar quality at roughly half the price, especially at Cuatro Almas, Refugio Tierra, Fork, and Oliva. See our <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="text-blue-600 underline">full cost-of-living comparison</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Frequently Asked Questions</h2>
<div class="space-y-6">

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Is San Luis Potosí a good city for breakfast and brunch?</h3>
<p class="text-gray-700">Yes — San Luis Potosí is widely considered one of the best cities in Mexico for breakfast. Desayuno is treated as a social event rather than a quick meal, and the city's culinary patrimony (enchiladas potosinas, gorditas de Morales, asado de boda, cecina, café de olla) gives it more regional breakfast options than most Mexican cities. Modern brunch culture layers specialty coffee, bakery-driven menus, and international plates on top of that tradition.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">What is the best brunch spot in San Luis Potosí?</h3>
<p class="text-gray-700">For most visitors, <strong>Cuatro Almas</strong> in Lomas Cuarta Sección is the top pick — a specialty brunch restaurant open 8:00 AM to 2:00 PM with a devoted local following for its chipotle chilaquiles and eggs benedict. For a traditional Potosino brunch, <strong>La Parroquia Potosina</strong> (Av. Venustiano Carranza 300) is the institution, especially on weekends for its enchiladas potosinas buffet. For the OG Potosino brunch, head to <strong>Calle de las Gorditas de Morales</strong> — any stall with a line is guaranteed quality.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Where are the Gorditas de Morales in San Luis Potosí?</h3>
<p class="text-gray-700">Calle de las Gorditas de Morales runs along Camino a la Presa de San José in the Loma de los Filtros / Morales corridor — a short taxi ride from Centro Histórico, anchored historically by weekend traffic to the Presa de San José. The street is lined with dozens of gordita stalls and loncherías. Gorditas de Morales are the original Potosino brunch — thick corn-masa pockets griddled on a comal, split open, and stuffed with guisos (chicharrón prensado, nopales, rajas con queso, picadillo, asado de boda). The rule of thumb locals use: <strong>any stall with a line is guaranteed</strong>. No reservations, cash is king, and peak time is 9:30 AM to 1:00 PM.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Are reservations needed for brunch in San Luis Potosí?</h3>
<p class="text-gray-700">Not usually required on weekdays, but strongly recommended on Saturday and Sunday between 11:00 AM and 1:30 PM, which is peak brunch time in SLP. Popular spots like Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier, and Dos Amores routinely fill up — expect a 30–60 minute wait without a booking. Call the restaurant directly or send a WhatsApp message the day before.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Where do locals go for Sunday brunch in San Luis Potosí?</h3>
<p class="text-gray-700">Locals favor four clusters: <strong>Lomas / Chapultepec</strong> (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual, Fork Chapultepec), <strong>Centro</strong> (La Parroquia Potosina, Oliva on Carranza, Tres60 Bistro, Fork Centro, Croque La Vie), <strong>Colinas del Parque</strong> (Dos Amores), and <strong>Las Águilas 3ra Secc</strong> (Fork Le Brunch Atelier on Olmos 145). For the most authentic Potosino experience, locals head to <strong>Calle de las Gorditas de Morales</strong>.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Does Fork have more than one location in San Luis Potosí?</h3>
<p class="text-gray-700">Yes — Fork operates three locations in SLP. <strong>Fork Centro</strong> at Galeana 443 in the historic center; <strong>Fork Chapultepec</strong> inside Torre Avancer at Av. Parque Chapultepec 1922; and <strong>Fork Le Brunch Atelier</strong> at Olmos 145 in Las Águilas 3ra Secc, which is the brunch-specific concept. Reservations: Fork Centro / Chapultepec at +52 444 481 1996; Fork Le Brunch Atelier at +52 444 817 0705.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Is brunch a Mexican tradition?</h3>
<p class="text-gray-700">Brunch as a named meal is imported, but the concept of a late weekend morning meal is deeply Mexican — <em>almuerzo</em>, typically eaten between 10 AM and 1 PM, combines what English speakers would split into breakfast and lunch. In San Luis Potosí specifically, desayuno is a cornerstone of weekend culture: families gather for gorditas de Morales, enchiladas potosinas, and café de olla. Modern SLP brunch culture fuses this tradition with international additions like eggs benedict, avocado toast, pancakes, and mimosas.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">How much does brunch cost in San Luis Potosí?</h3>
<p class="text-gray-700">Budget brunch for two runs 200–350 MXN (~$11–20 USD) at gordita stalls on Calle de Morales or neighborhood cafés. Mid-tier spots like Cuatro Almas, Tres60, Oliva, Fork, Hogaza, or Dos Amores average 400–700 MXN (~$22–39 USD) for two with drinks. Upscale hotel brunches (Hyatt Regency, Hilton) and specialty restaurants come in at 800–1,400 MXN (~$45–78 USD) for two.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Which restaurants serve Mexican brunch vs international brunch in SLP?</h3>
<p class="text-gray-700">For authentic Mexican brunch: <strong>La Parroquia Potosina, El Mesón de San Pascual, Gorditas de Morales, and Mercado República stalls</strong>. For international / modern brunch: <strong>Cuatro Almas, Refugio Tierra, Dos Amores, and Croque La Vie</strong> (French). For fusion that blends both: <strong>Fork, Oliva, Hogaza, and Tres60 Bistro</strong> all serve chilaquiles alongside eggs benedict, croque madame, omelettes, and avocado toast.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">Do brunch spots in SLP have vegan or vegetarian options?</h3>
<p class="text-gray-700">Yes. <strong>Refugio Tierra</strong> offers vegan, vegetarian, and gluten-free options and is the top veggie-friendly brunch spot in the city. Hogaza, Oliva, Cuatro Almas, and Fork all have vegetarian options with dishes like chilaquiles verdes, avocado toast, açaí bowls, and plant-based bowls. Ask for "sin carne" (without meat) or "vegano" (vegan).</p>
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
<p class="text-orange-800 mb-3"><strong>San Luis Way is your complete local guide to the best brunch places in San Luis Potosí.</strong> Save this guide, book ahead for Sunday, and start with enchiladas potosinas — or skip straight to the Morales street. Your mimosa (or your café de olla) is waiting.</p>
<p class="text-orange-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Browse more SLP food guides →</a></p>
</div>

<script type="application/ld+json">${faqJsonLd}</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Los mejores lugares de brunch en San Luis Potosí — mesa moderna con chilaquiles, eggs benedict y mimosas" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-8">
  <div class="flex items-start gap-3">
    <div class="text-2xl" aria-hidden="true">✅</div>
    <div class="flex-1">
      <div class="text-xs font-bold uppercase tracking-wide text-blue-700 mb-1">Verificado de forma independiente</div>
      <p class="text-base font-bold text-gray-900 mb-1">Cada restaurante, dirección, teléfono y platillo de esta guía fue verificado el 24 de abril de 2026.</p>
      <p class="text-sm text-gray-700">Lee el <a href="/blog/factchecks/best-brunch-spots-san-luis-potosi" class="text-blue-700 hover:text-blue-900 underline font-semibold">reporte completo de verificación</a> con fuentes, cadenas de evidencia y las correcciones que hicimos antes de publicar.</p>
    </div>
  </div>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Tabla de Contenidos</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Brunch en San Luis Potosí: La Escena</a></li>
    <li><a href="#breakfast-city" class="text-blue-600 hover:text-blue-800">Por qué SLP es una de las mejores ciudades para desayunar en México</a></li>
    <li><a href="#quick-pick" class="text-blue-600 hover:text-blue-800">Tabla Rápida: Top 10 Lugares</a></li>
    <li><a href="#profiles" class="text-blue-600 hover:text-blue-800">Perfiles de Restaurantes (10 Lugares)</a></li>
    <li><a href="#honorable" class="text-blue-600 hover:text-blue-800">Menciones Honoríficas (Gorditas de Morales)</a></li>
    <li><a href="#by-vibe" class="text-blue-600 hover:text-blue-800">Mejor Brunch por Ambiente</a></li>
    <li><a href="#what-to-order" class="text-blue-600 hover:text-blue-800">Qué Pedir: Platillos Potosinos de Brunch</a></li>
    <li><a href="#drinks" class="text-blue-600 hover:text-blue-800">Bebidas para Maridar</a></li>
    <li><a href="#neighborhoods" class="text-blue-600 hover:text-blue-800">Mapa de Colonias para Brunch</a></li>
    <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Consejos para Visitantes</a></li>
    <li><a href="#budget" class="text-blue-600 hover:text-blue-800">Guía de Presupuesto</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">Preguntas Frecuentes</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Puntos Clave</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Mejor brunch en general:</strong> Cuatro Almas (Lomas Cuarta Sección) — chilaquiles al chipotle, eggs benedict, abierto de 8 AM a 2 PM.</li>
    <li><strong>Mejor brunch tradicional potosino:</strong> La Parroquia Potosina (Centro) — bufete de fin de semana y las legendarias enchiladas potosinas.</li>
    <li><strong>OG del brunch potosino:</strong> Gorditas de Morales — el corredor de Morales sobre Camino a la Presa de San José (Loma de los Filtros) es donde los locales realmente comen. Cualquier puesto con fila es garantía.</li>
    <li><strong>Mejor bistro multi-sucursal:</strong> Fork — tres sucursales en SLP (Centro, Chapultepec, Las Águilas) con Fork Le Brunch Atelier en Olmos 145 dedicado al brunch.</li>
    <li><strong>Mejor brunch de panadería artesanal:</strong> Hogaza — masa madre de especialidad, pan artesanal y café de especialidad.</li>
    <li><strong>Mejor brunch mediterráneo:</strong> Oliva (Av. Venustiano Carranza 1325) — concepto "Mantequilla, Pan y Vino" con salmon toast, chilaquiles y cazuela de huevos rotos.</li>
    <li><strong>Hora pico:</strong> Domingo 11:00 AM–1:00 PM — reserva con 24 horas de anticipación en cualquiera de los lugares más solicitados.</li>
    <li><strong>Brunch para dos:</strong> desde 200 MXN (~$11 USD) en lo económico hasta 1,400 MXN (~$78 USD) en lo alto de gama.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Brunch en San Luis Potosí: Una Tradición Nueva con Raíces Profundas</h2>

<p class="text-gray-700 mb-6"><strong>Si estás buscando los mejores lugares de brunch cerca de ti en San Luis Potosí, la buena noticia es que la escena ha explotado en los últimos cinco años — y descansa sobre una de las tradiciones de desayuno más fuertes de México.</strong> El brunch como comida con nombre propio es relativamente nuevo en SLP, pero la base cultural siempre estuvo aquí: el almuerzo, esa comida a media mañana que se come entre las 10 AM y la 1 PM, es como las familias potosinas han cerrado siempre sus fines de semana. Lo que ha cambiado es la estética — barras de café de especialidad, panaderías de masa madre, terrazas techadas y esa energía de mimosas de fin de semana que uno esperaría en Polanco o Roma Norte.</p>

<p class="text-gray-700 mb-6">El brunch en SLP vive en tres mundos que se traslapan. Primero, las <strong>cocinas tradicionales potosinas</strong> — lugares como La Parroquia Potosina y El Mesón de San Pascual — que llevan décadas sirviendo enchiladas potosinas, huevos rancheros y café de olla, y que por pura coincidencia tocan cada nota de lo que los extranjeros llaman brunch. Segundo, los <strong>restaurantes de brunch de nueva ola</strong> como Cuatro Almas, Refugio Tierra, Dos Amores y Fork (con sus tres sucursales), que abrieron entre finales de 2010 y principios de 2020 pensando específicamente en el público de media mañana de fin de semana: eggs benedict, avocado toast, bowls de açaí y mimosas. Tercero, la <strong>escena de panaderías de especialidad y mediterránea</strong> — Hogaza para pan artesanal y café de especialidad, Oliva para su brunch mediterráneo de mantequilla, pan y vino, Croque La Vie para el croque-monsieur parisino.</p>

<p class="text-gray-700 mb-6">La altitud importa más de lo que uno cree. SLP está a 1,863 m (6,112 ft), lo que significa que las mimosas, las micheladas y los cocteles de mezcal pegan más fuerte que al nivel del mar. Hidrátate. Pide un agua de jamaica al lado. El lado bueno de la altitud es un clima fresco casi todo el año — desayunar en una terraza soleada en SLP entre noviembre y abril es una de las experiencias de fin de semana genuinamente más agradables del centro de México.</p>

<p class="text-gray-700 mb-6">Esta guía perfila los <strong>10 mejores lugares de brunch en San Luis Potosí</strong> — direcciones verificadas, horarios de fin de semana, platillos estrella, rangos de precio y detalles prácticos de estacionamiento, reservaciones y niños. Está pensada para locales que buscan un lugar nuevo para el domingo, expats que acaban de llegar y quieren la lista de los que saben, y turistas que buscan algo mejor que el bufete del hotel. Para lecturas relacionadas, revisa nuestra <a href="/breakfast-spots-san-luis-potosi" class="text-blue-600 underline">guía de desayunos tempraneros</a>, el <a href="/traditional-cuisine" class="text-blue-600 underline">panorama de cocina tradicional potosina</a>, y el <a href="/restaurants" class="text-blue-600 underline">directorio completo de restaurantes de SLP</a>.</p>
</section>

<section id="breakfast-city" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Por qué San Luis Potosí es una de las mejores ciudades de México para desayunar</h2>

<div class="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
<p class="text-gray-800 mb-4"><strong>Si le preguntas a gente que se ha comido México completo cuáles son las mejores ciudades para desayunar, San Luis Potosí aparece en casi todas las listas.</strong> Los potosinos no tratan el desayuno como una comida de trámite. Es un ritual social — las familias se reúnen en la misma lonchería todos los domingos, los amigos agendan juntas a las 10 AM alrededor de un café de olla, y hay calles enteras que existen sin otro propósito que dar de desayunar a multitudes.</p>

<p class="text-gray-800 mb-4">Tres cosas hacen excepcional la cultura de desayuno de SLP:</p>

<ol class="list-decimal pl-6 space-y-3 text-gray-800 mb-4">
<li><strong>El patrimonio culinario es profundo y específico.</strong> Enchiladas potosinas, gorditas de Morales, asado de boda, cecina potosina, chilaquiles con cecina y café de olla en jarros de barro — son platillos que existen con esta calidad en ninguna otra parte de México. Otras regiones tienen sus propias firmas, pero SLP concentra varios desayunos de clase mundial en una sola ciudad.</li>
<li><strong>Variedad en cada rango de precio.</strong> Puedes comer extraordinariamente bien con 40 MXN en un puesto de gorditas en la Calle de Morales, tomarte un brunch de panadería de gama media en Hogaza por 250 MXN, o darte el lujo en Oliva o Cuatro Almas por 450 MXN — y las tres experiencias se sienten auténticas a la ciudad.</li>
<li><strong>La mañana es la hora más sociable de la ciudad.</strong> Las noches de SLP son tranquilas comparadas con CDMX o Guadalajara. Las mañanas, en cambio, están llenas — los tostadores de café de especialidad abren a las 7:30 AM, los puestos de gorditas del Mercado República se llenan para las 10, y para las 11 AM los restaurantes de brunch de Lomas tienen fila afuera. Si quieres entender la vida social potosina, ven a desayunar, no a cenar.</li>
</ol>

<p class="text-gray-800 mb-0">Publicaciones internacionales (Food &amp; Wine, Condé Nast Traveler, Eater) han destacado repetidamente a SLP por las enchiladas potosinas en específico, pero la ciudad merece una reputación más amplia como uno de los mejores destinos para desayunar del país. Si sólo vas a estar uno o dos días, arma tu itinerario alrededor del desayuno — vas a comer mejor que en la cena, a la mitad del precio.</p>
</div>
</section>

<section id="quick-pick" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tabla Rápida: Los 10 Mejores Lugares de Brunch en San Luis Potosí</h2>

<div class="overflow-x-auto mb-12">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #ea580c, #db2777);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Restaurante</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Ambiente</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Platillo Estrella</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Precio (2 pers.)</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Espera fin de semana</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Zona</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Cuatro Almas</td><td class="px-4 py-3">Chic local</td><td class="px-4 py-3">Chilaquiles al chipotle</td><td class="px-4 py-3 text-center">$450–650 MXN</td><td class="px-4 py-3 text-center">30–45 min</td><td class="px-4 py-3">Lomas 4ta</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">La Parroquia Potosina</td><td class="px-4 py-3">Tradicional</td><td class="px-4 py-3">Enchiladas potosinas</td><td class="px-4 py-3 text-center">$300–450 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Refugio Tierra</td><td class="px-4 py-3">Saludable chic</td><td class="px-4 py-3">Eggs benedict, bowls vegetales</td><td class="px-4 py-3 text-center">$500–700 MXN</td><td class="px-4 py-3 text-center">30–60 min</td><td class="px-4 py-3">Chapultepec</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">El Mesón de San Pascual</td><td class="px-4 py-3">Tradicional / jardín</td><td class="px-4 py-3">Chilaquiles con cecina</td><td class="px-4 py-3 text-center">$350–500 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Chapultepec</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Hogaza</td><td class="px-4 py-3">Panadería artesanal</td><td class="px-4 py-3">Masa madre, café de especialidad</td><td class="px-4 py-3 text-center">$250–450 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Revisa IG @hogaza.cafe</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Dos Amores</td><td class="px-4 py-3">Instagrameable</td><td class="px-4 py-3">Brunch plates, açaí</td><td class="px-4 py-3 text-center">$450–600 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Colinas del Parque</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Croque La Vie</td><td class="px-4 py-3">Francés casual</td><td class="px-4 py-3">Croque-monsieur, pain perdu</td><td class="px-4 py-3 text-center">$400–600 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Fork (3 sucursales)</td><td class="px-4 py-3">Bistró de brunch</td><td class="px-4 py-3">Chilaquiles, croque madame</td><td class="px-4 py-3 text-center">$400–650 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Centro / Chapultepec / Las Águilas</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Oliva</td><td class="px-4 py-3">Mediterráneo</td><td class="px-4 py-3">Salmon toast, cazuela de huevos rotos</td><td class="px-4 py-3 text-center">$400–600 MXN</td><td class="px-4 py-3 text-center">20–40 min</td><td class="px-4 py-3">Av. Carranza</td></tr>
      <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold">Tres60 Bistro</td><td class="px-4 py-3">Bistró casual</td><td class="px-4 py-3">Chilaquiles, enchiladas suizas</td><td class="px-4 py-3 text-center">$350–550 MXN</td><td class="px-4 py-3 text-center">15–30 min</td><td class="px-4 py-3">Centro</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Precios en pesos mexicanos, para dos personas con bebidas; aproximado a 18 MXN = $1 USD. Las esperas corresponden al pico del domingo 11:30 AM–1:30 PM. Revisa la sección de Menciones Honoríficas más abajo para las Gorditas de Morales, el OG del brunch potosino.</p>
</section>

<section id="profiles" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Perfiles de Restaurantes de Brunch</h2>

<div class="mb-8">
<img src="${IMG_MODERN}" alt="Presentación moderna de brunch en San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<!-- 1 Cuatro Almas -->
<div class="bg-white border-2 border-orange-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-orange-900 mb-2">1. Cuatro Almas — El Favorito de los Locales</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Lomas Cuarta Sección &nbsp;|&nbsp; <strong>Dirección:</strong> Sierra Pedroso 105 &nbsp;|&nbsp; <strong>Horario:</strong> Todos los días 8:00 AM–2:00 PM &nbsp;|&nbsp; <strong>Teléfono:</strong> +52 444 652 9008</p>
<p class="text-gray-700 mb-3">El consenso para el mejor brunch de San Luis Potosí. Escondido en una calle residencial tranquila de Lomas, Cuatro Almas (cuatroalmas.mx) es un concepto dedicado a desayuno y brunch — sin cena, sin happy hour. Los <strong>chilaquiles al chipotle</strong> son el platillo por el que los locales traen a sus amigos de fuera. Los eggs benedict y el pan francés de la casa son las alternativas más gringas.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-orange-50 rounded p-2"><strong>Precio:</strong> $$<br/>$450–650 MXN / 2</div>
<div class="bg-orange-50 rounded p-2"><strong>Reservaciones:</strong><br/>Recomendadas en fin de semana</div>
<div class="bg-orange-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle + valet</div>
<div class="bg-orange-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Wifi:</strong> Sí</div>
</div>
</div>

<!-- 2 La Parroquia Potosina -->
<div class="bg-white border-2 border-red-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-red-900 mb-2">2. La Parroquia Potosina — La Institución</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Centro Histórico &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Venustiano Carranza 300 &nbsp;|&nbsp; <strong>Horario:</strong> Lun–Sáb 7:00 AM–medianoche; bufete de brunch de fin de semana vie–dom</p>
<p class="text-gray-700 mb-3">Si sólo vas a comerte un brunch tradicional en SLP, cómetelo aquí. La Parroquia lleva sirviendo a los potosinos desde antes de que la palabra "brunch" existiera, y sus <strong>enchiladas potosinas</strong> — tortillas de masa teñida de guajillo rellenas de queso Oaxaca, coronadas con guiso de papa y zanahoria, crema y queso fresco desmoronado — son la vara con la que se mide cualquier otro plato de la ciudad. El bufete de viernes a domingo es la mejor relación calidad-precio sentado en el Centro.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-red-50 rounded p-2"><strong>Precio:</strong> $<br/>$300–450 MXN / 2</div>
<div class="bg-red-50 rounded p-2"><strong>Reservaciones:</strong><br/>No requeridas</div>
<div class="bg-red-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle + pensiones cercanas</div>
<div class="bg-red-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Wifi:</strong> Limitado</div>
</div>
</div>

<!-- 3 Refugio Tierra -->
<div class="bg-white border-2 border-green-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-green-900 mb-2">3. Refugio Tierra — Mejor Brunch Saludable / Vegetariano</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Privadas del Pedregal (cerca de Chapultepec) &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Parque Chapultepec 1335 &nbsp;|&nbsp; <strong>Horario:</strong> Mar–Dom 8:00 AM–2:30 PM (cerrado lun) &nbsp;|&nbsp; <strong>Teléfono:</strong> +52 444 210 0778</p>
<p class="text-gray-700 mb-3">El lugar en la zona de Lomas para quien quiere la experiencia de brunch sin la pesadez. Refugio Tierra ofrece <strong>menús vegano, vegetariano y sin gluten</strong> junto a los clásicos chilaquiles y eggs benedict, con énfasis en jugos frescos, smoothie bowls y platos con mucho verde. El patio es uno de los espacios de brunch más fotogénicos de la ciudad.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-green-50 rounded p-2"><strong>Precio:</strong> $$<br/>$500–700 MXN / 2</div>
<div class="bg-green-50 rounded p-2"><strong>Reservaciones:</strong><br/>Muy recomendadas</div>
<div class="bg-green-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-green-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Pet-friendly:</strong> Patio</div>
</div>
</div>

<!-- 4 El Mesón de San Pascual -->
<div class="bg-white border-2 border-yellow-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-yellow-900 mb-2">4. El Mesón de San Pascual — Mejor Tradicional + Jardín</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Chapultepec (junto al Parque Tangamanga I) &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Parque Chapultepec 404 &nbsp;|&nbsp; <strong>Horario:</strong> Todos los días 7:30 AM–1:45 PM</p>
<p class="text-gray-700 mb-3">Una cocina potosina escondida pegada al Parque Tangamanga, el Mesón de San Pascual es el secreto de los locales para un brunch tradicional en un jardín tranquilo. Pide los <strong>chilaquiles con cecina</strong> en salsa de cascabel o pasilla, acompañados de café de olla en jarros de barro. Muy popular entre las familias que caminan o andan en bici por el parque los domingos por la mañana.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-yellow-50 rounded p-2"><strong>Precio:</strong> $<br/>$350–500 MXN / 2</div>
<div class="bg-yellow-50 rounded p-2"><strong>Reservaciones:</strong><br/>No requeridas</div>
<div class="bg-yellow-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Sí (lote)</div>
<div class="bg-yellow-50 rounded p-2"><strong>Niños:</strong> Excelente<br/><strong>Wifi:</strong> Sí</div>
</div>
</div>

<!-- 5 Hogaza -->
<div class="bg-white border-2 border-amber-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-amber-900 mb-2">5. Hogaza — Mejor Brunch de Panadería Artesanal</h3>
<p class="text-gray-700 mb-3"><strong>Concepto:</strong> Panadería artesanal + café de especialidad &nbsp;|&nbsp; <strong>Horario:</strong> Lun–Vie 7:30 AM–8:30 PM, Sáb–Dom 8:30 AM–8:30 PM &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/hogaza.cafe/" target="_blank" rel="noopener" class="text-blue-600 underline">@hogaza.cafe</a></p>
<p class="text-gray-700 mb-3">"Hogaza" significa un pan grande, y esa sola palabra te dice la filosofía del lugar. Aquí es donde cristalizó la nueva ola potosina de café de especialidad y masa madre. Espera hogazas de fermentación larga con costra crujiente, canelés y pastelería laminada acompañados de flat whites, pour-overs y un menú de brunch corto pero apretado — tostadas con burrata o salmón ahumado, tartas saladas y una pequeña rotación de platos mexicanos como chilaquiles. Confirma la sucursal actual por Instagram antes de ir — el obrador y el café se han movido conforme ha crecido la marca. Excelente para desayunar solo y para llevarte pan a casa.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-amber-50 rounded p-2"><strong>Precio:</strong> $<br/>$250–450 MXN / 2</div>
<div class="bg-amber-50 rounded p-2"><strong>Reservaciones:</strong><br/>No requeridas</div>
<div class="bg-amber-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-amber-50 rounded p-2"><strong>Ir solo:</strong> Ideal<br/><strong>Para llevar:</strong> Pan</div>
</div>
</div>

<!-- 6 Dos Amores -->
<div class="bg-white border-2 border-pink-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-pink-900 mb-2">6. Dos Amores Brunch &amp; Meal — El Más Instagrameable</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Colinas del Parque &nbsp;|&nbsp; <strong>Dirección:</strong> Parque Central 455 &nbsp;|&nbsp; <strong>Horario:</strong> Lun y Mié–Dom 8:30 AM–4:00 PM (cerrado mar) &nbsp;|&nbsp; <strong>Teléfono:</strong> +52 444 165 3308</p>
<p class="text-gray-700 mb-3">Un concepto dedicado al brunch con interiores en tonos pastel, bowls de açaí, pan francés elaborado y la presentación perfecta para redes sociales. Dos Amores se volvió el lugar de cabecera para citas dominicales y brunchs entre amigas en el surponiente de la ciudad. Las porciones son generosas, el café es excelente, y ofrecen sentado, para llevar y catering para eventos pequeños.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-pink-50 rounded p-2"><strong>Precio:</strong> $$<br/>$450–600 MXN / 2</div>
<div class="bg-pink-50 rounded p-2"><strong>Reservaciones:</strong><br/>Recomendadas en fin de semana</div>
<div class="bg-pink-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-pink-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Wifi:</strong> Sí</div>
</div>
</div>

<!-- 7 Croque La Vie -->
<div class="bg-white border-2 border-blue-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-blue-900 mb-2">7. Croque La Vie — Mejor Brunch Estilo Francés</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Centro / Universidad &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Universidad 260 &nbsp;|&nbsp; <strong>Horario:</strong> Mar–Sáb 9:00 AM–10:00 PM; Dom 10:00 AM–8:00 PM (cerrado lun) &nbsp;|&nbsp; <strong>Teléfono:</strong> +52 444 123 4391</p>
<p class="text-gray-700 mb-3">Aquí la cocina regional mexicana se encuentra con París. El primer restaurante francés en SLP especializado en <strong>croque-monsieur</strong>, Croque La Vie es la jugada cuando quieres algo diferente el domingo — pain perdu (pan francés), croque madame con un huevo estrellado perfecto, crème brûlée de postre, o su fusión <em>croque de cochinita</em> que combina cerdo estilo Yucatán con salsa de serrano-jalapeño y cebolla morada.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-blue-50 rounded p-2"><strong>Precio:</strong> $$<br/>$400–600 MXN / 2</div>
<div class="bg-blue-50 rounded p-2"><strong>Reservaciones:</strong><br/>Recomendadas domingo</div>
<div class="bg-blue-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-blue-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Cita:</strong> Ideal</div>
</div>
</div>

<!-- 8 Fork -->
<div class="bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-purple-900 mb-2">8. Fork — Mejor Bistró de Brunch Multi-Sucursal</h3>
<p class="text-gray-700 mb-3"><strong>Tres sucursales en SLP:</strong></p>
<ul class="list-disc pl-6 text-gray-700 mb-3">
<li><strong>Fork Centro</strong> — Galeana 443, Centro Histórico.</li>
<li><strong>Fork Chapultepec</strong> — Torre Avancer, Av. Parque Chapultepec 1922.</li>
<li><strong>Fork Le Brunch Atelier</strong> — Olmos 145, Las Águilas 3ra Secc (el concepto dedicado al brunch).</li>
</ul>
<p class="text-gray-700 mb-3"><strong>Reservaciones:</strong> Centro / Chapultepec +52 444 481 1996 · Le Brunch Atelier +52 444 817 0705 &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/forkslp/" target="_blank" rel="noopener" class="text-blue-600 underline">@forkslp</a></p>
<p class="text-gray-700 mb-3">Fork es la marca local de bistró-brunch potosino con tres sucursales, una de las cuales — Fork Le Brunch Atelier en Olmos 145 — está dedicada específicamente al público de brunch de fin de semana. El menú va de clásicos potosinos (chilaquiles, molletes) a platos de influencia francesa (croque madame). Es uno de los conceptos de brunch mejor calificados de SLP en Restaurant Guru (4.4 estrellas, 1,400+ reseñas en el Atelier). Elige la sucursal que te quede más cerca — comparten ADN de cocina pero cada una tiene un ambiente distinto (Centro es la más turística, Chapultepec funciona bien para un brunch de trabajo, y Las Águilas es la más tranquila para un domingo largo).</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-purple-50 rounded p-2"><strong>Precio:</strong> $$<br/>$400–650 MXN / 2</div>
<div class="bg-purple-50 rounded p-2"><strong>Reservaciones:</strong><br/>Recomendadas en fin de semana</div>
<div class="bg-purple-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Varía por sucursal</div>
<div class="bg-purple-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Grupos:</strong> Ideal</div>
</div>
</div>

<!-- 9 Oliva -->
<div class="bg-white border-2 border-emerald-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-emerald-900 mb-2">9. Oliva (Mantequilla, Pan y Vino) — Mejor Brunch Mediterráneo</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Corredor de Av. Carranza &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Venustiano Carranza 1325 &nbsp;|&nbsp; <strong>Horario:</strong> Desayuno Lun–Sáb 8:00 AM–1:00 PM, Dom 9:00 AM–2:00 PM; Cena Mar–Sáb 6:00 PM–11:00 PM &nbsp;|&nbsp; <strong>Teléfono:</strong> +52 444 892 6286 &nbsp;|&nbsp; <strong>Instagram:</strong> <a href="https://www.instagram.com/olivamantequillapanyvino/" target="_blank" rel="noopener" class="text-blue-600 underline">@olivamantequillapanyvino</a></p>
<p class="text-gray-700 mb-3">El lema de Oliva — <em>Mantequilla, Pan y Vino</em> — resume el concepto: un bistró de inclinación mediterránea donde el brunch gira alrededor del pan tostado, la buena mantequilla y las copas de vino a media mañana. El menú mezcla clásicos potosinos (chilaquiles) con platos de inflexión europea: <strong>salmon toast, omelettes, cazuela de huevos rotos</strong> y especiales rotativos de fin de semana. El ticket promedio ronda los $200–300 MXN por persona, lo que lo vuelve uno de los brunches con mejor relación calidad-precio del corredor Carranza. Algunos días hay música en vivo — revisa su Instagram antes de ir. También es de los pocos lugares en SLP que ofrecen tanto servicio de desayuno/brunch como cena formal, así que es una buena opción para visitantes que buscan un sólo restaurante confiable para un fin de semana.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-emerald-50 rounded p-2"><strong>Precio:</strong> $$<br/>$400–600 MXN / 2</div>
<div class="bg-emerald-50 rounded p-2"><strong>Reservaciones:</strong><br/>Recomendadas domingo</div>
<div class="bg-emerald-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-emerald-50 rounded p-2"><strong>Vino:</strong> Sí<br/><strong>Música en vivo:</strong> Algunos días</div>
</div>
</div>

<!-- 10 Tres60 -->
<div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-teal-900 mb-2">10. Tres60 Bistro — Mejor Brunch Casual en Centro</h3>
<p class="text-gray-700 mb-3"><strong>Colonia:</strong> Centro &nbsp;|&nbsp; <strong>Dirección:</strong> Av. Venustiano Carranza 390 &nbsp;|&nbsp; <strong>Horario:</strong> Todos los días 8:00 AM–10:00 PM (revisar por día)</p>
<p class="text-gray-700 mb-3">Tres60 se vende como híbrido bistró-panadería-brunch y cumple en los tres frentes. Pan y pastelería recién horneada, un menú profundo de chilaquiles y enchiladas suizas, y un ambiente casual que funciona igual de bien solo o en grupo. Está justo sobre Carranza, así que puedes combinarlo con un paseo por la Plaza de Armas o encadenarlo con una visita a Oliva si te vas subiendo por la avenida.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
<div class="bg-teal-50 rounded p-2"><strong>Precio:</strong> $$<br/>$350–550 MXN / 2</div>
<div class="bg-teal-50 rounded p-2"><strong>Reservaciones:</strong><br/>No requeridas</div>
<div class="bg-teal-50 rounded p-2"><strong>Estacionamiento:</strong><br/>Calle</div>
<div class="bg-teal-50 rounded p-2"><strong>Niños:</strong> Sí<br/><strong>Wifi:</strong> Sí</div>
</div>
</div>

</section>

<section id="honorable" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Menciones Honoríficas — Incluyendo el OG del Brunch Potosino</h2>

<!-- Gorditas de Morales — the OG -->
<div class="bg-gradient-to-r from-red-50 to-orange-50 border-4 border-red-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold text-red-900 mb-3">Gorditas de Morales — El OG del Brunch Potosino</h3>
<p class="text-gray-800 mb-4"><strong>Si hay una "mención honorífica" que los locales pelearían como número uno, son las Gorditas de Morales.</strong> La Calle de las Gorditas de Morales — sobre el Camino a la Presa de San José en el corredor Loma de los Filtros / Morales, a un corto viaje en taxi del Centro Histórico — es el brunch potosino original de fin de semana. El ancla histórica es el tráfico de fin de semana de las familias hacia la Presa de San José. Decenas de puestos y loncherías cubren la cuadra, cada uno echando al comal gorditas gruesas de masa de maíz, abriéndolas por en medio y rellenándolas con guisos: chicharrón prensado, rajas con queso, picadillo, nopales, papa con chorizo, asado de boda, frijoles, mole.</p>
<p class="text-gray-800 mb-4">La regla por la que juran los locales: <strong>cualquier puesto con fila es garantía.</strong> Los que no tienen clientes a las 10 AM de un domingo son los que conviene saltarse. Los clientes habituales tienen su favorito, pero los que van por primera vez mejor caminen la calle, sigan a la multitud y pidan 3 o 4 gorditas cada uno con un Jarrito o un café de olla. Sin reservaciones. Solo efectivo. La hora pico es de 9:30 AM a 1:00 PM, y las mejores mesas son los bancos de plástico del puesto que esté más lleno.</p>
<p class="text-gray-800 mb-0"><strong>Por qué es el OG:</strong> las gorditas de Morales anteceden por décadas a cualquier restaurante moderno de brunch de esta guía. Así es como las familias potosinas comían el almuerzo de fin de semana antes de que la palabra "brunch" siquiera existiera en la ciudad. Si tienes una sola oportunidad de desayunar potosino y quieres la experiencia más local posible, sáltate los restaurantes sentados y ven aquí.</p>
</div>

<div class="bg-gray-50 border-l-4 border-gray-300 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-gray-800">Otros Lugares Dignos de Visita</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700">
<li><strong>Café Corta'o</strong> (Calle Independencia 1150) — pequeño lugar de desayunos mexicanos con toque veracruzano; domingos 9:00 AM–2:30 PM en temporada alta.</li>
<li><strong>Capital Coffee SLP</strong> — café de especialidad con platos de brunch vegetariano/vegano, bueno para nómadas digitales que necesitan wifi.</li>
<li><strong>Petit Bistro &amp; Café</strong> (Sierra Leona, Lomas 3) — ambiente parisino, baguettes, juegos de mesa, ideal para brunches largos.</li>
<li><strong>Cielo Tinto</strong> — brunch mexicano tipo hacienda con barra de chilaquiles y huevos al gusto.</li>
<li><strong>Hyatt Regency SLP</strong> — bufete de desayuno diario de 6 AM a 12 PM, aprox. $350–390 MXN por adulto; opción clásica de brunch de hotel para turistas.</li>
<li><strong>Mercado República</strong> — no es un restaurante de brunch como tal, pero los puestos de gorditas y enchiladas (Doña Evangelina local 3–4) abren de 10 AM a 6 PM todos los días y son peregrinaje secundario para la experiencia tradicional del almuerzo.</li>
<li><strong>Napoletano by Fork</strong> — el spin-off de pizza de Fork; no es un lugar de brunch pero vale la pena tenerlo en el radar si amaste Fork y quieres cenar después.</li>
</ul>
</div>
</section>

<section id="by-vibe" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Mejor Brunch por Ambiente</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5"><h4 class="font-bold text-rose-900 mb-2">Mejor para una Cita</h4><p class="text-sm text-rose-900">Croque La Vie (intimidad francesa), Oliva (vino + mediterráneo) o Refugio Tierra (estética de patio).</p></div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5"><h4 class="font-bold text-amber-900 mb-2">Mejor con Niños</h4><p class="text-sm text-amber-900">El Mesón de San Pascual (jardín + Parque Tangamanga a un paso) o La Parroquia Potosina (institución familiar clásica).</p></div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5"><h4 class="font-bold text-purple-900 mb-2">Mejor para Grupos</h4><p class="text-sm text-purple-900">Fork Le Brunch Atelier o Dos Amores — mesas grandes, platillos para compartir y energía de fin de semana.</p></div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h4 class="font-bold text-red-900 mb-2">Mejor Tradicional (Sentado)</h4><p class="text-sm text-red-900">La Parroquia Potosina — la vara de medida para las enchiladas potosinas.</p></div>
<div class="bg-orange-50 border-2 border-orange-200 rounded-xl p-5"><h4 class="font-bold text-orange-900 mb-2">Mejor OG / Estilo Callejero</h4><p class="text-sm text-orange-900">Gorditas de Morales — cualquier puesto lleno de la calle de Morales. Sin reservas, solo efectivo.</p></div>
<div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-5"><h4 class="font-bold text-pink-900 mb-2">Más Trendy / Instagram</h4><p class="text-sm text-pink-900">Dos Amores (interiores pastel) o Hogaza (estética de panadería tenue).</p></div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5"><h4 class="font-bold text-green-900 mb-2">Mejor Patio al Aire Libre</h4><p class="text-sm text-green-900">Refugio Tierra (jardín) o El Mesón de San Pascual (jardín junto al parque).</p></div>
<div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"><h4 class="font-bold text-blue-900 mb-2">Mejor Bufete</h4><p class="text-sm text-blue-900">La Parroquia Potosina (vie–dom) o el bufete de desayunos del Hyatt Regency (diario).</p></div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900 mb-2">Mejor Vegano / Vegetariano</h4><p class="text-sm text-emerald-900">Refugio Tierra — menús dedicados vegano, vegetariano y sin gluten.</p></div>
<div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5"><h4 class="font-bold text-yellow-900 mb-2">Mejor Enfocado en Café</h4><p class="text-sm text-yellow-900">Hogaza o Capital Coffee SLP — espresso de especialidad con platillos de brunch bien resueltos.</p></div>
<div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><h4 class="font-bold text-indigo-900 mb-2">Mejor Multi-Sucursal</h4><p class="text-sm text-indigo-900">Fork — tres sucursales (Centro, Chapultepec, Las Águilas). Elige la que te quede más cerca.</p></div>
<div class="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-5"><h4 class="font-bold text-cyan-900 mb-2">Mejor Mediterráneo</h4><p class="text-sm text-cyan-900">Oliva — mantequilla, pan, vino y un buen salmon toast sobre Av. Carranza.</p></div>
</div>
</section>

<section id="what-to-order" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Qué Pedir: Platillos Potosinos de Brunch</h2>

<div class="mb-8">
<img src="${IMG_ENCHILADAS}" alt="Enchiladas potosinas — el platillo emblema de San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Enchiladas Potosinas — El Platillo Emblema de la Ciudad</h3>
<p class="text-gray-700 mb-6">Las enchiladas potosinas no se parecen a ninguna otra enchilada de México. La masa misma se tiñe de un rojo-naranja profundo al amasarla con <strong>salsa de chile guajillo</strong> antes de prensarla en tortillas pequeñas. Cada tortilla se rellena con <strong>queso Oaxaca</strong> (el queso blanco que derrite en hebras), se dobla a la mitad — no se enrolla — y se dora ligeramente al comal. Se sirven coronadas con un <em>guiso</em> tibio de papa y zanahoria (un sofrito estilo mirepoix), una cucharada de salsa roja, un buen chorro de crema, queso fresco desmoronado, cebolla blanca en rodajas finas y un lado de frijoles refritos. El sabor es ahumado-dulce del guajillo, la textura es crujiente-suave, y la ración suele ser de 4 a 6 piezas — porción ideal de brunch.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Otros Platillos Potosinos Imperdibles</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
<li><strong>Gorditas de Morales</strong> — gorditas gruesas de masa de maíz asadas al comal, abiertas y rellenas de guisos. Éste es <em>el</em> brunch potosino. Ve a la calle de Morales, sigue a la gente hasta el puesto con la fila más larga y pide 3–4 por persona.</li>
<li><strong>Asado de boda potosino</strong> — un guisado espeso de puerco en chile rojo, dulzón y sabroso, que históricamente se servía en las bodas; en versión brunch se sirve sobre arroz con tortillas, o dentro de una gordita.</li>
<li><strong>Chilaquiles con cecina</strong> — triángulos de tortilla frita bañados en salsa roja o verde, coronados con cecina potosina, crema, cebolla y queso fresco. Muchas veces con un huevo estrellado encima.</li>
<li><strong>Huevos rancheros potosinos</strong> — huevos sobre tortillas ligeramente fritas, nadando en una salsa rústica de jitomate y chile, servidos con frijoles refritos y un lado de cecina o chorizo.</li>
<li><strong>Huevos divorciados</strong> — dos huevos estrellados, uno en salsa roja y otro en verde, separados por una pista de frijoles refritos. Básicos en Tres60 y Oliva.</li>
<li><strong>Molletes</strong> — bolillos abiertos, untados de frijoles refritos, queso gratinado y pico de gallo. Brunch económico en su máxima expresión.</li>
<li><strong>Cazuela de huevos rotos</strong> — un conjunto en cazuela de barro con huevos tiernos sobre papas fritas, muchas veces con jamón serrano o chorizo. Especialidad de Oliva.</li>
<li><strong>Machaca norteña</strong> — carne seca deshebrada revuelta con huevo, jitomate, cebolla y chile. Opción más pesada para apetitos grandes.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Favoritos Internacionales de Brunch en SLP</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
<li><strong>Eggs benedict</strong> — las mejores versiones en Cuatro Almas, Refugio Tierra y Fork Le Brunch Atelier.</li>
<li><strong>Avocado toast</strong> — estándar en cualquier lugar de brunch de nueva ola; Hogaza y Refugio Tierra encabezan con variaciones de masa madre + miel local.</li>
<li><strong>Bowls de açaí</strong> — Dos Amores y Refugio Tierra hacen las mejores versiones.</li>
<li><strong>Pan francés / pain perdu</strong> — el pain perdu de Croque La Vie es el estándar de oro; Cuatro Almas hace una gran versión de brioche.</li>
<li><strong>Croque-monsieur / croque-madame</strong> — Croque La Vie es la casa especialista, pero la croque madame de Fork es una excelente alternativa más casual.</li>
<li><strong>Salmon toast</strong> — Oliva marca la referencia en la ciudad; Hogaza también hace una versión fuerte sobre masa madre de la casa.</li>
<li><strong>Hot cakes y waffles</strong> — Dos Amores, Tres60 y la mayoría de los brunches de hotel.</li>
<li><strong>Shakshuka</strong> — especial ocasional en Refugio Tierra y Oliva.</li>
</ul>
</section>

<section id="drinks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Bebidas para Maridar con el Brunch en SLP</h2>

<div class="mb-8">
<img src="${IMG_TRADITIONAL}" alt="Bebidas tradicionales potosinas — café de olla y atole" class="w-full rounded-xl shadow-lg" />
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
<h4 class="text-xl font-bold text-amber-900 mb-3">Lado Tradicional</h4>
<ul class="list-disc pl-6 space-y-2 text-amber-900">
<li><strong>Café de olla</strong> — café preparado con canela y piloncillo en olla de barro. El café por excelencia del brunch potosino.</li>
<li><strong>Atole</strong> — bebida espesa y caliente a base de masa, muchas veces con chocolate, guayaba o fresa.</li>
<li><strong>Champurrado</strong> — atole de chocolate, perfecto para las mañanas frescas.</li>
<li><strong>Agua de jamaica</strong> — agua fresca de flor de jamaica, ácida y de un rojo intenso.</li>
<li><strong>Agua de horchata</strong> — leche de arroz con canela, el maridaje clásico de las enchiladas potosinas.</li>
<li><strong>Chocolate caliente</strong> — sobre todo en los lugares tradicionales.</li>
</ul>
</div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
<h4 class="text-xl font-bold text-purple-900 mb-3">Lado Moderno / con Alcohol</h4>
<ul class="list-disc pl-6 space-y-2 text-purple-900">
<li><strong>Mimosas</strong> — estándar en Cuatro Almas, Fork, Dos Amores, Refugio Tierra y Oliva.</li>
<li><strong>Micheladas</strong> — cerveza condimentada con limón, salsas y chile; la alternativa mexicana al Bloody Mary, apropiada para brunch.</li>
<li><strong>Mezcal</strong> — el Altiplano Potosino produce mezcales excelentes; muchos cocteles de brunch usan destilados locales.</li>
<li><strong>Bebidas de espresso de especialidad</strong> — flat whites, cortados y pour-overs en Hogaza y Capital Coffee SLP.</li>
<li><strong>Cold brew y café nitro</strong> — cada vez más comunes en los lugares de nueva ola.</li>
<li><strong>Vino por copeo</strong> — Oliva es la opción obvia; una copa de rosado mexicano a media mañana marida increíble con un salmon toast.</li>
<li><strong>Jugos frescos</strong> — naranja, verdes detox y mezclas de betabel con jengibre; el juice bar de Refugio Tierra es excepcional.</li>
</ul>
</div>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
<p class="text-yellow-800"><strong>Tip de altitud:</strong> a 1,863 m, el alcohol pega más fuerte que al nivel del mar. Mide las mimosas y ten un agua fresca al lado. Más vale ibuprofeno antes del brunch que después.</p>
</div>
</section>

<section id="neighborhoods" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Mapa de Colonias: Dónde Vive la Escena del Brunch</h2>

<div class="space-y-6 mb-8">
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Centro Histórico</h4>
<p class="text-gray-700">El centro inscrito por la UNESCO, de cantera rosa y plazas caminables. Alberga las instituciones tradicionales (La Parroquia Potosina, Mercado República), los bistrós más nuevos (Tres60, Café Corta'o, Croque La Vie), Fork Centro en Galeana, y Hogaza (cuando está corriendo su café del centro). Es la mejor opción si eres turista hospedado en el centro o si quieres combinar el brunch con una mañana en el Templo del Carmen o el Museo Federico Silva.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Corredor de Av. Carranza</h4>
<p class="text-gray-700">La avenida que conecta el Centro con Lomas, atravesando algunos de los bloques residenciales más históricos de SLP. La Parroquia Potosina (no. 300), Tres60 Bistro (no. 390) y Oliva (no. 1325) están sobre Carranza — puedes hacer literalmente un recorrido de brunch en este tramo.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Lomas (1ra, 2da, 3ra, 4ta Sección)</h4>
<p class="text-gray-700">Zona residencial arbolada de clase media-alta al poniente del Centro. Epicentro de la escena de brunch de nueva ola — Cuatro Almas, Petit Bistro y varias cafeterías de especialidad. Ideal si rentas aquí o si buscas un brunch más tranquilo y menos turístico.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Chapultepec / Privadas del Pedregal</h4>
<p class="text-gray-700">El corredor de Av. Parque Chapultepec, que corre junto al Parque Tangamanga I. Aquí están Refugio Tierra, El Mesón de San Pascual y Fork Chapultepec (Torre Avancer, no. 1922). Ideal si quieres combinar el brunch con una caminata o una rodada en el parque por la mañana.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Villa Magna / Altamira / Colinas del Parque / Las Águilas</h4>
<p class="text-gray-700">El surponiente de la ciudad, residencial de desarrollo planeado con plazas comerciales más nuevas. Dos Amores Brunch &amp; Meal en Colinas del Parque y Fork Le Brunch Atelier en Olmos 145, Las Águilas 3ra Secc son las anclas, y van abriendo más conceptos conforme crece la zona.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Loma de los Filtros / Morales — Calle de las Gorditas de Morales</h4>
<p class="text-gray-700">La colonia original del brunch potosino. A un corto viaje en taxi del Centro, aquí es donde los locales realmente van a almorzar el fin de semana. No hay restaurantes sentados para reservar — sólo hay que caminar la calle, encontrar el puesto más lleno, sentarse en un banco de plástico y pedir gorditas hasta que ya no puedas más.</p>
</div>
<div class="bg-white border-2 border-gray-200 rounded-xl p-5">
<h4 class="text-xl font-bold text-gray-900 mb-2">Zona Industrial / Corredor de hoteles</h4>
<p class="text-gray-700">Menos vistoso pero donde viven los brunches de hotel del Hyatt Regency, Hilton y Real de Minas. Ideal si quieres un bufete predecible o vienes por trabajo.</p>
</div>
</div>
</section>

<section id="tips" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Consejos para Visitantes</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
<h4 class="font-bold text-blue-900 mb-2">Timing de Reservaciones</h4>
<p class="text-sm text-blue-900">El domingo de 11:00 AM a 1:00 PM es el pico. Reserva con 24 horas de anticipación por teléfono o WhatsApp en Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier, Dos Amores y Oliva. Llegar sin reserva está bien entre semana y los sábados antes de las 10 AM. Las Gorditas de Morales nunca aceptan reservaciones — sólo hay que presentarse.</p>
</div>
<div class="bg-green-50 border-2 border-green-200 rounded-xl p-5">
<h4 class="font-bold text-green-900 mb-2">Propinas</h4>
<p class="text-sm text-green-900">El 10% es estándar, 15% por servicio excelente. Revisa primero la cuenta — algunos lugares de alta gama cobran el servicio. Deja la propina en efectivo si puedes. Los puestos callejeros (Morales, Mercado República) no esperan propina pero agradecen que redondees.</p>
</div>
<div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
<h4 class="font-bold text-purple-900 mb-2">Pago</h4>
<p class="text-sm text-purple-900">Las tarjetas (Visa, Mastercard, Amex en la mayoría) se aceptan ampliamente en los restaurantes de brunch. Los puestos de mercado, los de gorditas en Morales y los lugares tradicionales pequeños son solo efectivo. Hay cajeros automáticos de sobra en Centro y Lomas.</p>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
<h4 class="font-bold text-amber-900 mb-2">Código de Vestimenta</h4>
<p class="text-sm text-amber-900">Casual elegante en la mayoría; las instituciones del Centro aceptan cualquier cosa que no sea ropa de playa. Los brunches de hotel piden business casual. Los puestos callejeros esperan ropa cómoda a la que no te importe que le caiga una gota de salsa.</p>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-xl p-5">
<h4 class="font-bold text-red-900 mb-2">Alergias (Frases Útiles)</h4>
<p class="text-sm text-red-900">"Soy alérgico/a a ___". Comunes: gluten, lactosa, huevo, nueces, mariscos. "Sin picante" para que no lleve chile. Los meseros potosinos suelen ser muy atentos con las alergias — avísales al pedir.</p>
</div>
<div class="bg-teal-50 border-2 border-teal-200 rounded-xl p-5">
<h4 class="font-bold text-teal-900 mb-2">Tamaño de Porciones</h4>
<p class="text-sm text-teal-900">Las porciones de brunch mexicano son grandes. Un plato de enchiladas potosinas trae típicamente de 4 a 6 piezas. Los platos de chilaquiles son tamaño cena. Pide un plato fuerte cada uno y una entrada para compartir. Las gorditas son más chicas — 3 o 4 por persona es buen punto de partida.</p>
</div>
</div>
</section>

<section id="budget" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Guía de Presupuesto: Brunch para Dos en SLP</h2>

<div class="overflow-x-auto mb-8">
<table class="min-w-full bg-white border border-gray-200 rounded-lg">
<thead style="background: linear-gradient(to right, #059669, #0284c7);"><tr>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">Nivel</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">MXN (2 pers.)</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">USD (2 pers.)</th>
<th class="px-6 py-3 text-left text-xs font-bold text-white uppercase">Ejemplos</th>
</tr></thead>
<tbody class="divide-y divide-gray-200">
<tr><td class="px-6 py-4 font-semibold text-green-700">Económico</td><td class="px-6 py-4">&lt;$300 MXN</td><td class="px-6 py-4">&lt;$17 USD</td><td class="px-6 py-4">Gorditas de Morales, puestos del Mercado República, pastelería y café en Hogaza, Café Corta'o</td></tr>
<tr class="bg-gray-50"><td class="px-6 py-4 font-semibold text-blue-700">Gama media</td><td class="px-6 py-4">$400–700 MXN</td><td class="px-6 py-4">$22–39 USD</td><td class="px-6 py-4">Cuatro Almas, Fork (todas las sucursales), Dos Amores, Refugio Tierra, Oliva, Tres60, Croque La Vie, El Mesón de San Pascual, La Parroquia</td></tr>
<tr><td class="px-6 py-4 font-semibold text-purple-700">Alta gama</td><td class="px-6 py-4">$800–1,400 MXN</td><td class="px-6 py-4">$45–78 USD</td><td class="px-6 py-4">Bufete del Hyatt Regency, bufete de brunch de Cielo Tinto, brunches largos en Oliva con maridaje de vinos</td></tr>
</tbody>
</table>
</div>

<p class="text-gray-700 mb-6">Como contexto: un brunch dominical comparable para dos en San Miguel de Allende suele costar $900–1,800 MXN (~$50–100 USD) en gama media, y hasta más de $2,500 MXN en lugares como Aperí o Jacinto 1930. La escena de brunch de SLP entrega calidad similar a más o menos la mitad del precio, sobre todo en Cuatro Almas, Refugio Tierra, Fork y Oliva. Revisa nuestra <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="text-blue-600 underline">comparativa completa de costo de vida</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas Frecuentes</h2>
<div class="space-y-6">

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿San Luis Potosí es una buena ciudad para desayunar y hacer brunch?</h3>
<p class="text-gray-700">Sí — San Luis Potosí está considerada como una de las mejores ciudades de México para desayunar. El desayuno se vive como un evento social más que como una comida rápida, y el patrimonio culinario de la ciudad (enchiladas potosinas, gorditas de Morales, asado de boda, cecina, café de olla) le da más opciones regionales de desayuno que a la mayoría de las ciudades mexicanas. La cultura moderna de brunch suma café de especialidad, menús de panadería artesanal y platillos internacionales sobre esa tradición.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Cuál es el mejor lugar de brunch en San Luis Potosí?</h3>
<p class="text-gray-700">Para la mayoría de los visitantes, <strong>Cuatro Almas</strong> en Lomas Cuarta Sección es la mejor opción — un restaurante de brunch especializado abierto de 8:00 AM a 2:00 PM con base leal de locales por sus chilaquiles al chipotle y sus eggs benedict. Para un brunch tradicional potosino, <strong>La Parroquia Potosina</strong> (Av. Venustiano Carranza 300) es la institución, sobre todo los fines de semana por su bufete de enchiladas potosinas. Para el OG del brunch potosino, ve a la <strong>Calle de las Gorditas de Morales</strong> — cualquier puesto con fila es garantía.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Dónde están las Gorditas de Morales en San Luis Potosí?</h3>
<p class="text-gray-700">La Calle de las Gorditas de Morales corre sobre el Camino a la Presa de San José, en el corredor de Loma de los Filtros / Morales — a un corto viaje en taxi del Centro Histórico, anclada históricamente por el tráfico de fin de semana hacia la Presa de San José. Es una calle con decenas de puestos de gorditas y loncherías. Las gorditas de Morales son el brunch potosino original — discos gruesos de masa de maíz asados al comal, abiertos por en medio y rellenos de guisos (chicharrón prensado, nopales, rajas con queso, picadillo, asado de boda). La regla que siguen los locales: <strong>cualquier puesto con fila es garantía</strong>. Sin reservaciones, solo efectivo, y la hora pico es de 9:30 AM a 1:00 PM.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Se necesitan reservaciones para hacer brunch en San Luis Potosí?</h3>
<p class="text-gray-700">Normalmente no entre semana, pero sí muy recomendadas sábado y domingo entre 11:00 AM y 1:30 PM, que es la hora pico del brunch en SLP. Lugares populares como Cuatro Almas, Refugio Tierra, Fork Le Brunch Atelier y Dos Amores se llenan rápido — espera de 30 a 60 minutos sin reservación. Llama directo al restaurante o manda un WhatsApp un día antes.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿A dónde van los locales a hacer brunch los domingos en San Luis Potosí?</h3>
<p class="text-gray-700">Los locales prefieren cuatro zonas: <strong>Lomas / Chapultepec</strong> (Cuatro Almas, Refugio Tierra, El Mesón de San Pascual, Fork Chapultepec), <strong>Centro</strong> (La Parroquia Potosina, Oliva sobre Carranza, Tres60 Bistro, Fork Centro, Croque La Vie), <strong>Colinas del Parque</strong> (Dos Amores) y <strong>Las Águilas 3ra Secc</strong> (Fork Le Brunch Atelier en Olmos 145). Para la experiencia potosina más auténtica, los locales van a la <strong>Calle de las Gorditas de Morales</strong>.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Fork tiene más de una sucursal en San Luis Potosí?</h3>
<p class="text-gray-700">Sí — Fork opera tres sucursales en SLP. <strong>Fork Centro</strong> en Galeana 443, en el centro histórico; <strong>Fork Chapultepec</strong> dentro de Torre Avancer, en Av. Parque Chapultepec 1922; y <strong>Fork Le Brunch Atelier</strong> en Olmos 145, Las Águilas 3ra Secc, que es el concepto dedicado al brunch. Reservaciones: Fork Centro / Chapultepec al +52 444 481 1996; Fork Le Brunch Atelier al +52 444 817 0705.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿El brunch es una tradición mexicana?</h3>
<p class="text-gray-700">El brunch como nombre es importado, pero el concepto de una comida a media mañana de fin de semana es profundamente mexicano — el <em>almuerzo</em>, que se come típicamente entre las 10 AM y la 1 PM, combina lo que en inglés se separa entre desayuno y comida. En San Luis Potosí específicamente, el desayuno es pilar de la cultura de fin de semana: las familias se reúnen por gorditas de Morales, enchiladas potosinas y café de olla. La cultura moderna de brunch en SLP fusiona esta tradición con añadidos internacionales como eggs benedict, avocado toast, hot cakes y mimosas.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Cuánto cuesta el brunch en San Luis Potosí?</h3>
<p class="text-gray-700">Un brunch económico para dos personas va de 200 a 350 MXN (~$11–20 USD) en los puestos de gorditas de la Calle de Morales o en cafés de barrio. Lugares de gama media como Cuatro Almas, Tres60, Oliva, Fork, Hogaza o Dos Amores promedian entre 400 y 700 MXN (~$22–39 USD) por dos personas con bebidas. Los brunches de hotel de alta gama (Hyatt Regency, Hilton) y restaurantes de autor rondan los 800–1,400 MXN (~$45–78 USD) para dos.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Qué restaurantes sirven brunch mexicano y cuáles brunch internacional en SLP?</h3>
<p class="text-gray-700">Para brunch mexicano auténtico: <strong>La Parroquia Potosina, El Mesón de San Pascual, las Gorditas de Morales y los puestos del Mercado República</strong>. Para brunch internacional / moderno: <strong>Cuatro Almas, Refugio Tierra, Dos Amores y Croque La Vie</strong> (francés). Para fusión que mezcla ambos: <strong>Fork, Oliva, Hogaza y Tres60 Bistro</strong> sirven chilaquiles junto a eggs benedict, croque madame, omelettes y avocado toast.</p>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-6">
<h3 class="text-xl font-bold mb-3 text-gray-900">¿Los lugares de brunch en SLP tienen opciones veganas o vegetarianas?</h3>
<p class="text-gray-700">Sí. <strong>Refugio Tierra</strong> ofrece menús vegano, vegetariano y sin gluten, y es el mejor lugar de brunch para vegetarianos en la ciudad. Hogaza, Oliva, Cuatro Almas y Fork tienen opciones vegetarianas con platos como chilaquiles verdes, avocado toast, bowls de açaí y bowls de base vegetal. Pide "sin carne" o "vegano" al ordenar.</p>
</div>

</div>
</section>

<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-blue-900">Sigue Explorando San Luis Potosí</h3>
<p class="text-blue-800 mb-3">Guías relacionadas en sanluisway.com:</p>
<ul class="space-y-2 text-blue-800">
<li>→ <a href="/breakfast-spots-san-luis-potosi" class="underline font-medium">Lugares de Desayuno Temprano en San Luis Potosí (antes de las 9 AM)</a></li>
<li>→ <a href="/traditional-cuisine" class="underline font-medium">Guía de Cocina Tradicional Potosina</a></li>
<li>→ <a href="/restaurants" class="underline font-medium">Directorio Completo de Restaurantes de SLP</a></li>
<li>→ <a href="/cultural/culinary-traditions" class="underline font-medium">Tradiciones Culinarias de San Luis Potosí</a></li>
<li>→ <a href="/resources/expat-guide" class="underline font-medium">Guía para Expats en San Luis Potosí</a></li>
</ul>
</div>

<div class="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-orange-900">¿Listo para el Brunch?</h3>
<p class="text-orange-800 mb-3"><strong>San Luis Way es tu guía local completa de los mejores lugares de brunch en San Luis Potosí.</strong> Guarda esta guía, reserva con tiempo para el domingo, y empieza por unas enchiladas potosinas — o sáltate directo a la calle de Morales. Tu mimosa (o tu café de olla) te está esperando.</p>
<p class="text-orange-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Ver más guías de comida de SLP →</a></p>
</div>

<script type="application/ld+json">${faqJsonLdES}</script>

</div>`;

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: HERO,
  category: 'Food & Drink',
  tags: ['brunch', 'restaurants', 'san-luis-potosi', 'food', 'weekend', 'breakfast', 'desayuno', 'mexican-food', 'enchiladas-potosinas', 'gorditas-de-morales', 'chilaquiles', 'expats'],

  title: 'Best Brunch Spots Near Me in San Luis Potosí (2026): 10 Top Picks + Gorditas de Morales',
  excerpt: 'A verified 2026 guide to the 10 best brunch spots in San Luis Potosí — from Cuatro Almas and Fork to La Parroquia Potosina, Hogaza, and Oliva. Plus the OG of Potosino brunch: Gorditas de Morales.',
  content: contentEN,
  meta_title: 'Best Brunch Spots Near Me | San Luis Potosí 2026',
  meta_description: 'The 10 best brunch spots in SLP for 2026 plus the OG Gorditas de Morales. Verified addresses, hours, signature dishes, prices 200–1,400 MXN. Book ahead for Sunday.',

  title_es: 'Mejores Lugares de Brunch en San Luis Potosí (2026): 10 Favoritos + Gorditas de Morales',
  excerpt_es: 'Guía verificada 2026 de los 10 mejores lugares de brunch en San Luis Potosí — desde Cuatro Almas y Fork hasta La Parroquia Potosina, Hogaza y Oliva. Incluye el OG del brunch potosino: Gorditas de Morales.',
  content_es: contentES,
  meta_title_es: 'Mejores Brunch Cerca de Mí | San Luis Potosí 2026',
  meta_description_es: 'Los 10 mejores lugares de brunch en SLP 2026 más el OG Gorditas de Morales. Direcciones verificadas, horarios, platillos estrella y precios de 200 a 1,400 MXN.',

  title_de: 'Beste Brunch-Spots in San Luis Potosí (2026): Top 10 + Gorditas de Morales',
  excerpt_de: 'Verifizierter 2026-Guide zu den 10 besten Brunch-Spots in San Luis Potosí — von Cuatro Almas und Fork bis La Parroquia Potosina, Hogaza und Oliva. Plus Gorditas de Morales, der OG des Potosino-Brunchs.',
  content_de: contentEN,
  meta_title_de: 'Beste Brunch-Spots | San Luis Potosí 2026',
  meta_description_de: 'Die 10 besten Brunch-Spots in SLP 2026 plus Gorditas de Morales — verifizierte Adressen, Öffnungszeiten und Preise von 200 bis 1.400 MXN.',

  title_ja: 'サン・ルイス・ポトシのベスト・ブランチ・スポット10選（2026年）＋ゴルディータス・デ・モラレス',
  excerpt_ja: 'サン・ルイス・ポトシのベスト・ブランチ・スポット10選 2026年版 — Cuatro Almas、Fork、La Parroquia Potosina、Hogaza、Olivaなど。ポトシーノ・ブランチの元祖ゴルディータス・デ・モラレスも紹介。',
  content_ja: contentEN,
  meta_title_ja: 'ベスト・ブランチ | サン・ルイス・ポトシ 2026',
  meta_description_ja: 'サン・ルイス・ポトシの2026年ベスト・ブランチ10選＋元祖ゴルディータス・デ・モラレス。検証済み住所、営業時間、価格200〜1,400 MXN。',
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
