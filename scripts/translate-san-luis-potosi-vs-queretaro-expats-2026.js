// Native German + Japanese translations for the blog post
// `san-luis-potosi-vs-queretaro-expats-2026`. Idempotent: updates content_de and
// content_ja by slug, then verifies by re-fetching. HTML structure, tags,
// attributes, hrefs, image src, prices/figures, city/source names, dates and
// JSON-LD keys are preserved byte-for-byte; only human-readable text nodes are
// translated. German uses formal "Sie"; Japanese uses polite です・ます with
// proper nouns kept in Latin script.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-vs-queretaro-expats-2026';

const CONTENT_DE = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Zwei an das Bajío grenzende Hauptstädte, 200 km voneinander entfernt, die um dieselben Auswanderer konkurrieren — mit wirklich unterschiedlichen Ansätzen.</strong> Querétaro ist Mexikos Boomstadt: glanzvoll, gut angebunden, teuer und unter dem eigenen Wachstum ächzend. San Luis Potosí ist die Preis-Leistungs-Wahl: günstiger, ruhiger, mexikanischer, mit der spektakulärsten Natur des Landes ganz in der Nähe. Hier ist der ehrliche direkte Vergleich, jede Zahl mit Quelle.
</p>

<div class="speakable bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 md:p-8 mb-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Das Fazit in einem Absatz</h2>
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>Wählen Sie Querétaro</strong>, wenn Sie häufig in die USA fliegen, eine große etablierte Auswanderer-Szene wünschen, Spitzenkrankenhäuser oder eine Stelle im formellen Sektor brauchen — und insgesamt rund 8% mehr zahlen können, bei 25–40% höheren Wohnkosten. <strong>Wählen Sie San Luis Potosí</strong>, wenn Sie möchten, dass Ihr Geld weiter reicht, eine Stadt bevorzugen, die nicht mit sich selbst um Wasser und Verkehr ringt, und lieber die Huasteca Potosina als eine Weinroute hätten. Keine der beiden ist falsch; sie optimieren unterschiedliche Dinge.
  </p>
</div>

<section id="scoreboard" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">Die Wertungstabelle</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Vergleichstabelle SLP vs Querétaro 2026</caption>
    <thead class="bg-indigo-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Kategorie</th><th scope="col" class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Sieger</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Die Zahlen</th></tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Lebenshaltungskosten & Wohnen</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">insgesamt ~8% günstiger; Mieten 25–30% niedriger; Kauf ~40% günstiger pro m² (Numbeo/Expatistan 2026)</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sicherheitsempfinden</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">ENSU März 2026: 35.3% fühlen sich unsicher vs 57.6% — wobei SLP sich am schnellsten in ganz Mexiko verbessert</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Formelle Arbeitsplätze & Löhne</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Arbeitslosigkeit 2.2% vs 3.0%; Informalität 39.0% vs 55.7% (INEGI Q1 2026) — die Informalitätslücke ist der eigentliche Punkt</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Flüge & Anbindung an CDMX</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">~2.4M Fluggäste, ~9 US-Strecken + Madrid, CDMX 2.5–3h (Zug 2027) vs 835k Fluggäste, 3 US-Strecken, CDMX ~5h</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Spitzenmedizin</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Star Médica QRO ist das viertbeste Privatkrankenhaus landesweit (Funsalud/Blutitude 2025); das beste in SLP belegt Platz 47</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Wachstumsdruck (Wasser, Verkehr, Preise)</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">QRO wuchs in einem Jahrzehnt um ~40%: Grundwasserdefizit, 2025 Wassersperren für 300+ colonias, 90% der neuen Wohnungen >MX$2M, Rechenzentren belasten das Stromnetz. SLP wuchs halb so schnell (auch wenn sein Realito-Aquädukt ebenfalls versagt)</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Zugang zur Natur</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Die Huasteca Potosina (3.5h) und Real de Catorce (3.5h) vs Weinland und Bernal — spektakulär schlägt angenehm</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Infrastruktur für Auswanderer</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">~37,000 gemeldete ausländische Einwohner, 75+ Nationalitäten, 3 IB-Schulen, etablierte Neubürger-Clubs vs SLPs kleinerer Firmen-Szene (deutsch/japanisch)</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Klima</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-gray-100 text-gray-700 rounded-full px-3 py-1">Unentschieden</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Nahezu identisch, hochgelegen und halbtrocken: QRO ~1.5–2°C wärmer und feuchter (528 vs 392 mm/Jahr); SLP hat kältere Winternächte</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-4">Endstand: QRO 4, SLP 3, Unentschieden 1 — aber gewichten Sie die Kategorien danach, was für SIE zählt; genau darum geht es.</p>
</section>

