// Native German + Japanese translations of the blog post
// `where-to-stay-san-luis-potosi-2026`. Idempotent: overwrites content_de and
// content_ja by slug with the full translated HTML below. Every HTML tag,
// attribute, class, id, href and the JSON-LD structure are preserved exactly —
// only human-readable text nodes are translated. Verifies by re-fetching.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'where-to-stay-san-luis-potosi-2026';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-sky-900 mb-3">In diesem Ratgeber</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-sky-800 text-sm">
    <a href="#areas" class="hover:underline">→ Die Stadtviertel im Überblick</a>
    <a href="#hotels" class="hover:underline">→ Hotels nach Budget (Tabellen)</a>
    <a href="#seasons" class="hover:underline">→ Wann die Preise steigen</a>
    <a href="#airport" class="hover:underline">→ Flughafen & Fortbewegung</a>
    <a href="#faq" class="hover:underline">→ Häufige Fragen</a>
  </nav>
  <p class="mt-4 text-sm text-sky-700 italic">Preise im Juli 2026 geprüft · Quellen am Ende</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium"><strong>San Luis Potosí hat eine hoteltechnische Besonderheit: Das Luxusangebot ist brandneu</strong> (der Vorzeigeturm eröffnete 2020) und die Preise bewegen sich noch wie in einer Durchgangsstadt — Suiten in einem Museumspalast zum Preis eines Kettenhotels in Mexiko-Stadt. Hier erfahren Sie, wo Sie je nach Reisegrund am besten übernachten, mit geprüften Preisen vom Juli 2026.</p>

<section id="areas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Die Stadtviertel im Überblick</h2>
</div>
<div class="space-y-4">

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🏛️ Centro Histórico</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Erstbesucher, Kultur, Budget</span></div><p class="text-sm text-gray-700 leading-relaxed">Der zu Fuß erkundbare koloniale Kern an der UNESCO-Route des Camino Real, durchzogen von rund 3 km Fußgängerstraßen (Calzada de Guadalupe–Zaragoza–Hidalgo). Alles ist fußläufig: Kathedrale, Museen, Bars mit Livemusik rund um Universidad/San Francisco. Nachteile: Lärm an den Wochenenden Richtung Plätze und komplett ausgebuchte Häuser in der Semana Santa.</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🍽️ Av. Carranza / Tequisquiapan</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Feinschmecker & Nachtleben</span></div><p class="text-sm text-gray-700 leading-relaxed">Die Restaurantmeile der Stadt: Block für Block voller Lokale, klassische Cantinas mit Live-Rock und Bars. Dünnes Hotelangebot (das Hotel Panorama ist der Ankerpunkt); vom östlichen Ende aus ist der Centro zu Fuß erreichbar.</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🏢 Lomas</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Geschäftsreisen, Familien, Luxus</span></div><p class="text-sm text-gray-700 leading-relaxed">Die gehobene Kettenhotel-Zone: Hyatt Regency und Hilton an derselben Allee, nur Minuten vom Einkaufszentrum Plaza San Luis und vom Kongresszentrum entfernt. Ruhig und wohnlich — aber nicht fußläufig: DiDi/Uber für alles (10–20 Min. bis zum Centro). Di–Do steigen die Preise mit der Geschäftsnachfrage; am Wochenende fallen sie.</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🌳 Av. Salvador Nava / Tangamanga</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Vielseitige Familien</span></div><p class="text-sm text-gray-700 leading-relaxed">Fiesta Americana und Hampton Inn direkt am Parque Tangamanga I und am Citadella-Komplex (Kino, Eisbahn). Ein Mittelpunkt zwischen dem Centro und dem Messegelände.</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🎡 Für die FENAPO (August)</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Korridor Juárez / Hwy 57</span></div><p class="text-sm text-gray-700 leading-relaxed">Das Messegelände liegt in der Colonia Satélite — kein Viertel, in dem man nachts spazieren geht oder übernachtet. Die praktische Basis: Holiday Inn Express, TRYP, ibis und City Express entlang der Juárez/57 (7–10 Min. mit dem Auto) oder ein beliebiges zentrales Hotel + DiDi / MetroRed Línea III.</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🚉 Alameda / Bahnhofsrand</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">Besuchen, aber nicht dort wohnen</span></div><p class="text-sm text-gray-700 leading-relaxed">Der historische Park und das Eisenbahnmuseum lohnen einen Besuch bei Tag, doch es ist eine Durchgangszone, die sich nachts leert — übernachten Sie stattdessen 3–5 Blocks weiter westlich im Fußgängerkern.</p></div>
</div>
</section>

