// Native DE + JA translations for blog post real-de-catorce-guide-2026 (idempotent).
// Replaces the English-mirror content_de/content_ja with real translations.
// HTML tags/attributes/hrefs/JSON-LD keys preserved exactly; only text nodes translated.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'real-de-catorce-guide-2026';

const contentDe = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">In diesem Reiseführer</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#overview" class="hover:underline">→ Real de Catorce auf einen Blick</a>
    <a href="#history" class="hover:underline">→ Silber, eine Münzstätte und ein Niedergang</a>
    <a href="#tunnel" class="hover:underline">→ Der Ogarrio-Tunnel</a>
    <a href="#town" class="hover:underline">→ Was Sie im Ort sehen sollten</a>
    <a href="#beyond" class="hover:underline">→ Willys, Pferde & die Geisterstadt</a>
    <a href="#wirikuta" class="hover:underline">→ Wirikuta & die Wixárika (bitte lesen)</a>
    <a href="#practical" class="hover:underline">→ Anreise, Wetter, Hotels</a>
    <a href="#fiesta" class="hover:underline">→ Das San-Francisco-Fest — riesig 2026</a>
    <a href="#film" class="hover:underline">→ Hollywood in Catorce</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">Fakten geprüft im Juli 2026 · Quellen am Ende · Passt zu unseren <a href="/weekend-getaways" class="underline">Wochenendausflügen ab SLP</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Um Real de Catorce zu erreichen, fahren Sie 25 km über Kopfsteinpflaster einen Wüstenberg hinauf und passieren dann einen 2.3 km langen Bergwerkstunnel, der kaum breit genug für Ihr Auto ist.</strong> Auf der anderen Seite: eine halb verlassene Silberstadt auf 2,730 Metern, in der Brad Pitt einen Film drehte, in die jeden Oktober Zehntausende Pilger strömen und deren umliegende Wüste von der UNESCO als heiliger Boden anerkannt ist. Dies ist der vollständige Reiseführer für 2026.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Real de Catorce auf einen Blick</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Real de Catorce</strong> ist eine ehemalige Silber-Boomstadt in der Sierra de Catorce, ~220 km nördlich der Stadt San Luis Potosí, auf etwa <strong>2,730 m (9,000 ft)</strong>. Einst Heimat von rund 15.000 Menschen und einer eigenen Münzstätte, verwaiste sie nach dem Zusammenbruch des Silbers um 1900 fast vollständig — und wurde als einer der ersten <strong>Pueblos Mágicos (2001)</strong> Mexikos wiedergeboren.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Die Einfahrt ist das Erlebnis:</strong> der einspurige, 2.3 km lange Ogarrio-Tunnel (geringe Barmaut, ~MX$30–60/Fahrzeug)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Nur Bargeld:</strong> ein berüchtigt unzuverlässiger Geldautomat im Rathaus — bringen Sie alle Pesos mit, die Sie brauchen</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Kalte Nächte das ganze Jahr</strong> (0–10°C): packen Sie selbst im Sommer eine Jacke ein</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Hinweis für 2026:</strong> Die Fiesta de San Francisco im Oktober markiert den 800. Jahrestag des Heiligen — rechnen Sie mit Rekordandrang</span></li>
  </ul>
</div>
</section>

<section id="history" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Silber, eine Münzstätte und ein Niedergang</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Silber wurde in diesen Bergen Anfang der 1770er-Jahre geschürft, und der Ort wurde um 1779–1780 offiziell gegründet. Dann kam der Rausch: <strong>1782 wurden in weniger als einem Monat achtundvierzig Minen registriert</strong>. Gegen Ende des 19. Jahrhunderts besaß Real de Catorce einige der reichsten Silberminen Mexikos, eine eigene <strong>Casa de Moneda</strong> (die in den 1860er-Jahren rund drei Jahre lang Silber-Reales prägte, bevor Kaiser Maximilian 1866 ihre Schließung anordnete) und etwa 15.000 Einwohner — die lokale Überlieferung übertreibt das auf 40.000. Mexikos erste Dynamitsprengung wurde hier ausgelöst, in der Mine La Purísima, im Jahr 1873.</p>
<p class="text-gray-800 leading-relaxed mb-4">Und der Name? Niemand weiß es wirklich. Die beiden konkurrierenden Legenden — vierzehn spanische Soldaten, die von Chichimeca-Kriegern überfallen wurden, oder vierzehn Banditen, die Silbertransporte ausraubten — sind eben genau das: Legenden. Der einzige belegte Anhaltspunkt ist eine 1773 entdeckte Erzader an einem Ort, der bereits „Los Catorce" hieß.</p>
<p class="text-gray-800 leading-relaxed">Als die Silberpreise nach 1900 einbrachen, entleerte sich der Ort innerhalb einer Generation. Die Volkszählung von 2010 zählte 1.392 Menschen inmitten von Herrenhäusern, Minenanlagen und einer Hahnenkampfarena, die für eine zehnmal so große Stadt gebaut worden war — jene „Geisterstadt"-Textur, die ihn heute unvergesslich macht.</p>
</section>

<img src="/images/outdoors/real-de-catorce-street.jpg" alt="Kopfsteinpflasterstraße in Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="tunnel" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Der Ogarrio-Tunnel</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Zwei Trupps, die von gegenüberliegenden Seiten des Berges gruben, trafen sich 1901 nach vier Jahren Arbeit in der Mitte — und verschafften dem Ort die seltsamste Eingangstür Mexikos. Der <strong>Túnel de Ogarrio</strong> (benannt nach der Heimatstadt des Ingenieurs Vicente Irizar in Spanien) verläuft <strong>etwa 2.3 km</strong> durch den Fels, bietet Platz für eine einzige Spur und wird auf altmodische Weise geregelt: Personal mit Funkgeräten an beiden Enden wechselt die Fahrtrichtung ab.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• <strong>Maut:</strong> etwa MX$30–60 pro Fahrzeug zuzüglich einer kleinen Gebühr pro Person — bar.</li>
    <li>• <strong>Öffnungszeiten:</strong> besetzt etwa von 7 bis 23 Uhr; eine Durchfahrt außerhalb dieser Zeiten erfolgt auf eigene Gefahr.</li>
    <li>• <strong>Hochsaison:</strong> während der Fiesta im Oktober und der Semana Santa parken Privatfahrzeuge draußen bei Dolores Trompeta, und Shuttlebusse bringen die Besucher hindurch.</li>
    <li>• <strong>Wohnmobile und überdimensionierte Fahrzeuge</strong> parken stets draußen.</li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Der Bundesstaat hat Pläne angekündigt, den Tunnel nur noch als Einfahrt zu nutzen und auf der anderen Seite eine neue Ausfahrtsstraße anzulegen — doch Stand Mitte 2026 steht die Alternativroute noch aus, rechnen Sie also mit dem klassischen Wechselsystem.</p>
