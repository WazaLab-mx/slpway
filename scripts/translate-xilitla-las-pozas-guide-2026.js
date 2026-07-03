// Native DE + JA translations for blog post `xilitla-las-pozas-guide-2026`.
// Idempotent: updates content_de + content_ja by slug, verifies via re-fetch.
// HTML tags/attributes/hrefs/classes preserved exactly; only text nodes and
// human-readable JSON-LD strings translated. Modeled on
// apply-factcheck-corrections-2026-07.js.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'xilitla-las-pozas-guide-2026';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">In diesem Leitfaden</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Las Pozas auf einen Blick</a>
    <a href="#edward-james" class="hover:underline">→ Wer war Edward James?</a>
    <a href="#the-garden" class="hover:underline">→ Der Garten: Frost, Beton & 5 Millionen Dollar</a>
    <a href="#structures" class="hover:underline">→ Was Sie tatsächlich zu sehen bekommen</a>
    <a href="#after-james" class="hover:underline">→ Wer Las Pozas heute betreibt</a>
    <a href="#visiting" class="hover:underline">→ Der Besuch in der Praxis (Reservierung)</a>
    <a href="#town" class="hover:underline">→ Xilitla jenseits des Gartens</a>
    <a href="#nearby" class="hover:underline">→ In der Nähe: Huahuas & El Salitre</a>
    <a href="#logistics" class="hover:underline">→ Anreise, Wetter, Unterkünfte</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Fakten geprüft im Juli 2026 · Quellen am Ende · Teil unserer <a href="/blog/huasteca-potosina-itinerary-2026" class="underline">Huasteca-Potosina-Reiseroute</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Tief im Nebelwald im Osten von San Luis Potosí verbrachte ein britischer Aristokrat zwei Jahrzehnte und über fünf Millionen Dollar damit, einen surrealistischen Traum aus Beton zu errichten.</strong> Las Pozas – Treppen, die ins Nichts führen, Blumen höher als Häuser, ein Palast, der für niemanden bestimmt ist – ist der seltsamste und fotogenste Ort Mexikos, den Sie um 9 Uhr morgens noch fast für sich allein haben können. Hier ist die ganze Geschichte, dazu alles, was Sie für einen Besuch im Jahr 2026 brauchen.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas auf einen Blick</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Las Pozas</strong> ist der surrealistische Skulpturengarten, den Edward James zwischen 1962 und 1984 im Dschungel oberhalb von Xilitla anlegte, einem Pueblo Mágico in der Huasteca Potosina. Rund drei Dutzend monumentale Betonbauten (offiziell katalogisiert die Anlage 27) verteilen sich über <strong>9 Hektar</strong> Regenwald, Wasserfälle und natürliche Becken auf über 600 m Höhe.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Eintritt 2026:</strong> MX$180 für Erwachsene + obligatorische Führung (MX$30 Spanisch / MX$60 Englisch) – zeitgebundene Reservierung online, Zahlung an der Kasse</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Dienstags geschlossen</strong> zur Konservierung · geöffnet Mi–Mo 9–18 Uhr, letzter Einlass 16 Uhr · englische Führungen 10 und 15 Uhr</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Baden ist nicht mehr erlaubt</strong> in den Becken – ältere Reiseführer sind überholt</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Anreise:</strong> 1 Std. 20 Min. von Ciudad Valles; ~4,5–5 Std. von der Stadt San Luis Potosí</span></li>
  </ul>
</div>
</section>

<section id="edward-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Wer war Edward James?</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Edward Frank Willis James (1907–1984) wuchs auf einem englischen Landgut von 6.000 Acres auf, besuchte Eton und Oxford und erbte in jungen Jahren ein Bergbauvermögen. Der gesellschaftliche Klatsch raunte – und James dementierte es augenzwinkernd nie –, er sei der uneheliche Enkel von König Edward VII. Was belegt ist, ist noch seltsamer als das Gerücht: Er wurde <strong>einer der bedeutendsten Förderer, die der Surrealismus je hatte</strong>.</p>
<ul class="space-y-3 mb-6 text-gray-800">
  <li><strong>Er finanzierte Dalí.</strong> In einem Vertrag für 1937–38 verpflichtete sich James, das gesamte Schaffen von Salvador Dalí abzunehmen – und finanzierte den Maler damit praktisch ein Jahr lang –, und wirkte an zwei Ikonen der Bewegung mit: dem <em>Lobster Telephone</em> und dem <em>Mae West Lips Sofa</em>.</li>
  <li><strong>Magritte malte ihn – zweimal.</strong> Während eines Aufenthalts 1937 in James' Londoner Haus schuf René Magritte <em>Not to Be Reproduced</em>, das berühmte Gemälde eines Mannes vor einem Spiegel, der seinen eigenen Hinterkopf zeigt. Der Mann ist Edward James.</li>
  <li><strong>Er förderte Leonora Carrington</strong> und trug eine der bedeutendsten surrealistischen Sammlungen außerhalb Frankreichs zusammen – ein Detail, das später in dieser Geschichte wichtig wird.</li>
</ul>
<p class="text-gray-800 leading-relaxed mb-4">Mitte der 1940er-Jahre zog es James von New Mexico nach Mexiko. In Cuernavaca engagierte er <strong>Plutarco Gastélum</strong>, einen Yaqui-Führer aus Sonora, und im November 1945 erreichten die beiden Xilitla, angelockt von Berichten über spektakuläre wilde Orchideen. Wie James es gern erzählte, umhüllte eine Wolke von Schmetterlingen seinen Badegefährten an einem Dschungelbecken – und er deutete es als Zeichen. 1947 kaufte er die Kaffeeplantage von Las Pozas.</p>
<p class="text-gray-800 leading-relaxed">Gastélum wurde Bauleiter des Projekts und James' lebenslanger Anker in Mexiko. Er zog seine Familie in <strong>El Castillo</strong> groß, dem gotisch-fantastischen Haus, das er im Ort baute – wo „Onkel Edward“ jahrzehntelang Zimmer behielt und wo Sie heute übernachten können (heute die Posada El Castillo).</p>
</section>

