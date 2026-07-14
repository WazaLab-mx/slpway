import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const HERO = '/images/events/xantolo-image-3.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'Xantolo is the Huasteca’s Day of the Dead — celebrated October 31 to November 2 in the green hills of the Huasteca Potosina by Nahua and Teenek communities. Expect marigold arches over home altars, masked huehue dance troupes moving village to village, and zacahuil, the region’s giant ceremonial tamal. It is a living family ritual: visitors are guests, not the audience.') + `
<p class="text-lg text-gray-700 mb-6">Mexico’s Day of the Dead has many faces, but few are as intense — or as intact — as <strong>Xantolo</strong>, the Huasteca’s version. The name comes from <em>sanctorum</em>, filtered through Nahuatl. For Nahua and Teenek families in the hills of the Huasteca Potosina, these are the days when the souls come home, and everything — the arch, the food, the masks, the music — exists to receive them well.</p>

<h2>What actually happens</h2>
<p>The core runs <strong>October 31 to November 2</strong>, though the ritual cycle opens as early as September 29 (San Miguel Arcángel) and closes with a final offering on November 30. Homes build <strong>altar-arches</strong> of cempasúchil marigolds and sugarcane over the family ofrenda, laying paths of petals so the souls find their way. Outside, the <strong>huehues</strong> — masked dance troupes, also called <em>comparsas</em> or <em>viejadas</em> — move through the streets to violin and jarana huasteca. The carved wooden masks aren’t costume for its own sake: dancing masked is said to confuse death itself, so it can’t take the living. UNESCO documents the tradition as part of Mexico’s indigenous festivities dedicated to the dead, inscribed on the Intangible Cultural Heritage list in 2008, and San Luis Potosí declared it state cultural patrimony in 2013.</p>

<h2>Where to experience it</h2>
<p>Xantolo is strongest along the so-called Ruta Xantolo: <strong>Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles</strong> and a dozen more Huasteca municipalities. Every town has its own flavor — mask styles, dance characters like the "Comanche", the days when comparsas peak. If you’re basing yourself for the trip, our <a href="/blog/huasteca-potosina-itinerary-2026">Huasteca Potosina itinerary</a> covers logistics, and the <a href="/blog/xilitla-las-pozas-guide-2026">Xilitla guide</a> pairs naturally with the season. <em>Official 2026 municipal programs are typically announced between late August and October — check municipal pages before traveling.</em></p>

<h2>The food of Xantolo</h2>
<p>The season’s centerpiece is <strong>zacahuil</strong> — a ceremonial tamal that can stretch past a meter and weigh 20–50 kg: coarse-ground masa, pork or turkey, chile adobo, wrapped in banana or papatla leaves and cooked overnight in a wood-fired oven. It’s made as an offering first, a meal second. Around it: bolín, chilpan tamales, pan de muerto shared at the altar, café de olla and atole. On market Sundays in Ciudad Valles and Xilitla you can find zacahuil year-round, but during Xantolo it’s everywhere and it means more.</p>

<h2>Visiting with respect</h2>
<p>This is the part that matters. Xantolo is not a festival staged for tourism — it’s a family and community ritual that happens to be extraordinary to witness. The working rule: <strong>you are a guest, not the audience</strong>. Ask before photographing altars or masked dancers; don’t step into cemeteries during family velaciones uninvited; buy food and crafts directly from the families making them. If a comparsa invites you to dance — and they often do — that’s the moment to say yes.</p>

