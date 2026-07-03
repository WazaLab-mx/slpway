// Native German + Japanese translations for the blog post
// `renting-in-san-luis-potosi-foreigner-2026` (idempotent).
// Replaces content_de / content_ja (which previously mirrored the EN HTML).
// Every HTML tag/attribute/class/id/href/image src is preserved byte-for-byte;
// only human-readable text nodes and JSON-LD string values are translated.
// Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'renting-in-san-luis-potosi-foreigner-2026';

const contentDe = `<div class="max-w-none">

<div class="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-violet-900 mb-3">In diesem Leitfaden</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-violet-800 text-sm">
    <a href="#fiador" class="hover:underline">→ Die Fiador-Hürde (und 4 Wege drumherum)</a>
    <a href="#terms" class="hover:underline">→ Übliche Vertragsbedingungen</a>
    <a href="#documents" class="hover:underline">→ Erforderliche Unterlagen</a>
    <a href="#search" class="hover:underline">→ Wo Sie wirklich suchen sollten</a>
    <a href="#scams" class="hover:underline">→ Das Betrugs-Handbuch (unbedingt lesen)</a>
    <a href="#utilities" class="hover:underline">→ Nebenkosten & Adressnachweis</a>
    <a href="#rights" class="hover:underline">→ Wenn etwas schiefgeht</a>
    <a href="#strategy" class="hover:underline">→ Die clevere Ankunftsstrategie</a>
  </nav>
  <p class="mt-4 text-sm text-violet-700 italic">Prozess im Juli 2026 verifiziert · Preise finden Sie in unserer <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">Aufschlüsselung der Lebenshaltungskosten</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Beim Mieten in Mexiko stößt jeder Ausländer an dieselbe Wand: den Fiador.</strong> Vermieter verlangen einen ortsansässigen Bürgen, der Immobilien im Bundesstaat besitzt — jemand, den Sie als frisch Angekommener unmöglich vorweisen können. Hier erfahren Sie genau, wie Sie diese Hürde in San Luis Potosí umgehen, wie ein normaler Vertrag aussieht, wie die Betrugsmaschen funktionieren und mit welcher Ankunftsstrategie Sie das alles in Ihren ersten zwei Monaten vermeiden.
</p>

<section id="fiador" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Die Fiador-Hürde — und 4 Wege drumherum</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Warum so streng? Weil die Zwangsräumung eines nicht zahlenden Mieters über mexikanische Gerichte in der Regel <strong>6 Monate bis ein Jahr</strong> dauert (und sich mit Berufungen weit länger hinziehen kann). Der Fiador — ein Bürge, der typischerweise verbriefte Immobilien in derselben Stadt oder demselben Bundesstaat besitzen muss — ist die Versicherungspolice des Vermieters. Eine verwandte Figur, der <em>obligado solidario</em>, ist ein Mitunterzeichner, der vom ersten Tag an haftet, ohne notwendigerweise Eigentum zu besitzen. Beides kann ein Neuankömmling nicht vorweisen. Ihre Optionen:</p>
<div class="space-y-4 mb-4">
  <div class="bg-white border-l-4 border-violet-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">1. Póliza jurídica — die Standardlösung ⭐</h3><p class="text-sm text-gray-700">Eine Rechtsgarantie-Police von einer Anwaltskanzlei: Sie überprüft Ihren Hintergrund, setzt den Vertrag auf und übernimmt die Rechtskosten des Vermieters, falls etwas schiefgeht. Kosten: typischerweise <strong>30–70 % einer Monatsmiete</strong> (oft angegeben als 4–6 % der Jahresmiete) zzgl. IVA, einmal pro Vertragsjahr zu zahlen — meist vom Mieter, manchmal geteilt. Die Prüfung dauert etwa eine Woche. Zu den in SLP tätigen Anbietern zählen Zorrilla Abogados (Lomas 4a), Juridixia sowie landesweite Netzwerke wie Póliza Jurídica und Morada Uno (online).</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">2. Eine höhere Kaution</h3><p class="text-sm text-gray-700">Wenn Sie 2 (manchmal 3) Monatsmieten Kaution statt der üblichen 1 anbieten, überzeugt das viele private Vermieter.</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">3. Miete im Voraus</h3><p class="text-sm text-gray-700">2, 6 oder sogar 12 Monate im Voraus zu zahlen ist eine dokumentierte Praxis unter Auswanderern, die die meisten Einwände auflöst — allerdings nur mit unterschriebenem Vertrag und Quittungen, niemals vorher (siehe Abschnitt zu Betrugsmaschen).</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">4. Kostenpflichtige Fiador-Dienste (Vorsicht)</h3><p class="text-sm text-gray-700">Es gibt sie (Gebühren bis zu einer Monatsmiete), doch sie sind rechtlich undurchsichtig und die Qualität schwankt enorm — die póliza jurídica leistet dasselbe, mit einer echten Kanzlei im Hintergrund.</p></div>
</div>
</section>

<section id="terms" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Wie ein normaler Vertrag aussieht</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-violet-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Bedingung</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Die Gepflogenheit (landesweit)</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Kaution</td><td class="px-4 py-3 text-sm text-gray-700">1 Monat (keine gesetzliche Obergrenze); Zustand beim Einzug mit Fotos dokumentieren</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Laufzeit</td><td class="px-4 py-3 text-sm text-gray-700">12 Monate, oft mit automatischen Verlängerungsklauseln</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Erhöhungen</td><td class="px-4 py-3 text-sm text-gray-700">Was auch immer der Vertrag festlegt — üblicherweise an den INPC gekoppelt oder ein fester %-Satz; verhandeln Sie eine Obergrenze. Gesetzliche Grenzen gibt es nur in CDMX.</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Kündigung</td><td class="px-4 py-3 text-sm text-gray-700">30 Tage üblich; Strafen bei vorzeitigem Auszug von 1–2 Monaten sind normal und verhandelbar</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Sprache</td><td class="px-4 py-3 text-sm text-gray-700">Rechtlich maßgeblich ist Spanisch — verlangen Sie eine zweisprachige Fassung in zwei Spalten, aber wissen Sie, dass die spanische Seite gilt</td></tr>
    </tbody>
  </table>
</div>
</section>

<section id="documents" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Unterlagen, nach denen Sie gefragt werden</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>Reisepass</strong> — immer.</li>
  <li>• <strong>Aufenthaltskarte</strong> (befristet oder unbefristet) — Vermieter wollen den Nachweis, dass Sie sich für die Dauer des Mietvertrags legal aufhalten dürfen.</li>
  <li>• <strong>Einkommensnachweis über ~das 3-Fache der Miete</strong> — Gehaltsabrechnungen, ein Arbeitgeberschreiben oder 3 Monate Kontoauszüge.</li>
  <li>• <strong>Manchmal:</strong> Referenzen früherer Vermieter; gelegentlich ein RFC oder ein mexikanisches Bankkonto (nicht durchgängig).</li>
</ul>
<p class="text-sm text-gray-600 leading-relaxed">Mit einem Touristenvisum? Einen 12-Monats-Mietvertrag zu unterschreiben ist legal, doch viele Vermieter zögern bei einer 180-Tage-Genehmigung — und die Einwanderungsbehörden werten einen Mietvertrag als Signal, dass Sie eine Aufenthaltsgenehmigung beantragen sollten. Der praktische Weg, bis Ihre Karte eintrifft: möblierte Monatsmieten (siehe die Ankunftsstrategie weiter unten).</p>
</section>

<section id="search" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Wo Sie wirklich suchen sollten</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Bestandsprüfung Juli 2026: <strong>Inmuebles24</strong> hat den tiefsten strukturierten Bestand (~860 Mietobjekte in der Stadt), gefolgt von <strong>Vivanuncios</strong> (~1.100 im gesamten Bundesstaat), <strong>iCasas</strong> (~550 Wohnungen) und <strong>propiedades.com</strong> (~290). <strong>Facebook-Gruppen</strong> („Depas y Casas en Renta San Luis Potosí" und ähnliche) haben den meisten lokalen, nicht gelisteten Bestand — und mit Abstand die meisten Betrugsfälle. Beachten Sie: Nur ~37 % der inserierten Wohnungen sind möbliert, und „unmöbliert" kann in Mexiko bedeuten, dass weder Herd noch Kühlschrank vorhanden sind — prüfen Sie das pro Inserat.</p>
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700"><strong>Wer zahlt den Makler?</strong> Der Vermieter — typischerweise etwa eine Monatsmiete. Ein Vermittler, der VON IHNEN im Voraus Geld verlangt, ist ein Warnsignal, ganz klar.</div>
</section>

<section id="scams" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">Das Betrugs-Handbuch</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">Masche #1: „Kaution zum Reservieren"</h3><p class="text-sm text-gray-800">Druck, Geld zu überweisen, bevor Sie irgendetwas besichtigt haben, mit Verweis auf „10 andere Interessenten". Echte Vermieter zeigen zuerst die Immobilie. Zahlen Sie niemals einen Peso, bevor Sie persönlich besichtigt und unterschrieben haben.</p></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">Masche #2: Geklonte Inserate</h3><p class="text-sm text-gray-800">Dieselbe Immobilie wird von verschiedenen „Vermittlern" zu unterschiedlichen Preisen mit gestohlenen Fotos eingestellt — grassiert auf dem Marketplace. Führen Sie bei verdächtigen Fotos eine Rückwärtssuche durch; misstrauen Sie Preisen unter dem Marktniveau.</p></div>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 mb-4">
  <h3 class="font-bold text-emerald-900 mb-2">Die Eigentumsprüfung (übliche Praxis, nicht unhöflich)</h3>
  <p class="text-sm text-gray-800">Verlangen Sie vor der Unterschrift: die <strong>escritura</strong> (Eigentumsurkunde mit Siegel des öffentlichen Registers), eine <strong>bezahlte predial</strong>-Quittung (Grundsteuer) und den amtlichen Ausweis des Vermieters — auf allen dreien muss derselbe Name stehen. Mexikanische Immobilienratgeber empfehlen dies selbst; ein seriöser Vermieter erwartet es. Die póliza-jurídica-Kanzlei nimmt diese Prüfung für Sie vor — ein weiterer Grund, warum sich die Gebühr lohnt.</p>
</div>
</section>

<section id="utilities" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Nebenkosten & das Spiel mit dem Adressnachweis</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die Konten für CFE (Strom) und Wasser bleiben üblicherweise <strong>auf den Namen des Vermieters</strong> — Sie zahlen lediglich die zweimonatlichen Rechnungen. Der Haken: Nebenkostenrechnungen sind Mexikos universeller <strong>comprobante de domicilio</strong>, den Banken, die Einwanderungsbehörde (INM) und das Finanzamt verlangen. Manche Ämter akzeptieren eine Rechnung auf den Namen des Vermieters, wenn die Adresse übereinstimmt; andere bestehen auf Ihrem Namen. Die Standardlösung: <strong>melden Sie den Internetanschluss auf Ihren Namen an</strong> (am einfachsten abzuschließen) und bewahren Sie Ihren unterschriebenen Mietvertrag und jede Mietquittung auf.</p>
</section>

<section id="rights" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Wenn etwas schiefgeht</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>Aussperrungen und das Abstellen von Versorgungsleistungen durch Vermieter sind illegal</strong> — nur ein Gericht kann eine Räumung anordnen.</li>
  <li>• <strong>Reparaturen:</strong> Bausubstanz und große Anlagen liegen beim Vermieter; kleinere Instandhaltung bei Ihnen. Melden Sie Mängel schriftlich — WhatsApp-Nachrichten gelten als Dokumentation.</li>
  <li>• <strong>Selbst mündliche Vereinbarungen binden in SLP beide Seiten</strong> — der Oberste Gerichtshof hat bestätigt, dass ein nachgewiesener mündlicher Mietvertrag Räumungsklagen stützt und ebenso Pflichten für den Vermieter begründet. Halten Sie es trotzdem schriftlich fest.</li>
  <li>• Das landesspezifische Mietrecht in SLP folgt weitgehend der landesweiten Gepflogenheit; die oben genannten Regeln sind die, die in der Praxis zählen.</li>
</ul>
</section>

<section id="strategy" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Die clevere Ankunftsstrategie</h2>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-4">
  <ol class="space-y-3 text-gray-800">
    <li><strong>1.</strong> Buchen Sie 1–2 Monate in einer möblierten Monatsmiete (das Monatsaufenthalts-Angebot von Airbnb läuft ab 28 Nächten mit Gastgeberrabatten von üblicherweise 10–20 %, ohne Fiador, ohne Papierkram).</li>
    <li><strong>2.</strong> Nutzen Sie diese Wochen, um Langzeitmieten <em>persönlich</em> zu besichtigen — was jede Masche des Handbuchs aushebelt — und um ein Gefühl für die Viertel zu bekommen (unser <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline">Stadtteil-Leitfaden</a> und unsere <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline">Mietdaten</a> geben Ihnen die Karte an die Hand).</li>
    <li><strong>3.</strong> Unterschreiben Sie einen 12-Monats-Mietvertrag mit einer póliza jurídica, erledigter Eigentumsprüfung und ausgehandelter Erhöhungsobergrenze. Gesamte Mehrkosten gegenüber einem Einheimischen mit Fiador: etwa eine halbe Monatsmiete. Jeden Peso wert.</li>
  </ol>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Kann ein Ausländer in San Luis Potosí eine Wohnung ohne Fiador mieten?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja — die Standardlösung ist eine póliza jurídica: eine Rechtsgarantie-Police von einer Anwaltskanzlei, die Sie überprüft und die Räumungskosten des Vermieters übernimmt. Sie kostet typischerweise 30–70 % einer Monatsmiete (oft angegeben als 4–6 % der Jahresmiete) zzgl. IVA, einmal pro Vertragsjahr zu zahlen, und mehrere Anbieter sind in SLP tätig. Alternativen: eine höhere Kaution (2–3 Monate) oder die Zahlung mehrerer Monatsmieten im Voraus.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was ist ein Fiador und warum verlangen Vermieter einen?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ein Fiador ist ein Bürge, der in der Regel Immobilien in derselben Stadt oder demselben Bundesstaat besitzen muss — jemand, dessen Eigentum Ihren Mietvertrag faktisch absichert. Vermieter verlangen ihn, weil die Zwangsräumung eines nicht zahlenden Mieters über mexikanische Gerichte üblicherweise 6 Monate oder länger dauert. Frisch angekommene Ausländer kennen fast nie einen ortsansässigen Immobilieneigentümer, der bereit ist zu unterschreiben — deshalb gibt es die póliza jurídica.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welche Unterlagen brauche ich, um als Ausländer in SLP zu mieten?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Typischerweise: Reisepass, Ihre befristete oder unbefristete Aufenthaltskarte (Vermieter wollen den Nachweis, dass Sie für die Dauer des Mietvertrags bleiben können), einen Einkommensnachweis über etwa das 3-Fache der Monatsmiete (Gehaltsabrechnungen oder 3 Monate Kontoauszüge) und manchmal Referenzen. Touristen mit einer 180-Tage-Genehmigung können rechtlich Mietverträge unterschreiben, doch viele Vermieter zögern — möblierte Monatsmieten sind der praktische Weg, bis Sie eine Aufenthaltsgenehmigung haben.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie hoch ist die Kaution und darf der Vermieter die Miete erhöhen?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Eine Monatsmiete Kaution ist die landesweite Gepflogenheit (keine gesetzliche Obergrenze). Jährliche Erhöhungen richten sich nach Ihrem Vertrag, nicht nach dem Gesetz — die übliche Klausel koppelt Erhöhungen an den INPC (Mexikos Verbraucherpreisindex) oder einen festen Prozentsatz; verhandeln Sie vor der Unterschrift eine Obergrenze. Gesetzliche Grenzen für Mieterhöhungen gibt es nur in Mexiko-Stadt, nicht in San Luis Potosí.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie vermeide ich Mietbetrug in Mexiko?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Zahlen Sie niemals etwas, bevor Sie die Immobilie persönlich besichtigt und unterschrieben haben — der Druck mit „Kaution zum Reservieren" ist die klassische Masche, und geklonte Inserate mit gestohlenen Fotos kursieren auf Facebook Marketplace und den Portalen. Verlangen Sie vor der Unterschrift die escritura (Eigentumsurkunde) und eine bezahlte predial-Quittung (Grundsteuer), die mit dem Ausweis des Vermieters übereinstimmt — eine übliche, nicht anstößige Bitte in Mexiko. Vermittler werden vom Vermieter bezahlt (etwa eine Monatsmiete); ein „Vermittler", der von Ihnen im Voraus Geld verlangt, ist also ein Warnsignal.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Werden die Versorgungskonten bei der Anmietung auf meinen Namen umgeschrieben?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Meist nicht — die Konten für CFE (Strom) und Wasser bleiben üblicherweise auf den Namen des Vermieters, und Sie zahlen lediglich die Rechnungen. Das ist wichtig, weil Nebenkostenrechnungen Mexikos üblicher Adressnachweis (comprobante de domicilio) für Banken und die Einwanderungsbehörde sind. Die übliche Lösung: melden Sie den Internetanschluss auf Ihren eigenen Namen an und bewahren Sie Ihren unterschriebenen Mietvertrag und die Mietquittungen auf.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Im Juli 2026 verifiziert anhand von: mexikanischen Rechtspraxis-Leitfäden (Baker McKenzie, CCN zu INPC-Klauseln, White & Case zu den nur in CDMX geltenden Mietobergrenzen), notariellen und kanzleilichen Erläuterungen zu Fiador vs. obligado solidario, veröffentlichten Preisen von póliza-jurídica-Anbietern (Morada Uno, Póliza Jurídica MX — die Spannen schwanken tatsächlich, wir veröffentlichen die Bandbreite), Bestandszahlen der Plattformen (Inmuebles24, Vivanuncios, iCasas, propiedades.com, Juli 2026), dokumentierten Betrugsberichten (Mexico Relocation Guide, Vivanuncios' eigenem Betrugsleitfaden, Century 21 México), Leitfäden zur Übertragung von CFE-Konten, SCJN-Tesis 2022766 (mündliche Mietverträge in SLP) und Analysen zu Räumungsfristen (Liv.mx, Neivor). Wo sich Quellen widersprechen — bei den Kosten der póliza — veröffentlichen wir die ehrliche Bandbreite.</p>
</section>

<div class="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planen Sie den Umzug nach San Luis Potosí?</p>
  <p class="text-violet-100 text-sm mb-4">Unser Verzeichnis für Wohnungsdienstleistungen verbindet Sie mit geprüfter lokaler Hilfe — und der wöchentliche Newsletter hält Sie auf dem Laufenden.</p>
  <a href="/subscribe" class="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-full hover:bg-violet-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kann ein Ausländer in San Luis Potosí eine Wohnung ohne Fiador mieten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja — die Standardlösung ist eine póliza jurídica: eine Rechtsgarantie-Police von einer Anwaltskanzlei, die Sie überprüft und die Räumungskosten des Vermieters übernimmt. Sie kostet typischerweise 30–70 % einer Monatsmiete (oft angegeben als 4–6 % der Jahresmiete) zzgl. IVA, einmal pro Vertragsjahr zu zahlen, und mehrere Anbieter sind in SLP tätig. Alternativen: eine höhere Kaution (2–3 Monate) oder die Zahlung mehrerer Monatsmieten im Voraus."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist ein Fiador und warum verlangen Vermieter einen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Fiador ist ein Bürge, der in der Regel Immobilien in derselben Stadt oder demselben Bundesstaat besitzen muss — jemand, dessen Eigentum Ihren Mietvertrag faktisch absichert. Vermieter verlangen ihn, weil die Zwangsräumung eines nicht zahlenden Mieters über mexikanische Gerichte üblicherweise 6 Monate oder länger dauert. Frisch angekommene Ausländer kennen fast nie einen ortsansässigen Immobilieneigentümer, der bereit ist zu unterschreiben — deshalb gibt es die póliza jurídica."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Unterlagen brauche ich, um als Ausländer in SLP zu mieten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typischerweise: Reisepass, Ihre befristete oder unbefristete Aufenthaltskarte (Vermieter wollen den Nachweis, dass Sie für die Dauer des Mietvertrags bleiben können), einen Einkommensnachweis über etwa das 3-Fache der Monatsmiete (Gehaltsabrechnungen oder 3 Monate Kontoauszüge) und manchmal Referenzen. Touristen mit einer 180-Tage-Genehmigung können rechtlich Mietverträge unterschreiben, doch viele Vermieter zögern — möblierte Monatsmieten sind der praktische Weg, bis Sie eine Aufenthaltsgenehmigung haben."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hoch ist die Kaution und darf der Vermieter die Miete erhöhen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Monatsmiete Kaution ist die landesweite Gepflogenheit (keine gesetzliche Obergrenze). Jährliche Erhöhungen richten sich nach Ihrem Vertrag, nicht nach dem Gesetz — die übliche Klausel koppelt Erhöhungen an den INPC (Mexikos Verbraucherpreisindex) oder einen festen Prozentsatz; verhandeln Sie vor der Unterschrift eine Obergrenze. Gesetzliche Grenzen für Mieterhöhungen gibt es nur in Mexiko-Stadt, nicht in San Luis Potosí."
      }
    },
    {
      "@type": "Question",
      "name": "Wie vermeide ich Mietbetrug in Mexiko?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zahlen Sie niemals etwas, bevor Sie die Immobilie persönlich besichtigt und unterschrieben haben — der Druck mit „Kaution zum Reservieren\\" ist die klassische Masche, und geklonte Inserate mit gestohlenen Fotos kursieren auf Facebook Marketplace und den Portalen. Verlangen Sie vor der Unterschrift die escritura (Eigentumsurkunde) und eine bezahlte predial-Quittung (Grundsteuer), die mit dem Ausweis des Vermieters übereinstimmt — eine übliche, nicht anstößige Bitte in Mexiko. Vermittler werden vom Vermieter bezahlt (etwa eine Monatsmiete); ein „Vermittler\\", der von Ihnen im Voraus Geld verlangt, ist also ein Warnsignal."
      }
    },
    {
      "@type": "Question",
      "name": "Werden die Versorgungskonten bei der Anmietung auf meinen Namen umgeschrieben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meist nicht — die Konten für CFE (Strom) und Wasser bleiben üblicherweise auf den Namen des Vermieters, und Sie zahlen lediglich die Rechnungen. Das ist wichtig, weil Nebenkostenrechnungen Mexikos üblicher Adressnachweis (comprobante de domicilio) für Banken und die Einwanderungsbehörde sind. Die übliche Lösung: melden Sie den Internetanschluss auf Ihren eigenen Namen an und bewahren Sie Ihren unterschriebenen Mietvertrag und die Mietquittungen auf."
      }
    }
  ]
}
</script>

</div>`;

