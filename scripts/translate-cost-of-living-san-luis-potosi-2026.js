// Native German + Japanese translations for the blog post
// `cost-of-living-san-luis-potosi-2026`. Idempotent: updates content_de and
// content_ja by slug, then verifies by re-fetching. HTML structure, tags,
// attributes, hrefs, image src, prices/figures and JSON-LD keys are preserved
// byte-for-byte; only human-readable text nodes are translated.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'cost-of-living-san-luis-potosi-2026';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-green-900 mb-3">In dieser Übersicht</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-green-800 text-sm">
    <a href="#budgets" class="hover:underline">→ Monatsbudgets nach Profil</a>
    <a href="#rent" class="hover:underline">→ Miete nach Stadtviertel (echte Angebote)</a>
    <a href="#utilities" class="hover:underline">→ Nebenkosten, Internet & Telefon</a>
    <a href="#food" class="hover:underline">→ Essen: von Gorditas bis zum Dinner für zwei</a>
    <a href="#transport" class="hover:underline">→ Nahverkehr (der kostenlose BRT!)</a>
    <a href="#healthcare" class="hover:underline">→ Gesundheit & Versicherung</a>
    <a href="#comparisons" class="hover:underline">→ vs. CDMX, Querétaro, Mérida & Texas</a>
    <a href="#exchange-rate" class="hover:underline">→ Der Wechselkurs-Realitätscheck</a>
  </nav>
  <p class="mt-4 text-sm text-green-700 italic">Preise Mitte 2026, jede Zahl mit Quelle und Zeitraum belegt · Umrechnung zu 17.54 MXN/USD (Banxico, 2. Juli 2026)</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die ehrliche Schlagzeile für 2026: San Luis Potosí zählt weiterhin zu den günstigsten Orten Mexikos zum Leben — doch Ihre Dollar kaufen 6–8% weniger Pesos als im Vorjahr.</strong> Hier sind die echten Zahlen für Mitte 2026: Mieten aus tatsächlichen Angeboten, die neuen CFE-Gebühren, was eine Comida corrida wirklich kostet, und vollständige Monatsbudgets von $800 bis $4,000 USD.
</p>

<section id="budgets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Monatsbudgets nach Profil</h2>
</div>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Monatsbudgets San Luis Potosí 2026</caption>
    <thead class="bg-green-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Profil</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">MXN/Monat</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">USD/Monat</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Annahmen</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sparsamer Single</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$14,000–16,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$800–915 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">Wohnung in günstiger Gegend, selbst kochen + Streetfood, Bus/kostenloser MetroRed</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Komfortabler Single</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$25,000–29,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$1,425–1,655 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">Möblierte 1-Schlafzimmer-Wohnung in Tequis/Centro, wöchentlich Restaurants, Ubers, private Versicherung</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Paar</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$33,000–40,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$1,880–2,280 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">2-Schlafzimmer-Wohnung in Tequis/Lomas, alles skaliert um ~1.6x</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Vierköpfige Familie</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$60,000–70,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$3,420–3,990 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">3-Schlafzimmer-Wohnung + Schulen/Aktivitäten; der Numbeo-Warenkorb tendiert gehoben — viele Familien geben weniger aus</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">Redaktionelle Schätzungen auf Basis der Zahlen unten, Preise Mitte 2026. Umrechnung zu 17.54 MXN/USD (Banxico, 2. Juli 2026).</p>
<p class="text-sm text-gray-600 leading-relaxed">Gegenprobe: Wise/CityCost schätzt unabhängig ~$1,508 USD/Monat für eine Einzelperson in SLP (2026) — genau in unserer Spanne „komfortabler Single“.</p>
</section>

