import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Hero key is pre-agreed: generate + upload to this exact path when OpenAI billing is raised.
const HERO = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/antojitos-potosinos-hero.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

const entry = (name, meta, body) =>
  `<div class="bg-white border border-gray-200 rounded-xl p-6 mb-4"><h3 class="text-xl font-bold text-gray-900 mb-1">${name}</h3><p class="text-sm text-blue-600 font-medium mb-3">${meta}</p><p class="text-gray-700">${body}</p></div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'San Luis Potosí’s essential antojitos: enchiladas potosinas and tacos rojos in the capital; zacahuil, bocoles and patlache in the Huasteca; queso de tuna, colonche (in season July–October) and cabuches from the Altiplano desert; gorditas de horno, chancaquillas from Rioverde and century-old Costanzo chocolate. This glossary tells you what each one is, where it comes from and when to find it.') + `
<p class="text-lg text-gray-700 mb-6">San Luis Potosí is four regions pretending to be one state, and its snacks prove it: jungle tamales the size of a person, desert candy made from cactus fruit, red-stained tacos, a fermented drink that only exists a few months a year. Consider this your field guide — from the market stall to the roadside dulcería.</p>

<h2>From the capital and the Centro</h2>
` + entry('Enchiladas potosinas', 'the icon · capital & Soledad · all year', 'Chile-kneaded masa folded over cheese, comal-cooked, then fried — invented in Soledad around 1919. The full story (and the two competing legends) is in our <a href="/blog/enchiladas-potosinas-historia-donde-comer">deep-dive</a>.')
+ entry('Tacos rojos / tacos potosinos', 'street icon · capital · all year', 'Guajillo-bathed, lightly fried tortillas stuffed with cheese and buried under stewed potatoes, carrots, lettuce, crema and cueritos. Where to eat them: our <a href="/blog/best-tacos-san-luis-potosi">taco guide</a>.')
+ entry('Gorditas de horno & de maíz quebrado', 'the "ranch hamburger" · capital, Morales & Saucito · all year', 'Two families: wood-oven gorditas — the Mercado Hidalgo stand has half a century of practice — and thick cracked-corn gorditas stuffed with picadillo, rajas, nopalitos or chicharrón, a specialty of the Morales and Saucito barrios. Their sweet cousins, condoches, show up at the same ovens.')
+ entry('Fiambre potosino', 'festive cold plate · capital · Day of the Dead season', 'A chilled plate of tongue, pickled pig trotters and shredded chicken over dressed vegetables — the state’s traditional Día de Muertos dish.')
+ entry('Caldo loco', 'the "crazy broth" · capital & Zona Media', 'Chicken broth that breaks the rules: vegetables plus fruit — pineapple, apple, plantain — with serrano heat. The sweet-savory clash earned the name.') + `

<h2>From the Huasteca</h2>
` + entry('Zacahuil', 'the giant tamal · Huasteca · Sundays & fiestas', 'Coarse masa, pork or turkey, chile adobo, banana leaf, wood-fired overnight — often over a meter long and 20–50 kg. Find it Sunday mornings at the markets of Ciudad Valles and Xilitla (arrive before 10 am), or year-round at Rincón Huasteco in the capital.')
+ entry('Bocoles', 'Huasteca breakfast · all year', 'Teenek for "round corn food": lard-enriched masa rounds crisped on the comal, split and stuffed with queso, egg, chicharrón or frijoles. Pintos carry black beans; verdes carry epazote.')
+ entry('Patlache', 'the other big tamal · Huasteca · fiestas', 'Zacahuil’s lesser-known sibling — another large ceremonial tamal of the Huasteca, listed among the state’s traditional dishes.') + `

<h2>From the Altiplano desert</h2>
` + entry('Queso de tuna', 'cactus-fruit "cheese" · Altiplano · summer–autumn harvest', 'No dairy involved: cardona prickly-pear pulp boiled in copper, beaten and molded into a dense, dark sweet. Prehispanic roots with the desert’s Guachichil people; found in dulcerías and markets statewide.')
+ entry('Colonche', 'fermented tuna drink · Altiplano · July–October only', 'A roughly 2,000-year-old lightly alcoholic ferment of cardona tuna juice, made only while the fruit lasts — one of Mexico’s endangered traditional drinks. If you see it, drink it: the season is now or never.')
+ entry('Cabuches', '"desert chicks" · Altiplano & Real de Catorce · March–May', 'The flower buds of the red biznaga cactus, boiled and dressed with garlic and onion — a Lenten classic around <a href="/blog/real-de-catorce-guide-2026">Real de Catorce</a>. The biznaga is a protected species, so responsibly harvested is the only acceptable kind.') + `

