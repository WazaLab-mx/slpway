// Native German + Japanese translations for the `san-luis-potosi-airport-guide`
// blog post. Idempotent: updates content_de and content_ja by slug. Every HTML
// tag/attribute/class/id/href and all airport codes, airline names, fares,
// distances, dates and proper nouns are preserved exactly; only human-readable
// text nodes (and JSON-LD string values) are translated. Verifies by re-fetch.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-airport-guide';

const CONTENT_DE = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Der Internationale Flughafen von San Luis Potosí — offiziell Aeropuerto Internacional Ponciano Arriaga (IATA: SLP)</strong> — ist einer der unkompliziertesten Flughäfen Mexikos: 834,795 Passagiere im gesamten Jahr 2025, sechs Fluggesellschaften, ~12 Direktziele und ein Taxi zum Festpreis, das Sie in etwa 25 Minuten für MX$275 ins Centro Histórico bringt. Hier finden Sie alles Geprüfte: Flüge, Bodentransport, Mietwagen und wann sich der Flug hierher mehr lohnt als nach Querétaro oder Mexiko-Stadt.
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>Das Wichtigste:</strong> Der Flughafen SLP liegt am Km 9,5 der Autobahn nach Matehuala, 15–20 km (~20–30 Min.) vom Stadtzentrum entfernt. Zahlen Sie bei der Ankunft MX$275 am autorisierten Taxischalter für das Centro. Direktflüge Stand Mitte 2026: Mexiko-Stadt, Dallas, Houston, San Antonio, Chicago, Tijuana, Cancún, Monterrey, Guadalajara, Puebla, Puerto Vallarta und Mexiko-Stadt–AIFA.
  </p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Der Flughafen auf einen Blick</h2>
<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <ul class="text-sm text-gray-700 leading-relaxed space-y-2">
    <li><strong>Offizieller Name:</strong> Aeropuerto Internacional Ponciano Arriaga (benannt nach dem in San Luis geborenen liberalen Verfassungsgeber) · IATA: <strong>SLP</strong> · ICAO: MMSP</li>
    <li><strong>Betreiber:</strong> OMA — Grupo Aeroportuario Centro Norte</li>
    <li><strong>Lage:</strong> Carretera a Matehuala Km 9.5, auf der Seite von Soledad de Graciano Sánchez im Ballungsraum</li>
    <li><strong>Passagieraufkommen:</strong> 834,795 Passagiere im Jahr 2025, +13,4 % gegenüber 2024 (OMA-Zahlen)</li>
    <li><strong>Serviceangebot im Terminal:</strong> WLAN, VIP-Lounge, Geldwechsel, Gepäckverpackung, Geschäfte, Restaurants, Duty-Free und kostenpflichtige Parkplätze (laut OMA)</li>
  </ul>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Wer nach SLP fliegt (Mitte 2026)</h2>
<p class="text-gray-700 leading-relaxed mb-6">Die Streckenangaben entsprechen der OMA-Streckenseite des Flughafens und den Airline-Seiten mit Stand Juli 2026 — bestätigen Sie die Flugpläne stets bei der Buchung, da Regionalstrecken wechseln. Die Volaris-Erweiterung vom Juni 2026 (Chicago Midway, Monterrey, Guadalajara, Puebla, Puerto Vallarta) wurde gemeinsam mit OMA bekanntgegeben. Sie kommen aus Texas? Wir haben einen kompletten Ratgeber zu den <a href="/blog/direct-flights-from-texas-to-san-luis-potosi" class="text-orange-600 underline font-semibold">Direktflügen aus Texas</a>.</p>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Aeroméxico</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Mexiko-Stadt (MEX) — ~5× täglich, 1 Std. 20 Min.</p>
    <p class="text-sm text-gray-700 leading-relaxed">Verbindet über sein Drehkreuz MEX mit dem gesamten Aeroméxico/SkyTeam-Netzwerk.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">American Airlines</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Dallas/Fort Worth (DFW) — täglicher Direktflug</p>
    <p class="text-sm text-gray-700 leading-relaxed">Zugang zum gesamten AA-Netzwerk mit nur einem Umstieg über DFW.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">United Airlines</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Houston (IAH) — ~14× wöchentlich, ~2 Std.</p>
    <p class="text-sm text-gray-700 leading-relaxed">Die klassische Geschäftsreisestrecke, etwa zweimal täglich.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Volaris</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Tijuana, Cancún, Dallas (DFW), Houston (IAH), San Antonio (SAT) + neu ab Juni 2026: Chicago (MDW), Monterrey, Guadalajara, Puebla, Puerto Vallarta</p>
    <p class="text-sm text-gray-700 leading-relaxed">Der größte Anbieter am SLP: 10 Ziele (6 im Inland, 4 in den USA) nach der im Juni 2026 mit OMA angekündigten Erweiterung.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Aerus / VivaAerobus</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Monterrey (MTY) und Mexiko-Stadt–Felipe Ángeles (NLU/AIFA)</p>
    <p class="text-sm text-gray-700 leading-relaxed">Regionalverbindungen; die Streckendatenbanken sind sich uneinig, welche Airline welchen Abschnitt bedient — prüfen Sie bei der Buchung beide.</p>
  </div>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Ins Stadtzentrum kommen</h2>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">Autorisiertes Taxi — die Standardlösung</h3>
  <p class="text-sm text-gray-700 leading-relaxed">Die Abholung am Flughafen erfolgt über lizenzierte Taxis mit einem Festpreisschalter im Ankunftsbereich: <strong>MX$275 ins Centro Histórico im Jahr 2026</strong> — ein Tarif, der in offiziellen jährlichen Schritten von MX$255 (2024) und MX$266 (2025) gestiegen ist, laut der vom lokalen Medium Astrolabio veröffentlichten Tariftabelle und abgeglichen mit der Taxiseite von OMA (bestätigt in unserem Faktencheck im Juli 2026). Zahlen Sie am Schalter, holen Sie sich ein Ticket und ersparen Sie sich jedes Verhandeln. Planen Sie 20–30 Minuten bis ins Centro ein. Sie überlegen, wo das Taxi Sie absetzen soll? Beginnen Sie mit unserem <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>Ratgeber zur Unterkunftswahl</a>.</p>