<img src="/images/blog/xilitla-las-pozas-pools.webp" alt="Wasserfallbecken in Las Pozas, Xilitla" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="the-garden" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Der Frost, der einen Garten schuf</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Fünfzehn Jahre lang war Las Pozas vor allem eine Orchideenplantage – James zog Tausende von ihnen und hielt exotische Tiere (Hirsche, Flamingos und, berühmt, Schlangen). Dann, <strong>1962, tötete ein beispielloser Frost die Orchideensammlung über Nacht</strong>.</p>
<p class="text-gray-800 leading-relaxed mb-4">James' Antwort prägt den Ort: Er beschloss, <strong>Blumen zu bauen, die niemals sterben könnten – aus Beton</strong>. Von 1962 bis zu seinem Tod 1984 gossen Trupps einheimischer Maurer, Zimmerleute und Schmiede – über 150 Arbeiter im Laufe des Projekts, wobei der Zimmermann José Aguilar die Holzformen schnitzte – eine Fantasie aus Säulen in Form von Bambus und Orchideen, Toren, Aquädukten, Wendeltreppen und Türmen zwischen den Wasserfällen.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>Der Preis eines Traums:</strong> Der Bau kostete über <strong>5 Millionen US-Dollar</strong>, die James größtenteils durch die Versteigerung seiner surrealistischen Kunstsammlung aufbrachte – die Dalís und Magrittes gewissermaßen gegen Beton im Dschungel getauscht. Einen Turm nannte er „the Tower of Hope“ und wollte darin wohnen. Er vollendete ihn nie; als er 1984 starb, brach der Bau mitten im Gießen ab, und mehrere Bauten verharren genau dort, wo die Arbeiter sie verlassen haben.</p>
</div>
</section>

<section id="structures" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Was Sie tatsächlich zu sehen bekommen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der geführte Rundgang (~1,5 Stunden, Gruppen von max. 25) windet sich bergauf an den Höhepunkten vorbei. Die Namen sind hier wichtig – James betitelte seine Follies wie Gedichte:</p>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House on Three Floors Which Will in Fact Have Five or Four or Six</h3><p class="text-sm text-gray-700">Das Wahrzeichen der Anlage – nach Jahrzehnten der Dschungelfeuchtigkeit 2012–2013 mit Hilfe des World Monuments Fund restauriert.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Stairway to Heaven</h3><p class="text-sm text-gray-700">Eine 20 Meter hohe Spirale aus orchideenförmigen Säulen, die in den freien Himmel steigt und einfach … endet. Der meistfotografierte Ort des Gartens.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Bamboo Palace ("Tower of Hope")</h3><p class="text-sm text-gray-700">Auf einem der höchsten Punkte mit der besten Aussicht – das Haus, das James für sich selbst vorsah und nie bezog.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House with a Roof like a Whale, St. Edward's Plaza, the Cinematographer…</h3><p class="text-sm text-gray-700">… und Don Eduardo's Cabin, die Hütte aus Holz und Bambus, in der James tatsächlich zwischen seinen Hausschlangen lebte, restauriert vom World Monuments Fund.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Unter allem liegen die <em>pozas</em> selbst – die neun abgestuften Wasserfallbecken, die dem Ort seinen Namen gaben. Sie können sie von den Wegen aus fotografieren, doch <strong>Baden ist nicht mehr gestattet</strong>.</p>
</section>

<section id="after-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Wer Las Pozas heute betreibt</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Als James 1984 starb, ging das Land an Plutarco Gastélum über, der jeden Bau einstellte. Anfang der 1990er-Jahre öffnete der Garten informell für Besucher. <strong>2007 kauften die Fundación Pedro y Elena Hernández, CEMEX und die Landesregierung von San Luis Potosí die Anlage für rund 2,2 Mio. US$</strong> und gründeten <strong>Fondo Xilitla</strong>, den Trust, der sie heute verwaltet.</p>
<p class="text-gray-800 leading-relaxed">Die Ehrungen häuften sich: Kulturerbe des Bundesstaates (2006), Mexikos <strong>UNESCO-Welterbe-Vorschlagsliste (2009)</strong>, der World Monuments Fund Watch (2010) und <strong>Künstlerisches Monument der Nation (2012)</strong> – eine Auszeichnung, die Stätten des 20. Jahrhunderts nur selten zuteilwird. Die Konservierung ist ein Dauerkampf (Beton + Dschungelfeuchtigkeit + Wurzeln), und genau deshalb schließt der Garten jeden Dienstag. Weit über 100.000 Menschen besuchen ihn jedes Jahr.</p>
</section>

<section id="visiting" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Der Besuch in der Praxis</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <h3 class="font-bold text-amber-900 mb-3">Das Reservierungssystem (nicht überspringen)</h3>
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Zuerst online reservieren</strong> auf laspozasxilitla.org.mx, zwischen <strong>24 Stunden und 60 Tagen</strong> im Voraus. Eine Online-Zahlung gibt es nicht.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>An der Kasse zahlen</strong> am Tag selbst: MX$180 für Erwachsene, MX$120 für Senioren/Kinder 6–12, plus die <strong>obligatorische Führung</strong> (MX$30 Spanisch / MX$60 Englisch; englische Führungen um 10 und 15 Uhr). Bestätigung + Ausweis mitbringen.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Die Einlasszeiten sind strikt</strong> – keine Erstattung, wenn Sie Ihre verpassen. Dienstags geschlossen; letzter Einlass 16 Uhr.</span></li>
  </ul>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📷 Fotoregeln</h3><p class="text-sm text-gray-700 leading-relaxed">Handys und Handkameras sind für den privaten Gebrauch in Ordnung. <strong>Keine Stative, Beleuchtungsanlagen oder Profi-Ausrüstung, und Drohnen sind verboten</strong> ohne eine spezielle Produktionsgenehmigung. Bestes Licht: direkt zur Öffnung um 9 Uhr, wenn noch Nebel im Blätterdach hängt und die Reisebusse noch nicht da sind.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⚠️ Vor dem Besuch wissen</h3><p class="text-sm text-gray-700 leading-relaxed">Der Garten ist ein Hang voller Treppen und moosigem, rutschigem Beton – offiziell nicht empfohlen für Menschen mit eingeschränkter Mobilität oder Herzproblemen; Kinderwagen sind untersagt. Tragen Sie griffige Schuhe. Planen Sie einen ganzen Vormittag ein, auch wenn die Führung nur ~1,5 Std. dauert.</p></div>