<h2>Sweets with a century of history</h2>
` + entry('Chocolate potosino', 'Costanzo & La Frontera · capital · all year', 'SLP has two historic chocolate houses. Costanzo — founded in September 1930 by Italian immigrant José Costanzo — grew from a stand by the Plaza de Armas into the state’s sweetest institution; La Frontera is its historic rival. A box of chocolates Costanzo remains the default potosino gift.')
+ entry('Chancaquillas', 'pumpkin-seed brittle · Rioverde, Zona Media · all year', 'Pepitas set in piloncillo syrup with cinnamon and anise — palanqueta’s country cousin, tied to Rioverde in the Zona Media.') + `

<h2>Where to start</h2>
<p>The efficient route: a market morning for gorditas and tacos rojos (<a href="/blog/best-tacos-san-luis-potosi">taco guide</a>), an enchiladas pilgrimage to Soledad (<a href="/blog/enchiladas-potosinas-historia-donde-comer">the story</a>), a dulcería stop for queso de tuna and Costanzo — and if your trip reaches the Huasteca, Sunday zacahuil via the <a href="/blog/huasteca-potosina-itinerary-2026">itinerary</a>.</p>
` + faq('FAQ', [
  ['What food is San Luis Potosí famous for?', 'Enchiladas potosinas and tacos rojos in the capital; zacahuil, bocoles and patlache in the Huasteca; queso de tuna, colonche and cabuches from the Altiplano desert; and century-old Costanzo chocolate. Each region of the state contributes its own antojitos.'],
  ['What is queso de tuna?', 'A dairy-free sweet from the Altiplano: cardona prickly-pear pulp boiled down in copper pots, beaten and molded into a dense dark paste. Its roots go back to the desert’s prehispanic Guachichil people.'],
  ['What is colonche and when can I try it?', 'A lightly alcoholic ferment of cardona tuna juice, around 2,000 years old, produced only during the fruit’s season — roughly July to October. It is considered an endangered traditional drink, so in-season is the only time to find it.'],
  ['What are cabuches?', 'The flower buds of the red biznaga cactus, a spring (March–May) Lenten delicacy of the Altiplano, boiled and dressed with garlic and onion. The biznaga is a protected species — buy only responsibly harvested ones.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'Los antojitos esenciales de San Luis Potosí: enchiladas potosinas y tacos rojos en la capital; zacahuil, bocoles y patlache en la Huasteca; queso de tuna, colonche (en temporada julio–octubre) y cabuches del desierto del Altiplano; gorditas de horno, chancaquillas de Rioverde y el chocolate Costanzo con casi un siglo de historia. Este glosario te dice qué es cada uno, de dónde viene y cuándo encontrarlo.') + `
<p class="text-lg text-gray-700 mb-6">San Luis Potosí son cuatro regiones fingiendo ser un solo estado, y sus antojitos lo demuestran: tamales de selva del tamaño de una persona, dulces de desierto hechos de fruta de cactus, tacos teñidos de rojo, una bebida fermentada que solo existe unos meses al año. Considera esto tu guía de campo — del puesto de mercado a la dulcería de carretera.</p>

<h2>De la capital y el Centro</h2>
` + entry('Enchiladas potosinas', 'el ícono · capital y Soledad · todo el año', 'Masa amasada con chile, doblada sobre queso, cocida en comal y luego frita — inventadas en Soledad hacia 1919. La historia completa (y las dos leyendas en competencia) está en nuestro <a href="/blog/enchiladas-potosinas-historia-donde-comer">deep-dive</a>.')
+ entry('Tacos rojos / tacos potosinos', 'ícono callejero · capital · todo el año', 'Tortillas bañadas en guajillo, semifritas, rellenas de queso y sepultadas bajo papas y zanahorias guisadas, lechuga, crema y cueritos. Dónde comerlos: nuestra <a href="/blog/best-tacos-san-luis-potosi">guía de tacos</a>.')
+ entry('Gorditas de horno y de maíz quebrado', 'la "hamburguesa de rancho" · capital, Morales y Saucito · todo el año', 'Dos familias: las de horno de leña — el puesto del Mercado Hidalgo lleva medio siglo de práctica — y las gruesas de maíz quebrado rellenas de picadillo, rajas, nopalitos o chicharrón, especialidad de los barrios de Morales y el Saucito. Sus primas dulces, los condoches, salen de los mismos hornos.')
+ entry('Fiambre potosino', 'plato frío festivo · capital · temporada de Muertos', 'Un plato frío de lengua, patitas de puerco en vinagre y pollo deshebrado sobre verduras aderezadas — el platillo tradicional de Día de Muertos del estado.')
+ entry('Caldo loco', 'el caldo que rompe reglas · capital y Zona Media', 'Caldo de pollo con verduras Y fruta — piña, manzana, plátano macho — más chile serrano. El choque dulce-salado le ganó el nombre.') + `

