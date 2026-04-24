require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'best-parks-for-kids-san-luis-potosi';

const IMG = {
  hero: '/images/parque-tangamanga/banner.jpg',
  biodiversity: '/images/parque-tangamanga/biodiversity.jpg',
  family: '/images/parque-tangamanga/activities-family.jpg',
  lake: '/images/parque-tangamanga/lake.jpg',
  sports: '/images/parque-tangamanga/sports.jpg',
};

const faqJsonLdES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor parque en San Luis Potosí para niños pequeños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Parque Tangamanga I cuenta con una Zona Kids con juegos infantiles adecuados para niños desde los dos años, además del parque temático "Cri-Cri". El terreno es plano, apto para carriolas y con áreas sombreadas. Si buscas una opción más tranquila y con menos gente, la Alameda Juan Sarabia en el Centro Histórico está cercada, es caminable y está rodeada de cafés.'
      }
    },
    {
      '@type': 'Question',
      name: '¿La entrada al Parque Tangamanga es gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La entrada general al Parque Tangamanga I y II es gratuita. El zoológico, el jardín botánico, el jardín japonés, el Laberinto de las Ciencias (dentro del parque) y las áreas principales de juegos infantiles también son gratis. El Planetario y el parque acuático Splash/Dinoasis cobran tarifas aparte (normalmente $20–50 MXN para el planetario y alrededor de $200 MXN por niño en Dinoasis).'
      }
    },
    {
      '@type': 'Question',
      name: '¿A qué hora abre el Parque Tangamanga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Parque Tangamanga I abre todos los días a las 5:00 AM. Los horarios de cierre varían: los lunes cierra temprano a las 11:00 AM por mantenimiento, de martes a sábado permanece abierto hasta las 10:30 PM (último acceso 9:30 PM) y los domingos cierra a las 6:00 PM (último acceso 5:30 PM). El zoológico dentro del parque opera de martes a domingo, de 10:00 AM a 5:00 PM.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Dónde pueden nadar los niños en San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dentro de la ciudad, el parque acuático Dinoasis (antes Splash) en Tangamanga I es la opción principal, con alberca de olas, toboganes para niños y chapoteaderos poco profundos. Para una experiencia más tradicional de balneario, el Parque Acuático Gogorrón (a 45 minutos al sur de SLP) ofrece albercas de agua termal, tres toboganes y chapoteaderos diseñados para niños pequeños.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las mejores actividades techadas para niños en San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Museo Laberinto de las Ciencias y las Artes es la mejor opción: un museo interactivo de ciencia y arte con cine 3D, exhibiciones prácticas de física y biología, con entrada de alrededor de $50 MXN adultos, $40 MXN niños de 4–5 años y gratis para menores de 3. El Planetario del Parque Tangamanga I también es excelente para tardes lluviosas o calurosas. Otras opciones techadas incluyen Kidiverso (brincolines y albercas de pelotas) y Stardust Park (brinca-brinca con temática espacial).'
      }
    },
    {
      '@type': 'Question',
      name: '¿Hay parques con chapoteaderos en SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El parque acuático Dinoasis/Splash dentro del Parque Tangamanga I es la principal instalación de chapoteaderos y juegos de agua dentro de la ciudad. Cuenta con fuentes a la altura de bebés y niños pequeños, albercas poco profundas y toboganes especiales para niños. La operación es de temporada, típicamente desde Semana Santa hasta principios de otoño. Para juegos con agua gratis, algunas plazas municipales (incluyendo la zona de Plaza de Armas durante eventos de verano) ocasionalmente instalan zonas de fuentes temporales para familias.'
      }
    },
    {
      '@type': 'Question',
      name: '¿San Luis Potosí es seguro para familias con niños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La capital de San Luis Potosí se considera una de las capitales estatales más seguras del centro de México. Tangamanga I y II, la Alameda Juan Sarabia y el Centro Histórico tienen una fuerte presencia de policía municipal durante el día y son cómodos para familias. Aplican las precauciones estándar: mantente en los caminos principales, guarda objetos de valor fuera de la vista y evita zonas aisladas después del anochecer.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el estacionamiento en el Parque Tangamanga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hay varios estacionamientos gratuitos alrededor del perímetro de Tangamanga I (de la Puerta 1 a la Puerta 8) y de Tangamanga II. Los lugares se asignan por orden de llegada y se llenan rápido los domingos por la mañana. Llega antes de las 9:00 AM o después de las 4:00 PM los fines de semana para la experiencia más sencilla.'
      }
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which park in San Luis Potosí is best for toddlers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parque Tangamanga I has a dedicated kids zone (Zona Kids) with age-appropriate playground equipment for children as young as two, plus the thematic "Cri-Cri" children\'s park. The terrain is flat, stroller-friendly, and shaded. For a quieter option with fewer crowds, the Alameda Juan Sarabia in the historic center is fenced, walkable and surrounded by cafes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Parque Tangamanga free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. General admission to Parque Tangamanga I and II is free. The zoo, botanical garden, Japanese garden, Laberinto de las Ciencias (inside the park) and main playground areas are also free. The Planetarium and the Splash/Dinoasis water park charge separate fees (typically $20–50 MXN for the planetarium and around $200 MXN for children at Dinoasis).'
      }
    },
    {
      '@type': 'Question',
      name: 'What time does Parque Tangamanga open?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parque Tangamanga I opens every day at 5:00 AM. Closing times vary: Mondays close early at 11:00 AM for maintenance, Tuesday through Saturday it stays open until 10:30 PM (last entry 9:30 PM), and Sunday closes at 6:00 PM (last entry 5:30 PM). The zoo inside the park runs Tuesday to Sunday, 10:00 AM to 5:00 PM.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can kids swim in San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inside the city, the Dinoasis water park (formerly Splash) at Tangamanga I is the main option, with wave pools, children\'s slides and shallow splash areas. For a more traditional balneario experience, Parque Acuático Gogorrón (45 min south of SLP) offers thermal-water pools, three slides and shallow chapoteaderos designed for small children.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the best indoor kids activities in San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Museo Laberinto de las Ciencias y las Artes is the top pick — a fully interactive science and arts museum with a 3D theater, hands-on physics and biology exhibits, and an entry fee around $50 MXN for adults, $40 MXN for kids 4-5, and free under 3. The Planetario del Parque Tangamanga I is also excellent for rainy or hot afternoons. Indoor play options include Kidiverso (trampolines and ball pits) and Stardust Park (space-themed brincolines).'
      }
    },
    {
      '@type': 'Question',
      name: 'Are there parks with splash pads in SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Dinoasis/Splash water park inside Parque Tangamanga I is the main splash-pad and water-play facility within city limits. It features dedicated toddler-height fountains, shallow pools and kid-specific slides. Seasonal operation typically runs Semana Santa through early fall. For free water play, some municipal plazas (including the Plaza de Armas area during summer events) occasionally set up temporary fountain zones for families.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is San Luis Potosí safe for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí capital is considered one of the safer state capitals in central Mexico. Tangamanga I and II, Alameda Juan Sarabia and the Centro Histórico have a strong municipal police presence during the day and are comfortable for families. Standard precautions apply: stay on the main paths, keep valuables out of sight, and avoid isolated zones after dark.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does parking cost at Parque Tangamanga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiple free parking lots are available around the perimeter of Tangamanga I (Puerta 1 through Puerta 8) and Tangamanga II. Parking is first-come, first-served and fills up quickly on Sunday mornings. Arrive before 9:00 AM or after 4:00 PM on weekends for the easiest experience.'
      }
    }
  ]
};

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${IMG.hero}" alt="Best parks for kids in San Luis Potosí — Parque Tangamanga family guide" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-8">
  <div class="flex items-start gap-3">
    <div class="text-2xl" aria-hidden="true">✅</div>
    <div class="flex-1">
      <div class="text-xs font-bold uppercase tracking-wide text-blue-700 mb-1">Independently Fact-Checked</div>
      <p class="text-base font-bold text-gray-900 mb-1">Every park, hour, fee, and ranking in this guide was verified on April 24, 2026.</p>
      <p class="text-sm text-gray-700">Read the full <a href="/blog/factchecks/best-parks-for-kids-san-luis-potosi" class="text-blue-700 hover:text-blue-900 underline font-semibold">verification report</a> with sources, evidence chains, and the corrections we made before publishing.</p>
    </div>
  </div>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Why SLP is Great for Kids</a></li>
    <li><a href="#quick-picks" class="text-blue-600 hover:text-blue-800">Quick-Pick Table: Top 8 Parks</a></li>
    <li><a href="#tangamanga" class="text-blue-600 hover:text-blue-800">Parque Tangamanga I and II: Full Guide</a></li>
    <li><a href="#other-parks" class="text-blue-600 hover:text-blue-800">Other Parks Worth Visiting</a></li>
    <li><a href="#water-play" class="text-blue-600 hover:text-blue-800">Splash Pads and Water Play</a></li>
    <li><a href="#indoor" class="text-blue-600 hover:text-blue-800">Indoor Spaces for Hot or Rainy Days</a></li>
    <li><a href="#by-age" class="text-blue-600 hover:text-blue-800">Age-by-Age Recommendations</a></li>
    <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Practical Tips: Altitude, Shade, Strollers</a></li>
    <li><a href="#free-vs-paid" class="text-blue-600 hover:text-blue-800">Free vs. Paid Comparison</a></li>
    <li><a href="#safety" class="text-blue-600 hover:text-blue-800">Safety and Parent Reviews</a></li>
    <li><a href="#getting-there" class="text-blue-600 hover:text-blue-800">How to Get There</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">FAQ</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Key Takeaways</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Best overall:</strong> Parque Tangamanga I — 411 hectares, free entry, zoo, playgrounds, lake, and a dedicated Zona Kids for ages 2–12.</li>
    <li><strong>Best for toddlers:</strong> Alameda Juan Sarabia in the historic center — shaded, flat, fenced, stroller-friendly.</li>
    <li><strong>Best for active kids:</strong> Parque Tangamanga II — less crowded, wide bike paths, sports courts.</li>
    <li><strong>Best rainy-day indoor pick:</strong> Museo Laberinto de las Ciencias y las Artes — interactive, 3D theater, $50 MXN adults.</li>
    <li><strong>Best for swimming:</strong> Dinoasis (formerly Splash) inside Tangamanga I — wave pool and toddler zones.</li>
    <li><strong>Bottom line:</strong> San Luis Potosí has more free, high-quality family green space per capita than any other Bajío city — and nearly everything is walkable or a short Uber from the center.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Why San Luis Potosí is Great for Kids</h2>