</div>
</section>

<img src="/images/blog/xilitla-pueblo-magico.jpg" alt="Der Ort Xilitla im Nebelwald der Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Xilitla jenseits des Gartens</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die meisten Besucher behandeln Xilitla als Parkplatz für Las Pozas. Schenken Sie dem Ort einen Nachmittag, und er belohnt Sie – ein Pueblo Mágico am Hang (seit 2011) aus Kaffee, Nebel und vielschichtiger Geschichte, Heimat lebendiger Nahua- und Teenek-Gemeinschaften (Huastec):</p>
<div class="space-y-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⛪ Das ehemalige Augustinerkloster (1550er-Jahre)</h3><p class="text-sm text-gray-700 leading-relaxed">Der Bau dieses Festungsklosters begann 1553, und es gilt oft als das älteste erhaltene Gebäude des Bundesstaates. Es wurde buchstäblich für den Krieg errichtet – Überfälle der Chichimeca brannten in den 1580er-Jahren sein Dach nieder – und seine platereske Masse beherrscht noch immer den Platz.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎨 Museo Leonora Carrington Xilitla</h3><p class="text-sm text-gray-700 leading-relaxed">2018 eröffnet mit Skulpturen, Zeichnungen, Wandteppichen und Masken, die der Sohn der Künstlerin stiftete. Hier schließt sich der Kreis: Carrington war eine Freundin von Edward James, und er förderte ihr Werk Jahrzehnte, bevor die Welt es entdeckte. (Ihr größeres Museum steht in der <a href="/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism" class="text-emerald-700 underline">Stadt San Luis Potosí</a>.)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">☕ Kaffeeland</h3><p class="text-sm text-gray-700 leading-relaxed">Über 2.500 mm Regen im Jahr machen Xilitla zu einem der feuchtesten – und besten Kaffee-Winkel Mexikos. Probieren Sie rund um den Platz lokal angebaute Tassen; jeden August gibt es eine Kaffeemesse. Sonntag ist Markttag, wenn der Tianguis das Zentrum mit Huasteca-Speisen und Kunsthandwerk füllt.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🏰 El Castillo</h3><p class="text-sm text-gray-700 leading-relaxed">Plutarco Gastélums gotisch-fantastisches Haus im Ort, in dem James lange Zeit wohnte. Heute ist es zugleich ein kleines Museum und die Posada El Castillo (~MX$1,550–2,500/Nacht) – in Edward James' Haus zu schlafen ist das ultimative Highlight der Huasteca.</p></div>
</div>
</section>

<section id="nearby" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">In der Nähe: die Extras der Einheimischen</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Sótano de las Huahuas (~1 Std. entfernt)</h3><p class="text-sm text-gray-700">Ein ~480 m tiefer Einsturzschlund bei Aquismón, aus dem im Morgengrauen Hunderttausende Segler und grüne Sittiche spiralförmig aufsteigen und in der Abenddämmerung (~17:30–18:30 Uhr) zurückstürzen. Eintritt MX$30 plus eine ~30–40-minütige Wanderung über einen Steinpfad – die ruhigere Alternative zum berühmten Sótano de las Golondrinas.</p></div>
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Cueva del Salitre</h3><p class="text-sm text-gray-700">Ein riesiges Höhlenmaul direkt außerhalb des Ortes (kleine Barzahlung, ~MX$25–50), erreichbar über einen leichten Rundweg von ~5 km (Hin- und Rückweg). Nehmen Sie eine Stirnlampe mit – und einen Führer, wenn Sie tief hinein wollen.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Planen Sie eine längere Reise? Xilitla ist Tag 3 unserer <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">Huasteca-Potosina-Reiseroute für 3/5/7 Tage</a>, die Tamul, die Wasserfälle und alle Preise für 2026 abdeckt.</p>
</section>