<h2>Practical notes</h2>
<ul>
<li><strong>Getting there:</strong> the Huasteca towns are 4–5 hours from SLP capital by road; Ciudad Valles is the region’s hub.</li>
<li><strong>Book early:</strong> lodging in Valles, Xilitla and Tamazunchale fills well before the November bridge weekend.</li>
<li><strong>Weather:</strong> the Huasteca stays warm and humid in early November; bring rain protection.</li>
<li><strong>Combine it:</strong> waterfalls still run in November — see our <a href="/blog/huasteca-potosina-itinerary-2026">Huasteca itinerary</a> for pairing Xantolo with Tamul or Puente de Dios.</li>
</ul>
` + faq('FAQ', [
  ['When is Xantolo?', 'The core days are October 31 to November 2 every year, with a broader ritual cycle that opens September 29 and closes November 30 with a final offering. Municipal event programs are announced in the weeks before.'],
  ['Where is Xantolo celebrated?', 'Across the Huasteca Potosina: Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles and other municipalities in the region — each with its own mask styles and comparsa traditions.'],
  ['What is zacahuil?', 'The Huasteca’s giant ceremonial tamal: coarse corn masa with pork or turkey in chile adobo, wrapped in banana leaves and wood-fire cooked overnight. During Xantolo it is prepared first as an offering for the returning souls.'],
  ['Can tourists attend Xantolo?', 'Yes, respectfully. It is a living family ritual, not a staged festival: ask before photographing, stay out of family velaciones unless invited, and buy from local cooks and artisans. Treat yourself as a guest.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'Xantolo es el Día de Muertos huasteco: se vive del 31 de octubre al 2 de noviembre en la Huasteca Potosina, entre comunidades nahuas y teenek. Espera arcos de cempasúchil sobre los altares, comparsas de huehues enmascarados recorriendo los pueblos y zacahuil, el tamal ceremonial gigante. Es un ritual familiar vivo: el visitante es invitado, no el centro de la escena.') + `
<p class="text-lg text-gray-700 mb-6">El Día de Muertos mexicano tiene muchas caras, pero pocas tan intensas — y tan intactas — como <strong>Xantolo</strong>, la versión huasteca. El nombre viene de <em>sanctorum</em>, filtrado por el náhuatl. Para las familias nahuas y teenek de la Huasteca Potosina, estos son los días en que las ánimas vuelven a casa, y todo — el arco, la comida, las máscaras, la música — existe para recibirlas bien.</p>

<h2>Qué pasa realmente</h2>
<p>El núcleo va del <strong>31 de octubre al 2 de noviembre</strong>, aunque el ciclo ritual abre desde el 29 de septiembre (San Miguel Arcángel) y cierra con una última ofrenda el 30 de noviembre. Las casas levantan <strong>altares-arco</strong> de cempasúchil y caña sobre la ofrenda familiar, con caminos de pétalos para que las ánimas encuentren el camino. Afuera, los <strong>huehues</strong> — cuadrillas enmascaradas, también llamadas <em>comparsas</em> o <em>viejadas</em> — recorren las calles al son de violín y jarana huasteca. Las máscaras talladas en madera no son disfraz por gusto: bailar enmascarado, dicen, confunde a la muerte para que no se lleve a los vivos. La UNESCO documenta la tradición como parte de las fiestas indígenas mexicanas dedicadas a los muertos, inscritas en la Lista del Patrimonio Cultural Inmaterial en 2008, y San Luis Potosí la declaró patrimonio cultural del estado en 2013.</p>

<h2>Dónde vivirlo</h2>
<p>Xantolo late más fuerte en la llamada Ruta Xantolo: <strong>Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles</strong> y una docena más de municipios huastecos. Cada pueblo tiene su sello — estilos de máscara, personajes como el "Comanche", los días pico de las comparsas. Si vas a montar base para el viaje, nuestro <a href="/blog/huasteca-potosina-itinerary-2026">itinerario de la Huasteca Potosina</a> cubre la logística, y la <a href="/blog/xilitla-las-pozas-guide-2026">guía de Xilitla</a> se combina naturalmente con la temporada. <em>Los programas municipales 2026 suelen anunciarse entre finales de agosto y octubre — revisa las páginas municipales antes de viajar.</em></p>