<h2>De la Huasteca</h2>
` + entry('Zacahuil', 'el tamal gigante · Huasteca · domingos y fiestas', 'Masa martajada, cerdo o guajolote, adobo de chiles, hoja de plátano, horno de leña toda la noche — a menudo más de un metro y 20–50 kg. Búscalo los domingos por la mañana en los mercados de Ciudad Valles y Xilitla (llega antes de las 10), o todo el año en el Rincón Huasteco de la capital.')
+ entry('Bocoles', 'desayuno huasteco · todo el año', 'Del tének "alimento redondo de maíz": discos de masa con manteca dorados al comal, abiertos y rellenos de queso, huevo, chicharrón o frijoles. Los pintos llevan frijol negro; los verdes, epazote.')
+ entry('Patlache', 'el otro tamal grande · Huasteca · fiestas', 'El hermano menos conocido del zacahuil — otro gran tamal ceremonial huasteco, registrado entre los platillos tradicionales del estado.') + `

<h2>Del desierto del Altiplano</h2>
` + entry('Queso de tuna', '"queso" de fruta de cactus · Altiplano · cosecha verano-otoño', 'Sin una gota de leche: pulpa de tuna cardona hervida en cazo de cobre, batida y moldeada en un dulce denso y oscuro. Raíces prehispánicas con los guachichiles del desierto; se encuentra en dulcerías y mercados de todo el estado.')
+ entry('Colonche', 'fermentado de tuna · Altiplano · solo julio–octubre', 'Un fermento ligeramente alcohólico de jugo de tuna cardona con unos 2,000 años de historia, elaborado solo mientras dura la fruta — una de las bebidas tradicionales de México en riesgo de desaparecer. Si lo ves, tómalo: la temporada es ahora o nunca.')
+ entry('Cabuches', 'los "pollitos del desierto" · Altiplano y Real de Catorce · marzo–mayo', 'Los botones florales de la biznaga roja, hervidos y guisados con ajo y cebolla — clásico de Cuaresma alrededor de <a href="/blog/real-de-catorce-guide-2026">Real de Catorce</a>. La biznaga es especie protegida: la única versión aceptable es la recolectada responsablemente.') + `

<h2>Dulces con un siglo de historia</h2>
` + entry('Chocolate potosino', 'Costanzo y La Frontera · capital · todo el año', 'SLP tiene dos chocolateras históricas. Costanzo — fundada en septiembre de 1930 por el inmigrante italiano José Costanzo — creció de un puesto junto a la Plaza de Armas a la institución más dulce del estado; La Frontera es su rival histórica. Una caja de Costanzo sigue siendo el regalo potosino por default.')
+ entry('Chancaquillas', 'palanqueta de pepita · Rioverde, Zona Media · todo el año', 'Pepitas de calabaza cuajadas en miel de piloncillo con canela y anís — la prima ranchera de la palanqueta, ligada a Rioverde en la Zona Media.') + `