<p class="text-gray-700 mb-6"><strong>If you are searching "best parks for kids near me" and you live in or are visiting San Luis Potosí (SLP), you are in one of the luckiest family cities in central Mexico.</strong> The capital sits at 1,863 m (6,112 ft) above sea level, which means spring-like weather year-round, low mosquito counts, and long outdoor days. More importantly, SLP has invested heavily in urban green space: <strong>Parque Tangamanga I alone is 411 hectares</strong> — significantly bigger than New York's Central Park (340 ha). It is officially ranked as Mexico's second-largest urban park after Bosque de Chapultepec in CDMX (866 ha). Here's the nuance locals often point out: <em>Chapultepec is technically classified as a bosque (forest), not a park</em>, which — if you only count urban spaces that are officially parks — arguably makes Tangamanga the largest urban park in the country.</p>

<p class="text-gray-700 mb-6">This guide covers every park where kids can actually play safely: the giant flagships (Tangamanga I and II), the historic plazas with playgrounds, the water-play options, and the indoor backups for the handful of rainy or 30°C afternoons. We verified hours, entry fees and amenities in April 2026, and flagged anything that may change.</p>

<p class="text-gray-700 mb-6">For a broader look at things to do with kids beyond parks, see our main <a href="/family-friendly-activities" class="text-blue-600 underline font-medium">family-friendly activities in SLP</a> guide and the <a href="/resources/family-guide" class="text-blue-600 underline font-medium">expat family guide</a>.</p>
</section>

<section id="quick-picks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Quick-Pick Table: Top 8 Parks for Kids in San Luis Potosí</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #059669, #0d9488);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Park</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Best for Age</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Hours</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Cost</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Standout Feature</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Parque Tangamanga I</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Tue–Sat 5am–10:30pm; Sun 5am–6pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Zoo, lake, Zona Kids, planetarium</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Tangamanga II</td><td class="px-4 py-3 text-center">5–14</td><td class="px-4 py-3 text-center">Tue–Sun 6am–8pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Bike paths, sports courts, less crowded</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda Juan Sarabia</td><td class="px-4 py-3 text-center">0–6</td><td class="px-4 py-3 text-center">Open 24/7</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Historic, shaded, stroller-perfect</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Juan H. Sánchez (Morales)</td><td class="px-4 py-3 text-center">4–10</td><td class="px-4 py-3 text-center">6am–10pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">100-yr-old shade trees, under renovation</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Parque Bicentenario</td><td class="px-4 py-3 text-center">4–12</td><td class="px-4 py-3 text-center">Tue–Sun 6am–6pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Playground, 33 tree species, industrial sculptures</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Dinoasis (Splash) water park</td><td class="px-4 py-3 text-center">3–14</td><td class="px-4 py-3 text-center">Seasonal 10am–6pm</td><td class="px-4 py-3 text-center">~$200 MXN kids</td><td class="px-4 py-3">Wave pool + toddler splash zone</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Museo Laberinto (indoor)</td><td class="px-4 py-3 text-center">4–14</td><td class="px-4 py-3 text-center">Tue–Fri 9–16; Sat–Sun 11–19</td><td class="px-4 py-3 text-center">$50 MXN adult / $40 child</td><td class="px-4 py-3">Hands-on science + 3D theater</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso (indoor)</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Daily 10am–9pm</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3">Trampolines, ball pit, party venue</td></tr>
    </tbody>
  </table>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
<p class="text-yellow-800"><strong>Verification note:</strong> Hours and prices confirmed in April 2026 via the municipal government of San Luis Potosí and the official Museo Laberinto site. The 2026 Tangamanga fee update only affects sports-facility rentals (soccer/basketball court rental $170 MXN / 2 hrs; high-performance gym $470 MXN/month). Park entry remains free.</p>
</div>
</section>

<section id="tangamanga" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Parque Tangamanga I and II: The Deep Dive</h2>

<div class="mb-8">
<img src="${IMG.family}" alt="Families enjoying Parque Tangamanga I in San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Tangamanga I — The Flagship</h3>

<p class="text-gray-700 mb-6"><strong>Parque Tangamanga I covers 411 hectares (1,016 acres) in the southwestern part of the city.</strong> Officially it's the second-largest urban park in Mexico behind Bosque de Chapultepec (866 ha) in CDMX — but since Chapultepec is classified as a <em>bosque</em> (forest) rather than a park, a growing number of sources argue Tangamanga is actually the largest true urban park in Mexico. Either way, it dwarfs New York's Central Park (340 ha). The park combines a free zoo, a planetarium, a seasonal water park, an interactive science museum, a lake, a Japanese garden, a botanical garden, an amphitheater, 14 kilometers of jogging and biking paths, and — most importantly for families — dedicated children's zones with modern equipment.</p>

<p class="text-gray-700 mb-6"><strong>The "Zona Kids"</strong> is a recently expanded area with age-graded playground equipment suitable for children from 2 to roughly 12 years old. Surfaces are shock-absorbing rubber, equipment is shaded in most sections, and benches are spaced around the perimeter for parents. Adjacent to Zona Kids is the thematic <strong>Parque Cri-Cri</strong> — a charming zone designed around characters from Francisco Gabilondo Soler's children's songs, much loved by Mexican kids.</p>

<h4 class="text-xl font-bold mb-3 text-gray-900">Hours (confirmed April 2026)</h4>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Monday:</strong> 5:00 AM – 11:00 AM (maintenance; last entry 10:30 AM)</li>
  <li><strong>Tuesday–Saturday:</strong> 5:00 AM – 10:30 PM (last entry 9:30 PM)</li>
  <li><strong>Sunday:</strong> 5:00 AM – 6:00 PM (last entry 5:30 PM)</li>
  <li><strong>Zoo:</strong> Tuesday–Sunday, 9:00 AM – 5:00 PM (closed Mondays)</li>
</ul>

<h4 class="text-xl font-bold mb-3 text-gray-900">Entrance costs</h4>
<p class="text-gray-700 mb-4">General entry to the park, zoo, botanical garden, Japanese garden and the Zona Kids playgrounds is <strong>free of charge</strong>. The Museo Laberinto de las Ciencias y las Artes (located inside the park grounds) charges a separate $50 MXN general admission. Paid attractions inside the park:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Planetarium:</strong> typically $20–50 MXN per person</li>
  <li><strong>Dinoasis water park</strong> (formerly Splash): approximately $200 MXN per child (seasonal — usually Semana Santa through early fall)</li>
  <li><strong>Bike rental:</strong> around $40–80 MXN per hour depending on size and helmet package</li>
  <li><strong>Sports court rental (2026 update):</strong> $170 MXN / 2 hrs for soccer, basketball and volleyball courts</li>
</ul>

<div class="mb-8">
<img src="${IMG.lake}" alt="Lake at Parque Tangamanga I — a peaceful family picnic spot" class="w-full rounded-xl shadow-lg" />
</div>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>Heads-up (2026 update):</strong> Paddle-boat rentals at the Tangamanga I lake are not advertised on the official 2026 fee schedule — verify availability at the kiosk on arrival before promising the kids a boat ride. The lake is still a lovely shaded picnic spot and excellent for a stroll around the perimeter. If your kids want guaranteed time on the water, head to Presa San José for guided stand-up paddle sessions.</p>
</div>

<h4 class="text-xl font-bold mb-3 text-gray-900">What to do with kids at Tangamanga I</h4>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Start at Puerta 1 or 7</strong> (main entrances) — these are closest to the playground and zoo.</li>
  <li><strong>Visit the zoo early.</strong> Animals are most active 10–11 AM before the afternoon heat.</li>
  <li><strong>Picnic by the lake</strong> — shaded tables along the perimeter; check on-site whether paddle boats are running before promising a ride, but the lake walk is one of the prettiest spots in the park either way.</li>
  <li><strong>Walk or bike to the Japanese Garden</strong> — quiet, shaded, free, great for a picnic.</li>
  <li><strong>Hit the Zona Kids playground</strong> after lunch when it's partially shaded.</li>
  <li><strong>End with ice cream from the kiosks</strong> near the amphitheater.</li>
</ol>

<p class="text-gray-700 mb-6">For a full dedicated guide, see our <a href="/parque-tangamanga" class="text-blue-600 underline font-medium">Parque Tangamanga complete guide</a>.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900 mt-8">Parque Tangamanga II — The Quieter Sibling</h3>

<p class="text-gray-700 mb-6">Parque Tangamanga II is about one-third the size of Tangamanga I, located in the northeast of the city, and significantly less crowded — especially on weekends. It is ideal for families who want wide open lawns, dedicated bike paths without pedestrian traffic, basketball and soccer courts, and quieter playgrounds. Hours are typically Tuesday–Sunday 6:00 AM – 8:00 PM (closed Mondays for maintenance). Entry is free.</p>

<p class="text-gray-700 mb-6"><strong>Parents of older kids (8+) often prefer Tangamanga II</strong> because the bike paths are smoother, more continuous, and less obstructed by pedestrians. Bring your own bikes; rental service is limited compared with Tangamanga I.</p>
</section>

