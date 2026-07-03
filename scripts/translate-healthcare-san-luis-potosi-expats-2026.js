// Native DE + JA translations for blog post
// `healthcare-san-luis-potosi-expats-2026` (idempotent).
// Updates content_de + content_ja by slug. HTML held as template literals;
// only text nodes are translated — tags/attributes/hrefs/JSON-LD keys are byte-identical to EN.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'healthcare-san-luis-potosi-expats-2026';

const content_de = `<div class="max-w-none">

<div class="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-rose-900 mb-3">In diesem Ratgeber</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-rose-800 text-sm">
    <a href="#hospitals" class="hover:underline">→ Die Krankenhäuser, ehrlich bewertet</a>
    <a href="#doctors" class="hover:underline">→ Englischsprachige Ärzte finden</a>
    <a href="#pharmacies" class="hover:underline">→ Apotheken & die Sprechstunde für MX$70</a>
    <a href="#emergencies" class="hover:underline">→ Notfälle: Nummern & echte Kosten</a>
    <a href="#insurance" class="hover:underline">→ Versicherung (und die Medicare-Falle)</a>
    <a href="#imss" class="hover:underline">→ IMSS für Ausländer: das Kleingedruckte</a>
    <a href="#dental" class="hover:underline">→ Zahn- & Augenheilkunde</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-rose-700 italic">Fakten geprüft im Juli 2026 · Nur Organisatorisches und Kosten — keine medizinische Beratung · Kostendetails in unserem <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">Ratgeber zu den Lebenshaltungskosten</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die Gesundheitsversorgung ist für die meisten, die einen Umzug nach San Luis Potosí erwägen, nach der Sicherheit die Frage Nr. 2</strong> — und die ehrliche Antwort hat mehrere Ebenen: hervorragende Privatkrankenhäuser zu einem Bruchteil der US-Preise, ein System aus Apotheken-Sprechstunden, das 80 % der alltäglichen Bedürfnisse für MX$70 abdeckt, und eine Versicherungsentscheidung, die Sie <em>vor</em> dem Ernstfall richtig treffen müssen. Hier ist das gesamte System, mit Quellen belegt.
</p>

<section id="hospitals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Die Krankenhäuser, ehrlich bewertet</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Lomas de San Luis Internacional</h3><p class="text-sm text-gray-700">Das gehobene Privatkrankenhaus der Stadt (Villas del Pedregal, Westseite) — der beständigste SLP-Vertreter in der nationalen Top-50-Rangliste der Privatkrankenhäuser von Funsalud/Blutitude (auch andere SLP-Häuser haben es auf die Liste geschafft — Hospital La Bene 2024, Hospital de Especialidades Médicas de la Salud 2025). Zentren mit hoher Fachspezialisierung; Website auf Englisch verfügbar. Wenn ein Arzt hier zu einer Operation rät, ist dies der Ort, an dem Auswanderer sie in der Regel durchführen lassen.</p></div>
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Angeles San Luis Potosí</h3><p class="text-sm text-gray-700">Teil des landesweiten Netzwerks Grupo Angeles — und das Privatkrankenhaus mit einer <strong>bestätigten Notaufnahme rund um die Uhr, an 365 Tagen im Jahr</strong> (laut eigener Website). Stark in Kardiologie, Pädiatrie, Gynäkologie und Traumatologie.</p></div>
  <div class="bg-white border-l-4 border-rose-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Star Médica & La Bene</h3><p class="text-sm text-gray-700">Star Médica (Tequisquiapan, in SLP seit 2000): ~30 Fachrichtungen, Notaufnahme, Bildgebung, Blutbank. Hospital Beneficencia Española ('La Bene'): über 135 Jahre im Dienst der Stadt, über 36 Fachrichtungen, mehr als 700 angeschlossene Ärzte, Teil des Angels-Netzwerks für Schlaganfallversorgung. Beide haben Notaufnahmen; rufen Sie vorher an, um die Nachtbesetzung zu bestätigen.</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Das öffentliche System</h3><p class="text-sm text-gray-700">Hospital Central 'Dr. Ignacio Morones Prieto' — das Lehr- und Referenzkrankenhaus des Bundesstaates (424 Betten, ~98 Leistungen), das seit 2024 als regionales Krankenhaus der Maximalversorgung unter IMSS-Bienestar betrieben wird. Dorthin werden schwere Traumata unabhängig von Ihrer Versicherung überwiesen. Das IMSS betreibt das Hospital General de Zona 50 (kürzlich um ein Herzkatheterlabor erweitert); das allgemeine Krankenhaus des ISSSTE hat eine Notaufnahme rund um die Uhr.</p></div>
</div>
</section>

<section id="doctors" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Englischsprachige Ärzte finden</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Hier die frustrierende Wahrheit: <strong>Doctoralia</strong>, die Plattform, auf der die Ärzte von SLP tatsächlich präsent sind (Tausende Profile, Online-Terminbuchung), hat <strong>keinen Sprachfilter für Englisch auf Stadtebene</strong>. Der Weg, der funktioniert: Ihr Fachgebiet suchen → Profile öffnen → das Feld „Idiomas“ prüfen → diejenigen buchen, die inglés angeben. <strong>TocDoc</strong> pflegt tatsächlich eine Rubrik für englischsprachige Ärzte, die sich zum Abgleich lohnt. Und die analoge Methode versagt nie: Lassen Sie sich das vor der Buchung telefonisch von der Praxishilfe bestätigen.</p>
</section>

<section id="pharmacies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Apotheken & die Sprechstunde für MX$70</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Mexikos System der apothekennahen consultorios ist das eigentliche Netzwerk der medizinischen Grundversorgung des Landes — landesweit rund 18.000 davon, die etwa 10 Millionen Sprechstunden pro Monat abwickeln. In SLP finden Sie Farmacias Guadalajara (mehrere Filialen rund um die Uhr geöffnet), del Ahorro, Benavides und die allgegenwärtigen Similares, mit Sprechstunden für <strong>MX$50–150</strong>. Zwei Regeln, die man kennen sollte: <strong>Antibiotika erfordern gesetzlich ein Rezept</strong> (seit 2010 — die Apotheken behalten die receta), und der Arzt im consultorio kann es sofort ausstellen, was das System überhaupt erst funktionieren lässt.</p>
</section>

<section id="emergencies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-500 pb-3 inline-block">Notfälle: Nummern & echte Kosten</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📞 Diese speichern</h3><ul class="space-y-2 text-sm text-gray-700"><li>• <strong>911</strong> — landesweite Notrufnummer</li><li>• <strong>Cruz Roja SLP: 444 815 0519</strong></li><li>• Private Krankenwagen rund um die Uhr: EMPHI ABC, EPB, Arso</li><li>• Bestätigte private Notaufnahme rund um die Uhr: Hospital Angeles SLP</li></ul></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-6"><h3 class="font-bold text-lg text-red-900 mb-2">💸 Realität ohne Versicherung (landesweite Richtwerte)</h3><ul class="space-y-2 text-sm text-gray-800"><li>• Sprechstunde in der Notaufnahme: ~MX$400–1,000</li><li>• Krankenhausbett: ~MX$8,000/Tag · Intensivstation: bis zu MX$40,000/Tag</li><li>• Durchschnittlicher privater Krankenhausaufenthalt: MX$80,000–150,000</li><li>• Private Notaufnahmen verlangen bei der Aufnahme häufig eine Anzahlung/Karte</li></ul></div>
</div>
<p class="text-xs text-gray-500 italic">Die Krankenhäuser in SLP veröffentlichen keine Tarife (Profeco hat dies branchenweit bemängelt); die Zahlen sind überprüfbare landesweite Referenzwerte.</p>
</section>

<section id="insurance" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Versicherung — und die Medicare-Falle</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>US-Leser, zuerst dies:</strong> <strong>Medicare deckt Sie in Mexiko nicht ab.</strong> Das eigene Informationsblatt lässt nur drei eng gefasste Ausnahmen zu (keine davon lautet „Wohnsitz in San Luis Potosí“), und die Medicare-Arzneimittelpläne können Apothekenkäufe im Ausland nicht erstatten. Planen Sie damit, nicht dagegen.</p>
</div>
<div class="space-y-3 mb-4 text-gray-800">
  <p>• <strong>Internationale Expat-Tarife</strong> — Cigna Global, GeoBlue/BCBS Global Solutions und IMG decken alle Mexiko ab; üblicher Bereich ~US$300–700/Monat je nach Alter und Selbstbehalt (Versionen ohne US-Deckung kosten etwa die Hälfte).</p>
  <p>• <strong>Mexikanische GMM-Policen</strong> — die Vollversicherung (major medical) mexikanischer Versicherer liegt für eine 40-jährige Person bei etwa MX$12,000–35,000/Jahr (große Spanne; CONDUSEF bietet einen kostenlosen Vergleichsrechner).</p>
  <p>• <strong>Reiseversicherung</strong> — geeignet für Reisen unter ~90 Tagen; nur Notfälle, keine Routineversorgung, und in der Regel ungültig, sobald Sie einen Aufenthaltstitel besitzen oder beantragen.</p>
</div>
</section>

<section id="imss" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">IMSS für Ausländer: das Kleingedruckte</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der freiwillige <strong>Seguro de Salud para la Familia (Modalidad 33)</strong> erlaubt es Einwohnern, sich in das öffentliche System einzukaufen: jährlich im Voraus zu zahlen (Tarifplan März 2026–Februar 2027: MX$12,350 mit 30–39, <strong>MX$14,350 mit 40–49</strong>, MX$20,600 mit 60–69). Sie benötigen eine CURP — was praktisch eine Aufenthaltskarte voraussetzt. Lesen Sie das Kleingedruckte, bevor Sie sich darauf verlassen:</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• <strong>Ausschlüsse bei Vorerkrankungen</strong> (offizielle Liste): bösartige Tumoren, chronisch-degenerative Erkrankungen einschließlich Diabetes-Komplikationen, chronische Nieren-/Lebererkrankungen, Herzleiden, HIV, Suchterkrankungen, psychiatrische Erkrankungen und mehr. Diagnose im ersten Jahr → die Aufnahme kann storniert werden, ohne Erstattung.</li>
  <li>• <strong>Wartezeiten:</strong> 10 Monate für die Entbindung; 1 Jahr für die meisten Wahleingriffe; 2 Jahre für orthopädische Operationen.</li>
  <li>• <strong>Wartezeiten in der Praxis:</strong> Die eigenen Unterlagen des IMSS räumen Operationsrückstände und Überlastung ein. Ehrliche Rolle: ein Sicherheitsnetz gegen katastrophale Kosten neben der Privatversorgung, kein Ersatz für sie.</li>
</ul>
</section>

<section id="dental" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Zahn- & Augenheilkunde</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die Ersparnisse, mit denen Auswanderer prahlen, sind real (mexikoweite Spannen für 2026): Zahnreinigungen MX$500–800, Vollkeramikkronen US$450–650 statt US$1,000–1,800 nördlich der Grenze, einzelne Implantate US$750–1,200 statt US$3,000–5,000 — und SLP ist keine Grenzstadt, daher liegen die Preise am unteren Rand dieser Spannen oder darunter. Für Brillen: Devlyn (kostenlose Sehtests als Kettenstandard), Ben & Frank und Ópticas Franklin sind alle in der Stadt vertreten.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was sind die besten Privatkrankenhäuser in San Luis Potosí?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die wichtigsten Privatkrankenhäuser sind Hospital Lomas de San Luis Internacional (die gehobene Option der Stadt, gelistet unter Mexikos Top 50 der Privatkrankenhäuser), Hospital Angeles San Luis Potosí (landesweites Angeles-Netzwerk, Notaufnahme rund um die Uhr bestätigt), Star Médica (seit 2000 in der Stadt, ~30 Fachrichtungen) und Hospital Beneficencia Española ('La Bene', über 135 Jahre, über 36 Fachrichtungen). Das öffentliche Referenzkrankenhaus ist Hospital Central Dr. Ignacio Morones Prieto, das nun unter IMSS-Bienestar betrieben wird.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie finde ich einen englischsprachigen Arzt in San Luis Potosí?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Doctoralia ist die dominierende Buchungsplattform mit Tausenden SLP-Profilen, hat aber keinen Englisch-Filter auf Stadtebene — öffnen Sie einzelne Profile und prüfen Sie das Feld „Idiomas“. TocDoc führt tatsächlich eine Liste englischsprachiger Ärzte. Die verlässliche altmodische Methode: im consultorio anrufen und fragen, und Bewertungen auf Hinweise zur Verständigung prüfen.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kostet ein Arztbesuch in San Luis Potosí?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Private Sprechstunden beim Allgemeinarzt liegen bei MX$500–1,200 (~$29–68 USD); Fachärzte üblicherweise bei MX$800–1,000. Die günstige Option, für die Mexiko berühmt ist: consultorios neben Apotheken (Farmacias Similares, del Ahorro, Guadalajara) verlangen etwa MX$50–150 pro Sprechstunde, und ihre Ärzte können Rezepte ausstellen, auch für Antibiotika — die von Gesetzes wegen eines erfordern.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Funktioniert US-Medicare in Mexiko?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Nein. Das eigene Informationsblatt von Medicare stellt fest, dass es Gesundheitsversorgung außerhalb der USA in der Regel nicht abdeckt, mit nur drei eng gefassten Ausnahmen, die nicht auf das Leben in San Luis Potosí zutreffen — und die Medicare-Arzneimittelpläne können im Ausland gekaufte Medikamente nicht erstatten. US-Ruheständler verlassen sich hier auf eine private internationale Versicherung (Cigna Global, GeoBlue/BCBS Global, IMG decken alle Mexiko ab), eine mexikanische GMM-Police, eine freiwillige IMSS-Anmeldung oder die Zahlung aus eigener Tasche.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Können sich Ausländer in Mexiko beim IMSS anmelden?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja, über den freiwilligen Seguro de Salud para la Familia (Modalidad 33) — jährlich im Voraus zu zahlen (MX$14,350/Jahr im Alter von 40–49 nach dem Tarifplan März 2026–Februar 2027). Sie benötigen eine CURP, was in der Praxis eine befristete oder unbefristete Aufenthaltskarte voraussetzt. Große Vorbehalte: eine lange Ausschlussliste für Vorerkrankungen (einschließlich Diabetes-Komplikationen, bösartige Tumoren und HIV), Wartezeiten (10 Monate für die Entbindung, 2 Jahre für orthopädische Operationen) und ehrliche Erwartungen an die Wartezeiten — es ist ein Sicherheitsnetz gegen katastrophale Kosten, kein Ersatz für die Geschwindigkeit der Privatversorgung.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viel kosten Notfälle ohne Versicherung in SLP?<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Landesweite Richtwerte für Privatkrankenhäuser (die Krankenhäuser in SLP veröffentlichen keine Tarife): eine Sprechstunde in der Notaufnahme um MX$400–1,000, ein Krankenhausaufenthalt etwa MX$8,000 pro Tag, Intensivstation bis zu MX$40,000 pro Tag und ein durchschnittlicher privater Krankenhausaufenthalt MX$80,000–150,000. Private Notaufnahmen verlangen bei der Aufnahme typischerweise eine Anzahlung oder Kreditkarte. Diese letzte Zahlenreihe ist das gesamte Argument dafür, eine Versicherung zu haben. Notrufnummer: 911; Cruz Roja SLP: 444 815 0519.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Geprüft im Juli 2026: die eigenen Websites der Krankenhäuser (HLS, Hospital Angeles SLP inkl. Seite zur Notaufnahme rund um die Uhr, Star Médica, La Bene, Hospital Central/IMSS-Bienestar), die nationale Privatkrankenhaus-Rangliste von Funsalud/Blutitude, DOF vom 27. Mai 2010 (Rezeptpflicht für Antibiotika), ANAFARMEX/Proceso und Salud Pública de México (consultorio-System), das offizielle Medicare-Informationsblatt zur Versorgung außerhalb der USA, die Länderseiten der Versicherer (Cigna Global, GeoBlue/BCBS, IMG), die offiziellen Seiten zum IMSS Modalidad 33 (Voraussetzungen, Ausschlüsse, Wartezeiten, Tabellen 2026–2027), Cruz Roja SLP, die Websites der privaten Krankenwagenunternehmen und mexikoweite Preisübersichten für Zahnbehandlungen (2026). Wo keine SLP-spezifischen Tarife veröffentlicht sind, kennzeichnen wir die Zahlen als landesweite Referenzwerte.</p>
</section>

<div class="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Stellen Sie Ihre Umzugsunterlagen für SLP zusammen?</p>
  <p class="text-rose-100 text-sm mb-4">Kombinieren Sie dies mit unserer <a href="/blog/is-san-luis-potosi-safe-2026" class="underline font-semibold text-white">Sicherheitsanalyse</a> und unserer <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline font-semibold text-white">Kostenaufschlüsselung</a> — und erhalten Sie den wöchentlichen Überblick kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-rose-700 font-bold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was sind die besten Privatkrankenhäuser in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die wichtigsten Privatkrankenhäuser sind Hospital Lomas de San Luis Internacional (die gehobene Option der Stadt, gelistet unter Mexikos Top 50 der Privatkrankenhäuser), Hospital Angeles San Luis Potosí (landesweites Angeles-Netzwerk, Notaufnahme rund um die Uhr bestätigt), Star Médica (seit 2000 in der Stadt, ~30 Fachrichtungen) und Hospital Beneficencia Española ('La Bene', über 135 Jahre, über 36 Fachrichtungen). Das öffentliche Referenzkrankenhaus ist Hospital Central Dr. Ignacio Morones Prieto, das nun unter IMSS-Bienestar betrieben wird."
      }
    },
    {
      "@type": "Question",
      "name": "Wie finde ich einen englischsprachigen Arzt in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doctoralia ist die dominierende Buchungsplattform mit Tausenden SLP-Profilen, hat aber keinen Englisch-Filter auf Stadtebene — öffnen Sie einzelne Profile und prüfen Sie das Feld 'Idiomas'. TocDoc führt tatsächlich eine Liste englischsprachiger Ärzte. Die verlässliche altmodische Methode: im consultorio anrufen und fragen, und Bewertungen auf Hinweise zur Verständigung prüfen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel kostet ein Arztbesuch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Private Sprechstunden beim Allgemeinarzt liegen bei MX$500–1,200 (~$29–68 USD); Fachärzte üblicherweise bei MX$800–1,000. Die günstige Option, für die Mexiko berühmt ist: consultorios neben Apotheken (Farmacias Similares, del Ahorro, Guadalajara) verlangen etwa MX$50–150 pro Sprechstunde, und ihre Ärzte können Rezepte ausstellen, auch für Antibiotika — die von Gesetzes wegen eines erfordern."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert US-Medicare in Mexiko?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Das eigene Informationsblatt von Medicare stellt fest, dass es Gesundheitsversorgung außerhalb der USA in der Regel nicht abdeckt, mit nur drei eng gefassten Ausnahmen, die nicht auf das Leben in San Luis Potosí zutreffen — und die Medicare-Arzneimittelpläne können im Ausland gekaufte Medikamente nicht erstatten. US-Ruheständler verlassen sich hier auf eine private internationale Versicherung (Cigna Global, GeoBlue/BCBS Global, IMG decken alle Mexiko ab), eine mexikanische GMM-Police, eine freiwillige IMSS-Anmeldung oder die Zahlung aus eigener Tasche."
      }
    },
    {
      "@type": "Question",
      "name": "Können sich Ausländer in Mexiko beim IMSS anmelden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, über den freiwilligen Seguro de Salud para la Familia (Modalidad 33) — jährlich im Voraus zu zahlen (MX$14,350/Jahr im Alter von 40–49 nach dem Tarifplan März 2026–Februar 2027). Sie benötigen eine CURP, was in der Praxis eine befristete oder unbefristete Aufenthaltskarte voraussetzt. Große Vorbehalte: eine lange Ausschlussliste für Vorerkrankungen (einschließlich Diabetes-Komplikationen, bösartige Tumoren und HIV), Wartezeiten (10 Monate für die Entbindung, 2 Jahre für orthopädische Operationen) und ehrliche Erwartungen an die Wartezeiten — es ist ein Sicherheitsnetz gegen katastrophale Kosten, kein Ersatz für die Geschwindigkeit der Privatversorgung."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel kosten Notfälle ohne Versicherung in SLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landesweite Richtwerte für Privatkrankenhäuser (die Krankenhäuser in SLP veröffentlichen keine Tarife): eine Sprechstunde in der Notaufnahme um MX$400–1,000, ein Krankenhausaufenthalt etwa MX$8,000 pro Tag, Intensivstation bis zu MX$40,000 pro Tag und ein durchschnittlicher privater Krankenhausaufenthalt MX$80,000–150,000. Private Notaufnahmen verlangen bei der Aufnahme typischerweise eine Anzahlung oder Kreditkarte. Diese letzte Zahlenreihe ist das gesamte Argument dafür, eine Versicherung zu haben. Notrufnummer: 911; Cruz Roja SLP: 444 815 0519."
      }
    }
  ]
}
</script>

</div>`;