<h2>La comida de Xantolo</h2>
<p>La pieza central de la temporada es el <strong>zacahuil</strong> — un tamal ceremonial que puede rebasar el metro y pesar 20–50 kg: masa martajada, cerdo o guajolote, adobo de chiles, envuelto en hoja de plátano o papatla y cocido toda la noche en horno de leña. Se hace primero como ofrenda, después como comida. Alrededor: bolín, tamales de chilpan, pan de muerto compartido en el altar, café de olla y atole. Los domingos de mercado en Ciudad Valles y Xilitla hay zacahuil todo el año, pero en Xantolo está en todas partes y significa más.</p>

<h2>Visitar con respeto</h2>
<p>Esta es la parte que importa. Xantolo no es un festival montado para el turismo: es un ritual familiar y comunitario que además resulta extraordinario de presenciar. La regla de trabajo: <strong>eres invitado, no público</strong>. Pide permiso antes de fotografiar altares o danzantes; no entres a los panteones durante las velaciones familiares sin invitación; compra comida y artesanía directamente a las familias que las hacen. Si una comparsa te invita a bailar — y suele pasar — ese es el momento de decir que sí.</p>

<h2>Notas prácticas</h2>
<ul>
<li><strong>Cómo llegar:</strong> los pueblos huastecos están a 4–5 horas por carretera desde la capital; Ciudad Valles es el hub de la región.</li>
<li><strong>Reserva temprano:</strong> el hospedaje en Valles, Xilitla y Tamazunchale se llena mucho antes del puente de noviembre.</li>
<li><strong>Clima:</strong> la Huasteca sigue cálida y húmeda a inicios de noviembre; lleva impermeable.</li>
<li><strong>Combínalo:</strong> las cascadas siguen corriendo en noviembre — nuestro <a href="/blog/huasteca-potosina-itinerary-2026">itinerario de la Huasteca</a> explica cómo combinar Xantolo con Tamul o Puente de Dios.</li>
</ul>
` + faq('Preguntas frecuentes', [
  ['¿Cuándo es Xantolo?', 'Los días centrales son del 31 de octubre al 2 de noviembre de cada año, con un ciclo ritual amplio que abre el 29 de septiembre y cierra el 30 de noviembre con la última ofrenda. Los programas municipales se anuncian en las semanas previas.'],
  ['¿Dónde se celebra Xantolo?', 'En toda la Huasteca Potosina: Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles y más municipios — cada uno con sus estilos de máscaras y tradiciones de comparsa.'],
  ['¿Qué es el zacahuil?', 'El tamal ceremonial gigante de la Huasteca: masa martajada con cerdo o guajolote en adobo de chiles, envuelto en hoja de plátano y cocido toda la noche en horno de leña. En Xantolo se prepara primero como ofrenda para las ánimas.'],
  ['¿Pueden ir turistas a Xantolo?', 'Sí, con respeto. Es un ritual familiar vivo, no un espectáculo: pide permiso antes de fotografiar, no entres a velaciones sin invitación y compra a las cocineras y artesanos locales. Trátate como invitado.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Xantolo ist der Tag der Toten der Huasteca — gefeiert vom 31. Oktober bis 2. November in den grünen Hügeln der Huasteca Potosina von Nahua- und Teenek-Gemeinden. Es erwarten dich Ringelblumen-Bögen über Hausaltären, maskierte Huehue-Tanzgruppen von Dorf zu Dorf und Zacahuil, der riesige zeremonielle Tamal. Es ist ein lebendiges Familienritual: Besucher sind Gäste, nicht Publikum.') + `
<p class="text-lg text-gray-700 mb-6">Mexikos Tag der Toten hat viele Gesichter, aber wenige sind so intensiv — und so unverfälscht — wie <strong>Xantolo</strong>, die Version der Huasteca. Der Name stammt von <em>sanctorum</em>, gefiltert durchs Nahuatl. Für Nahua- und Teenek-Familien sind dies die Tage, an denen die Seelen heimkehren — und alles, vom Bogen bis zur Maske, dient dazu, sie würdig zu empfangen.</p>

