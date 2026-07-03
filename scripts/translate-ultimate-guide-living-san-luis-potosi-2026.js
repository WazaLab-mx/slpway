// Native DE + JA translations for the flagship guide
// `ultimate-guide-living-san-luis-potosi-2026` (idempotent).
// Replaces the English-mirror content_de / content_ja by slug.
// HTML tags/attributes/classes/ids/links preserved exactly; only text nodes
// translated. Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'ultimate-guide-living-san-luis-potosi-2026';

const content_de = `<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"FAQPage","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#faq","mainEntity":[{"@type":"Question","name":"Wie viel kostet das Leben in San Luis Potosí im Jahr 2026?","acceptedAnswer":{"@type":"Answer","text":"Ein komfortabler Lebensstil der Mittelschicht kostet 1.200–2.000 USD pro Monat für eine Einzelperson, 1.800–2.500 USD für ein Paar und 2.400–3.500 USD für eine vierköpfige Familie. Ein digitaler Nomade mit fester Coworking-Mitgliedschaft kalkuliert in der Regel 1.800 USD/Monat ein. Die Zahlen wurden anhand von Numbeo (Aktualisierung Januar 2026) und lokalen Angeboten überprüft."}},{"@type":"Question","name":"Ist San Luis Potosí sicher für Touristen und Nomaden?","acceptedAnswer":{"@type":"Answer","text":"Das US-Außenministerium stuft San Luis Potosí auf Level 2 ein — Erhöhte Vorsicht walten lassen, dieselbe Stufe wie Frankreich. Die Stadt selbst gehört zu den sichereren mittelgroßen Städten Mexikos. Kleinkriminalität ist das Hauptproblem; Gewaltverbrechen sind in den Vierteln, in denen sich ausländische Bewohner konzentrieren, selten."}},{"@type":"Question","name":"Kann ich in San Luis Potosí leben, ohne Spanisch zu sprechen?","acceptedAnswer":{"@type":"Answer","text":"Nur mit erheblichen Reibungsverlusten. Anders als San Miguel de Allende verfügt SLP über eine begrenzte englischsprachige Infrastruktur. Die meisten Ärzte, Vermieter und Behörden arbeiten auf Spanisch. Grundlegende Spanischkenntnisse (Niveau A2) sind nach sechs Monaten Immersion realistisch."}},{"@type":"Question","name":"Welches ist das beste Visum für einen digitalen Nomaden in San Luis Potosí?","acceptedAnswer":{"@type":"Answer","text":"Für Aufenthalte unter 180 Tagen ist die Touristen-FMM kostenlos und automatisch. Für längere Aufenthalte ist das Visum für befristeten Aufenthalt (Temporary Resident, 1–4 Jahre) der Standardweg. Ab 2026 benötigen Sie ein Einkommen von ~4.185 USD/Monat über 6–12 Monate oder ~69.750 USD an Ersparnissen. Die staatlichen Gebühren haben sich im November 2025 in etwa verdoppelt."}},{"@type":"Question","name":"Wie zuverlässig ist das Internet in San Luis Potosí?","acceptedAnswer":{"@type":"Answer","text":"Sehr zuverlässig. Glasfaser-Internet mit 100–500 Mbps ist über Izzi, Totalplay und Megacable in Centro, Lomas, Tangamanga und den meisten Vierteln der Mittelschicht verfügbar. Die monatlichen Kosten liegen bei 32–50 USD für 200+ Mbps."}},{"@type":"Question","name":"Wie komme ich nach San Luis Potosí?","acceptedAnswer":{"@type":"Answer","text":"Der internationale Flughafen Ponciano Arriaga (SLP) bietet Direktflüge aus Houston (United), Dallas (American, Volaris) und Mexiko-Stadt. Querétaro (QRO) und León (BJX) sind jeweils 2,5–3 Stunden mit dem Auto oder dem Erste-Klasse-Bus entfernt."}},{"@type":"Question","name":"Wann ist die beste Reisezeit für San Luis Potosí?","acceptedAnswer":{"@type":"Answer","text":"Oktober bis März für trockenes, mildes Wetter. Ende März für die Procesión del Silencio. Ende Juni für den BMW Maratón Tangamanga. Meiden Sie Mitte Juli bis August wegen des Andrangs bei der FENAPO und der Schulferien."}},{"@type":"Question","name":"Kann ich in San Luis Potosí Leitungswasser trinken?","acceptedAnswer":{"@type":"Answer","text":"Nein. Verwenden Sie garrafones (20-Liter-Kanister mit gereinigtem Wasser), die für etwa 35–50 MXN nach Hause geliefert werden. Restaurants der mittleren Preisklasse verwenden gereinigtes Eis und Wasser."}}]},{"@type":"BreadcrumbList","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#breadcrumbs","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://www.sanluisway.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.sanluisway.com/blog"},{"@type":"ListItem","position":3,"name":"Der ultimative Leitfaden für San Luis Potosí 2026","item":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026"}]},{"@type":"Article","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#article","headline":"Der ultimative Leitfaden für San Luis Potosí 2026: Für Expats, digitale Nomaden & Reisende","datePublished":"2026-03-17","dateModified":"2026-03-17","author":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"publisher":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"inLanguage":"de","speakable":{"@type":"SpeakableSpecification","cssSelector":[".speakable","#quick-summary","#faq-heading"]},"citation":[{"@type":"CreativeWork","name":"Numbeo — San Luis Potosí Cost of Living","url":"https://www.numbeo.com/cost-of-living/in/San-Luis-Potosi"},{"@type":"CreativeWork","name":"Mexperience — Mexico Residency 2026","url":"https://www.mexperience.com/mexico-residency-in-2026-tighter-criteria-higher-fees/"},{"@type":"CreativeWork","name":"Mexico Relocation Guide — 2026 Income Requirements","url":"https://mexicorelocationguide.com/mexican-residency-income-requirements-updates-in-2026/"},{"@type":"CreativeWork","name":"nomads.com — SLP Coworking Directory","url":"https://nomads.com/coworking/san-luis-potosi"}]}]}
</script>
<div class="not-prose mb-8">
  <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-hero.png" alt="San Luis Potosí Centro Histórico zur goldenen Stunde — Leitfaden für Expats, digitale Nomaden und Touristen 2026" class="w-full h-full object-cover" loading="eager" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
      <div class="p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-3">Der ultimative Leitfaden für San Luis Potosí 2026</h1>
        <p class="text-lg md:text-xl text-white/90">Für Expats, digitale Nomaden und Slow Traveller, die in Mexikos bestgehütetes Geheimnis im Bajío ziehen</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
  <h3 class="text-xl font-bold mb-3 text-blue-900">📑 In diesem Deep Dive</h3>
  <nav class="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800">
    <a href="#overview" class="hover:underline">→ Auf einen Blick: SLP im Jahr 2026</a>
    <a href="#audience" class="hover:underline">→ Für wen dieser Leitfaden gedacht ist</a>
    <a href="#cost" class="hover:underline">→ Lebenshaltungskosten 2026</a>
    <a href="#visas" class="hover:underline">→ Änderungen bei Visum &amp; Aufenthalt</a>
    <a href="#neighborhoods" class="hover:underline">→ Stadtviertel</a>
    <a href="#nomads" class="hover:underline">→ Die Szene der digitalen Nomaden</a>
    <a href="#tourists" class="hover:underline">→ Das Wichtigste für Touristen</a>
    <a href="#healthcare" class="hover:underline">→ Gesundheitsversorgung &amp; Bankwesen</a>
    <a href="#food-culture" class="hover:underline">→ Essen &amp; Kultur</a>
    <a href="#community" class="hover:underline">→ Gemeinschaft &amp; soziales Leben</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
    <a href="#sources" class="hover:underline">→ Quellen</a>
  </nav>
  <p class="mt-4 text-sm text-blue-700 italic">Geschätzte Lesezeit: 18 Minuten · Zuletzt geprüft: 17. März 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosí ist kein Geheimnis mehr.</strong> In den letzten drei Jahren hat sich die Stadt, die Einheimische „SLP“ nennen, still und leise zu einem der interessantesten Ziele Mexikos für Menschen aus dem Ausland entwickelt — ob für ein Jahr, ein Jahrzehnt oder ein langes Wochenende. Dies ist die Aktualisierung 2026 unseres umfassenden Leitfadens zum Leben vor Ort, von Grund auf neu erstellt mit aktuellen Preisen (überprüft im Januar–März 2026), den neuen Visabestimmungen, die nach Mexikos UMA-Reform von 2025 in Kraft traten, und einer neuen Perspektive: In diesem Jahr richtet sich der Leitfaden auch direkt an digitale Nomaden und Touristen, die inzwischen das Bajío überschwemmen.
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Wenn Sie unsere Version von 2025 gelesen haben, werden Ihnen die veränderten Zahlen auffallen. Die Mieten im Centro Histórico sind im Jahresvergleich um etwa 15 % gestiegen. Der Peso hat gegenüber dem US-Dollar an Wert gewonnen (~17,5 MXN/USD im März 2026, gegenüber ~20 Ende 2024). Die Einkommensgrenzen für Visa haben sich in relevanter Weise geändert. Und die Coworking-Szene von SLP hat sich seit unserer letzten Zählung mehr als verdoppelt — von rund 25 Räumen im Jahr 2024 auf 51 zu Beginn des Jahres 2026, laut dem Tracker von nomads.com.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 id="quick-summary" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Auf einen Blick: San Luis Potosí im Jahr 2026</h2>
</div>

<div class="speakable bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 md:p-8 mb-8">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
    <strong>San Luis Potosí ist die Hauptstadt des Bundesstaates San Luis Potosí in Mexiko.</strong> In der zentralen Bajío-Region auf 1.864 Metern Höhe gelegen, ist es eine UNESCO-Welterbestadt (als Teil des Camino Real de Tierra Adentro, 2010) und beherbergt in der Metropolregion rund 1,31 Millionen Menschen. Die Stadt verbindet koloniale Architektur aus rosafarbenem cantera-Stein mit einer starken modernen Industriebasis — BMW, General Motors, Valeo, Continental und über 350 internationale Unternehmen der Automobilbranche sind im Bundesstaat tätig. Für Ausländer, die 2026 ankommen, bietet SLP bei vergleichbarer Lebensqualität rund 35–50 % niedrigere Lebenshaltungskosten als Mexiko-Stadt, keine touristische Übersättigung, Direktflüge nach Houston und Dallas sowie ein authentisches mexikanisches Stadterlebnis.
  </p>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">Bevölkerung Metropolregion</p><p class="font-bold text-gray-900">~1,31 Millionen</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">Höhe</p><p class="font-bold text-gray-900">1.864 m / 6.115 ft</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">Klima</p><p class="font-bold text-gray-900">Semiarid, ~20 °C Ø</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">MXN/USD (März 2026)</p><p class="font-bold text-gray-900">~17,5</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">Komfortables Budget</p><p class="font-bold text-gray-900">1.200–2.000 USD/Mon.</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">Flughafencode</p><p class="font-bold text-gray-900">SLP (direkt in die USA)</p></div>
  </div>
</div>
</section>

<section id="audience" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Für wen dieser Leitfaden gedacht ist</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Historisch behandelten Inhalte über SLP „Expats“ als eine einzige Kategorie: Amerikaner und Kanadier, die sich in Mexiko zur Ruhe setzen. Diese Sichtweise ist inzwischen überholt. Im Jahr 2026 kommen drei unterschiedliche Profile an, jedes mit anderen Bedürfnissen, Budgets und Zeithorizonten. Dieser Leitfaden spricht alle drei an.
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
  <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">🏠</div>
    <h3 class="text-xl font-bold text-blue-900 mb-2">Expat-Bewohner</h3>
    <p class="text-sm text-blue-900 mb-3">Bleiben 1–10+ Jahre. Prioritäten: Aufenthaltsvisum, Gesundheitsversorgung, Schulen, langfristige Miete.</p>
    <p class="text-xs text-blue-700 font-semibold">Typisches Budget: 1.500–3.000 USD/Mon.</p>
  </div>
  <div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">💻</div>
    <h3 class="text-xl font-bold text-purple-900 mb-2">Digitale Nomaden</h3>
    <p class="text-sm text-purple-900 mb-3">Bleiben 1–6 Monate. Prioritäten: Glasfaser-Internet, Coworking, Cafés mit WLAN, Monatsmieten, Gemeinschaft.</p>
    <p class="text-xs text-purple-700 font-semibold">Typisches Budget: 1.800–2.500 USD/Mon.</p>
  </div>
  <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">🎒</div>
    <h3 class="text-xl font-bold text-amber-900 mb-2">Touristen &amp; Slow Traveller</h3>
    <p class="text-sm text-amber-900 mb-3">Bleiben 3 Tage bis 3 Wochen. Prioritäten: Was man sehen, wo man essen sollte, Tagesausflüge in die Huasteca Potosina.</p>
    <p class="text-xs text-amber-700 font-semibold">Typisches Budget: 60–120 USD/Tag</p>
  </div>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Falls Sie diesen Leitfaden lesen, weil Sie beim allgemeinen Recherchieren über Mexiko darauf gestoßen sind, sollten Sie Folgendes wissen: SLP liegt im Zentrum eines Dreiecks aus Mexiko-Stadt, Guadalajara und Monterrey. Es ist der logische nächste Schritt für alle, die bereits San Miguel de Allende oder Guanajuato besucht haben und das koloniale Mexiko ohne Touristenaufschlag erleben möchten. Es ist zudem das am schnellsten wachsende Industriezentrum der Automobilbranche im Land — was zählt, wenn Sie eher wegen der Arbeit als zum Vergnügen hier sind.
</p>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="cost" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Lebenshaltungskosten: die Zahlen für 2026, geprüft</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-cost-dashboard.png" alt="Vergleich der monatlichen Lebenshaltungskosten in San Luis Potosí 2026 — Solo-Expat, digitaler Nomade, vierköpfige Familie" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">
    Abbildung 1: Monatliche Spannen der Lebenshaltungskosten nach Zielgruppenprofil. Alle Zahlen wurden anhand von Numbeo (Aktualisierung Januar 2026, n=20 Beitragende) überprüft und mit Expatistan sowie lokalen Angeboten abgeglichen.
  </figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die ehrliche Antwort auf „Wie viel kostet das Leben in SLP“ hängt stark von drei Faktoren ab: welches Viertel Sie wählen, ob Sie Klimaanlage und privaten Parkplatz wünschen und wie oft Sie mexikanisch statt international essen. Die nachstehenden Zahlen spiegeln die Marktlage von Januar–März 2026 bei einem Wechselkurs von 17,5 MXN pro USD wider.
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-blue-600 to-blue-700">
      <tr>
        <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Ausgabe</th>
        <th class="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">MXN</th>
        <th class="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">USD</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-6 py-3 font-medium text-gray-900">1-Zimmer-Wohnung im Stadtzentrum</td><td class="px-6 py-3 text-right text-gray-700">$11,800</td><td class="px-6 py-3 text-right text-gray-700">$674</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">1-Zimmer-Wohnung außerhalb des Zentrums</td><td class="px-6 py-3 text-right text-gray-700">$8,440</td><td class="px-6 py-3 text-right text-gray-700">$482</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">3-Zimmer-Wohnung im Zentrum</td><td class="px-6 py-3 text-right text-gray-700">$21,333</td><td class="px-6 py-3 text-right text-gray-700">$1,219</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">Grundnebenkosten (85 m²)</td><td class="px-6 py-3 text-right text-gray-700">$797</td><td class="px-6 py-3 text-right text-gray-700">$46</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">Internet (60+ Mbps Glasfaser)</td><td class="px-6 py-3 text-right text-gray-700">$567</td><td class="px-6 py-3 text-right text-gray-700">$32</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">Monatliche Nahverkehrskarte</td><td class="px-6 py-3 text-right text-gray-700">$1,304</td><td class="px-6 py-3 text-right text-gray-700">$75</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">Mahlzeit in günstigem Restaurant</td><td class="px-6 py-3 text-right text-gray-700">$220</td><td class="px-6 py-3 text-right text-gray-700">$13</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">Mahlzeit für zwei, mittlere Preisklasse</td><td class="px-6 py-3 text-right text-gray-700">$725</td><td class="px-6 py-3 text-right text-gray-700">$41</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">Benzin (1 Liter)</td><td class="px-6 py-3 text-right text-gray-700">$24.92</td><td class="px-6 py-3 text-right text-gray-700">$1.42</td></tr>
      <tr class="bg-green-50 font-semibold"><td class="px-6 py-3">Durchschnittliches Nettomonatsgehalt (lokal)</td><td class="px-6 py-3 text-right text-gray-900">$15,825</td><td class="px-6 py-3 text-right text-green-700">$904</td></tr>
    </tbody>
  </table>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die Angabe zum durchschnittlichen lokalen Gehalt ist ein wichtiger Kontext. Anders als in Mexiko-Stadt, wo Expat-Einkommen unter Fachkräften verbreitet sind, verdienen die meisten Bewohner in SLP mexikanische Pesos von mexikanischen Arbeitgebern. Das verschafft jedem, der in USD, EUR oder CAD verdient, einen erheblichen Hebel: Ein monatliches Budget von 2.000 USD hebt Sie deutlich über den lokalen Median.
</p>

<div class="not-prose my-10 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8">
  <h4 class="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-3"><span class="text-2xl">💡</span> Profi-Tipps für 2026</h4>
  <div class="space-y-3">
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">Zahlen Sie die Miete in Pesos, nicht in Dollar</p>
      <p class="text-gray-700 text-sm">Vermieter, die in USD kalkulieren, schlagen 10–15 % auf. Verhandeln Sie Verträge ausschließlich in Pesos. Wenn Sie als Nomade monatlich zahlen, bitten Sie um 10 % „estancia“-Rabatt bei Vorauszahlung von drei Monaten.</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">Meiden Sie Airbnb bei mehr als 30 Tagen</p>
      <p class="text-gray-700 text-sm">Airbnb liegt in SLP im Monat durchschnittlich 60–80 % über Direktmieten. Nutzen Sie für Aufenthalte über vier Wochen Inmuebles24.com oder den Facebook Marketplace.</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">CFE und Wasser sind nicht verhandelbar — aber beim Internet können Sie vergleichen</p>
      <p class="text-gray-700 text-sm">Izzi, Totalplay und Megacable bieten in Centro, Lomas und Tangamanga jeweils 200+ Mbps Glasfaser für etwa 32–50 USD/Monat. Telmex ist veraltet; überspringen Sie es, sofern in Ihrer Straße keine Glasfaser verfügbar ist.</p>
    </div>
  </div>
</div>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="visas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Visum &amp; Aufenthalt: Was sich 2025–2026 geändert hat</h2>
</div>

<div class="not-prose my-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
  <p class="text-red-900"><strong>⚠️ Große Änderung:</strong> Im Herbst 2025 verabschiedete der mexikanische Kongress ein Gesetz, das die staatlichen Bearbeitungsgebühren für Aufenthaltsvisa und -karten verdoppelt. Die neue Gebührenordnung trat am 7. November 2025 in Kraft. Berücksichtigen Sie dies in Ihrem Budget für 2026.</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Mexikos Aufenthaltssystem hat zwischen unseren Leitfäden von 2025 und 2026 zwei wesentliche Änderungen erfahren. Die erste ist verfahrenstechnisch: Seit Juli 2025 sind die mexikanischen Konsulate angewiesen, die wirtschaftliche Solvenz anhand der <strong>UMA</strong> (Unidad de Medida y Actualización) statt des täglichen Mindestlohns zu berechnen. Diese Umstellung ist bedeutsam, weil der Mindestlohn zuletzt jährlich um über 12 % gestiegen ist, während die UMA nur um 3–5 % pro Jahr klettert. Für 2026 beträgt die UMA 117,31 MXN pro Tag — ein Anstieg von 3,69 % gegenüber den 113,14 MXN des Jahres 2025.
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die zweite Änderung ist finanzieller Natur: Die staatlichen Gebühren für Visa und Aufenthaltskarten haben sich mit Wirkung ab November 2025 in etwa verdoppelt. Eine Karte für befristeten Aufenthalt, die Ende 2024 rund 5.570 MXN kostete, liegt nun für eine Ein-Jahres-Karte näher bei 11.000 MXN. Kalkulieren Sie entsprechend.
</p>

<h3 id="visa-pathways" class="text-2xl font-bold text-gray-900 mb-4">Die vier Wege im Jahr 2026</h3>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-purple-600 to-purple-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Visumart</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Dauer</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Einkommens- / Vermögensgrenze</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Am besten für</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-medium">Tourist (FMM)</td><td class="px-5 py-3 text-gray-700">Bis zu 180 Tage</td><td class="px-5 py-3 text-gray-700">Keine</td><td class="px-5 py-3 text-gray-700">Kurzreisen, Nomaden, die SLP testen</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-medium">Befristeter Aufenthalt</td><td class="px-5 py-3 text-gray-700">1–4 Jahre</td><td class="px-5 py-3 text-gray-700">~4.185 USD/Monat Einkommen ODER ~69.750 USD Ersparnisse</td><td class="px-5 py-3 text-gray-700">Remote-Arbeitende, mittelfristige Aufenthalte</td></tr>
      <tr><td class="px-5 py-3 font-medium">Dauerhafter Aufenthalt</td><td class="px-5 py-3 text-gray-700">Unbefristet</td><td class="px-5 py-3 text-gray-700">Höhere Grenzen; auch über Ruhestand oder 4 Jahre befristeten Aufenthalt</td><td class="px-5 py-3 text-gray-700">Ruheständler, Langzeitbewohner</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-medium">Arbeitsvisum</td><td class="px-5 py-3 text-gray-700">1–4 Jahre</td><td class="px-5 py-3 text-gray-700">An ein Stellenangebot des Arbeitgebers gebunden</td><td class="px-5 py-3 text-gray-700">Versetzte Beschäftigte von BMW, GM, Valeo, Continental</td></tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-600 italic mt-3">Grenzwerte entnommen aus dem Aufenthalts-Briefing 2026 von Mexperience und der Post-UMA-Analyse des Mexico Relocation Guide (siehe Quellen).</p>
</div>

<div class="not-prose my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
  <p class="text-amber-900"><strong>📌 Digitale Nomaden, aufgepasst:</strong> Aus der Ferne mit einer Touristen-FMM zu arbeiten, ist nach mexikanischem Einwanderungsrecht technisch eine Grauzone. Die Durchsetzung ist bei Ausländern, die aus dem Ausland verdienen, minimal, doch wenn Sie länger als 90 Tage bleiben, ein mexikanisches Bankkonto eröffnen oder einen Mietvertrag unterschreiben möchten, ist der Weg über den befristeten Aufenthalt deutlich sauberer. Die Grenze von 4.185 USD/Monat ist für die meisten Remote-Arbeitenden mit USD-Gehalt erreichbar.</p>
</div>
</section>

<section id="neighborhoods" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Wo Sie wohnen sollten: Viertel nach Profil</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-neighborhoods.png" alt="Drei Viertel von San Luis Potosí nebeneinander: Kopfsteinpflasterstraßen im Centro Histórico, gehobene Wohnanlage Lomas, an den Park angrenzendes Viertel Tangamanga" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Abbildung 2: Die drei Vorzeigeviertel für ausländische Bewohner — Centro Histórico (links), Lomas (Mitte), Tangamanga (rechts).</figcaption>
</figure>

<div class="not-prose space-y-6 my-10">
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Centro Histórico</h3>
      <span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold">Am besten für Nomaden &amp; Kultur</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">Das von der UNESCO ausgezeichnete historische Zentrum. Fußläufig, mit Kopfsteinpflaster, voller Cafés und Restaurants. Glasfaser-Internet überall verfügbar. Coworking-Räume wie <strong>Entidad Nómada</strong> liegen direkt im Kern. Am besten, wenn Sie ohne Auto leben und täglich koloniale Architektur genießen möchten.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">Miete 1 Zi.</span><span class="font-semibold">$450–$750 USD</span></div>
      <div><span class="text-xs text-gray-500 block">Fußläufigkeit</span><span class="font-semibold">9/10</span></div>
      <div><span class="text-xs text-gray-500 block">Nachtleben</span><span class="font-semibold">Ausgezeichnet</span></div>
      <div><span class="text-xs text-gray-500 block">Nachts ruhig</span><span class="font-semibold">7/10</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Lomas (1a–4a secciones)</h3>
      <span class="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold">Am besten für Familien &amp; Berufstätige</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">Gehobene Wohngegend nordöstlich des Centro. Von Bäumen gesäumte Alleen, bewachte Wohnanlagen, internationale Schulen, Einkaufszentren (Plaza Citadina, Metrópoli) und die besten Privatkliniken. Ein Auto wird dringend empfohlen. Hier landen die meisten versetzten Beschäftigten von BMW und GM.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">Miete 1 Zi.</span><span class="font-semibold">$800–$1,500 USD</span></div>
      <div><span class="text-xs text-gray-500 block">Fußläufigkeit</span><span class="font-semibold">4/10</span></div>
      <div><span class="text-xs text-gray-500 block">Schulen in der Nähe</span><span class="font-semibold">Beste der Stadt</span></div>
      <div><span class="text-xs text-gray-500 block">Familienfreundlich</span><span class="font-semibold">10/10</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Tangamanga</h3>
      <span class="inline-block px-3 py-1 bg-green-100 text-green-900 rounded-full text-xs font-semibold">Am besten für einen aktiven Lebensstil</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">Angrenzend an den Parque Tangamanga I, einen der größten Stadtparks Mexikos (411 ha, freier Eintritt). Mittleres Preisniveau, gute Restaurants, beliebt bei Läufern und Radfahrern. Glasfaser-Internet verfügbar. Entwickelt sich dank der Nähe sowohl zum Park als auch zum Centro rasch zu einer nomadenfreundlichen Zone.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">Miete 1 Zi.</span><span class="font-semibold">$550–$950 USD</span></div>
      <div><span class="text-xs text-gray-500 block">Fußläufigkeit</span><span class="font-semibold">6/10</span></div>
      <div><span class="text-xs text-gray-500 block">Grünfläche</span><span class="font-semibold">Beste der Stadt</span></div>
      <div><span class="text-xs text-gray-500 block">Nachtleben</span><span class="font-semibold">Mäßig</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Villa Magna &amp; Colinas del Parque</h3>
      <span class="inline-block px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs font-semibold">Aufsteiger</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">Neuere Bauprojekte am Stadtrand, beliebt bei jungen Berufstätigen und Remote-Arbeitenden. Günstiger als Lomas bei weitgehend gleichem modernem Komfort. Erwarten Sie neuere Gebäude, weniger Charakter, aber niedrigere Preise.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">Miete 1 Zi.</span><span class="font-semibold">$400–$700 USD</span></div>
      <div><span class="text-xs text-gray-500 block">Fußläufigkeit</span><span class="font-semibold">3/10</span></div>
      <div><span class="text-xs text-gray-500 block">Baualter</span><span class="font-semibold">Meist nach 2015</span></div>
      <div><span class="text-xs text-gray-500 block">Preis-Leistung</span><span class="font-semibold">9/10</span></div>
    </div>
  </div>
</div>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="nomads" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Die Szene der digitalen Nomaden</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-nomad-coworking.png" alt="Moderner Coworking-Raum im historischen Zentrum von San Luis Potosí mit Nomaden, die an Laptops arbeiten, und freigelegten cantera-Steinwänden" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Abbildung 3: Ein Coworking-Raum im Centro Histórico. Die Nomaden-Infrastruktur von SLP hat sich seit 2024 mehr als verdoppelt.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Anfang 2024 hatte ein digitaler Nomade, der nach SLP zog, etwa 25 Coworking-Optionen. Mit Stand März 2026 <strong>verzeichnet nomads.com 51 Coworking-Räume</strong> in der Metropolregion, mit Tagespässen ab rund 3 USD. Die Szene ist jünger und informeller als in Mexiko-Stadt, doch die Grundlagen stimmen: Glasfaser-Internet ist überall vorhanden, Englischsprechende werden unter dem Personal immer häufiger, und die Gemeinschaft ist klein genug, dass Sie nach einer Woche Gesichter wiedererkennen.
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">Bemerkenswerte Coworking- &amp; nomadenfreundliche Orte</h3>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">Entidad Nómada</h4>
    <p class="text-sm text-gray-600 mb-2">Centro Histórico</p>
    <p class="text-sm text-gray-700">Cafetería + Coworking + Veranstaltungsraum. Untergebracht in einem restaurierten Kolonialgebäude. Gutes WLAN, soziales Programm und Parkplätze. Die Standardempfehlung, wenn Sie neu sind.</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">Imparable Coworking</h4>
    <p class="text-sm text-gray-600 mb-2">Mehrere Standorte</p>
    <p class="text-sm text-gray-700">Auf Unternehmer ausgerichteter Raum mit Start-up-Community. Private Büros, Besprechungsräume, monatliche Mitgliedschaft.</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">VAEO Business Club</h4>
    <p class="text-sm text-gray-600 mb-2">Bereich Lomas</p>
    <p class="text-sm text-gray-700">Premium-Arbeitsplatz für Führungskräfte. Gut für Kundentermine und längere Remote-Arbeit.</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">Cafés mit zuverlässigem WLAN</h4>
    <p class="text-sm text-gray-600 mb-2">Stadtweit</p>
    <p class="text-sm text-gray-700">Punto del Cielo, Café Cortao, La Parroquia (Filialen) und das Dachcafé im Centro Comercial República. Alle bieten 50+ Mbps WLAN und Steckdosen.</p>
  </div>
</div>

<div class="not-prose my-10 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl">
  <h4 class="text-2xl font-bold mb-5 flex items-center gap-3"><span class="text-3xl">🎯</span> Checkliste für Nomaden: das Wesentliche</h4>
  <ul class="space-y-3">
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>Besorgen Sie sich bei der Ankunft eine mexikanische SIM (Telcel oder AT&amp;T Mexico). Tarife mit unbegrenztem Datenvolumen kosten etwa 30 USD/Monat. Telcel hat außerhalb der Stadt die beste Netzabdeckung.</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>Bringen Sie einen Backup-Hotspot mit. Glasfaser ist zuverlässig, aber während der Regenzeit (Juni–September) kommt es zu Stromausfällen.</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>Treten Sie vor Ihrer Ankunft der Facebook-Gruppe „Expats en San Luis Potosí“ bei — sie ist das wichtigste informelle Netzwerk.</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>Uber und DiDi funktionieren beide in der Stadt und sind das empfohlene Verkehrsmittel bei Nacht.</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>Richten Sie sich nach dem Rhythmus: Am Wochenende schließen viele Betriebe früh, Montagvormittage sind die beste Zeit für Termine.</p></li>
  </ul>
</div>
</section>

<section id="tourists" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Das Wichtigste für Touristen: Was Sie nicht verpassen sollten</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-tourist-huasteca.png" alt="Luftaufnahme des Wasserfalls Cascada de Tamul in der Huasteca Potosina mit Bootstour auf türkisfarbenem Fluss" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Abbildung 4: Cascada de Tamul, mit 105 Metern der höchste Wasserfall in San Luis Potosí. Die Huasteca Potosina ist das touristische Aushängeschild des Bundesstaates.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Der Bundesstaat San Luis Potosí teilt sich in zwei Tourismuserlebnisse: die koloniale Hauptstadt (diese Stadt) und die Huasteca Potosina, eine subtropische Region etwa 4–5 Stunden östlich, bekannt für Wasserfälle, Flüsse und surrealistische Gärten. Die meisten internationalen Besucher erleben beides.
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">In der Stadt: 3-Tage-Reiseplan</h3>

<div class="not-prose my-6 space-y-4">
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-blue-600">Tag 1</span> — Centro Histórico</h4>
    <p class="text-sm text-gray-700">Vormittag: Plaza de Armas, Catedral de San Luis Potosí, Templo del Carmen (eine der prunkvollsten Barockkirchen Mexikos). Mittagessen: enchiladas potosinas auf dem Mercado República. Nachmittag: Museo Federico Silva (zeitgenössische Skulptur) oder Caja del Agua (historischer Brunnen). Abend: Drinks auf einer Dachterrasse an der Calle Zaragoza.</p>
  </div>
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-green-600">Tag 2</span> — Parque Tangamanga &amp; das moderne SLP</h4>
    <p class="text-sm text-gray-700">Vormittag: Parque Tangamanga I — 411 Hektar mit kostenlosem Zoo, Planetarium, japanischem Garten und Aquarium. Nachmittag: Centro de las Artes (Zentrum für zeitgenössische Kunst in einem ehemaligen Gefängnis). Abend: Abendessen im neuen gastronomischen Korridor entlang der Carranza.</p>
  </div>
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-purple-600">Tag 3</span> — Tagesausflug nach Real de Catorce</h4>
    <p class="text-sm text-gray-700">Dreistündige Fahrt nach Norden zum nahezu verlassenen Ort Real de Catorce in der Sierra de Catorce auf 2.800 m. Der Zugang erfolgt durch einen einspurigen Kopfsteinpflastertunnel. Bohème-Atmosphäre, Geschichte des Silberbergbaus, eindrucksvolle Wüstenlandschaften.</p>
  </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-4">Huasteca Potosina: die 4-Tage-Runde</h3>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Quartieren Sie sich in Ciudad Valles ein, dem regionalen Knotenpunkt 4,5 Stunden östlich der Stadt SLP. Von dort führt die klassische Rundreise zur Cascada de Tamul (105 m hoher Wasserfall, per Boot erreichbar), zur Puente de Dios, zu den Cascadas de Tamasopo und zu den surrealistischen Skulpturen von Las Pozas de Xilitla — ein Garten, den der britische Exzentriker Edward James in den 1960er-Jahren anlegte und der heute Mexikos meistfotografiertes künstlerisches Wahrzeichen außerhalb von Mexiko-Stadt ist. Touren kosten 50–120 USD pro Tag und Person, einschließlich Transport, Guide und Mahlzeiten.
</p>

<div class="not-prose my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
  <p class="text-amber-900"><strong>📌 Touristen-Tipp:</strong> Die Huasteca ist während der mexikanischen Schulferien am belebtesten (Semana Santa — Ende März/Anfang April — und Mitte Juli bis August). Wenn Sie leere Flüsse und die volle Aufmerksamkeit der Guides möchten, besuchen Sie sie im Februar, Oktober oder Anfang November.</p>
</div>
</section>

<section id="healthcare" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Gesundheitsversorgung, Bankwesen &amp; Sicherheit im Jahr 2026</h2>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">Gesundheitsversorgung</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLP verfügt über die stärkste Gesundheitsinfrastruktur aller mittelgroßen Städte im zentralen Mexiko außerhalb von Querétaro. Privatkliniken wie <strong>Hospital Ángeles</strong>, <strong>Star Médica</strong> und <strong>Hospital Lomas</strong> bieten in den USA ausgebildete Fachärzte, moderne Ausstattung und für die meisten Leistungen englischsprachiges Personal. Routinemäßige Privatkonsultationen kosten 30–60 USD; ein Facharztbesuch 50–100 USD. Eine private Krankenversicherung für ein Paar Mitte 50 kostet im Schnitt 2.400–3.000 USD pro Jahr.
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-3">Bankwesen</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Zur Eröffnung eines mexikanischen Bankkontos benötigen Sie Ihren Reisepass, Ihre Aufenthaltskarte (bei manchen Banken für Inhaber der Touristen-FMM nicht erforderlich), einen Adressnachweis (eine aktuelle Nebenkostenabrechnung oder einen Mietvertrag) und in manchen Fällen eine RFC (Steuernummer). <strong>BBVA México</strong> und <strong>Santander</strong> sind am expat-freundlichsten. <strong>HSBC</strong> bietet Premier-Konten mit Vorteilen bei internationalen Überweisungen. Geldautomaten sind weit verbreitet; Santander und Citibanamex verfügen über die größten Geldautomatennetze.
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-3">Sicherheit</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Das US-Außenministerium stuft den Bundesstaat San Luis Potosí auf <strong>Level 2 — Erhöhte Vorsicht walten lassen</strong> ein, dieselbe Stufe wie Frankreich oder das Vereinigte Königreich. Die Stadt selbst gilt als eine der sichereren mittelgroßen Städte Mexikos. Lomas, Centro, Tangamanga und Villa Magna sind die Viertel, in denen sich ausländische Bewohner konzentrieren, und Kleinkriminalität statt Gewaltverbrechen ist das Hauptproblem. Es gelten die üblichen Vorsichtsmaßnahmen: Wertsachen nicht offen zeigen, nachts Fahrdienste nutzen, abgelegene Bereiche der Zona Industrial nach Einbruch der Dunkelheit meiden.
</p>
</section>

<section id="food-culture" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Essen &amp; Kultur</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die potosinische Küche ist so eigenständig, dass sie eigene, von der UNESCO anerkannte Traditionen besitzt. Das Gericht, das Touristen unweigerlich zuerst probieren, sind <strong>enchiladas potosinas</strong> — kleine, rötlich gefärbte Maistortillas, gefüllt mit Käse und serviert mit crema und queso fresco. Darüber hinaus sollten Sie <strong>asado de boda</strong> (ein tiefroter Mole, der traditionell bei Hochzeiten serviert wird), mit guisos gefüllte <strong>gorditas</strong> auf dem Mercado República, <strong>tacos de cecina</strong> und den Mezcal aus der Region Altiplano Potosino suchen.
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die Restaurantszene weist 2026 drei klare Ebenen auf: traditionelle, familiengeführte fondas (Mahlzeiten für 3–7 USD), zeitgenössische mexikanische Restaurants entlang der Calle Carranza (15–30 USD) und eine wachsende Zahl internationaler und Fusion-Konzepte in Centro und Lomas (25–60 USD). Das Angebot an internationaler Küche hat sich seit 2024 deutlich erweitert — es gibt inzwischen solide Optionen für Ramen, koreanisches BBQ, peruanische und nahöstliche Küche, auch wenn die Stadt die Tiefe von Mexiko-Stadt oder Guadalajara noch nicht erreicht.
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">Kulturkalender</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li><strong>Procesión del Silencio</strong> (Karwoche, Ende März/April): eine der bedeutendsten religiösen Prozessionen Mexikos, still und bei Kerzenschein durch das Centro.</li>
  <li><strong>Festival Internacional de San Luis</strong> (August): zwei Wochen mit kostenlosen Konzerten, Theater und Kunst.</li>
  <li><strong>Feria Nacional Potosina (FENAPO)</strong> (August): drei Wochen mit Fahrgeschäften, Livemusik, Rodeo und regionaler Küche.</li>
  <li><strong>BMW Maratón Internacional Tangamanga</strong> (Ende Juni): 17.000+ Läufer auf vier zertifizierten Distanzen.</li>
  <li><strong>Xantolo</strong> (Tag der Toten, 31. Okt.–2. Nov.): besonders lebendig in der Huasteca.</li>
</ul>
</section>

<section id="community" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Gemeinschaft &amp; soziales Leben</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die ausländische Gemeinschaft von SLP ist klein (Schätzungen reichen von 2.000 bis 5.000 dauerhaft ansässigen Ausländern, auch wenn es keine offizielle Zahl gibt) und durchmischt. Anders als in San Miguel de Allende gibt es keine englischsprachige Zeitung, keine in der Stadt dominierenden englischsprachigen Gottesdienste und keine Ansammlung reiner Expat-Bars. Das ist zugleich Nachteil (schwieriger, einen fertigen sozialen Kreis zu finden) und Vorteil (Spanisch verbessert sich notgedrungen schnell).
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Die drei größten Untergruppen sind: <strong>Industriefachkräfte</strong> (deutsche BMW-Ingenieure, japanische Toyota-Zulieferer, koreanisches Kia-nahes Personal), <strong>Ruheständler</strong> (überwiegend Amerikaner und Kanadier) und eine rasch wachsende <strong>Kohorte digitaler Nomaden</strong> (meist US-amerikanische, europäische und lateinamerikanische Remote-Arbeitende). Das soziale Leben gruppiert sich um Facebook-Gruppen, Meetups in der Entidad Nómada und ähnlichen Coworking-Räumen sowie Sprachaustausch-Abende in bestimmten Cafés.
</p>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="faq" class="mb-16 scroll-mt-8 speakable">
<div class="not-prose mb-6">
  <h2 id="faq-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Häufig gestellte Fragen</h2>
</div>

<div class="space-y-5">
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wie viel kostet das Leben in San Luis Potosí im Jahr 2026?</h3>
    <p class="text-gray-700">Ein komfortabler Lebensstil der Mittelschicht kostet 1.200–2.000 USD pro Monat für eine Einzelperson, 1.800–2.500 USD für ein Paar und 2.400–3.500 USD für eine vierköpfige Familie. Ein digitaler Nomade mit fester Coworking-Mitgliedschaft kalkuliert in der Regel 1.800 USD/Monat ein. Die Zahlen wurden anhand von Numbeo (Aktualisierung Januar 2026) und lokalen Angeboten überprüft.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Ist San Luis Potosí sicher für Touristen und Nomaden?</h3>
    <p class="text-gray-700">Das US-Außenministerium stuft San Luis Potosí auf Level 2 ein — Erhöhte Vorsicht walten lassen, dieselbe Stufe wie Frankreich. Die Stadt selbst gehört zu den sichereren mittelgroßen Städten Mexikos. Kleinkriminalität (Taschendiebstahl in touristischen Bereichen, gelegentliche Autoaufbrüche in Industrievierteln) ist das Hauptproblem. Gewaltverbrechen sind in den Vierteln, in denen sich ausländische Bewohner konzentrieren, selten.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Kann ich in San Luis Potosí leben, ohne Spanisch zu sprechen?</h3>
    <p class="text-gray-700">Nur mit erheblichen Reibungsverlusten. Anders als San Miguel de Allende verfügt SLP über eine begrenzte englischsprachige Infrastruktur. Die meisten Ärzte, Vermieter und Behörden arbeiten auf Spanisch. Grundlegende Spanischkenntnisse (Niveau A2) sind nach sechs Monaten Immersion realistisch. Das CELE der UASLP bietet strukturierte Kurse an; private Nachhilfelehrer kosten 10–15 USD pro Stunde.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Welches ist das beste Visum für einen digitalen Nomaden in San Luis Potosí?</h3>
    <p class="text-gray-700">Für Aufenthalte unter 180 Tagen ist die Touristen-FMM kostenlos und automatisch. Für längere Aufenthalte ist das Visum für befristeten Aufenthalt (1–4 Jahre) der Standardweg. Ab 2026 müssen Sie entweder ein Einkommen von ~4.185 USD/Monat über 6–12 Monate oder ~69.750 USD an Ersparnissen in den vergangenen 12 Monaten nachweisen. Die staatlichen Gebühren haben sich im November 2025 in etwa verdoppelt.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wie zuverlässig ist das Internet in San Luis Potosí?</h3>
    <p class="text-gray-700">In der Stadt sehr zuverlässig. Glasfaser-Internet mit 100–500 Mbps ist über Izzi, Totalplay und Megacable in Centro, Lomas, Tangamanga und den meisten Vierteln der Mittelschicht verfügbar. Die monatlichen Kosten liegen bei 32–50 USD für 200+ Mbps. Die Regenzeit (Juni–September) bringt gelegentliche Stromausfälle; ein mobiler Hotspot als Backup wird empfohlen.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wie komme ich nach San Luis Potosí?</h3>
    <p class="text-gray-700">Der internationale Flughafen Ponciano Arriaga (SLP) bietet Direktflüge aus Houston (United), Dallas (American, Volaris) und Mexiko-Stadt (Aeroméxico, Volaris). Alternativ sind Querétaro (QRO) und León (BJX) jeweils 2,5–3 Stunden mit dem Auto oder dem Erste-Klasse-Bus (ETN, Primera Plus) entfernt. Von Mexiko-Stadt dauert der Erste-Klasse-Bus 5 Stunden und kostet etwa 40 USD.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wann ist die beste Reisezeit?</h3>
    <p class="text-gray-700">Oktober–März für trockenes, mildes Wetter (tagsüber 20–25 °C, kühle Abende). Semana Santa (Karwoche, Ende März/April) für die Procesión del Silencio. Ende Juni für den BMW Maratón Tangamanga. Meiden Sie Mitte Juli bis August, wenn Sie dem Andrang bei der FENAPO und den Schulferien entgehen möchten.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Kann ich Leitungswasser trinken?</h3>
    <p class="text-gray-700">Nein. Verwenden Sie garrafones (20-Liter-Kanister mit gereinigtem Wasser), die für etwa 35–50 MXN (~2–3 USD) nach Hause geliefert werden. Alle Restaurants der mittleren Preisklasse verwenden gereinigtes Eis und Wasser; günstigere fondas sind unbedenklich, doch bleiben Sie zur Sicherheit bei abgefüllten Getränken.</p>
  </div>
</div>
</section>

<section id="sources" class="mb-12 scroll-mt-8">
<div class="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-3">Quellen &amp; Überprüfung</h2>
  <p class="text-sm text-gray-600 mb-4">Alle Zahlen in diesem Leitfaden wurden mit Stand vom 17. März 2026 anhand von Primärquellen überprüft.</p>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>→ <a href="https://www.numbeo.com/cost-of-living/in/San-Luis-Potosi" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Numbeo — San Luis Potosí Cost of Living</a> (Aktualisierung Januar 2026, n=20 Beitragende)</li>
    <li>→ <a href="https://www.mexperience.com/mexico-residency-in-2026-tighter-criteria-higher-fees/" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Mexperience — Mexico Residency in 2026</a> (UMA-Berechnung, Gebührenerhöhungen)</li>
    <li>→ <a href="https://mexicorelocationguide.com/mexican-residency-income-requirements-updates-in-2026/" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Mexico Relocation Guide — 2026 Income Requirements Update</a></li>
    <li>→ <a href="https://nomads.com/coworking/san-luis-potosi" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">nomads.com — SLP Coworking Directory</a> (51 erfasste Räume)</li>
    <li>→ <a href="https://www.exchangerates.org.uk/USD-MXN-spot-exchange-rates-history-2026.html" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Exchange-Rates.org.uk — USD/MXN März 2026</a></li>
    <li>→ INEGI — Volkszählung 2020 + Schätzungen der Metropolregion 2025</li>
    <li>→ Mexico Business News — 2025 SLP automotive FDI totals ($761.8M)</li>
    <li>→ San Luis Way Editorial — Verifizierung von Vierteln und Coworking-Räumen vor Ort</li>
  </ul>
</div>
</section>

<div class="not-prose mt-10 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-2xl">
  <h3 class="text-2xl font-bold text-gray-900 mb-3">Bereit, Ihren Umzug oder Besuch zu planen?</h3>
  <p class="text-gray-700 mb-5">Entdecken Sie unsere begleitenden Leitfäden für konkrete Situationen:</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a href="/resources/living-guide" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Vollständiger Leitfaden zum Leben vor Ort</p>
      <p class="text-sm text-gray-600">Visa, Viertel, Gesundheitsversorgung, praktische Grundlagen</p>
    </a>
    <a href="/guides/digital-nomad" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Leitfaden für digitale Nomaden</p>
      <p class="text-sm text-gray-600">Coworking, Cafés, Wohnen für Remote-Arbeitende</p>
    </a>
    <a href="/blog/cost-of-living-san-luis-potosi-2025" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Kostenaufstellung 2025</p>
      <p class="text-sm text-gray-600">Detaillierte Budgetanalyse (Referenz des Vorjahres)</p>
    </a>
    <a href="/parque-tangamanga" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Leitfaden zum Parque Tangamanga</p>
      <p class="text-sm text-gray-600">Der 411 Hektar große Stadtpark, den jeder Besucher sehen sollte</p>
    </a>
  </div>
</div>`;