<section id="logistics" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Anreise, Wetter & Unterkünfte</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Anreise</h3><p class="text-sm text-gray-700 leading-relaxed">Von Ciudad Valles: 85 km, ~1 Std. 20 Min. (Hwy 85 nach Süden, dann Hwy 120 den Berg hinauf). Von der Stadt San Luis Potosí: insgesamt ~4,5–5 Std. Fahren Sie die Sierra nicht bei Nacht – Nebel ist in dieser Höhe die Regel.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌦️ Wetter</h3><p class="text-sm text-gray-700 leading-relaxed">Nebelwaldklima, spürbar kühler als die tief gelegene Huasteca. Dez–März: frisch, Tiefstwerte bis ~8 °C, hohe Luftfeuchtigkeit. Juni–Sep: heftiger Regen (kurze Verschnaufpause im August). Januar–März bieten die verlässlichsten Bedingungen – prüfen Sie in jedem Fall eine 10-Tage-Vorhersage.</p></div>
</div>
<p class="text-gray-800 leading-relaxed"><strong>Übernachten:</strong> Posada El Castillo für die Geschichte; Hostal Café und einfache Posadas nahe dem Eingang von Las Pozas für kleines Budget. Eine Nacht deckt Garten + Ort ab; zwei Nächte ergänzen Huahuas in der Abenddämmerung und den Sonntagsmarkt.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was ist Las Pozas in Xilitla?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Las Pozas ist ein surrealistischer Skulpturengarten, den der britische Dichter und Kunstmäzen Edward James im Dschungel von Xilitla, San Luis Potosí, anlegte – der Mann, der Salvador Dalí finanzierte und von Magritte gemalt wurde. Zwischen 1962 und seinem Tod 1984 steckte er über 5 Millionen US-Dollar in rund drei Dutzend Beton-Follies (offiziell katalogisiert die Anlage 27), verteilt über 9 Hektar Regenwald, Wasserfälle und Becken.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was kostet Las Pozas und brauche ich eine Reservierung?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Erwachsene zahlen MX$180 an der Kasse (MX$120 für Senioren und Kinder 6–12) plus eine obligatorische Führungsgebühr von MX$30 auf Spanisch oder MX$60 auf Englisch. Sie müssen zuerst einen zeitgebundenen Einlass online reservieren – zwischen 24 Stunden und 60 Tagen im Voraus – und dann am Tag selbst vor Ort zahlen. Dienstags geschlossen; letzter Einlass 16 Uhr; englische Führungen um 10 und 15 Uhr.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Kann man in Las Pozas schwimmen?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Nein – nicht mehr. Das Baden in den Becken unterhalb der Wasserfälle war früher erlaubt, ist aber seit der Pandemiezeit nicht mehr gestattet. Ältere Reiseführer behaupten noch das Gegenteil; sie sind überholt. Zum Baden fahren Sie zum Puente de Dios oder zu den Wasserfällen von Tamasopo, etwa eine Stunde entfernt.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie kommt man nach Xilitla?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Xilitla liegt 85 km (~1 Std. 20 Min.) von Ciudad Valles über die Highways 85 und 120 entfernt und rund 4,5–5 Stunden von der Stadt San Luis Potosí. Die meisten Reisenden verbinden es mit einer Rundreise durch die Huasteca Potosina von Ciudad Valles aus; von dort gibt es auch Tagestouren.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Reicht ein Tag für Xilitla?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ein Tagesausflug deckt Las Pozas plus einen kurzen Blick auf den Ort ab. Eine Übernachtung ist deutlich besser: Sie erleben den Garten zur Öffnung um 9 Uhr vor dem Andrang, dazu das Augustiner-Ex-Kloster aus dem 16. Jahrhundert, das Leonora-Carrington-Museum und Cafés. Zwei Nächte ergänzen das Vogelspektakel in der Abenddämmerung am Sótano de las Huahuas und den Sonntagsmarkt.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wer war Edward James?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Edward James (1907–1984) war ein britischer Dichter und Erbe, der zu einem der großen Förderer des Surrealismus wurde: Er verpflichtete sich vertraglich, Salvador Dalís gesamtes Schaffen des Jahres 1938 abzunehmen, wirkte an Lobster Telephone und Mae West Lips Sofa mit und erscheint in Magrittes berühmtem Gemälde ‚Not to Be Reproduced‘. 1945 kam er mit seinem Führer und lebenslangen Freund Plutarco Gastélum nach Xilitla, kaufte 1947 eine Kaffeeplantage und baute, nachdem ein Frost 1962 seine Orchideen getötet hatte, zwei Jahrzehnte lang Betonblumen, die niemals sterben könnten.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Geprüft im Juli 2026 anhand von: laspozasxilitla.org.mx (offizielle Geschichte, Preise, Besuchsregeln), Wikipedia-Einträgen zu Edward James, Las Pozas und Xilitla (biografische Daten, Dalí-Vertrag, Magritte-Porträts, Baukennzahlen), UNESCO-Vorschlagslisten (Ref. 5493), Projektseiten des World Monuments Fund (Restaurierungen), offiziellen Informationen des Museo Leonora Carrington, El Universal SLP und regionalen Huasteca-Quellen (Klostergeschichte, Sótano de las Huahuas). Wo Quellen sich widersprechen – Anzahl der Bauten (offiziell: 27; die meisten Medien: 36), die Schmetterlings-Anekdote, „ältestes Gebäude des Bundesstaates“ –, schreiben wir zu, statt zu behaupten.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planen Sie Ihre Huasteca-Reise von San Luis Potosí aus?</p>
  <p class="text-emerald-100 text-sm mb-4">Erhalten Sie unseren wöchentlichen Guide zu Events, Essen und Reisen in SLP – kostenlos, jeden Montag.</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist Las Pozas in Xilitla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Pozas ist ein surrealistischer Skulpturengarten, den der britische Dichter und Kunstmäzen Edward James im Dschungel von Xilitla, San Luis Potosí, anlegte – der Mann, der Salvador Dalí finanzierte und von Magritte gemalt wurde. Zwischen 1962 und seinem Tod 1984 steckte er über 5 Millionen US-Dollar in rund drei Dutzend Beton-Follies (offiziell katalogisiert die Anlage 27), verteilt über 9 Hektar Regenwald, Wasserfälle und Becken."
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet Las Pozas und brauche ich eine Reservierung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erwachsene zahlen MX$180 an der Kasse (MX$120 für Senioren und Kinder 6–12) plus eine obligatorische Führungsgebühr von MX$30 auf Spanisch oder MX$60 auf Englisch. Sie müssen zuerst einen zeitgebundenen Einlass online reservieren – zwischen 24 Stunden und 60 Tagen im Voraus – und dann am Tag selbst vor Ort zahlen. Dienstags geschlossen; letzter Einlass 16 Uhr; englische Führungen um 10 und 15 Uhr."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man in Las Pozas schwimmen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein – nicht mehr. Das Baden in den Becken unterhalb der Wasserfälle war früher erlaubt, ist aber seit der Pandemiezeit nicht mehr gestattet. Ältere Reiseführer behaupten noch das Gegenteil; sie sind überholt. Zum Baden fahren Sie zum Puente de Dios oder zu den Wasserfällen von Tamasopo, etwa eine Stunde entfernt."
      }
    },
    {
      "@type": "Question",
      "name": "Wie kommt man nach Xilitla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xilitla liegt 85 km (~1 Std. 20 Min.) von Ciudad Valles über die Highways 85 und 120 entfernt und rund 4,5–5 Stunden von der Stadt San Luis Potosí. Die meisten Reisenden verbinden es mit einer Rundreise durch die Huasteca Potosina von Ciudad Valles aus; von dort gibt es auch Tagestouren."
      }
    },
    {
      "@type": "Question",
      "name": "Reicht ein Tag für Xilitla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Tagesausflug deckt Las Pozas plus einen kurzen Blick auf den Ort ab. Eine Übernachtung ist deutlich besser: Sie erleben den Garten zur Öffnung um 9 Uhr vor dem Andrang, dazu das Augustiner-Ex-Kloster aus dem 16. Jahrhundert, das Leonora-Carrington-Museum und Cafés. Zwei Nächte ergänzen das Vogelspektakel in der Abenddämmerung am Sótano de las Huahuas und den Sonntagsmarkt."
      }
    },
    {
      "@type": "Question",
      "name": "Wer war Edward James?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edward James (1907–1984) war ein britischer Dichter und Erbe, der zu einem der großen Förderer des Surrealismus wurde: Er verpflichtete sich vertraglich, Salvador Dalís gesamtes Schaffen des Jahres 1938 abzunehmen, wirkte an Lobster Telephone und Mae West Lips Sofa mit und erscheint in Magrittes berühmtem Gemälde ‚Not to Be Reproduced‘. 1945 kam er mit seinem Führer und lebenslangen Freund Plutarco Gastélum nach Xilitla, kaufte 1947 eine Kaffeeplantage und baute, nachdem ein Frost 1962 seine Orchideen getötet hatte, zwei Jahrzehnte lang Betonblumen, die niemals sterben könnten."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Las Pozasの概要</a>
    <a href="#edward-james" class="hover:underline">→ Edward Jamesとは何者か</a>
    <a href="#the-garden" class="hover:underline">→ 庭園：霜、コンクリート、500万ドル</a>
    <a href="#structures" class="hover:underline">→ 実際に見られるもの</a>
    <a href="#after-james" class="hover:underline">→ 現在Las Pozasを運営するのは誰か</a>
    <a href="#visiting" class="hover:underline">→ 実際の訪問（予約）</a>
    <a href="#town" class="hover:underline">→ 庭園だけではないXilitla</a>
    <a href="#nearby" class="hover:underline">→ 周辺：ワウアスとエル・サリトレ</a>
    <a href="#logistics" class="hover:underline">→ 行き方、天候、宿泊先</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">2026年7月に事実確認済み · 出典は末尾に · <a href="/blog/huasteca-potosina-itinerary-2026" class="underline">Huasteca Potosina旅程</a>の一部です</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosí東部の雲霧林の奥深くで、あるイギリスの貴族が20年と500万ドル以上を費やし、コンクリートでシュルレアリスムの夢を築き上げました。</strong> どこにも通じない階段、家より高い花々、誰のためでもない宮殿——Las Pozasは、午前9時ならほぼ独り占めできる、メキシコで最も奇妙で最もフォトジェニックな場所です。本記事ではその全貌に加え、2026年に訪れるために必要なすべてをお伝えします。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozasの概要</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Las Pozas</strong>は、Edward Jamesが1962年から1984年にかけて、Huasteca Potosinaのプエブロ・マヒコであるXilitlaの上手のジャングルに造り上げたシュルレアリスムの彫刻庭園です。およそ3ダースの巨大なコンクリート構造物（施設が公式に記録しているのは27基）が、標高600メートル超の熱帯雨林・滝・天然の淵からなる<strong>9ヘクタール</strong>に点在しています。
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>2026年の入場料：</strong>大人MX$180＋必須のガイド（スペイン語MX$30／英語MX$60）——オンラインで時間指定予約、支払いは窓口で</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>火曜休園</strong>（保全のため）· 水〜月は9〜18時に開園、最終入場16時 · 英語ツアーは10時と15時</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>遊泳はもう許可されていません</strong>——淵での。古いガイドブックは情報が古くなっています</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>行き方：</strong>Ciudad Vallesから1時間20分；San Luis Potosí市街から約4.5〜5時間</span></li>
  </ul>
</div>
</section>

<section id="edward-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Edward Jamesとは何者か</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Edward Frank Willis James（1907–1984）は、6,000エーカーのイギリスの領地で育ち、イートン校とオックスフォードに学び、若くして鉱山業の財産を相続しました。社交界のうわさは、彼が国王エドワード7世の私生児の孫だとささやき——ジェームズもいたずらっぽく決して否定しませんでした。記録に残る事実はうわさよりも奇妙です。彼は<strong>シュルレアリスム史上最も重要なパトロンの一人</strong>になったのです。</p>
<ul class="space-y-3 mb-6 text-gray-800">
  <li><strong>彼はダリに資金を提供しました。</strong> 1937–38年を対象とする契約で、ジェームズはサルバドール・ダリの全作品を買い取ることに同意し——実質的に1年間この画家を支え——運動の二つの象徴的作品、<em>Lobster Telephone</em>と<em>Mae West Lips Sofa</em>の制作に協力しました。</li>
  <li><strong>マグリットは彼を——二度描きました。</strong> 1937年にジェームズのロンドンの邸宅に滞在した際、ルネ・マグリットは<em>Not to Be Reproduced</em>を制作しました。鏡に向かう男が、その鏡に自らの後頭部を映すという有名な絵です。その男こそEdward Jamesです。</li>
  <li><strong>彼はレオノーラ・キャリントンを支援し</strong>、フランス国外で最も優れたシュルレアリスムのコレクションの一つを築き上げました——これは本記事の後半で重要になる点です。</li>
</ul>
<p class="text-gray-800 leading-relaxed mb-4">1940年代半ば、ジェームズはニューメキシコからメキシコへと流れ着きました。クエルナバカで彼はソノラ出身のヤキ族のガイド、<strong>Plutarco Gastélum</strong>を雇い、1945年11月、見事な野生ランのうわさを追って二人はXilitlaにたどり着きました。ジェームズが好んで語ったところによれば、ジャングルの淵で水浴びをしていた同行者を蝶の群れが包み込み——彼はそれを啓示と受け取りました。1947年、彼はLas Pozasのコーヒー農園を購入しました。</p>
<p class="text-gray-800 leading-relaxed">Gastélumはこのプロジェクトの現場監督となり、メキシコにおけるジェームズの生涯の支えとなりました。彼は町に建てたゴシック・ファンタジー風の家<strong>エル・カスティージョ</strong>で家族を育てました——「エドワードおじさん」が何十年も部屋を確保し、今日では宿泊もできます（現在はポサダ・エル・カスティージョ）。</p>
</section>

<img src="/images/blog/xilitla-las-pozas-pools.webp" alt="XilitlaのLas Pozasの滝壺" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="the-garden" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">庭園を生んだ霜</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">15年間、Las Pozasは何よりもまずラン園でした——ジェームズは何千株ものランを育て、珍しい動物（鹿、フラミンゴ、そして有名なところでは蛇）を飼っていました。ところが、<strong>1962年、前例のない霜が一夜にしてランのコレクションを枯らしてしまいました</strong>。</p>
<p class="text-gray-800 leading-relaxed mb-4">この場所を決定づけたのはジェームズの応え方でした。彼は<strong>決して枯れない花を——コンクリートで——造ろうと決意しました</strong>。1962年から1984年に亡くなるまで、地元の石工・大工・鍛冶職人の一団——プロジェクト全体で150人を超える職人が携わり、大工のホセ・アギラルが木型を彫りました——が、竹やランの形をした柱、門、水道橋、螺旋階段、そして滝のあいだにそびえる塔という幻想を流し込みました。</p>
<div class="bg-gray-50 rounded-xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>夢の代償：</strong>建設費は<strong>500万米ドル</strong>を超え、その大半をジェームズは自らのシュルレアリスム美術コレクションを競売にかけて工面しました——ダリやマグリットの作品を、いわばジャングルのコンクリートと交換したのです。彼はある塔を「the Tower of Hope（希望の塔）」と名付け、そこに住むつもりでした。しかし完成させることはなく、1984年に亡くなると建設は打設の途中で止まり、いくつかの構造物は職人たちが残したそのままの姿で凍りついたように残っています。</p>
</div>
</section>

<section id="structures" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">実際に見られるもの</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">ガイド付きの巡回路（約1.5時間、最大25名のグループ）は、見どころをたどりながら坂道を上っていきます。ここでは名前が大切です——ジェームズは自らの奇想建築（フォリー）に詩のような題名を付けました：</p>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House on Three Floors Which Will in Fact Have Five or Four or Six</h3><p class="text-sm text-gray-700">この施設を象徴する構造物——数十年にわたるジャングルの湿気を経て、2012〜2013年にワールド・モニュメント財団（World Monuments Fund）の協力で修復されました。</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Stairway to Heaven</h3><p class="text-sm text-gray-700">ラン形の柱が20メートルの螺旋を描いて大空へと昇り、そして……ただ途切れます。庭園で最も写真に撮られる場所です。</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Bamboo Palace ("Tower of Hope")</h3><p class="text-sm text-gray-700">最も見晴らしのよい高台の一つにあり——ジェームズが自らの住まいとして意図しながら、ついぞ住まなかった家です。</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House with a Roof like a Whale, St. Edward's Plaza, the Cinematographer…</h3><p class="text-sm text-gray-700">……そしてDon Eduardo's Cabin。ジェームズが実際にペットの蛇たちと暮らした木と竹の小屋で、ワールド・モニュメント財団によって修復されました。</p></div>
</div>
<p class="text-gray-800 leading-relaxed">そのすべての下を流れるのが<em>pozas</em>（淵）そのもの——この場所に名を与えた、9段の滝壺です。遊歩道から写真に撮ることはできますが、<strong>遊泳はもう認められていません</strong>。</p>
</section>

<section id="after-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">現在Las Pozasを運営するのは誰か</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">1984年にジェームズが亡くなると、土地はPlutarco Gastélumに引き継がれ、彼はすべての建設を止めました。庭園は1990年代初頭に非公式に来訪者へ開かれました。<strong>2007年、フンダシオン・ペドロ・イ・エレナ・エルナンデス、CEMEX、そしてSan Luis Potosí州政府が約220万米ドルでこの敷地を購入し</strong>、今日それを管理する信託<strong>Fondo Xilitla</strong>を設立しました。</p>
<p class="text-gray-800 leading-relaxed">栄誉が積み重なりました。州の文化遺産（2006年）、メキシコの<strong>ユネスコ世界遺産暫定リスト（2009年）</strong>、ワールド・モニュメント財団ウォッチ（2010年）、そして<strong>国家芸術記念物（2012年）</strong>——20世紀の遺構にはめったに与えられない指定です。保全は絶え間ない闘い（コンクリート＋ジャングルの湿気＋木の根）であり、まさにそのために庭園は毎週火曜に閉まります。毎年ゆうに10万人を超える人々が訪れています。</p>
</section>

<section id="visiting" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">実際の訪問</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <h3 class="font-bold text-amber-900 mb-3">予約システム（読み飛ばさないでください）</h3>
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>まずオンラインで予約</strong>を laspozasxilitla.org.mx で、<strong>24時間前から60日前まで</strong>の間に行います。オンライン決済はありません。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span>当日<strong>窓口で支払い</strong>ます：大人MX$180、シニア／6〜12歳の子どもMX$120、加えて<strong>必須のガイド</strong>（スペイン語MX$30／英語MX$60；英語ツアーは10時と15時）。予約確認書と身分証をお持ちください。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>入場時間は厳格です</strong>——時間を逃しても返金はありません。火曜休園、最終入場16時。</span></li>
  </ul>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📷 撮影のルール</h3><p class="text-sm text-gray-700 leading-relaxed">スマートフォンや手持ちカメラは私的利用なら問題ありません。<strong>三脚、照明機材、プロ用機材は不可で、ドローンも禁止</strong>です（特別な撮影許可がない限り）。最良の光は、開園直後の9時——まだ樹冠に霧がかかり、観光バスが到着する前です。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⚠️ 出かける前に知っておくこと</h3><p class="text-sm text-gray-700 leading-relaxed">庭園は階段と、苔むして滑りやすいコンクリートの斜面です——移動に不安のある方や心臓に持病のある方には公式に推奨されておらず、ベビーカーは禁止です。滑りにくい靴を履いてください。ツアーは約1.5時間ですが、午前中をまるごと充ててください。</p></div>
</div>
</section>

<img src="/images/blog/xilitla-pueblo-magico.jpg" alt="Huasteca Potosinaの雲霧林にあるXilitlaの町" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">庭園だけではないXilitla</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">多くの来訪者はXilitlaをLas Pozasの駐車場のように扱います。しかしこの町に午後の時間を割けば、その分は報われます——コーヒーと霧と重層的な歴史をたたえる丘の上のプエブロ・マヒコ（2011年より）で、いまも息づくナワ族とテーネク族（ワステコ）の共同体の故郷です：</p>
<div class="space-y-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⛪ 旧アウグスティノ会修道院（1550年代）</h3><p class="text-sm text-gray-700 leading-relaxed">この要塞修道院の建設は1553年に始まり、州内で現存する最古の建物としてしばしば挙げられます。文字どおり戦のために築かれ——1580年代にはチチメカ族の襲撃で屋根が焼かれました——プラテレスコ様式の重厚な姿は今も広場を圧しています。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎨 Museo Leonora Carrington Xilitla</h3><p class="text-sm text-gray-700 leading-relaxed">2018年に開館し、彫刻、素描、タペストリー、仮面を展示しています。いずれも作家の息子が寄贈したものです。ここで円環が閉じます。キャリントンはEdward Jamesの友人であり、彼は世界が追いつく何十年も前から彼女の作品を支持していました。（より大きな彼女の美術館は<a href="/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism" class="text-emerald-700 underline">San Luis Potosí市街</a>にあります。）</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">☕ コーヒーの里</h3><p class="text-sm text-gray-700 leading-relaxed">年間2,500ミリを超える雨が、Xilitlaをメキシコで最も雨が多く——そして最高のコーヒーが穫れる——地の一つにしています。広場のまわりで地元産の一杯を味わってみてください。毎年8月にはコーヒーの祭りがあります。日曜は市の日で、ティアンギス（露天市）が中心部をワステカの食べ物と工芸品で満たします。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🏰 El Castillo</h3><p class="text-sm text-gray-700 leading-relaxed">町にあるPlutarco Gastélumのゴシック・ファンタジー風の家で、ジェームズが長期にわたり滞在した場所です。今日では小さな博物館であると同時にポサダ・エル・カスティージョ（1泊約MX$1,550–2,500）でもあり——Edward Jamesの家に泊まることは、ワステカで最高の自慢になります。</p></div>
</div>
</section>

<section id="nearby" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">周辺：地元の人おすすめの寄り道</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Sótano de las Huahuas（約1時間）</h3><p class="text-sm text-gray-700">アキスモン近くにある深さ約480メートルの陥没穴で、夜明けには何十万羽ものアマツバメと緑のインコが螺旋を描いて飛び立ち、夕暮れ（約17:30〜18:30）には急降下して戻ってきます。入場MX$30に加え、石畳の道を約30〜40分歩きます——有名なSótano de las Golondrinasの、より静かな代替地です。</p></div>
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Cueva del Salitre</h3><p class="text-sm text-gray-700">町のすぐ外にある巨大な洞窟の入口（少額の現金料金、約MX$25–50）で、往復約5キロのなだらかな小道でたどり着けます。ヘッドランプをお持ちください——奥まで進みたい場合はガイドも。</p></div>
</div>
<p class="text-gray-800 leading-relaxed">より長い旅を組みますか？Xilitlaは、当サイトの<a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">Huasteca Potosina3/5/7日間の旅程</a>の3日目にあたり、タムルや滝、2026年のすべての料金を網羅しています。</p>
</section>

<section id="logistics" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">行き方、天候、宿泊先</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 行き方</h3><p class="text-sm text-gray-700 leading-relaxed">Ciudad Vallesから：85キロ、約1時間20分（85号線を南下し、120号線で山を上ります）。San Luis Potosí市街からは合計約4.5〜5時間。夜間にシエラを運転しないでください——この標高では霧は日常茶飯事です。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌦️ 天候</h3><p class="text-sm text-gray-700 leading-relaxed">雲霧林の気候で、低地のワステカよりも明らかに涼しいです。12〜3月：ひんやりとし、最低気温は約8℃まで下がり、湿度が高めです。6〜9月：大雨（8月には短い小休止）。1〜3月が最も安定した条件ですが、いずれにせよ10日間予報を確認してください。</p></div>
</div>
<p class="text-gray-800 leading-relaxed"><strong>宿泊：</strong>歴史を味わうならポサダ・エル・カスティージョ、予算重視ならLas Pozas入口近くのオスタル・カフェや素朴なポサダがおすすめです。1泊で庭園＋町を回れます。2泊すれば夕暮れのワウアスと日曜の市が加わります。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">XilitlaのLas Pozasとは何ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Las Pozasは、イギリスの詩人であり芸術のパトロンであったEdward Jamesが、San Luis Potosí州Xilitlaのジャングルに造ったシュルレアリスムの彫刻庭園です——彼はサルバドール・ダリに資金を提供し、マグリットに描かれた人物でもあります。1962年から1984年に亡くなるまでに、彼は500万米ドル超を投じ、およそ3ダースのコンクリートの奇想建築（施設が公式に記録しているのは27基）を、9ヘクタールの熱帯雨林・滝・淵に築きました。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Las Pozasの料金はいくらで、予約は必要ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">大人は窓口でMX$180（シニアと6〜12歳の子どもはMX$120）を支払い、加えて必須のガイド料金がスペイン語でMX$30、英語でMX$60かかります。まずオンラインで時間指定の入場を予約する必要があり——24時間前から60日前までの間に——当日は現地で支払います。火曜休園、最終入場16時、英語ツアーは10時と15時に催行されます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Las Pozasで泳げますか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">いいえ——もう泳げません。かつては滝の下の淵での遊泳が許可されていましたが、パンデミック期以降は認められていません。古いガイドブックは今も違うことを書いていますが、情報が古くなっています。泳ぎたい場合は、1時間ほど離れたプエンテ・デ・ディオスやタマソポの滝へ向かってください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Xilitlaへの行き方は？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">XilitlaはCiudad Vallesから85キロ（約1時間20分）で、85号線と120号線を利用します。San Luis Potosí市街からは約4.5〜5時間です。多くの旅行者はCiudad Vallesを拠点とするHuasteca Potosina周遊と組み合わせます。同地からの日帰りツアーもあります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Xilitlaは1日で十分ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">日帰りならLas Pozasと町の駆け足の見物ができます。1泊すればずっと良く、混雑の前の9時開園に庭園を訪れられるほか、16世紀の旧アウグスティノ会修道院、レオノーラ・キャリントン美術館、カフェも楽しめます。2泊すれば、Sótano de las Huahuasの夕暮れの鳥の大群と日曜の市が加わります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Edward Jamesとは何者でしたか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Edward James（1907–1984）は、シュルレアリスムの偉大なパトロンの一人となったイギリスの詩人・相続人です。1938年のサルバドール・ダリの全作品を買い取る契約を結び、Lobster TelephoneとMae West Lips Sofaを共同制作し、マグリットの有名な絵画『Not to Be Reproduced』に登場します。1945年、ガイドであり生涯の友であったPlutarco GastélumとともにXilitlaに到着し、1947年にコーヒー農園を購入。1962年の霜が彼のランを枯らすと、決して枯れないコンクリートの花を20年かけて造り続けました。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に以下の資料で確認：laspozasxilitla.org.mx（公式の歴史・料金・見学規則）、Edward James／Las Pozas／Xilitlaのウィキペディア項目（伝記的年代、ダリとの契約、マグリットの肖像、建設に関する数値）、ユネスコ暫定リスト（参照番号5493）、ワールド・モニュメント財団のプロジェクトページ（修復）、Museo Leonora Carringtonの公式情報、El Universal SLPおよびワステカ地方の情報源（修道院の歴史、Sótano de las Huahuas）。資料が食い違う場合——構造物の数（公式：27、多くの報道：36）、蝶の逸話、「州内最古の建物」——は、断定せず出典に帰しています。</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">San Luis Potosíからワステカ旅行を計画中ですか？</p>
  <p class="text-emerald-100 text-sm mb-4">SLPのイベント・グルメ・旅行に関する週刊ガイドをお届けします——無料、毎週月曜。</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "XilitlaのLas Pozasとは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Pozasは、イギリスの詩人であり芸術のパトロンであったEdward Jamesが、San Luis Potosí州Xilitlaのジャングルに造ったシュルレアリスムの彫刻庭園です——彼はサルバドール・ダリに資金を提供し、マグリットに描かれた人物でもあります。1962年から1984年に亡くなるまでに、彼は500万米ドル超を投じ、およそ3ダースのコンクリートの奇想建築（施設が公式に記録しているのは27基）を、9ヘクタールの熱帯雨林・滝・淵に築きました。"
      }
    },
    {
      "@type": "Question",
      "name": "Las Pozasの料金はいくらで、予約は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "大人は窓口でMX$180（シニアと6〜12歳の子どもはMX$120）を支払い、加えて必須のガイド料金がスペイン語でMX$30、英語でMX$60かかります。まずオンラインで時間指定の入場を予約する必要があり——24時間前から60日前までの間に——当日は現地で支払います。火曜休園、最終入場16時、英語ツアーは10時と15時に催行されます。"
      }
    },
    {
      "@type": "Question",
      "name": "Las Pozasで泳げますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ——もう泳げません。かつては滝の下の淵での遊泳が許可されていましたが、パンデミック期以降は認められていません。古いガイドブックは今も違うことを書いていますが、情報が古くなっています。泳ぎたい場合は、1時間ほど離れたプエンテ・デ・ディオスやタマソポの滝へ向かってください。"
      }
    },
    {
      "@type": "Question",
      "name": "Xilitlaへの行き方は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "XilitlaはCiudad Vallesから85キロ（約1時間20分）で、85号線と120号線を利用します。San Luis Potosí市街からは約4.5〜5時間です。多くの旅行者はCiudad Vallesを拠点とするHuasteca Potosina周遊と組み合わせます。同地からの日帰りツアーもあります。"
      }
    },
    {
      "@type": "Question",
      "name": "Xilitlaは1日で十分ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "日帰りならLas Pozasと町の駆け足の見物ができます。1泊すればずっと良く、混雑の前の9時開園に庭園を訪れられるほか、16世紀の旧アウグスティノ会修道院、レオノーラ・キャリントン美術館、カフェも楽しめます。2泊すれば、Sótano de las Huahuasの夕暮れの鳥の大群と日曜の市が加わります。"
      }
    },
    {
      "@type": "Question",
      "name": "Edward Jamesとは何者でしたか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edward James（1907–1984）は、シュルレアリスムの偉大なパトロンの一人となったイギリスの詩人・相続人です。1938年のサルバドール・ダリの全作品を買い取る契約を結び、Lobster TelephoneとMae West Lips Sofaを共同制作し、マグリットの有名な絵画『Not to Be Reproduced』に登場します。1945年、ガイドであり生涯の友であったPlutarco GastélumとともにXilitlaに到着し、1947年にコーヒー農園を購入。1962年の霜が彼のランを枯らすと、決して枯れないコンクリートの花を20年かけて造り続けました。"
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
  console.log('Updated content_de + content_ja for', SLUG);
}

main();