</div>

<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">Uber — funktioniert, aber rechtlich umstritten</h3>
  <p class="text-sm text-gray-700 leading-relaxed">Ubers eigene Flughafenseite führt Abholungen und Absetzungen am SLP auf (im Schnitt ~MX$299 und ~24 Minuten in die Stadt). Landesweit erlaubt eine Aussetzung durch ein Bundesgericht vom Oktober 2025 App-basierte Abholungen an über 70 mexikanischen Flughäfen — doch das Urteil blieb bis ins Jahr 2026 umstritten, wobei Uber öffentlich forderte, dass die Nationalgarde die Anordnung respektiert (El Financiero, März 2026), und die Taxikonzessionen weiterhin den offiziellen Flughafenvertrag halten. In der Praxis: Absetzungen sind Routine; für Abholungen ist der Taxischalter die reibungsloseste Option, und falls Sie doch ein Uber bestellen, rechnen Sie mit einem Treffpunkt am Straßenrand außerhalb des Terminals.</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">Mietwagen — 8 Anbieter im Terminal</h3>
  <p class="text-sm text-gray-700 leading-relaxed">Laut der offiziellen OMA-Seite: Avis, Budget, Dollar, Hertz, National/Enterprise, Sixt, Alamo und Europcar, mit Schaltern, die etwa von 7:00 bis 23:00 Uhr geöffnet sind (Dollar und Hertz ab 5:00 Uhr). Ein Auto ist die richtige Wahl, wenn Ihr Plan <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>Tagesausflüge</a> umfasst — die meisten der besten sind nur mit dem Auto erreichbar.</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">Öffentlicher Nahverkehr — praktisch keiner</h3>
  <p class="text-sm text-gray-700 leading-relaxed">Die Bodentransport-Seiten von OMA nennen Taxis, Parkplätze und Mietwagen — es gibt keinen fahrplanmäßigen öffentlichen Bus zum Flughafen. Planen Sie mit dem Taxischalter. (Im Stadtzentrum angekommen, ist die Stadt gut zu Fuß zu erkunden und der MetroRed-BRT ist kostenlos; und ja, <a href='/blog/is-san-luis-potosi-safe-2026' class='text-orange-600 underline font-semibold'>SLP ist eine der sichereren Hauptstädte Zentralmexikos</a>.)</p>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">SLP im Vergleich zum Anflug auf QRO, BJX oder MEX</h2>