<h2>Por dónde empezar</h2>
<p>La ruta eficiente: una mañana de mercado para gorditas y tacos rojos (<a href="/blog/best-tacos-san-luis-potosi">guía de tacos</a>), la peregrinación de las enchiladas a Soledad (<a href="/blog/enchiladas-potosinas-historia-donde-comer">la historia</a>), una parada de dulcería por queso de tuna y Costanzo — y si tu viaje llega a la Huasteca, zacahuil dominical vía el <a href="/blog/huasteca-potosina-itinerary-2026">itinerario</a>.</p>
` + faq('Preguntas frecuentes', [
  ['¿Qué comida es típica de San Luis Potosí?', 'Enchiladas potosinas y tacos rojos en la capital; zacahuil, bocoles y patlache en la Huasteca; queso de tuna, colonche y cabuches del Altiplano; y el chocolate Costanzo con casi un siglo. Cada región del estado aporta sus propios antojitos.'],
  ['¿Qué es el queso de tuna?', 'Un dulce sin lácteos del Altiplano: pulpa de tuna cardona hervida en cazo de cobre, batida y moldeada en una pasta densa y oscura. Sus raíces se remontan a los guachichiles prehispánicos del desierto.'],
  ['¿Qué es el colonche y cuándo se puede probar?', 'Un fermento ligeramente alcohólico de jugo de tuna cardona, con unos 2,000 años de historia, producido solo en temporada de la fruta — aproximadamente de julio a octubre. Se le considera una bebida tradicional en riesgo, así que en temporada es el único momento de encontrarlo.'],
  ['¿Qué son los cabuches?', 'Los botones florales de la biznaga roja, manjar cuaresmal del Altiplano (marzo–mayo), hervidos y guisados con ajo y cebolla. La biznaga es especie protegida — compra solo los de recolección responsable.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Die essenziellen Antojitos von San Luis Potosí: Enchiladas Potosinas und Tacos Rojos in der Hauptstadt; Zacahuil, Bocoles und Patlache in der Huasteca; Queso de Tuna, Colonche (Saison Juli–Oktober) und Cabuches aus der Altiplano-Wüste; dazu Holzofen-Gorditas, Chancaquillas aus Rioverde und Costanzo-Schokolade mit fast hundert Jahren Geschichte.') + `
<p class="text-lg text-gray-700 mb-6">San Luis Potosí ist vier Regionen im Kostüm eines Bundesstaats — und seine Snacks beweisen es: mannsgroße Dschungel-Tamales, Wüstensüßigkeiten aus Kaktusfrucht, rot gefärbte Tacos und ein fermentiertes Getränk, das nur wenige Monate im Jahr existiert. Dies ist dein Feldführer.</p>

<h2>Aus der Hauptstadt</h2>
` + entry('Enchiladas Potosinas', 'die Ikone · Hauptstadt & Soledad · ganzjährig', 'Chili im Maisteig, über Käse gefaltet, auf dem Comal gegart, dann frittiert — um 1919 in Soledad erfunden. Die ganze Geschichte im <a href="/blog/enchiladas-potosinas-historia-donde-comer">Deep-Dive</a>.')
+ entry('Tacos Rojos', 'Straßen-Ikone · Hauptstadt · ganzjährig', 'In Guajillo getauchte, kurz frittierte Tortillas mit Käse, unter Kartoffeln, Karotten, Salat, Crema und Cueritos. Die Adressen: unser <a href="/blog/best-tacos-san-luis-potosi">Taco-Guide</a>.')
+ entry('Gorditas de Horno & de Maíz Quebrado', 'die "Ranch-Burger" · Hauptstadt, Morales & Saucito', 'Holzofen-Gorditas (der Stand im Mercado Hidalgo übt seit einem halben Jahrhundert) und dicke Gorditas aus geschrotetem Mais mit Picadillo, Rajas oder Chicharrón — Spezialität der Viertel Morales und Saucito.')
+ entry('Fiambre Potosino', 'festliche kalte Platte · Día-de-Muertos-Zeit', 'Zunge, eingelegte Schweinsfüße und Hähnchen über angemachtem Gemüse — das traditionelle Totenfest-Gericht des Staates.')
+ entry('Caldo Loco', 'die "verrückte Brühe" · Hauptstadt & Zona Media', 'Hühnerbrühe mit Gemüse UND Obst — Ananas, Apfel, Kochbanane — plus Serrano-Schärfe.') + `