<section id="hotels" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Hotels nach Budget</h2>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Luxus & gehobene Klasse</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hotel</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Wo / warum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Ab*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hyatt Regency San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">Lomas — der Vorzeigeturm der Stadt (2020 eröffnet, seit 2023 Hyatt)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$116 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hilton San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">Lomas — der klassische Business-Luxus-Dauerbrenner</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$86–104 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Fiesta Americana</td>
        <td class="px-4 py-3 text-sm text-gray-600">Av. Salvador Nava, direkt am Parque Tangamanga I und am Citadella-Komplex</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$76–122 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel Museo Palacio de San Agustín</td>
        <td class="px-4 py-3 text-sm text-gray-600">Centro — Suiten nur für Erwachsene in einem museumsreifen Palast</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$122–215 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Real Inn (Camino Real group)</td>
        <td class="px-4 py-3 text-sm text-gray-600">La Loma, am Golfclub — ruhige Oberklasse, mit Auto</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$60–86 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Boutique im Centro</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hotel</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Wo / warum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Ab*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Casa Maka</td>
        <td class="px-4 py-3 text-sm text-gray-600">3 Minuten zu Fuß zur Kathedrale</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$96–137 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">City Centro by Marriott</td>
        <td class="px-4 py-3 text-sm text-gray-600">Restauriertes Wahrzeichen mit Dachpool (Aldama 405)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$80–100 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Gran Hotel Concordia</td>
        <td class="px-4 py-3 text-sm text-gray-600">Renovierte historische Grande Dame, Gästebewertung 9,2</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$49 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Mittelklasse-Ketten</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hotel</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Wo / warum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Ab*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">NH San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">10 Minuten zu Fuß in den Centro vom Rand der Carranza</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$62 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel Panorama</td>
        <td class="px-4 py-3 text-sm text-gray-600">An der Av. Carranza mit Blick auf die Plätze — der Lage-Klassiker</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$48–54 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hampton Inn by Hilton</td>
        <td class="px-4 py-3 text-sm text-gray-600">Korridor Av. Salvador Nava (mit dem Auto zum Centro)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">aktuell prüfen</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Holiday Inn Express</td>
        <td class="px-4 py-3 text-sm text-gray-600">Korridor Av. Juárez — praktische FENAPO-Basis</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$45 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">City Express by Marriott ZI / ibis / TRYP by Wyndham</td>
        <td class="px-4 py-3 text-sm text-gray-600">Hwy 57 & Industriekorridor — am nächsten am Messegelände (7–8 Min.)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$50–74 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Staybridge Suites</td>
        <td class="px-4 py-3 text-sm text-gray-600">Long-Stay-Suiten nahe dem Kongresszentrum und der Arena Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$75 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Budget & Hostels (Centro)</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hotel</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Wo / warum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Ab*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sukha Hostel</td>
        <td class="px-4 py-3 text-sm text-gray-600">Schlafsäle mit Frühstück, wenige Schritte von der Barzone</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$10–14 USD Schlafsaal</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hostal San Pancho</td>
        <td class="px-4 py-3 text-sm text-gray-600">8 Minuten zu Fuß zur Kathedrale</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$17 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Casa Morelos StayHouse</td>
        <td class="px-4 py-3 text-sm text-gray-600">Privatzimmer mit Gemeinschaftsküche</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$20 USD</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">*„Ab"-Preise vom Juli 2026 (Booking/KAYAK/offizielle Seiten), Doppelzimmer an Tagen ohne Veranstaltungen — während der FENAPO und der Semana Santa steigen sie. Bei der Buchung prüfen.</p>
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
  <strong>Ein Hinweis, damit alte Bewertungen Sie nicht verwirren:</strong> Der Turm an der Real de Lomas 290 eröffnete 2020 als <em>Hilton Tower</em> und wurde <strong>2023 zum Hyatt Regency</strong> — Blogs, die „Hilton Tower" oder „Conrad" erwähnen, meinen das heutige Hyatt. Das klassische Hilton (Real de Lomas 1000) wird weiterhin separat betrieben. Und die „Quinta Real Palacio de San Agustín" älterer Reiseführer ist das heutige <strong>Hotel Museo Palacio de San Agustín</strong>.
</div>
</section>