<h2>Was wirklich passiert</h2>
<p>Der Kern läuft vom <strong>31. Oktober bis 2. November</strong>; der rituelle Zyklus beginnt schon am 29. September und endet mit einer letzten Opfergabe am 30. November. Häuser errichten <strong>Altarbögen</strong> aus Cempasúchil-Blumen und Zuckerrohr, Blütenpfade weisen den Seelen den Weg. Draußen ziehen die <strong>Huehues</strong> — maskierte Tanzgruppen, auch <em>Comparsas</em> oder <em>Viejadas</em> — zu Geige und Jarana durch die Straßen. Die geschnitzten Holzmasken sind kein Kostüm um des Kostüms willen: Maskiert zu tanzen, heißt es, verwirrt den Tod, damit er die Lebenden nicht mitnimmt. Die UNESCO führt die Tradition als Teil der indigenen Totenfeste Mexikos (2008 in die Liste des Immateriellen Kulturerbes aufgenommen); San Luis Potosí erklärte sie 2013 zum Kulturerbe des Bundesstaats.</p>

<h2>Wo man es erlebt</h2>
<p>Am stärksten ist Xantolo entlang der Ruta Xantolo: <strong>Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles</strong> und ein Dutzend weiterer Gemeinden. Jeder Ort hat seinen eigenen Charakter — Maskenstile, Figuren wie der "Comanche", die Hochtage der Comparsas. Für die Logistik: unser <a href="/blog/huasteca-potosina-itinerary-2026">Huasteca-Itinerar</a>; die <a href="/blog/xilitla-las-pozas-guide-2026">Xilitla-Guide</a> passt perfekt zur Saison. <em>Die offiziellen Programme 2026 erscheinen üblicherweise zwischen Ende August und Oktober.</em></p>

<h2>Das Essen von Xantolo</h2>
<p>Das Herzstück der Saison ist der <strong>Zacahuil</strong> — ein zeremonieller Tamal von über einem Meter und 20–50 kg: grob gemahlene Masa, Schwein oder Truthahn, Chile-Adobo, in Bananenblätter gewickelt und über Nacht im Holzofen gegart. Er ist zuerst Opfergabe, dann Mahlzeit. Dazu: Bolín, Chilpan-Tamales, geteiltes Pan de Muerto, Café de Olla und Atole. Auf den Sonntagsmärkten von Ciudad Valles und Xilitla gibt es Zacahuil das ganze Jahr — während Xantolo aber ist er überall und bedeutet mehr.</p>

<h2>Mit Respekt besuchen</h2>
<p>Das ist der wichtigste Teil. Xantolo ist kein für Touristen inszeniertes Festival, sondern ein Familien- und Gemeinschaftsritual. Die Regel: <strong>Du bist Gast, nicht Publikum</strong>. Frag, bevor du Altäre oder maskierte Tänzer fotografierst; betritt Friedhöfe während der Totenwachen nur auf Einladung; kauf Essen und Kunsthandwerk direkt von den Familien. Und wenn dich eine Comparsa zum Tanzen auffordert — was oft passiert — sag ja.</p>

<h2>Praktisches</h2>
<ul>
<li><strong>Anreise:</strong> 4–5 Stunden Fahrt von der Hauptstadt; Ciudad Valles ist der Hub der Region.</li>
<li><strong>Früh buchen:</strong> Unterkünfte in Valles, Xilitla und Tamazunchale sind lange vor dem November-Wochenende voll.</li>
<li><strong>Wetter:</strong> Anfang November warm und feucht — Regenschutz einpacken.</li>
<li><strong>Kombinieren:</strong> Die Wasserfälle laufen auch im November — siehe das <a href="/blog/huasteca-potosina-itinerary-2026">Huasteca-Itinerar</a>.</li>
</ul>
` + faq('Häufige Fragen', [
  ['Wann ist Xantolo?', 'Die Kerntage sind jedes Jahr vom 31. Oktober bis 2. November; der weitere rituelle Zyklus beginnt am 29. September und endet am 30. November. Die Gemeindeprogramme erscheinen in den Wochen davor.'],
  ['Wo wird Xantolo gefeiert?', 'In der ganzen Huasteca Potosina: Tamazunchale, Axtla de Terrazas, Xilitla, Aquismón, Tancanhuitz, Ciudad Valles und weiteren Gemeinden — jede mit eigenen Masken- und Comparsa-Traditionen.'],
  ['Was ist Zacahuil?', 'Der riesige zeremonielle Tamal der Huasteca: grobe Maismasa mit Schwein oder Truthahn in Chile-Adobo, in Bananenblättern über Nacht im Holzofen gegart — während Xantolo zuerst als Opfergabe zubereitet.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'シャントロ（Xantolo）はウアステカ地方の死者の日。10月31日〜11月2日、ナワとテーネックの共同体がセンパスチルの祭壇アーチを立て、仮面の踊り手「ウエウエ」が村々を巡り、巨大な儀礼タマル「サカウィル」を供える。生きた家族の儀式であり、訪問者は観客ではなく招待客だ。') + `