<h2>Aus der Huasteca</h2>
` + entry('Zacahuil', 'der Riesen-Tamal · Huasteca · sonntags & Feste', 'Grobe Masa, Schwein oder Truthahn, Chile-Adobo, Bananenblatt, über Nacht im Holzofen — oft über einen Meter lang. Sonntagmorgens auf den Märkten von Ciudad Valles und Xilitla (vor 10 Uhr!), ganzjährig im Rincón Huasteco der Hauptstadt.')
+ entry('Bocoles', 'huastekisches Frühstück · ganzjährig', 'Teenek für "rundes Maisessen": Schmalz-Maisfladen vom Comal, gefüllt mit Käse, Ei, Chicharrón oder Bohnen.')
+ entry('Patlache', 'der andere große Tamal · Huasteca · Feste', 'Der weniger bekannte Bruder des Zacahuil — ebenfalls ein großer zeremonieller Tamal der Huasteca.') + `

<h2>Aus der Altiplano-Wüste</h2>
` + entry('Queso de Tuna', 'Kaktusfrucht-"Käse" · Altiplano · Sommer–Herbst', 'Ganz ohne Milch: Cardona-Kaktusfeigenmark, im Kupferkessel eingekocht, geschlagen und geformt. Prähispanische Wurzeln bei den Guachichiles der Wüste.')
+ entry('Colonche', 'fermentierter Tuna-Trunk · nur Juli–Oktober', 'Ein rund 2.000 Jahre altes, leicht alkoholisches Ferment aus Cardona-Tunasaft — nur solange die Frucht trägt. Eines der gefährdeten Traditionsgetränke Mexikos: Wenn du es siehst, trink es.')
+ entry('Cabuches', '"Wüstenküken" · Altiplano & Real de Catorce · März–Mai', 'Die Blütenknospen der roten Biznaga, gekocht und mit Knoblauch und Zwiebel angemacht — Fastenzeit-Klassiker um <a href="/blog/real-de-catorce-guide-2026">Real de Catorce</a>. Die Biznaga ist geschützt: nur verantwortungsvoll geerntete kaufen.') + `

<h2>Süßes mit Geschichte</h2>
` + entry('Potosinische Schokolade', 'Costanzo & La Frontera · Hauptstadt', 'Zwei historische Schokoladenhäuser: Costanzo — 1930 vom italienischen Einwanderer José Costanzo gegründet — und der historische Rivale La Frontera. Eine Schachtel Costanzo ist DAS potosinische Mitbringsel.')
+ entry('Chancaquillas', 'Kürbiskern-Krokant · Rioverde', 'Pepitas in Piloncillo-Sirup mit Zimt und Anis — die ländliche Cousine der Palanqueta, verwurzelt in Rioverde.') + `

<h2>Wo anfangen</h2>
<p>Die effiziente Route: ein Marktmorgen für Gorditas und Tacos Rojos (<a href="/blog/best-tacos-san-luis-potosi">Taco-Guide</a>), die Enchilada-Pilgerfahrt nach Soledad (<a href="/blog/enchiladas-potosinas-historia-donde-comer">die Geschichte</a>), ein Dulcería-Stopp für Queso de Tuna und Costanzo — und in der Huasteca der Sonntags-Zacahuil via <a href="/blog/huasteca-potosina-itinerary-2026">Itinerar</a>.</p>
` + faq('Häufige Fragen', [
  ['Wofür ist die Küche von San Luis Potosí bekannt?', 'Enchiladas Potosinas und Tacos Rojos in der Hauptstadt; Zacahuil, Bocoles und Patlache in der Huasteca; Queso de Tuna, Colonche und Cabuches aus der Altiplano-Wüste; dazu die fast hundertjährige Costanzo-Schokolade.'],
  ['Was ist Queso de Tuna?', 'Eine milchfreie Süßigkeit aus dem Altiplano: Cardona-Kaktusfeigenmark, im Kupferkessel eingekocht und zu einer dichten dunklen Paste geformt — mit prähispanischen Wurzeln.'],
  ['Was ist Colonche?', 'Ein leicht alkoholisches Ferment aus Cardona-Tunasaft, rund 2.000 Jahre alt, nur zur Fruchtsaison (etwa Juli–Oktober) hergestellt — eines der gefährdeten Traditionsgetränke Mexikos.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'サンルイスポトシ必食のアントヒートス：州都のエンチラーダス・ポトシーナスとタコス・ロホス、ウアステカのサカウィル・ボコーレス・パトラチェ、アルティプラーノ砂漠のケソ・デ・トゥナ、コロンチェ（7〜10月限定）、カブーチェス。さらに薪窯ゴルディータス、リオベルデのチャンカキージャス、創業約100年のコスタンソのチョコレートまで。この用語集で全部わかる。') + `