<p class="text-gray-700 leading-relaxed mb-6">Internationale Reisende nehmen oft an, sie müssten über Mexiko-Stadt fliegen. Ein ehrlicher Vergleich:</p>
<div class="overflow-x-auto mb-4">
<table class="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
  <thead class="bg-orange-50"><tr>
    <th class="px-4 py-3 text-left font-bold text-gray-900">Flughafen</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">Straßenentfernung / -zeit zur Stadt SLP</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">Warum diese Wahl</th>
  </tr></thead>
  <tbody class="divide-y divide-gray-200 bg-white">
    <tr><td class="px-4 py-3 font-semibold">SLP (Ponciano Arriaga)</td><td class="px-4 py-3">15–20 km · 20–30 Min.</td><td class="px-4 py-3">Immer, wenn es eine Strecke gibt — Dallas, Houston, San Antonio, Chicago und 8 mexikanische Städte im Direktflug</td></tr>
    <tr><td class="px-4 py-3 font-semibold">Querétaro (QRO)</td><td class="px-4 py-3">~210 km · ~2,5 Std.</td><td class="px-4 py-3">Größeres Netzwerk (2,4 Mio. Passagiere 2025, Direktflug nach Madrid, 11 neue Volaris-Strecken im Juni 2026), wenn Tarife/Flugpläne am SLP nicht passen</td></tr>
    <tr><td class="px-4 py-3 font-semibold">León/Guanajuato (BJX)</td><td class="px-4 py-3">~177 km · ~2 Std. 15 Min.</td><td class="px-4 py-3">Breites US-Streckennetz; die nächstgelegene große Alternative auf der Straße</td></tr>
    <tr><td class="px-4 py-3 font-semibold">Mexiko-Stadt (MEX)</td><td class="px-4 py-3">~402 km · 4,5+ Std. über 57D</td><td class="px-4 py-3">Interkontinentale Langstreckenankünfte — steigen Sie dann auf den 1 Std. 20 Min. dauernden Aeroméxico-Zubringer um, statt zu fahren</td></tr>
  </tbody>