<section id="rent" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Miete nach Stadtviertel — aus echten Angeboten vom Juli 2026</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Centro Histórico</h3><p class="text-sm text-gray-700">Renovierte/exklusive Einheiten MX$22,000–25,000 (eine 1-Schlafzimmer-Wohnung mit Blick auf den Parque San Francisco für 25,000 inseriert); ältere, unrenovierte Einheiten beginnen weit darunter — Numbeos Zentrums-Spanne startet bei etwa MX$4,000–8,000. Charme kostet hier extra.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Carranza / Tequisquiapan</h3><p class="text-sm text-gray-700">Der Korridor für möblierte Vermietungen: ein Loft an der Carranza inklusive aller Nebenkosten für MX$10,000, eine möblierte 2-Schlafzimmer-Wohnung einen halben Block weiter für 13,000, eine möblierte 1-Schlafzimmer-Wohnung am Jardín de Tequis für 20,000, Luxustürme ~31,000. Rechnen Sie mit einem Möblierungsaufschlag von MX$3,000–6,000.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Lomas</h3><p class="text-sm text-gray-700">3-Schlafzimmer-Wohnung möbliert MX$22,500–23,000 (+~2,200 Instandhaltung), unmöbliert ab 13,000, Luxustürme (Tangente 52, Punta San Luis) 30,000–34,000.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Günstige Colonias</h3><p class="text-sm text-gray-700">Renovierte einfache 2-Schlafzimmer-Wohnung ~54 m² für MX$8,500–9,500; kleine Einheiten ab ~4,900–6,500 (ein möbliertes Loft inklusive aller Nebenkosten für 6,500).</p></div>
</div>
<p class="text-xs text-gray-500 italic">Dies sind einzelne Angebote (Inmuebles24/Trovit/iCasas/Lamudi, Momentaufnahmen vom Juli 2026), keine Mediane. Numbeo-Durchschnittswerte aus Crowdsourcing (Juni 2026, 21 Beitragende): 1 Schlafzimmer Zentrum 11,800 · 1 Schlafzimmer außerhalb 8,440 · 3 Schlafzimmer Zentrum 21,333.</p>
</section>

<section id="utilities" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Nebenkosten, Internet & Telefon</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">⚡ Strom (CFE)</h3><p class="text-sm text-gray-700 leading-relaxed">Typischer subventionierter Haushalt: ~MX$300/Monat (~$17). Zwei Änderungen für 2026, die Sie kennen sollten: eine neue landesweite feste Monatsgebühr (~MX$20–70) und die DAC-Falle — überschreiten Sie die Subventionsgrenzen (etwa Klimaanlage den ganzen Sommer), zahlen Sie eine feste Gebühr von MX$142 plus 6–7/kWh, was die Rechnung leicht auf 2,500–5,000+ verdreifacht.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">🌐 Internet & Telefon</h3><p class="text-sm text-gray-700 leading-relaxed">Glasfaser: Telmex ab MX$349 (120 Mbps), izzi ab 379 (nach der Erhöhung im März 2026), Totalplay ab 599 (150 Mbps). Mobilfunk: Telcel Vertrag ab 229–249; AT&T Prepaid MX$200 = 12 GB/30 Tage. Wasser stieg 2026 um 3.8–6.6% (Interapas); die kombinierten Grund-Nebenkosten liegen im Schnitt bei ~MX$757 (Numbeo).</p></div>
</div>
</section>

<section id="food" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Essen: von Gorditas bis zum Dinner für zwei</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>Auf der Straße:</strong> Gorditas und Tacos vom Markt ab ~MX$15–25 pro Stück (Streetfood stieg Anfang 2026 landesweit um 9–14% — Tacos sind offiziell nicht mehr inflationssicher).</li>
  <li>• <strong>Comida corrida / menú del día:</strong> ~MX$80–150 für Suppe + Hauptgang + Agua (Schätzung je nach Viertel).</li>
  <li>• <strong>Restaurants (Numbeo, Juni 2026, Crowdsourcing):</strong> einfaches Essen ~MX$250; Mittelklasse-Dinner für zwei ~MX$775 (Spanne 600–1,500).</li>
  <li>• <strong>Lebensmittel:</strong> Milch 27.8/L, ein Dutzend Eier 48.7, Hähnchen 183/kg, Reis 33/kg — ein wöchentlicher Supermarkt-Warenkorb für zwei liegt bei etwa MX$800–1,200 (unsere Zusammenstellung aus diesen Grundnahrungsmitteln).</li>
</ul>
</section>

<section id="transport" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Nahverkehr</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der unterschätzte Vorteil: <strong>der MetroRed BRT ist kostenlos, bestätigt bis 2026</strong>. Normale Stadtbusse kosten MX$12.50 (eine Erhöhung auf 13.50 allgemein ist genehmigt, aber noch nicht in Kraft — prüfen Sie es bei Ihrer Ankunft). Kurze Uber-/DiDi-Fahrten liegen bei MX$45–65. Benzin: ~MX$23.70/L landesweit (≈$5.11/gal) — auch das ist ein Grund, warum viele Expats hier schlicht kein Auto besitzen.</p>
</section>