const content_ja = `<div class="max-w-none">

<div class="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-rose-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-rose-800 text-sm">
    <a href="#hospitals" class="hover:underline">→ 病院を正直に格付け</a>
    <a href="#doctors" class="hover:underline">→ 英語が通じる医師を見つける</a>
    <a href="#pharmacies" class="hover:underline">→ 薬局とMX$70の診察</a>
    <a href="#emergencies" class="hover:underline">→ 緊急時: 番号と実際の費用</a>
    <a href="#insurance" class="hover:underline">→ 保険（そしてメディケアの落とし穴）</a>
    <a href="#imss" class="hover:underline">→ 外国人のためのIMSS: 細かな規定</a>
    <a href="#dental" class="hover:underline">→ 歯科と眼科</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-rose-700 italic">2026年7月に事実確認済み · 手続きと費用のみ — 医療上の助言ではありません · 費用の詳細は<a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">生活費ガイド</a>をご覧ください</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>医療は、サン・ルイス・ポトシへの移住を検討する人にとって、安全性に次いで多い2番目の疑問です</strong>。そして正直な答えは何層にもなっています。米国価格の何分の一かで受けられる優れた民間病院、日々のニーズの80%をMX$70で解決してくれる薬局併設の診察システム、そして必要になる<em>前に</em>正しく決めておかなければならない保険の選択です。ここに、その仕組みの全体像を出典付きでご紹介します。
</p>

<section id="hospitals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">病院を正直に格付け</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Lomas de San Luis Internacional</h3><p class="text-sm text-gray-700">市内の高級民間病院（Villas del Pedregal、西側）で、Funsalud/Blutitudeの全国民間病院トップ50ランキングにSLPから最も安定して名を連ねる存在です（SLPの他の病院もリスト入りしています — Hospital La Beneが2024年、Hospital de Especialidades Médicas de la Saludが2025年）。高度専門医療センターで、ウェブサイトは英語でも利用できます。ここの医師が手術を勧めた場合、駐在者は通常この病院で手術を受けます。</p></div>
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Angeles San Luis Potosí</h3><p class="text-sm text-gray-700">全国ネットワークGrupo Angelesの一員であり、<strong>24時間365日の救急外来が確認されている</strong>民間病院です（同院自身のサイトによる）。循環器科、小児科、婦人科、外傷科に強みがあります。</p></div>
  <div class="bg-white border-l-4 border-rose-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Star Médica & La Bene</h3><p class="text-sm text-gray-700">Star Médica（Tequisquiapan、2000年よりSLPで営業）: 約30の診療科、救急外来、画像診断、血液バンク。Hospital Beneficencia Española（「La Bene」）: 135年以上にわたり市に貢献、36以上の診療科、700名以上の提携医師、脳卒中対応のAngelsネットワークの一員です。両院とも救急外来がありますが、夜間の人員体制は事前に電話で確認してください。</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">公的医療システム</h3><p class="text-sm text-gray-700">Hospital Central「Dr. Ignacio Morones Prieto」— 州の教育・基幹病院（424床、約98の診療部門）で、2024年以降はIMSS-Bienestarのもとで高度専門地域病院として運営されています。保険の種類にかかわらず、重度の外傷はここに搬送されます。IMSSはHospital General de Zona 50を運営し（最近、心臓カテーテル検査室を新設）、ISSSTEの総合病院には24時間対応の救急外来があります。</p></div>
</div>
</section>

<section id="doctors" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">英語が通じる医師を見つける</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">もどかしい事実があります。SLPの医師が実際に登録しているプラットフォーム<strong>Doctoralia</strong>（数千のプロフィール、オンライン予約）には、<strong>市レベルでの英語による絞り込み機能がありません</strong>。うまくいく手順はこうです。診療科を検索 → プロフィールを開く → 「Idiomas」（言語）の欄を確認 → inglés（英語）と記載のある医師を予約する。<strong>TocDoc</strong>は英語対応医師の項目を実際に用意しており、照合する価値があります。そしてアナログな方法は決して裏切りません。予約前に受付スタッフに電話で確認してもらいましょう。</p>
</section>

<section id="pharmacies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">薬局とMX$70の診察</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">メキシコの薬局併設のconsultorio（診察室）システムは、この国の実質的なプライマリケア網です — 全国で約18,000か所あり、月に約1,000万件の診察を担っています。SLPではFarmacias Guadalajara（24時間営業の店舗が複数）、del Ahorro、Benavides、そしてどこにでもあるSimilaresがあり、診察は<strong>MX$50–150</strong>で受けられます。知っておくべき2つのルールがあります。<strong>抗生物質は法律上、処方箋が必要</strong>で（2010年以降 — 薬局がreceta（処方箋）を保管します）、consultorioの医師がその場で処方箋を書けることこそが、このシステムを成り立たせているのです。</p>
</section>

<section id="emergencies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-500 pb-3 inline-block">緊急時: 番号と実際の費用</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📞 これを保存</h3><ul class="space-y-2 text-sm text-gray-700"><li>• <strong>911</strong> — 全国共通の緊急番号</li><li>• <strong>Cruz Roja SLP: 444 815 0519</strong></li><li>• 民間の24時間救急車: EMPHI ABC、EPB、Arso</li><li>• 24時間対応が確認された民間救急外来: Hospital Angeles SLP</li></ul></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-6"><h3 class="font-bold text-lg text-red-900 mb-2">💸 無保険の場合の現実（全国のおおよその目安）</h3><ul class="space-y-2 text-sm text-gray-800"><li>• 救急外来の診察: 約MX$400–1,000</li><li>• 入院ベッド: 約MX$8,000/日 · ICU: 最大MX$40,000/日</li><li>• 民間病院の入院1件あたりの平均: MX$80,000–150,000</li><li>• 民間の救急外来では受付時に前金・カードを求められることが多い</li></ul></div>
</div>
<p class="text-xs text-gray-500 italic">SLPの病院は料金表を公表していません（Profecoが業界全体の問題として指摘）。数値は検証可能な全国的な参考値です。</p>
</section>

<section id="insurance" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">保険 — そしてメディケアの落とし穴</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>米国の読者の方は、まずこれを:</strong> <strong>メディケアはメキシコではあなたを保障しません。</strong>その公式説明書が認めているのは狭い3つの例外だけで（そのいずれも「サン・ルイス・ポトシに住んでいること」ではありません）、メディケアの薬剤プランは海外での薬局購入をカバーできません。これに逆らうのではなく、これを前提に計画してください。</p>
</div>
<div class="space-y-3 mb-4 text-gray-800">
  <p>• <strong>国際的な駐在者向けプラン</strong> — Cigna Global、GeoBlue/BCBS Global Solutions、IMGはいずれもメキシコを保障します。一般的な範囲は年齢と免責額に応じて月額約US$300–700です（米国を対象外とするバージョンはおよそ半額です）。</p>
  <p>• <strong>メキシコのGMM保険</strong> — メキシコの保険会社による高額医療保障は、40歳の場合でおおよそ年間MX$12,000–35,000です（幅が広く、CONDUSEFが無料の比較シミュレーターを提供しています）。</p>
  <p>• <strong>旅行保険</strong> — 約90日未満の旅行には適していますが、緊急時のみで、日常的な医療は対象外、そして居住許可を保有または申請した時点で通常は無効になります。</p>
</div>
</section>

<section id="imss" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">外国人のためのIMSS: 細かな規定</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">任意加入の<strong>Seguro de Salud para la Familia（Modalidad 33）</strong>により、居住者は公的システムに加入できます。年額を前払いします（2026年3月〜2027年2月の料金表: 30〜39歳でMX$12,350、<strong>40〜49歳でMX$14,350</strong>、60〜69歳でMX$20,600）。CURPが必要で、これは実質的に居住カードを意味します。頼りにする前に、細かな規定を読んでおきましょう:</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• <strong>既往症の除外</strong>（公式リスト）: 悪性腫瘍、糖尿病の合併症を含む慢性・変性疾患、慢性の腎臓・肝臓疾患、心疾患、HIV、依存症、精神疾患など。1年目に診断された場合 → 加入が取り消され、返金はありません。</li>
  <li>• <strong>待機期間:</strong> 出産は10か月、大半の待機可能な手術は1年、整形外科手術は2年。</li>
  <li>• <strong>待ち時間:</strong> IMSS自身の申告書が手術の滞留と飽和状態を認めています。正直な位置づけは、民間医療と並行して用いる高額費用に対するセーフティネットであり、その代替ではありません。</li>
</ul>
</section>

<section id="dental" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">歯科と眼科</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">駐在者が自慢する節約効果は本物です（2026年のメキシコ全国の範囲）: クリーニングMX$500–800、ポーセレンの被せ物US$450–650（国境の北ではUS$1,000–1,800）、単独インプラントUS$750–1,200（同US$3,000–5,000）— しかもSLPは国境の町ではないため、価格はこれらの範囲の下限かそれ以下になる傾向があります。眼鏡には: Devlyn（チェーン標準として無料の視力検査）、Ben & Frank、Ópticas Franklinがいずれも市内で営業しています。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシで最良の民間病院はどこですか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">主な民間病院は、Hospital Lomas de San Luis Internacional（市内の高級な選択肢で、メキシコの民間病院トップ50に格付け）、Hospital Angeles San Luis Potosí（全国のAngelesネットワーク、24時間救急外来を確認）、Star Médica（2000年より市内で営業、約30の診療科）、Hospital Beneficencia Española（「La Bene」、135年以上、36以上の診療科）です。公的な基幹病院はHospital Central Dr. Ignacio Morones Prietoで、現在はIMSS-Bienestarのもとで運営されています。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシで英語が通じる医師をどう見つけますか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Doctoraliaは数千のSLPプロフィールを持つ主要な予約プラットフォームですが、市レベルでの英語の絞り込みがありません — 個々のプロフィールを開いて「Idiomas」（言語）の欄を確認してください。TocDocには実際に英語対応医師の一覧があります。信頼できる昔ながらの方法は、consultorioに電話して尋ね、口コミでコミュニケーションに関するコメントを確認することです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシで医師の診察費用はいくらですか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">民間の一般診療はMX$500–1,200（約$29–68 USD）、専門医は通常MX$800–1,000です。メキシコで有名な格安の選択肢: 薬局に併設されたconsultorio（Farmacias Similares、del Ahorro、Guadalajara）は診察1回あたりおよそMX$50–150で、その医師は処方箋を書くことができます。抗生物質も含めてで、これは法律上、処方箋を要します。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">米国のメディケアはメキシコで使えますか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">いいえ。メディケア自身の説明書には、米国外の医療は通常カバーされないと記されており、狭い3つの例外があるのみで、それらはサン・ルイス・ポトシに住むことには当てはまりません。またメディケアの薬剤プランは海外で購入した薬をカバーできません。ここに住む米国の退職者は、民間の国際保険（Cigna Global、GeoBlue/BCBS Global、IMGはいずれもメキシコを保障）、メキシコのGMM保険、IMSSへの任意加入、または自己負担での支払いに頼っています。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">外国人はメキシコでIMSSに加入できますか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい、任意加入のSeguro de Salud para la Familia（Modalidad 33）を通じて可能です — 年額を前払いします（2026年3月〜2027年2月の料金表で40〜49歳は年間MX$14,350）。CURPが必要で、実際には一時または永住の居住カードを要します。大きな注意点: 既往症の長い除外リスト（糖尿病の合併症、悪性腫瘍、HIVを含む）、待機期間（出産は10か月、整形外科手術は2年）、そして待ち時間についての現実的な期待 — これは高額費用に対するセーフティネットであり、民間医療の速さの代わりにはなりません。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">SLPで無保険の場合、緊急時の費用はいくらですか？<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">民間病院の全国的なおおよその目安（SLPの病院は料金表を公表していません）: 救急外来の診察は約MX$400–1,000、入院はおよそ1日あたりMX$8,000、ICUは最大で1日あたりMX$40,000、民間病院の入院1件あたりの平均はMX$80,000–150,000です。民間の救急外来では通常、受付時に前金またはクレジットカードを求められます。この最後の数字こそが、保険に入る理由のすべてです。緊急番号: 911、Cruz Roja SLP: 444 815 0519。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に確認: 各病院自身のサイト（HLS、Hospital Angeles SLP（24時間救急外来のページを含む）、Star Médica、La Bene、Hospital Central/IMSS-Bienestar）、Funsalud/Blutitudeの全国民間病院ランキング、2010年5月27日のDOF（抗生物質の処方箋規則）、ANAFARMEX/ProcesoおよびSalud Pública de México（consultorioシステム）、メディケアの米国外医療に関する公式説明書、各保険会社の国別ページ（Cigna Global、GeoBlue/BCBS、IMG）、IMSS Modalidad 33の公式ページ（要件、除外、待機期間、2026〜2027年の表）、Cruz Roja SLP、民間救急車会社のサイト、およびメキシコ全国の歯科価格ガイド（2026年）。SLP固有の料金が公表されていない場合、数値は全国の参考値として明記しています。</p>
</section>

<div class="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">SLPへの移住資料を作成中ですか？</p>
  <p class="text-rose-100 text-sm mb-4">これを私たちの<a href="/blog/is-san-luis-potosi-safe-2026" class="underline font-semibold text-white">安全性分析</a>と<a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline font-semibold text-white">費用の内訳</a>と組み合わせて、週刊ブリーフを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-rose-700 font-bold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors">San Luis Way Weeklyを購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシで最良の民間病院はどこですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "主な民間病院は、Hospital Lomas de San Luis Internacional（市内の高級な選択肢で、メキシコの民間病院トップ50に格付け）、Hospital Angeles San Luis Potosí（全国のAngelesネットワーク、24時間救急外来を確認）、Star Médica（2000年より市内で営業、約30の診療科）、Hospital Beneficencia Española（「La Bene」、135年以上、36以上の診療科）です。公的な基幹病院はHospital Central Dr. Ignacio Morones Prietoで、現在はIMSS-Bienestarのもとで運営されています。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシで英語が通じる医師をどう見つけますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doctoraliaは数千のSLPプロフィールを持つ主要な予約プラットフォームですが、市レベルでの英語の絞り込みがありません — 個々のプロフィールを開いて「Idiomas」（言語）の欄を確認してください。TocDocには実際に英語対応医師の一覧があります。信頼できる昔ながらの方法は、consultorioに電話して尋ね、口コミでコミュニケーションに関するコメントを確認することです。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシで医師の診察費用はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "民間の一般診療はMX$500–1,200（約$29–68 USD）、専門医は通常MX$800–1,000です。メキシコで有名な格安の選択肢: 薬局に併設されたconsultorio（Farmacias Similares、del Ahorro、Guadalajara）は診察1回あたりおよそMX$50–150で、その医師は処方箋を書くことができます。抗生物質も含めてで、これは法律上、処方箋を要します。"
      }
    },
    {
      "@type": "Question",
      "name": "米国のメディケアはメキシコで使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。メディケア自身の説明書には、米国外の医療は通常カバーされないと記されており、狭い3つの例外があるのみで、それらはサン・ルイス・ポトシに住むことには当てはまりません。またメディケアの薬剤プランは海外で購入した薬をカバーできません。ここに住む米国の退職者は、民間の国際保険（Cigna Global、GeoBlue/BCBS Global、IMGはいずれもメキシコを保障）、メキシコのGMM保険、IMSSへの任意加入、または自己負担での支払いに頼っています。"
      }
    },
    {
      "@type": "Question",
      "name": "外国人はメキシコでIMSSに加入できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、任意加入のSeguro de Salud para la Familia（Modalidad 33）を通じて可能です — 年額を前払いします（2026年3月〜2027年2月の料金表で40〜49歳は年間MX$14,350）。CURPが必要で、実際には一時または永住の居住カードを要します。大きな注意点: 既往症の長い除外リスト（糖尿病の合併症、悪性腫瘍、HIVを含む）、待機期間（出産は10か月、整形外科手術は2年）、そして待ち時間についての現実的な期待 — これは高額費用に対するセーフティネットであり、民間医療の速さの代わりにはなりません。"
      }
    },
    {
      "@type": "Question",
      "name": "SLPで無保険の場合、緊急時の費用はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "民間病院の全国的なおおよその目安（SLPの病院は料金表を公表していません）: 救急外来の診察は約MX$400–1,000、入院はおよそ1日あたりMX$8,000、ICUは最大で1日あたりMX$40,000、民間病院の入院1件あたりの平均はMX$80,000–150,000です。民間の救急外来では通常、受付時に前金またはクレジットカードを求められます。この最後の数字こそが、保険に入る理由のすべてです。緊急番号: 911、Cruz Roja SLP: 444 815 0519。"
      }
    }
  ]
}
</script>

</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_de, content_ja })
    .eq('slug', SLUG);
  if (error) { console.error('Update failed:', error); process.exit(1); }
  console.log('Updated content_de + content_ja for', SLUG);
})();