</table>
</div>
<p class="text-gray-700 leading-relaxed">Fazit: Für alle, die aus Texas, Chicago oder irgendwoher aus Mexiko kommen, gewinnt SLP selbst bei der Gesamtzeit von Tür zu Tür. Fliegen Sie über MEX (plus den kurzen Zubringer) für Europa/Asien/Südamerika oder über QRO für dessen Direktflug nach Madrid. Planen Sie gerade die Reise selbst? Sehen Sie sich unseren <a href="/visit-san-luis-potosi" class="text-orange-600 underline font-semibold">San-Luis-Potosí-Reise-Hub</a> an.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welche Fluggesellschaften fliegen nach San Luis Potosí (SLP)?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Stand Mitte 2026 bedienen sechs Fluggesellschaften den Internationalen Flughafen Ponciano Arriaga mit ~12 Direktzielen: Aeroméxico (Mexiko-Stadt, ~5× täglich), American (Dallas/DFW täglich), United (Houston/IAH, ~14× wöchentlich), Volaris (Tijuana, Cancún, Dallas, Houston, San Antonio sowie Chicago Midway, Monterrey, Guadalajara, Puebla und Puerto Vallarta, hinzugefügt im Juni 2026) und die Regionalanbieter Aerus und VivaAerobus (Monterrey, Mexiko-Stadt–AIFA).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kostet ein Taxi vom Flughafen SLP ins Zentrum von San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">MX$275 ins Centro Histórico im Jahr 2026 am autorisierten Festpreis-Taxischalter im Ankunftsbereich (gestiegen von MX$255 im Jahr 2024 und MX$266 im Jahr 2025, laut der vom lokalen Medium Astrolabio berichteten offiziellen Tariftabelle). Zahlen Sie am Schalter, nicht beim Fahrer. Die Fahrt dauert etwa 20–30 Minuten.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Gibt es Uber am Flughafen von San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Uber führt offiziell Abholungen und Absetzungen am Flughafen SLP auf (durchschnittliche Fahrt in die Stadt ~MX$299, ~24 Minuten laut Ubers eigener Flughafenseite), und eine Aussetzung durch ein Bundesgericht vom Oktober 2025 erlaubt App-Abholungen an Mexikos Flughäfen — doch das Urteil blieb bis ins Jahr 2026 rechtlich umstritten, mit Vollzugsstreitigkeiten zwischen Uber und den Bundesbehörden. Die reibungslose Ankunftsoption ist der autorisierte Taxischalter; Absetzungen per Uber sind Routine.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie weit ist der Flughafen SLP vom Stadtzentrum entfernt?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Flughafen liegt am Km 9.5 der Autobahn nach Matehuala, auf der Seite von Soledad de Graciano Sánchez im Ballungsraum. Kartendienste geben die Fahrt ins Centro Histórico mit 15–20 km und je nach Verkehr etwa 20–30 Minuten an; Ubers Flughafenseite nennt im Schnitt 20 km / 24 Minuten.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Sollte ich nach SLP, Querétaro (QRO), León (BJX) oder Mexiko-Stadt (MEX) fliegen?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Wenn eine Strecke SLP bedient, nutzen Sie sie — Sie landen 20–30 Minuten vom Zentrum entfernt. Querétaro Intercontinental (2,4 Mio. Passagiere im Jahr 2025, einschließlich Direktflügen nach Madrid) ist auf der Straße ~2,5 Std. entfernt, León/BJX ~2 Std. 15 Min. und Mexiko-Stadt ~402 km / 4,5+ Std. über die Autobahn 57D — oder ein 1 Std. 20 Min. dauernder Aeroméxico-Zubringerflug. QRO/BJX lohnen sich nur, wenn Tarife oder Flugpläne SLP mit großem Abstand schlagen.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Geprüft im Juli 2026: OMA — offizielle Seiten des Flughafenbetreibers (Fluggesellschaften & Strecken, Taxis, Mietwagen, Terminal-Services) und OMA/Volaris-Pressemitteilung zu den fünf im Juni 2026 startenden Strecken; Airline-Streckenseiten (Aeroméxico SLP–MEX ~5× täglich, American SLP–DFW täglich, United SLP–IAH ~14× wöchentlich, Volaris SLP–DFW); OMA-Verkehr 2025 (834,795 Passagiere, via Potosinoticias und Wikipedias belegte Statistiken); Astrolabio (Taxi-Tariftabelle des Flughafens 2024→2026, MX$275); offizielle SLP-Flughafenseite von Uber; La Jornada / Mexico News Daily (Aussetzung durch das Bundesgericht im Oktober 2025 zu Abholungen an Flughäfen) und El Financiero (Vollzugsstreit im März 2026); FlightConnections (12 Direktziele); Entfernungsrechner und DriveBestWay für die Straßenzeiten nach QRO/BJX/MEX. Tarife und Strecken ändern sich — bestätigen Sie sie bei der Airline oder am Taxischalter.</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Bald Landung?</p>
  <p class="text-orange-100 text-sm mb-4">Legen Sie Ihre Basis mit dem <a href="/blog/where-to-stay-san-luis-potosi-2026" class="underline font-semibold text-white">Ratgeber zur Unterkunftswahl</a> fest — oder holen Sie sich die wöchentliche Agenda kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Welche Fluggesellschaften fliegen nach San Luis Potosí (SLP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stand Mitte 2026 bedienen sechs Fluggesellschaften den Internationalen Flughafen Ponciano Arriaga mit ~12 Direktzielen: Aeroméxico (Mexiko-Stadt, ~5× täglich), American (Dallas/DFW täglich), United (Houston/IAH, ~14× wöchentlich), Volaris (Tijuana, Cancún, Dallas, Houston, San Antonio sowie Chicago Midway, Monterrey, Guadalajara, Puebla und Puerto Vallarta, hinzugefügt im Juni 2026) und die Regionalanbieter Aerus und VivaAerobus (Monterrey, Mexiko-Stadt–AIFA)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel kostet ein Taxi vom Flughafen SLP ins Zentrum von San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MX$275 ins Centro Histórico im Jahr 2026 am autorisierten Festpreis-Taxischalter im Ankunftsbereich (gestiegen von MX$255 im Jahr 2024 und MX$266 im Jahr 2025, laut der vom lokalen Medium Astrolabio berichteten offiziellen Tariftabelle). Zahlen Sie am Schalter, nicht beim Fahrer. Die Fahrt dauert etwa 20–30 Minuten."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es Uber am Flughafen von San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber führt offiziell Abholungen und Absetzungen am Flughafen SLP auf (durchschnittliche Fahrt in die Stadt ~MX$299, ~24 Minuten laut Ubers eigener Flughafenseite), und eine Aussetzung durch ein Bundesgericht vom Oktober 2025 erlaubt App-Abholungen an Mexikos Flughäfen — doch das Urteil blieb bis ins Jahr 2026 rechtlich umstritten, mit Vollzugsstreitigkeiten zwischen Uber und den Bundesbehörden. Die reibungslose Ankunftsoption ist der autorisierte Taxischalter; Absetzungen per Uber sind Routine."
      }
    },
    {
      "@type": "Question",
      "name": "Wie weit ist der Flughafen SLP vom Stadtzentrum entfernt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Flughafen liegt am Km 9.5 der Autobahn nach Matehuala, auf der Seite von Soledad de Graciano Sánchez im Ballungsraum. Kartendienste geben die Fahrt ins Centro Histórico mit 15–20 km und je nach Verkehr etwa 20–30 Minuten an; Ubers Flughafenseite nennt im Schnitt 20 km / 24 Minuten."
      }
    },
    {
      "@type": "Question",
      "name": "Sollte ich nach SLP, Querétaro (QRO), León (BJX) oder Mexiko-Stadt (MEX) fliegen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wenn eine Strecke SLP bedient, nutzen Sie sie — Sie landen 20–30 Minuten vom Zentrum entfernt. Querétaro Intercontinental (2,4 Mio. Passagiere im Jahr 2025, einschließlich Direktflügen nach Madrid) ist auf der Straße ~2,5 Std. entfernt, León/BJX ~2 Std. 15 Min. und Mexiko-Stadt ~402 km / 4,5+ Std. über die Autobahn 57D — oder ein 1 Std. 20 Min. dauernder Aeroméxico-Zubringerflug. QRO/BJX lohnen sich nur, wenn Tarife oder Flugpläne SLP mit großem Abstand schlagen."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>サン・ルイス・ポトシ国際空港 — 正式名称はポンシアーノ・アリアガ国際空港（Aeropuerto Internacional Ponciano Arriaga、IATA：SLP）</strong> — は、メキシコで最も利用しやすい空港のひとつです。2025年通年で834,795人の旅客数、6社の航空会社、約12の直行便就航地、そして定額料金のタクシーで約25分・MX$275でCentro Histórico（歴史地区）まで行けます。ここでは、フライト、地上交通、レンタカー、そしてケレタロやメキシコシティに飛ぶよりこちらが有利になる場合まで、確認済みの情報をすべてご紹介します。
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>要点：</strong> SLP空港はマテワラ街道の9.5km地点にあり、中心部から15〜20km（約20〜30分）の距離です。到着したら、認可タクシーのカウンターでセントロまでMX$275をお支払いください。2026年半ば時点の直行便：メキシコシティ、ダラス、ヒューストン、サンアントニオ、シカゴ、ティフアナ、カンクン、モンテレー、グアダラハラ、プエブラ、プエルト・バジャルタ、そしてメキシコシティ–AIFA。
  </p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">ひと目でわかる空港概要</h2>
<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <ul class="text-sm text-gray-700 leading-relaxed space-y-2">
    <li><strong>正式名称：</strong> Aeropuerto Internacional Ponciano Arriaga（サン・ルイス出身の自由主義の憲法起草者にちなんで命名） · IATA：<strong>SLP</strong> · ICAO：MMSP</li>
    <li><strong>運営：</strong> OMA — Grupo Aeroportuario Centro Norte</li>
    <li><strong>所在地：</strong> Carretera a Matehuala Km 9.5、都市圏のうちソレダ・デ・グラシアーノ・サンチェス側</li>
    <li><strong>旅客数：</strong> 2025年に834,795人、2024年比+13.4%（OMAの数値）</li>
    <li><strong>ターミナルのサービス：</strong> WiFi、VIPラウンジ、両替、手荷物ラッピング、店舗、レストラン、免税店、有料駐車場（OMAによる）</li>
  </ul>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">SLPに就航する航空会社（2026年半ば）</h2>
<p class="text-gray-700 leading-relaxed mb-6">路線情報は2026年7月時点のOMA空港の路線ページおよび各航空会社のページに基づいています。地方路線は入れ替わるため、予約時には必ずスケジュールをご確認ください。2026年6月のVolarisの路線拡大（シカゴ・ミッドウェー、モンテレー、グアダラハラ、プエブラ、プエルト・バジャルタ）は、OMAと共同で発表されました。テキサスからお越しですか？ <a href="/blog/direct-flights-from-texas-to-san-luis-potosi" class="text-orange-600 underline font-semibold">テキサスからの直行便</a>についての詳しいガイドもあります。</p>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Aeroméxico</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">メキシコシティ（MEX）— 1日約5便、1時間20分</p>
    <p class="text-sm text-gray-700 leading-relaxed">MEXハブを経由して、Aeroméxico/SkyTeamのネットワーク全体に接続します。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">American Airlines</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">ダラス/フォートワース（DFW）— 毎日直行便</p>
    <p class="text-sm text-gray-700 leading-relaxed">DFW経由で1回の乗り継ぎでAAのネットワーク全体にアクセスできます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">United Airlines</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">ヒューストン（IAH）— 週約14便、約2時間</p>
    <p class="text-sm text-gray-700 leading-relaxed">おおむね1日2便の、定番のビジネス路線です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Volaris</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">ティフアナ、カンクン、ダラス（DFW）、ヒューストン（IAH）、サンアントニオ（SAT）＋2026年6月からの新規：シカゴ（MDW）、モンテレー、グアダラハラ、プエブラ、プエルト・バジャルタ</p>
    <p class="text-sm text-gray-700 leading-relaxed">SLPで最大の航空会社です。2026年6月にOMAと発表した路線拡大後、就航地は10か所（国内6、米国4）になりました。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">Aerus / VivaAerobus</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">モンテレー（MTY）とメキシコシティ–フェリペ・アンヘレス（NLU/AIFA）</p>
    <p class="text-sm text-gray-700 leading-relaxed">地方路線です。どの航空会社がどの区間を運航するかは路線データベースによって異なるため、予約時には両方をご確認ください。</p>
  </div>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">中心部への行き方</h2>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">認可タクシー — 基本の選択肢</h3>
  <p class="text-sm text-gray-700 leading-relaxed">空港での送迎は、到着ロビーに定額料金カウンターを備えた認可タクシーが担います。<strong>2026年はCentro HistóricoまでMX$275</strong>で、この料金はMX$255（2024年）、MX$266（2025年）から公式に毎年段階的に上昇してきました。これは地元メディアAstrolabioが公表した料金表に基づき、OMAのタクシーページと照合したものです（2026年7月のファクトチェックで確認済み）。カウンターでお支払いのうえチケットを受け取れば、交渉は一切不要です。セントロまで20〜30分を見込んでください。そのタクシーでどこに降りるか迷っていますか？ まずは<a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>宿泊エリアガイド</a>からどうぞ。</p>
</div>

<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">Uber — 使えるが、法的には争いがある</h3>
  <p class="text-sm text-gray-700 leading-relaxed">Uber自身の空港ページには、SLPでの乗車・降車が掲載されています（市内まで平均約MX$299、約24分）。全国的には、2025年10月の連邦裁判所による効力停止により、メキシコの70を超える空港でアプリ配車の乗車が認められています。しかしこの判断は2026年に入っても争いが続いており、Uberは国家警備隊が命令を尊重するよう公に求め（El Financiero、2026年3月）、タクシー免許業者は依然として公式の空港契約を保持しています。実際には、降車は日常的です。乗車については、タクシーカウンターが最も手間のかからない選択肢であり、それでもUberを呼ぶ場合は、ターミナル外の路肩が待ち合わせ場所になると考えておいてください。</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">レンタカー — ターミナル内に8社</h3>
  <p class="text-sm text-gray-700 leading-relaxed">OMAの公式ページによると、Avis、Budget、Dollar、Hertz、National/Enterprise、Sixt、Alamo、Europcarがあり、カウンターはおおむね7:00〜23:00に営業しています（DollarとHertzは5:00から）。予定に<a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>日帰り旅行</a>が含まれるなら、車が正解です。最良の行き先の多くは車でしか行けません。</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">公共交通機関 — 事実上なし</h3>
  <p class="text-sm text-gray-700 leading-relaxed">OMAの地上交通ページにはタクシー、駐車場、レンタカーが掲載されていますが、空港に乗り入れる定期路線バスはありません。タクシーカウンターを前提に計画してください。（中心部に着けば、街は徒歩で回れ、MetroRedのBRTは無料です。そしてご安心を、<a href='/blog/is-san-luis-potosi-safe-2026' class='text-orange-600 underline font-semibold'>SLPは中央メキシコでも比較的安全な州都のひとつ</a>です。）</p>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">SLP vs. QRO・BJX・MEXへの就航</h2>
<p class="text-gray-700 leading-relaxed mb-6">海外からの旅行者は、必ずメキシコシティを経由しなければならないと思い込みがちです。率直に比較してみましょう：</p>
<div class="overflow-x-auto mb-4">
<table class="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
  <thead class="bg-orange-50"><tr>
    <th class="px-4 py-3 text-left font-bold text-gray-900">空港</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">SLP市街地までの道路距離／所要時間</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">選ぶ理由</th>
  </tr></thead>
  <tbody class="divide-y divide-gray-200 bg-white">
    <tr><td class="px-4 py-3 font-semibold">SLP（Ponciano Arriaga）</td><td class="px-4 py-3">15〜20km · 20〜30分</td><td class="px-4 py-3">路線があるなら常に第一候補 — ダラス、ヒューストン、サンアントニオ、シカゴ、そしてメキシコの8都市に直行便</td></tr>
    <tr><td class="px-4 py-3 font-semibold">ケレタロ（QRO）</td><td class="px-4 py-3">~210km · ~2.5時間</td><td class="px-4 py-3">SLPの運賃やスケジュールが合わないときに、より大きなネットワーク（2025年の旅客数240万人、マドリード直行便、2026年6月にVolarisの新規11路線）</td></tr>
    <tr><td class="px-4 py-3 font-semibold">レオン/グアナフアト（BJX）</td><td class="px-4 py-3">~177km · ~2時間15分</td><td class="px-4 py-3">幅広い米国路線網。道路で最も近い大規模な代替空港</td></tr>
    <tr><td class="px-4 py-3 font-semibold">メキシコシティ（MEX）</td><td class="px-4 py-3">~402km · 57D経由で4.5時間以上</td><td class="px-4 py-3">長距離国際線の到着 — その後は運転せず、1時間20分のAeroméxicoの接続便に乗り継ぎ</td></tr>
  </tbody>
</table>
</div>
<p class="text-gray-700 leading-relaxed">結論：テキサス、シカゴ、あるいはメキシコ国内のどこから来る人にとっても、ドア・ツー・ドアの総所要時間ではSLP自体が勝ります。ヨーロッパ／アジア／南米へはMEX経由（プラス短い接続便）で、マドリード直行便を利用するならQRO経由で。旅そのものを計画中ですか？ <a href="/visit-san-luis-potosi" class="text-orange-600 underline font-semibold">サン・ルイス・ポトシ観光ハブ</a>をご覧ください。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">どの航空会社がサン・ルイス・ポトシ（SLP）に就航していますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">2026年半ば時点で、6社の航空会社がポンシアーノ・アリアガ国際空港に約12の直行便就航地で乗り入れています：Aeroméxico（メキシコシティ、1日約5便）、American（ダラス/DFW、毎日）、United（ヒューストン/IAH、週約14便）、Volaris（ティフアナ、カンクン、ダラス、ヒューストン、サンアントニオに加え、2026年6月に追加されたシカゴ・ミッドウェー、モンテレー、グアダラハラ、プエブラ、プエルト・バジャルタ）、そして地方航空会社のAerusとVivaAerobus（モンテレー、メキシコシティ–AIFA）。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">SLP空港からサン・ルイス・ポトシ中心部までのタクシー代はいくらですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">2026年は、到着ロビーの認可された定額料金タクシーカウンターでCentro HistóricoまでMX$275です（2024年のMX$255、2025年のMX$266から上昇。地元メディアAstrolabioが報じた公式料金表による）。ドライバーではなく、カウンターでお支払いください。所要時間はおよそ20〜30分です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシ空港にUberはありますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Uberは公式にSLP空港での乗車・降車を掲載しており（Uber自身の空港ページによれば、市内までの平均で約MX$299、約24分）、2025年10月の連邦裁判所による効力停止でメキシコの空港でのアプリ配車の乗車が認められています。ただしこの判断は2026年に入っても法的に争いが続いており、Uberと連邦当局の間で執行をめぐる対立があります。手間のかからない到着時の選択肢は認可タクシーカウンターで、Uberによる降車は日常的です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">SLP空港は市の中心部からどのくらい離れていますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">空港はマテワラ街道の9.5km地点、都市圏のうちソレダ・デ・グラシアーノ・サンチェス側にあります。地図サービスではCentro Históricoまでの走行距離を15〜20km、交通状況に応じておよそ20〜30分としています。Uberの空港ページでは平均で20km／24分となっています。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">SLP、ケレタロ（QRO）、レオン（BJX）、メキシコシティ（MEX）のどこに飛ぶべきですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">SLPに就航する路線があるなら、それを使いましょう — 中心部から20〜30分のところに着きます。ケレタロ・インターコンチネンタル（2025年の旅客数240万人、マドリード直行便を含む）は道路で約2.5時間、レオン/BJXは約2時間15分、メキシコシティは57号線D経由で約402km／4.5時間以上 — あるいは1時間20分のAeroméxico接続便です。QRO/BJXが理にかなうのは、運賃やスケジュールがSLPを大きく上回る場合だけです。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に確認：OMA — 空港運営会社の公式ページ（航空会社と路線、タクシー、レンタカー、ターミナルのサービス）および2026年6月就航の5路線に関するOMA/Volarisのプレスリリース；各航空会社の路線ページ（Aeroméxico SLP–MEX 1日約5便、American SLP–DFW 毎日、United SLP–IAH 週約14便、Volaris SLP–DFW）；OMAの2025年旅客数（834,795人、PotosinoticiasおよびWikipediaの出典付き統計より）；Astrolabio（2024→2026年の空港タクシー料金表、MX$275）；Uberの公式SLP空港ページ；La Jornada / Mexico News Daily（2025年10月の連邦による空港での乗車の効力停止）およびEl Financiero（2026年3月の執行をめぐる対立）；FlightConnections（12の直行便就航地）；QRO/BJX/MEXの道路所要時間についての距離計算ツールとDriveBestWay。運賃と路線は変わります — 航空会社またはタクシーカウンターでご確認ください。</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">まもなく到着ですか？</p>
  <p class="text-orange-100 text-sm mb-4"><a href="/blog/where-to-stay-san-luis-potosi-2026" class="underline font-semibold text-white">宿泊エリアガイド</a>で拠点を決めましょう — または毎週のアジェンダを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weeklyを購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "どの航空会社がサン・ルイス・ポトシ（SLP）に就航していますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026年半ば時点で、6社の航空会社がポンシアーノ・アリアガ国際空港に約12の直行便就航地で乗り入れています：Aeroméxico（メキシコシティ、1日約5便）、American（ダラス/DFW、毎日）、United（ヒューストン/IAH、週約14便）、Volaris（ティフアナ、カンクン、ダラス、ヒューストン、サンアントニオに加え、2026年6月に追加されたシカゴ・ミッドウェー、モンテレー、グアダラハラ、プエブラ、プエルト・バジャルタ）、そして地方航空会社のAerusとVivaAerobus（モンテレー、メキシコシティ–AIFA）。"
      }
    },
    {
      "@type": "Question",
      "name": "SLP空港からサン・ルイス・ポトシ中心部までのタクシー代はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026年は、到着ロビーの認可された定額料金タクシーカウンターでCentro HistóricoまでMX$275です（2024年のMX$255、2025年のMX$266から上昇。地元メディアAstrolabioが報じた公式料金表による）。ドライバーではなく、カウンターでお支払いください。所要時間はおよそ20〜30分です。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシ空港にUberはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uberは公式にSLP空港での乗車・降車を掲載しており（Uber自身の空港ページによれば、市内までの平均で約MX$299、約24分）、2025年10月の連邦裁判所による効力停止でメキシコの空港でのアプリ配車の乗車が認められています。ただしこの判断は2026年に入っても法的に争いが続いており、Uberと連邦当局の間で執行をめぐる対立があります。手間のかからない到着時の選択肢は認可タクシーカウンターで、Uberによる降車は日常的です。"
      }
    },
    {
      "@type": "Question",
      "name": "SLP空港は市の中心部からどのくらい離れていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "空港はマテワラ街道の9.5km地点、都市圏のうちソレダ・デ・グラシアーノ・サンチェス側にあります。地図サービスではCentro Históricoまでの走行距離を15〜20km、交通状況に応じておよそ20〜30分としています。Uberの空港ページでは平均で20km／24分となっています。"
      }
    },
    {
      "@type": "Question",
      "name": "SLP、ケレタロ（QRO）、レオン（BJX）、メキシコシティ（MEX）のどこに飛ぶべきですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SLPに就航する路線があるなら、それを使いましょう — 中心部から20〜30分のところに着きます。ケレタロ・インターコンチネンタル（2025年の旅客数240万人、マドリード直行便を含む）は道路で約2.5時間、レオン/BJXは約2時間15分、メキシコシティは57号線D経由で約402km／4.5時間以上 — あるいは1時間20分のAeroméxico接続便です。QRO/BJXが理にかなうのは、運賃やスケジュールがSLPを大きく上回る場合だけです。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const update = { content_de: CONTENT_DE, content_ja: CONTENT_JA };
  const { error: upErr } = await supabase.from('blog_posts').update(update).eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_de and content_ja for', SLUG);

  // Verify: re-fetch and run checks.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  const wordCount = (s) => (s.replace(/<[^>]+>/g, ' ').match(/\S+/g) || []).length;
  const jsonldOf = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!m) return { ok: false, reason: 'no JSON-LD block' };
    try { JSON.parse(m[1]); return { ok: true }; }
    catch (e) { return { ok: false, reason: e.message }; }
  };

  const enTags = tagCount(check.content);
  let ok = true;
  for (const col of ['content_de', 'content_ja']) {
    const val = check[col];
    const differs = val !== check.content;
    const tags = tagCount(val);
    const tagsMatch = tags === enTags;
    const jl = jsonldOf(val);
    const codesOk = ['SLP', 'MEX', 'DFW', 'IAH', 'MDW', 'BJX', 'QRO', 'MX$275', 'MX$255', 'MX$266', 'MX$299', '834,795', 'Aeroméxico', 'Volaris', 'OMA', 'Ponciano Arriaga', 'Centro Histórico']
      .every((c) => val.includes(c));
    console.log(`\n[${col}]`);
    console.log(`  differs from EN: ${differs}`);
    console.log(`  tags: ${tags} (EN ${enTags}) match: ${tagsMatch}`);
    console.log(`  JSON-LD valid: ${jl.ok}${jl.ok ? '' : ' — ' + jl.reason}`);
    console.log(`  codes/fares/proper-nouns intact: ${codesOk}`);
    console.log(`  word count (text nodes): ${wordCount(val)}`);
    if (!differs || !tagsMatch || !jl.ok || !codesOk) ok = false;
  }
  console.log(`\nEN word count (text nodes): ${wordCount(check.content)}`);
  console.log(ok ? '\nAll verifications passed.' : '\nVerification problems found.');
  process.exit(ok ? 0 : 1);
}

main();