<p class="text-lg text-gray-700 mb-6">サンルイスポトシは「4つの地域がひとつの州のふりをしている」土地だ。人の背丈ほどのジャングルのタマル、サボテンの実の砂漠菓子、赤く染まるタコス、年に数ヶ月しか存在しない発酵飲料——市場の屋台から街道の菓子屋まで、これがフィールドガイドだ。</p>

<h2>州都から</h2>
` + entry('エンチラーダス・ポトシーナス', '州の象徴 · 州都とソレダード · 通年', 'チリを練り込んだ生地でチーズを包み、コマルで焼いてから揚げる。1919年頃ソレダード生まれ。<a href="/blog/enchiladas-potosinas-historia-donde-comer">深掘り記事</a>で二つの起源伝説を紹介。')
+ entry('タコス・ロホス', '路上の象徴 · 州都 · 通年', 'グアヒージョに浸して揚げたトルティーヤに野菜とクエリートスを山盛り。名店は<a href="/blog/best-tacos-san-luis-potosi">タコスガイド</a>へ。')
+ entry('ゴルディータス（薪窯／粗挽き）', '「田舎のハンバーガー」 · 州都・モラレス・サウシート', '薪窯焼き（イダルゴ市場の店は半世紀選手）と、粗挽きトウモロコシの厚焼きにピカディージョやチチャロンを詰めた2系統。甘いコンドチェスも同じ窯から。')
+ entry('フィアンブレ・ポトシーノ', '祝祭の冷菜 · 死者の日の季節', 'タン、酢漬け豚足、裂き鶏肉を野菜に載せた冷製プレート。州の死者の日の伝統料理。')
+ entry('カルド・ロコ', '「狂ったスープ」 · 州都・ソナメディア', '鶏スープに野菜と果物（パイナップル、リンゴ、調理バナナ）とセラーノ。甘塩の衝突が名前の由来。') + `

<h2>ウアステカから</h2>
` + entry('サカウィル', '巨大タマル · ウアステカ · 日曜と祭り', '粗挽きマサと豚か七面鳥、チレのアドボ、バナナの葉、薪窯で一晩。1メートル超・20〜50kgにも。シウダー・バジェスとシリトラの日曜朝市（10時前）か、州都のリンコン・ウアステコで通年。')
+ entry('ボコーレス', 'ウアステカの朝食 · 通年', 'テーネック語で「丸いトウモロコシの食べ物」。ラード入り生地を焼き、チーズや卵、チチャロンを挟む。')
+ entry('パトラチェ', 'もう一つの大タマル · ウアステカ', 'サカウィルの弟分。ウアステカの大型儀礼タマルとして州の伝統食に数えられる。') + `

<h2>アルティプラーノ砂漠から</h2>
` + entry('ケソ・デ・トゥナ', 'サボテン果実の「チーズ」 · 夏〜秋の収穫期', '乳製品ゼロ。カルドナ種のウチワサボテンの果肉を銅鍋で煮詰めて成形した濃厚な菓子。砂漠のグアチチル族に遡る先スペイン期の伝統。')
+ entry('コロンチェ', 'トゥナの発酵飲料 · 7〜10月限定', '約2,000年の歴史を持つ微アルコール発酵飲料。果実のある間しか造れず、消滅危機にある伝統の一つ。見つけたら飲むべし——今が唯一の季節だ。')
+ entry('カブーチェス', '「砂漠のひよこ」 · 3〜5月', '赤いビスナガ・サボテンの花蕾。ニンニクと玉ねぎで煮る四旬節の味。<a href="/blog/real-de-catorce-guide-2026">レアル・デ・カトルセ</a>周辺の名物。ビスナガは保護種のため、責任ある採取のもののみを。') + `

<h2>百年の甘味</h2>
` + entry('ポトシのチョコレート', 'コスタンソとラ・フロンテーラ · 州都', '1930年創業のコスタンソ（イタリア移民ホセ・コスタンソが創業）と老舗ラ・フロンテーラの二大チョコレート店。コスタンソの箱詰めは定番の土産だ。')
+ entry('チャンカキージャス', 'カボチャの種の飴菓子 · リオベルデ', 'ペピータをピロンシージョの蜜とシナモン、アニスで固めた、パランケータの田舎の従姉妹。') + `