<section id="other-parks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Other Parks in San Luis Potosí Worth a Visit</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Alameda Juan Sarabia</h3>
<p class="text-gray-700 mb-6"><strong>Location:</strong> Eastern edge of Centro Histórico, next to the former railway station. <strong>Hours:</strong> Open 24/7 (best during daylight). <strong>Cost:</strong> Free. The Alameda was originally the orchard of the Carmen convent before being converted into a public park after the 1850s Reforma laws, and officially named in 1932 after liberal journalist Juan Sarabia Díaz de León. Today it offers more than 4 hectares of flat, shaded walkways, a central fountain, a seasonal pop-up playground, and frequent cultural events. It is by far the best option for parents with babies and toddlers who want a short outing from downtown hotels or the Centro — you can walk to the Plaza de Armas or Catedral in 10 minutes.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Juan H. Sánchez (Parque de Morales)</h3>
<p class="text-gray-700 mb-6"><strong>Location:</strong> Colonia Himno Nacional, between Av. Venustiano Carranza and Paseo de los Artistas. <strong>Size:</strong> ~13–15 hectares (per El Universal SLP and Líder Empresarial). <strong>Hours:</strong> 6:00 AM – 10:00 PM. <strong>Cost:</strong> Free. Known affectionately as "Parque de Morales," this 100-year-old park (founded May 19, 1924) is a potosino institution with an artificial lake created in 1968, over 120 identified animal species, and a famous rocket-shaped slide ("El Cohete") that defined childhoods for generations. A ~100-million-peso state rehabilitation project that started May 2024 is currently renovating the lake, playground and pet areas — parts of the park may be fenced off in 2026, so check before heading over. The shade is unmatched: huge pine, eucalyptus and cedar trees.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Bicentenario</h3>
<p class="text-gray-700 mb-6"><strong>Location:</strong> Anillo Periférico, over the former IMMSA industrial site (~5.8 km from Centro). <strong>Hours:</strong> Tuesday–Sunday 6:00 AM – 6:00 PM (closed Mondays). <strong>Cost:</strong> Free. Opened during Mexico's 2010 Bicentennial celebrations, Parque Bicentenario is one of the most interesting reclaimed-industrial green spaces in the country — a former copper foundry turned public park, now home to 33 species of trees, a network of jogging and walking paths, an outdoor gym, covered picnic areas, and a dedicated <strong>children's playground with juegos infantiles</strong> that's especially popular on Sunday mornings. Fifteen industrial sculptures preserved from the original IMMSA plant dot the grounds — kids love climbing near them and parents love the photo opportunities. Free parking on-site; public transit via Ruta 02, 04, 09, or 34.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Plaza de los Fundadores and Plaza de Armas</h3>
<p class="text-gray-700 mb-6">Not parks in the traditional sense, but the two main historic plazas are excellent for toddlers who want to chase pigeons, ride the small municipal carousel (when it's set up for festivals), and eat raspados (shaved ice). Both are free, surrounded by cafes with bathrooms, and central to family walking tours of the cantera-stone historic center — a UNESCO Camino Real de Tierra Adentro site.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Jardín de San Juan de Dios</h3>
<p class="text-gray-700 mb-6">Small, tucked inside the Centro Histórico near the church of the same name. Shaded benches, old trees, perfect for a 30-minute break during a family walking tour. No playground but very safe and very Mexican.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parks in Lomas, Villa Magna and Industrias</h3>
<p class="text-gray-700 mb-6">The newer residential zones in the south and southwest of the city include several HOA-style neighborhood parks that are quiet, well-kept and open to visitors. <strong>Parque Lomas 4ta Sección</strong> and the green spaces along Av. Palma de la Cruz have basic playgrounds and lawns. These are ideal if you are staying in an Airbnb in those neighborhoods and want a 15-minute playground stop. For upscale indoor play, the anchor malls in these zones (Plaza Sendero, Altaria, El Dorado) have climate-controlled play areas — useful on the hottest days.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Lineal Providencia (Soledad de Graciano Sánchez)</h3>
<p class="text-gray-700 mb-6">Inaugurated in 2025 in the neighboring municipality of Soledad as part of a ~120-million-peso metropolitan green-space expansion. Modern playgrounds, walking and bike paths, and wide lawns. Worth the 20-minute drive from the center if you are staying nearby. Soledad's other 2025 inaugurations — Parque Bugambilias, Quinta Soledad, Villas del Sol and Villas de Soledad — give the metro area more open green-space than at any point in the last decade.</p>
</section>

<section id="water-play" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Splash Pads and Water Play in San Luis Potosí</h2>

<div class="mb-8">
<img src="${IMG.biodiversity}" alt="Water play and biodiversity at Tangamanga" class="w-full rounded-xl shadow-lg" />
</div>

<p class="text-gray-700 mb-6">Summer afternoons in SLP can reach 30–32°C (86–90°F) — hot, but dry. Water play is essential from April through September:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Dinoasis (formerly Splash), Parque Tangamanga I:</strong> The main in-city water park. Wave pool, toddler splash pad with small slides, medium-thrill slides for ages 6+, and a lazy river. Typically ~$200 MXN per child. Season runs Semana Santa through early fall; check official channels before visiting.</li>
  <li><strong>Parque Acuático Gogorrón (45 min south):</strong> Thermal-water balneario with multiple pool depths, three slides, two water tubes, and shallow chapoteaderos designed specifically for small children. A classic family day trip.</li>
  <li><strong>Balneario Lourdes and Ojo Caliente:</strong> Traditional hot-spring pools, great for cool mornings. Not as family-polished as Gogorrón but cheaper.</li>
  <li><strong>Seasonal fountains in Plaza de Armas:</strong> During summer municipal events, temporary splash features are sometimes set up. Free. Not reliable but a pleasant surprise.</li>
</ul>

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
<p class="text-blue-800"><strong>Day-trip upgrade:</strong> For a weekend adventure, the <strong>Huasteca Potosina</strong> (4 hours east) offers turquoise rivers, natural waterfalls and swimming holes — the best natural water playground in Mexico. See the <a href="/events/all" class="underline font-medium">events calendar</a> for guided family trips.</p>
</div>
</section>

<section id="indoor" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Indoor Kid Spaces for Rainy or Very Hot Days</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Venue</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Hours</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Best Age</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">Interactive science + 3D theater</td><td class="px-4 py-3 text-center">Tue–Fri 9–16; Sat–Sun 11–19</td><td class="px-4 py-3 text-center">$50 adult / $40 child</td><td class="px-4 py-3 text-center">4–14</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetario Tangamanga I</td><td class="px-4 py-3">Astronomy dome projections</td><td class="px-4 py-3 text-center">Tue–Sun, session schedule</td><td class="px-4 py-3 text-center">$20–50 MXN</td><td class="px-4 py-3 text-center">5–14</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso</td><td class="px-4 py-3">Trampolines, ball pits, inflatables</td><td class="px-4 py-3 text-center">Daily 10–21</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3 text-center">2–12</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Stardust Park</td><td class="px-4 py-3">Space-themed indoor playground</td><td class="px-4 py-3 text-center">Daily 11–20</td><td class="px-4 py-3 text-center">~$150 MXN</td><td class="px-4 py-3 text-center">2–10</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Plaza Sendero play area</td><td class="px-4 py-3">Mall indoor playground</td><td class="px-4 py-3 text-center">Mall hours</td><td class="px-4 py-3 text-center">Often free</td><td class="px-4 py-3 text-center">2–8</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Altaria and El Dorado malls</td><td class="px-4 py-3">Cinema + play zones</td><td class="px-4 py-3 text-center">Daily 11–21</td><td class="px-4 py-3 text-center">Varies</td><td class="px-4 py-3 text-center">All ages</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Top indoor pick: Museo Laberinto de las Ciencias y las Artes.</strong> Located on Boulevard Antonio Rocha Cordero in Colonia Tierra Blanca, this is one of the best interactive children's science museums in central Mexico. Hands-on exhibits across physics, biology, chemistry and robotics, plus a 3D cinema — the entry fee includes everything. Children under 3 are free.</p>
</section>

<section id="by-age" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Age-by-Age Recommendations</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-pink-900 mb-3">Toddlers (0–3)</h3>
    <ul class="space-y-2 text-pink-800 text-sm">
      <li>• <strong>Alameda Juan Sarabia</strong> — flat, shaded, stroller-perfect</li>
      <li>• <strong>Parque Tangamanga I — Cri-Cri area</strong> — soft surfaces, baby-scale equipment</li>
      <li>• <strong>Plaza de los Fundadores</strong> — chase pigeons, eat raspados</li>
      <li>• Avoid: Parque Morales (some equipment still closed)</li>
    </ul>
  </div>
  <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-yellow-900 mb-3">Preschool (3–5)</h3>
    <ul class="space-y-2 text-yellow-800 text-sm">
      <li>• <strong>Tangamanga I Zona Kids</strong> — the full range of slides and climbing frames</li>
      <li>• <strong>Zoológico de Tangamanga</strong> — free and absolutely captivating at this age</li>
      <li>• <strong>Museo Laberinto</strong> — 3D movie is a big hit</li>
      <li>• <strong>Parque Bicentenario</strong> — playground + industrial sculptures, safe and shaded</li>
    </ul>
  </div>
  <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-green-900 mb-3">Elementary (6–10)</h3>
    <ul class="space-y-2 text-green-800 text-sm">
      <li>• <strong>Bike rental at Tangamanga I</strong> — 14 km of paths to explore</li>
      <li>• <strong>Tangamanga II</strong> — better for longer bike rides</li>
      <li>• <strong>Dinoasis water park</strong> — medium slides, wave pool</li>
      <li>• <strong>Planetario</strong> — the dome is mesmerizing at this age</li>
      <li>• <strong>Kidiverso trampolines</strong> — ideal birthday venue</li>
    </ul>
  </div>
  <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-blue-900 mb-3">Tweens / Teens (11+)</h3>
    <ul class="space-y-2 text-blue-800 text-sm">
      <li>• <strong>Tangamanga II sports courts</strong> — pick-up soccer, basketball</li>
      <li>• <strong>BMW Maratón Tangamanga (June 28, 2026)</strong> — 5K and 10K family distances</li>
      <li>• <strong>Huasteca Potosina day trip</strong> — cascades and rivers</li>
      <li>• <strong>Cineteca / mall cinemas</strong> — Altaria and Plaza Sendero</li>
    </ul>
  </div>
</div>
</section>

<section id="tips" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Practical Tips: Altitude, Shade, Strollers</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Altitude (1,863 m / 6,112 ft):</strong> Visitors from sea level may feel slight fatigue or a headache on day 1. Hydrate more than usual, slow down the first 24 hours, and skip long bike rides until day 2. Children adapt faster than adults but still need water every 30 minutes.</li>
  <li><strong>Sun protection is non-negotiable:</strong> UV index is high year-round due to altitude plus thin atmosphere. Apply SPF 50+ before leaving the hotel and reapply every 2 hours. Wide-brim hats for kids are standard in SLP.</li>
  <li><strong>Water bottles:</strong> Refill stations exist in Tangamanga I near the amphitheater. Otherwise bring at least 1L per person.</li>
  <li><strong>Best time to visit in summer (April–September):</strong> Mornings 7–11 AM or evenings after 5 PM. Midday is too hot for playgrounds without shade.</li>
  <li><strong>Best time to visit in winter (November–February):</strong> Afternoons 2–5 PM — mornings can be cold (5–10°C) before the sun heats up the park.</li>
  <li><strong>Strollers:</strong> Tangamanga I main paths and Alameda Juan Sarabia are fully stroller-friendly. Parque Morales paths are partly dirt — off-road strollers only. Historic center sidewalks are narrow and uneven; consider a baby carrier in the Centro.</li>
  <li><strong>Bathrooms:</strong> Public bathrooms exist at Tangamanga I (near each main entrance, fee sometimes $5 MXN), Alameda (near the central fountain), and all malls. Parque Morales bathrooms are being rebuilt.</li>
  <li><strong>Food:</strong> Outside food is allowed in all city parks. Multiple kiosks sell fresh fruit, raspados, elotes and agua fresca — very affordable.</li>
  <li><strong>Accessibility:</strong> Tangamanga I has paved paths suitable for wheelchairs throughout the central zone. The zoo is fully accessible. Historic plazas have some cobblestones.</li>
</ul>
</section>

<section id="free-vs-paid" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Free vs. Paid: Which to Choose</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Option</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Tangamanga I + zoo + playground</td><td class="px-4 py-3 text-green-600 font-bold">Free</td><td class="px-4 py-3">Full day with no budget limits</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Tangamanga II bikes/sports</td><td class="px-4 py-3 text-green-600 font-bold">Free (your own bike)</td><td class="px-4 py-3">Active older kids</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda + Centro Histórico</td><td class="px-4 py-3 text-green-600 font-bold">Free</td><td class="px-4 py-3">Toddlers, stroller days</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetarium (inside Tangamanga)</td><td class="px-4 py-3">$20–50 MXN</td><td class="px-4 py-3">Ages 5+ — 45-minute sessions</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">$40–50 MXN</td><td class="px-4 py-3">Rainy day, hands-on learning</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Dinoasis water park</td><td class="px-4 py-3">~$200 MXN / child</td><td class="px-4 py-3">Hot summer afternoons</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso / Stardust Park</td><td class="px-4 py-3">$150–250 MXN</td><td class="px-4 py-3">Birthday parties, cold rainy days</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Budget tip:</strong> A family of four can spend a full, genuinely fun day in San Luis Potosí without paying a single peso of entry fees by combining Tangamanga I (free park, free zoo, free playgrounds) with Alameda Juan Sarabia and the historic plazas. Add ~$200 MXN total for raspados, elotes and agua fresca.</p>
</section>

<section id="safety" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Safety and Parent Reviews</h2>

<p class="text-gray-700 mb-6">San Luis Potosí capital is widely considered one of the safer state capitals in central Mexico, with homicide rates below the national average according to INEGI. Parks specifically:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Tangamanga I and II:</strong> Municipal police patrol regularly; park security staff at each puerta. Local parent reviews describe both parks as "muy seguros" during daylight hours. Avoid the less-lit perimeter roads after dusk.</li>
  <li><strong>Alameda Juan Sarabia:</strong> Very busy during daylight, uniformed security nearby, excellent for solo parents with kids. Less recommended late at night.</li>
  <li><strong>Parque de Morales (Juan H. Sánchez):</strong> Historically safe, currently partly under renovation — check for fenced-off zones and follow posted signage.</li>
  <li><strong>Common-sense precautions:</strong> Keep valuables in a zipped bag, don't leave bags unattended at picnic tables, and teach kids a meeting point in case they get separated.</li>
</ul>

<p class="text-gray-700 mb-6">Potosino parent forums (Facebook groups "Mamás SLP" and "Familias Expats SLP") consistently rate Tangamanga I as the number one family destination in the city, with over 9,000 positive reviews across TripAdvisor, Google Maps and Facebook combined.</p>
</section>

<section id="getting-there" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">How to Get There</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Parque Tangamanga I:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+I+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. 8 main entrances (puertas); most visitors use Puerta 1 (Av. Himno Nacional) or Puerta 7. Free parking at every entrance. City buses: Ruta 1, Ruta 22. Uber from Centro: ~$60–90 MXN.</li>
  <li><strong>Parque Tangamanga II:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+II+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. In the northeast of the city. Free parking. Ruta 26.</li>
  <li><strong>Alameda Juan Sarabia:</strong> <a href="https://maps.google.com/?q=Alameda+Juan+Sarabia+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Walking distance from Plaza de Armas. Paid street parking. Any Centro-bound bus.</li>
  <li><strong>Parque Juan H. Sánchez / Morales:</strong> <a href="https://maps.google.com/?q=Parque+Morales+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Colonia Himno Nacional. Free street parking on weekdays; competitive on Sundays.</li>
  <li><strong>Museo Laberinto:</strong> <a href="https://maps.google.com/?q=Museo+Laberinto+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Boulevard Antonio Rocha Cordero. Free on-site parking.</li>
</ul>

<p class="text-gray-700 mb-6">For a full orientation to SLP neighborhoods and transport, see our <a href="/resources/living-guide" class="text-blue-600 underline font-medium">San Luis Potosí living guide</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Frequently Asked Questions</h2>

<div class="space-y-6">
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Which park in San Luis Potosí is best for toddlers?</h3>
    <p class="text-gray-700">Parque Tangamanga I has a dedicated kids zone (Zona Kids) with age-appropriate playground equipment for children as young as two, plus the thematic "Cri-Cri" children's park. The terrain is flat, stroller-friendly, and shaded. For a quieter option with fewer crowds, the Alameda Juan Sarabia in the historic center is fenced, walkable and surrounded by cafes.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Is Parque Tangamanga free?</h3>
    <p class="text-gray-700">Yes. General admission to Parque Tangamanga I and II is free. The zoo, botanical garden, Japanese garden, Laberinto de las Ciencias (inside the park) and main playground areas are also free. The Planetarium and the Splash/Dinoasis water park charge separate fees (typically $20–50 MXN for the planetarium and around $200 MXN for children at Dinoasis).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">What time does Parque Tangamanga open?</h3>
    <p class="text-gray-700">Parque Tangamanga I opens every day at 5:00 AM. Closing times vary: Mondays close early at 11:00 AM for maintenance, Tuesday through Saturday it stays open until 10:30 PM (last entry 9:30 PM), and Sunday closes at 6:00 PM (last entry 5:30 PM). The zoo inside the park runs Tuesday to Sunday, 10:00 AM to 5:00 PM.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Where can kids swim in San Luis Potosí?</h3>
    <p class="text-gray-700">Inside the city, the Dinoasis water park (formerly Splash) at Tangamanga I is the main option, with wave pools, children's slides and shallow splash areas. For a more traditional balneario experience, Parque Acuático Gogorrón (45 min south of SLP) offers thermal-water pools, three slides and shallow chapoteaderos designed for small children.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">What are the best indoor kids activities in San Luis Potosí?</h3>
    <p class="text-gray-700">Museo Laberinto de las Ciencias y las Artes is the top pick — a fully interactive science and arts museum with a 3D theater, hands-on physics and biology exhibits, and an entry fee around $50 MXN for adults, $40 MXN for kids 4–5, and free under 3. The Planetario del Parque Tangamanga I is also excellent for rainy or hot afternoons. Indoor play options include Kidiverso (trampolines and ball pits) and Stardust Park (space-themed brincolines).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Are there parks with splash pads in SLP?</h3>
    <p class="text-gray-700">Yes. The Dinoasis/Splash water park inside Parque Tangamanga I is the main splash-pad and water-play facility within city limits. It features dedicated toddler-height fountains, shallow pools and kid-specific slides. Seasonal operation typically runs Semana Santa through early fall.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Is San Luis Potosí safe for families with children?</h3>
    <p class="text-gray-700">San Luis Potosí capital is considered one of the safer state capitals in central Mexico. Tangamanga I and II, Alameda Juan Sarabia and the Centro Histórico have a strong municipal police presence during the day and are comfortable for families. Standard precautions apply.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">How much does parking cost at Parque Tangamanga?</h3>
    <p class="text-gray-700">Multiple free parking lots are available around the perimeter of Tangamanga I (Puerta 1 through Puerta 8) and Tangamanga II. Parking is first-come, first-served and fills up quickly on Sunday mornings. Arrive before 9:00 AM or after 4:00 PM on weekends for the easiest experience.</p>
  </div>
</div>
</section>

<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-blue-900">Related Family Guides</h3>
<ul class="space-y-2 text-blue-800">
  <li>→ <a href="/family-friendly-activities" class="underline font-medium">Family-friendly activities in San Luis Potosí</a></li>
  <li>→ <a href="/parque-tangamanga" class="underline font-medium">Parque Tangamanga complete guide</a></li>
  <li>→ <a href="/resources/family-guide" class="underline font-medium">Expat family guide to SLP</a></li>
  <li>→ <a href="/resources/living-guide" class="underline font-medium">San Luis Potosí living guide</a></li>
  <li>→ <a href="/events/all" class="underline font-medium">Upcoming family events in SLP</a></li>
</ul>
</div>

<div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-green-900">Ready to Explore SLP with Your Kids?</h3>
<p class="text-green-800 mb-3"><strong>San Luis Way is your complete local guide to family life in San Luis Potosí.</strong></p>
<p class="text-green-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Browse more SLP family guides →</a></p>
</div>

<script type="application/ld+json">
${JSON.stringify(faqJsonLd, null, 2)}
</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${IMG.hero}" alt="Mejores parques para niños en San Luis Potosí — Guía familiar del Parque Tangamanga" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-8">
  <div class="flex items-start gap-3">
    <div class="text-2xl" aria-hidden="true">✅</div>
    <div class="flex-1">
      <div class="text-xs font-bold uppercase tracking-wide text-blue-700 mb-1">Verificado de forma independiente</div>
      <p class="text-base font-bold text-gray-900 mb-1">Cada parque, horario, costo y dato de esta guía fue verificado el 24 de abril de 2026.</p>
      <p class="text-sm text-gray-700">Lee el <a href="/blog/factchecks/best-parks-for-kids-san-luis-potosi" class="text-blue-700 hover:text-blue-900 underline font-semibold">reporte completo de verificación</a> con fuentes, cadenas de evidencia y las correcciones que hicimos antes de publicar.</p>
    </div>
  </div>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Tabla de Contenidos</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Por qué SLP es ideal para niños</a></li>
    <li><a href="#quick-picks" class="text-blue-600 hover:text-blue-800">Tabla Rápida: Los 8 Mejores Parques</a></li>
    <li><a href="#tangamanga" class="text-blue-600 hover:text-blue-800">Parque Tangamanga I y II: Guía Completa</a></li>
    <li><a href="#other-parks" class="text-blue-600 hover:text-blue-800">Otros parques que vale la pena visitar</a></li>
    <li><a href="#water-play" class="text-blue-600 hover:text-blue-800">Chapoteaderos y juegos con agua</a></li>
    <li><a href="#indoor" class="text-blue-600 hover:text-blue-800">Espacios techados para días lluviosos o calurosos</a></li>
    <li><a href="#by-age" class="text-blue-600 hover:text-blue-800">Recomendaciones por edad</a></li>
    <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Consejos prácticos: altitud, sombra, carriolas</a></li>
    <li><a href="#free-vs-paid" class="text-blue-600 hover:text-blue-800">Gratis vs. de pago</a></li>
    <li><a href="#safety" class="text-blue-600 hover:text-blue-800">Seguridad y opiniones de papás</a></li>
    <li><a href="#getting-there" class="text-blue-600 hover:text-blue-800">Cómo llegar</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">Preguntas frecuentes</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Puntos Clave</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Mejor en general:</strong> Parque Tangamanga I — 411 hectáreas, entrada gratis, zoológico, juegos infantiles, lago y una Zona Kids dedicada para niños de 2 a 12 años.</li>
    <li><strong>Mejor para bebés y menores de 3:</strong> Alameda Juan Sarabia en el Centro Histórico — sombreada, plana, cercada y perfecta para carriolas.</li>
    <li><strong>Mejor para niños activos:</strong> Parque Tangamanga II — menos concurrido, ciclopistas amplias y canchas deportivas.</li>
    <li><strong>Mejor opción techada para días lluviosos:</strong> Museo Laberinto de las Ciencias y las Artes — interactivo, con cine 3D, $50 MXN adultos.</li>
    <li><strong>Mejor para nadar:</strong> Dinoasis (antes Splash) dentro de Tangamanga I — alberca de olas y zonas para niños pequeños.</li>
    <li><strong>En resumen:</strong> San Luis Potosí tiene más áreas verdes familiares gratuitas y de calidad per cápita que cualquier otra ciudad del Bajío, y casi todo es caminable o está a un Uber corto del Centro.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Por qué San Luis Potosí es ideal para niños</h2>

<p class="text-gray-700 mb-6"><strong>Si estás buscando "mejores parques para niños cerca de mí" y vives o visitas San Luis Potosí (SLP), estás en una de las ciudades más afortunadas para familias en el centro de México.</strong> La capital se encuentra a 1,863 m (6,112 ft) sobre el nivel del mar, lo que se traduce en clima primaveral todo el año, pocos mosquitos y días largos al aire libre. Pero lo más importante es que SLP ha invertido fuertemente en espacios verdes urbanos: <strong>solo el Parque Tangamanga I tiene 411 hectáreas</strong>, considerablemente más grande que el Central Park de Nueva York (340 ha). Oficialmente es el segundo parque urbano más grande de México después del Bosque de Chapultepec en CDMX (866 ha). Aquí el matiz que suelen señalar los locales: <em>Chapultepec se clasifica técnicamente como bosque, no como parque</em>, lo que —si solo cuentas los espacios urbanos oficialmente catalogados como parques— convierte al Tangamanga, de facto, en el parque urbano más grande del país.</p>

<p class="text-gray-700 mb-6">Esta guía cubre todos los parques donde los niños realmente pueden jugar con seguridad: los gigantes insignia (Tangamanga I y II), las plazas históricas con juegos infantiles, las opciones de juegos con agua y los espacios techados de respaldo para las pocas tardes lluviosas o de 30 °C. Verificamos horarios, tarifas y servicios en abril de 2026 y señalamos lo que podría cambiar.</p>

<p class="text-gray-700 mb-6">Para un panorama más amplio de qué hacer con niños más allá de los parques, consulta nuestra guía principal de <a href="/family-friendly-activities" class="text-blue-600 underline font-medium">actividades para familias en SLP</a> y la <a href="/resources/family-guide" class="text-blue-600 underline font-medium">guía para familias expatriadas</a>.</p>
</section>

<section id="quick-picks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tabla Rápida: Los 8 Mejores Parques para Niños en San Luis Potosí</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #059669, #0d9488);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Parque</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Edad Ideal</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Horarios</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Costo</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Característica Destacada</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Parque Tangamanga I</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Mar–Sáb 5am–10:30pm; Dom 5am–6pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Zoológico, lago, Zona Kids, planetario</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Tangamanga II</td><td class="px-4 py-3 text-center">5–14</td><td class="px-4 py-3 text-center">Mar–Dom 6am–8pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Ciclopistas, canchas deportivas, menos gente</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda Juan Sarabia</td><td class="px-4 py-3 text-center">0–6</td><td class="px-4 py-3 text-center">Abierto 24/7</td><td class="px-4 py-3 text-center text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Histórico, sombreado, perfecto para carriolas</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Juan H. Sánchez (Morales)</td><td class="px-4 py-3 text-center">4–10</td><td class="px-4 py-3 text-center">6am–10pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Árboles centenarios, en remodelación</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Parque Bicentenario</td><td class="px-4 py-3 text-center">4–12</td><td class="px-4 py-3 text-center">Mar–Dom 6am–6pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Juegos infantiles, 33 especies de árboles, esculturas industriales</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque acuático Dinoasis (Splash)</td><td class="px-4 py-3 text-center">3–14</td><td class="px-4 py-3 text-center">Temporada 10am–6pm</td><td class="px-4 py-3 text-center">~$200 MXN niño</td><td class="px-4 py-3">Alberca de olas + chapoteadero para niños</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Museo Laberinto (techado)</td><td class="px-4 py-3 text-center">4–14</td><td class="px-4 py-3 text-center">Mar–Vie 9–16; Sáb–Dom 11–19</td><td class="px-4 py-3 text-center">$50 MXN adulto / $40 niño</td><td class="px-4 py-3">Ciencia interactiva + cine 3D</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso (techado)</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Diario 10am–9pm</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3">Brincolines, alberca de pelotas, fiestas</td></tr>
    </tbody>
  </table>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
<p class="text-yellow-800"><strong>Nota de verificación:</strong> Horarios y precios confirmados en abril de 2026 con el gobierno municipal de San Luis Potosí y el sitio oficial del Museo Laberinto. La actualización de tarifas 2026 en Tangamanga solo afecta la renta de instalaciones deportivas (renta de canchas de fútbol/básquet $170 MXN / 2 hrs; gimnasio de alto rendimiento $470 MXN/mes). La entrada al parque sigue siendo gratuita.</p>
</div>
</section>

<section id="tangamanga" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Parque Tangamanga I y II: La Guía Completa</h2>

<div class="mb-8">
<img src="${IMG.family}" alt="Familias disfrutando del Parque Tangamanga I en San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Tangamanga I — El insignia</h3>

<p class="text-gray-700 mb-6"><strong>El Parque Tangamanga I abarca 411 hectáreas (1,016 acres) en el suroeste de la ciudad.</strong> Oficialmente es el segundo parque urbano más grande de México, detrás del Bosque de Chapultepec (866 ha) en CDMX, pero como Chapultepec está clasificado como <em>bosque</em> y no como parque, cada vez más fuentes sostienen que Tangamanga es en realidad el parque urbano más grande del país. De cualquier forma, supera por mucho al Central Park de Nueva York (340 ha). El parque combina un zoológico gratuito, un planetario, un parque acuático de temporada, un museo interactivo de ciencias, un lago, un jardín japonés, un jardín botánico, un teatro al aire libre, 14 kilómetros de pistas para trotar y andar en bici y —lo más importante para las familias— zonas infantiles con equipamiento moderno.</p>

<p class="text-gray-700 mb-6"><strong>La "Zona Kids"</strong> es un área recientemente ampliada con juegos infantiles clasificados por edad, adecuados para niños desde los 2 hasta aproximadamente 12 años. Las superficies son de hule amortiguador, los juegos están sombreados en la mayoría de las secciones y hay bancas distribuidas alrededor del perímetro para los papás. Junto a la Zona Kids está el <strong>Parque Cri-Cri</strong>, una zona temática encantadora diseñada alrededor de los personajes de las canciones infantiles de Francisco Gabilondo Soler, muy queridos por los niños mexicanos.</p>

<h4 class="text-xl font-bold mb-3 text-gray-900">Horarios (confirmados en abril 2026)</h4>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Lunes:</strong> 5:00 AM – 11:00 AM (mantenimiento; último acceso 10:30 AM)</li>
  <li><strong>Martes a sábado:</strong> 5:00 AM – 10:30 PM (último acceso 9:30 PM)</li>
  <li><strong>Domingo:</strong> 5:00 AM – 6:00 PM (último acceso 5:30 PM)</li>
  <li><strong>Zoológico:</strong> Martes a domingo, 9:00 AM – 5:00 PM (cerrado los lunes)</li>
</ul>

<h4 class="text-xl font-bold mb-3 text-gray-900">Costo de entrada</h4>
<p class="text-gray-700 mb-4">La entrada general al parque, al zoológico, al jardín botánico, al jardín japonés y a los juegos infantiles de la Zona Kids es <strong>gratuita</strong>. El Museo Laberinto de las Ciencias y las Artes (ubicado dentro del parque) cobra una entrada general aparte de $50 MXN. Atracciones de pago dentro del parque:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Planetario:</strong> normalmente $20–50 MXN por persona</li>
  <li><strong>Parque acuático Dinoasis</strong> (antes Splash): aproximadamente $200 MXN por niño (de temporada, generalmente desde Semana Santa hasta principios de otoño)</li>
  <li><strong>Renta de bicis:</strong> alrededor de $40–80 MXN por hora, según el tamaño y si incluye casco</li>
  <li><strong>Renta de canchas deportivas (actualización 2026):</strong> $170 MXN / 2 hrs para canchas de fútbol, básquetbol y voleibol</li>
</ul>

<div class="mb-8">
<img src="${IMG.lake}" alt="Lago del Parque Tangamanga I — un rincón tranquilo para picnic en familia" class="w-full rounded-xl shadow-lg" />
</div>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>Aviso (actualización 2026):</strong> Los barquitos de pedal del lago de Tangamanga I no aparecen en el tarifario oficial de 2026 — verifica disponibilidad en el kiosco al llegar antes de prometerle a los niños un paseo en lancha. El lago sigue siendo un bonito lugar sombreado para un picnic y para caminar por el perímetro. Si tus niños quieren tiempo garantizado en el agua, la mejor alternativa cercana es la Presa San José para sesiones guiadas de stand-up paddle.</p>
</div>

<h4 class="text-xl font-bold mb-3 text-gray-900">Qué hacer con niños en Tangamanga I</h4>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Empieza por la Puerta 1 o la 7</strong> (accesos principales): son las más cercanas al área de juegos y al zoológico.</li>
  <li><strong>Visita el zoológico temprano.</strong> Los animales están más activos entre las 10 y las 11 AM, antes del calor de la tarde.</li>
  <li><strong>Picnic junto al lago:</strong> hay mesas sombreadas alrededor del perímetro; verifica en sitio si los barquitos de pedal están operando antes de prometer un paseo en lancha, pero la caminata alrededor del lago sigue siendo uno de los paseos más bonitos del parque.</li>
  <li><strong>Camina o pedalea hasta el Jardín Japonés:</strong> tranquilo, sombreado, gratis y perfecto para un picnic.</li>
  <li><strong>Pasa por la Zona Kids</strong> después de comer, cuando ya está parcialmente sombreada.</li>
  <li><strong>Termina con un helado o un raspado en los kioscos</strong> cerca del teatro al aire libre.</li>
</ol>

<p class="text-gray-700 mb-6">Para una guía dedicada completa, consulta nuestra <a href="/parque-tangamanga" class="text-blue-600 underline font-medium">guía completa del Parque Tangamanga</a>.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900 mt-8">Parque Tangamanga II — El hermano tranquilo</h3>

<p class="text-gray-700 mb-6">El Parque Tangamanga II mide aproximadamente un tercio de lo que mide Tangamanga I, está ubicado al noreste de la ciudad y es considerablemente menos concurrido, especialmente los fines de semana. Es ideal para familias que buscan amplios prados abiertos, ciclopistas dedicadas sin tráfico peatonal, canchas de básquetbol y fútbol, y áreas de juegos más tranquilas. El horario suele ser de martes a domingo de 6:00 AM a 8:00 PM (cerrado los lunes por mantenimiento). La entrada es gratuita.</p>

<p class="text-gray-700 mb-6"><strong>Los papás con niños más grandes (8+) suelen preferir Tangamanga II</strong> porque las ciclopistas son más lisas, más continuas y tienen menos peatones. Lleva tus propias bicis: el servicio de renta es más limitado que en Tangamanga I.</p>
</section>

<section id="other-parks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Otros Parques en San Luis Potosí que vale la pena visitar</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Alameda Juan Sarabia</h3>
<p class="text-gray-700 mb-6"><strong>Ubicación:</strong> Extremo oriente del Centro Histórico, junto a la antigua estación del ferrocarril. <strong>Horario:</strong> Abierto 24/7 (mejor durante el día). <strong>Costo:</strong> Gratis. La Alameda fue originalmente la huerta del convento del Carmen antes de convertirse en parque público tras las Leyes de Reforma de 1850, y fue nombrada oficialmente en 1932 en honor al periodista liberal Juan Sarabia Díaz de León. Hoy ofrece más de 4 hectáreas de andadores planos y sombreados, una fuente central, un área de juegos de temporada y eventos culturales frecuentes. Es por mucho la mejor opción para papás con bebés y niños pequeños que quieren una salida corta desde hoteles del Centro o desde el primer cuadro: puedes caminar a la Plaza de Armas o a la Catedral en 10 minutos.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Juan H. Sánchez (Parque de Morales)</h3>
<p class="text-gray-700 mb-6"><strong>Ubicación:</strong> Colonia Himno Nacional, entre Av. Venustiano Carranza y Paseo de los Artistas. <strong>Tamaño:</strong> ~13–15 hectáreas (según El Universal SLP y Líder Empresarial). <strong>Horario:</strong> 6:00 AM – 10:00 PM. <strong>Costo:</strong> Gratis. Conocido cariñosamente como "Parque de Morales", este parque centenario (fundado el 19 de mayo de 1924) es una institución potosina, con un lago artificial creado en 1968, más de 120 especies animales identificadas y la famosa resbaladilla en forma de cohete ("El Cohete") que marcó la infancia de varias generaciones. Un proyecto estatal de rehabilitación de ~100 millones de pesos iniciado en mayo de 2024 está renovando actualmente el lago, los juegos infantiles y las áreas para mascotas; algunas zonas del parque pueden estar cerradas con valla en 2026, así que conviene verificar antes de ir. La sombra es inigualable: enormes pinos, eucaliptos y cedros.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Bicentenario</h3>
<p class="text-gray-700 mb-6"><strong>Ubicación:</strong> Anillo Periférico, sobre el antiguo terreno industrial de IMMSA (~5.8 km del Centro). <strong>Horario:</strong> Martes a domingo 6:00 AM – 6:00 PM (cerrado los lunes). <strong>Costo:</strong> Gratis. Inaugurado durante las celebraciones del Bicentenario de México en 2010, el Parque Bicentenario es uno de los espacios verdes recuperados de terrenos industriales más interesantes del país: una antigua fundición de cobre convertida en parque público, hoy hogar de 33 especies de árboles, una red de senderos para correr y caminar, un gimnasio al aire libre, áreas de picnic techadas y un <strong>área de juegos infantiles</strong> especialmente popular los domingos por la mañana. Quince esculturas industriales conservadas de la antigua planta de IMMSA están distribuidas por el terreno: a los niños les encanta trepar cerca de ellas y a los papás les encantan las fotos. Estacionamiento gratuito; transporte público en las Rutas 02, 04, 09 y 34.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Plaza de los Fundadores y Plaza de Armas</h3>
<p class="text-gray-700 mb-6">No son parques en el sentido tradicional, pero las dos plazas históricas principales son excelentes para bebés y niños pequeños que quieren perseguir palomas, subirse al carrusel municipal (cuando se instala durante las fiestas) y comerse un raspado. Ambas son gratis, están rodeadas de cafés con baños y son el centro de los recorridos familiares a pie por el Centro Histórico, construido en cantera y declarado sitio UNESCO como parte del Camino Real de Tierra Adentro.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Jardín de San Juan de Dios</h3>
<p class="text-gray-700 mb-6">Pequeño, escondido dentro del Centro Histórico junto a la iglesia del mismo nombre. Bancas a la sombra, árboles viejos, perfecto para una pausa de 30 minutos durante un paseo familiar por el Centro. No tiene juegos infantiles pero es muy seguro y muy mexicano.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parques en Lomas, Villa Magna e Industrias</h3>
<p class="text-gray-700 mb-6">Las zonas residenciales más nuevas al sur y suroeste de la ciudad incluyen varios parques vecinales tipo "condominio" tranquilos, bien cuidados y abiertos a visitantes. El <strong>Parque Lomas 4ta Sección</strong> y las áreas verdes a lo largo de Av. Palma de la Cruz cuentan con juegos infantiles básicos y pasto. Son ideales si te estás quedando en un Airbnb de esas colonias y quieres una parada de 15 minutos en el parque. Para jugar techado con nivel, los centros comerciales ancla de esa zona (Plaza Sendero, Altaria, El Dorado) tienen áreas de juego climatizadas, útiles en los días más calurosos.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Lineal Providencia (Soledad de Graciano Sánchez)</h3>
<p class="text-gray-700 mb-6">Inaugurado en 2025 en el municipio vecino de Soledad como parte de una expansión metropolitana de espacios verdes con inversión de ~120 millones de pesos. Juegos infantiles modernos, andadores, ciclovías y amplios prados. Vale la pena manejar 20 minutos desde el Centro si te estás quedando cerca. Las otras inauguraciones de Soledad en 2025 — Parque Bugambilias, Quinta Soledad, Villas del Sol y Villas de Soledad — le dan al área metropolitana más espacio verde abierto que en cualquier punto de la última década.</p>
</section>

<section id="water-play" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Chapoteaderos y zonas de juego con agua en San Luis Potosí</h2>

<div class="mb-8">
<img src="${IMG.biodiversity}" alt="Juegos con agua y biodiversidad en Tangamanga" class="w-full rounded-xl shadow-lg" />
</div>

<p class="text-gray-700 mb-6">Las tardes de verano en SLP pueden llegar a 30–32 °C (86–90 °F): hace calor, pero es seco. Los juegos con agua son indispensables de abril a septiembre:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Dinoasis (antes Splash), Parque Tangamanga I:</strong> El principal parque acuático dentro de la ciudad. Alberca de olas, chapoteadero para niños con toboganes pequeños, toboganes de emoción media para mayores de 6 y un río lento. Normalmente ~$200 MXN por niño. La temporada va de Semana Santa a principios de otoño; consulta los canales oficiales antes de ir.</li>
  <li><strong>Parque Acuático Gogorrón (a 45 minutos al sur):</strong> Balneario de agua termal con albercas de distintas profundidades, tres toboganes, dos tubos acuáticos y chapoteaderos diseñados específicamente para niños pequeños. Un clásico paseo familiar de un día.</li>
  <li><strong>Balneario Lourdes y Ojo Caliente:</strong> Albercas termales tradicionales, excelentes para mañanas frescas. No están tan pulidas para familias como Gogorrón, pero son más baratas.</li>
  <li><strong>Fuentes de temporada en Plaza de Armas:</strong> Durante los eventos municipales de verano, a veces se instalan fuentes temporales. Gratis. No es algo seguro, pero es una grata sorpresa cuando lo encuentras.</li>
</ul>

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
<p class="text-blue-800"><strong>Opción para fin de semana:</strong> Para una aventura de fin de semana, la <strong>Huasteca Potosina</strong> (4 horas al este) ofrece ríos turquesa, cascadas naturales y pozas: el mejor parque natural de agua en México. Consulta el <a href="/events/all" class="underline font-medium">calendario de eventos</a> para viajes guiados familiares.</p>
</div>
</section>

<section id="indoor" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Espacios techados para niños en días lluviosos o muy calurosos</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lugar</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Horario</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Precio</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Edad Ideal</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">Ciencia interactiva + cine 3D</td><td class="px-4 py-3 text-center">Mar–Vie 9–16; Sáb–Dom 11–19</td><td class="px-4 py-3 text-center">$50 adulto / $40 niño</td><td class="px-4 py-3 text-center">4–14</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetario Tangamanga I</td><td class="px-4 py-3">Proyecciones astronómicas en domo</td><td class="px-4 py-3 text-center">Mar–Dom, por funciones</td><td class="px-4 py-3 text-center">$20–50 MXN</td><td class="px-4 py-3 text-center">5–14</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso</td><td class="px-4 py-3">Brincolines, alberca de pelotas, inflables</td><td class="px-4 py-3 text-center">Diario 10–21</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3 text-center">2–12</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Stardust Park</td><td class="px-4 py-3">Brinca-brinca techado con tema espacial</td><td class="px-4 py-3 text-center">Diario 11–20</td><td class="px-4 py-3 text-center">~$150 MXN</td><td class="px-4 py-3 text-center">2–10</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Área infantil Plaza Sendero</td><td class="px-4 py-3">Área de juegos de centro comercial</td><td class="px-4 py-3 text-center">Horario del centro</td><td class="px-4 py-3 text-center">Normalmente gratis</td><td class="px-4 py-3 text-center">2–8</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Altaria y El Dorado</td><td class="px-4 py-3">Cine + zonas de juego</td><td class="px-4 py-3 text-center">Diario 11–21</td><td class="px-4 py-3 text-center">Varía</td><td class="px-4 py-3 text-center">Todas las edades</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Mejor opción techada: Museo Laberinto de las Ciencias y las Artes.</strong> Ubicado en el Bulevar Antonio Rocha Cordero, Colonia Tierra Blanca, es uno de los mejores museos interactivos de ciencia para niños del centro de México. Exhibiciones prácticas de física, biología, química y robótica, más un cine 3D: la entrada incluye todo. Los menores de 3 años entran gratis.</p>
</section>

<section id="by-age" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Recomendaciones por edad</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-pink-900 mb-3">Bebés y menores de 3 años</h3>
    <ul class="space-y-2 text-pink-800 text-sm">
      <li>• <strong>Alameda Juan Sarabia</strong> — plana, sombreada, perfecta para carriolas</li>
      <li>• <strong>Parque Tangamanga I — área Cri-Cri</strong> — superficies blandas, juegos a escala de bebé</li>
      <li>• <strong>Plaza de los Fundadores</strong> — perseguir palomas, comer raspados</li>
      <li>• Evitar: Parque de Morales (algunos juegos siguen cerrados)</li>
    </ul>
  </div>
  <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-yellow-900 mb-3">Preescolar (3–5 años)</h3>
    <ul class="space-y-2 text-yellow-800 text-sm">
      <li>• <strong>Zona Kids de Tangamanga I</strong> — toda la variedad de toboganes y estructuras para trepar</li>
      <li>• <strong>Zoológico de Tangamanga</strong> — gratis y absolutamente fascinante a esta edad</li>
      <li>• <strong>Museo Laberinto</strong> — la película 3D es un éxito asegurado</li>
      <li>• <strong>Parque Bicentenario</strong> — juegos infantiles + esculturas industriales, seguro y sombreado</li>
    </ul>
  </div>
  <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-green-900 mb-3">Primaria (6–10 años)</h3>
    <ul class="space-y-2 text-green-800 text-sm">
      <li>• <strong>Renta de bicis en Tangamanga I</strong> — 14 km de pistas para explorar</li>
      <li>• <strong>Tangamanga II</strong> — mejor para paseos largos en bici</li>
      <li>• <strong>Parque acuático Dinoasis</strong> — toboganes medianos, alberca de olas</li>
      <li>• <strong>Planetario</strong> — el domo es hipnótico a esta edad</li>
      <li>• <strong>Brincolines de Kidiverso</strong> — sede ideal para cumpleaños</li>
    </ul>
  </div>
  <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-blue-900 mb-3">Pre-adolescentes / Adolescentes (11+)</h3>
    <ul class="space-y-2 text-blue-800 text-sm">
      <li>• <strong>Canchas deportivas de Tangamanga II</strong> — cascaritas de fútbol, básquetbol</li>
      <li>• <strong>BMW Maratón Tangamanga (28 de junio de 2026)</strong> — distancias familiares 5K y 10K</li>
      <li>• <strong>Día en la Huasteca Potosina</strong> — cascadas y ríos</li>
      <li>• <strong>Cineteca / cines en centros comerciales</strong> — Altaria y Plaza Sendero</li>
    </ul>
  </div>
</div>
</section>

<section id="tips" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Consejos prácticos: altitud, sombra, carriolas</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Altitud (1,863 m / 6,112 ft):</strong> Quienes vienen del nivel del mar pueden sentir un poco de fatiga o dolor de cabeza el primer día. Hidrátate más de lo habitual, baja el ritmo las primeras 24 horas y deja los paseos largos en bici para el segundo día. Los niños se adaptan más rápido que los adultos, pero igual necesitan agua cada 30 minutos.</li>
  <li><strong>La protección solar no es negociable:</strong> El índice UV es alto todo el año por la altitud y la atmósfera delgada. Aplica SPF 50+ antes de salir del hotel y vuelve a aplicar cada 2 horas. Los sombreros de ala ancha para niños son estándar en SLP.</li>
  <li><strong>Botellas de agua:</strong> Hay estaciones de llenado en Tangamanga I cerca del teatro al aire libre. De lo contrario, lleva al menos 1 L por persona.</li>
  <li><strong>Mejor horario en verano (abril–septiembre):</strong> Mañanas de 7 a 11 AM o tardes después de las 5 PM. El mediodía es demasiado caluroso para juegos infantiles sin sombra.</li>
  <li><strong>Mejor horario en invierno (noviembre–febrero):</strong> Tardes de 2 a 5 PM; por las mañanas puede hacer frío (5–10 °C) antes de que el sol caliente el parque.</li>
  <li><strong>Carriolas:</strong> Los andadores principales de Tangamanga I y la Alameda Juan Sarabia son totalmente aptos para carriolas. En el Parque de Morales algunos senderos son de tierra: solo aptos para carriolas todoterreno. Las banquetas del Centro Histórico son angostas e irregulares; considera un portabebés en el Centro.</li>
  <li><strong>Baños:</strong> Hay baños públicos en Tangamanga I (cerca de cada puerta principal, a veces con cuota de $5 MXN), en la Alameda (cerca de la fuente central) y en todos los centros comerciales. Los baños del Parque de Morales están en reconstrucción.</li>
  <li><strong>Comida:</strong> Se permite llevar comida a todos los parques de la ciudad. Varios kioscos venden fruta fresca, raspados, elotes y agua fresca a precios muy accesibles.</li>
  <li><strong>Accesibilidad:</strong> Tangamanga I tiene andadores pavimentados aptos para sillas de ruedas en toda la zona central. El zoológico es totalmente accesible. Las plazas históricas tienen partes empedradas.</li>
</ul>
</section>

<section id="free-vs-paid" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Gratis vs. De pago: ¿Cuál elegir?</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opción</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Costo</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ideal Para</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Tangamanga I + zoológico + juegos infantiles</td><td class="px-4 py-3 text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Día completo sin gastar</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Tangamanga II bicis/deportes</td><td class="px-4 py-3 text-green-600 font-bold">Gratis (con tu bici)</td><td class="px-4 py-3">Niños mayores activos</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda + Centro Histórico</td><td class="px-4 py-3 text-green-600 font-bold">Gratis</td><td class="px-4 py-3">Bebés, días de carriola</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetario (dentro de Tangamanga)</td><td class="px-4 py-3">$20–50 MXN</td><td class="px-4 py-3">A partir de 5 años, funciones de 45 min</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">$40–50 MXN</td><td class="px-4 py-3">Día lluvioso, aprendizaje práctico</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque acuático Dinoasis</td><td class="px-4 py-3">~$200 MXN / niño</td><td class="px-4 py-3">Tardes calurosas de verano</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso / Stardust Park</td><td class="px-4 py-3">$150–250 MXN</td><td class="px-4 py-3">Fiestas de cumpleaños, días fríos y lluviosos</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Tip económico:</strong> Una familia de cuatro puede pasar un día completo, genuinamente divertido, en San Luis Potosí sin pagar un solo peso de entrada combinando Tangamanga I (parque gratis, zoológico gratis, juegos infantiles gratis) con la Alameda Juan Sarabia y las plazas históricas. Suma ~$200 MXN en total para raspados, elotes y agua fresca.</p>
</section>

<section id="safety" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Seguridad y opiniones de papás</h2>

<p class="text-gray-700 mb-6">La capital de San Luis Potosí se considera ampliamente una de las capitales estatales más seguras del centro de México, con tasas de homicidio por debajo del promedio nacional según el INEGI. En cuanto a los parques específicamente:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Tangamanga I y II:</strong> La policía municipal patrulla con regularidad y hay personal de seguridad del parque en cada puerta. Los papás locales describen ambos parques como "muy seguros" durante el día. Evita los caminos del perímetro con poca iluminación después del anochecer.</li>
  <li><strong>Alameda Juan Sarabia:</strong> Muy concurrida durante el día, con seguridad uniformada cerca, excelente para papás o mamás solos con niños. Menos recomendada muy de noche.</li>
  <li><strong>Parque de Morales (Juan H. Sánchez):</strong> Históricamente seguro, actualmente parcialmente en remodelación: verifica las zonas cerradas y respeta la señalización.</li>
  <li><strong>Precauciones de sentido común:</strong> Guarda los objetos de valor en una bolsa con cierre, no dejes bolsas sin supervisión en las mesas de picnic y enseña a los niños un punto de reunión en caso de separarse.</li>
</ul>

<p class="text-gray-700 mb-6">Los foros de papás potosinos (grupos de Facebook "Mamás SLP" y "Familias Expats SLP") califican consistentemente al Parque Tangamanga I como el destino familiar número uno de la ciudad, con más de 9,000 opiniones positivas combinadas entre TripAdvisor, Google Maps y Facebook.</p>
</section>

<section id="getting-there" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Cómo llegar</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Parque Tangamanga I:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+I+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. 8 accesos principales (puertas); la mayoría de los visitantes usa la Puerta 1 (Av. Himno Nacional) o la Puerta 7. Estacionamiento gratis en cada acceso. Transporte público: Ruta 1, Ruta 22. Uber desde el Centro: ~$60–90 MXN.</li>
  <li><strong>Parque Tangamanga II:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+II+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Al noreste de la ciudad. Estacionamiento gratis. Ruta 26.</li>
  <li><strong>Alameda Juan Sarabia:</strong> <a href="https://maps.google.com/?q=Alameda+Juan+Sarabia+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. A pie desde la Plaza de Armas. Estacionamiento en la calle de pago. Cualquier ruta que vaya al Centro.</li>
  <li><strong>Parque Juan H. Sánchez / Morales:</strong> <a href="https://maps.google.com/?q=Parque+Morales+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Colonia Himno Nacional. Estacionamiento gratis en la calle entre semana; competido los domingos.</li>
  <li><strong>Museo Laberinto:</strong> <a href="https://maps.google.com/?q=Museo+Laberinto+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Bulevar Antonio Rocha Cordero. Estacionamiento gratis en el propio museo.</li>
</ul>

<p class="text-gray-700 mb-6">Para una orientación completa sobre colonias y transporte en SLP, consulta nuestra <a href="/resources/living-guide" class="text-blue-600 underline font-medium">guía para vivir en San Luis Potosí</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas frecuentes</h2>

<div class="space-y-6">
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿Cuál es el mejor parque en San Luis Potosí para niños pequeños?</h3>
    <p class="text-gray-700">El Parque Tangamanga I cuenta con una Zona Kids con juegos infantiles adecuados para niños desde los dos años, además del parque temático "Cri-Cri". El terreno es plano, apto para carriolas y con áreas sombreadas. Si buscas una opción más tranquila y con menos gente, la Alameda Juan Sarabia en el Centro Histórico está cercada, es caminable y está rodeada de cafés.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿La entrada al Parque Tangamanga es gratis?</h3>
    <p class="text-gray-700">Sí. La entrada general al Parque Tangamanga I y II es gratuita. El zoológico, el jardín botánico, el jardín japonés, el Laberinto de las Ciencias (dentro del parque) y las áreas principales de juegos infantiles también son gratis. El Planetario y el parque acuático Splash/Dinoasis cobran tarifas aparte (normalmente $20–50 MXN para el planetario y alrededor de $200 MXN por niño en Dinoasis).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿A qué hora abre el Parque Tangamanga?</h3>
    <p class="text-gray-700">El Parque Tangamanga I abre todos los días a las 5:00 AM. Los horarios de cierre varían: los lunes cierra temprano a las 11:00 AM por mantenimiento, de martes a sábado permanece abierto hasta las 10:30 PM (último acceso 9:30 PM) y los domingos cierra a las 6:00 PM (último acceso 5:30 PM). El zoológico dentro del parque opera de martes a domingo, de 10:00 AM a 5:00 PM.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿Dónde pueden nadar los niños en San Luis Potosí?</h3>
    <p class="text-gray-700">Dentro de la ciudad, el parque acuático Dinoasis (antes Splash) en Tangamanga I es la opción principal, con alberca de olas, toboganes para niños y chapoteaderos poco profundos. Para una experiencia más tradicional de balneario, el Parque Acuático Gogorrón (a 45 minutos al sur de SLP) ofrece albercas de agua termal, tres toboganes y chapoteaderos diseñados para niños pequeños.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿Cuáles son las mejores actividades techadas para niños en San Luis Potosí?</h3>
    <p class="text-gray-700">El Museo Laberinto de las Ciencias y las Artes es la mejor opción: un museo interactivo de ciencia y arte con cine 3D, exhibiciones prácticas de física y biología, con entrada de alrededor de $50 MXN adultos, $40 MXN niños de 4–5 años y gratis para menores de 3. El Planetario del Parque Tangamanga I también es excelente para tardes lluviosas o calurosas. Otras opciones techadas incluyen Kidiverso (brincolines y albercas de pelotas) y Stardust Park (brinca-brinca con temática espacial).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿Hay parques con chapoteaderos en SLP?</h3>
    <p class="text-gray-700">Sí. El parque acuático Dinoasis/Splash dentro del Parque Tangamanga I es la principal instalación de chapoteaderos y juegos de agua dentro de la ciudad. Cuenta con fuentes a la altura de bebés y niños pequeños, albercas poco profundas y toboganes especiales para niños. La operación es de temporada, típicamente desde Semana Santa hasta principios de otoño.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿San Luis Potosí es seguro para familias con niños?</h3>
    <p class="text-gray-700">La capital de San Luis Potosí se considera una de las capitales estatales más seguras del centro de México. Tangamanga I y II, la Alameda Juan Sarabia y el Centro Histórico tienen una fuerte presencia de policía municipal durante el día y son cómodos para familias. Aplican las precauciones estándar.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">¿Cuánto cuesta el estacionamiento en el Parque Tangamanga?</h3>
    <p class="text-gray-700">Hay varios estacionamientos gratuitos alrededor del perímetro de Tangamanga I (de la Puerta 1 a la Puerta 8) y de Tangamanga II. Los lugares se asignan por orden de llegada y se llenan rápido los domingos por la mañana. Llega antes de las 9:00 AM o después de las 4:00 PM los fines de semana para la experiencia más sencilla.</p>
  </div>
</div>
</section>

<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-blue-900">Guías familiares relacionadas</h3>
<ul class="space-y-2 text-blue-800">
  <li>→ <a href="/family-friendly-activities" class="underline font-medium">Actividades para familias en San Luis Potosí</a></li>
  <li>→ <a href="/parque-tangamanga" class="underline font-medium">Guía completa del Parque Tangamanga</a></li>
  <li>→ <a href="/resources/family-guide" class="underline font-medium">Guía para familias expatriadas en SLP</a></li>
  <li>→ <a href="/resources/living-guide" class="underline font-medium">Guía para vivir en San Luis Potosí</a></li>
  <li>→ <a href="/events/all" class="underline font-medium">Próximos eventos familiares en SLP</a></li>
</ul>
</div>

<div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-green-900">¿Listo para explorar SLP con tus niños?</h3>
<p class="text-green-800 mb-3"><strong>San Luis Way es tu guía local completa para la vida familiar en San Luis Potosí.</strong></p>
<p class="text-green-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Ver más guías familiares de SLP →</a></p>
</div>

<script type="application/ld+json">
${JSON.stringify(faqJsonLdES, null, 2)}
</script>

</div>`;

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: IMG.hero,
  category: 'Family',
  tags: ['family', 'parks', 'kids', 'san-luis-potosi', 'tangamanga', 'playgrounds', 'family-friendly', 'slp', 'parques-para-ninos'],

  title: 'Best Parks for Kids in San Luis Potosí 2026 (Parent-Tested Guide)',
  excerpt: 'The 8 best parks for kids in San Luis Potosí — from Parque Tangamanga I (411 ha, free zoo, Zona Kids) to Parque Bicentenario, splash pads, and rainy-day indoor picks. Verified 2026 hours, prices and age tips.',
  content: contentEN,
  meta_title: 'Best Parks for Kids in San Luis Potosí 2026 | SLP Family Guide',
  meta_description: 'Top 8 parks for kids near you in San Luis Potosí 2026: Tangamanga, Bicentenario, Alameda, splash pads. Verified hours, free entry, age tips.',

  title_es: 'Mejores Parques para Niños en San Luis Potosí 2026 (Guía para Papás)',
  excerpt_es: 'Los 8 mejores parques para niños en San Luis Potosí — desde Parque Tangamanga I (411 ha, zoológico gratis, Zona Kids) hasta Parque Bicentenario, albercas de chapoteo y opciones para días lluviosos. Horarios, precios y tips por edad verificados.',
  content_es: contentES,
  meta_title_es: 'Mejores Parques para Niños San Luis Potosí 2026 | Guía Familiar SLP',
  meta_description_es: 'Top 8 parques para niños en San Luis Potosí 2026: Tangamanga, Bicentenario, Alameda, albercas. Horarios verificados, entrada gratis y tips por edad.',

  title_de: 'Die besten Parks für Kinder in San Luis Potosí 2026',
  excerpt_de: 'Die 8 besten Parks für Kinder in San Luis Potosí — von Parque Tangamanga I (411 ha, kostenloser Zoo, Zona Kids) über Parque Bicentenario bis zu Wasserspielplätzen und Regentag-Optionen.',
  content_de: contentEN,
  meta_title_de: 'Beste Parks für Kinder San Luis Potosí 2026 | SLP Familienführer',
  meta_description_de: 'Top 8 Parks für Kinder in San Luis Potosí 2026: Tangamanga, Bicentenario, Alameda, Wasserparks. Verifizierte Öffnungszeiten, freier Eintritt und Alterstipps.',

  title_ja: 'サン・ルイス・ポトシの子供向けおすすめ公園ベスト8（2026年版）',
  excerpt_ja: 'サン・ルイス・ポトシで子供に最適な公園ベスト8 — パルケ・タンガマンガI（411ha、無料動物園、キッズゾーン）からパルケ・ビセンテナリオ、ウォーターパーク、室内プレイまで。営業時間と料金を確認済み。',
  content_ja: contentEN,
  meta_title_ja: 'サン・ルイス・ポトシ 子供向け公園ベスト8 2026 | ファミリーガイド',
  meta_description_ja: 'サン・ルイス・ポトシで子連れにおすすめの公園トップ8（2026年版）：タンガマンガ、ビセンテナリオ、アラメダ、ウォーターパーク。営業時間・料金・年齢別のヒントを掲載。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }

  console.log('Checking for existing post...');
  const { data: existing, error: selectErr } = await supabase
    .from('blog_posts')
    .select('id, slug')
    .eq('slug', SLUG)
    .maybeSingle();

  if (selectErr) {
    console.error('Select error:', selectErr);
    process.exit(1);
  }

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