<p class="text-lg text-gray-700 mb-6">メキシコの死者の日には多くの顔があるが、<strong>シャントロ</strong>ほど濃密で原型を保つものは少ない。名はラテン語の<em>sanctorum</em>がナワトル語を経て変化したもの。ウアステカ・ポトシーナの丘陵に暮らすナワとテーネックの家族にとって、この数日は魂が家に帰る日。アーチも料理も仮面も音楽も、すべては魂を迎えるためにある。</p>

<h2>何が行われるのか</h2>
<p>中心は<strong>10月31日〜11月2日</strong>（儀礼の周期は9月29日に始まり11月30日の最後の供物で閉じる）。家々はセンパスチル（マリーゴールド）とサトウキビの<strong>祭壇アーチ</strong>を組み、花びらの道が魂を導く。通りでは<strong>ウエウエ</strong>と呼ばれる仮面の踊り手たち（コンパルサ）がバイオリンとハラナの音色とともに巡る。木彫りの仮面は単なる衣装ではない——仮面で踊れば死は生者を見分けられない、と言い伝えられる。この伝統はメキシコ先住民の死者の祭りの一部としてUNESCO無形文化遺産に登録され（2008年）、州は2013年に州文化遺産に指定した。</p>

<h2>どこで体験するか</h2>
<p>「ルタ・シャントロ」沿いが最も濃い：<strong>タマスンチャレ、アシュトラ、シリトラ、アキスモン、タンカンウィッツ、シウダー・バジェス</strong>など。町ごとに仮面や踊りの個性がある。拠点づくりは<a href="/blog/huasteca-potosina-itinerary-2026">ウアステカ・イティネラリー</a>を、季節に合う<a href="/blog/xilitla-las-pozas-guide-2026">シリトラガイド</a>も参照。<em>2026年の公式プログラムは例年8月末〜10月に発表される。</em></p>

<h2>シャントロの食</h2>
<p>主役は<strong>サカウィル</strong>。1メートルを超え20〜50kgにもなる儀礼のタマルで、粗挽きマサと豚か七面鳥をチレのアドボで包み、バナナの葉にくるんで薪窯で一晩焼く。まず供物、それから食事だ。ほかにボリン、チルパンのタマル、祭壇で分け合うパン・デ・ムエルト、カフェ・デ・オジャ、アトレ。バジェスとシリトラの日曜市では年中サカウィルに会えるが、シャントロの季節は格別の意味を持つ。</p>