<h2>どこから始めるか</h2>
<p>効率ルート：市場の朝でゴルディータスとタコス・ロホス（<a href="/blog/best-tacos-san-luis-potosi">タコスガイド</a>）→ソレダードへエンチラーダス詣で（<a href="/blog/enchiladas-potosinas-historia-donde-comer">物語</a>）→菓子屋でケソ・デ・トゥナとコスタンソ→ウアステカまで足を延ばすなら<a href="/blog/huasteca-potosina-itinerary-2026">イティネラリー</a>で日曜のサカウィルを。</p>
` + faq('よくある質問', [
  ['サンルイスポトシの名物料理は？', '州都のエンチラーダス・ポトシーナスとタコス・ロホス、ウアステカのサカウィルとボコーレス、砂漠のケソ・デ・トゥナ、コロンチェ、カブーチェス、そして約100年のコスタンソのチョコレート。'],
  ['ケソ・デ・トゥナとは？', '乳製品を使わないアルティプラーノの菓子。カルドナ種サボテンの果肉を銅鍋で煮詰めた濃厚な甘味で、先スペイン期の砂漠の民に由来する。'],
  ['コロンチェはいつ飲める？', 'カルドナの実の季節（およそ7〜10月）だけ造られる約2,000年の歴史を持つ微アルコール発酵飲料。消滅危機の伝統なので、季節に出会えたら迷わず試そう。'],
]);

const row = {
  slug: 'antojitos-potosinos-a-z',
  status: 'draft', // flip to published once the hero image is generated
  published_at: new Date().toISOString(),
  category: 'Food & Drink',
  tags: ['antojitos', 'food', 'san-luis-potosi', 'huasteca', 'altiplano', 'gastronomy', 'street-food'],
  image_url: HERO,
  title: 'Antojitos Potosinos A–Z: The Definitive Snack Glossary of SLP',
  title_es: 'Antojitos potosinos de la A a la Z: el glosario definitivo de SLP',
  title_de: 'Antojitos Potosinos von A–Z: das Snack-Glossar von SLP',
  title_ja: 'ポトシ名物アントヒートスA-Z',
  excerpt: 'From zacahuil to queso de tuna, bocoles to colonche: every antojito worth knowing across SLP’s four regions — what it is, where it’s from and when to find it.',
  excerpt_es: 'Del zacahuil al queso de tuna, de los bocoles al colonche: todos los antojitos que vale la pena conocer en las cuatro regiones de SLP — qué son, de dónde vienen y cuándo encontrarlos.',
  excerpt_de: 'Vom Zacahuil bis zum Queso de Tuna, von Bocoles bis Colonche: alle Antojitos der vier Regionen SLPs — was sie sind, woher sie kommen und wann man sie findet.',
  excerpt_ja: 'サカウィルからケソ・デ・トゥナ、ボコーレスからコロンチェまで。SLP4地域の名物を「何か・どこか・いつか」で解説する決定版用語集。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'Antojitos Potosinos A–Z: SLP’s Snack Glossary',
  meta_title_es: 'Antojitos potosinos A–Z: el glosario de SLP',
  meta_title_de: 'Antojitos Potosinos A–Z: das Glossar von SLP',
  meta_title_ja: 'ポトシ名物アントヒートスA-Z',
  meta_description: 'Zacahuil, bocoles, queso de tuna, colonche, cabuches, chancaquillas: what each potosino antojito is, which region makes it and the season to catch it.',
  meta_description_es: 'Zacahuil, bocoles, queso de tuna, colonche, cabuches, chancaquillas: qué es cada antojito potosino, qué región lo hace y en qué temporada atraparlo.',
  meta_description_de: 'Zacahuil, Bocoles, Queso de Tuna, Colonche, Cabuches, Chancaquillas: was jeder Antojito ist, welche Region ihn macht und wann Saison ist.',
  meta_description_ja: 'サカウィル、ボコーレス、ケソ・デ・トゥナ、コロンチェ…各名物の正体と産地、旬を一挙解説。',
  discover_title: 'A drink that exists 4 months a year — and 12 more SLP treats',
  discover_title_es: 'La bebida que existe 4 meses al año — y 12 manjares más de SLP',
  discover_title_de: 'Ein Getränk, das nur 4 Monate existiert — und 12 weitere Schätze',
  discover_title_ja: '年に4ヶ月しか存在しない酒と12の珍味',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ drafted ${row.slug}`);
