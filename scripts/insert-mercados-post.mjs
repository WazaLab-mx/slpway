import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Hero key is pre-agreed: generate + upload to this exact path when OpenAI billing is raised.
const HERO = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/mercados-san-luis-potosi-hero.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'For market eating in San Luis Potosí, start at Mercado Hidalgo (est. 1945, 450+ stalls, fondas upstairs): tacos rojos, enchiladas potosinas and Don Lorenzo’s wood-oven gorditas. Then Mercado República (est. 1976) for pozole, menudo and the city’s most popular market enchiladas, and Mercado La Merced (est. 1891) for gorditas and atole at breakfast. Go morning to lunch — stalls wind down by late afternoon.') + `
<p class="text-lg text-gray-700 mb-6">Restaurants are where a city performs; markets are where it actually eats. San Luis Potosí keeps three great public markets within reach of the Centro, each with its own century, its own saints and its own line for gorditas. Here’s the crawl, stop by stop.</p>

<h2>Mercado Hidalgo — the main event</h2>
<p>Two blocks from the Plaza de Armas, with entrances on Calle Miguel Hidalgo and Mier y Terán, <strong>Mercado Hidalgo</strong> opened on May 5, 1945 as the first purpose-built market in the city. Today it packs <strong>450+ stalls</strong>, with the fondas concentrated upstairs. What to eat: <strong>tacos rojos</strong>, <strong>enchiladas potosinas</strong>, flautas, tostadas and Huastecan plates with cecina. The signature stop is <strong>Don Lorenzo’s "Tradición de horno"</strong> — forty years of wood-oven gorditas, three hundred or so a day, stuffed with queso, rajas, mole or chicharrón. In the surrounding blocks, gorditas de canasta ran about $15 MXN each (2025 press reference) and the nearby Tortería Nueva builds tortas in the $115–175 range. Downstairs you can close the loop with artesanías potosinas before the food coma lands.</p>

<h2>Mercado República — the people’s kitchen</h2>
<p>North of the Centro at Av. Reforma 405, <strong>Mercado República</strong> opened in 1976 and marked its 50th anniversary in 2026. It’s the city’s working-class kitchen: fondas serving comida corrida, <strong>pozole</strong> and <strong>menudo</strong>, with the market’s <strong>enchiladas potosinas</strong> widely considered its most popular plate. Around the food, the full market ecosystem — produce, butchers, hierberías, crafts — plus a busy calendar of community and cultural events. Less touristy than Hidalgo, and that’s the point.</p>

<h2>Mercado La Merced — the elder</h2>
<p>Next to the Jardín Colón near the Calzada de Guadalupe, <strong>La Merced</strong> is the oldest of the three: inaugurated in <strong>1891</strong> on the grounds of the former La Merced convent (it carried the name "Mercado Tangamanga" for decades before recovering its original name in 2015). About 120 stalls survive, and the morning ritual is exact: <strong>gorditas and atole</strong> from the puestos at the entrances. Its fiesta lands every September 24, day of the Virgen de la Merced — the market at its liveliest.</p>

<h2>One warning and one rule</h2>
<p><strong>The warning:</strong> skip Mercado 16 de Septiembre as a food stop — local press documents it in steep decline, with only a stall or two of traditional food left among the second-hand goods. <strong>The rule:</strong> markets eat on market time. Prime hours are breakfast through lunch; by late afternoon the comals go quiet. Bring cash — cards are rare — and don’t be shy about sitting at whichever fonda has the most locals.</p>

<h2>Keep going</h2>
<p>Pair the crawl with our <a href="/blog/best-tacos-san-luis-potosi">taco guide</a> and the <a href="/blog/enchiladas-potosinas-historia-donde-comer">enchiladas potosinas story</a> — and for produce-and-tianguis shopping rather than prepared food, see the <a href="/farmers-markets-san-luis-potosi">farmers-markets guide</a>.</p>
` + faq('FAQ', [
  ['Which market in San Luis Potosí is best for food?', 'Mercado Hidalgo, two blocks from Plaza de Armas: 450+ stalls with fondas upstairs serving tacos rojos, enchiladas potosinas and Don Lorenzo’s forty-year wood-oven gorditas. Mercado República is the less touristy runner-up, famous for pozole, menudo and its enchiladas.'],
  ['What should I eat at Mercado Hidalgo?', 'The classics: tacos rojos, enchiladas potosinas, flautas and Huastecan plates with cecina — plus the wood-oven gorditas at "Tradición de horno". Gorditas de canasta around the market ran roughly $15 MXN each (2025 reference).'],
  ['When should I go to the markets?', 'Morning through lunch. The fondas are at full steam for breakfast and comida; by late afternoon most comals wind down. Bring cash — card acceptance is rare at traditional stalls.'],
  ['What is the oldest market in San Luis Potosí?', 'Mercado La Merced, inaugurated in 1891 on the grounds of the former La Merced convent, by the Jardín Colón. Known for breakfast gorditas and atole, it celebrates its fiesta every September 24.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'Para comer de mercado en San Luis Potosí, empieza en el Mercado Hidalgo (1945, 450+ locales, fondas arriba): tacos rojos, enchiladas potosinas y las gorditas de horno de Don Lorenzo. Sigue con el Mercado República (1976) para pozole, menudo y las enchiladas más populares del complejo, y el Mercado La Merced (1891) para gorditas con atole de desayuno. Ve de mañana a comida — por la tarde los comales se apagan.') + `
<p class="text-lg text-gray-700 mb-6">Los restaurantes son donde una ciudad se presenta; los mercados son donde de verdad come. San Luis Potosí conserva tres grandes mercados públicos al alcance del Centro, cada uno con su siglo, sus santos y su fila para las gorditas. Este es el recorrido, parada por parada.</p>

<h2>Mercado Hidalgo — el plato fuerte</h2>
<p>A dos cuadras de la Plaza de Armas, con entradas por la calle Miguel Hidalgo y Mier y Terán, el <strong>Mercado Hidalgo</strong> abrió el 5 de mayo de 1945 como el primer mercado construido ex profeso en la ciudad. Hoy reúne <strong>más de 450 locales</strong>, con las fondas concentradas en la planta alta. Qué comer: <strong>tacos rojos</strong>, <strong>enchiladas potosinas</strong>, flautas, tostadas y platillos huastecos con cecina. La parada insignia es <strong>"Tradición de horno" de Don Lorenzo</strong> — cuarenta años de gorditas de horno de leña, unas trescientas al día, de queso, rajas, mole o chicharrón. En las cuadras aledañas, las gorditas de canasta rondaban los $15 MXN (referencia de prensa 2025) y la Tortería Nueva arma tortas de $115–175. Abajo cierras el circuito con artesanías potosinas antes de que caiga el mal del puerco.</p>

<h2>Mercado República — la cocina del pueblo</h2>
<p>Al norte del Centro, en Av. Reforma 405, el <strong>Mercado República</strong> abrió en 1976 y celebró su 50 aniversario en 2026. Es la cocina obrera de la ciudad: fondas de comida corrida, <strong>pozole</strong> y <strong>menudo</strong>, con las <strong>enchiladas potosinas</strong> consideradas el platillo más popular del complejo. Alrededor de la comida, el ecosistema completo — frutas y verduras, carnicerías, hierberías, artesanía — más un calendario activo de eventos comunitarios y culturales. Menos turístico que el Hidalgo, y ese es justo el punto.</p>

<h2>Mercado La Merced — el decano</h2>
<p>Junto al Jardín Colón, cerca de la Calzada de Guadalupe, <strong>La Merced</strong> es el más antiguo de los tres: inaugurado en <strong>1891</strong> sobre el solar del exconvento de La Merced (cargó el nombre de "Mercado Tangamanga" durante décadas antes de recuperar el original en 2015). Sobreviven unos 120 locales, y el ritual matutino es exacto: <strong>gorditas y atole</strong> en los puestos de las entradas. Su fiesta cae cada 24 de septiembre, día de la Virgen de la Merced — el mercado en su punto más vivo.</p>

<h2>Una advertencia y una regla</h2>
<p><strong>La advertencia:</strong> no armes tu ruta alrededor del Mercado 16 de Septiembre — la prensa local lo documenta en franco declive, con apenas uno o dos puestos de comida tradicional entre la ropa de paca. <strong>La regla:</strong> los mercados comen en horario de mercado. Las horas buenas van del desayuno a la comida; para media tarde los comales se apagan. Lleva efectivo — la tarjeta es rara — y siéntate sin pena en la fonda con más locales.</p>

<h2>Sigue el recorrido</h2>
<p>Combina el crawl con nuestra <a href="/blog/best-tacos-san-luis-potosi">guía de tacos</a> y la <a href="/blog/enchiladas-potosinas-historia-donde-comer">historia de las enchiladas potosinas</a> — y para compra de productos y tianguis, la <a href="/farmers-markets-san-luis-potosi">guía de mercados y tianguis</a>.</p>
` + faq('Preguntas frecuentes', [
  ['¿Cuál es el mejor mercado para comer en San Luis Potosí?', 'El Mercado Hidalgo, a dos cuadras de la Plaza de Armas: más de 450 locales con fondas en la planta alta que sirven tacos rojos, enchiladas potosinas y las gorditas de horno de Don Lorenzo (40 años). El Mercado República es el subcampeón menos turístico, famoso por pozole, menudo y sus enchiladas.'],
  ['¿Qué comer en el Mercado Hidalgo?', 'Los clásicos: tacos rojos, enchiladas potosinas, flautas y platillos huastecos con cecina — más las gorditas de horno de "Tradición de horno". Las gorditas de canasta de los alrededores rondaban los $15 MXN (referencia 2025).'],
  ['¿A qué hora conviene ir a los mercados?', 'De la mañana a la comida. Las fondas están a todo vapor en desayuno y comida; a media tarde la mayoría de los comales se apaga. Lleva efectivo: la tarjeta es rara en puestos tradicionales.'],
  ['¿Cuál es el mercado más antiguo de San Luis Potosí?', 'El Mercado La Merced, inaugurado en 1891 sobre el solar del exconvento de La Merced, junto al Jardín Colón. Conocido por las gorditas con atole de desayuno, celebra su fiesta cada 24 de septiembre.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Für Markt-Essen in San Luis Potosí: Starte im Mercado Hidalgo (1945, 450+ Stände, Fondas im Obergeschoss) mit Tacos Rojos, Enchiladas Potosinas und Don Lorenzos Holzofen-Gorditas. Weiter zum Mercado República (1976) für Pozole, Menudo und die beliebtesten Markt-Enchiladas, dann Mercado La Merced (1891) für Gorditas mit Atole zum Frühstück. Geh morgens bis mittags — nachmittags kühlen die Comals ab.') + `
<p class="text-lg text-gray-700 mb-6">In Restaurants führt sich eine Stadt auf; auf Märkten isst sie wirklich. San Luis Potosí hält drei große öffentliche Märkte in Reichweite des Centro — jeder mit seinem eigenen Jahrhundert, seinen Heiligen und seiner Gordita-Schlange. Hier ist die Tour, Station für Station.</p>

<h2>Mercado Hidalgo — die Hauptattraktion</h2>
<p>Zwei Blocks von der Plaza de Armas (Eingänge Calle Miguel Hidalgo und Mier y Terán) eröffnete der <strong>Mercado Hidalgo</strong> am 5. Mai 1945 als erster eigens gebauter Markt der Stadt. Heute: <strong>450+ Stände</strong>, die Fondas oben. Essen: <strong>Tacos Rojos</strong>, <strong>Enchiladas Potosinas</strong>, Flautas und huastekische Teller mit Cecina. Pflichtstopp: <strong>Don Lorenzos "Tradición de horno"</strong> — seit vierzig Jahren Holzofen-Gorditas, rund dreihundert am Tag, mit Käse, Rajas, Mole oder Chicharrón. In den Nachbarblocks kosteten Gorditas de Canasta etwa 15 MXN (Pressereferenz 2025); die Tortería Nueva baut Tortas für 115–175 MXN.</p>

<h2>Mercado República — die Küche des Volkes</h2>
<p>Nördlich des Centro (Av. Reforma 405) eröffnete der <strong>Mercado República</strong> 1976 und feierte 2026 sein 50-jähriges Bestehen. Er ist die Arbeiterküche der Stadt: Fondas mit Comida Corrida, <strong>Pozole</strong> und <strong>Menudo</strong> — und die <strong>Enchiladas Potosinas</strong> gelten als beliebtestes Gericht des Komplexes. Drumherum das volle Marktleben: Obst, Metzger, Hierberías, Handwerk und ein aktiver Kulturkalender. Weniger touristisch als Hidalgo — und genau das ist der Punkt.</p>

<h2>Mercado La Merced — der Älteste</h2>
<p>Am Jardín Colón nahe der Calzada de Guadalupe: <strong>La Merced</strong>, eröffnet <strong>1891</strong> auf dem Gelände des ehemaligen Merced-Klosters (jahrzehntelang "Mercado Tangamanga", seit 2015 wieder der Originalname). Rund 120 Stände, und das Morgenritual ist präzise: <strong>Gorditas und Atole</strong> an den Eingangsständen. Sein Fest: jedes Jahr am 24. September, Tag der Virgen de la Merced.</p>

<h2>Eine Warnung, eine Regel</h2>
<p><strong>Warnung:</strong> Den Mercado 16 de Septiembre als Food-Stopp auslassen — die Lokalpresse dokumentiert starken Verfall mit kaum noch traditionellen Essensständen. <strong>Regel:</strong> Märkte essen nach Marktzeit. Beste Stunden: Frühstück bis Mittag; nachmittags wird es still. Bargeld mitnehmen — und setz dich in die Fonda mit den meisten Einheimischen.</p>

<h2>Weiter geht’s</h2>
<p>Kombiniere die Tour mit unserem <a href="/blog/best-tacos-san-luis-potosi">Taco-Guide</a> und der <a href="/blog/enchiladas-potosinas-historia-donde-comer">Geschichte der Enchiladas Potosinas</a> — für Einkauf und Tianguis siehe den <a href="/farmers-markets-san-luis-potosi">Märkte-Guide</a>.</p>
` + faq('Häufige Fragen', [
  ['Welcher Markt ist der beste zum Essen?', 'Der Mercado Hidalgo, zwei Blocks von der Plaza de Armas: 450+ Stände, Fondas im Obergeschoss mit Tacos Rojos, Enchiladas Potosinas und Don Lorenzos Holzofen-Gorditas. Weniger touristisch: der Mercado República mit Pozole, Menudo und seinen Enchiladas.'],
  ['Wann sollte man hingehen?', 'Morgens bis mittags — zum Frühstück und zur Comida laufen die Fondas auf Hochtouren, nachmittags kühlen die Comals ab. Bargeld mitnehmen; Karten sind an traditionellen Ständen selten.'],
  ['Was ist der älteste Markt der Stadt?', 'Der Mercado La Merced von 1891, am Jardín Colón auf dem Gelände des ehemaligen Merced-Klosters — bekannt für Frühstücks-Gorditas mit Atole und sein Fest am 24. September.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'サンルイスポトシの市場グルメは3本立て。イダルゴ市場（1945年創業・450店超、2階に食堂街）でタコス・ロホスとエンチラーダス、ドン・ロレンソの薪窯ゴルディータス。レプブリカ市場（1976年）でポソレとメヌード、ラ・メルセー市場（1891年）で朝のゴルディータスとアトレ。狙い目は朝〜昼、午後遅くには店じまいが始まる。') + `
<p class="text-lg text-gray-700 mb-6">レストランは街の「よそゆき」、市場は街の「素顔」だ。サンルイスポトシには歴史地区から歩ける3つの大市場があり、それぞれに異なる世紀の歴史と、ゴルディータスの行列がある。一軒ずつ巡ろう。</p>

<h2>イダルゴ市場——本命</h2>
<p>アルマス広場から2ブロック、<strong>イダルゴ市場</strong>は1945年5月5日開業、市初の本格市場建築だ。現在<strong>450超の店舗</strong>を抱え、食堂（フォンダ）は2階に集中。名物は<strong>タコス・ロホス</strong>、<strong>エンチラーダス・ポトシーナス</strong>、フラウタス、セシーナ添えのウアステカ料理。看板は<strong>ドン・ロレンソの「Tradición de horno」</strong>——薪窯ゴルディータス一筋40年、1日約300個（チーズ、ラハス、モーレ、チチャロン）。周辺ではかごのゴルディータスが1個約15ペソ（2025年報道値）、近くのトルテリア・ヌエバのトルタは115〜175ペソ。</p>

<h2>レプブリカ市場——庶民の台所</h2>
<p>中心部の北、Reforma通り405の<strong>レプブリカ市場</strong>は1976年開業、2026年に50周年を迎えた。コミダ・コリーダの食堂、<strong>ポソレ</strong>、<strong>メヌード</strong>が主役で、市場の<strong>エンチラーダス・ポトシーナス</strong>は一番人気とされる。青果、精肉、薬草店、工芸品と市場の生態系が丸ごと揃い、文化イベントも盛ん。イダルゴより観光色が薄いのが魅力だ。</p>

<h2>ラ・メルセー市場——最古参</h2>
<p>コロン公園そば、グアダルーペ参道近くの<strong>ラ・メルセー</strong>は3つの中で最古。<strong>1891年</strong>、旧メルセー修道院の跡地に開業した（長年「タンガマンガ市場」と呼ばれ、2015年に旧名復活）。現存約120店舗。朝の儀式は決まっている——入口の屋台で<strong>ゴルディータスとアトレ</strong>だ。毎年9月24日（メルセーの聖母の日）が市場の祭りで、一年で最も活気づく。</p>

<h2>注意と鉄則</h2>
<p><strong>注意</strong>：16de Septiembre市場は食のルートから外すこと。地元紙が衰退を報じており、伝統料理の屋台はわずかしか残らない。<strong>鉄則</strong>：市場は市場の時間で動く。朝食〜昼が黄金時間で、午後遅くにはコマルの火が落ちる。現金必携。一番地元客が多い食堂に迷わず座ろう。</p>

<h2>あわせて読む</h2>
<p><a href="/blog/best-tacos-san-luis-potosi">タコスガイド</a>と<a href="/blog/enchiladas-potosinas-historia-donde-comer">エンチラーダスの物語</a>、買い物なら<a href="/farmers-markets-san-luis-potosi">市場・ティアンギスガイド</a>へ。</p>
` + faq('よくある質問', [
  ['食べるならどの市場？', 'イダルゴ市場が本命。450店超、2階の食堂街でタコス・ロホス、エンチラーダス、薪窯ゴルディータスが揃う。観光色が薄い穴場はレプブリカ市場（ポソレとメヌードの名所）。'],
  ['何時に行くべき？', '朝〜昼。朝食と昼食の時間帯が最盛期で、午後遅くには多くの店が火を落とす。伝統的な屋台は現金のみが多い。'],
  ['最古の市場は？', '1891年開業のラ・メルセー市場。旧修道院跡地に建ち、朝のゴルディータスとアトレで知られる。祭りは毎年9月24日。'],
]);

const row = {
  slug: 'mercados-san-luis-potosi-guia-comer',
  status: 'draft', // flip to published once the hero image is generated
  published_at: new Date().toISOString(),
  category: 'Food & Drink',
  tags: ['mercados', 'markets', 'food', 'san-luis-potosi', 'street-food', 'centro-historico'],
  image_url: HERO,
  title: 'Market Food Crawl: Eating Through San Luis Potosí’s Mercados',
  title_es: 'Food crawl de mercados: comer por los mercados de San Luis Potosí',
  title_de: 'Markt-Food-Tour: Essen durch die Mercados von San Luis Potosí',
  title_ja: 'サンルイスポトシ市場グルメ巡り',
  excerpt: 'Three markets, three centuries: wood-oven gorditas at Hidalgo (1945), pozole and the city’s favorite enchiladas at República (1976), breakfast atole at La Merced (1891). The full crawl.',
  excerpt_es: 'Tres mercados, tres siglos: gorditas de horno en el Hidalgo (1945), pozole y las enchiladas favoritas de la ciudad en el República (1976), atole de desayuno en La Merced (1891). El recorrido completo.',
  excerpt_de: 'Drei Märkte, drei Jahrhunderte: Holzofen-Gorditas im Hidalgo (1945), Pozole und die Lieblings-Enchiladas der Stadt im República (1976), Frühstücks-Atole in La Merced (1891).',
  excerpt_ja: '3つの市場、3つの世紀。イダルゴの薪窯ゴルディータス、レプブリカのポソレ、ラ・メルセーの朝アトレ。完全食べ歩きルート。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'San Luis Potosí Market Food Guide: The Mercado Crawl',
  meta_title_es: 'Guía para comer en los mercados de San Luis Potosí',
  meta_title_de: 'Markt-Guide San Luis Potosí: Essen in den Mercados',
  meta_title_ja: 'サンルイスポトシの市場グルメガイド',
  meta_description: 'Eat through SLP’s three great markets: wood-oven gorditas at Hidalgo (1945), pozole and enchiladas at República, breakfast atole at La Merced (1891). When to go and what to order.',
  meta_description_es: 'Come por los tres grandes mercados de SLP: gorditas de horno en el Hidalgo (1945), pozole y enchiladas en el República, atole de desayuno en La Merced (1891). Cuándo ir y qué pedir.',
  meta_description_de: 'Durch SLPs drei große Märkte essen: Holzofen-Gorditas im Hidalgo (1945), Pozole und Enchiladas im República, Frühstücks-Atole in La Merced (1891). Wann hin und was bestellen.',
  meta_description_ja: 'イダルゴ、レプブリカ、ラ・メルセー。SLP三大市場の名物と行くべき時間帯、注文のコツを解説。',
  discover_title: 'Three markets, one stomach: SLP’s mercado crawl',
  discover_title_es: 'Tres mercados y un solo estómago: el crawl de SLP',
  discover_title_de: 'Drei Märkte, ein Magen: die Mercado-Tour durch SLP',
  discover_title_ja: '胃袋ひとつで挑む三大市場めぐり',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ drafted ${row.slug}`);