<h2>敬意をもって訪ねる</h2>
<p>ここが肝心だ。シャントロは観光用の祭りではなく、家族と共同体の生きた儀式。原則は<strong>「あなたは招待客であり、観客ではない」</strong>。祭壇や踊り手の撮影は許可を得てから。家族の夜伽（ベラシオン）の墓地には招かれない限り立ち入らない。料理や工芸品は作り手から直接買う。コンパルサに踊りへ誘われたら——よくあることだ——それが「はい」と言う瞬間だ。</p>
` + faq('よくある質問', [
  ['シャントロはいつ？', '毎年10月31日〜11月2日が中心。広義の儀礼周期は9月29日に始まり、11月30日の最後の供物で終わる。各自治体のプログラムは直前数週間で発表される。'],
  ['どこで祝われる？', 'ウアステカ・ポトシーナ全域。タマスンチャレ、アシュトラ、シリトラ、アキスモン、タンカンウィッツ、シウダー・バジェスなどで、町ごとに仮面や踊りの伝統が異なる。'],
  ['サカウィルとは？', 'ウアステカの巨大儀礼タマル。粗挽きマサと豚・七面鳥のアドボをバナナの葉で包み、薪窯で一晩焼く。シャントロではまず帰ってくる魂への供物として作られる。'],
]);

const row = {
  slug: 'xantolo-dia-de-muertos-huasteca-potosina',
  status: 'published',
  published_at: '2026-10-05T12:00:00+00:00',
  category: 'Cultural',
  tags: ['xantolo', 'dia-de-muertos', 'huasteca-potosina', 'culture', 'traditions', 'day-of-the-dead'],
  image_url: HERO,
  title: 'Xantolo: The Huasteca’s Day of the Dead, Explained',
  title_es: 'Xantolo: el Día de Muertos huasteco, explicado',
  title_de: 'Xantolo: Der Tag der Toten der Huasteca, erklärt',
  title_ja: 'シャントロ——ウアステカの死者の日を知る',
  excerpt: 'Marigold altar-arches, masked huehue dancers and the giant zacahuil tamal: what Xantolo is, where to experience it across the Huasteca Potosina (Oct 31–Nov 2), and how to visit as a respectful guest.',
  excerpt_es: 'Arcos de cempasúchil, huehues enmascarados y el zacahuil gigante: qué es Xantolo, dónde vivirlo en la Huasteca Potosina (31 oct–2 nov) y cómo visitarlo como invitado respetuoso.',
  excerpt_de: 'Cempasúchil-Bögen, maskierte Huehue-Tänzer und der riesige Zacahuil: Was Xantolo ist, wo man es in der Huasteca Potosina erlebt (31. Okt–2. Nov) und wie man respektvoll zu Gast ist.',
  excerpt_ja: 'センパスチルのアーチ、仮面のウエウエ、巨大タマル・サカウィル。シャントロとは何か、どこで体験できるか（10/31〜11/2）、敬意ある訪ね方を解説。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'Xantolo: The Huasteca’s Day of the Dead Guide',
  meta_title_es: 'Xantolo: guía del Día de Muertos huasteco',
  meta_title_de: 'Xantolo: Tag der Toten der Huasteca — Guide',
  meta_title_ja: 'シャントロ：ウアステカの死者の日ガイド',
  meta_description: 'Xantolo (Oct 31–Nov 2) in the Huasteca Potosina: marigold altar-arches, masked huehue comparsas, the giant zacahuil tamal, the towns where it runs deepest — and how to visit with respect.',
  meta_description_es: 'Xantolo (31 oct–2 nov) en la Huasteca Potosina: arcos de cempasúchil, comparsas de huehues, el zacahuil gigante, los pueblos donde late más fuerte y cómo visitarlo con respeto.',
  meta_description_de: 'Xantolo (31. Okt–2. Nov) in der Huasteca Potosina: Cempasúchil-Bögen, maskierte Comparsas, der riesige Zacahuil-Tamal, die wichtigsten Orte — und wie man respektvoll zu Gast ist.',
  meta_description_ja: '10/31〜11/2のウアステカ。祭壇アーチ、仮面の踊り、サカウィル、体験できる町と敬意ある訪問マナー。',
  discover_title: 'The masked Day of the Dead most tourists never see',
  discover_title_es: 'El Día de Muertos enmascarado que pocos turistas ven',
  discover_title_de: 'Der maskierte Tag der Toten, den kaum ein Tourist kennt',
  discover_title_ja: '観光客が知らない仮面の死者の日',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ inserted ${row.slug} (scheduled ${row.published_at})`);