</section>

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Was Sie im Ort sehen sollten</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Parroquia de la Purísima Concepción — und „Panchito"</h3><p class="text-sm text-gray-700">Zwischen den 1790er-Jahren und 1817 erbaut, mit einem seltenen Boden aus breiten Kiefernbohlen. Sie beherbergt das als wundertätig geltende Bildnis des heiligen Franz von Assisi — <em>Panchito</em> —, von dem Gläubige schwören, dass er nachts durch die Berge wandert und dabei seine Sandalen abnutzt. Die Wände voller Votivtafeln, viele davon im 19. Jahrhundert von Bergleuten auf Blech gemalt, die für das Überleben von Grubeneinstürzen dankten, sind Grund genug für einen Besuch.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Casa de Moneda</h3><p class="text-sm text-gray-700">Die Münzstätte aus den 1860er-Jahren, heute das Kulturzentrum des Ortes (Museumseintritt ~MX$20). Eine Münzstätte so weit oben an einem Maultierpfad sagt alles darüber aus, wie viel Silber aus diesen Bergen kam.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Palenque de Gallos & Plaza Hidalgo</h3><p class="text-sm text-gray-700">Eine steinerne Hahnenkampfarena aus dem 19. Jahrhundert — ein Rom im Miniaturformat — und der baumgesäumte Hauptplatz, wo die Willys-Fahrer warten.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Der Friedhof & Capilla de Guadalupe</h3><p class="text-sm text-gray-700">Der Panteón stammt aus dem Jahr 1775 und umgibt eine Kapelle aus dem 18. Jahrhundert, die älter ist als die Pfarrkirche — die älteste Ecke des Ortes und ihre fotogenste zur goldenen Stunde.</p></div>
</div>
</section>

<img src="/images/outdoors/real-de-catorce-church.jpg" alt="Kirche in Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="beyond" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Willys, Pferde & die Geisterstadt</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚙 Die Willys</h3><p class="text-sm text-gray-700 leading-relaxed">Klassische Willys-Jeeps im Stil des Zweiten Weltkriegs — einst Pilgertransport von der Bahnstation weiter unten — fahren heute vom Plaza Hidalgo: Sammelfahrten hinunter nach Estación Catorce und in die Wüste (~MX$50/Person im Kollektiv; ~MX$250/Person für 3–4-stündige Gemeinschaftstouren; private Jeeps MX$500–1,500 je nach Route). Bestätigen Sie die Preise am Platz.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🐎 Zu Pferd</h3><p class="text-sm text-gray-700 leading-relaxed">Örtliche Guides bieten Ausritte zu den Minenruinen des <strong>Pueblo Fantasma</strong> (~MX$250, ~100 Min.) und zum <strong>Cerro del Quemado</strong> (~MX$300, ~3 Std.) an — Preise aus veröffentlichten Reiseführern von 2023; rechnen Sie 2026 mit etwas mehr.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Der <strong>Pueblo Fantasma</strong> — verfallene Minenanlagen und Aufbereitungshaciendas, die über die Sierra verstreut sind, darunter der Socavón de la Purísima — ist das Bild, das den Ort verkauft: dachlose Steinmauern vor Wüstenpanoramen über 100 km. Kommen Sie früh wegen des Lichts; tragen Sie festes Schuhwerk.</p>
</section>

<section id="wirikuta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Wirikuta & die Wixárika — lesen Sie dies vor Ihrer Reise</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die Wüste unterhalb des Ortes ist keine Kulisse. Sie ist <strong>Wirikuta</strong> — das heilige Gebiet, in dem nach der Kosmologie der Wixárika (Huichol) die Welt erschaffen und die Sonne geboren wurde. Jedes Jahr wandern Wixárika-Pilger Hunderte von Kilometern zum <strong>Cerro del Quemado</strong>, dem Berg über Real de Catorce, als Höhepunkt einer Route, die <strong>im Juli 2025 in die UNESCO-Welterbeliste aufgenommen wurde</strong> — die erste lebendige indigene Tradition Lateinamerikas, die diese Anerkennung erhielt.</p>
<div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-teal-900 mb-3">Verhalten für Besucher</h3>
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• Fotografieren Sie Zeremonien oder Pilger nicht ohne ausdrückliche Erlaubnis.</li>
    <li>• Halten Sie sich von rituellen Bereichen auf dem El Quemado fern, sofern Sie nicht eingeladen werden; fragen Sie Ihren Guide, was angemessen ist.</li>
    <li>• Berühren, sammeln oder kaufen Sie niemals Peyote — siehe unten.</li>
  </ul>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-red-900 mb-3">⚠️ Peyote: die Rechtslage, klar gesagt</h3>
  <p class="text-sm text-gray-800 leading-relaxed">Für alle, die nicht Mitglied eines anerkannten indigenen Volkes sind, ist es in Mexiko <strong>illegal, Peyote zu pflücken, zu besitzen, zu transportieren oder zu konsumieren</strong> (Allgemeines Gesundheitsgesetz Art. 245; Bundesstrafgesetzbuch Art. 194–195, mit Strafen von 5–20 Jahren). Er steht zudem unter <strong>Umweltschutz (NOM-059)</strong>: Der Kaktus braucht Jahrzehnte, um heranzureifen, und wird durch die Entnahme ausgerottet — Bußgelder für Wildtiere gehen in die Millionen Pesos. „Peyote-Tourismus" schädigt eine langsam wachsende Pflanze, eine lebendige Kultur und möglicherweise Ihre Zukunft. Erleben Sie stattdessen die Stille der Wüste; sie ist das Echte.</p>