<section id="healthcare" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Gesundheit & Versicherung</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>Privater Allgemeinarzt:</strong> MX$500–1,200 pro Konsultation; Fachärzte typischerweise 800–1,000. Consultorios neben Apotheken sind weit günstiger.</li>
  <li>• <strong>Zahnreinigung:</strong> MX$500–800 in einfachen Kliniken.</li>
  <li>• <strong>Private Krankenvollversicherung (GMM), ~40 Jahre alt:</strong> etwa MX$12,000–35,000/Jahr je nach Versicherer und Selbstbehalt — große Spanne, holen Sie Angebote ein (CONDUSEF bietet einen kostenlosen Rechner).</li>
  <li>• <strong>Freiwillige IMSS-Anmeldung (Modalidad 33), Jahresbeitrag 2026:</strong> 40–49 Jahre = MX$13,800 (~$787/Jahr); 30–39 = 11,850; 60–69 = 19,800. Ausschlüsse für Vorerkrankungen gelten.</li>
</ul>
</section>

<section id="comparisons" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">SLP vs. CDMX, Querétaro, Mérida & Texas</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+24%</p><p class="text-sm text-gray-700">Mexiko-Stadt vs. SLP, gesamt inkl. Miete (Numbeo, Juli 2026)</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+8%</p><p class="text-sm text-gray-700">Querétaro vs. SLP (Expatistan, Mai 2026)</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+2.5%</p><p class="text-sm text-gray-700">Mérida vs. SLP inkl. Miete — die Mieten dort liegen +10% (Numbeo, Juli 2026)</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+66%</p><p class="text-sm text-gray-700">San Antonio, TX vs. SLP inkl. Miete — Mieten +138% (Numbeo, Juli 2026)</p></div>
</div>
<p class="text-xs text-gray-500 italic">Alle Vergleichsindizes aus Crowdsourcing — als Tendenz nützlich, nicht präzise.</p>
</section>

<section id="exchange-rate" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">Der Wechselkurs-Realitätscheck</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Wenn Sie in Dollar verdienen, ist dies die Zahl, die sich seit unserer Ausgabe 2025 am stärksten bewegt hat: Der Peso erstarkte von ~20.5 im Januar 2025 auf <strong>~17.54 im Juli 2026</strong> — Ihr Dollar kauft etwa 6–8% weniger Pesos als vor einem Jahr und ~15% weniger als Anfang 2025. Bankprognosen für Ende 2026 reichen von 19.30–20.50 (die USMCA-Überprüfung ist der Unsicherheitsfaktor), doch planen Sie mit dem heutigen Kurs. Kontext: Die mexikanische Inflation ist mit 3.94% (Mai 2026) gedämpft, und der Mindestlohn 2026 stieg um 13% auf MX$315/Tag — die lokalen Kosten steigen sanft, nicht sprunghaft.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kostet das Leben in San Luis Potosí 2026?<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Zu Preisen von Mitte 2026: Ein sparsamer Single kommt mit MX$14,000–16,000 (~$800–915 USD) pro Monat aus, ein komfortabler Single mit MX$25,000–29,000 (~$1,425–1,655), ein Paar mit MX$33,000–40,000 (~$1,880–2,280) und eine vierköpfige Familie mit MX$60,000–70,000 (~$3,420–3,990). Umrechnung zu 17.54 MXN/USD (Juli 2026).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie hoch ist die Miete in San Luis Potosí?<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Durchschnittswerte aus Crowdsourcing (Numbeo, Juni 2026): 1-Schlafzimmer-Wohnung im Zentrum ~MX$11,800 (~$673 USD), außerhalb ~MX$8,440; 3-Schlafzimmer-Wohnung im Zentrum ~MX$21,333. Echte Angebote reichen von ~MX$5,000–9,500 in günstigen Colonias über MX$10,000–20,000 möbliert rund um Carranza/Tequis bis MX$22,000–34,000 in Lomas und Luxustürmen.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist San Luis Potosí günstiger als Mexiko-Stadt oder Querétaro?<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja bei beiden (Crowdsourcing-Indizes): Mexiko-Stadt ist insgesamt inklusive Miete etwa 24% teurer (Numbeo, Juli 2026) und Querétaro etwa 8% teurer (Expatistan, Mai 2026). Gegenüber den USA ist der Unterschied dramatisch: San Antonio, TX kostet inklusive Miete ~66% mehr, bei ~138% höheren Mieten.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kosten Nebenkosten und Internet in SLP?<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Eine subventionierte CFE-Stromrechnung für einen typischen Haushalt liegt bei ~MX$300/Monat (~$17) — überschreiten Sie jedoch die Subventionsgrenzen (starke Klimaanlagen-Nutzung), kann der DAC-Tarif sie verdreifachen. Glasfaser-Internet: Telmex ab MX$349, izzi ab MX$379 (nach der Preiserhöhung im März 2026), Totalplay ab MX$599. Mobilfunktarife: MX$200–250/Monat reichen für die meisten. Beachten Sie: CFE führte 2026 landesweit eine neue feste Monatsgebühr ein (~MX$20–70).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie ist die Wechselkurslage für Dollar-Verdiener 2026?<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Peso ist stark: ~17.54 MXN/USD im Juli 2026, rund 6–8% stärker als ein Jahr zuvor — Ihre Dollar kaufen spürbar weniger Pesos als 2025. Bankprognosen für Ende 2026 reichen von 19.30 bis 20.50, wobei die USMCA-Handelsüberprüfung der Hauptunsicherheitsfaktor ist, sodass Dollar-Verdiener Entlastung sehen könnten — oder auch nicht. Kalkulieren Sie mit dem heutigen Kurs, nicht mit einem erhofften.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Banxico-FIX-Kurs (2. Juli 2026); Numbeo San Luis Potosí (aktualisiert am 19. Juni 2026 — Crowdsourcing, 21 Beitragende, durchgehend gekennzeichnet); Mietangebote von Inmuebles24, Trovit, iCasas und Lamudi (Momentaufnahmen vom Juli 2026); CFE-Tarife 2026 und die neue feste Gebühr (offizielle Tarif-Aggregatoren); Interapas-Erhöhungen 2026 (El Sol de San Luis / Landeskongress); veröffentlichte 2026er-Tarife von Telmex, izzi (El Financiero, Erhöhung März 2026), Totalplay, Telcel und AT&T; nationale Benzinpreise (CNE via Infobae, Juli 2026); Streetfood-Inflation (La Jornada / TV Azteca, Jan. 2026); IMSS-Modalidad-33-Tabellen 2026; INEGI-Inflation (Mai 2026); CONASAMI-Mindestlohn 2026 (DOF); Vergleichsindizes von Numbeo und Expatistan (Daten im Text); Wise/CityCost-Schätzung 2026. Einzelne Angebote sind Momentaufnahmen, keine Mediane — behandeln Sie Spannen als Ausgangspunkte.</p>
</section>