<section id="cost" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Geld: Die Lücke liegt beim Wohnen</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-emerald-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Monatlich (MXN, Numbeo Jun 2026)</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Querétaro</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">SLP</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Miete 1-Zimmer, Zentrum</td><td class="px-4 py-3 text-sm text-gray-700">$15,563</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$11,800</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">Miete 3-Zimmer, Zentrum</td><td class="px-4 py-3 text-sm text-gray-700">$27,125</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$21,333</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Kaufpreis/m², Zentrum</td><td class="px-4 py-3 text-sm text-gray-700">$40,718</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$25,644</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der Kontext, der die Tabelle erklärt: Querétaro ist der <strong>drittteuerste Bundesstaat Mexikos für Wohnen</strong> (SHF, nach CDMX und BCS; durchschnittliches Eigenheim ~MX$2.34M im Jahr 2025), ~90% seiner neuen Wohnungen kosten über MX$2M, und die Mietnachfrage stieg im Jahresvergleich um 22%. Immobilien in SLP haben sich seit 2017 zwar mit einer ähnlichen <em>Rate</em> verteuert — aber von einer viel niedrigeren Basis aus. Alle Zahlen zu SLP in unserer <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">Aufschlüsselung der Lebenshaltungskosten</a>.</p>
</section>

<section id="growth" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Der Boomstadt-Aufschlag: Querétaros Wachstumsschmerzen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der Ballungsraum Querétaro gewann in einem Jahrzehnt über eine halbe Million Menschen hinzu (+39.5% laut offizieller Zählung 2020 — Mexikos am zweitschnellsten wachsender Bundesstaat), und Prognosen sprechen von weiteren +24% bis 2030. Die Rechnung kommt jetzt an:</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• <strong>Wasser:</strong> Aus dem Aquifer Valle de Querétaro wird fast doppelt so viel entnommen wie neu gebildet wird (Defizit −63.7 hm³/Jahr, CONAGUA); im September 2025 wurde die Versorgung von 300+ colonias mit Rationierung und armeegestützten Tankwagen gekappt; die zentrale Lösung ist eine Abwasseraufbereitungsanlage für MX$4.2 Mrd., geplant für 2029.</li>
  <li>• <strong>Belastung der Infrastruktur:</strong> Der Rechenzentrums-Boom von AWS (Region über $5 Mrd., gestartet Jan 2025), Microsoft ($1.3 Mrd.) und CloudHQ ($4.8 Mrd., 900 MW) belastet nachweislich die Strom- und Wassersysteme.</li>
  <li>• <strong>Fahrzeuge:</strong> Der zugelassene Fahrzeugbestand wuchs in einem Jahrzehnt um 66% — Staus auf der Autobahn 57 und der Bernardo Quintana sind chronisch (keine der beiden Städte erscheint im TomTom-Index, es gibt also kein sauberes Ranking).</li>
</ul>
<p class="text-gray-800 leading-relaxed">Ehrlichkeit verlangt den Blick in den Spiegel: SLP wuchs etwa halb so schnell, doch sein eigenes El-Realito-Aquädukt ist seit 2015 Dutzende Male ausgefallen (allein 2025 rund 2 Monate außer Betrieb), und 11 der 19 Aquifere des Bundesstaates sind erschöpft. Der Unterschied liegt im Grad, nicht in der Art — SLPs Wasserstress ist ein chronisches Ärgernis; der von Querétaro ist eine strukturelle Krise, die mit dem Hyperwachstum kollidiert.</p>
</section>

<section id="jobs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">Arbeitsplätze & die Auswanderer-Gemeinschaften</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-purple-50 rounded-xl p-6"><h3 class="font-bold text-lg text-purple-900 mb-2">Querétaro</h3><p class="text-sm text-gray-700 leading-relaxed">Luft- und Raumfahrt (80+ Unternehmen; allein Safran beschäftigt vor Ort über 3,300), Rechenzentren, Unternehmensdienstleistungen. Arbeitslosigkeit 2.2%, Informalität 39% — Mexikos formalisiertester Arbeitsmarkt außerhalb von Monterrey. ~37,000 gemeldete ausländische Einwohner aus 75+ Nationalitäten (Venezolaner, Amerikaner, Kolumbianer, Japaner), 3 IB-Schulen, jahrzehntealte Neubürger-Clubs.</p></div>
  <div class="bg-emerald-50 rounded-xl p-6"><h3 class="font-bold text-lg text-emerald-900 mb-2">San Luis Potosí</h3><p class="text-sm text-gray-700 leading-relaxed">Schwergewicht der Automobilbranche: BMWs Neue-Klasse-Erweiterung für €800M (EV-Produktion mit Batterien der neuen Generation ab 2027, ~1,000 neue Arbeitsplätze), GM, Cummins, Draexlmaier, 62 japanische Unternehmen. Arbeitslosigkeit 3.0%, aber Informalität 55.7%. Die ausländische Gemeinschaft ist kleiner und unternehmensgeprägt — deutsche und japanische Ankerpunkte (Centro Cultural Alemán seit 1995, Nikkei SLP), eine vollständige IB-Schule (Terranova). Eine Zensus-Feinheit: SLP hat tatsächlich mehr in den USA geborene Einwohner als QRO — größtenteils Kinder zurückgekehrter Migrantenfamilien.</p></div>
</div>
</section>

