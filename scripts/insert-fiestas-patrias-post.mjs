import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const HERO = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fiestas-patrias-san-luis-potosi-2026-hero.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'Independence Day in San Luis Potosí centers on Plaza de Armas: a free verbena with antojitos and live music on September 15, the Grito from the Palacio de Gobierno balcony at 11 pm, fireworks, and the civic-military parade on the 16th starting at 11 am along Avenida Carranza. Arrive hours early — thousands attend.') + `
<p class="text-lg text-gray-700 mb-6">If there is one night when San Luis Potosí’s Centro Histórico shows you exactly who it is, it’s September 15. The baroque facade of the Palacio de Gobierno glows green, white and red; the smell of pozole and elotes drifts across Plaza de Armas; and at 11 pm sharp, the whole square answers the Grito with a roar. Here’s how the fiestas patrias work in SLP — and how to enjoy them like you’ve done it all your life.</p>

<h2>September 15: the verbena and the Grito</h2>
<p>From the evening onward, <strong>Plaza de Armas</strong> fills with a free <em>verbena popular</em>: antojito stands, live music with an invited headliner, scenic lighting on the palace facade and, later, fireworks. The centerpiece comes at <strong>11 pm</strong>, when the governor steps onto the main balcony of the <strong>Palacio de Gobierno</strong> to deliver the Grito — the ritual cheers to Hidalgo, Morelos and Josefa Ortiz — ringing the bell as the flag waves and the crowd sings the national anthem. It is free, massive and unticketed: thousands pack the square, so claiming a spot two or three hours early is the local move.</p>
<p><em>The 2026 program (headline act and full schedule) is typically announced in early September — we’ll note it on our <a href="/events">events page</a> once official.</em></p>

<h2>September 16: the parade</h2>
<p>The next morning belongs to the <strong>civic-military parade</strong>, which in recent editions has started at <strong>11 am</strong> on Avenida Venustiano Carranza, run the length of Carranza to the Glorieta González Bocanegra, continued along Carlos Canseco and wrapped up at Parque de Morales. Families line the whole route; the stretch of Carranza near the center gets the densest crowds, while the Morales end is calmer with kids.</p>

<h2>Getting around: expect closures</h2>
<p>On the 16th, road closures around the route have historically begun as early as <strong>6:30 am</strong> (Uresti and Venustiano Carranza, plus the streets where contingents gather). Plan alternates: Reforma, the Eje Vial and Independencia running north–south; Alameda, 20 de Noviembre, Avenida de la Paz and Damián Carmona toward the north; Salvador Nava east–west. On the night of the 15th, the blocks around Plaza de Armas close to traffic — walk or get dropped off at the edge of the Centro. Exact 2026 closures are published by the city a few days ahead.</p>

<h2>What to eat and drink</h2>
<p>The verbena and the surrounding Centro are a crash course in fiesta food: <strong>pozole</strong>, <strong>enchiladas potosinas</strong>, <strong>tacos rojos</strong>, <strong>elotes and esquites</strong>, buñuelos and aguas frescas. Many restaurants around Plaza de Armas and Calle Universidad set up special Noche Mexicana menus — book ahead if you want a table with a view of the palace. For where locals actually drink afterward, our <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">bars &amp; mezcal guide</a> has the Centro covered.</p>

<h2>Tips from experience</h2>
<ul>
<li><strong>Arrive early on the 15th</strong> — the square fills hours before the Grito; bring water and patience.</li>
<li><strong>Keep valuables minimal.</strong> It’s a dense, festive crowd; standard big-event awareness applies. Police presence is heavy and family attendance is the norm.</li>
<li><strong>Kids love the 16th more.</strong> The parade is calmer, daytime and full of bands, horses and cadets.</li>
<li><strong>Stay central.</strong> If you’re visiting, a hotel in or near the Centro means everything is walkable — see <a href="/blog/where-to-stay-san-luis-potosi-2026">where to stay in SLP</a>.</li>
</ul>
` + faq('FAQ', [
  ['What time is the Grito in San Luis Potosí?', 'At 11 pm on September 15, from the main balcony of the Palacio de Gobierno facing Plaza de Armas. The free verbena in the square starts hours earlier with food stands and live music, and fireworks follow the ceremony.'],
  ['Is the celebration free?', 'Yes — the verbena, the Grito and the September 16 parade are all free, public and unticketed. Only restaurant Noche Mexicana dinners around the square charge.'],
  ['Where is the best spot for the parade?', 'Anywhere along Avenida Carranza works; in recent editions the parade has started at 11 am and run from Carranza to the Glorieta González Bocanegra, then via Carlos Canseco to Parque de Morales. The Morales end is the calmest with children.'],
  ['What should I eat during fiestas patrias?', 'Pozole, enchiladas potosinas, tacos rojos, elotes and buñuelos dominate the verbena. Restaurants around Plaza de Armas offer special menus on the night of the 15th — reserve ahead.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'Las fiestas patrias en San Luis Potosí se viven en la Plaza de Armas: verbena gratuita con antojitos y música el 15 de septiembre, el Grito desde el balcón del Palacio de Gobierno a las 23:00, fuegos artificiales, y el desfile cívico-militar el 16 desde las 11:00 por la avenida Carranza. Llega con horas de anticipación: asisten miles.') + `
<p class="text-lg text-gray-700 mb-6">Si hay una noche en la que el Centro Histórico de San Luis Potosí muestra exactamente quién es, es el 15 de septiembre. La fachada barroca del Palacio de Gobierno se ilumina de verde, blanco y rojo; el olor a pozole y elotes cruza la Plaza de Armas; y a las 23:00 en punto, toda la plaza responde al Grito con un rugido. Así funcionan las fiestas patrias en SLP — y así se disfrutan como si lo hubieras hecho toda la vida.</p>

<h2>15 de septiembre: la verbena y el Grito</h2>
<p>Desde la tarde, la <strong>Plaza de Armas</strong> se llena con una <em>verbena popular</em> gratuita: puestos de antojitos, música en vivo con artista invitado, iluminación escénica en la fachada del Palacio y, más tarde, fuegos artificiales. El momento central llega a las <strong>23:00</strong>, cuando el gobernador sale al balcón principal del <strong>Palacio de Gobierno</strong> para dar el Grito — las arengas a Hidalgo, Morelos y Josefa Ortiz — mientras repican las campanas, ondea la bandera y la multitud canta el Himno Nacional. Es gratuito, masivo y sin boletos: llegan miles, así que apartar lugar dos o tres horas antes es la jugada local.</p>
<p><em>El programa 2026 (artista invitado y agenda completa) suele anunciarse a principios de septiembre — lo publicaremos en nuestra <a href="/events">página de eventos</a> en cuanto sea oficial.</em></p>

<h2>16 de septiembre: el desfile</h2>
<p>La mañana siguiente es del <strong>desfile cívico-militar</strong>, que en ediciones recientes ha iniciado a las <strong>11:00</strong> en la avenida Venustiano Carranza, recorriéndola completa hasta la Glorieta González Bocanegra, siguiendo por Carlos Canseco y concluyendo en el Parque de Morales. Las familias se forman a lo largo de toda la ruta; el tramo de Carranza cercano al centro es el más lleno, mientras que el extremo de Morales es más tranquilo con niños.</p>

<h2>Movilidad: espera cierres</h2>
<p>El 16, los cierres viales alrededor de la ruta han comenzado históricamente desde las <strong>6:30</strong> (Uresti y Venustiano Carranza, más las calles de concentración de contingentes). Alternativas: Reforma, el Eje Vial e Independencia en sentido norte-sur; Alameda, 20 de Noviembre, avenida de la Paz y Damián Carmona hacia el norte; Salvador Nava en oriente-poniente. La noche del 15, las cuadras alrededor de la Plaza de Armas se cierran al tráfico: camina o pide que te dejen en el borde del Centro. Los cierres exactos de 2026 se publican días antes.</p>

<h2>Qué comer y beber</h2>
<p>La verbena y el Centro son un curso intensivo de comida de fiesta: <strong>pozole</strong>, <strong>enchiladas potosinas</strong>, <strong>tacos rojos</strong>, <strong>elotes y esquites</strong>, buñuelos y aguas frescas. Muchos restaurantes alrededor de la Plaza de Armas y la calle Universidad montan menús especiales de Noche Mexicana — reserva si quieres mesa con vista al Palacio. Para saber dónde siguen la noche los potosinos, nuestra <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">guía de bares y mezcal</a> cubre el Centro.</p>

<h2>Consejos de experiencia</h2>
<ul>
<li><strong>Llega temprano el 15</strong> — la plaza se llena horas antes del Grito; lleva agua y paciencia.</li>
<li><strong>Minimiza objetos de valor.</strong> Es una multitud densa y festiva; aplica la precaución estándar de evento masivo. Hay fuerte presencia policial y ambiente familiar.</li>
<li><strong>A los niños les gusta más el 16.</strong> El desfile es diurno, más tranquilo y lleno de bandas, caballos y cadetes.</li>
<li><strong>Quédate céntrico.</strong> Si vienes de fuera, un hotel en el Centro hace todo caminable — mira <a href="/blog/where-to-stay-san-luis-potosi-2026">dónde hospedarte en SLP</a>.</li>
</ul>
` + faq('Preguntas frecuentes', [
  ['¿A qué hora es el Grito en San Luis Potosí?', 'A las 23:00 del 15 de septiembre, desde el balcón principal del Palacio de Gobierno frente a la Plaza de Armas. La verbena gratuita en la plaza empieza horas antes con antojitos y música en vivo, y tras la ceremonia hay fuegos artificiales.'],
  ['¿La celebración es gratuita?', 'Sí — la verbena, el Grito y el desfile del 16 son gratuitos, públicos y sin boletos. Solo cobran las cenas de Noche Mexicana de los restaurantes alrededor de la plaza.'],
  ['¿Cuál es el mejor punto para ver el desfile?', 'Cualquier tramo de la avenida Carranza funciona; en ediciones recientes el desfile ha iniciado a las 11:00 y corrido de Carranza a la Glorieta González Bocanegra y por Carlos Canseco hasta el Parque de Morales. El extremo de Morales es el más tranquilo con niños.'],
  ['¿Qué se come en fiestas patrias?', 'Pozole, enchiladas potosinas, tacos rojos, elotes y buñuelos dominan la verbena. Los restaurantes de la Plaza de Armas ofrecen menús especiales la noche del 15 — reserva con anticipación.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Der Unabhängigkeitstag in San Luis Potosí spielt sich auf der Plaza de Armas ab: kostenlose Verbena mit Essen und Livemusik am 15. September, der Grito vom Balkon des Palacio de Gobierno um 23 Uhr, Feuerwerk — und am 16. die zivil-militärische Parade ab 11 Uhr entlang der Avenida Carranza. Komm Stunden früher: Tausende sind dabei.') + `
<p class="text-lg text-gray-700 mb-6">Wenn es eine Nacht gibt, in der das historische Zentrum von San Luis Potosí zeigt, wer es wirklich ist, dann der 15. September. Die barocke Fassade des Regierungspalastes leuchtet grün-weiß-rot, über die Plaza de Armas zieht der Duft von Pozole und Elotes, und um Punkt 23 Uhr antwortet der ganze Platz auf den Grito mit einem Donnern. So funktionieren die Fiestas Patrias in SLP.</p>

<h2>15. September: Verbena und Grito</h2>
<p>Ab dem Abend füllt sich die <strong>Plaza de Armas</strong> mit einer kostenlosen <em>Verbena popular</em>: Essensstände, Livemusik mit einem eingeladenen Hauptact, szenische Beleuchtung der Palastfassade und später Feuerwerk. Der Höhepunkt kommt um <strong>23 Uhr</strong>, wenn der Gouverneur auf den Hauptbalkon des <strong>Palacio de Gobierno</strong> tritt und den Grito ruft — die Hochrufe auf Hidalgo, Morelos und Josefa Ortiz — während die Glocke läutet und die Menge die Nationalhymne singt. Alles ist gratis und ohne Tickets; wer einen guten Platz will, kommt zwei bis drei Stunden früher.</p>
<p><em>Das Programm 2026 (Hauptact und Ablauf) wird üblicherweise Anfang September bekannt gegeben — sobald offiziell, steht es auf unserer <a href="/events">Eventseite</a>.</em></p>

<h2>16. September: die Parade</h2>
<p>Der nächste Morgen gehört der <strong>zivil-militärischen Parade</strong>: In den letzten Ausgaben startete sie um <strong>11 Uhr</strong> auf der Avenida Venustiano Carranza, lief die ganze Carranza entlang bis zur Glorieta González Bocanegra, weiter über Carlos Canseco und endete am Parque de Morales. Am Morales-Ende ist es mit Kindern am entspanntesten.</p>

<h2>Verkehr: mit Sperrungen rechnen</h2>
<p>Am 16. beginnen die Straßensperrungen erfahrungsgemäß schon um <strong>6:30 Uhr</strong> (Uresti und Venustiano Carranza plus Sammelstraßen). Ausweichrouten: Reforma, Eje Vial und Independencia in Nord-Süd-Richtung; Alameda, 20 de Noviembre, Avenida de la Paz und Damián Carmona Richtung Norden; Salvador Nava in Ost-West. Am Abend des 15. sind die Blocks um die Plaza de Armas gesperrt — zu Fuß gehen oder sich am Rand des Centro absetzen lassen. Die genauen Sperrungen 2026 werden wenige Tage vorher veröffentlicht.</p>

<h2>Essen und Trinken</h2>
<p>Die Verbena und das umliegende Centro sind ein Crashkurs in Festtagsküche: <strong>Pozole</strong>, <strong>Enchiladas Potosinas</strong>, <strong>Tacos Rojos</strong>, <strong>Elotes und Esquites</strong>, Buñuelos und Aguas frescas. Viele Restaurants rund um die Plaza de Armas bieten spezielle Noche-Mexicana-Menüs an — mit Blick auf den Palast unbedingt reservieren. Wo die Nacht danach weitergeht, zeigt unser <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">Bar- &amp; Mezcal-Guide</a>.</p>

<h2>Tipps aus Erfahrung</h2>
<ul>
<li><strong>Am 15. früh kommen</strong> — der Platz füllt sich Stunden vor dem Grito.</li>
<li><strong>Wertsachen minimieren.</strong> Dichte, festliche Menge; übliche Großevent-Vorsicht. Starke Polizeipräsenz, viele Familien.</li>
<li><strong>Mit Kindern lieber der 16.</strong> Die Parade ist tagsüber, ruhiger, voller Kapellen, Pferde und Kadetten.</li>
<li><strong>Zentral wohnen.</strong> Vom Centro aus ist alles fußläufig — siehe <a href="/blog/where-to-stay-san-luis-potosi-2026">Übernachten in SLP</a>.</li>
</ul>
` + faq('Häufige Fragen', [
  ['Um wie viel Uhr ist der Grito in San Luis Potosí?', 'Um 23 Uhr am 15. September, vom Hauptbalkon des Palacio de Gobierno an der Plaza de Armas. Die kostenlose Verbena beginnt Stunden vorher; nach der Zeremonie gibt es Feuerwerk.'],
  ['Ist die Feier kostenlos?', 'Ja — Verbena, Grito und die Parade am 16. sind gratis, öffentlich und ohne Tickets. Nur die Noche-Mexicana-Menüs der Restaurants kosten.'],
  ['Wo sieht man die Parade am besten?', 'Überall entlang der Avenida Carranza; zuletzt lief sie ab 11 Uhr von der Carranza über die Glorieta González Bocanegra und Carlos Canseco bis zum Parque de Morales. Das Morales-Ende ist mit Kindern am ruhigsten.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'サンルイスポトシの独立記念日はアルマス広場が主役。9月15日は無料のベルベーナ（屋台と生演奏）、23時に州庁舎バルコニーからのグリト、花火。16日は11時からカランサ大通りで軍民パレード。数千人が集まるため数時間前の場所取りが必須だ。') + `
<p class="text-lg text-gray-700 mb-6">サンルイスポトシの歴史地区が本当の姿を見せる夜があるとすれば、それは9月15日だ。バロック様式の州庁舎が緑・白・赤に染まり、ポソレとエロテの香りが広場を包み、23時ちょうど、グリトの呼びかけに広場全体が咆哮で応える。</p>

<h2>9月15日：ベルベーナとグリト</h2>
<p>夕方から<strong>アルマス広場</strong>は無料の<em>ベルベーナ・ポプラル</em>で埋まる。屋台、招待アーティストの生演奏、庁舎ファサードの演出照明、そして花火。ハイライトは<strong>23時</strong>、州知事が<strong>州庁舎</strong>のバルコニーからグリトを叫び、鐘が鳴り、国旗が振られ、群衆が国歌を歌う。無料・チケット不要で数千人が集まるため、2〜3時間前の場所取りが地元流だ。</p>
<p><em>2026年のプログラム（出演者など）は例年9月上旬に発表される。確定次第<a href="/events">イベントページ</a>に掲載する。</em></p>

<h2>9月16日：パレード</h2>
<p>翌朝は<strong>軍民パレード</strong>。近年は<strong>11時</strong>にベヌスティアーノ・カランサ大通りを出発し、ゴンサレス・ボカネグラのロータリーからカルロス・カンセコを経てモラレス公園で終わる。子連れならモラレス側が比較的落ち着いている。</p>

<h2>交通規制</h2>
<p>16日は例年<strong>朝6時半</strong>から周辺道路が封鎖される。迂回路はReforma、Eje Vial、Independencia（南北）、Alameda、20 de Noviembre、Av. de la Paz、Damián Carmona（北方向）、Salvador Nava（東西）。15日夜はアルマス広場周辺が歩行者天国になる。2026年の正確な規制は数日前に発表される。</p>

<h2>食べるもの</h2>
<p>ベルベーナと歴史地区は祭り料理の教科書だ。<strong>ポソレ</strong>、<strong>エンチラーダス・ポトシーナス</strong>、<strong>タコス・ロホス</strong>、<strong>エロテ</strong>、ブニュエロにアグアフレスカ。広場周辺のレストランは15日夜に特別メニューを出す——庁舎が見える席は要予約。その後の夜は<a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">バー＆メスカルガイド</a>へ。</p>
` + faq('よくある質問', [
  ['グリトは何時？', '9月15日23時、アルマス広場に面した州庁舎のバルコニーから。広場の無料ベルベーナは数時間前から始まり、式典後には花火が上がる。'],
  ['費用はかかる？', 'いいえ。ベルベーナ、グリト、16日のパレードはすべて無料・チケット不要。有料なのは周辺レストランの特別ディナーだけ。'],
  ['パレードのベストスポットは？', 'カランサ大通り沿いならどこでも。近年は11時発、カランサ→ゴンサレス・ボカネグラ→カルロス・カンセコ→モラレス公園のルート。子連れはモラレス側が穴場。'],
]);

const row = {
  slug: 'fiestas-patrias-san-luis-potosi',
  status: 'published',
  published_at: '2026-09-01T12:00:00+00:00',
  category: 'Cultural',
  tags: ['independence-day', 'fiestas-patrias', 'san-luis-potosi', 'events', 'centro-historico', 'grito'],
  image_url: HERO,
  title: 'Independence Day in San Luis Potosí: Grito, Verbena & Parade Guide',
  title_es: 'Fiestas patrias en San Luis Potosí: guía del Grito, la verbena y el desfile',
  title_de: 'Unabhängigkeitstag in San Luis Potosí: Grito, Verbena & Parade',
  title_ja: 'サンルイスポトシの独立記念日ガイド',
  excerpt: 'How September 15–16 works in SLP: the free verbena and the 11 pm Grito at Plaza de Armas, fireworks, the civic-military parade on Carranza, road closures and what to eat.',
  excerpt_es: 'Cómo se vive el 15 y 16 de septiembre en SLP: la verbena gratuita y el Grito de las 23:00 en la Plaza de Armas, fuegos artificiales, el desfile por Carranza, cierres viales y qué comer.',
  excerpt_de: 'So laufen der 15. und 16. September in SLP ab: kostenlose Verbena und Grito um 23 Uhr an der Plaza de Armas, Feuerwerk, Parade auf der Carranza, Straßensperrungen und das richtige Essen.',
  excerpt_ja: '9月15・16日のSLP：アルマス広場の無料ベルベーナと23時のグリト、花火、カランサ大通りのパレード、交通規制と祭り飯を解説。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'Independence Day in San Luis Potosí: Full Guide',
  meta_title_es: 'Fiestas patrias en San Luis Potosí: guía completa',
  meta_title_de: 'Unabhängigkeitstag in San Luis Potosí: der Guide',
  meta_title_ja: 'サンルイスポトシの独立記念日ガイド',
  meta_description: 'September 15–16 in SLP: free verbena and the 11 pm Grito at Plaza de Armas, fireworks, the Carranza parade, road closures, and the fiesta food worth lining up for.',
  meta_description_es: '15 y 16 de septiembre en SLP: verbena gratuita y Grito a las 23:00 en la Plaza de Armas, fuegos artificiales, desfile por Carranza, cierres viales y la comida de fiesta que vale la fila.',
  meta_description_de: '15./16. September in SLP: kostenlose Verbena, Grito um 23 Uhr an der Plaza de Armas, Feuerwerk, Parade auf der Carranza, Sperrungen — und das Festessen, das die Schlange wert ist.',
  meta_description_ja: '9月15・16日のSLP。無料ベルベーナ、23時のグリト、花火、パレード、交通規制、祭り飯を網羅。',
  discover_title: 'The night San Luis Potosí roars: Grito survival guide',
  discover_title_es: 'La noche en que ruge San Luis: guía para vivir el Grito',
  discover_title_de: 'Die Nacht, in der San Luis brüllt: der Grito-Guide',
  discover_title_ja: '広場が咆哮する夜——グリト完全ガイド',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ inserted ${row.slug} (scheduled ${row.published_at})`);