<div class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Rechnen Sie den Umzug nach SLP durch?</p>
  <p class="text-green-100 text-sm mb-4">Kombinieren Sie das mit unserer Sicherheitsanalyse und unserem Wohnratgeber — und erhalten Sie den wöchentlichen Lokal-Newsletter kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie viel kostet das Leben in San Luis Potosí 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zu Preisen von Mitte 2026: Ein sparsamer Single kommt mit MX$14,000–16,000 (~$800–915 USD) pro Monat aus, ein komfortabler Single mit MX$25,000–29,000 (~$1,425–1,655), ein Paar mit MX$33,000–40,000 (~$1,880–2,280) und eine vierköpfige Familie mit MX$60,000–70,000 (~$3,420–3,990). Umrechnung zu 17.54 MXN/USD (Juli 2026)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hoch ist die Miete in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durchschnittswerte aus Crowdsourcing (Numbeo, Juni 2026): 1-Schlafzimmer-Wohnung im Zentrum ~MX$11,800 (~$673 USD), außerhalb ~MX$8,440; 3-Schlafzimmer-Wohnung im Zentrum ~MX$21,333. Echte Angebote reichen von ~MX$5,000–9,500 in günstigen Colonias über MX$10,000–20,000 möbliert rund um Carranza/Tequis bis MX$22,000–34,000 in Lomas und Luxustürmen."
      }
    },
    {
      "@type": "Question",
      "name": "Ist San Luis Potosí günstiger als Mexiko-Stadt oder Querétaro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja bei beiden (Crowdsourcing-Indizes): Mexiko-Stadt ist insgesamt inklusive Miete etwa 24% teurer (Numbeo, Juli 2026) und Querétaro etwa 8% teurer (Expatistan, Mai 2026). Gegenüber den USA ist der Unterschied dramatisch: San Antonio, TX kostet inklusive Miete ~66% mehr, bei ~138% höheren Mieten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel kosten Nebenkosten und Internet in SLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine subventionierte CFE-Stromrechnung für einen typischen Haushalt liegt bei ~MX$300/Monat (~$17) — überschreiten Sie jedoch die Subventionsgrenzen (starke Klimaanlagen-Nutzung), kann der DAC-Tarif sie verdreifachen. Glasfaser-Internet: Telmex ab MX$349, izzi ab MX$379 (nach der Preiserhöhung im März 2026), Totalplay ab MX$599. Mobilfunktarife: MX$200–250/Monat reichen für die meisten. Beachten Sie: CFE führte 2026 landesweit eine neue feste Monatsgebühr ein (~MX$20–70)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie ist die Wechselkurslage für Dollar-Verdiener 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Peso ist stark: ~17.54 MXN/USD im Juli 2026, rund 6–8% stärker als ein Jahr zuvor — Ihre Dollar kaufen spürbar weniger Pesos als 2025. Bankprognosen für Ende 2026 reichen von 19.30 bis 20.50, wobei die USMCA-Handelsüberprüfung der Hauptunsicherheitsfaktor ist, sodass Dollar-Verdiener Entlastung sehen könnten — oder auch nicht. Kalkulieren Sie mit dem heutigen Kurs, nicht mit einem erhofften."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<div class="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-green-900 mb-3">この記事の内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-green-800 text-sm">
    <a href="#budgets" class="hover:underline">→ プロフィール別の月間予算</a>
    <a href="#rent" class="hover:underline">→ 地区別の家賃（実際の物件）</a>
    <a href="#utilities" class="hover:underline">→ 光熱費・インターネット・電話</a>
    <a href="#food" class="hover:underline">→ 食費：ゴルディータから二人のディナーまで</a>
    <a href="#transport" class="hover:underline">→ 交通（無料のBRT！）</a>
    <a href="#healthcare" class="hover:underline">→ 医療と保険</a>
    <a href="#comparisons" class="hover:underline">→ CDMX・ケレタロ・メリダ・テキサスとの比較</a>
    <a href="#exchange-rate" class="hover:underline">→ 為替レートの現実チェック</a>
  </nav>
  <p class="mt-4 text-sm text-green-700 italic">2026年半ばの価格、すべての数値は出典と時期を明記 · 換算レートは17.54 MXN/USD（Banxico、2026年7月2日）</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>2026年の正直な見出し：サンルイス・ポトシは依然としてメキシコで最も生活費の安い都市の一つですが、あなたのドルで買えるペソは昨年より6–8%少なくなっています。</strong>以下は2026年半ばの実際の数字です：実際の物件から集めた家賃、新しいCFE料金、コミダ・コリーダの実際の価格、そして$800から$4,000 USDまでの月間予算の全体像。
</p>

<section id="budgets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">プロフィール別の月間予算</h2>
</div>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">サンルイス・ポトシの月間予算 2026</caption>
    <thead class="bg-green-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">プロフィール</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">MXN/月</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">USD/月</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">前提条件</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">倹約家の単身者</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$14,000–16,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$800–915 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">低価格エリアのアパート、自炊＋屋台料理、バス/無料のMetroRed</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">快適な単身者</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$25,000–29,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$1,425–1,655 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">テキス/セントロの家具付き1ベッドルーム、週1回の外食、Uber、民間保険</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">カップル</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$33,000–40,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$1,880–2,280 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">テキス/ロマスの2ベッドルーム、すべてが約1.6倍に</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">4人家族</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$60,000–70,000 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$3,420–3,990 USD</td>
        <td class="px-4 py-3 text-sm text-gray-600">3ベッドルーム＋学校/習い事；Numbeoのバスケットは高めに偏っており、多くの家族はこれより少なく済ませています</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">上記の数値に基づく編集部の推計、2026年半ばの価格。換算レートは17.54 MXN/USD（Banxico、2026年7月2日）。</p>
<p class="text-sm text-gray-600 leading-relaxed">照合：Wise/CityCostは独自にSLPの単身者を月約$1,508 USDと推計しており（2026年）、当方の「快適な単身者」の範囲にちょうど収まります。</p>
</section>

<section id="rent" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">地区別の家賃 — 2026年7月の実際の物件から</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Centro Histórico</h3><p class="text-sm text-gray-700">改装済み/高級物件はMX$22,000–25,000（パルケ・サンフランシスコに面した1ベッドルームが25,000で掲載）；古い未改装の物件はずっと安く始まります — Numbeoの中心部の範囲は約MX$4,000–8,000から。ここでは趣に追加費用がかかります。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Carranza / Tequisquiapan</h3><p class="text-sm text-gray-700">家具付き賃貸の中心地：カランサ通りの光熱費込みのロフトがMX$10,000、半ブロック先の家具付き2ベッドルームが13,000、ハルディン・デ・テキス近くの家具付き1ベッドルームが20,000、高級タワーが約31,000。家具付きの上乗せはMX$3,000–6,000を見込んでください。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Lomas</h3><p class="text-sm text-gray-700">3ベッドルーム家具付きMX$22,500–23,000（＋約2,200の管理費）、家具なしは13,000から、高級タワー（Tangente 52、Punta San Luis）は30,000–34,000。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">低価格コロニア</h3><p class="text-sm text-gray-700">改装済みの基本的な2ベッドルーム約54 m²がMX$8,500–9,500；小型物件は約4,900–6,500から（光熱費込みの家具付きロフトが6,500）。</p></div>
</div>
<p class="text-xs text-gray-500 italic">これらは個別の物件（Inmuebles24/Trovit/iCasas/Lamudi、2026年7月時点のスナップショット）であり、中央値ではありません。Numbeoのクラウドソース平均（2026年6月、21人の投稿者）：1ベッドルーム中心部11,800 · 1ベッドルーム郊外8,440 · 3ベッドルーム中心部21,333。</p>
</section>

<section id="utilities" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">光熱費・インターネット・電話</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">⚡ 電気（CFE）</h3><p class="text-sm text-gray-700 leading-relaxed">典型的な補助対象の家庭：月約MX$300（約$17）。2026年に知っておくべき2つの変更点：全国一律の新しい固定月額料金（約MX$20–70）と、DACの罠 — 補助の上限を超える（夏中エアコンを使うなど）と、固定料金MX$142に加えて6–7/kWhがかかり、請求額は簡単に2,500–5,000+へと3倍になります。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">🌐 インターネット・電話</h3><p class="text-sm text-gray-700 leading-relaxed">光ファイバー：Telmexは MX$349から（120 Mbps）、izziは379から（2026年3月の値上げ後）、Totalplayは599から（150 Mbps）。携帯：Telcel後払いは229–249から；AT&Tプリペイドは MX$200で12 GB/30日。水道は2026年に3.8–6.6%上昇（Interapas）；基本的な光熱費の合計は平均約MX$757（Numbeo）。</p></div>
</div>
</section>

<section id="food" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">食費：ゴルディータから二人のディナーまで</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>屋台レベル：</strong>市場のゴルディータやタコスは1個約MX$15–25から（屋台料理は2026年初めに全国で9–14%上昇 — タコスはもはや公式にインフレ無縁ではありません）。</li>
  <li>• <strong>コミダ・コリーダ / メニュー・デル・ディア：</strong>スープ＋メイン＋アグアで約MX$80–150（地区により変動する推計）。</li>
  <li>• <strong>レストラン（Numbeo、2026年6月、クラウドソース）：</strong>カジュアルな食事は約MX$250；中級店の二人のディナーは約MX$775（範囲600–1,500）。</li>
  <li>• <strong>食料品：</strong>牛乳27.8/L、卵1ダース48.7、鶏肉183/kg、米33/kg — 二人分の週間スーパーマーケットの買い物かごはおよそMX$800–1,200（これらの必需品からの当方の構成）。</li>
</ul>
</section>

<section id="transport" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">交通</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">隠れた特典：<strong>MetroRed BRTは無料で、2026年まで継続が確認されています</strong>。通常の市バスはMX$12.50（一般料金の13.50への値上げは承認済みですが、まだ実施されていません — 到着時に確認してください）。Uber/DiDiの短距離乗車はMX$45–65。ガソリン：全国で約MX$23.70/L（≈$5.11/gal） — これも、ここの多くの外国人居住者が単に車を持たない理由の一つです。</p>
</section>

<section id="healthcare" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">医療と保険</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>民間の一般医：</strong>1回の診察でMX$500–1,200；専門医は通常800–1,000。薬局併設のconsultorioははるかに安価です。</li>
  <li>• <strong>歯のクリーニング：</strong>一般的なクリニックでMX$500–800。</li>
  <li>• <strong>民間の高額医療保険（GMM）、約40歳：</strong>保険会社と免責額により年間およそMX$12,000–35,000 — 幅が広いので見積もりを取りましょう（CONDUSEFに無料のシミュレーターがあります）。</li>
  <li>• <strong>IMSS任意加入（Modalidad 33）、2026年の年額：</strong>40–49歳＝MX$13,800（約$787/年）；30–39歳＝11,850；60–69歳＝19,800。既往症の除外が適用されます。</li>
</ul>
</section>

<section id="comparisons" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">SLP対CDMX・ケレタロ・メリダ・テキサス</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+24%</p><p class="text-sm text-gray-700">メキシコシティ対SLP、家賃込みの総合（Numbeo、2026年7月）</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+8%</p><p class="text-sm text-gray-700">ケレタロ対SLP（Expatistan、2026年5月）</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+2.5%</p><p class="text-sm text-gray-700">メリダ対SLP、家賃込み — 現地の家賃は+10%（Numbeo、2026年7月）</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+66%</p><p class="text-sm text-gray-700">サンアントニオ（テキサス）対SLP、家賃込み — 家賃は+138%（Numbeo、2026年7月）</p></div>
</div>
<p class="text-xs text-gray-500 italic">すべてクラウドソースの比較指数 — 傾向として有用ですが、正確ではありません。</p>
</section>

<section id="exchange-rate" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">為替レートの現実チェック</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">ドルで稼いでいる場合、2025年版以来最も動いたのがこの数字です：ペソは2025年1月の約20.5から<strong>2026年7月の約17.54</strong>へと上昇しました — あなたのドルで買えるペソは1年前より約6–8%少なく、2025年初めより約15%少なくなっています。2026年後半の銀行予測は19.30–20.50の範囲（USMCAの見直しが不確定要素）ですが、今日のレートで計画してください。背景：メキシコのインフレは3.94%（2026年5月）と落ち着いており、2026年の最低賃金は13%上昇して日額MX$315になりました — 地域の物価は急騰ではなく緩やかに上昇しています。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サンルイス・ポトシで2026年に暮らすといくらかかりますか？<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">2026年半ばの価格で：倹約家の単身者は月MX$14,000–16,000（約$800–915 USD）、快適な単身者はMX$25,000–29,000（約$1,425–1,655）、カップルはMX$33,000–40,000（約$1,880–2,280）、4人家族はMX$60,000–70,000（約$3,420–3,990）で暮らせます。換算レートは17.54 MXN/USD（2026年7月）。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サンルイス・ポトシの家賃はいくらですか？<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">クラウドソース平均（Numbeo、2026年6月）：中心部の1ベッドルーム約MX$11,800（約$673 USD）、郊外約MX$8,440；中心部の3ベッドルーム約MX$21,333。実際の物件は、低価格コロニアの約MX$5,000–9,500から、カランサ/テキス周辺の家具付きMX$10,000–20,000、ロマスや高級タワーのMX$22,000–34,000まで幅があります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サンルイス・ポトシはメキシコシティやケレタロより安いですか？<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">どちらに対しても安いです（クラウドソース指数）：メキシコシティは家賃込みの総合で約24%高く（Numbeo、2026年7月）、ケレタロは約8%高い（Expatistan、2026年5月）。米国との差は劇的で：サンアントニオ（テキサス）は家賃込みで約66%高く、家賃は約138%高いです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">SLPの光熱費とインターネットはいくらかかりますか？<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">典型的な家庭の補助付きCFE電気料金は月約MX$300（約$17）ですが、補助の上限を超える（エアコンの多用）とDAC料金が3倍になることがあります。光ファイバーインターネット：TelmexはMX$349から、izziはMX$379から（2026年3月の値上げ後）、TotalplayはMX$599から。携帯プラン：MX$200–250/月でほとんどの人をカバーします。なお、CFEは2026年に全国で新しい固定月額料金（約MX$20–70）を追加しました。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">2026年のドル収入者にとって為替レートの状況はどうですか？<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">ペソは強く：2026年7月で約17.54 MXN/USD、1年前より約6–8%強く — あなたのドルで買えるペソは2025年より明らかに少なくなっています。2026年後半の銀行予測は19.30から20.50の範囲で、USMCA貿易見直しが主な不確定要素のため、ドル収入者は緩和を見るかもしれません — あるいは見ないかもしれません。期待するレートではなく、今日のレートで予算を組みましょう。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Banxico FIXレート（2026年7月2日）；Numbeo サンルイス・ポトシ（2026年6月19日更新 — クラウドソース、21人の投稿者、全体を通して明記）；Inmuebles24、Trovit、iCasas、Lamudiの賃貸物件（2026年7月時点のスナップショット）；CFEの2026年料金と新しい固定料金（公式料金アグリゲーター）；Interapasの2026年値上げ（El Sol de San Luis／州議会）；Telmex、izzi（El Financiero、2026年3月の値上げ）、Totalplay、Telcel、AT&Tが公表した2026年プラン；全国のガソリン価格（CNE via Infobae、2026年7月）；屋台料理のインフレ（La Jornada／TV Azteca、2026年1月）；IMSS Modalidad 33 2026年表；INEGIインフレ（2026年5月）；CONASAMI 2026年最低賃金（DOF）；NumbeoとExpatistanの比較指数（日付は本文中）；Wise/CityCostの2026年推計。個別の物件は中央値ではなくスナップショットです — 範囲は出発点として扱ってください。</p>
</section>

<div class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">SLPへの引っ越しを計算していますか？</p>
  <p class="text-green-100 text-sm mb-4">これを当方の安全性分析と滞在先ガイドと組み合わせて — 毎週の地域ニュースレターを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">San Luis Way Weeklyを購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "サンルイス・ポトシで2026年に暮らすといくらかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026年半ばの価格で：倹約家の単身者は月MX$14,000–16,000（約$800–915 USD）、快適な単身者はMX$25,000–29,000（約$1,425–1,655）、カップルはMX$33,000–40,000（約$1,880–2,280）、4人家族はMX$60,000–70,000（約$3,420–3,990）で暮らせます。換算レートは17.54 MXN/USD（2026年7月）。"
      }
    },
    {
      "@type": "Question",
      "name": "サンルイス・ポトシの家賃はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "クラウドソース平均（Numbeo、2026年6月）：中心部の1ベッドルーム約MX$11,800（約$673 USD）、郊外約MX$8,440；中心部の3ベッドルーム約MX$21,333。実際の物件は、低価格コロニアの約MX$5,000–9,500から、カランサ/テキス周辺の家具付きMX$10,000–20,000、ロマスや高級タワーのMX$22,000–34,000まで幅があります。"
      }
    },
    {
      "@type": "Question",
      "name": "サンルイス・ポトシはメキシコシティやケレタロより安いですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "どちらに対しても安いです（クラウドソース指数）：メキシコシティは家賃込みの総合で約24%高く（Numbeo、2026年7月）、ケレタロは約8%高い（Expatistan、2026年5月）。米国との差は劇的で：サンアントニオ（テキサス）は家賃込みで約66%高く、家賃は約138%高いです。"
      }
    },
    {
      "@type": "Question",
      "name": "SLPの光熱費とインターネットはいくらかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "典型的な家庭の補助付きCFE電気料金は月約MX$300（約$17）ですが、補助の上限を超える（エアコンの多用）とDAC料金が3倍になることがあります。光ファイバーインターネット：TelmexはMX$349から、izziはMX$379から（2026年3月の値上げ後）、TotalplayはMX$599から。携帯プラン：MX$200–250/月でほとんどの人をカバーします。なお、CFEは2026年に全国で新しい固定月額料金（約MX$20–70）を追加しました。"
      }
    },
    {
      "@type": "Question",
      "name": "2026年のドル収入者にとって為替レートの状況はどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ペソは強く：2026年7月で約17.54 MXN/USD、1年前より約6–8%強く — あなたのドルで買えるペソは2025年より明らかに少なくなっています。2026年後半の銀行予測は19.30から20.50の範囲で、USMCA貿易見直しが主な不確定要素のため、ドル収入者は緩和を見るかもしれません — あるいは見ないかもしれません。期待するレートではなく、今日のレートで予算を組みましょう。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
    .eq('slug', SLUG);
  if (error) {
    console.error('Update failed:', error);
    process.exit(1);
  }

  const { data, error: fetchError } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('slug', SLUG)
    .single();
  if (fetchError) {
    console.error('Re-fetch failed:', fetchError);
    process.exit(1);
  }

  const tagCount = (html) => (html.match(/<[^>]+>/g) || []).length;
  const jsonLd = (html) => {
    const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!m) return { ok: false, reason: 'no JSON-LD block' };
    try { JSON.parse(m[1]); return { ok: true }; }
    catch (e) { return { ok: false, reason: e.message }; }
  };
  const figures = (html) => {
    const keys = ['14,000', '16,000', '17.54', '20.5', '3.94%', '6–8%', '13,800',
      '787', '12.50', '23.70', '5.11', '315', '757', '138%', '24%', '8%', '66%',
      '11,800', '21,333', '349', '379', '599', '142', '9–14%', '3.8–6.6%'];
    return keys.filter((k) => !html.includes(k));
  };

  const enTags = tagCount(data.content);
  console.log('EN tag count:', enTags);
  console.log('DE tag count:', tagCount(data.content_de), '| differs from EN:', data.content_de !== data.content);
  console.log('JA tag count:', tagCount(data.content_ja), '| differs from EN:', data.content_ja !== data.content);
  console.log('DE JSON-LD:', jsonLd(data.content_de));
  console.log('JA JSON-LD:', jsonLd(data.content_ja));
  console.log('DE missing figures:', figures(data.content_de));
  console.log('JA missing figures:', figures(data.content_ja));

  const leftoverEn = /\b(Monthly|Profile|Assumptions|Sources|Subscribe|neighborhood|utilities|Healthcare|exchange-rate reality|Frugal|Comfortable single|Couple|Family of four)\b/;
  console.log('DE leftover EN marker:', leftoverEn.test(data.content_de.replace(/<[^>]+>/g, '')));
  console.log('JA leftover EN marker:', leftoverEn.test(data.content_ja.replace(/<[^>]+>/g, '')));
}

main();