<section id="lifestyle" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">Lebensstil, Gesundheit & Anbindung</h2>
</div>
<ul class="space-y-3 mb-4 text-gray-800">
  <li>• <strong>Wochenenden:</strong> QRO hat die Wein-und-Käse-Route (30+ Weingüter, Bernal) und 7 Pueblos Mágicos; SLP hält mit 6 Pueblos Mágicos dagegen und den echten Trümpfen — der <a href="/blog/huasteca-potosina-itinerary-2026" class="text-indigo-700 underline">Huasteca</a> und <a href="/blog/real-de-catorce-guide-2026" class="text-indigo-700 underline">Real de Catorce</a>, beide ~3.5 h entfernt. Angenehm vs spektakulär; wählen Sie Ihre Glaubensrichtung.</li>
  <li>• <strong>Gesundheit:</strong> QRO gewinnt an der Spitze klar: Star Médica Querétaro wurde als <strong>viertbestes Privatkrankenhaus Mexikos</strong> eingestuft (Funsalud/Blutitude 2025) vs SLPs bestem auf Platz 47. Die alltägliche Versorgung ist vergleichbar — siehe unseren <a href='/blog/healthcare-san-luis-potosi-expats-2026' class='text-indigo-700 underline'>SLP-Gesundheitsratgeber</a>.</li>
  <li>• <strong>Herauskommen:</strong> Der Flughafen QRO beförderte 2025 ~2.4M Fluggäste (~9 US-Strecken + Madrid) vs SLPs ~835K (Dallas, Houston, San Antonio). CDMX: 2.5–3 h von QRO (Personenzug für 2027 angepeilt) vs ~5 h von SLP — wobei auch ein Bahnabschnitt QRO–SLP geplant ist.</li>
  <li>• <strong>Klima:</strong> Praktisch identisch, hochgelegen und halbtrocken (1,820 vs 1,864 m). QRO ist ~2°C wärmer mit mehr Regen (528 vs 392 mm/Jahr); SLPs Winter beißen nachts etwas stärker. Keine der beiden braucht die meiste Zeit des Jahres Klimaanlage oder Heizung.</li>
</ul>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist San Luis Potosí oder Querétaro besser für Auswanderer?<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Es kommt darauf an, was Sie optimieren möchten. Querétaro gewinnt beim Sicherheitsempfinden (nur 35% fühlen sich unsicher vs 58% in SLP), bei der Fluganbindung (~2.4M Fluggäste, ~9 US-Ziele plus Madrid), bei Arbeitsplätzen im formellen Sektor und bei der Spitzenmedizin (ein Krankenhaus unter den Top 5 des Landes). San Luis Potosí gewinnt bei den Kosten (insgesamt ~8% günstiger, Mieten 25–30% niedriger, Immobilien ~40% günstiger pro m²), beim ruhigeren Wachstum und beim Zugang zu spektakulärer Natur (die Huasteca und Real de Catorce). Wählen Sie QRO für Glanz und Anbindung; wählen Sie SLP für Preis-Leistung und Authentizität.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel günstiger ist San Luis Potosí als Querétaro?<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Insgesamt etwa 8% (Expatistan, Mai 2026), aber die Wohnkostenlücke ist viel größer: Ein 1-Zimmer-Apartment im Zentrum kostet in SLP durchschnittlich MX$11,800 vs MX$15,563 in Querétaro, und der Kauf im Zentrum liegt bei ~MX$25,600/m² vs ~MX$40,700/m² (Numbeo, Juni 2026, per Crowdsourcing). Querétaro ist Mexikos drittteuerster Bundesstaat für Wohnen nach CDMX und Baja California Sur.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist Querétaro sicherer als San Luis Potosí?<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Vom Empfinden her eindeutig: In INEGIs Umfrage vom März 2026 fühlen sich nur 35.3% der Einwohner von Querétaro unsicher vs 57.6% in SLP. Beide Bundesstaaten tragen dieselbe US-Reisewarnung der Stufe 2 ohne Reisebeschränkungen. Die Feinheit: SLP ist der sich bei Tötungsdelikten am schnellsten verbessernde Bundesstaat Mexikos (-81% Jan–Mai 2026, laut Bundesdaten), und die Rate seiner Hauptstadt (~8.2/100k) ist mit Austin oder Denver vergleichbar — die Lücke ist real, aber schließt sich.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was sind die Nachteile von Querétaro?<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Preis seines Booms: Der Ballungsraum wuchs in einem Jahrzehnt um ~40%, sein Aquifer weist ein massives Defizit auf (die Entnahme ist fast doppelt so hoch wie die Neubildung), im September 2025 wurde 300+ colonias das Wasser mit Rationierung gekappt, ~90% der neuen Wohnungen kosten über MX$2 Millionen, und ein Rechenzentrums-Boom (AWS, Microsoft, CloudHQ) belastet die Strom- und Wasserinfrastruktur. Sie zahlen mehr, um um knappere Ressourcen zu konkurrieren.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welche Stadt hat die besseren Flüge in die USA?<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Querétaro, mit großem Abstand: ~2.4 Millionen Fluggäste im Jahr 2025 mit rund 9 US-Zielen (Dallas, Houston, Chicago, Detroit, Atlanta, San Antonio, Denver, LA, Orlando) plus einer Madrid-Strecke. SLP beförderte ~835,000 Fluggäste mit 3 US-Strecken (Dallas, Houston, San Antonio). QRO liegt zudem 2.5–3 h von Mexico City entfernt (mit einem für 2027 angepeilten Personenzug); SLP ~5 h.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Verifiziert im Juli 2026: INEGI (Zensus 2020, Metropolregionen-Bevölkerung und im Ausland Geborene, ENOE-Bulletins Q1 2026 der Bundesstaaten, ENSU März 2026), CONAGUA/DOF (Aquifer-Bilanzen), Bundesstaat Querétaro und Presse (Wassersperren Sept 2025, Projekt Batán, CENAMMMI-Register ausländischer Einwohner), SHF-Wohnungsindex 2025, Numbeo Juni 2026 und Expatistan Mai 2026 (per Crowdsourcing, gekennzeichnet), Ankündigungen von AWS/Microsoft/CloudHQ und Mexico Business News (Belastung durch Rechenzentren), Pressemitteilungen der BMW Group (Neue Klasse SLP), Krankenhaus-Ranking Funsalud/Blutitude 2025, Flughafenverkehr (Wikipedia/OMA/staatliche Mitteilungen 2025), Aktualisierungen zum Bahnprojekt des Bundes (Juni 2026), SMN-Klimanormalwerte 1951–2010. Wo offizielle Zahlen voneinander abweichen (Abgrenzung der Metropolregionen, Anzahl der Aquädukt-Ausfälle), verwenden wir Bandbreiten und begründen die Wahl in einer Fußnote.</p>
</section>