</div>
<p class="text-gray-800 leading-relaxed text-sm text-gray-600">Wissenswerter Kontext: Bergbaukonzessionen erstrecken sich noch immer über weite Teile des Wirikuta-Reservats, und die Wixárika kämpfen seit Jahren dagegen — die UNESCO-Eintragung stärkt diese Verteidigung.</p>
</section>

<img src="/images/outdoors/real-catorce.jpg" alt="Hochwüsten-Panorama rund um Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="practical" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Anreise, Wetter & Unterkünfte</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Von der Stadt San Luis Potosí</h3><p class="text-sm text-gray-700 leading-relaxed">~220 km: Autobahn 57 nach Norden bis Matehuala (~2 Std.), westwärts über Cedral, dann ~25 km Kopfsteinpflaster hinauf zum Tunnel. Planen Sie <strong>in der Praxis 4 Stunden</strong> ein — das Kopfsteinpflaster ist langsam. Mit dem Bus: SLP → Matehuala, dann Combis ab Altamirano 104 (~8, 14 und 17 Uhr; ~MX$121).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌡️ Wetter auf 2,730 m</h3><p class="text-sm text-gray-700 leading-relaxed">Hochwüste: sonnige Tage (21°C im Januar, ~30°C im Mai) und <strong>kalte Nächte das ganze Jahr</strong> (0–10°C). Immer eine Jacke. Beste Monate: Oktober–April.</p></div>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Unterkünfte in Real de Catorce, Richtpreise 2026</caption>
    <thead class="bg-amber-600">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Hotel</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Stil</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Ab (MXN/Nacht)</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón de la Abundancia</td><td class="px-4 py-3 text-sm text-gray-600">Boutique in einem Steingebäude von 1863; der Klassiker des Ortes</td><td class="px-4 py-3 text-sm text-gray-700">~$1,450–1,900</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Villas Alcazaba</td><td class="px-4 py-3 text-sm text-gray-600">Rustikale Hütten am Hang</td><td class="px-4 py-3 text-sm text-gray-700">~$1,800</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón del Refugio</td><td class="px-4 py-3 text-sm text-gray-600">An der Pfarrkirche</td><td class="px-4 py-3 text-sm text-gray-700">~$950–1,500</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel El Real</td><td class="px-4 py-3 text-sm text-gray-600">28 Zimmer, verlässliche Mittelklasse</td><td class="px-4 py-3 text-sm text-gray-700">~$1,100</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Veröffentlichte Zahlen 2023–2026 — bei der Buchung bestätigen; Wochenenden und Feiertage sind früh ausgebucht.</p>
<p class="text-gray-800 leading-relaxed"><strong>Essen:</strong> das Restaurant des Mesón de la Abundancia und La Porfiriana (Hauptgerichte ~MX$250), La Migaja für Mexikanisch-Italienisch (~MX$200), überall Gorditas an Straßenständen — dazu eine kuriose Ansammlung italienischer Restaurants, ein Erbe, das die Einheimischen auf die italienischen Filmteams und Auswanderer der 1990er-Jahre zurückführen.</p>
</section>

<section id="fiesta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Die Fiesta de San Francisco — und warum 2026 gewaltig ist</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Von der dritten Septemberwoche bis etwa zum 12. Oktober — mit dem Höhepunkt am <strong>4. Oktober</strong> — strömen Zehntausende Pilger durch den Tunnel, um Panchitos Glaskasten zu berühren. Jüngste Ausgaben prognostizierten bis zu 80.000 Besucher über die Saison; Hotels sind zu über 90 % ausgelastet, und der Tunnel wechselt in den Modus „draußen parken und Shuttle nehmen".</p>
<div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-xl p-6 mb-4">
  <p class="text-gray-800 leading-relaxed"><strong>2026 ist der 800. Jahrestag des Todes des heiligen Franz von Assisi</strong> (gest. 3. Oktober 1226), und Real de Catorce erwartet die ganze Saison über verstärkten religiösen Tourismus. Die Gemeinde hat sogar eine monumentale Statue des Heiligen aus rosafarbenem Stein angekündigt — die Stand Mitte 2026 jedoch angekündigt bleibt, statt gebaut zu sein. Wenn Sie das Spektakel wollen, buchen Sie Monate im Voraus; wenn Sie die Geisterstadt wollen, kommen Sie in einem beliebigen anderen Monat.</p>
</div>
</section>