const content_ja = `<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"FAQPage","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#faq","mainEntity":[{"@type":"Question","name":"2026年のサン・ルイス・ポトシでの生活費はどのくらいですか？","acceptedAnswer":{"@type":"Answer","text":"快適な中流階級の暮らしには、単身者で月1,200～2,000米ドル、カップルで1,800～2,500ドル、4人家族で2,400～3,500ドルかかります。専用のコワーキング会員権を持つデジタルノマドは、通常月1,800米ドルを見込みます。数値はNumbeo（2026年1月更新）と現地の物件情報に照らして検証しています。"}},{"@type":"Question","name":"サン・ルイス・ポトシは観光客やノマドにとって安全ですか？","acceptedAnswer":{"@type":"Answer","text":"米国務省はサン・ルイス・ポトシをレベル2（一層の注意を払う）と評価しており、これはフランスと同じ水準です。市自体はメキシコの中規模都市の中でも比較的安全な部類に入ります。主な懸念は軽犯罪で、外国人居住者が集まる地区では凶悪犯罪はまれです。"}},{"@type":"Question","name":"スペイン語を話せなくてもサン・ルイス・ポトシで暮らせますか？","acceptedAnswer":{"@type":"Answer","text":"かなりの不便を伴います。サン・ミゲル・デ・アジェンデとは異なり、SLPの英語対応インフラは限られています。ほとんどの医師、家主、行政サービスはスペイン語で対応します。基礎的なスペイン語（A2レベル）は、6か月の集中的な学習で現実的に身につきます。"}},{"@type":"Question","name":"サン・ルイス・ポトシのデジタルノマドに最適なビザは何ですか？","acceptedAnswer":{"@type":"Answer","text":"180日未満の滞在なら、観光用のFMMが無料で自動的に発行されます。より長期の滞在には、一時居住ビザ（1～4年）が標準的な方法です。2026年時点では、6～12か月にわたり月約4,185米ドルの収入、または約69,750米ドルの貯蓄が必要です。政府手数料は2025年11月におおむね倍増しました。"}},{"@type":"Question","name":"サン・ルイス・ポトシのインターネットはどのくらい信頼できますか？","acceptedAnswer":{"@type":"Answer","text":"非常に信頼できます。100～500Mbpsの光インターネットが、Izzi、Totalplay、Megacableを通じてCentro、Lomas、Tangamangaおよびほとんどの中流階級の地区で利用できます。月額料金は200Mbps以上で32～50米ドルです。"}},{"@type":"Question","name":"サン・ルイス・ポトシへはどう行けばよいですか？","acceptedAnswer":{"@type":"Answer","text":"ポンシアーノ・アリアガ国際空港（SLP）は、ヒューストン（United）、ダラス（American、Volaris）、メキシコシティからの直行便があります。ケレタロ（QRO）とレオン（BJX）は、車または一等バスでそれぞれ2.5～3時間です。"}},{"@type":"Question","name":"サン・ルイス・ポトシを訪れるのに最適な時期はいつですか？","acceptedAnswer":{"@type":"Answer","text":"乾燥して穏やかな天候の10月から3月です。プロセシオン・デル・シレンシオは3月下旬、BMWマラトン・タンガマンガは6月下旬です。FENAPOと学校の休暇で混雑する7月中旬から8月は避けましょう。"}},{"@type":"Question","name":"サン・ルイス・ポトシで水道水を飲めますか？","acceptedAnswer":{"@type":"Answer","text":"いいえ。garrafones（20リットルの浄水ボトル）を自宅に配達してもらいましょう。おおよそ35～50 MXNです。中価格帯のレストランは浄化された氷と水を使用しています。"}}]},{"@type":"BreadcrumbList","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#breadcrumbs","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://www.sanluisway.com"},{"@type":"ListItem","position":2,"name":"ブログ","item":"https://www.sanluisway.com/blog"},{"@type":"ListItem","position":3,"name":"サン・ルイス・ポトシ究極ガイド 2026","item":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026"}]},{"@type":"Article","@id":"https://www.sanluisway.com/blog/ultimate-guide-living-san-luis-potosi-2026#article","headline":"サン・ルイス・ポトシ究極ガイド 2026：駐在者・デジタルノマド・旅行者のために","datePublished":"2026-03-17","dateModified":"2026-03-17","author":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"publisher":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"inLanguage":"ja","speakable":{"@type":"SpeakableSpecification","cssSelector":[".speakable","#quick-summary","#faq-heading"]},"citation":[{"@type":"CreativeWork","name":"Numbeo — San Luis Potosí Cost of Living","url":"https://www.numbeo.com/cost-of-living/in/San-Luis-Potosi"},{"@type":"CreativeWork","name":"Mexperience — Mexico Residency 2026","url":"https://www.mexperience.com/mexico-residency-in-2026-tighter-criteria-higher-fees/"},{"@type":"CreativeWork","name":"Mexico Relocation Guide — 2026 Income Requirements","url":"https://mexicorelocationguide.com/mexican-residency-income-requirements-updates-in-2026/"},{"@type":"CreativeWork","name":"nomads.com — SLP Coworking Directory","url":"https://nomads.com/coworking/san-luis-potosi"}]}]}
</script>
<div class="not-prose mb-8">
  <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-hero.png" alt="黄金の時間帯のサン・ルイス・ポトシ Centro Histórico — 駐在者・デジタルノマド・観光客のための2026年ガイド" class="w-full h-full object-cover" loading="eager" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
      <div class="p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-3">サン・ルイス・ポトシ究極ガイド 2026</h1>
        <p class="text-lg md:text-xl text-white/90">メキシコ・バヒオ地方の隠れた名所に移り住む駐在者、デジタルノマド、スロートラベラーのために</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
  <h3 class="text-xl font-bold mb-3 text-blue-900">📑 この徹底ガイドの内容</h3>
  <nav class="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800">
    <a href="#overview" class="hover:underline">→ ひと目でわかる：2026年のSLP</a>
    <a href="#audience" class="hover:underline">→ このガイドは誰のためのものか</a>
    <a href="#cost" class="hover:underline">→ 2026年の生活費</a>
    <a href="#visas" class="hover:underline">→ ビザ＆居住資格の変更</a>
    <a href="#neighborhoods" class="hover:underline">→ 地区</a>
    <a href="#nomads" class="hover:underline">→ デジタルノマドのシーン</a>
    <a href="#tourists" class="hover:underline">→ 観光の要点</a>
    <a href="#healthcare" class="hover:underline">→ 医療＆銀行</a>
    <a href="#food-culture" class="hover:underline">→ 食＆文化</a>
    <a href="#community" class="hover:underline">→ コミュニティ＆社会生活</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
    <a href="#sources" class="hover:underline">→ 出典</a>
  </nav>
  <p class="mt-4 text-sm text-blue-700 italic">推定読了時間：18分 · 最終確認：2026年3月17日</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>サン・ルイス・ポトシはもはや秘密ではありません。</strong> この3年間で、地元の人々が「SLP」と呼ぶこの都市は、1年、10年、あるいは長い週末であれ、海外から移り住む人々にとってメキシコで最も興味深い目的地の一つへと静かに成長してきました。本記事は、私たちの包括的な暮らしのガイドの2026年版で、最新の価格（2026年1月～3月に検証）、メキシコの2025年UMA改革後に施行された新しいビザ規則を反映して一から作り直し、さらに新しい視点を加えています。今年はバヒオ地方に押し寄せ始めているデジタルノマドと観光客にも直接語りかけます。
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  2025年版をお読みになった方は、数値が変化していることにお気づきでしょう。Centro Históricoの家賃は前年比で約15％上昇しました。ペソは米ドルに対して強含みとなっています（2026年3月時点で約17.5 MXN/USD、2024年終盤の約20から低下）。ビザの収入基準も重要な形で変わりました。そしてSLPのコワーキング・シーンは、私たちが前回数えて以降2倍以上に増え、nomads.comのトラッカーによれば2024年の約25か所から2026年初頭時点で51か所になりました。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 id="quick-summary" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">ひと目でわかる：2026年のサン・ルイス・ポトシ</h2>
</div>

<div class="speakable bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 md:p-8 mb-8">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
    <strong>サン・ルイス・ポトシは、メキシコのサン・ルイス・ポトシ州の州都です。</strong> 中央バヒオ地方の標高1,864メートルに位置し、ユネスコ世界遺産都市（カミノ・レアル・デ・ティエラ・アデントロの一部として2010年登録）であり、都市圏には約131万人が暮らしています。この都市は、ピンク色のcanteraを用いた植民地時代の建築と、強力な近代産業基盤を併せ持っています。BMW、General Motors、Valeo、Continental、そして350社を超える国際的な自動車関連企業が州内で操業しています。2026年に到着する外国人にとって、SLPは同等の生活の質でありながらメキシコシティより約35～50％安い生活費、観光の過密のなさ、ヒューストンとダラスへの直行便、そして本物のメキシコの都市体験を提供します。
  </p>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">都市圏人口</p><p class="font-bold text-gray-900">約131万人</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">標高</p><p class="font-bold text-gray-900">1,864 m / 6,115 ft</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">気候</p><p class="font-bold text-gray-900">半乾燥、平均約20℃</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">MXN/USD（2026年3月）</p><p class="font-bold text-gray-900">約17.5</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">快適な予算</p><p class="font-bold text-gray-900">月1,200～2,000米ドル</p></div>
    <div class="bg-white rounded-lg p-3 border border-green-100"><p class="text-xs text-gray-500 uppercase tracking-wide">空港コード</p><p class="font-bold text-gray-900">SLP（米国へ直行）</p></div>
  </div>
</div>
</section>

<section id="audience" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">このガイドは誰のためのものか</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  従来、SLPに関するコンテンツは「駐在者」を単一のカテゴリーとして扱っていました。すなわち、メキシコへ引退するアメリカ人やカナダ人です。その枠組みはもはや時代遅れです。2026年には、それぞれ異なるニーズ、予算、期間を持つ3つの明確なプロフィールが到着しています。このガイドはその3つすべてを対象にしています。
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
  <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">🏠</div>
    <h3 class="text-xl font-bold text-blue-900 mb-2">駐在居住者</h3>
    <p class="text-sm text-blue-900 mb-3">滞在期間は1～10年以上。優先事項：居住ビザ、医療、学校、長期の家賃。</p>
    <p class="text-xs text-blue-700 font-semibold">一般的な予算：月1,500～3,000ドル</p>
  </div>
  <div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">💻</div>
    <h3 class="text-xl font-bold text-purple-900 mb-2">デジタルノマド</h3>
    <p class="text-sm text-purple-900 mb-3">滞在期間は1～6か月。優先事項：光インターネット、コワーキング、Wi-Fiのあるカフェ、月極の賃貸、コミュニティ。</p>
    <p class="text-xs text-purple-700 font-semibold">一般的な予算：月1,800～2,500ドル</p>
  </div>
  <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
    <div class="text-4xl mb-3">🎒</div>
    <h3 class="text-xl font-bold text-amber-900 mb-2">観光客＆スロートラベラー</h3>
    <p class="text-sm text-amber-900 mb-3">滞在期間は3日～3週間。優先事項：見どころ、食事場所、Huasteca Potosinaへの日帰り旅行。</p>
    <p class="text-xs text-amber-700 font-semibold">一般的な予算：1日60～120ドル</p>
  </div>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  メキシコをより広く調べる中で偶然このガイドにたどり着いたのであれば、次のことを知っておいてください。SLPは、メキシコシティ、グアダラハラ、モンテレイが形づくる三角形の中心に位置しています。すでにサン・ミゲル・デ・アジェンデやグアナフアトを訪れ、観光の割増料金なしに植民地時代のメキシコを体験したい人にとって、論理的な次の一歩です。また、国内で最も急速に成長している自動車産業の中心地でもあります。これは、余暇ではなく仕事のためにここに来る場合に重要です。
</p>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="cost" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">生活費：2026年の数値、検証済み</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-cost-dashboard.png" alt="2026年サン・ルイス・ポトシの月間生活費比較 — 単身駐在者、デジタルノマド、4人家族" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">
    図1：対象プロフィール別の月間生活費の範囲。すべての数値はNumbeo（2026年1月更新、n=20の投稿者）に照らして検証し、Expatistanおよび現地の物件情報と相互参照しています。
  </figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  「SLPでの生活費はいくらか」への正直な答えは、主に3つの要因に大きく左右されます。すなわち、どの地区を選ぶか、エアコンと専用駐車場が欲しいか、そしてメキシコ料理と各国料理をどのくらいの頻度で食べるかです。以下の数値は、1米ドル=17.5 MXNの為替レートにおける2026年1月～3月の市場状況を反映しています。
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-blue-600 to-blue-700">
      <tr>
        <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">支出</th>
        <th class="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">MXN</th>
        <th class="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">USD</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-6 py-3 font-medium text-gray-900">市街中心部の1ベッドルームのアパート</td><td class="px-6 py-3 text-right text-gray-700">$11,800</td><td class="px-6 py-3 text-right text-gray-700">$674</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">中心部外の1ベッドルームのアパート</td><td class="px-6 py-3 text-right text-gray-700">$8,440</td><td class="px-6 py-3 text-right text-gray-700">$482</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">中心部の3ベッドルームのアパート</td><td class="px-6 py-3 text-right text-gray-700">$21,333</td><td class="px-6 py-3 text-right text-gray-700">$1,219</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">基本的な公共料金（85 m²）</td><td class="px-6 py-3 text-right text-gray-700">$797</td><td class="px-6 py-3 text-right text-gray-700">$46</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">インターネット（60Mbps以上の光）</td><td class="px-6 py-3 text-right text-gray-700">$567</td><td class="px-6 py-3 text-right text-gray-700">$32</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">月間交通定期券</td><td class="px-6 py-3 text-right text-gray-700">$1,304</td><td class="px-6 py-3 text-right text-gray-700">$75</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">安価なレストランでの食事</td><td class="px-6 py-3 text-right text-gray-700">$220</td><td class="px-6 py-3 text-right text-gray-700">$13</td></tr>
      <tr class="bg-gray-50"><td class="px-6 py-3 font-medium text-gray-900">中価格帯の2人分の食事</td><td class="px-6 py-3 text-right text-gray-700">$725</td><td class="px-6 py-3 text-right text-gray-700">$41</td></tr>
      <tr><td class="px-6 py-3 font-medium text-gray-900">ガソリン（1リットル）</td><td class="px-6 py-3 text-right text-gray-700">$24.92</td><td class="px-6 py-3 text-right text-gray-700">$1.42</td></tr>
      <tr class="bg-green-50 font-semibold"><td class="px-6 py-3">平均手取り月給（現地）</td><td class="px-6 py-3 text-right text-gray-900">$15,825</td><td class="px-6 py-3 text-right text-green-700">$904</td></tr>
    </tbody>
  </table>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  平均的な現地給与の数字は重要な背景情報です。専門職の間で駐在者の収入が一般的なメキシコシティとは異なり、SLPではほとんどの住民がメキシコの雇用主からメキシコ・ペソで収入を得ています。これは、米ドル、ユーロ、カナダドルで稼ぐ人に大きな有利さをもたらします。月2,000米ドルの予算があれば、現地の中央値をはるかに上回ります。
</p>

<div class="not-prose my-10 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8">
  <h4 class="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-3"><span class="text-2xl">💡</span> 2026年のプロのヒント</h4>
  <div class="space-y-3">
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">家賃はドルではなくペソで支払う</p>
      <p class="text-gray-700 text-sm">米ドル建てで価格を設定する家主は10～15％上乗せします。ペソ建て限定の契約を交渉しましょう。ノマドで月払いの場合は、3か月分の前払いに対して10％の「estancia」割引を求めましょう。</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">30日を超えるならAirbnbは避ける</p>
      <p class="text-gray-700 text-sm">SLPではAirbnbは直接契約の賃貸より月あたり平均60～80％割高です。4週間を超える滞在では、Inmuebles24.comまたはFacebook Marketplaceを利用しましょう。</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <p class="font-semibold text-gray-900 mb-1">CFEと水道は交渉の余地がない — が、インターネットは比較できる</p>
      <p class="text-gray-700 text-sm">Izzi、Totalplay、Megacableはいずれも、Centro、Lomas、Tangamangaで200Mbps以上の光を月約32～50米ドルで提供しています。Telmexは旧式なので、その通りで光が利用できない場合を除いて見送りましょう。</p>
    </div>
  </div>
</div>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="visas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">ビザ＆居住資格：2025～2026年に何が変わったか</h2>
</div>

<div class="not-prose my-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
  <p class="text-red-900"><strong>⚠️ 大きな変更：</strong> 2025年秋、メキシコ議会は居住ビザおよびカードの政府処理手数料を倍増させる法律を可決しました。新しい料金体系は2025年11月7日に施行されました。これを2026年の予算に織り込んでください。</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  メキシコの居住制度は、2025年版と2026年版のガイドの間に2つの重要な変更を経ました。1つ目は手続き上のものです。2025年7月以降、メキシコの領事館は、経済的支払能力を日額最低賃金ではなく<strong>UMA</strong>（Unidad de Medida y Actualización）を用いて算定するよう指示されました。この変更が重要なのは、最低賃金が近年年12％超で急上昇している一方、UMAは年3～5％しか上がらないためです。2026年のUMAは日額117.31 MXNで、2025年の113.14 MXNから3.69％上昇しています。
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  2つ目の変更は財政的なものです。ビザおよび居住カードの政府手数料が2025年11月付でおおむね倍増しました。2024年終盤に約5,570 MXNだった一時居住カードは、現在1年カードで11,000 MXN近くになっています。それに応じて予算を組んでください。
</p>

<h3 id="visa-pathways" class="text-2xl font-bold text-gray-900 mb-4">2026年の4つの経路</h3>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-purple-600 to-purple-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">ビザの種類</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">期間</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">収入／貯蓄の基準</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">最適な対象</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-medium">観光（FMM）</td><td class="px-5 py-3 text-gray-700">最長180日</td><td class="px-5 py-3 text-gray-700">なし</td><td class="px-5 py-3 text-gray-700">短期旅行、SLPを試すノマド</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-medium">一時居住</td><td class="px-5 py-3 text-gray-700">1～4年</td><td class="px-5 py-3 text-gray-700">月約4,185米ドルの収入 または 約69,750米ドルの貯蓄</td><td class="px-5 py-3 text-gray-700">リモートワーカー、中期滞在</td></tr>
      <tr><td class="px-5 py-3 font-medium">永住</td><td class="px-5 py-3 text-gray-700">無期限</td><td class="px-5 py-3 text-gray-700">より高い基準；退職または一時居住4年を経ての取得も可</td><td class="px-5 py-3 text-gray-700">退職者、長期居住者</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-medium">就労ビザ</td><td class="px-5 py-3 text-gray-700">1～4年</td><td class="px-5 py-3 text-gray-700">雇用主の内定に紐づく</td><td class="px-5 py-3 text-gray-700">BMW、GM、Valeo、Continentalの転勤者</td></tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-600 italic mt-3">基準はMexperienceの2026年居住資格ブリーフィングおよびMexico Relocation GuideのUMA改革後の分析より（出典を参照）。</p>
</div>

<div class="not-prose my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
  <p class="text-amber-900"><strong>📌 デジタルノマドは要注意：</strong> 観光用のFMMでリモートワークをすることは、メキシコの移民法上、技術的にはグレーゾーンです。海外から収入を得る外国人への取り締まりはごくわずかですが、90日を超えて滞在する、メキシコの銀行口座を開設する、賃貸契約を結ぶ予定があるなら、一時居住の経路のほうがはるかにすっきりしています。月4,185米ドルの基準は、米ドル建ての給与を得るほとんどのリモートワーカーにとって達成可能です。</p>
</div>
</section>

<section id="neighborhoods" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">どこに住むか：プロフィール別の地区</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-neighborhoods.png" alt="サン・ルイス・ポトシの3つの地区を並べて：Centro Históricoの石畳の街路、Lomasの高級ゲート付き地域、Tangamangaの公園に隣接する地区" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">図2：外国人居住者に人気の3つの主要地区 — Centro Histórico（左）、Lomas（中央）、Tangamanga（右）。</figcaption>
</figure>

<div class="not-prose space-y-6 my-10">
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Centro Histórico</h3>
      <span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold">ノマド＆文化に最適</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">ユネスコに指定された歴史地区。徒歩で回れ、石畳が続き、カフェやレストランがあふれています。光インターネットはどこでも利用できます。<strong>Entidad Nómada</strong>のようなコワーキングスペースは中心部のまさに真ん中にあります。車なしで暮らし、毎日植民地時代の建築に浸りたい人に最適です。</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">1BRの家賃</span><span class="font-semibold">$450–$750 USD</span></div>
      <div><span class="text-xs text-gray-500 block">徒歩のしやすさ</span><span class="font-semibold">9/10</span></div>
      <div><span class="text-xs text-gray-500 block">ナイトライフ</span><span class="font-semibold">非常に良い</span></div>
      <div><span class="text-xs text-gray-500 block">夜間の静けさ</span><span class="font-semibold">7/10</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Lomas (1a–4a secciones)</h3>
      <span class="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold">家族＆専門職に最適</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">Centroの北東にある高級住宅地。並木の続く大通り、ゲート付きコミュニティ、インターナショナルスクール、ショッピングモール（Plaza Citadina、Metrópoli）、そして一流の民間病院があります。車が強く推奨されます。BMWやGMの転勤者の多くが落ち着く場所です。</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">1BRの家賃</span><span class="font-semibold">$800–$1,500 USD</span></div>
      <div><span class="text-xs text-gray-500 block">徒歩のしやすさ</span><span class="font-semibold">4/10</span></div>
      <div><span class="text-xs text-gray-500 block">近隣の学校</span><span class="font-semibold">市内で最良</span></div>
      <div><span class="text-xs text-gray-500 block">家族向け</span><span class="font-semibold">10/10</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Tangamanga</h3>
      <span class="inline-block px-3 py-1 bg-green-100 text-green-900 rounded-full text-xs font-semibold">アクティブな暮らしに最適</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">メキシコ最大級の都市公園の一つ、Parque Tangamanga I（411 ha、入園無料）に隣接しています。中価格帯で、良いレストランがあり、ランナーやサイクリストに人気です。光インターネットが利用できます。公園とCentroの両方に近いため、ノマドに優しいゾーンとして急速に台頭しています。</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">1BRの家賃</span><span class="font-semibold">$550–$950 USD</span></div>
      <div><span class="text-xs text-gray-500 block">徒歩のしやすさ</span><span class="font-semibold">6/10</span></div>
      <div><span class="text-xs text-gray-500 block">緑地</span><span class="font-semibold">市内で最良</span></div>
      <div><span class="text-xs text-gray-500 block">ナイトライフ</span><span class="font-semibold">普通</span></div>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
    <div class="flex flex-wrap items-baseline gap-3 mb-3">
      <h3 class="text-xl font-bold text-gray-900">Villa Magna &amp; Colinas del Parque</h3>
      <span class="inline-block px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs font-semibold">注目の新興地区</span>
    </div>
    <p class="text-gray-700 mb-4 leading-relaxed">市の郊外にある新しい開発地区で、若い専門職やリモートワーカーに人気です。Lomasより手頃でありながら、近代的な設備の多くを備えています。新しい建物、控えめな個性、しかし低い価格を見込んでください。</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <div><span class="text-xs text-gray-500 block">1BRの家賃</span><span class="font-semibold">$400–$700 USD</span></div>
      <div><span class="text-xs text-gray-500 block">徒歩のしやすさ</span><span class="font-semibold">3/10</span></div>
      <div><span class="text-xs text-gray-500 block">建築年代</span><span class="font-semibold">大半が2015年以降</span></div>
      <div><span class="text-xs text-gray-500 block">コストパフォーマンス</span><span class="font-semibold">9/10</span></div>
    </div>
  </div>
</div>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="nomads" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">デジタルノマドのシーン</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-nomad-coworking.png" alt="サン・ルイス・ポトシの歴史地区にある近代的なコワーキングスペースで、ノートパソコンで作業するノマドと露出したcantera石の壁" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">図3：Centro Históricoのコワーキングスペース。SLPのノマド向けインフラは2024年以降2倍以上に増えました。</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  2024年初頭、SLPに移り住むデジタルノマドが利用できるコワーキングは約25か所でした。2026年3月時点で、<strong>nomads.comは都市圏で51のコワーキングスペースを記録</strong>しており、1日パスは約3米ドルからです。このシーンはメキシコシティより若く、より打ち解けた雰囲気ですが、基本はしっかりしています。光インターネットはどこにでもあり、スタッフの間で英語を話せる人がますます増え、コミュニティは1週間もすれば顔なじみができるほど小さいのです。
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">注目のコワーキング＆ノマドに優しいスポット</h3>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">Entidad Nómada</h4>
    <p class="text-sm text-gray-600 mb-2">Centro Histórico</p>
    <p class="text-sm text-gray-700">カフェテリア＋コワーキング＋イベントスペース。修復された植民地時代の建物にあります。良好なWi-Fi、交流プログラム、駐車場を備えています。初めてなら定番のおすすめです。</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">Imparable Coworking</h4>
    <p class="text-sm text-gray-600 mb-2">複数の拠点</p>
    <p class="text-sm text-gray-700">スタートアップのコミュニティを備えた、起業家向けのスペース。個室オフィス、会議室、月額会員制。</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">VAEO Business Club</h4>
    <p class="text-sm text-gray-600 mb-2">Lomas地区</p>
    <p class="text-sm text-gray-700">経営層向けのプレミアムなワークスペース。顧客との打ち合わせや長時間のリモートワークに適しています。</p>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-1">信頼できるWi-Fiのあるカフェ</h4>
    <p class="text-sm text-gray-600 mb-2">市内各所</p>
    <p class="text-sm text-gray-700">Punto del Cielo、Café Cortao、La Parroquia（各支店）、そしてCentro Comercial Repúblicaの屋上カフェ。いずれも50Mbps以上のWi-Fiと電源コンセントを備えています。</p>
  </div>
</div>

<div class="not-prose my-10 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl">
  <h4 class="text-2xl font-bold mb-5 flex items-center gap-3"><span class="text-3xl">🎯</span> ノマドの必須チェックリスト</h4>
  <ul class="space-y-3">
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>到着したらメキシコのSIM（TelcelまたはAT&amp;T Mexico）を入手しましょう。無制限データプランは月約30米ドルです。Telcelは市外での電波が最も良好です。</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>予備のホットスポットを持参しましょう。光は信頼できますが、雨季（6～9月）には停電が起こります。</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>到着前にFacebookグループ「Expats en San Luis Potosí」に参加しましょう — これが主要な非公式ネットワークです。</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>UberとDiDiはどちらも市内で使え、夜間に推奨される移動手段です。</p></li>
    <li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p>リズムに合わせて計画しましょう。週末は多くの店が早く閉まり、月曜の午前中が予約に最適な時間帯です。</p></li>
  </ul>
</div>
</section>

<section id="tourists" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">観光の要点：見逃せないもの</h2>
</div>

<figure class="not-prose my-10">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/ultimate-guide-living-san-luis-potosi-2026-tourist-huasteca.png" alt="ターコイズ色の川でボートツアーが行われるHuasteca PotosinaのCascada de Tamul滝の空撮" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">図4：Cascada de Tamul、105メートルでサン・ルイス・ポトシ最も高い滝。Huasteca Potosinaは州を象徴する観光体験です。</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  サン・ルイス・ポトシ州は2つの観光体験に分かれます。植民地時代の州都（この都市）と、東へ約4～5時間の亜熱帯地域Huasteca Potosinaで、後者は滝、川、シュルレアリスムの庭園で知られています。国際的な観光客の多くは両方を巡ります。
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">市内：3日間の行程</h3>

<div class="not-prose my-6 space-y-4">
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-blue-600">1日目</span> — Centro Histórico</h4>
    <p class="text-sm text-gray-700">午前：Plaza de Armas、Catedral de San Luis Potosí、Templo del Carmen（メキシコで最も装飾豊かなバロック様式の教会の一つ）。昼食：Mercado Repúblicaでenchiladas potosinas。午後：Museo Federico Silva（現代彫刻）またはCaja del Agua（歴史ある噴水）。夕方：Calle Zaragozaの屋上で一杯。</p>
  </div>
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-green-600">2日目</span> — Parque Tangamanga＆現代のSLP</h4>
    <p class="text-sm text-gray-700">午前：Parque Tangamanga I — 411ヘクタールに無料の動物園、プラネタリウム、日本庭園、水族館があります。午後：Centro de las Artes（元刑務所を利用した現代美術センター）。夕方：Carranza沿いの新しい美食回廊で夕食。</p>
  </div>
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2"><span class="text-purple-600">3日目</span> — Real de Catorceへの日帰り旅行</h4>
    <p class="text-sm text-gray-700">北へ車で3時間、標高2,800 mのSierra de CatorceにあるゴーストタウンさながらのReal de Catorceへ。アクセスは片側1車線の石畳のトンネルを通ります。ボヘミアンな雰囲気、銀採掘の歴史、印象的な砂漠の風景。</p>
  </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-4">Huasteca Potosina：4日間の周遊</h3>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLP市から東へ4.5時間の地域拠点、Ciudad Vallesを拠点にしましょう。そこから定番の周遊路は、Cascada de Tamul（105 mの滝、ボートでアクセス）、Puente de Dios、Cascadas de Tamasopo、そしてLas Pozas de Xilitlaのシュルレアリスムの彫刻群を巡ります。後者は、英国の奇人Edward Jamesが1960年代に造った庭園で、今ではメキシコシティ以外でメキシコ最も撮影される芸術的名所です。ツアーは交通、ガイド、食事込みで1人1日50～120米ドルです。
</p>

<div class="not-prose my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
  <p class="text-amber-900"><strong>📌 観光のヒント：</strong> Huastecaはメキシコの学校休暇中に最も混雑します（Semana Santa — 3月下旬／4月上旬 — と7月中旬から8月）。人けのない川とガイドの手厚い対応を望むなら、2月、10月、または11月上旬に訪れましょう。</p>
</div>
</section>

<section id="healthcare" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">2026年の医療、銀行＆安全</h2>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">医療</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLPは、Querétaroを除く中央メキシコのどの中規模都市よりも充実した医療インフラを備えています。<strong>Hospital Ángeles</strong>、<strong>Star Médica</strong>、<strong>Hospital Lomas</strong>といった民間病院は、米国で研修を受けた専門医、近代的な設備、そしてほとんどのサービスで英語を話せるスタッフを備えています。民間での通常の診察は30～60米ドル、専門医の受診は50～100米ドルです。50代のカップル向けの民間保険料は年平均2,400～3,000米ドルです。
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-3">銀行</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  メキシコの銀行口座を開設するには、パスポート、居住カード（観光FMMの保持者には不要とする銀行もあります）、住所証明（最近の公共料金の請求書または賃貸契約書）、場合によってはRFC（納税者番号）が必要です。<strong>BBVA México</strong>と<strong>Santander</strong>が最も駐在者に優しい銀行です。<strong>HSBC</strong>は国際送金の特典が付くPremier口座を提供しています。ATMは広く利用でき、SantanderとCitibanamexが最大のATM網を持っています。
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-3">安全</h3>
<p class="text-lg leading-relaxed text-gray-700 mb-6">
  米国務省はサン・ルイス・ポトシ州を<strong>レベル2 — 一層の注意を払う</strong>に分類しており、これはフランスや英国と同じ水準です。市自体はメキシコの中規模都市の中でも比較的安全な部類と見なされています。Lomas、Centro、Tangamanga、Villa Magnaは外国人居住者が集まる地区で、主な懸念は凶悪犯罪ではなく軽犯罪です。標準的な用心が求められます。貴重品を見せびらかさない、夜間は配車サービスを使う、日没後はZona Industrialの人けのない場所を避ける、といったことです。
</p>
</section>

<section id="food-culture" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">食＆文化</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  ポトシの料理は、ユネスコに認められた独自の伝統を持つほど個性的です。観光客が決まって最初に試す料理は<strong>enchiladas potosinas</strong>で、これはチーズを詰めた小さな赤みがかったトウモロコシのトルティーヤで、cremaとqueso frescoを添えて供されます。そのほか、<strong>asado de boda</strong>（伝統的に結婚式で供される深紅のモレ）、Mercado Repúblicaでguisosを詰めた<strong>gorditas</strong>、<strong>tacos de cecina</strong>、そしてAltiplano Potosino地方のメスカルもぜひ探してみてください。
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  2026年のレストランシーンには明確な3つの層があります。伝統的な家族経営のfondas（1食3～7米ドル）、Calle Carranza沿いの現代的なメキシコ料理店（15～30ドル）、そしてCentroとLomasで増えつつある各国料理やフュージョンの店（25～60ドル）です。各国料理の選択肢は2024年以降大きく広がり、今では確かなラーメン、韓国式BBQ、ペルー料理、中東料理の店がありますが、それでもメキシコシティやグアダラハラの奥深さには及びません。
</p>

<h3 class="text-2xl font-bold text-gray-900 mb-4">文化カレンダー</h3>
<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li><strong>Procesión del Silencio</strong>（聖週間、3月下旬／4月）：メキシコで最も重要な宗教行列の一つで、Centroを静かにろうそくの灯りで進みます。</li>
  <li><strong>Festival Internacional de San Luis</strong>（8月）：2週間にわたる無料のコンサート、演劇、芸術。</li>
  <li><strong>Feria Nacional Potosina (FENAPO)</strong>（8月）：3週間にわたる遊具、ライブ音楽、ロデオ、郷土料理。</li>
  <li><strong>BMW Maratón Internacional Tangamanga</strong>（6月下旬）：4つの公認距離に17,000人以上のランナー。</li>
  <li><strong>Xantolo</strong>（死者の日、10月31日～11月2日）：Huastecaで特に色鮮やかです。</li>
</ul>
</section>

<section id="community" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">コミュニティ＆社会生活</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLPの外国人コミュニティは小規模（公式な数字は存在しませんが、常住の外国人居住者は2,000～5,000人と推定されます）で、混ざり合っています。サン・ミゲル・デ・アジェンデとは異なり、英語の新聞はなく、市内で主流となる英語の宗教サービスもなく、駐在者専用のバーの集まりもありません。これは短所（出来合いの社交サークルを見つけにくい）であると同時に、長所（必要に迫られてスペイン語が急速に上達する）でもあります。
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  最大の3つのサブグループは次のとおりです。<strong>産業界の専門職</strong>（ドイツのBMWのエンジニア、日本のトヨタのサプライヤー、韓国のKia関連のスタッフ）、<strong>退職者</strong>（主にアメリカ人とカナダ人）、そして急速に増えている<strong>デジタルノマドの層</strong>（主に米国、欧州、ラテンアメリカのリモートワーカー）です。社会生活は、Facebookグループ、Entidad Nómadaや同様のコワーキングスペースでのミートアップ、特定のカフェでの言語交換の夜を中心に形づくられています。
</p>
</section>

<div class="not-prose my-16">
  <div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div>
</div>

<section id="faq" class="mb-16 scroll-mt-8 speakable">
<div class="not-prose mb-6">
  <h2 id="faq-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">よくある質問</h2>
</div>

<div class="space-y-5">
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">2026年のサン・ルイス・ポトシでの生活費はどのくらいですか？</h3>
    <p class="text-gray-700">快適な中流階級の暮らしには、単身者で月1,200～2,000米ドル、カップルで1,800～2,500ドル、4人家族で2,400～3,500ドルかかります。専用のコワーキング会員権を持つデジタルノマドは、通常月1,800米ドルを見込みます。数値はNumbeo（2026年1月更新）と現地の物件情報に照らして検証しています。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">サン・ルイス・ポトシは観光客やノマドにとって安全ですか？</h3>
    <p class="text-gray-700">米国務省はサン・ルイス・ポトシをレベル2（一層の注意を払う）と評価しており、これはフランスと同じ水準です。市自体はメキシコの中規模都市の中でも比較的安全な部類に入ります。主な懸念は軽犯罪（観光地でのスリ、産業地区での時折の車上荒らし）です。外国人居住者が集まる地区では凶悪犯罪はまれです。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">スペイン語を話せなくてもサン・ルイス・ポトシで暮らせますか？</h3>
    <p class="text-gray-700">かなりの不便を伴います。サン・ミゲル・デ・アジェンデとは異なり、SLPの英語対応インフラは限られています。ほとんどの医師、家主、行政サービスはスペイン語で対応します。基礎的なスペイン語（A2レベル）は、6か月の集中的な学習で現実的に身につきます。UASLPのCELEは体系的な講座を提供しており、個人の家庭教師は1時間10～15米ドルです。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">サン・ルイス・ポトシのデジタルノマドに最適なビザは何ですか？</h3>
    <p class="text-gray-700">180日未満の滞在なら、観光用のFMMが無料で自動的に発行されます。より長期の滞在には、一時居住ビザ（1～4年）が標準的な方法です。2026年時点では、6～12か月にわたる月約4,185米ドルの収入、または過去12か月間の約69,750米ドルの貯蓄のいずれかを証明する必要があります。政府手数料は2025年11月におおむね倍増しました。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">サン・ルイス・ポトシのインターネットはどのくらい信頼できますか？</h3>
    <p class="text-gray-700">市内では非常に信頼できます。100～500Mbpsの光インターネットが、Izzi、Totalplay、Megacableを通じてCentro、Lomas、Tangamangaおよびほとんどの中流階級の地区で利用できます。月額料金は200Mbps以上で32～50米ドルです。雨季（6～9月）には時折停電があり、予備としてモバイルホットスポットが推奨されます。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">サン・ルイス・ポトシへはどう行けばよいですか？</h3>
    <p class="text-gray-700">ポンシアーノ・アリアガ国際空港（SLP）は、ヒューストン（United）、ダラス（American、Volaris）、メキシコシティ（Aeroméxico、Volaris）からの直行便があります。あるいは、ケレタロ（QRO）とレオン（BJX）は、車または一等バス（ETN、Primera Plus）でそれぞれ2.5～3時間です。メキシコシティからは一等バスで5時間、約40米ドルです。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">訪れるのに最適な時期はいつですか？</h3>
    <p class="text-gray-700">乾燥して穏やかな天候の10月～3月（日中20～25℃、夜は涼しい）。プロセシオン・デル・シレンシオはSemana Santa（聖週間、3月下旬／4月）に。BMWマラトン・タンガマンガは6月下旬に。FENAPOと学校の休暇の混雑を避けたいなら、7月中旬から8月は避けましょう。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">水道水を飲めますか？</h3>
    <p class="text-gray-700">いいえ。garrafones（20リットルの浄水ボトル）を自宅に配達してもらいましょう。おおよそ35～50 MXN（約2～3米ドル）です。中価格帯のレストランはすべて浄化された氷と水を使用しています。より安価なfondasも安全ですが、念のため瓶入りの飲み物にしておきましょう。</p>
  </div>
</div>
</section>

<section id="sources" class="mb-12 scroll-mt-8">
<div class="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-3">出典＆検証</h2>
  <p class="text-sm text-gray-600 mb-4">このガイドのすべての数値は、2026年3月17日時点で一次資料に照らして検証しています。</p>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>→ <a href="https://www.numbeo.com/cost-of-living/in/San-Luis-Potosi" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Numbeo — San Luis Potosí Cost of Living</a>（2026年1月更新、n=20の投稿者）</li>
    <li>→ <a href="https://www.mexperience.com/mexico-residency-in-2026-tighter-criteria-higher-fees/" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Mexperience — Mexico Residency in 2026</a>（UMAの算定、手数料の引き上げ）</li>
    <li>→ <a href="https://mexicorelocationguide.com/mexican-residency-income-requirements-updates-in-2026/" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Mexico Relocation Guide — 2026 Income Requirements Update</a></li>
    <li>→ <a href="https://nomads.com/coworking/san-luis-potosi" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">nomads.com — SLP Coworking Directory</a>（51か所を記録）</li>
    <li>→ <a href="https://www.exchangerates.org.uk/USD-MXN-spot-exchange-rates-history-2026.html" class="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Exchange-Rates.org.uk — USD/MXN March 2026</a></li>
    <li>→ INEGI — 2020年国勢調査＋2025年都市圏推計</li>
    <li>→ Mexico Business News — 2025 SLP automotive FDI totals ($761.8M)</li>
    <li>→ San Luis Way Editorial — 地区とコワーキングスペースの現地検証</li>
  </ul>
</div>
</section>

<div class="not-prose mt-10 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-2xl">
  <h3 class="text-2xl font-bold text-gray-900 mb-3">移住や訪問の計画を立てる準備はできましたか？</h3>
  <p class="text-gray-700 mb-5">具体的なシナリオ向けの関連ガイドをご覧ください：</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a href="/resources/living-guide" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ 完全な暮らしのガイド</p>
      <p class="text-sm text-gray-600">ビザ、地区、医療、実用的な要点</p>
    </a>
    <a href="/guides/digital-nomad" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ デジタルノマドガイド</p>
      <p class="text-sm text-gray-600">リモートワーカー向けのコワーキング、カフェ、住まい</p>
    </a>
    <a href="/blog/cost-of-living-san-luis-potosi-2025" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ 2025年の費用内訳</p>
      <p class="text-sm text-gray-600">詳細な予算分析（前年の参考資料）</p>
    </a>
    <a href="/parque-tangamanga" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Parque Tangamangaガイド</p>
      <p class="text-sm text-gray-600">すべての来訪者が見るべき411ヘクタールの都市公園</p>
    </a>
  </div>
</div>`;

async function main() {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_de, content_ja })
    .eq('slug', SLUG);
  if (error) {
    console.error('Update failed:', error);
    process.exit(1);
  }
  console.log('Updated content_de + content_ja for', SLUG);

  const { data, error: fetchErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('slug', SLUG)
    .single();
  if (fetchErr) {
    console.error('Re-fetch failed:', fetchErr);
    process.exit(1);
  }

  const tagCount = (html) => (html.match(/<[a-zA-Z\/!]/g) || []).length;
  const jsonLd = (html) => {
    const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!m) return { ok: false, reason: 'no block' };
    try { JSON.parse(m[1].trim()); return { ok: true }; }
    catch (e) { return { ok: false, reason: e.message }; }
  };

  console.log('\n--- VERIFICATION ---');
  console.log('EN tags:', tagCount(data.content));
  console.log('DE tags:', tagCount(data.content_de), '| differs from EN:', data.content_de !== data.content);
  console.log('JA tags:', tagCount(data.content_ja), '| differs from EN:', data.content_ja !== data.content);
  console.log('DE JSON-LD:', JSON.stringify(jsonLd(data.content_de)));
  console.log('JA JSON-LD:', JSON.stringify(jsonLd(data.content_ja)));
}

main();