<div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Vergleichen Sie weitere Städte?</p>
  <p class="text-indigo-100 text-sm mb-4">Lesen Sie <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="underline font-semibold text-white">SLP vs San Miguel de Allende</a> — und erhalten Sie den wöchentlichen SLP-Überblick kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist San Luis Potosí oder Querétaro besser für Auswanderer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es kommt darauf an, was Sie optimieren möchten. Querétaro gewinnt beim Sicherheitsempfinden (nur 35% fühlen sich unsicher vs 58% in SLP), bei der Fluganbindung (~2.4M Fluggäste, ~9 US-Ziele plus Madrid), bei Arbeitsplätzen im formellen Sektor und bei der Spitzenmedizin (ein Krankenhaus unter den Top 5 des Landes). San Luis Potosí gewinnt bei den Kosten (insgesamt ~8% günstiger, Mieten 25–30% niedriger, Immobilien ~40% günstiger pro m²), beim ruhigeren Wachstum und beim Zugang zu spektakulärer Natur (die Huasteca und Real de Catorce). Wählen Sie QRO für Glanz und Anbindung; wählen Sie SLP für Preis-Leistung und Authentizität."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel günstiger ist San Luis Potosí als Querétaro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insgesamt etwa 8% (Expatistan, Mai 2026), aber die Wohnkostenlücke ist viel größer: Ein 1-Zimmer-Apartment im Zentrum kostet in SLP durchschnittlich MX$11,800 vs MX$15,563 in Querétaro, und der Kauf im Zentrum liegt bei ~MX$25,600/m² vs ~MX$40,700/m² (Numbeo, Juni 2026, per Crowdsourcing). Querétaro ist Mexikos drittteuerster Bundesstaat für Wohnen nach CDMX und Baja California Sur."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Querétaro sicherer als San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vom Empfinden her eindeutig: In INEGIs Umfrage vom März 2026 fühlen sich nur 35.3% der Einwohner von Querétaro unsicher vs 57.6% in SLP. Beide Bundesstaaten tragen dieselbe US-Reisewarnung der Stufe 2 ohne Reisebeschränkungen. Die Feinheit: SLP ist der sich bei Tötungsdelikten am schnellsten verbessernde Bundesstaat Mexikos (-81% Jan–Mai 2026, laut Bundesdaten), und die Rate seiner Hauptstadt (~8.2/100k) ist mit Austin oder Denver vergleichbar — die Lücke ist real, aber schließt sich."
      }
    },
    {
      "@type": "Question",
      "name": "Was sind die Nachteile von Querétaro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Preis seines Booms: Der Ballungsraum wuchs in einem Jahrzehnt um ~40%, sein Aquifer weist ein massives Defizit auf (die Entnahme ist fast doppelt so hoch wie die Neubildung), im September 2025 wurde 300+ colonias das Wasser mit Rationierung gekappt, ~90% der neuen Wohnungen kosten über MX$2 Millionen, und ein Rechenzentrums-Boom (AWS, Microsoft, CloudHQ) belastet die Strom- und Wasserinfrastruktur. Sie zahlen mehr, um um knappere Ressourcen zu konkurrieren."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Stadt hat die besseren Flüge in die USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Querétaro, mit großem Abstand: ~2.4 Millionen Fluggäste im Jahr 2025 mit rund 9 US-Zielen (Dallas, Houston, Chicago, Detroit, Atlanta, San Antonio, Denver, LA, Orlando) plus einer Madrid-Strecke. SLP beförderte ~835,000 Fluggäste mit 3 US-Strecken (Dallas, Houston, San Antonio). QRO liegt zudem 2.5–3 h von Mexico City entfernt (mit einem für 2027 angepeilten Personenzug); SLP ~5 h."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Bajío に隣接する2つの州都は、200 km 離れて同じ移住者層を奪い合っており、その賭け方は本当に対照的です。</strong>Querétaro はメキシコの急成長都市です。洗練され、交通の便がよく、物価が高く、自らの成長にあえいでいます。San Luis Potosí はコストパフォーマンスの選択肢です。より安く、より穏やかで、よりメキシコらしく、国内でもっとも壮観な自然がすぐ近くにあります。以下は、すべての数字に出典を付けた率直な一騎打ちです。
</p>

<div class="speakable bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 md:p-8 mb-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">ひと段落での結論</h2>
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    頻繁に米国へ飛び、大きく確立された移住者コミュニティを求め、最高水準の病院や正規雇用の仕事が必要で、住居費が25〜40%高いことも含めて全体で約8%多く支払える方は、<strong>Querétaro を選んでください</strong>。お金をより長く使いたく、水や交通をめぐって自らと格闘していない街を好み、ワインルートよりも Huasteca Potosina を取りたい方は、<strong>San Luis Potosí を選んでください</strong>。どちらも間違いではなく、最適化しているものが違うだけです。
  </p>
</div>

<section id="scoreboard" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">スコアボード</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">SLP vs Querétaro 比較スコアボード 2026</caption>
    <thead class="bg-indigo-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">項目</th><th scope="col" class="px-4 py-3 text-center text-xs font-bold text-white uppercase">勝者</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">数字</th></tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">生活費と住居</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">全体で~8%安い。家賃は25–30%低く、購入は1m²あたり~40%安い（Numbeo/Expatistan 2026）</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">体感治安</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">ENSU 2026年3月：不安を感じる人 35.3% vs 57.6%。ただし SLP はメキシコで最も速く改善している</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">正規雇用と賃金</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">失業率 2.2% vs 3.0%、非正規率 39.0% vs 55.7%（INEGI 2026年第1四半期）。非正規率の差こそが本質だ</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">フライトと CDMX へのアクセス</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">~240万人、米国路線~9本＋Madrid、CDMX まで2.5–3時間（鉄道2027年）vs 83.5万人、米国路線3本、CDMX まで~5時間</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">最高水準の医療</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Star Médica QRO は全国の民間病院で第4位（Funsalud/Blutitude 2025）。SLP 最上位は第47位</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">成長ストレス（水・交通・物価）</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">QRO は10年で~40%成長：帯水層の赤字、2025年に300以上の colonias で断水、新築アパートの90%が>MX$2M、データセンターが電力網を圧迫。SLP の成長はその半分の速さ（ただし Realito 水道橋も同様に故障する）</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">自然へのアクセス</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">Huasteca Potosina（3.5時間）と Real de Catorce（3.5時間）vs ワイン産地と Bernal。壮観が心地よさに勝る</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">移住者向けインフラ</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">登録外国人居住者~37,000人、75以上の国籍、IB 校3校、確立された新住民クラブ vs SLP のより小さな企業系（ドイツ系・日系）コミュニティ</td>
      </tr>
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">気候</td>
        <td class="px-4 py-3 text-center"><span class="text-xs font-bold bg-gray-100 text-gray-700 rounded-full px-3 py-1">引き分け</span></td>
        <td class="px-4 py-3 text-sm text-gray-600">高地の半乾燥気候でほぼ同一：QRO は~1.5–2°C 暖かく雨も多い（528 vs 392 mm/年）。SLP は冬の夜がより冷える</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-4">最終集計：QRO 4、SLP 3、引き分け 1。ただし各項目は「あなた」にとって大切なものに応じて重み付けしてください。それこそが肝心な点です。</p>
</section>

<section id="cost" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">お金：差は住居にある</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-emerald-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">月額（MXN、Numbeo 2026年6月）</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Querétaro</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">SLP</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">1BR 家賃、中心部</td><td class="px-4 py-3 text-sm text-gray-700">$15,563</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$11,800</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">3BR 家賃、中心部</td><td class="px-4 py-3 text-sm text-gray-700">$27,125</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$21,333</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">購入価格/m²、中心部</td><td class="px-4 py-3 text-sm text-gray-700">$40,718</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$25,644</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">この表を説明する背景：Querétaro は<strong>メキシコで住居費が3番目に高い州</strong>です（SHF、CDMX と BCS に次ぐ。2025年の住宅平均は~MX$2.34M）。新築アパートの約90%が MX$2M を超え、賃貸需要は前年比で22%増加しました。SLP の住宅も実は2017年以降、似たような<em>上昇率</em>で値上がりしていますが、はるかに低い水準からの上昇です。SLP の全数値は当サイトの<a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">生活費の内訳</a>でご覧いただけます。</p>
</section>

<section id="growth" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">急成長都市の代償：Querétaro の成長痛</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Querétaro の都市圏は10年で50万人以上を加えました（2020年の公式集計で+39.5%、メキシコで2番目に速い成長の州）。予測では2030年までにさらに+24%とされています。その請求書が今、届きつつあります：</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• <strong>水：</strong>Valle de Querétaro 帯水層は涵養量のほぼ2倍を汲み上げています（赤字 −63.7 hm³/年、CONAGUA）。2025年9月には300以上の colonias で給水が断たれ、給水制限と軍の支援による給水車が投入されました。切り札となる対策は MX$42億の排水再生プラントで、2029年の予定です。</li>
  <li>• <strong>インフラの逼迫：</strong>AWS（50億ドル超の地域投資、2025年1月開始）、Microsoft（13億ドル）、CloudHQ（48億ドル、900 MW）によるデータセンターの急増が、電力と水のシステムを圧迫していることが記録されています。</li>
  <li>• <strong>車両：</strong>登録車両数は10年で66%増加しました。Autobahn 57 と Bernardo Quintana の渋滞は慢性的です（どちらの都市も TomTom 指数に登場しないため、明確なランキングは存在しません）。</li>
</ul>
<p class="text-gray-800 leading-relaxed">公平を期すために鏡を見る必要があります。SLP の成長はおよそ半分の速さでしたが、自らの El Realito 水道橋は2015年以降に数十回も故障しており（2025年だけで~2か月間停止）、州内19の帯水層のうち11が枯渇しています。違いは程度の問題であって、種類の問題ではありません。SLP の水ストレスは慢性的な不便ですが、Querétaro のそれは超成長と衝突する構造的な危機です。</p>
</section>

<section id="jobs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">雇用と移住者コミュニティ</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-purple-50 rounded-xl p-6"><h3 class="font-bold text-lg text-purple-900 mb-2">Querétaro</h3><p class="text-sm text-gray-700 leading-relaxed">航空宇宙（80社以上。Safran だけで現地に3,300人以上を雇用）、データセンター、企業向けサービス。失業率2.2%、非正規率39%で、Monterrey を除けばメキシコで最も正規化された労働市場です。75以上の国籍にわたる登録外国人居住者~37,000人（ベネズエラ人、米国人、コロンビア人、日本人）、IB 校3校、数十年の歴史を持つ新住民クラブがあります。</p></div>
  <div class="bg-emerald-50 rounded-xl p-6"><h3 class="font-bold text-lg text-emerald-900 mb-2">San Luis Potosí</h3><p class="text-sm text-gray-700 leading-relaxed">自動車産業の重鎮：BMW の Neue Klasse 拡張（€8億。新世代バッテリー搭載の EV 生産が2027年に開始、~1,000人の新規雇用）、GM、Cummins、Draexlmaier、日系企業62社。失業率3.0%ですが非正規率は55.7%です。外国人コミュニティはより小さく企業中心で、ドイツ系と日系が中核です（1995年からの Centro Cultural Alemán、Nikkei SLP）。フル IB 校が1校あります（Terranova）。国勢調査のニュアンス：SLP は実は QRO より米国生まれの居住者が多く、その多くは帰還した移民家庭の子どもたちです。</p></div>
</div>
</section>

<section id="lifestyle" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">ライフスタイル、医療、そして接続性</h2>
</div>
<ul class="space-y-3 mb-4 text-gray-800">
  <li>• <strong>週末：</strong>QRO にはワインとチーズのルート（30以上のワイナリー、Bernal）と7つの Pueblos Mágicos があります。SLP は6つの Pueblos Mágicos と決定打で応えます。<a href="/blog/huasteca-potosina-itinerary-2026" class="text-indigo-700 underline">Huasteca</a> と <a href="/blog/real-de-catorce-guide-2026" class="text-indigo-700 underline">Real de Catorce</a> で、いずれも~3.5時間の距離です。心地よさ vs 壮観。ご自身の信条を選んでください。</li>
  <li>• <strong>医療：</strong>QRO は最高水準で明確に勝ります。Star Médica Querétaro は<strong>メキシコの民間病院で第4位</strong>にランクされ（Funsalud/Blutitude 2025）、SLP 最上位は第47位です。日常的な医療は同等です。当サイトの <a href='/blog/healthcare-san-luis-potosi-expats-2026' class='text-indigo-700 underline'>SLP 医療ガイド</a>をご覧ください。</li>
  <li>• <strong>外へ出る：</strong>QRO 空港は2025年に~240万人を運びました（米国路線~9本＋Madrid）。SLP は~83.5万人（Dallas、Houston、San Antonio）です。CDMX までは QRO から2.5–3時間（旅客列車は2027年を目標）、SLP から~5時間です。ただし QRO–SLP 間の鉄道区間も計画されています。</li>
  <li>• <strong>気候：</strong>高地の半乾燥気候で機能的にはほぼ同一です（1,820 vs 1,864 m）。QRO は~2°C 暖かく雨も多め（528 vs 392 mm/年）、SLP の冬は夜にやや厳しく冷えます。どちらも年間の大半はエアコンも暖房も不要です。</li>
</ul>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">移住者には San Luis Potosí と Querétaro のどちらが良いですか？<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">何を優先するかによります。Querétaro は体感治安（不安を感じる人は SLP の58%に対し35%のみ）、フライトの接続性（~240万人、米国~9都市に加えて Madrid）、正規経済の雇用、そして最高水準の医療（全国トップ5の病院）で勝ります。San Luis Potosí はコスト（全体で~8%安く、家賃は25–30%低く、不動産は1m²あたり~40%安い）、より穏やかな成長、そして壮観な自然へのアクセス（Huasteca と Real de Catorce）で勝ります。洗練と接続性なら QRO を、コストパフォーマンスと本物らしさなら SLP を選んでください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosí は Querétaro よりどのくらい安いですか？<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">全体で約8%です（Expatistan、2026年5月）が、住居費の差ははるかに大きくなります。中心部の 1BR は SLP で平均 MX$11,800、Querétaro で MX$15,563 です。中心部での購入は~MX$25,600/m² 対~MX$40,700/m² です（Numbeo、2026年6月、クラウドソース）。Querétaro は CDMX と Baja California Sur に次いで、メキシコで住居費が3番目に高い州です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Querétaro は San Luis Potosí より安全ですか？<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">体感の面では明らかにそうです。INEGI の2026年3月調査では、不安を感じる Querétaro 住民は35.3%のみで、SLP は57.6%です。両州とも旅行制限のない同じ米国レベル2の勧告下にあります。ニュアンスとしては、SLP は殺人件数でメキシコ最速で改善している州であり（2026年1〜5月で-81%、連邦データ）、州都の発生率（~8.2/10万人）は Austin や Denver に匹敵します。差は現実ですが、縮まりつつあります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Querétaro の欠点は何ですか？<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">そのブームの代償です。都市圏は10年で~40%成長し、帯水層は巨大な赤字（汲み上げが涵養のほぼ2倍）を抱え、2025年9月には300以上の colonias で給水制限を伴う断水があり、新築アパートの~90%が MX$200万を超え、データセンターのブーム（AWS、Microsoft、CloudHQ）が電力と水のインフラを圧迫しています。より乏しい資源を奪い合うために、より多く支払うことになります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">米国へのフライトはどちらの都市が良いですか？<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Querétaro が大差で有利です。2025年に~240万人、米国のおよそ9都市（Dallas、Houston、Chicago、Detroit、Atlanta、San Antonio、Denver、LA、Orlando）に加えて Madrid 路線があります。SLP は~835,000人を運び、米国路線は3本（Dallas、Houston、San Antonio）でした。QRO はさらに Mexico City まで2.5–3時間（旅客列車は2027年を目標）、SLP は~5時間です。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に検証：INEGI（2020年国勢調査の都市圏人口と外国生まれ、2026年第1四半期の ENOE 州別公報、ENSU 2026年3月）、CONAGUA/DOF（帯水層収支）、Querétaro 州および報道（2025年9月の断水、Batán プロジェクト、CENAMMMI 外国人居住者登録）、SHF 住宅指数2025、Numbeo 2026年6月および Expatistan 2026年5月（クラウドソース、明示）、AWS/Microsoft/CloudHQ の発表と Mexico Business News（データセンターによる逼迫）、BMW Group のプレス（Neue Klasse SLP）、Funsalud/Blutitude 病院ランキング2025、空港交通量（Wikipedia/OMA/2025年の州発表）、連邦鉄道プロジェクトの更新（2026年6月）、SMN 1951–2010 気候平年値。公式数値が食い違う場合（都市圏の区分、水道橋の故障回数）は、範囲を用いて選択理由を脚注で示しています。</p>
</section>

<div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">さらに他の都市も比較しますか？</p>
  <p class="text-indigo-100 text-sm mb-4"><a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="underline font-semibold text-white">SLP vs San Miguel de Allende</a> をお読みください。そして毎週の SLP ブリーフを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "移住者には San Luis Potosí と Querétaro のどちらが良いですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "何を優先するかによります。Querétaro は体感治安（不安を感じる人は SLP の58%に対し35%のみ）、フライトの接続性（~240万人、米国~9都市に加えて Madrid）、正規経済の雇用、そして最高水準の医療（全国トップ5の病院）で勝ります。San Luis Potosí はコスト（全体で~8%安く、家賃は25–30%低く、不動産は1m²あたり~40%安い）、より穏やかな成長、そして壮観な自然へのアクセス（Huasteca と Real de Catorce）で勝ります。洗練と接続性なら QRO を、コストパフォーマンスと本物らしさなら SLP を選んでください。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosí は Querétaro よりどのくらい安いですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "全体で約8%です（Expatistan、2026年5月）が、住居費の差ははるかに大きくなります。中心部の 1BR は SLP で平均 MX$11,800、Querétaro で MX$15,563 です。中心部での購入は~MX$25,600/m² 対~MX$40,700/m² です（Numbeo、2026年6月、クラウドソース）。Querétaro は CDMX と Baja California Sur に次いで、メキシコで住居費が3番目に高い州です。"
      }
    },
    {
      "@type": "Question",
      "name": "Querétaro は San Luis Potosí より安全ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "体感の面では明らかにそうです。INEGI の2026年3月調査では、不安を感じる Querétaro 住民は35.3%のみで、SLP は57.6%です。両州とも旅行制限のない同じ米国レベル2の勧告下にあります。ニュアンスとしては、SLP は殺人件数でメキシコ最速で改善している州であり（2026年1〜5月で-81%、連邦データ）、州都の発生率（~8.2/10万人）は Austin や Denver に匹敵します。差は現実ですが、縮まりつつあります。"
      }
    },
    {
      "@type": "Question",
      "name": "Querétaro の欠点は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "そのブームの代償です。都市圏は10年で~40%成長し、帯水層は巨大な赤字（汲み上げが涵養のほぼ2倍）を抱え、2025年9月には300以上の colonias で給水制限を伴う断水があり、新築アパートの~90%が MX$200万を超え、データセンターのブーム（AWS、Microsoft、CloudHQ）が電力と水のインフラを圧迫しています。より乏しい資源を奪い合うために、より多く支払うことになります。"
      }
    },
    {
      "@type": "Question",
      "name": "米国へのフライトはどちらの都市が良いですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Querétaro が大差で有利です。2025年に~240万人、米国のおよそ9都市（Dallas、Houston、Chicago、Detroit、Atlanta、San Antonio、Denver、LA、Orlando）に加えて Madrid 路線があります。SLP は~835,000人を運び、米国路線は3本（Dallas、Houston、San Antonio）でした。QRO はさらに Mexico City まで2.5–3時間（旅客列車は2027年を目標）、SLP は~5時間です。"
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
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('  FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
    .eq('id', data.id);
  if (upErr) {
    console.error('  UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('  Updated columns: content_de, content_ja');

  // Verify by re-fetching.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('  VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const countTags = (s) => (s.match(/<[^>]+>/g) || []).length;
  const parseLd = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!m) return { ok: false, reason: 'no JSON-LD block' };
    try { JSON.parse(m[1]); return { ok: true }; }
    catch (e) { return { ok: false, reason: e.message }; }
  };

  const enTags = countTags(check.content);
  const deTags = countTags(check.content_de);
  const jaTags = countTags(check.content_ja);

  const ldDe = parseLd(check.content_de);
  const ldJa = parseLd(check.content_ja);

  const deDiffers = check.content_de !== check.content;
  const jaDiffers = check.content_ja !== check.content;

  // Leftover-English heuristic: flag telltale English words in body text.
  const englishMarkers = ['The verdict', 'Choose Querétaro', 'The scoreboard', 'Winner', 'cheaper overall', 'Sources</h2>'];
  const leftoverDe = englishMarkers.filter((w) => check.content_de.includes(w));
  const leftoverJa = englishMarkers.filter((w) => check.content_ja.includes(w));

  console.log('\n  --- Verification ---');
  console.log(`  Tag counts  EN=${enTags}  DE=${deTags}  JA=${jaTags}  (match: ${enTags === deTags && enTags === jaTags})`);
  console.log(`  JSON-LD DE valid: ${ldDe.ok}${ldDe.ok ? '' : ' — ' + ldDe.reason}`);
  console.log(`  JSON-LD JA valid: ${ldJa.ok}${ldJa.ok ? '' : ' — ' + ldJa.reason}`);
  console.log(`  DE differs from EN: ${deDiffers}`);
  console.log(`  JA differs from EN: ${jaDiffers}`);
  console.log(`  Leftover EN markers DE: ${leftoverDe.length ? leftoverDe.join(', ') : 'none'}`);
  console.log(`  Leftover EN markers JA: ${leftoverJa.length ? leftoverJa.join(', ') : 'none'}`);

  // Figure/href integrity: every EN href and price token must survive in both.
  const hrefs = (check.content.match(/href=['"][^'"]*['"]/g) || []);
  const figures = ['$15,563', '$11,800', '$27,125', '$21,333', '$40,718', '$25,644',
    'MX$2.34M', '−63.7 hm³', '55.7%', '39.0%', '2.4M', '835', '528 vs 392',
    '1,820 vs 1,864', '-81%', '8.2/100k', '€800M'];
  const missHrefDe = hrefs.filter((h) => !check.content_de.includes(h));
  const missHrefJa = hrefs.filter((h) => !check.content_ja.includes(h));
  const jaFigures = ['$15,563', '$11,800', '$27,125', '$21,333', '$40,718', '$25,644',
    'MX$2.34M', '55.7%', '39.0%', '835', '528 vs 392', '1,820 vs 1,864', '-81%', '8.2', '€8億'];
  const missFigDe = figures.filter((f) => !check.content_de.includes(f));
  const missFigJa = jaFigures.filter((f) => !check.content_ja.includes(f));

  console.log(`  Hrefs preserved DE: ${missHrefDe.length === 0 ? 'all ' + hrefs.length : 'MISSING ' + missHrefDe.join(', ')}`);
  console.log(`  Hrefs preserved JA: ${missHrefJa.length === 0 ? 'all ' + hrefs.length : 'MISSING ' + missHrefJa.join(', ')}`);
  console.log(`  Figures preserved DE: ${missFigDe.length === 0 ? 'ok' : 'MISSING ' + missFigDe.join(', ')}`);
  console.log(`  Figures preserved JA: ${missFigJa.length === 0 ? 'ok' : 'MISSING ' + missFigJa.join(', ')}`);

  const ok = enTags === deTags && enTags === jaTags && ldDe.ok && ldJa.ok &&
    deDiffers && jaDiffers && !leftoverDe.length && !leftoverJa.length &&
    !missHrefDe.length && !missHrefJa.length && !missFigDe.length && !missFigJa.length;
  console.log(ok ? '\n  All checks passed.' : '\n  Some checks failed — review output.');
  process.exit(ok ? 0 : 1);
}

main();