<section id="film" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Hollywood in Catorce</h2>
</div>
<p class="text-gray-800 leading-relaxed">Der Look verfallener Pracht des Ortes hat eine Filmografie: <strong>The Mexican (2001)</strong> brachte Brad Pitt und Julia Roberts auf diese Straßen (und durch den Ogarrio-Tunnel), <strong>Bandidas (2006)</strong> holte Salma Hayek und Penélope Cruz hierher, und dem italienischen Film <strong>Puerto Escondido (1992)</strong> wird oft nachgesagt, die italienische Liebesgeschichte des Ortes begonnen zu haben. Sogar alt-J drehte hier ein Musikvideo („3WW", 2017).</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Lohnt sich ein Besuch in Real de Catorce?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja — es ist eines der stimmungsvollsten Reiseziele Mexikos: eine halb verlassene Silberstadt auf ~2,730 m in der Sierra de Catorce, betreten durch einen einspurigen, 2.3 km langen Bergwerkstunnel. Rechnen Sie mit mindestens einem vollen Tag; eine Übernachtung lässt Sie die Ruinen der Geisterstadt bei Sonnenaufgang und den Sternenhimmel der Hochwüste erleben. Er lässt sich gut mit einem Besuch der Stadt San Luis Potosí (220 km entfernt) verbinden.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie gelangt man von San Luis Potosí nach Real de Catorce?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Fahren Sie auf der Autobahn 57 nach Norden bis Matehuala (etwa 2 Stunden), dann westwärts durch Cedral und schließlich rund 25 km Kopfsteinpflasterstraße hinauf zum Ogarrio-Tunnel — in der Praxis insgesamt etwa 4 Stunden. Mit öffentlichen Verkehrsmitteln: Bus nach Matehuala, dann Combis in den Ort ab Altamirano 104 (Abfahrten etwa um 8, 14 und 17 Uhr).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Gibt es in Real de Catorce einen Geldautomaten?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Es gibt genau einen Geldautomaten, im Rathaus, und er ist berüchtigt unzuverlässig. Behandeln Sie den Ort als reines Bargeldziel: Bringen Sie alle Pesos mit, die Sie für Unterkunft, Essen, die Tunnelmaut und Willys-Fahrten benötigen, aus Matehuala oder San Luis Potosí.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was hat es mit dem Tunnel nach Real de Catorce auf sich?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Ogarrio-Tunnel ist ein ehemaliger Bergwerkstunnel von 2.3 km (1,5 Meilen) — gegraben 1897–1901 — und der Haupteingang des Ortes. Er bietet Platz für eine Fahrspur, daher wechselt Personal mit Funkgeräten die Richtung ab. Rechnen Sie mit einer geringen Maut (etwa MX$30–60 pro Fahrzeug zuzüglich einer Gebühr pro Person, bar). Während der Fiesta im Oktober und der Semana Santa parken die Autos draußen bei Dolores Trompeta, und Shuttles bringen Sie hindurch.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann ist die beste Reisezeit für Real de Catorce?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Von Oktober bis April gibt es kühle, sonnige Hochwüstentage — aber die Nächte sinken das ganze Jahr über nahe an den Gefrierpunkt, packen Sie also immer eine Jacke ein. Meiden Sie (oder genießen Sie) die Fiesta de San Francisco von Ende September bis zum 12. Oktober: Zehntausende Pilger kommen, die Hotels sind ausgebucht, und 2026 — zum 800. Jahrestag des heiligen Franz von Assisi — werden Rekordbesucherzahlen erwartet.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist Peyote in Real de Catorce legal?<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Nein. Für alle, die nicht Mitglied eines anerkannten indigenen Volkes sind, ist das Pflücken, Besitzen, Transportieren oder Konsumieren von Peyote in Mexiko eine Bundesstraftat (Strafen von 5–20 Jahren), und der Kaktus steht zudem unter Umweltschutz nach NOM-059 — er wächst quälend langsam und ist durch die Entnahme bedroht. Die Wüste rund um den Ort, Wirikuta, ist heiliges Wixárika-Gebiet, dessen Pilgerroute 2025 von der UNESCO eingetragen wurde. Genießen Sie die Landschaft; lassen Sie den Peyote in Ruhe.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Geprüft im Juli 2026 anhand von: INAH (Gründungschronologie, Münzstätte, erste Dynamitsprengung), realdecatorce.info (Tunnelbau, Pfarrkirche, Casa de Moneda), UNESCO-Welterbezentrum (Eintragung der Wixárika-Route, Ref. 1704), Mexikos Allgemeinem Gesundheitsgesetz Art. 245 und Bundesstrafgesetzbuch Art. 194–195 sowie NOM-059-SEMARNAT (Rechts- und Schutzstatus von Peyote), El Universal SLP (Festbesucher, Tunnelprotokoll, Preise für Willys und Ausritte), Wikivoyage-Bearbeitungen 2026 (Hotels, Tunnelmaut, Combi-Fahrpläne), El Sol de San Luis und Potosinoticias (Tourismusagenda 2026, Statuenankündigung, Straßenbauarbeiten), Wikipedia/IMDb (Drehorte). Wo Quellen sich widersprechen — Höchstbevölkerung, Tunnelmaut, der Name des Ortes — geben wir Spannen an oder kennzeichnen Legenden als Legenden.</p>
</section>

<div class="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planen Sie weitere Auszeiten von San Luis Potosí?</p>
  <p class="text-amber-100 text-sm mb-4">Sehen Sie sich unseren <a href="/weekend-getaways" class="underline font-semibold text-white">Leitfaden für Wochenendausflüge</a> und die <a href="/blog/huasteca-potosina-itinerary-2026" class="underline font-semibold text-white">Reiseroute durch die Huasteca Potosina</a> an — oder erhalten Sie die wöchentliche Agenda kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Lohnt sich ein Besuch in Real de Catorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja — es ist eines der stimmungsvollsten Reiseziele Mexikos: eine halb verlassene Silberstadt auf ~2,730 m in der Sierra de Catorce, betreten durch einen einspurigen, 2.3 km langen Bergwerkstunnel. Rechnen Sie mit mindestens einem vollen Tag; eine Übernachtung lässt Sie die Ruinen der Geisterstadt bei Sonnenaufgang und den Sternenhimmel der Hochwüste erleben. Er lässt sich gut mit einem Besuch der Stadt San Luis Potosí (220 km entfernt) verbinden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie gelangt man von San Luis Potosí nach Real de Catorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fahren Sie auf der Autobahn 57 nach Norden bis Matehuala (etwa 2 Stunden), dann westwärts durch Cedral und schließlich rund 25 km Kopfsteinpflasterstraße hinauf zum Ogarrio-Tunnel — in der Praxis insgesamt etwa 4 Stunden. Mit öffentlichen Verkehrsmitteln: Bus nach Matehuala, dann Combis in den Ort ab Altamirano 104 (Abfahrten etwa um 8, 14 und 17 Uhr)."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es in Real de Catorce einen Geldautomaten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es gibt genau einen Geldautomaten, im Rathaus, und er ist berüchtigt unzuverlässig. Behandeln Sie den Ort als reines Bargeldziel: Bringen Sie alle Pesos mit, die Sie für Unterkunft, Essen, die Tunnelmaut und Willys-Fahrten benötigen, aus Matehuala oder San Luis Potosí."
      }
    },
    {
      "@type": "Question",
      "name": "Was hat es mit dem Tunnel nach Real de Catorce auf sich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Ogarrio-Tunnel ist ein ehemaliger Bergwerkstunnel von 2.3 km (1,5 Meilen) — gegraben 1897–1901 — und der Haupteingang des Ortes. Er bietet Platz für eine Fahrspur, daher wechselt Personal mit Funkgeräten die Richtung ab. Rechnen Sie mit einer geringen Maut (etwa MX$30–60 pro Fahrzeug zuzüglich einer Gebühr pro Person, bar). Während der Fiesta im Oktober und der Semana Santa parken die Autos draußen bei Dolores Trompeta, und Shuttles bringen Sie hindurch."
      }
    },
    {
      "@type": "Question",
      "name": "Wann ist die beste Reisezeit für Real de Catorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Von Oktober bis April gibt es kühle, sonnige Hochwüstentage — aber die Nächte sinken das ganze Jahr über nahe an den Gefrierpunkt, packen Sie also immer eine Jacke ein. Meiden Sie (oder genießen Sie) die Fiesta de San Francisco von Ende September bis zum 12. Oktober: Zehntausende Pilger kommen, die Hotels sind ausgebucht, und 2026 — zum 800. Jahrestag des heiligen Franz von Assisi — werden Rekordbesucherzahlen erwartet."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Peyote in Real de Catorce legal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Für alle, die nicht Mitglied eines anerkannten indigenen Volkes sind, ist das Pflücken, Besitzen, Transportieren oder Konsumieren von Peyote in Mexiko eine Bundesstraftat (Strafen von 5–20 Jahren), und der Kaktus steht zudem unter Umweltschutz nach NOM-059 — er wächst quälend langsam und ist durch die Entnahme bedroht. Die Wüste rund um den Ort, Wirikuta, ist heiliges Wixárika-Gebiet, dessen Pilgerroute 2025 von der UNESCO eingetragen wurde. Genießen Sie die Landschaft; lassen Sie den Peyote in Ruhe."
      }
    }
  ]
}
</script>