const contentJa = `<div class="max-w-none">

<div class="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-violet-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-violet-800 text-sm">
    <a href="#fiador" class="hover:underline">→ Fiador（保証人）の壁 — それを越える4つの方法</a>
    <a href="#terms" class="hover:underline">→ 標準的な契約条件</a>
    <a href="#documents" class="hover:underline">→ 必要となる書類</a>
    <a href="#search" class="hover:underline">→ 実際にどこで探すか</a>
    <a href="#scams" class="hover:underline">→ 詐欺の手口集（必読）</a>
    <a href="#utilities" class="hover:underline">→ 公共料金と住所証明</a>
    <a href="#rights" class="hover:underline">→ トラブルが起きたら</a>
    <a href="#strategy" class="hover:underline">→ 賢い着地戦略</a>
  </nav>
  <p class="mt-4 text-sm text-violet-700 italic">手続きは2026年7月に検証済み · 価格については当サイトの<a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">生活費の内訳</a>をご覧ください</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>メキシコで部屋を借りる際、すべての外国人がぶつかる壁が一つあります。それが Fiador（保証人）です。</strong> 大家は、その州内に不動産を所有する地元の保証人を求めますが、着いたばかりのあなたには到底用意できません。本記事では、San Luis Potosí でこの壁を越える具体的な方法、通常の契約の姿、詐欺の手口、そして最初の2か月間それらをすべて回避できる着地戦略を解説します。
</p>

<section id="fiador" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">Fiador（保証人）の壁 — それを越える4つの方法</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">なぜこれほど厳しいのでしょうか。それは、家賃を払わない借主をメキシコの裁判所を通じて立ち退かせるには通常<strong>6か月から1年</strong>かかる（控訴が入るとさらに長引く）からです。Fiador — 通常、同じ市または州に登記済みの不動産を所有していなければならない保証人 — は、大家にとっての保険です。関連する立場として <em>obligado solidario</em> があり、これは必ずしも不動産を所有していなくても初日から責任を負う連帯保証人です。いずれも新参者には用意できません。選択肢は次のとおりです。</p>
<div class="space-y-4 mb-4">
  <div class="bg-white border-l-4 border-violet-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">1. Póliza jurídica — 標準的な解決策 ⭐</h3><p class="text-sm text-gray-700">法律事務所が提供する法的保証ポリシーです。事務所があなたの身元を調査し、契約書を作成し、問題が生じた場合には大家の法的費用を負担します。費用は通常<strong>家賃1か月分の30〜70%</strong>（年間家賃の4〜6%として提示されることが多い）に IVA を加えた額で、契約年ごとに1回支払います — 通常は借主が負担し、折半する場合もあります。審査には約1週間かかります。SLP で営業している提供者には、Zorrilla Abogados（Lomas 4a）、Juridixia、および Póliza Jurídica や Morada Uno（オンライン）といった全国的なネットワークがあります。</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">2. 敷金を多めに</h3><p class="text-sm text-gray-700">標準の1か月分ではなく2か月分（時には3か月分）の敷金を提示すると、多くの個人の大家を納得させられます。</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">3. 家賃の前払い</h3><p class="text-sm text-gray-700">2か月、6か月、さらには12か月分を前払いするのは、駐在者の間で記録されている慣行で、ほとんどの反対を解消します — ただし署名済みの契約書と領収書がある場合に限り、決してそれ以前に払ってはいけません（詐欺の項を参照）。</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">4. 有料の Fiador サービス（要注意）</h3><p class="text-sm text-gray-700">こうしたサービスは存在します（料金は家賃1か月分まで）が、法的にあいまいで質のばらつきが激しいものです — póliza jurídica なら、実在する事務所を後ろ盾に同じ役割を果たします。</p></div>
</div>
</section>

<section id="terms" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">通常の契約の姿</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-violet-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">項目</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">慣習（全国）</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">敷金</td><td class="px-4 py-3 text-sm text-gray-700">1か月分（法定上限なし）。入居時の状態を写真で記録すること</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">契約期間</td><td class="px-4 py-3 text-sm text-gray-700">12か月。自動更新条項が付くことが多い</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">値上げ</td><td class="px-4 py-3 text-sm text-gray-700">契約の定めに従う — 一般に INPC 連動または固定の%。上限を交渉すること。法定の上限は CDMX にのみ存在します。</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">解約通知</td><td class="px-4 py-3 text-sm text-gray-700">30日前が慣習。途中解約の違約金1〜2か月分は一般的で、交渉可能</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">言語</td><td class="px-4 py-3 text-sm text-gray-700">法的にはスペイン語が優先されます — 二言語2段組みの版を求めてよいですが、スペイン語側が効力を持つことを理解しておくこと</td></tr>
    </tbody>
  </table>
</div>
</section>

<section id="documents" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">求められる書類</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>パスポート</strong> — 必須です。</li>
  <li>• <strong>居住カード</strong>（一時または永住）— 大家は、契約期間中あなたが合法的に滞在できる証拠を求めます。</li>
  <li>• <strong>家賃の約3倍の収入証明</strong> — 給与明細、在職証明書、または3か月分の銀行取引明細。</li>
  <li>• <strong>場合によっては:</strong> 以前の大家からの推薦状。まれに RFC やメキシコの銀行口座（すべてではありません）。</li>
</ul>
<p class="text-sm text-gray-600 leading-relaxed">観光許可で滞在中ですか。12か月の契約に署名すること自体は合法ですが、多くの大家は180日許可に難色を示します — また入国管理当局は、契約書を「居住許可を申請すべき」というサインと受け取ります。カードが届くまでの現実的な方法は、家具付きの月極賃貸です（下記の着地戦略を参照）。</p>
</section>

<section id="search" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">実際にどこで探すか</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">2026年7月時点の在庫状況: <strong>Inmuebles24</strong> が最も充実した構造化在庫を持ち（市内に約860件の賃貸）、次いで <strong>Vivanuncios</strong>（州全体で約1,100件）、<strong>iCasas</strong>（約550戸）、<strong>propiedades.com</strong>（約290件）と続きます。<strong>Facebook グループ</strong>（「Depas y Casas en Renta San Luis Potosí」など）には、地元の未掲載物件が最も多くありますが、詐欺も圧倒的に多いです。掲載物件のうち家具付きは約37%にすぎず、メキシコでいう「家具なし」はコンロや冷蔵庫すらないことがある点に注意し、物件ごとに確認してください。</p>
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700"><strong>仲介手数料は誰が払う?</strong> 大家です — 通常は家賃約1か月分。あなたに前金を請求してくる仲介業者は、間違いなく危険信号です。</div>
</section>

<section id="scams" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">詐欺の手口集</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">手口 #1:「押さえておくための敷金」</h3><p class="text-sm text-gray-800">「ほかに10人の希望者がいる」などと言って、内見前に送金するよう迫ります。本物の大家はまず物件を見せます。実際に自分の目で内見し、署名するまでは1ペソも払ってはいけません。</p></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">手口 #2: 複製された物件情報</h3><p class="text-sm text-gray-800">同じ物件が、盗用された写真とともに異なる「業者」によって異なる価格で掲載されます — Marketplace で横行しています。怪しい写真は画像で逆検索し、相場を下回る価格は疑ってください。</p></div>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 mb-4">
  <h3 class="font-bold text-emerald-900 mb-2">所有権の確認（失礼ではなく、標準的な慣行）</h3>
  <p class="text-sm text-gray-800">署名する前に、次の提示を求めましょう。<strong>escritura</strong>（公的登記所の印がある権利証）、<strong>支払い済みの predial</strong>（固定資産税）の領収書、そして大家の公的身分証 — この3点の名義がすべて一致していること。メキシコの不動産ガイド自体がこれを推奨しており、正当な大家はそれを当然と考えます。póliza jurídica の事務所がこの確認をあなたに代わって行います — 手数料を払う価値があるもう一つの理由です。</p>
</div>
</section>

<section id="utilities" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">公共料金と住所証明のからくり</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">CFE（電気）と水道の契約は、慣習として<strong>大家の名義のまま</strong>で — あなたは2か月ごとの請求を支払うだけです。ただし注意点があります。公共料金の請求書は、メキシコで広く通用する<strong>comprobante de domicilio</strong>（住所証明）であり、銀行、入国管理局（INM）、税務当局が要求します。住所さえ一致すれば大家名義の請求書を受け付ける役所もあれば、あなた自身の名義を求める役所もあります。標準的な対処法は、<strong>インターネット契約をあなたの名義にする</strong>こと（最も契約しやすい）で、署名済みの契約書とすべての家賃の領収書を保管しておくことです。</p>
</section>

<section id="rights" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">トラブルが起きたら</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• <strong>大家による締め出しや公共サービスの遮断は違法です</strong> — 立ち退きを命じられるのは裁判所だけです。</li>
  <li>• <strong>修繕:</strong> 構造部分や主要設備は大家の負担、軽微な手入れはあなたの負担です。不具合は書面で報告しましょう — WhatsApp のメッセージも記録として有効です。</li>
  <li>• <strong>SLP では口頭の合意でも双方が拘束されます</strong> — 最高裁判所は、立証された口頭の賃貸契約が立ち退き請求を支える一方で、大家にも義務を生じさせることを確認しています。それでも書面に残しておきましょう。</li>
  <li>• SLP の州独自の賃借人法はおおむね全国の慣習に従っており、実務で重要なのは上記のルールです。</li>
</ul>
</section>

<section id="strategy" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">賢い着地戦略</h2>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-4">
  <ol class="space-y-3 text-gray-800">
    <li><strong>1.</strong> 家具付きの月極賃貸を1〜2か月分予約します（Airbnb の月単位滞在プランは28泊以上が対象で、ホスト割引は通常10〜20%、Fiador も書類手続きも不要です）。</li>
    <li><strong>2.</strong> その数週間を使って長期賃貸を<em>実際に自分の目で</em>内見しましょう — これで手口集のあらゆる詐欺を無力化できます — そして各地区の雰囲気を確かめます（当サイトの<a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline">エリアガイド</a>と<a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline">家賃データ</a>が地図代わりになります）。</li>
    <li><strong>3.</strong> póliza jurídica を付け、所有権の確認を済ませ、値上げの上限を交渉したうえで12か月契約に署名します。Fiador を用意する地元の人と比べた追加費用の合計は、家賃のおよそ半月分。1ペソの価値があります。</li>
  </ol>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">外国人は Fiador なしで San Luis Potosí のアパートを借りられますか?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい — 標準的な回避策は póliza jurídica です。これは法律事務所が提供する法的保証ポリシーで、あなたを審査し、大家の立ち退き費用を負担します。費用は通常、家賃1か月分の30〜70%（年間家賃の4〜6%として提示されることが多い）に IVA を加えた額で、契約年ごとに1回支払い、SLP でも複数の提供者が営業しています。代替策としては、敷金を多め（2〜3か月分）にする、または家賃を数か月分前払いする方法があります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Fiador とは何で、なぜ大家はそれを求めるのですか?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Fiador とは、通常、同じ市または州に不動産を所有していなければならない保証人で、その不動産が実質的にあなたの契約を裏付けます。大家がこれを求めるのは、家賃を払わない借主をメキシコの裁判所を通じて立ち退かせるのに通常6か月以上かかるからです。着いたばかりの外国人が、署名してくれる地元の不動産所有者を知っていることはほとんどなく、そのために póliza jurídica が存在します。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">外国人として SLP で借りるにはどんな書類が必要ですか?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">通常は、パスポート、一時または永住の居住カード（大家は契約期間中滞在できる証拠を求めます）、月額家賃の約3倍の収入証明（給与明細または3か月分の銀行取引明細）、そして場合によっては推薦状です。180日許可の観光客も法的には契約に署名できますが、多くの大家は難色を示します — 居住許可を得るまでは、家具付きの月極賃貸が現実的な方法です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">敷金はいくらで、大家は家賃を値上げできますか?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">敷金は家賃1か月分が全国の慣習です（法定上限なし）。年間の値上げは法律ではなく契約によって決まります — 一般的な条項は値上げを INPC（メキシコの消費者物価指数）または固定の割合に連動させます。署名前に上限を交渉しましょう。法定の値上げ上限が存在するのは Mexico City だけで、San Luis Potosí にはありません。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">メキシコで賃貸の詐欺を避けるには?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">物件を実際に自分の目で内見し、署名するまでは何も払わないこと — 「押さえておくための敷金」を迫るのは典型的な手口で、盗用写真を使った複製物件情報が Facebook Marketplace や各ポータルに出回っています。署名する前に、大家の身分証と名義が一致する escritura（権利証）と支払い済みの predial（固定資産税）の領収書の提示を求めましょう — メキシコでは標準的で、失礼にあたらない要求です。仲介業者は大家から報酬を受け取る（家賃約1か月分）ため、あなたに前金を請求してくる「業者」は危険信号です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">賃貸すると公共料金は自分の名義になりますか?<span class="text-violet-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">たいていはなりません — CFE（電気）と水道の契約は慣習として大家の名義のままで、あなたは請求を支払うだけです。これが重要なのは、公共料金の請求書が銀行や入国管理向けのメキシコ標準の住所証明（comprobante de domicilio）だからです。一般的な対処法は、インターネット契約を自分の名義にし、署名済みの契約書と家賃の領収書を保管しておくことです。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に次の資料と照合して検証: メキシコの法実務ガイド（Baker McKenzie、INPC 条項に関する CCN、CDMX のみの家賃上限に関する White & Case）、Fiador と obligado solidario の違いに関する公証人・法律事務所の解説、póliza jurídica 提供者の公表価格（Morada Uno、Póliza Jurídica MX — 幅は実際に変動するため、当サイトはその範囲を掲載しています）、プラットフォームの在庫数（Inmuebles24、Vivanuncios、iCasas、propiedades.com、2026年7月）、記録された詐欺報告（Mexico Relocation Guide、Vivanuncios 自身の詐欺ガイド、Century 21 México）、CFE の名義変更に関する実務ガイド、SCJN tesis 2022766（SLP における口頭の賃貸契約）、立ち退き期間の分析（Liv.mx、Neivor）。出典が食い違う場合 — póliza の費用 — については、正直に範囲を掲載しています。</p>
</section>

<div class="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">San Luis Potosí への移住をお考えですか?</p>
  <p class="text-violet-100 text-sm mb-4">当サイトの住まいサービス一覧が、審査済みの地元のサポートとあなたをつなぎます — そして週刊ブリーフが最新情報をお届けします。</p>
  <a href="/subscribe" class="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-full hover:bg-violet-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "外国人は Fiador なしで San Luis Potosí のアパートを借りられますか?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい — 標準的な回避策は póliza jurídica です。これは法律事務所が提供する法的保証ポリシーで、あなたを審査し、大家の立ち退き費用を負担します。費用は通常、家賃1か月分の30〜70%（年間家賃の4〜6%として提示されることが多い）に IVA を加えた額で、契約年ごとに1回支払い、SLP でも複数の提供者が営業しています。代替策としては、敷金を多め（2〜3か月分）にする、または家賃を数か月分前払いする方法があります。"
      }
    },
    {
      "@type": "Question",
      "name": "Fiador とは何で、なぜ大家はそれを求めるのですか?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fiador とは、通常、同じ市または州に不動産を所有していなければならない保証人で、その不動産が実質的にあなたの契約を裏付けます。大家がこれを求めるのは、家賃を払わない借主をメキシコの裁判所を通じて立ち退かせるのに通常6か月以上かかるからです。着いたばかりの外国人が、署名してくれる地元の不動産所有者を知っていることはほとんどなく、そのために póliza jurídica が存在します。"
      }
    },
    {
      "@type": "Question",
      "name": "外国人として SLP で借りるにはどんな書類が必要ですか?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "通常は、パスポート、一時または永住の居住カード（大家は契約期間中滞在できる証拠を求めます）、月額家賃の約3倍の収入証明（給与明細または3か月分の銀行取引明細）、そして場合によっては推薦状です。180日許可の観光客も法的には契約に署名できますが、多くの大家は難色を示します — 居住許可を得るまでは、家具付きの月極賃貸が現実的な方法です。"
      }
    },
    {
      "@type": "Question",
      "name": "敷金はいくらで、大家は家賃を値上げできますか?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "敷金は家賃1か月分が全国の慣習です（法定上限なし）。年間の値上げは法律ではなく契約によって決まります — 一般的な条項は値上げを INPC（メキシコの消費者物価指数）または固定の割合に連動させます。署名前に上限を交渉しましょう。法定の値上げ上限が存在するのは Mexico City だけで、San Luis Potosí にはありません。"
      }
    },
    {
      "@type": "Question",
      "name": "メキシコで賃貸の詐欺を避けるには?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "物件を実際に自分の目で内見し、署名するまでは何も払わないこと — 「押さえておくための敷金」を迫るのは典型的な手口で、盗用写真を使った複製物件情報が Facebook Marketplace や各ポータルに出回っています。署名する前に、大家の身分証と名義が一致する escritura（権利証）と支払い済みの predial（固定資産税）の領収書の提示を求めましょう — メキシコでは標準的で、失礼にあたらない要求です。仲介業者は大家から報酬を受け取る（家賃約1か月分）ため、あなたに前金を請求してくる「業者」は危険信号です。"
      }
    },
    {
      "@type": "Question",
      "name": "賃貸すると公共料金は自分の名義になりますか?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "たいていはなりません — CFE（電気）と水道の契約は慣習として大家の名義のままで、あなたは請求を支払うだけです。これが重要なのは、公共料金の請求書が銀行や入国管理向けのメキシコ標準の住所証明（comprobante de domicilio）だからです。一般的な対処法は、インターネット契約を自分の名義にし、署名済みの契約書と家賃の領収書を保管しておくことです。"
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
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const update = { content_de: contentDe, content_ja: contentJa };
  const { error: upErr } = await supabase.from('blog_posts').update(update).eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated columns: content_de, content_ja');

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

  const tagCount = (html) => (html.match(/<[^>]+>/g) || []).length;
  const hrefs = (html) => (html.match(/href="[^"]*"/g) || []).sort();
  const jsonLd = (html) => {
    const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    return m ? m[1] : null;
  };
  const arrEq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

  let ok = true;
  const enTags = tagCount(check.content);
  const deTags = tagCount(check.content_de);
  const jaTags = tagCount(check.content_ja);
  console.log(`\nTag counts — EN: ${enTags} · DE: ${deTags} · JA: ${jaTags}`);
  if (deTags !== enTags) { console.error('  DE tag count mismatch'); ok = false; }
  if (jaTags !== enTags) { console.error('  JA tag count mismatch'); ok = false; }

  const enHrefs = hrefs(check.content);
  if (!arrEq(enHrefs, hrefs(check.content_de))) { console.error('  DE hrefs differ'); ok = false; }
  if (!arrEq(enHrefs, hrefs(check.content_ja))) { console.error('  JA hrefs differ'); ok = false; }
  console.log(`Hrefs preserved (${enHrefs.length}): DE ${arrEq(enHrefs, hrefs(check.content_de))} · JA ${arrEq(enHrefs, hrefs(check.content_ja))}`);

  for (const col of ['content_de', 'content_ja']) {
    if (check[col] === check.content) { console.error(`  ${col} identical to EN`); ok = false; }
    const raw = jsonLd(check[col]);
    try {
      const parsed = JSON.parse(raw);
      const n = parsed.mainEntity.length;
      console.log(`${col}: JSON-LD valid (${n} FAQ entries), differs from EN: ${check[col] !== check.content}`);
    } catch (e) {
      console.error(`  ${col} JSON-LD PARSE FAIL: ${e.message}`);
      ok = false;
    }
  }

  // Leftover-English scan: look for distinctly-English marker words that would
  // signal untranslated prose. These are not German or Japanese words and are
  // not among the proper nouns/legal terms intentionally kept in Latin script.
  const enMarkers = [
    'the','and','you','your','with','this','that','from','they','landlord','tenant',
    'deposit','lease','month','before','without','foreigner','apartment','guarantor',
    'income','utilities','address','contract','listing','signing','however','because',
    'stolen','viewing','receipt','proof','rent in advance','property tax',
  ];
  const scanEnglish = (html, label) => {
    // Strip tags and the JSON-LD script block (its keys are English by spec).
    const body = html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<[^>]*>/g, ' ')
      .replace(/https?:\/\/\S+/g, ' ');
    const hits = enMarkers.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(body));
    if (hits.length) {
      console.error(`  ${label} possible leftover English: ${hits.join(', ')}`);
    } else {
      console.log(`${label}: no leftover English marker words.`);
    }
    return hits.length === 0;
  };
  ok = scanEnglish(check.content_de, 'content_de') && ok;
  ok = scanEnglish(check.content_ja, 'content_ja') && ok;

  // Figures preserved check (number formats are locale-specific).
  const figuresByCol = {
    content_de: ['30–70','4–6','1.100','860','550','290','37','180','12','2022766'],
    content_ja: ['30〜70','4〜6','1,100','860','550','290','37','180','12','2022766'],
  };
  for (const col of ['content_de', 'content_ja']) {
    const missing = figuresByCol[col].filter((f) => !check[col].includes(f));
    console.log(`${col} figures kept: ${missing.length === 0 ? 'all' : 'MISSING ' + missing.join(', ')}`);
    if (missing.length) ok = false;
  }

  console.log(ok ? '\nAll checks passed.' : '\nCompleted with problems — review output.');
  process.exit(ok ? 0 : 1);
}

main();