<section id="seasons" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Wann die Preise steigen</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Semana Santa (April) — der Höhepunkt im Centro</h3><p class="text-sm text-gray-700">Die Procesión del Silencio (seit 1953, rund 120.000 Besucher) treibt den Centro zur Vollauslastung mit erhöhten Preisen. Hotels entlang der Route (Carranza, Universidad, Madero) sind 2–3 Monate im Voraus ausgebucht.</p></div>
  <div class="bg-white border-l-4 border-amber-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">FENAPO (der ganze August) — der stadtweite Höhepunkt</h3><p class="text-sm text-gray-700">Mexikos nationale Messe (7.–30. August 2026, mit Gratiskonzerten von Katy Perry, Mötley Crüe und weiteren — <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-sky-700 underline">hier das komplette Programm</a>) hebt die Nachfrage stadtweit — die FENAPO 2025 erreichte im Schnitt 45–55 % Hotelauslastung (45–50 % unter der Woche, bis zu ~55 % am Wochenende), laut dem Hotelverband von SLP. Buchen Sie Wochenenden 4–8 Wochen im Voraus; der Hotelverband veröffentlicht jedes Jahr vergünstigte Messepreise.</p></div>
  <div class="bg-white border-l-4 border-emerald-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Dezember–Januar — die Schnäppchensaison</h3><p class="text-sm text-gray-700">Wider Erwarten ist der Dezember in SLP kein Engpass (~53 % Auslastung): Dann tauchen die besten Luxuspreise auf. Kaum jemand weiß das.</p></div>
</div>
</section>

<section id="airport" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Flughafen & Fortbewegung</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der <strong>Flughafen Ponciano Arriaga (SLP)</strong> liegt 17–19 km außerhalb — 25–40 Minuten. Abholungen am Flughafen sind <strong>lizenzierten Festpreis-Taxis</strong> vorbehalten (Schalter in der Ankunft, ~MX$275 in den Centro im Jahr 2026); Uber betreibt eine eigene SLP-Flughafenseite, doch der rechtliche Rahmen ist weiterhin umstritten — die sichere Wahl: lizenziertes Taxi bei der Ankunft, Apps für alles andere. In der Stadt fahren <strong>Uber, DiDi und inDriver</strong> alle (kurze Fahrten ~MX$45–65), und der <strong>MetroRed-BRT ist kostenlos</strong>.</p>
<p class="text-gray-800 leading-relaxed">Hotel gebucht? Unser <a href="/events/this-week" class="text-sky-700 underline font-semibold">Veranstaltungskalender dieser Woche</a>, die <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-sky-700 underline font-semibold">besten Frühstückslokale</a> und unsere <a href="/weekend-getaways" class="text-sky-700 underline font-semibold">Wochenendausflüge</a> (Real de Catorce, die Huasteca) runden die Reise ab.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Häufige Fragen</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welches ist das beste Viertel zum Übernachten in San Luis Potosí?<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Für Erstbesucher der Centro Histórico: ein zu Fuß erkundbarer kolonialer Kern an der UNESCO-Route, durchzogen von einem der längsten Fußgängernetze Lateinamerikas (rund 3 km über Calzada de Guadalupe, Zaragoza und Hidalgo). Geschäftsreisende und Familien bevorzugen meist Lomas, wo Hyatt Regency und Hilton nur Minuten vom Kongresszentrum entfernt liegen — ruhig, aber Sie fahren für alles DiDi/Uber.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wo sollte ich für die FENAPO im August übernachten?<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Nicht direkt am Messegelände — das Recinto Ferial liegt in der Colonia Satélite, einem Viertel, in dem Einheimische nachts nicht zu Fuß unterwegs sind. Übernachten Sie im Korridor Av. Juárez / Highway 57 (Holiday Inn Express, TRYP, ibis, City Express — 7–10 Minuten mit dem Auto) oder irgendwo zentral und fahren Sie mit DiDi oder der MetroRed Línea III zu den Toren. Während der FENAPO 2025 lag die stadtweite Auslastung im Schnitt bei 45–55 % (bis zu ~55 % am Wochenende), laut dem Hotelverband von SLP — buchen Sie Wochenenden dennoch 4–8 Wochen im Voraus und prüfen Sie die vergünstigten FENAPO-Preise des Hotelverbands.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kosten Hotels in San Luis Potosí?<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">An Tagen ohne Veranstaltungen (Preise vom Juli 2026): Hostels $10–25 USD, Budgethotels $30–50, Mittelklasse-Ketten $45–80, Oberklasse $85–130 und die besten Boutique-/Luxussuiten $120–220+. Dezember–Januar ist das günstigste Zeitfenster für Luxushäuser; Semana Santa und August (FENAPO) sind am teuersten.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie komme ich vom Flughafen zu meinem Hotel?<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Flughafen SLP (Ponciano Arriaga) liegt 17–19 km von der Stadt entfernt — 25–40 Minuten. Abholungen am Flughafen sind rechtlich lizenzierten Taxis vorbehalten: Nutzen Sie den Festpreis-Schalter in der Ankunft (~MX$275 in den Centro im Jahr 2026). Uber, DiDi und inDriver fahren überall sonst in der Stadt ganz normal, kurze Fahrten kosten rund MX$45–65.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist der Centro Histórico nachts laut?<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Zimmer zu den Plätzen oder zu den Barstraßen Universidad/San Francisco bekommen am Wochenende Lärm ab — fragen Sie nach einem Zimmer zum Innenhof. Während der Semana Santa ist die Route der Procesión del Silencio (Carranza, Universidad, Madero) überfüllt, und Hotels entlang der Strecke sind Monate im Voraus ausgebucht.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Geprüft im Juli 2026: jedes Hotel anhand seiner offiziellen Kettenseite oder seines Booking/KAYAK-Eintrags („Ab"-Preise, Doppelzimmer, Tage ohne Veranstaltungen); FENAPO-2025-Auslastung von 45–55 % und vergünstigte Messepreise (Hotelverband von SLP via Líder Empresarial, Sept. 2025; fenapo.slp.gob.mx); Vollauslastung in der Semana Santa (ANTENA San Luis); Dezember-Auslastung ~53 % (El Universal SLP); Festpreis-Taxi am Flughafen (OMA/Astrolabio); Betrieb von Uber/DiDi/inDriver und kostenloser MetroRed (El Universal SLP, Pulso). Das Messegelände liegt in der Col. Satélite (Milenio). Hotelpreise ändern sich täglich — behandeln Sie diese als Ausgangswerte.</p>
</section>

<div class="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Wissen Sie schon, was Sie an jedem Reisetag unternehmen?</p>
  <p class="text-sky-100 text-sm mb-4">Jeden Montag senden wir Ihnen die besten Events, Lokale und Pläne in SLP — kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-sky-700 font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Welches ist das beste Viertel zum Übernachten in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für Erstbesucher der Centro Histórico: ein zu Fuß erkundbarer kolonialer Kern an der UNESCO-Route, durchzogen von einem der längsten Fußgängernetze Lateinamerikas (rund 3 km über Calzada de Guadalupe, Zaragoza und Hidalgo). Geschäftsreisende und Familien bevorzugen meist Lomas, wo Hyatt Regency und Hilton nur Minuten vom Kongresszentrum entfernt liegen — ruhig, aber Sie fahren für alles DiDi/Uber."
      }
    },
    {
      "@type": "Question",
      "name": "Wo sollte ich für die FENAPO im August übernachten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nicht direkt am Messegelände — das Recinto Ferial liegt in der Colonia Satélite, einem Viertel, in dem Einheimische nachts nicht zu Fuß unterwegs sind. Übernachten Sie im Korridor Av. Juárez / Highway 57 (Holiday Inn Express, TRYP, ibis, City Express — 7–10 Minuten mit dem Auto) oder irgendwo zentral und fahren Sie mit DiDi oder der MetroRed Línea III zu den Toren. Während der FENAPO 2025 lag die stadtweite Auslastung im Schnitt bei 45–55 % (bis zu ~55 % am Wochenende), laut dem Hotelverband von SLP — buchen Sie Wochenenden dennoch 4–8 Wochen im Voraus und prüfen Sie die vergünstigten FENAPO-Preise des Hotelverbands."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel kosten Hotels in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Tagen ohne Veranstaltungen (Preise vom Juli 2026): Hostels $10–25 USD, Budgethotels $30–50, Mittelklasse-Ketten $45–80, Oberklasse $85–130 und die besten Boutique-/Luxussuiten $120–220+. Dezember–Januar ist das günstigste Zeitfenster für Luxushäuser; Semana Santa und August (FENAPO) sind am teuersten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie komme ich vom Flughafen zu meinem Hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Flughafen SLP (Ponciano Arriaga) liegt 17–19 km von der Stadt entfernt — 25–40 Minuten. Abholungen am Flughafen sind rechtlich lizenzierten Taxis vorbehalten: Nutzen Sie den Festpreis-Schalter in der Ankunft (~MX$275 in den Centro im Jahr 2026). Uber, DiDi und inDriver fahren überall sonst in der Stadt ganz normal, kurze Fahrten kosten rund MX$45–65."
      }
    },
    {
      "@type": "Question",
      "name": "Ist der Centro Histórico nachts laut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zimmer zu den Plätzen oder zu den Barstraßen Universidad/San Francisco bekommen am Wochenende Lärm ab — fragen Sie nach einem Zimmer zum Innenhof. Während der Semana Santa ist die Route der Procesión del Silencio (Carranza, Universidad, Madero) überfüllt, und Hotels entlang der Strecke sind Monate im Voraus ausgebucht."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<div class="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-sky-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-sky-800 text-sm">
    <a href="#areas" class="hover:underline">→ エリア別ガイド</a>
    <a href="#hotels" class="hover:underline">→ 予算別ホテル（表）</a>
    <a href="#seasons" class="hover:underline">→ 料金が上がる時期</a>
    <a href="#airport" class="hover:underline">→ 空港と市内の移動</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-sky-700 italic">料金は2026年7月に確認 · 出典は末尾に記載</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium"><strong>サン・ルイス・ポトシのホテル事情には独特の特徴があります。高級ホテルはどれも真新しく</strong>（旗艦となるタワーは2020年に開業）、それでいて料金は通過都市の水準のまま——メキシコシティのチェーンホテル並みの値段で、宮殿を改装した美術館のようなスイートに泊まれます。旅の目的に合わせた滞在先を、2026年7月に確認した料金とともにご紹介します。</p>

<section id="areas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">エリア別ガイド</h2>
</div>
<div class="space-y-4">

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🏛️ Centro Histórico</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">初めての方・文化・低予算</span></div><p class="text-sm text-gray-700 leading-relaxed">ユネスコの王の道（カミノ・レアル）沿いに広がる、徒歩で回れるコロニアル様式の中心地。約3kmの歩行者専用道路（カルサダ・デ・グアダルーペ〜サラゴサ〜イダルゴ）が街を貫きます。大聖堂、博物館、ウニベルシダー／サン・フランシスコ周辺の生演奏バーまで、すべて徒歩圏内。難点は、週末に広場方面がにぎやかになることと、セマナ・サンタ（聖週間）には完全に満室になることです。</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🍽️ Av. Carranza / Tequisquiapan</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">美食家・ナイトライフ</span></div><p class="text-sm text-gray-700 leading-relaxed">街のレストラン街。飲食店が軒を連ね、生ロックが流れる昔ながらのカンティーナやバーが並びます。ホテルは少なめ（ホテル・パノラマが中心）。東端からはセントロまで徒歩で行けます。</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🏢 Lomas</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">ビジネス・家族連れ・高級</span></div><p class="text-sm text-gray-700 leading-relaxed">高級チェーンホテルが集まるエリア。ハイアット リージェンシーとヒルトンが同じ通りに立ち、プラサ・サン・ルイス（ショッピングモール）やコンベンションセンターまで数分です。静かな住宅街ですが徒歩向きではなく、移動はどこもDiDi／Uber頼み（セントロまで10〜20分）。火〜木はビジネス需要で料金が上がり、週末は下がります。</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🌳 Av. Salvador Nava / Tangamanga</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">多目的の家族連れ</span></div><p class="text-sm text-gray-700 leading-relaxed">フィエスタ・アメリカーナとハンプトン・インが、タンガマンガ第1公園とシタデーラ複合施設（映画館、アイススケート場）のそばに立ちます。セントロと祭り会場のちょうど中間点です。</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🎡 フェナポ（8月）に行くなら</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">フアレス／57号線沿い</span></div><p class="text-sm text-gray-700 leading-relaxed">祭り会場はコロニア・サテリテにあり、夜に歩いたり泊まったりするエリアではありません。現実的な拠点は、フアレス通り／57号線沿いのHoliday Inn Express、TRYP、ibis、City Express（車で7〜10分）か、中心部のホテル＋DiDi／メトロレッド3号線です。</p></div>

  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">🚉 Alameda / 駅周辺</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">訪れる価値はあるが拠点には不向き</span></div><p class="text-sm text-gray-700 leading-relaxed">歴史ある公園と鉄道博物館は日中に立ち寄る価値がありますが、夜になると人けがなくなる通過エリアです。宿泊は、西へ3〜5ブロック入った歩行者エリアの中を選びましょう。</p></div>
</div>
</section>

<section id="hotels" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">予算別ホテル</h2>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">高級・アッパークラス</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">ホテル</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">場所・特徴</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">料金（〜）*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hyatt Regency San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">ロマス地区——市を代表する旗艦タワー（2020年開業、2023年からハイアット）</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$116 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hilton San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">ロマス地区——定番のビジネス高級ホテル</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$86–104 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Fiesta Americana</td>
        <td class="px-4 py-3 text-sm text-gray-600">サルバドール・ナバ通り、タンガマンガ第1公園とシタデーラ複合施設のそば</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$76–122 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel Museo Palacio de San Agustín</td>
        <td class="px-4 py-3 text-sm text-gray-600">セントロ——美術館級の宮殿にある、大人限定のスイート</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$122–215 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Real Inn (Camino Real group)</td>
        <td class="px-4 py-3 text-sm text-gray-600">ラ・ロマ、ゴルフクラブのそば——車があれば便利な静かな高級ホテル</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$60–86 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">セントロのブティックホテル</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">ホテル</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">場所・特徴</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">料金（〜）*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Casa Maka</td>
        <td class="px-4 py-3 text-sm text-gray-600">大聖堂まで徒歩3分</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$96–137 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">City Centro by Marriott</td>
        <td class="px-4 py-3 text-sm text-gray-600">屋上プールを備えた復元された歴史的建物（アルダマ405）</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$80–100 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Gran Hotel Concordia</td>
        <td class="px-4 py-3 text-sm text-gray-600">改装された由緒あるグランドホテル、宿泊者評価9.2</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$49 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">中級チェーン</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">ホテル</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">場所・特徴</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">料金（〜）*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">NH San Luis Potosí</td>
        <td class="px-4 py-3 text-sm text-gray-600">カランサ通りの端からセントロまで徒歩10分</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$62 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel Panorama</td>
        <td class="px-4 py-3 text-sm text-gray-600">カランサ通り沿い、広場に面した——立地の定番</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$48–54 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hampton Inn by Hilton</td>
        <td class="px-4 py-3 text-sm text-gray-600">サルバドール・ナバ通り沿い（セントロへは車）</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">要確認</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Holiday Inn Express</td>
        <td class="px-4 py-3 text-sm text-gray-600">フアレス通り沿い——フェナポに便利な拠点</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$45 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">City Express by Marriott ZI / ibis / TRYP by Wyndham</td>
        <td class="px-4 py-3 text-sm text-gray-600">57号線・工業地帯沿い——祭り会場に最も近い（7〜8分）</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$50–74 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Staybridge Suites</td>
        <td class="px-4 py-3 text-sm text-gray-600">コンベンションセンターとアレナ・ポトシに近い長期滞在向けスイート</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$75 USD</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">低予算・ホステル（セントロ）</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">ホテル</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">場所・特徴</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">料金（〜）*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sukha Hostel</td>
        <td class="px-4 py-3 text-sm text-gray-600">朝食付きドミトリー、バー街のすぐそば</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">ドミトリー ~$10–14 USD</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Hostal San Pancho</td>
        <td class="px-4 py-3 text-sm text-gray-600">大聖堂まで徒歩8分</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$17 USD</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Casa Morelos StayHouse</td>
        <td class="px-4 py-3 text-sm text-gray-600">共用キッチン付きの個室</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">~$20 USD</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">*2026年7月時点の「〜から」料金（Booking／KAYAK／公式サイト、ダブルルーム、イベントのない日）——フェナポやセマナ・サンタの期間は上がります。予約時にご確認ください。</p>
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
  <strong>古いレビューに惑わされないための注意：</strong>レアル・デ・ロマス290のタワーは2020年に<em>ヒルトン・タワー</em>として開業し、<strong>2023年にハイアット リージェンシー</strong>になりました——「ヒルトン・タワー」や「コンラッド」と書かれたブログは、現在のハイアットを指しています。従来のヒルトン（レアル・デ・ロマス1000）は今も別に営業しています。また、古いガイドの「キンタ・レアル・パラシオ・デ・サン・アグスティン」は、現在の<strong>Hotel Museo Palacio de San Agustín</strong>です。
</div>
</section>

<section id="seasons" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">料金が上がる時期</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">セマナ・サンタ（4月）——セントロのピーク</h3><p class="text-sm text-gray-700">沈黙の行列（プロセシオン・デル・シレンシオ、1953年から続き、来場者約12万人）により、セントロは満室となり料金も上がります。ルート沿いのホテル（カランサ、ウニベルシダー、マデロ）は2〜3か月前に売り切れます。</p></div>
  <div class="bg-white border-l-4 border-amber-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">フェナポ（8月いっぱい）——市全体のピーク</h3><p class="text-sm text-gray-700">メキシコの国民的な祭り（2026年8月7〜30日、ケイティ・ペリーやモトリー・クルーらの無料コンサートあり——<a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-sky-700 underline">ラインナップの詳細はこちら</a>）が市全体の需要を押し上げます——フェナポ2025のホテル稼働率は平均45〜55％（平日45〜50％、週末は最大約55％）でした（SLPホテル協会による）。週末は4〜8週間前に予約を。ホテル協会は毎年、祭り期間の割引料金を発表します。</p></div>
  <div class="bg-white border-l-4 border-emerald-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">12月〜1月——お得な時期</h3><p class="text-sm text-gray-700">意外にも、SLPでは12月は混雑しません（稼働率約53％）。高級ホテルの最安値が出るのはこの時期です。ほとんど誰も知りません。</p></div>
</div>
</section>

<section id="airport" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">空港と市内の移動</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4"><strong>ポンシアノ・アリアガ（SLP）空港</strong>は市街から17〜19km、25〜40分の距離です。空港からの送迎は<strong>認可された定額タクシー</strong>が担います（到着ロビーのカウンター、2026年でセントロまで約MX$275）。UberはSLP空港のページを設けていますが、法的枠組みはいまだ係争中です——無難なのは、到着時は認可タクシー、それ以外はアプリという使い分けです。市内では<strong>Uber、DiDi、inDriver</strong>がいずれも利用でき（短距離は約MX$45–65）、<strong>メトロレッドのBRTは無料</strong>です。</p>
<p class="text-gray-800 leading-relaxed">ホテルは決まりましたか？　<a href="/events/this-week" class="text-sky-700 underline font-semibold">今週のイベント情報</a>、<a href="/blog/best-brunch-spots-san-luis-potosi" class="text-sky-700 underline font-semibold">おすすめの朝食スポット</a>、そして<a href="/weekend-getaways" class="text-sky-700 underline font-semibold">週末の小旅行</a>（レアル・デ・カトルセ、ワステカ地方）が旅を締めくくります。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシで宿泊するのに最適なエリアは？<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">初めて訪れる方にはセントロ・イストリコ。ユネスコの街道沿いにある、徒歩で回れるコロニアル様式の中心地で、ラテンアメリカでも有数の長さを誇る歩行者ネットワーク（カルサダ・デ・グアダルーペ、サラゴサ、イダルゴを通る約3km）が通っています。ビジネス客や家族連れはたいていロマス地区を好みます。ハイアット リージェンシーとヒルトンがコンベンションセンターから数分の場所にあり、静かですが、移動はどこもDiDi／Uber頼みになります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">8月のフェナポにはどこに泊まるべき？<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">祭り会場のそばは避けましょう——会場（レシント・フェリアル）はコロニア・サテリテにあり、地元の人が夜に歩くのを避けるエリアです。フアレス通り／57号線沿い（Holiday Inn Express、TRYP、ibis、City Express——車で7〜10分）に泊まるか、中心部のどこかに泊まってDiDiやメトロレッド3号線で会場へ向かいましょう。フェナポ2025の市全体の稼働率は平均45〜55％（週末は最大約55％）でした（SLPホテル協会による）——それでも週末は4〜8週間前に予約し、ホテル協会のフェナポ割引料金を確認してください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシのホテル料金はどれくらい？<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">イベントのない日（2026年7月時点の料金）：ホステル$10–25 USD、格安ホテル$30–50、中級チェーン$45–80、高級$85–130、最上級のブティック／ラグジュアリースイート$120–220+。高級ホテルが最も安いのは12月〜1月で、セマナ・サンタと8月（フェナポ）が最も高くなります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">空港からホテルへはどう行けばいい？<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">SLP空港（ポンシアノ・アリアガ）は市街から17〜19km、25〜40分です。空港からの送迎は法律で認可タクシーに限られています。到着ロビーの定額カウンターをご利用ください（2026年でセントロまで約MX$275）。Uber、DiDi、inDriverは市内のそれ以外の場所では通常どおり利用でき、短距離はおおよそMX$45–65です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">セントロ・イストリコは夜うるさい？<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">広場側やウニベルシダー／サン・フランシスコのバー通りに面した部屋は週末に騒がしくなります——中庭側の部屋をリクエストしましょう。セマナ・サンタの期間は沈黙の行列のルート（カランサ、ウニベルシダー、マデロ）が混み合い、沿道のホテルは数か月前に売り切れます。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に確認：各ホテルは公式チェーンサイトまたはBooking／KAYAKの掲載情報（「〜から」料金、ダブルルーム、イベントのない日）に基づく。フェナポ2025の稼働率45〜55％と祭り期間の割引料金（SLPホテル協会、Líder Empresarial経由、2025年9月、fenapo.slp.gob.mx）。セマナ・サンタの満室（ANTENA San Luis）。12月の稼働率約53％（El Universal SLP）。空港の定額タクシー料金（OMA／Astrolabio）。Uber／DiDi／inDriverの運行と無料のメトロレッド（El Universal SLP、Pulso）。祭り会場はコロニア・サテリテにあり（Milenio）。ホテル料金は日々変動します——これらは目安としてご利用ください。</p>
</section>

<div class="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">旅の毎日の予定はもう決まっていますか？</p>
  <p class="text-sky-100 text-sm mb-4">毎週月曜、SLPのベストなイベント・グルメ・プランをお届けします——無料です。</p>
  <a href="/subscribe" class="inline-block bg-white text-sky-700 font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシで宿泊するのに最適なエリアは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "初めて訪れる方にはセントロ・イストリコ。ユネスコの街道沿いにある、徒歩で回れるコロニアル様式の中心地で、ラテンアメリカでも有数の長さを誇る歩行者ネットワーク（カルサダ・デ・グアダルーペ、サラゴサ、イダルゴを通る約3km）が通っています。ビジネス客や家族連れはたいていロマス地区を好みます。ハイアット リージェンシーとヒルトンがコンベンションセンターから数分の場所にあり、静かですが、移動はどこもDiDi／Uber頼みになります。"
      }
    },
    {
      "@type": "Question",
      "name": "8月のフェナポにはどこに泊まるべき？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "祭り会場のそばは避けましょう——会場（レシント・フェリアル）はコロニア・サテリテにあり、地元の人が夜に歩くのを避けるエリアです。フアレス通り／57号線沿い（Holiday Inn Express、TRYP、ibis、City Express——車で7〜10分）に泊まるか、中心部のどこかに泊まってDiDiやメトロレッド3号線で会場へ向かいましょう。フェナポ2025の市全体の稼働率は平均45〜55％（週末は最大約55％）でした（SLPホテル協会による）——それでも週末は4〜8週間前に予約し、ホテル協会のフェナポ割引料金を確認してください。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシのホテル料金はどれくらい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "イベントのない日（2026年7月時点の料金）：ホステル$10–25 USD、格安ホテル$30–50、中級チェーン$45–80、高級$85–130、最上級のブティック／ラグジュアリースイート$120–220+。高級ホテルが最も安いのは12月〜1月で、セマナ・サンタと8月（フェナポ）が最も高くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "空港からホテルへはどう行けばいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SLP空港（ポンシアノ・アリアガ）は市街から17〜19km、25〜40分です。空港からの送迎は法律で認可タクシーに限られています。到着ロビーの定額カウンターをご利用ください（2026年でセントロまで約MX$275）。Uber、DiDi、inDriverは市内のそれ以外の場所では通常どおり利用でき、短距離はおおよそMX$45–65です。"
      }
    },
    {
      "@type": "Question",
      "name": "セントロ・イストリコは夜うるさい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "広場側やウニベルシダー／サン・フランシスコのバー通りに面した部屋は週末に騒がしくなります——中庭側の部屋をリクエストしましょう。セマナ・サンタの期間は沈黙の行列のルート（カランサ、ウニベルシダー、マデロ）が混み合い、沿道のホテルは数か月前に売り切れます。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  console.log(`\n===== ${SLUG} =====`);
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
    .eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_de and content_ja.');

  // Verify: re-fetch.
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
  const jsonldOf = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    return m ? m[1] : null;
  };

  let ok = true;
  const en = check.content;
  console.log(`\nTag counts — EN: ${tagCount(en)}, DE: ${tagCount(check.content_de)}, JA: ${tagCount(check.content_ja)}`);
  if (tagCount(en) !== tagCount(check.content_de)) { console.error('  DE tag count mismatch'); ok = false; }
  if (tagCount(en) !== tagCount(check.content_ja)) { console.error('  JA tag count mismatch'); ok = false; }

  if (check.content_de === en) { console.error('  DE identical to EN'); ok = false; }
  if (check.content_ja === en) { console.error('  JA identical to EN'); ok = false; }

  for (const [lang, html] of [['DE', check.content_de], ['JA', check.content_ja]]) {
    const raw = jsonldOf(html);
    try {
      JSON.parse(raw);
      console.log(`  ${lang} JSON-LD: valid`);
    } catch (e) {
      console.error(`  ${lang} JSON-LD INVALID: ${e.message}`);
      ok = false;
    }
  }

  // Leftover-English heuristic: flag common English words in prose text nodes.
  const englishMarkers = ['the city', 'walkable', 'Book weekends', 'occupancy', 'Verify when booking', 'first-time'];
  for (const [lang, html] of [['DE', check.content_de], ['JA', check.content_ja]]) {
    const hits = englishMarkers.filter((w) => html.includes(w));
    if (hits.length) { console.error(`  ${lang} leftover English: ${hits.join(', ')}`); ok = false; }
    else console.log(`  ${lang}: no leftover-English markers`);
  }

  const words = (s) => (s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length);
  const chars = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, '').length;
  console.log(`\nDE word count (whitespace): ${words(check.content_de)}`);
  console.log(`JA char count (non-space, non-tag): ${chars(check.content_ja)}`);

  console.log(ok ? '\nVERIFIED: all checks passed.' : '\nPROBLEMS found — review output.');
  process.exit(ok ? 0 : 1);
}

main();