</div>`;

const contentJa = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#overview" class="hover:underline">→ Real de Catorce の概要</a>
    <a href="#history" class="hover:underline">→ 銀、造幣所、そして衰退</a>
    <a href="#tunnel" class="hover:underline">→ Ogarrio トンネル</a>
    <a href="#town" class="hover:underline">→ 町で見るべきもの</a>
    <a href="#beyond" class="hover:underline">→ Willys、馬、そしてゴーストタウン</a>
    <a href="#wirikuta" class="hover:underline">→ Wirikuta と Wixárika（必読）</a>
    <a href="#practical" class="hover:underline">→ 行き方・気候・ホテル</a>
    <a href="#fiesta" class="hover:underline">→ サン・フランシスコの祭り — 2026年は特大規模</a>
    <a href="#film" class="hover:underline">→ Catorce のハリウッド</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">2026年7月に事実確認済み · 出典は末尾に · <a href="/weekend-getaways" class="underline">SLP発の週末旅行</a>と合わせてどうぞ</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Real de Catorce へたどり着くには、砂漠の山を石畳で 25 km 登り、車がやっと通れるほどの幅しかない全長 2.3 km の鉱山トンネルを抜けます。</strong>その先に広がるのは、標高 2,730 メートルにある半ば見捨てられた銀の町。Brad Pitt が映画を撮影し、毎年10月には数万人の巡礼者が訪れ、周囲の砂漠はユネスコに認められた聖地です。これは2026年の完全ガイドです。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Real de Catorce の概要</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Real de Catorce</strong> は、Sierra de Catorce にあるかつての銀ブームの町で、San Luis Potosí 市の北約 ~220 km、標高およそ <strong>2,730 m（9,000 ft）</strong>に位置します。かつては約15,000人が暮らし、独自の造幣所を持っていましたが、1900年ごろに銀が暴落するとほぼ無人となり、メキシコ初期の <strong>Pueblos Mágicos（2001年）</strong>の一つとして生まれ変わりました。
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>入口そのものが体験です：</strong>一車線・全長 2.3 km の Ogarrio トンネル（少額の現金通行料、~MX$30–60/台）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>現金のみ：</strong>役場に、当てにならないことで有名なATMが1台あるだけ — 必要なペソはすべて持参してください</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>一年中夜は冷え込みます</strong>（0–10°C）：夏でも上着を用意してください</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>2026年の注意：</strong>10月の Fiesta de San Francisco は聖人の800周年にあたり、記録的な人出が見込まれます</span></li>
  </ul>
</div>
</section>

<section id="history" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">銀、造幣所、そして衰退</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">銀がこれらの山で採掘され始めたのは1770年代初頭で、町が正式に成立したのは1779～1780年ごろです。そして熱狂が訪れます。<strong>1782年には1か月足らずで48の鉱山が登録されました</strong>。19世紀後半までに Real de Catorce はメキシコ有数の豊かな銀鉱山を擁し、独自の <strong>Casa de Moneda</strong>（1860年代に約3年間、銀のレアル貨を鋳造しましたが、1866年に皇帝マクシミリアンが閉鎖を命じました）と約15,000人の住民を抱えていました — 地元の言い伝えではこれを40,000人にまで誇張しています。メキシコ初のダイナマイト爆破は1873年、ここ La Purísima 鉱山で行われました。</p>
<p class="text-gray-800 leading-relaxed mb-4">では、その名前は？ 実のところ誰も知りません。二つの相対する伝説 — Chichimeca の戦士に待ち伏せされた14人のスペイン兵、あるいは銀の輸送隊を襲った14人の盗賊 — はどちらも、まさに伝説にすぎません。唯一の文献上の手がかりは、すでに「Los Catorce」と呼ばれていた場所で1773年に発見された鉱脈です。</p>
<p class="text-gray-800 leading-relaxed">1900年以降に銀価格が暴落すると、町は一世代のうちに空になりました。2010年の国勢調査では、10倍の規模の都市のために建てられた邸宅や鉱山施設、闘鶏場の中に1,392人が数えられました — これが今日この町を忘れがたいものにしている「ゴーストタウン」の風合いです。</p>
</section>

<img src="/images/outdoors/real-de-catorce-street.jpg" alt="Real de Catorce の石畳の通り" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="tunnel" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Ogarrio トンネル</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">山の反対側から掘り進めた二つの作業班が、4年の歳月を経て1901年に中央で出会い — この町にメキシコで最も奇妙な玄関口をもたらしました。<strong>Túnel de Ogarrio</strong>（技師 Vicente Irizar のスペインの故郷にちなんで名付けられました）は岩盤を <strong>約 2.3 km</strong> にわたって貫き、一車線分の幅しかなく、昔ながらの方法で管理されています。両端に無線を持つ係員が交互に通行方向を切り替えるのです。</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• <strong>通行料：</strong>1台あたり約 MX$30–60 に加え、1人あたりの少額料金 — 現金。</li>
    <li>• <strong>時間：</strong>係員は概ね午前7時～午後11時。時間外の通行は自己責任です。</li>
    <li>• <strong>繁忙期：</strong>10月の祭りと Semana Santa の期間中、自家用車は外の Dolores Trompeta に駐車し、シャトルバンが来訪者をトンネルの向こうへ運びます。</li>
    <li>• <strong>キャンピングカーや大型車</strong>は常に外に駐車します。</li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">州政府は、トンネルを入口専用にし、反対側に新しい出口道路を設ける計画を発表しています — ただし2026年半ば時点で代替ルートは未整備のため、従来の交互通行方式を想定してください。</p>
</section>

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">町で見るべきもの</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Parroquia de la Purísima Concepción — そして「Panchito」</h3><p class="text-sm text-gray-700">1790年代から1817年にかけて建てられ、幅広い松板を使った珍しい床が特徴です。奇跡を起こすと信じられているアッシジの聖フランチェスコの像 — <em>Panchito</em> — を安置しており、信者たちは彼が夜ごと丘を歩き回り、サンダルをすり減らすと固く信じています。19世紀の鉱夫たちが落盤を生き延びた感謝を込めて金属板に描いた数々の奉納画（エクスボト）が壁を埋め尽くしており、それだけでも訪れる価値があります。</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Casa de Moneda</h3><p class="text-sm text-gray-700">1860年代の造幣所で、現在は町の文化センターとなっています（博物館の入場料は ~MX$20）。ラバの道をこれほど登った先に造幣所があること自体が、これらの山からどれほどの銀が産出されたかを物語っています。</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Palenque de Gallos & Plaza Hidalgo</h3><p class="text-sm text-gray-700">19世紀の石造りの闘鶏場 — さながら小さなローマ — と、Willys の運転手たちが待つ並木のある中央広場です。</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">墓地と Capilla de Guadalupe</h3><p class="text-sm text-gray-700">この panteón（墓地）は1775年に遡り、教区教会よりも古い18世紀の礼拝堂を囲んでいます — 町で最も古い一角であり、黄金の時間帯に最も写真映えする場所です。</p></div>
</div>
</section>

<img src="/images/outdoors/real-de-catorce-church.jpg" alt="Real de Catorce の教会" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="beyond" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Willys、馬、そしてゴーストタウン</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚙 ウィリス（Willys）</h3><p class="text-sm text-gray-700 leading-relaxed">第二次世界大戦型のクラシックな Willys ジープ — かつては麓の鉄道駅からの巡礼者の足でした — は、いまは Plaza Hidalgo から発着します。Estación Catorce や砂漠へ下る乗り合い（乗合で ~MX$50/人、3～4時間の乗合ツアーで ~MX$250/人、貸切ジープはルートにより MX$500–1,500）。料金は広場で確認してください。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🐎 馬に乗って</h3><p class="text-sm text-gray-700 leading-relaxed">地元のガイドが <strong>Pueblo Fantasma</strong> の鉱山跡（~MX$250、約100分）や <strong>Cerro del Quemado</strong>（~MX$300、約3時間）への乗馬を提供しています — 料金は2023年に公表されたガイド情報によるもので、2026年はやや高くなると見込まれます。</p></div>
</div>
<p class="text-gray-800 leading-relaxed"><strong>Pueblo Fantasma</strong> — Socavón de la Purísima を含め、シエラの斜面に点在する崩れた鉱山施設と製錬用のアシエンダ群 — こそが、この町を象徴する光景です。屋根のない石壁が、100 km に及ぶ砂漠の眺望を背に立っています。光を狙って早めに行き、しっかりした靴を履いてください。</p>
</section>

<section id="wirikuta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Wirikuta と Wixárika — 訪れる前にお読みください</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">町の下に広がる砂漠は、単なる景色ではありません。それは <strong>Wirikuta</strong> — Wixárika（Huichol）の宇宙観において世界が創造され、太陽が生まれた聖なる領域です。毎年 Wixárika の巡礼者たちは、Real de Catorce の上にそびえる山 <strong>Cerro del Quemado</strong> へ数百キロを歩きます。その巡礼路は <strong>2025年7月にユネスコ世界遺産リストに登録されました</strong> — ラテンアメリカで生きた先住民の伝統としては初めての快挙です。</p>
<div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-teal-900 mb-3">来訪者のマナー</h3>
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• 明確な許可なく、儀式や巡礼者を撮影しないでください。</li>
    <li>• 招かれない限り、El Quemado の儀式の場には立ち入らないでください。何が適切かはガイドに尋ねましょう。</li>
    <li>• ペヨーテには決して触れず、採取も購入もしないでください — 下記参照。</li>
  </ul>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-red-900 mb-3">⚠️ ペヨーテ：法律をはっきりと</h3>
  <p class="text-sm text-gray-800 leading-relaxed">認められた先住民の一員でない者にとって、メキシコではペヨーテを <strong>採取・所持・運搬・摂取することは違法</strong>です（一般保健法第245条、連邦刑法第194～195条、刑罰は5～20年）。さらに <strong>環境保護の対象（NOM-059）</strong>でもあります。このサボテンは成熟までに数十年を要し、採取によって絶滅の危機にさらされています — 野生生物に関する罰金は数百万ペソに達します。「ペヨーテ観光」は、成長の遅い植物と、生きた文化、そしておそらくはあなたの将来を損ないます。代わりに砂漠の静寂を体験してください。それこそが本物です。</p>
</div>
<p class="text-gray-800 leading-relaxed text-sm text-gray-600">知っておくべき背景：鉱業権は今なお Wirikuta 保護区の大部分を覆っており、Wixárika は何年もそれと闘ってきました — ユネスコ登録はその防衛を後押しします。</p>
</section>

<img src="/images/outdoors/real-catorce.jpg" alt="Real de Catorce 周辺の高地砂漠のパノラマ" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="practical" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">行き方、気候、宿泊先</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 San Luis Potosí 市から</h3><p class="text-sm text-gray-700 leading-relaxed">~220 km：57号線を北へ Matehuala まで（~2時間）、Cedral 経由で西へ、その後 ~25 km の石畳を登ってトンネルへ。<strong>実際には4時間</strong>を見込んでください — 石畳は速度が出ません。バスの場合：SLP → Matehuala、そこから Altamirano 104 発のコンビ（~午前8時、午後2時、午後5時、~MX$121）。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌡️ 標高 2,730 m の気候</h3><p class="text-sm text-gray-700 leading-relaxed">高地砂漠：日中は晴天（1月で21°C、5月で ~30°C）、<strong>夜は一年中冷え込みます</strong>（0–10°C）。上着は必携。ベストシーズンは10月～4月。</p></div>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Real de Catorce の宿泊先、2026年の目安料金</caption>
    <thead class="bg-amber-600">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">ホテル</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">タイプ</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">料金（MXN/泊〜）</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón de la Abundancia</td><td class="px-4 py-3 text-sm text-gray-600">1863年築の石造建築のブティック。町の定番</td><td class="px-4 py-3 text-sm text-gray-700">~$1,450–1,900</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Villas Alcazaba</td><td class="px-4 py-3 text-sm text-gray-600">素朴な丘の斜面のキャビン</td><td class="px-4 py-3 text-sm text-gray-700">~$1,800</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón del Refugio</td><td class="px-4 py-3 text-sm text-gray-600">教区教会のそば</td><td class="px-4 py-3 text-sm text-gray-700">~$950–1,500</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel El Real</td><td class="px-4 py-3 text-sm text-gray-600">28室、安心の中級クラス</td><td class="px-4 py-3 text-sm text-gray-700">~$1,100</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">2023～2026年に公表された数値です — 予約時に確認してください。週末や祝日は早くに満室になります。</p>
<p class="text-gray-800 leading-relaxed"><strong>食事：</strong>Mesón de la Abundancia のレストランと La Porfiriana（メイン ~MX$250）、メキシコ＝イタリアンの La Migaja（~MX$200）、そこかしこの屋台のゴルディータ — さらにイタリア料理店が不思議と集まっており、これは1990年代のイタリアの映画スタッフや移住者に由来すると地元では言われています。</p>
</section>

<section id="fiesta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Fiesta de San Francisco — そして2026年が特大である理由</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">9月の第3週から10月12日ごろまで — <strong>10月4日</strong>にピークを迎え — 数万人の巡礼者がトンネルを抜けて押し寄せ、Panchito のガラスケースに触れます。近年の開催では会期を通じて最大80,000人の来訪が見込まれ、ホテルの稼働率は90%を超え、トンネルは「外に駐車してシャトル」方式に切り替わります。</p>
<div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-xl p-6 mb-4">
  <p class="text-gray-800 leading-relaxed"><strong>2026年はアッシジの聖フランチェスコ没後800周年</strong>（1226年10月3日没）にあたり、Real de Catorce は会期中を通じて宗教観光の高まりを見込んでいます。自治体は聖人のピンク色の石による記念碑的な像まで発表しました — もっとも2026年半ば時点では、建立されたわけではなく発表にとどまっています。この壮観を味わいたいなら数か月前に予約を。ゴーストタウンを味わいたいなら、それ以外の月に訪れてください。</p>
</div>
</section>

<section id="film" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Catorce のハリウッド</h2>
</div>
<p class="text-gray-800 leading-relaxed">この町の朽ちた壮麗さの佇まいには、映画史があります。<strong>The Mexican（2001年）</strong>は Brad Pitt と Julia Roberts をこの通り（そして Ogarrio トンネル）に立たせ、<strong>Bandidas（2006年）</strong>は Salma Hayek と Penélope Cruz を呼び、イタリア映画 <strong>Puerto Escondido（1992年）</strong>はこの町のイタリアとの縁の始まりとしてしばしば語られます。alt-J までもがここでミュージックビデオ（「3WW」、2017年）を撮影しました。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Real de Catorce は訪れる価値がありますか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい — メキシコで最も情緒あふれる目的地の一つです。Sierra de Catorce の標高 ~2,730 m にある半ば見捨てられた銀の町で、一車線・全長 2.3 km の鉱山トンネルを抜けて入ります。最低でも丸一日を見込んでください。宿泊すれば、日の出時のゴーストタウンの廃墟と高地砂漠の星空を楽しめます。San Luis Potosí 市（220 km 先）への旅と自然に組み合わせられます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosí から Real de Catorce へはどう行きますか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">57号線を北へ Matehuala まで（約2時間）進み、Cedral を抜けて西へ向かい、その後 Ogarrio トンネルまで石畳を約 25 km 登ります — 実際には合計で約4時間です。公共交通機関の場合：バスで Matehuala へ、そこから Altamirano 104 発のコンビで町へ（発車は概ね午前8時、午後2時、午後5時）。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Real de Catorce にATMはありますか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">ATMは役場の中にちょうど1台だけあり、当てにならないことで有名です。町は現金のみと考えてください。宿泊、食事、トンネルの通行料、Willys の乗車に必要なペソはすべて、Matehuala か San Luis Potosí で用意してから来てください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Real de Catorce に通じるトンネルとは何ですか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ogarrio トンネルは全長 2.3 km（1.5マイル）のかつての鉱山トンネルで — 1897～1901年に掘削されました — 町の主要な入口です。一車線分の幅しかないため、無線を持つ係員が方向を交互に切り替えます。少額の通行料（1台あたり約 MX$30–60 に加えて1人あたりの料金、現金）を見込んでください。10月の祭りと Semana Santa の期間中は、車は外の Dolores Trompeta に駐車し、シャトルで通り抜けます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Real de Catorce を訪れるのに最適な時期はいつですか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">10月から4月は、涼しく晴れた高地砂漠の日が続きます — ただし夜は一年中氷点近くまで下がるので、必ず上着を持参してください。9月下旬から10月12日までの Fiesta de San Francisco は避ける（あるいはあえて楽しむ）べき時期です。数万人の巡礼者が訪れ、ホテルは満室になり、聖フランチェスコ没後800周年にあたる2026年は、人出が記録を更新すると見込まれます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Real de Catorce でペヨーテは合法ですか？<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">いいえ。認められた先住民の一員でない者にとって、ペヨーテの採取・所持・運搬・摂取はメキシコでは連邦犯罪であり（刑罰は5～20年）、このサボテンは NOM-059 のもとで環境保護の対象でもあります — 成長が非常に遅く、採取によって脅かされています。町を取り囲む砂漠 Wirikuta は、その巡礼路が2025年にユネスコに登録された、神聖な Wixárika の領域です。景観を楽しみ、ペヨーテには手を出さないでください。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に以下の資料と照合しました：INAH（創設の年代、造幣所、初のダイナマイト使用）、realdecatorce.info（トンネル建設、教区教会、Casa de Moneda）、ユネスコ世界遺産センター（Wixárika の巡礼路の登録、参照番号1704）、メキシコの一般保健法第245条および連邦刑法第194～195条ならびに NOM-059-SEMARNAT（ペヨーテの法的・保全上の位置づけ）、El Universal SLP（祭りの人出、トンネルの運用、Willys と乗馬の料金）、Wikivoyage の2026年編集分（ホテル、トンネル通行料、コンビの時刻）、El Sol de San Luis と Potosinoticias（2026年の観光計画、像の発表、道路工事）、Wikipedia／IMDb（撮影地）。資料が食い違う場合 — 最盛期の人口、トンネル通行料、町の名前 — は、幅を持たせて示すか、伝説を伝説として明記しています。</p>
</section>

<div class="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">San Luis Potosí からのさらなる小旅行を計画中ですか？</p>
  <p class="text-amber-100 text-sm mb-4"><a href="/weekend-getaways" class="underline font-semibold text-white">週末旅行ガイド</a>と <a href="/blog/huasteca-potosina-itinerary-2026" class="underline font-semibold text-white">Huasteca Potosina 旅程</a>をご覧ください — あるいは毎週のアジェンダを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Real de Catorce は訪れる価値がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい — メキシコで最も情緒あふれる目的地の一つです。Sierra de Catorce の標高 ~2,730 m にある半ば見捨てられた銀の町で、一車線・全長 2.3 km の鉱山トンネルを抜けて入ります。最低でも丸一日を見込んでください。宿泊すれば、日の出時のゴーストタウンの廃墟と高地砂漠の星空を楽しめます。San Luis Potosí 市（220 km 先）への旅と自然に組み合わせられます。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosí から Real de Catorce へはどう行きますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "57号線を北へ Matehuala まで（約2時間）進み、Cedral を抜けて西へ向かい、その後 Ogarrio トンネルまで石畳を約 25 km 登ります — 実際には合計で約4時間です。公共交通機関の場合：バスで Matehuala へ、そこから Altamirano 104 発のコンビで町へ（発車は概ね午前8時、午後2時、午後5時）。"
      }
    },
    {
      "@type": "Question",
      "name": "Real de Catorce にATMはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ATMは役場の中にちょうど1台だけあり、当てにならないことで有名です。町は現金のみと考えてください。宿泊、食事、トンネルの通行料、Willys の乗車に必要なペソはすべて、Matehuala か San Luis Potosí で用意してから来てください。"
      }
    },
    {
      "@type": "Question",
      "name": "Real de Catorce に通じるトンネルとは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ogarrio トンネルは全長 2.3 km（1.5マイル）のかつての鉱山トンネルで — 1897～1901年に掘削されました — 町の主要な入口です。一車線分の幅しかないため、無線を持つ係員が方向を交互に切り替えます。少額の通行料（1台あたり約 MX$30–60 に加えて1人あたりの料金、現金）を見込んでください。10月の祭りと Semana Santa の期間中は、車は外の Dolores Trompeta に駐車し、シャトルで通り抜けます。"
      }
    },
    {
      "@type": "Question",
      "name": "Real de Catorce を訪れるのに最適な時期はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10月から4月は、涼しく晴れた高地砂漠の日が続きます — ただし夜は一年中氷点近くまで下がるので、必ず上着を持参してください。9月下旬から10月12日までの Fiesta de San Francisco は避ける（あるいはあえて楽しむ）べき時期です。数万人の巡礼者が訪れ、ホテルは満室になり、聖フランチェスコ没後800周年にあたる2026年は、人出が記録を更新すると見込まれます。"
      }
    },
    {
      "@type": "Question",
      "name": "Real de Catorce でペヨーテは合法ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。認められた先住民の一員でない者にとって、ペヨーテの採取・所持・運搬・摂取はメキシコでは連邦犯罪であり（刑罰は5～20年）、このサボテンは NOM-059 のもとで環境保護の対象でもあります — 成長が非常に遅く、採取によって脅かされています。町を取り囲む砂漠 Wirikuta は、その巡礼路が2025年にユネスコに登録された、神聖な Wixárika の領域です。景観を楽しみ、ペヨーテには手を出さないでください。"
      }
    }
  ]
}
</script>

</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_de: contentDe, content_ja: contentJa })
    .eq('slug', SLUG);
  if (error) { console.error('Update failed:', error); process.exit(1); }
  console.log('Updated content_de + content_ja for', SLUG);
})();
