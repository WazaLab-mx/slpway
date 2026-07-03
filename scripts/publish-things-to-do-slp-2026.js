// Publishes "50 Things to Do in San Luis Potosí (2026 Local's Guide)" — the
// evergreen hub post for the "things to do in san luis potosi" query (SEO gap #2).
// Modeled on publish-day-trips-slp.js (upsert by slug, FAQPage JSON-LD, 4-locale
// metas, de/ja mirror EN content). Facts reused from our fact-checked posts
// (public/factchecks/*.md) plus fresh July-2026 verifications: Museo Leonora
// Carrington MX$55 / free Wed / Tue-Sun 10-18 (leonoracarringtonmuseo.org),
// Museo Nacional de la Máscara MX$20 (museonacionaldelamascaraslp.com.mx),
// Museo Federico Silva MX$30 / free Sun / closed Tue (museofedericosilva.org),
// Teatro de la Paz 1889-1894 / José Noriega / dome from Paris (Wikipedia ES,
// El Universal SLP, turismo.slp.gob.mx). Cautions applied: no huapango-UNESCO
// claim, tranvía prices flagged variable, Procesión founding year kept vague
// ("mid-1950s", contested 1953-55), no gorditas-street naming claim.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'things-to-do-san-luis-potosi-2026';

// Each section: { en, es, items: [[num, titleEn, titleEs, bodyEn, bodyEs]] }
const SECTIONS = [
  {
    en: 'Centro Histórico & architecture',
    es: 'Centro Histórico y arquitectura',
    items: [
      ['1', 'Walk the pedestrian heart of the Centro', 'Camina el corazón peatonal del Centro',
        "Roughly 3 km of pedestrian streets — Calzada de Guadalupe, Zaragoza and Hidalgo — thread a colonial core that UNESCO inscribed in 2010 as part of the Camino Real de Tierra Adentro World Heritage route. It's the single best free activity in the city, and our <a href='/centro-historico' class='text-orange-600 underline font-semibold'>Centro Histórico guide</a> maps the whole circuit plaza by plaza.",
        "Unos 3 km de calles peatonales — Calzada de Guadalupe, Zaragoza e Hidalgo — hilvanan un núcleo colonial que la UNESCO inscribió en 2010 como parte de la ruta Patrimonio Mundial del Camino Real de Tierra Adentro. Es el mejor plan gratuito de la ciudad, y nuestra <a href='/centro-historico' class='text-orange-600 underline font-semibold'>guía del Centro Histórico</a> mapea el circuito plaza por plaza."],
      ['2', 'Plaza de Armas & the Cathedral', 'Plaza de Armas y la Catedral',
        "The Catedral Metropolitana de San Luis Rey was built between 1670 and 1730 in Mexican Baroque and only became a cathedral in 1854. Grab a bench in the Plaza de Armas at dusk when the cantera facade lights up — then keep going with our <a href='/cultural-attractions' class='text-orange-600 underline font-semibold'>cultural attractions guide</a>.",
        "La Catedral Metropolitana de San Luis Rey se construyó entre 1670 y 1730 en barroco mexicano y no fue catedral hasta 1854. Toma una banca en la Plaza de Armas al atardecer, cuando se ilumina la fachada de cantera — y sigue con nuestra <a href='/cultural-attractions' class='text-orange-600 underline font-semibold'>guía de atractivos culturales</a>."],
      ['3', 'Templo del Carmen & Plaza del Carmen', 'Templo del Carmen y Plaza del Carmen',
        "The 18th-century Templo del Carmen, with its exuberant carved-stone facade and tiled dome, anchors the city's most photogenic square. The plaza gives you three stops in one: the church, the Teatro de la Paz next door and the Museo Nacional de la Máscara across the way.",
        'El Templo del Carmen, del siglo XVIII, con su exuberante fachada labrada y cúpula de azulejos, preside la plaza más fotogénica de la ciudad. La plaza te da tres paradas en una: el templo, el Teatro de la Paz de al lado y el Museo Nacional de la Máscara enfrente.'],
      ['4', 'Teatro de la Paz', 'Teatro de la Paz',
        "Built 1889–1894 under the Porfiriato by architect José Noriega and inaugurated on November 4, 1894 with Donizetti's Lucrezia Borgia, its dome was fabricated in Paris. It still hosts orchestras, ballet and theater — check the current program and see a show inside one of Mexico's great historic theaters.",
        "Construido entre 1889 y 1894 durante el porfiriato por el arquitecto José Noriega e inaugurado el 4 de noviembre de 1894 con Lucrezia Borgia de Donizetti; su cúpula se fabricó en París. Sigue programando orquestas, ballet y teatro — revisa la cartelera y vive una función en uno de los grandes teatros históricos de México."],
      ['5', 'Ride the tourist tranvía', 'Súbete al tranvía turístico',
        "A ~1-hour panoramic loop past the Cathedral, San Agustín, San Miguelito and the Calzada, departing every ~30 minutes from beside the Jardín de San Juan de Dios. Two operators run the route and published prices vary (roughly MX$100–150) — confirm when boarding. More arrival-day ideas in our <a href='/visit-san-luis-potosi' class='text-orange-600 underline font-semibold'>visitor guide</a>.",
        "Un recorrido panorámico de ~1 hora por la Catedral, San Agustín, San Miguelito y la Calzada, con salidas cada ~30 minutos junto al Jardín de San Juan de Dios. Dos operadores cubren la ruta y los precios publicados varían (aprox. $100–150) — confirma al abordar. Más ideas para tu primer día en nuestra <a href='/visit-san-luis-potosi' class='text-orange-600 underline font-semibold'>guía del visitante</a>."],
      ['6', 'Trace the silver-city history', 'Sigue la historia de la ciudad de plata',
        "The 1592 strikes at nearby Cerro de San Pedro gave the state its name and made San Luis Potosí the third city of the viceroyalty, behind only Mexico City and Puebla. Our <a href='/cultural/history' class='text-orange-600 underline font-semibold'>history guide</a> connects the mining boom to the Baroque skyline you see today.",
        "Las vetas de 1592 en el cercano Cerro de San Pedro le dieron nombre al estado e hicieron de San Luis Potosí la tercera ciudad del virreinato, solo detrás de la Ciudad de México y Puebla. Nuestra <a href='/cultural/history' class='text-orange-600 underline font-semibold'>guía de historia</a> conecta el auge minero con el perfil barroco que ves hoy."],
      ['7', 'Calzada de Guadalupe to the Caja del Agua', 'La Calzada de Guadalupe hasta la Caja del Agua',
        "Stroll the tree-lined Calzada — the long processional axis of the pedestrian network — past the neoclassical Caja del Agua fountain, one of the city's emblems, to the Basílica de Guadalupe. Sunday mornings it fills with families, runners and vendors.",
        'Pasea la arbolada Calzada — el gran eje procesional de la red peatonal — junto a la neoclásica Caja del Agua, uno de los emblemas de la ciudad, hasta la Basílica de Guadalupe. Los domingos por la mañana se llena de familias, corredores y vendedores.'],
    ],
  },
  {
    en: 'Museums & culture',
    es: 'Museos y cultura',
    items: [
      ['8', 'Museo Leonora Carrington', 'Museo Leonora Carrington',
        "The world's first museum dedicated to the British-Mexican surrealist opened March 22, 2018 inside the city's former penitentiary. General admission is MX$55 (July 2026) and includes the Centro de las Artes; Wednesdays are free, Tue–Sun 10 AM–6 PM. The full story is in our <a href='/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism' class='text-orange-600 underline font-semibold'>Leonora Carrington deep-dive</a>.",
        "El primer museo del mundo dedicado a la surrealista anglo-mexicana abrió el 22 de marzo de 2018 dentro de la antigua penitenciaría de la ciudad. La entrada general cuesta $55 (julio 2026) e incluye el Centro de las Artes; los miércoles es gratis, mar–dom 10:00–18:00. La historia completa está en nuestro <a href='/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism' class='text-orange-600 underline font-semibold'>especial de Leonora Carrington</a>."],
      ['9', 'Centro de las Artes Centenario', 'Centro de las Artes Centenario',
        "The building itself is the attraction: a panopticon prison designed by Carlos Suárez Fiallo, opened in 1890 and operated as the state penitentiary from 1904 to 1999 — now galleries, workshops and gardens where the cell blocks were. Your Carrington ticket covers it; wander the radial wings.",
        'El edificio en sí es el atractivo: una cárcel panóptica diseñada por Carlos Suárez Fiallo, abierta en 1890 y penitenciaría del estado de 1904 a 1999 — hoy galerías, talleres y jardines donde estaban las crujías. Tu boleto del Carrington lo incluye; recorre las alas radiales.'],
      ['10', 'Museo Nacional de la Máscara', 'Museo Nacional de la Máscara',
        "Mexico's national mask collection fills the 19th-century Palacio Martí on Plaza del Carmen — ritual and dance masks from across the country. Entry is MX$20 general, MX$10 students/kids/INAPAM (verified July 2026); hours run roughly Monday–Saturday 10 AM–9 PM and Sunday 11 AM–7 PM (confirm the current schedule).",
        'La colección nacional de máscaras llena el decimonónico Palacio Martí en la Plaza del Carmen — máscaras rituales y de danza de todo el país. La entrada cuesta $20 general, $10 estudiantes/niños/INAPAM (verificado julio 2026); el horario es aprox. lunes a sábado 10:00–21:00 y domingo 11:00–19:00 (confirma el horario vigente).'],
      ['11', 'Museo Federico Silva', 'Museo Federico Silva',
        "A museum devoted to contemporary sculpture — rare in Latin America — in a landmark building beside the Jardín de San Juan de Dios (Álvaro Obregón 80). MX$30 general, free on Sundays, closed Tuesdays (verified July 2026).",
        'Un museo dedicado a la escultura contemporánea — rareza en América Latina — en un edificio emblemático junto al Jardín de San Juan de Dios (Álvaro Obregón 80). $30 general, gratis los domingos, cierra los martes (verificado julio 2026).'],
      ['12', 'Museo Regional Potosino & Capilla de Aranzazú', 'Museo Regional Potosino y Capilla de Aranzazú',
        "Housed in a former Franciscan convent, the INAH-run regional museum keeps pre-Hispanic Huasteca pieces downstairs and, upstairs, the Baroque Capilla de Aranzazú — a chapel built on the second floor, a rarity. Consulta horarios actuales (INAH schedules and fees change).",
        'En un antiguo convento franciscano, el museo regional del INAH guarda piezas prehispánicas de la Huasteca en la planta baja y, arriba, la barroca Capilla de Aranzazú — una capilla construida en el segundo piso, una rareza. Consulta horarios actuales (los horarios y cuotas del INAH cambian).'],
      ['13', 'Time your trip to a festival', 'Cuadra tu viaje con un festival',
        "The city's calendar stacks up: the spring festival season around <a href='/festival-primavera-2026' class='text-orange-600 underline font-semibold'>Festival de Primavera</a>, Semana Santa's processions and the August fair. Our <a href='/cultural/festivals' class='text-orange-600 underline font-semibold'>festivals guide</a> lays out the year so you can aim your dates.",
        "El calendario de la ciudad se apila: la temporada primaveral en torno al <a href='/festival-primavera-2026' class='text-orange-600 underline font-semibold'>Festival de Primavera</a>, las procesiones de Semana Santa y la feria de agosto. Nuestra <a href='/cultural/festivals' class='text-orange-600 underline font-semibold'>guía de festivales</a> ordena el año para que apuntes tus fechas."],
      ['14', 'Hear huapango, the sound of the Huasteca', 'Escucha huapango, el sonido de la Huasteca',
        "The state's eastern third is Huasteca country, and its son huasteco — falsetto verses over trio strings, danced hard on wooden platforms — shows up at city peñas and festivals. Where to catch traditional music and dance is covered in our <a href='/cultural/music-dance' class='text-orange-600 underline font-semibold'>music & dance guide</a>.",
        "El tercio oriental del estado es tierra huasteca, y su son huasteco — versos en falsete sobre cuerdas de trío, zapateado duro sobre tarimas — aparece en peñas y festivales de la ciudad. Dónde encontrar música y danza tradicional está en nuestra <a href='/cultural/music-dance' class='text-orange-600 underline font-semibold'>guía de música y danza</a>."],
    ],
  },
  {
    en: 'Food & drink',
    es: 'Comer y beber',
    items: [
      ['15', 'Eat enchiladas potosinas where they belong', 'Come enchiladas potosinas donde se debe',
        "Chile-stained masa folded over cheese, fried and topped with cream — the city's signature dish, joined by asado de boda and queso de tuna from the altiplano. Start with our <a href='/traditional-cuisine' class='text-orange-600 underline font-semibold'>traditional cuisine guide</a> and go deeper with the <a href='/guides/foodie-guide' class='text-orange-600 underline font-semibold'>foodie guide</a>.",
        "Masa teñida de chile doblada sobre queso, frita y coronada con crema — el platillo insignia de la ciudad, acompañado del asado de boda y el queso de tuna del altiplano. Empieza con nuestra <a href='/traditional-cuisine' class='text-orange-600 underline font-semibold'>guía de cocina tradicional</a> y profundiza con la <a href='/guides/foodie-guide' class='text-orange-600 underline font-semibold'>guía foodie</a>."],
      ['16', 'Do the brunch circuit', 'Haz el circuito de brunch',
        "The city has a genuine brunch scene now — Cuatro Almas in Lomas serves its chipotle chilaquiles and eggs benedict 8 AM–2 PM, and nine more spots made our fact-checked list. The full rundown: <a href='/blog/best-brunch-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>best brunch spots in San Luis Potosí</a>.",
        "La ciudad ya tiene una escena de brunch en serio — Cuatro Almas en Lomas sirve sus chilaquiles al chipotle y huevos benedictinos de 8:00 a 14:00, y nueve lugares más entraron a nuestra lista verificada. El recuento completo: <a href='/blog/best-brunch-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>los mejores brunch de San Luis Potosí</a>."],
      ['17', 'Breakfast like a potosino', 'Desayuna como potosino',
        "Gorditas rellenas off the comal, café de olla and juice stands — mornings are when the city eats best and cheapest. Our <a href='/breakfast-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>breakfast guide</a> and the directory's <a href='/category/open-for-breakfast' class='text-orange-600 underline font-semibold'>open-for-breakfast listings</a> have the addresses.",
        "Gorditas rellenas salidas del comal, café de olla y puestos de jugos — en la mañana es cuando mejor y más barato se come en la ciudad. Nuestra <a href='/breakfast-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>guía de desayunos</a> y los <a href='/category/open-for-breakfast' class='text-orange-600 underline font-semibold'>lugares abiertos para desayunar</a> del directorio traen las direcciones."],
      ['18', 'Graze the Mercado República', 'Picotea en el Mercado República',
        'A working neighborhood market with breakfast and brunch stalls that locals actually queue for. Go hungry mid-morning, order whatever the stall next to you is having, and pay in cash.',
        'Un mercado de barrio en activo con puestos de desayuno y almuerzo donde los locales sí hacen fila. Llega con hambre a media mañana, pide lo que esté comiendo la mesa de junto y paga en efectivo.'],
      ['19', 'Shop the farmers markets', 'Recorre los mercados de productores',
        "Weekend tianguis and organic markets sell altiplano cheese, mezquite flour, pulque bread and produce straight from growers. Days and locations are in the <a href='/farmers-markets-san-luis-potosi' class='text-orange-600 underline font-semibold'>farmers markets guide</a>, with more in our <a href='/category/local-organic-products' class='text-orange-600 underline font-semibold'>local & organic listings</a>.",
        "Los tianguis de fin de semana y mercados orgánicos venden queso del altiplano, harina de mezquite, pan de pulque y productos directos del productor. Días y ubicaciones están en la <a href='/farmers-markets-san-luis-potosi' class='text-orange-600 underline font-semibold'>guía de mercados de productores</a>, con más en nuestro <a href='/category/local-organic-products' class='text-orange-600 underline font-semibold'>directorio de productos locales y orgánicos</a>."],
      ['20', 'Taste the potosino wine scene', 'Prueba la escena vinícola potosina',
        "San Luis Potosí has a small but real wine story — high-altitude vineyards and a growing pour list in city restaurants. Our <a href='/guides/potosino-wine-scene' class='text-orange-600 underline font-semibold'>potosino wine guide</a> maps who's making what and where to drink it.",
        "San Luis Potosí tiene una historia vinícola pequeña pero real — viñedos de altura y cada vez más etiquetas en las cartas de la ciudad. Nuestra <a href='/guides/potosino-wine-scene' class='text-orange-600 underline font-semibold'>guía del vino potosino</a> mapea quién hace qué y dónde beberlo."],
      ['21', 'Hit a food festival', 'Cae en un festival gastronómico',
        "The metro area throws food fairs all year — the Feria de la Enchilada in neighboring Soledad is the classic. Dates live in our <a href='/food-festivals-san-luis-potosi' class='text-orange-600 underline font-semibold'>food festivals guide</a> and the <a href='/events/feria-de-la-enchilada-2026' class='text-orange-600 underline font-semibold'>Feria de la Enchilada event page</a>.",
        "La zona metropolitana organiza ferias gastronómicas todo el año — la Feria de la Enchilada en la vecina Soledad es la clásica. Las fechas viven en nuestra <a href='/food-festivals-san-luis-potosi' class='text-orange-600 underline font-semibold'>guía de festivales gastronómicos</a> y en la <a href='/events/feria-de-la-enchilada-2026' class='text-orange-600 underline font-semibold'>página de la Feria de la Enchilada</a>."],
      ['22', 'Work (or linger) in the café scene', 'Trabaja (o quédate) en la escena cafetera',
        "Specialty coffee has taken over the Centro and Carranza corridor, and plenty of cafés welcome laptops. The <a href='/category/remote-work-cafes' class='text-orange-600 underline font-semibold'>remote-work cafés list</a> and our <a href='/digital-nomad-guide' class='text-orange-600 underline font-semibold'>digital nomad guide</a> sort them by wifi, plugs and hours.",
        "El café de especialidad tomó el Centro y el corredor de Carranza, y muchos cafés reciben laptops. La <a href='/category/remote-work-cafes' class='text-orange-600 underline font-semibold'>lista de cafés para trabajar</a> y nuestra <a href='/digital-nomad-guide' class='text-orange-600 underline font-semibold'>guía para nómadas digitales</a> los ordenan por wifi, enchufes y horarios."],
    ],
  },
  {
    en: 'Parks & outdoors',
    es: 'Parques y aire libre',
    items: [
      ['23', 'Get lost in Parque Tangamanga I', 'Piérdete en el Parque Tangamanga I',
        "At 411 hectares it's Mexico's second-largest urban park — bigger than New York's Central Park (340 ha) — and entry is free, with night hours to 10:30 PM Tuesday–Saturday. Bike loops, lake, planetarium, open-air theater: our <a href='/parque-tangamanga' class='text-orange-600 underline font-semibold'>Tangamanga I guide</a> covers it all.",
        "Con 411 hectáreas es el segundo parque urbano más grande de México — más grande que el Central Park de Nueva York (340 ha) — y la entrada es gratis, con horario nocturno hasta las 22:30 de martes a sábado. Circuitos de bici, lago, planetario, teatro al aire libre: nuestra <a href='/parque-tangamanga' class='text-orange-600 underline font-semibold'>guía del Tangamanga I</a> lo cubre todo."],
      ['24', 'Visit the free zoo inside Tangamanga', 'Visita el zoológico gratuito del Tangamanga',
        "The park's wildlife unit houses rescued species and charges nothing — open Tuesday–Sunday, 9 AM–5 PM (verified 2026). Pair it with the free Japanese and botanical gardens on the same visit.",
        'La unidad de fauna del parque alberga especies rescatadas y no cobra — abre de martes a domingo, 9:00–17:00 (verificado 2026). Combínalo con los jardines japonés y botánico, también gratuitos, en la misma visita.'],
      ['25', 'Cross town to Parque Tangamanga II', 'Cruza la ciudad al Parque Tangamanga II',
        "The northside sibling is smaller and wilder — favored by cyclists and runners who want fewer crowds. Our <a href='/parque-tangamanga-ii' class='text-orange-600 underline font-semibold'>Tangamanga II guide</a> has trails and practical info.",
        "El hermano del norte es más chico y más agreste — favorito de ciclistas y corredores que buscan menos gente. Nuestra <a href='/parque-tangamanga-ii' class='text-orange-600 underline font-semibold'>guía del Tangamanga II</a> trae senderos e información práctica."],
      ['26', 'Take the kids to Parque de Morales', 'Lleva a los niños al Parque de Morales',
        "Founded May 19, 1924 and centered on an artificial lake dug in 1968, the city's beloved century-old park reopened refreshed after a ~100-million-peso state rehabilitation. It leads our <a href='/blog/best-parks-for-kids-san-luis-potosi' class='text-orange-600 underline font-semibold'>best parks for kids</a> ranking.",
        "Fundado el 19 de mayo de 1924 y centrado en un lago artificial excavado en 1968, el querido parque centenario reabrió renovado tras una rehabilitación estatal de ~100 millones de pesos. Encabeza nuestro ranking de <a href='/blog/best-parks-for-kids-san-luis-potosi' class='text-orange-600 underline font-semibold'>mejores parques para niños</a>."],
      ['27', 'Walk industrial history at Parque Bicentenario', 'Camina la historia industrial en el Parque Bicentenario',
        'Inaugurated in November 2010 on the site of a former copper foundry, it keeps fifteen pieces of industrial machinery as open-air sculpture among 33 tree species. One of the more interesting reclaimed-industrial parks in the country, and rarely crowded.',
        'Inaugurado en noviembre de 2010 sobre una antigua fundición de cobre, conserva quince piezas de maquinaria industrial como escultura al aire libre entre 33 especies de árboles. Uno de los parques industriales recuperados más interesantes del país, y rara vez lleno.'],
      ['28', 'Hike the Sierra de Álvarez', 'Camina la Sierra de Álvarez',
        "The pine-and-oak wall an hour east on Highway 70 has trails for every level at Las Rusias, El Milagro and San Francisco, plus serious mountain biking. No formal entrance fee (ejido-run spots may charge parking); more routes in our <a href='/outdoors' class='text-orange-600 underline font-semibold'>outdoors guide</a>.",
        "La muralla de pino y encino a una hora al oriente por la carretera 70 tiene senderos para todos los niveles en Las Rusias, El Milagro y San Francisco, además de buen ciclismo de montaña. Sin cuota formal de entrada (los parajes ejidales pueden cobrar estacionamiento); más rutas en nuestra <a href='/outdoors' class='text-orange-600 underline font-semibold'>guía de aire libre</a>."],
    ],
  },
  {
    en: 'Day trips from the city',
    es: 'Escapadas de un día',
    items: [
      ['29', 'Cerro de San Pedro, the town that named the state', 'Cerro de San Pedro, el pueblo que nombró al estado',
        "The semi-abandoned 1592 mining town is 22 km away (~35 minutes) — cobblestones, roofless stone houses, a walk-in mine tunnel and weekend gorditas, reachable even on the Ruta 39 city bus. It opens our <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>verified day-trips guide</a>.",
        "El pueblo minero semiabandonado de 1592 está a 22 km (~35 minutos) — empedrados, casas de piedra sin techo, un túnel de mina visitable y gorditas de fin de semana, accesible hasta en el camión Ruta 39. Abre nuestra <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>guía verificada de escapadas de un día</a>."],
      ['30', 'Buy a rebozo in Santa María del Río', 'Compra un rebozo en Santa María del Río',
        "The 'cradle of the rebozo' — a Pueblo Mágico since 2020, 40 minutes south — still ikat-dyes and weaves silk shawls on backstrap looms, a tradition carried by the Taller Escuela de Rebocería (founded 1953). Buses run constantly for about MX$40–70.",
        "La 'cuna del rebozo' — Pueblo Mágico desde 2020, a 40 minutos al sur — todavía tiñe en ikat y teje rebozos de seda en telar de cintura, tradición que sostiene el Taller Escuela de Rebocería (fundado en 1953). Hay camiones todo el día por unos $40–70."],
      ['31', 'Soak at Balneario Gogorrón', 'Remójate en el Balneario Gogorrón',
        "Thermal water at ~42°C feeds five pools an hour south, relaunched by the state in 2023 (MX$100–120 at last published rates — confirm before going). Ten minutes away, the 1592 Ex-Hacienda Gogorrón — where The Mask of Zorro filmed — is free to wander.",
        'Agua termal a ~42°C alimenta cinco albercas a una hora al sur, relanzadas por el estado en 2023 ($100–120 según lo último publicado — confirma antes de ir). A diez minutos, la Ex-Hacienda Gogorrón de 1592 — donde se filmó La Máscara del Zorro — se recorre gratis.'],
      ['32', 'Snorkel the Media Luna spring', 'Esnorquelea en la Media Luna',
        'A crescent of impossibly clear thermal water near Rioverde, 27–30°C year-round with visibility up to 30 m and petrified trees on the bottom. Entry MX$100 adults as of mid-2025 (a rise has circulated — confirm at 487 101 5874); about two hours by car.',
        'Una media luna de agua termal imposiblemente clara cerca de Rioverde, a 27–30°C todo el año con visibilidad de hasta 30 m y árboles petrificados al fondo. Entrada $100 adultos a mediados de 2025 (circula un alza — confirma al 487 101 5874); unas dos horas en coche.'],
      ['33', 'Make the Real de Catorce pilgrimage', 'Haz la peregrinación a Real de Catorce',
        "Enter the silver ghost town at 2,730 m through the one-lane, 2.3-km Ogarrio tunnel (opened 1901) — willys jeeps, the Pueblo Fantasma and a Pueblo Mágico designation dating to 2001. Long day trip or better overnight: our <a href='/blog/real-de-catorce-guide-2026' class='text-orange-600 underline font-semibold'>complete Real de Catorce guide</a> covers both.",
        "Entra al pueblo fantasma de plata a 2,730 m por el túnel Ogarrio de un carril y 2.3 km (inaugurado en 1901) — willys, el Pueblo Fantasma y nombramiento de Pueblo Mágico desde 2001. Day trip largo o mejor con noche: nuestra <a href='/blog/real-de-catorce-guide-2026' class='text-orange-600 underline font-semibold'>guía completa de Real de Catorce</a> cubre ambos."],
      ['34', 'Stretch a day trip into a weekend', 'Estira el day trip a un fin de semana',
        "Guadalcázar's show cave, Sierra hiking bases and the thermal-spring towns all reward a slower pace. Our <a href='/weekend-getaways' class='text-orange-600 underline font-semibold'>weekend getaways guide</a> re-sorts the map for two-day plans.",
        "La gruta de Guadalcázar, las bases de senderismo en la sierra y los pueblos de aguas termales premian el ritmo lento. Nuestra <a href='/weekend-getaways' class='text-orange-600 underline font-semibold'>guía de escapadas de fin de semana</a> reordena el mapa para planes de dos días."],
    ],
  },
  {
    en: 'The Huasteca Potosina (worth extra nights)',
    es: 'La Huasteca Potosina (merece noches extra)',
    items: [
      ['35', 'Base yourself in Ciudad Valles', 'Haz base en Ciudad Valles',
        "The Huasteca's hub is 251 km (~4 h) from the capital via MEX-70; buses take ~4 h 15 from around MX$598. Waterfalls run turquoise November–April. Build the trip with our <a href='/blog/huasteca-potosina-itinerary-2026' class='text-orange-600 underline font-semibold'>3/5/7-day Huasteca itinerary</a> — it is not a day trip, on purpose.",
        "El hub de la Huasteca está a 251 km (~4 h) de la capital por la MEX-70; el autobús tarda ~4 h 15 desde unos $598. Las cascadas corren turquesa de noviembre a abril. Arma el viaje con nuestro <a href='/blog/huasteca-potosina-itinerary-2026' class='text-orange-600 underline font-semibold'>itinerario de 3/5/7 días</a> — no es day trip, a propósito."],
      ['36', "Wander Edward James's Las Pozas in Xilitla", 'Recorre Las Pozas de Edward James en Xilitla',
        "Surrealist concrete follies in the jungle, built over two decades after a 1962 frost killed James's orchids. 2026 rules: reserve a timed entry online 24 h–60 days ahead, pay at the gate (MX$180 adults + mandatory MX$30 Spanish / MX$60 English guide), closed Tuesdays. Full logistics: <a href='/blog/xilitla-las-pozas-guide-2026' class='text-orange-600 underline font-semibold'>our Xilitla guide</a>.",
        "Caprichos surrealistas de concreto en la selva, construidos durante dos décadas después de que una helada en 1962 matara las orquídeas de James. Reglas 2026: reserva tu horario en línea con 24 h–60 días de anticipación, paga en taquilla ($180 adultos + guía obligatorio de $30 en español / $60 en inglés), cierra los martes. Toda la logística: <a href='/blog/xilitla-las-pozas-guide-2026' class='text-orange-600 underline font-semibold'>nuestra guía de Xilitla</a>."],
      ['37', 'Paddle to the Cascada de Tamul', 'Rema hasta la Cascada de Tamul',
        "At 105 m, Tamul is the state's tallest waterfall, pouring into a canyon of the Río Santa María north of Aquismón. Most visitors reach it paddling upriver in a shared wooden lancha — an hour of rowing that is half the experience.",
        'Con 105 m, Tamul es la cascada más alta del estado, cayendo a un cañón del Río Santa María al norte de Aquismón. La mayoría llega remando río arriba en una lancha de madera compartida — una hora de remo que es la mitad de la experiencia.'],
      ['38', 'Watch the swifts at Sótano de las Golondrinas', 'Mira los vencejos en el Sótano de las Golondrinas',
        'A 512-m-deep vertical cave (376 m of sheer free-fall) near Tamapatz where thousands of birds spiral out at dawn and dive back at dusk. Expect a ~15-minute walk plus roughly 586 steps down to the rim viewpoints.',
        'Un abismo vertical de 512 m de profundidad (376 m de caída libre) cerca de Tamapatz, donde miles de aves salen en espiral al amanecer y se lanzan de regreso al atardecer. Cuenta con una caminata de ~15 minutos más unos 586 escalones hasta los miradores del borde.'],
    ],
  },
  {
    en: 'Events & seasonal',
    es: 'Eventos y temporada',
    items: [
      ['39', 'FENAPO — the national fair, in August', 'FENAPO — la feria nacional, en agosto',
        "The Feria Nacional Potosina runs August 7–30, 2026 at the Recinto Ferial, with 21 free Foro de las Estrellas concerts — Katy Perry (Aug 25) and Mötley Crüe (Aug 8) headline this year — plus ticketed palenque nights. See the <a href='/events/fenapo-2026' class='text-orange-600 underline font-semibold'>FENAPO 2026 event page</a> and the <a href='/blog/fenapo-2026-artistas-cartel-completo' class='text-orange-600 underline font-semibold'>full verified lineup</a>.",
        "La Feria Nacional Potosina corre del 7 al 30 de agosto de 2026 en el Recinto Ferial, con 21 conciertos gratuitos en el Foro de las Estrellas — Katy Perry (25 ago) y Mötley Crüe (8 ago) encabezan este año — más noches de palenque con boleto. Mira la <a href='/events/fenapo-2026' class='text-orange-600 underline font-semibold'>página de FENAPO 2026</a> y el <a href='/blog/fenapo-2026-artistas-cartel-completo' class='text-orange-600 underline font-semibold'>cartel completo verificado</a>."],
      ['40', 'Semana Santa & the Procesión del Silencio', 'Semana Santa y la Procesión del Silencio',
        "On Good Friday the Centro goes silent for a hooded candlelight procession held since the mid-1950s that now draws around 120,000 visitors — hotels fill, so book ahead with our <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>where-to-stay guide</a>.",
        "El Viernes Santo el Centro enmudece para una procesión de encapuchados a la luz de las velas que se celebra desde mediados de los años cincuenta y hoy atrae a unos 120,000 visitantes — los hoteles se llenan, así que reserva con nuestra <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>guía de dónde hospedarte</a>."],
      ['41', 'Swirl at the Festival Internacional del Vino', 'Copea en el Festival Internacional del Vino',
        "The city's international wine festival gathers Mexican and foreign wineries, tastings and pairing dinners. Dates, tickets and what to expect: <a href='/blog/festival-internacional-vino-slp-2026' class='text-orange-600 underline font-semibold'>our FIV SLP 2026 guide</a>.",
        "El festival internacional del vino de la ciudad reúne bodegas mexicanas y extranjeras, catas y cenas de maridaje. Fechas, boletos y qué esperar: <a href='/blog/festival-internacional-vino-slp-2026' class='text-orange-600 underline font-semibold'>nuestra guía del FIV SLP 2026</a>."],
      ['42', 'Find something on any given week', 'Encuentra plan cualquier semana',
        "There is always something on — and much of it costs nothing. We keep <a href='/events/this-week' class='text-orange-600 underline font-semibold'>this week's events</a> updated, and the <a href='/free-events-san-luis-potosi' class='text-orange-600 underline font-semibold'>free events guide</a> filters for MX$0 plans.",
        "Siempre hay algo — y mucho no cuesta nada. Mantenemos al día <a href='/events/this-week' class='text-orange-600 underline font-semibold'>los eventos de esta semana</a>, y la <a href='/free-events-san-luis-potosi' class='text-orange-600 underline font-semibold'>guía de eventos gratuitos</a> filtra los planes de $0."],
      ['43', 'Run (or cheer) a race in the park', 'Corre (o echa porras) en el parque',
        "The running calendar peaks with the <a href='/events/maraton-tangamanga-2026' class='text-orange-600 underline font-semibold'>Maratón Tangamanga</a> and the <a href='/events/medio-maraton-uaslp-2026' class='text-orange-600 underline font-semibold'>UASLP half marathon</a> — both flat, high-altitude races potosinos train for all year inside Tangamanga I.",
        "El calendario de carreras alcanza su punto con el <a href='/events/maraton-tangamanga-2026' class='text-orange-600 underline font-semibold'>Maratón Tangamanga</a> y el <a href='/events/medio-maraton-uaslp-2026' class='text-orange-600 underline font-semibold'>medio maratón de la UASLP</a> — carreras planas y de altura para las que los potosinos entrenan todo el año dentro del Tangamanga I."],
    ],
  },
  {
    en: 'With kids',
    es: 'Con niños',
    items: [
      ['44', 'Museo Laberinto de las Ciencias y las Artes', 'Museo Laberinto de las Ciencias y las Artes',
        "The hands-on science museum inside Tangamanga I charges MX$50 general and MX$40 for kids 4–5 (verified 2026) — budget a half day. More ideas in our <a href='/family-friendly-activities' class='text-orange-600 underline font-semibold'>family activities guide</a>.",
        "El museo de ciencias interactivo dentro del Tangamanga I cobra $50 general y $40 niños de 4–5 años (verificado 2026) — calcula medio día. Más ideas en nuestra <a href='/family-friendly-activities' class='text-orange-600 underline font-semibold'>guía de actividades familiares</a>."],
      ['45', 'Splash at Dinoasis', 'Chapotea en Dinoasis',
        "Tangamanga I's rebranded water park runs about MX$200 for kids and MX$300 for adults at the gate (verified 2026), dinosaur theming included. The directory's <a href='/category/family-activities' class='text-orange-600 underline font-semibold'>family activities listings</a> round out the day.",
        "El parque acuático renombrado del Tangamanga I cuesta unos $200 niños y $300 adultos en taquilla (verificado 2026), dinosaurios incluidos. Los <a href='/category/family-activities' class='text-orange-600 underline font-semibold'>listados de actividades familiares</a> del directorio completan el día."],
      ['46', 'Eat where the kids can run', 'Come donde los niños puedan correr',
        "A very potosino solution to long family lunches: restaurants with real playgrounds. We keep a dedicated list of <a href='/category/restaurants-with-playgrounds' class='text-orange-600 underline font-semibold'>restaurants with playgrounds</a>.",
        "Una solución muy potosina a las comidas familiares largas: restaurantes con juegos de verdad. Mantenemos una lista dedicada de <a href='/category/restaurants-with-playgrounds' class='text-orange-600 underline font-semibold'>restaurantes con área de juegos</a>."],
      ['47', 'Have a rainy-day plan B', 'Ten un plan B para días de lluvia',
        "Summer afternoons bring storms; the semi-arid city dries fast, but you'll want indoor options — museums, play centers, cafés. Our <a href='/category/rainy-day-activities' class='text-orange-600 underline font-semibold'>rainy-day activities list</a> is the fallback.",
        "Las tardes de verano traen tormentas; la ciudad semiárida se seca rápido, pero querrás opciones bajo techo — museos, centros de juego, cafés. Nuestra <a href='/category/rainy-day-activities' class='text-orange-600 underline font-semibold'>lista de actividades para días de lluvia</a> es el respaldo."],
    ],
  },
  {
    en: 'Nightlife & evenings',
    es: 'Vida nocturna y tardes',
    items: [
      ['48', 'Do a cantina crawl', 'Haz una ruta de cantinas',
        "The Centro keeps old-school cantinas where the botana still arrives free with your beer. Start with the <a href='/category/cantinas' class='text-orange-600 underline font-semibold'>cantinas directory</a> and go early — the good ones close earlier than you'd think.",
        "El Centro conserva cantinas de vieja escuela donde la botana todavía llega gratis con la cerveza. Empieza con el <a href='/category/cantinas' class='text-orange-600 underline font-semibold'>directorio de cantinas</a> y ve temprano — las buenas cierran antes de lo que crees."],
      ['49', 'Cocktails up high, mezcal down low', 'Coctelería en alto, mezcal a pie de calle',
        "A newer generation of bars mixes serious cocktails, and the city's rooftops earn their sunsets over cantera domes. Browse the <a href='/category/cocktail-bars' class='text-orange-600 underline font-semibold'>cocktail bars</a> and <a href='/category/terraces' class='text-orange-600 underline font-semibold'>terraces</a> listings.",
        "Una generación más nueva de bares mezcla coctelería seria, y las azoteas de la ciudad se ganan sus atardeceres sobre cúpulas de cantera. Explora los listados de <a href='/category/cocktail-bars' class='text-orange-600 underline font-semibold'>bares de coctelería</a> y <a href='/category/terraces' class='text-orange-600 underline font-semibold'>terrazas</a>."],
      ['50', 'End on live music', 'Cierra con música en vivo',
        "From trova bars to touring acts at the Teatro de la Paz, most weeks offer something live. The <a href='/category/live-music' class='text-orange-600 underline font-semibold'>live music listings</a> track venues; cross-check the week's shows before you head out.",
        "De bares de trova a giras en el Teatro de la Paz, casi todas las semanas hay algo en vivo. Los <a href='/category/live-music' class='text-orange-600 underline font-semibold'>listados de música en vivo</a> siguen los foros; cruza con la cartelera de la semana antes de salir."],
    ],
  },
];

function itemCards(items, isEs) {
  return items
    .map(
      ([num, titleEn, titleEs, bodyEn, bodyEs]) => `
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">${num}.</span>${isEs ? titleEs : titleEn}</h3>
    <p class="text-sm text-gray-700 leading-relaxed">${isEs ? bodyEs : bodyEn}</p>
  </div>`
    )
    .join('\n');
}

function sectionBlocks(isEs) {
  return SECTIONS.map(
    (s) => `
<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">${isEs ? s.es : s.en}</h2>
</div>
<div class="space-y-6">
${itemCards(s.items, isEs)}
</div>
</section>`
  ).join('\n');
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best things to do in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Walk the ~3 km pedestrian core of the UNESCO-listed Centro Histórico, visit the Museo Leonora Carrington inside the old panopticon prison (MX$55, free Wednesdays), spend a morning in the 411-hectare Parque Tangamanga I (free entry), eat enchiladas potosinas, and day-trip to Cerro de San Pedro (35 min) or Real de Catorce. With extra nights, the Huasteca Potosina — Tamul falls and Xilitla's Las Pozas — is the state's showstopper." } },
    { '@type': 'Question', name: 'How many days do you need in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days cover the city well: one for the Centro Histórico and museums, one for Tangamanga park and food, one for a day trip (Cerro de San Pedro, Santa María del Río or the Gogorrón hot springs). Add 3+ more days if you want the Huasteca Potosina — Ciudad Valles is ~4 hours away and the waterfalls deserve their own base.' } },
    { '@type': 'Question', name: 'Is San Luis Potosí worth visiting?', acceptedAnswer: { '@type': 'Answer', text: "Yes — it combines a UNESCO World Heritage historic center (Camino Real de Tierra Adentro, 2010) with Mexico's second-largest urban park (411 ha), the world's only Leonora Carrington museum, a distinctive regional cuisine, and position as the gateway to both the Real de Catorce desert and the Huasteca Potosina jungle. It also stays far cheaper and less crowded than San Miguel de Allende or Querétaro." } },
    { '@type': 'Question', name: 'What is San Luis Potosí famous for?', acceptedAnswer: { '@type': 'Answer', text: 'Colonial silver wealth — the 1592 strikes at Cerro de San Pedro made it the third city of the viceroyalty — plus enchiladas potosinas, rebozos from Santa María del Río, the Good Friday Procesión del Silencio (~120,000 visitors), the FENAPO national fair each August, and the Huasteca Potosina waterfalls in the east of the state.' } },
    { '@type': 'Question', name: 'What can you do in San Luis Potosí with kids?', acceptedAnswer: { '@type': 'Answer', text: "Parque Tangamanga I is the hub: free entry, a free zoo (Tue–Sun 9–5), the Museo Laberinto science museum (MX$50, kids 4–5 MX$40) and the Dinoasis water park (~MX$200 kids / MX$300 adults). Add the renovated Parque de Morales lake, restaurants with playgrounds, and the swifts' dawn flight at Sótano de las Golondrinas if you make it to the Huasteca." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué hacer en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Camina los ~3 km peatonales del Centro Histórico (Patrimonio Mundial UNESCO), visita el Museo Leonora Carrington dentro de la antigua penitenciaría panóptica ($55, miércoles gratis), pasa una mañana en las 411 hectáreas del Parque Tangamanga I (entrada gratis), come enchiladas potosinas y escápate un día a Cerro de San Pedro (35 min) o Real de Catorce. Con noches extra, la Huasteca Potosina — Tamul y Las Pozas de Xilitla — es el plato fuerte del estado.' } },
    { '@type': 'Question', name: '¿Cuántos días se necesitan en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Dos o tres días cubren bien la ciudad: uno para el Centro Histórico y museos, uno para el Tangamanga y la comida, uno para una escapada (Cerro de San Pedro, Santa María del Río o las aguas termales de Gogorrón). Suma 3+ días si quieres la Huasteca Potosina — Ciudad Valles queda a ~4 horas y las cascadas merecen su propia base.' } },
    { '@type': 'Question', name: '¿Vale la pena visitar San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — combina un centro histórico Patrimonio Mundial (Camino Real de Tierra Adentro, 2010) con el segundo parque urbano más grande de México (411 ha), el único museo del mundo dedicado a Leonora Carrington, una cocina regional con identidad y la posición de puerta de entrada tanto al desierto de Real de Catorce como a la selva de la Huasteca Potosina. Además sigue siendo mucho más barato y menos saturado que San Miguel de Allende o Querétaro.' } },
    { '@type': 'Question', name: '¿Por qué es famoso San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Por la plata colonial — las vetas de 1592 en Cerro de San Pedro lo hicieron la tercera ciudad del virreinato — además de las enchiladas potosinas, los rebozos de Santa María del Río, la Procesión del Silencio del Viernes Santo (~120,000 visitantes), la FENAPO cada agosto y las cascadas de la Huasteca Potosina al oriente del estado.' } },
    { '@type': 'Question', name: '¿Qué hacer en San Luis Potosí con niños?', acceptedAnswer: { '@type': 'Answer', text: 'El Parque Tangamanga I es el centro de todo: entrada gratis, zoológico gratuito (mar–dom 9–5), el Museo Laberinto ($50, niños 4–5 $40) y el parque acuático Dinoasis (~$200 niños / $300 adultos). Suma el lago del renovado Parque de Morales, los restaurantes con área de juegos y, si llegas a la Huasteca, el vuelo de los vencejos al amanecer en el Sótano de las Golondrinas.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);

  return `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>San Luis Potosí rewards the people who actually stop here.</strong> A UNESCO-listed colonial core at 1,863 m, Mexico's second-largest urban park, the world's only Leonora Carrington museum, silver ghost towns 35 minutes out and the Huasteca's waterfalls beyond — this is our local, fact-checked list of 50 things to do, with verified prices and hours wherever they exist.",
    '<strong>San Luis Potosí premia a quienes de verdad se detienen aquí.</strong> Un centro colonial Patrimonio Mundial a 1,863 m, el segundo parque urbano más grande de México, el único museo del mundo de Leonora Carrington, pueblos fantasma de plata a 35 minutos y las cascadas de la Huasteca más allá — esta es nuestra lista local y verificada de 50 cosas que hacer, con precios y horarios confirmados donde existen.'
  )}
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    ${t(
      "<strong>The short version:</strong> walk the ~3 km pedestrian Centro, do the Carrington museum + Centro de las Artes on one MX$55 ticket (free Wednesdays), give Tangamanga I a morning (free, 411 ha), eat enchiladas potosinas, day-trip to Cerro de San Pedro or Real de Catorce — and if you have 3+ extra days, go to the Huasteca. Getting here is easy too: ~4.5 h from Mexico City by highway 57D, fixed-rate airport taxi ~MX$275, and the MetroRed BRT is genuinely free.",
      '<strong>La versión corta:</strong> camina los ~3 km peatonales del Centro, haz el museo Carrington + Centro de las Artes con un solo boleto de $55 (miércoles gratis), dale una mañana al Tangamanga I (gratis, 411 ha), come enchiladas potosinas, escápate a Cerro de San Pedro o Real de Catorce — y si tienes 3+ días extra, vete a la Huasteca. Llegar también es fácil: ~4.5 h desde CDMX por la 57D, taxi de aeropuerto con tarifa fija ~$275, y la MetroRed es genuinamente gratuita.'
    )}
  </p>
</div>

${sectionBlocks(isEs)}

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">${t('Getting here & getting around', 'Cómo llegar y moverte')}</h2>
  <p class="text-gray-800 leading-relaxed">${t(
    "SLP sits ~402 km (~4.5 h) north of Mexico City via highway 57D and flies nonstop to Dallas, Houston and Mexico City — which is why it works as a <a href='/blog/mexico-2026-stopover-san-luis-potosi' class='text-blue-800 underline font-semibold'>World Cup 2026 stopover</a>. From the airport, the fixed-rate taxi to the Centro runs ~MX$275; in town, the MetroRed BRT is free and the Centro is walkable. For neighborhoods and hotels, see <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-blue-800 underline font-semibold'>where to stay in San Luis Potosí</a>.",
    "SLP está a ~402 km (~4.5 h) al norte de CDMX por la autopista 57D y tiene vuelos directos a Dallas, Houston y Ciudad de México — por eso funciona como <a href='/blog/mexico-2026-stopover-san-luis-potosi' class='text-blue-800 underline font-semibold'>escala del Mundial 2026</a>. Del aeropuerto, el taxi de tarifa fija al Centro cuesta ~$275; en la ciudad, la MetroRed es gratuita y el Centro se camina. Para colonias y hoteles, mira <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-blue-800 underline font-semibold'>dónde hospedarte en San Luis Potosí</a>."
  )}</p>
</div>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faq)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${t('Sources', 'Fuentes')}</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'Verified July 2026 unless noted: leonoracarringtonmuseo.org (MX$55 admission incl. Centro de las Artes, free Wednesdays, Tue–Sun 10–18), museonacionaldelamascaraslp.com.mx and SIC Cultura (Máscara MX$20), museofedericosilva.org (MX$30, free Sundays, closed Tuesdays), Wikipedia ES / El Universal SLP / Turismo SLP (Teatro de la Paz 1889–1894, José Noriega, dome from Paris), UNESCO whc.unesco.org (Camino Real de Tierra Adentro, 2010), CECURT and regional press (Tangamanga 411 ha, hours, free zoo Tue–Sun 9–5, Laberinto MX$50, Dinoasis MX$200/300), laspozasxilitla.org.mx (MX$180 + guide, reservation window, closed Tuesdays), fenapo.slp.gob.mx (Aug 7–30, 2026), plus the verified dossiers behind our day-trips, Huasteca, Xilitla, Real de Catorce, brunch, parks and where-to-stay guides (see /factchecks). Prices are the latest published figures with their dates — confirm locally; fees change without notice.',
    'Verificado en julio 2026 salvo indicación: leonoracarringtonmuseo.org (entrada $55 incl. Centro de las Artes, miércoles gratis, mar–dom 10–18), museonacionaldelamascaraslp.com.mx y SIC Cultura (Máscara $20), museofedericosilva.org ($30, domingos gratis, cierra martes), Wikipedia ES / El Universal SLP / Turismo SLP (Teatro de la Paz 1889–1894, José Noriega, cúpula de París), UNESCO whc.unesco.org (Camino Real de Tierra Adentro, 2010), CECURT y prensa regional (Tangamanga 411 ha, horarios, zoológico gratuito mar–dom 9–5, Laberinto $50, Dinoasis $200/300), laspozasxilitla.org.mx ($180 + guía, ventana de reservación, cierra martes), fenapo.slp.gob.mx (7–30 ago 2026), más los expedientes verificados de nuestras guías de escapadas, Huasteca, Xilitla, Real de Catorce, brunch, parques y hospedaje (ver /factchecks). Los precios son lo último publicado con su fecha — confirma en sitio; las cuotas cambian sin aviso.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Want this list to update itself?', '¿Quieres que esta lista se actualice sola?')}</p>
  <p class="text-orange-100 text-sm mb-4">${t('Every week we send the events, openings and plans actually worth your weekend in SLP.', 'Cada semana enviamos los eventos, aperturas y planes que sí valen tu fin de semana en SLP.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faq, null, 2)}
</script>

</div>`;
}

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: '/images/experiences/San-Luis-Potosi-Ciudad.webp',
  category: 'Travel',
  tags: ['things-to-do', 'san-luis-potosi', 'travel', 'centro-historico', 'museums', 'tangamanga', 'huasteca-potosina', 'day-trips', 'fenapo', 'food', '2026'],

  title: "50 Things to Do in San Luis Potosí (2026 Local's Guide)",
  excerpt: "The fact-checked local list: UNESCO pedestrian streets, the Leonora Carrington museum in a panopticon prison, Mexico's second-largest urban park, enchiladas potosinas, silver ghost towns and the Huasteca — 50 plans with verified prices and hours.",
  content: buildContent(false),
  meta_title: "50 Things to Do in San Luis Potosí (2026) | Local's Guide",
  meta_description: 'What to do in San Luis Potosí: Centro Histórico, museums with verified prices, Parque Tangamanga, food, day trips, FENAPO and the Huasteca. 50 fact-checked plans by locals.',

  title_es: '50 cosas que hacer en San Luis Potosí — guía local 2026',
  excerpt_es: 'La lista local verificada: calles peatonales UNESCO, el museo Leonora Carrington en una cárcel panóptica, el segundo parque urbano más grande de México, enchiladas potosinas, pueblos fantasma de plata y la Huasteca — 50 planes con precios y horarios confirmados.',
  content_es: buildContent(true),
  meta_title_es: '50 cosas que hacer en San Luis Potosí (2026) | Guía local',
  meta_description_es: 'Qué hacer en San Luis Potosí: Centro Histórico, museos con precios verificados, Parque Tangamanga, comida, escapadas, FENAPO y la Huasteca. 50 planes verificados por locales.',

  title_de: '50 Aktivitäten in San Luis Potosí (Guide 2026)',
  excerpt_de: 'Die faktengeprüfte Liste von Einheimischen: UNESCO-Fußgängerzone, das Leonora-Carrington-Museum im Panoptikum-Gefängnis, Mexikos zweitgrößter Stadtpark, Enchiladas Potosinas, Silber-Geisterstädte und die Huasteca — 50 Pläne mit verifizierten Preisen und Zeiten.',
  content_de: buildContent(false),
  meta_title_de: '50 Aktivitäten in San Luis Potosí 2026 | Lokaler Guide',
  meta_description_de: 'Was tun in San Luis Potosí: Centro Histórico, Museen mit geprüften Preisen, Parque Tangamanga, Essen, Tagesausflüge, FENAPO und die Huasteca. 50 verifizierte Pläne.',

  title_ja: 'サン・ルイス・ポトシでやるべき50のこと（2026年地元ガイド）',
  excerpt_ja: '地元による検証済みリスト：ユネスコ登録の歩行者天国、パノプティコン刑務所跡のレオノーラ・キャリントン美術館、メキシコ第2の都市公園、エンチラーダス・ポトシーナス、銀のゴーストタウン、そしてワステカ——料金・営業時間を確認済みの50プラン。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ観光50選 2026 | 地元ガイド',
  meta_description_ja: 'サン・ルイス・ポトシですること：セントロ歴史地区、料金確認済みの美術館、タンガマンガ公園、グルメ、日帰り旅行、FENAPO、ワステカ。地元検証の50プラン。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }
  const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', SLUG).maybeSingle();
  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('Post published! ID:', data.id);
  }
  console.log(`\nView at: https://www.sanluisway.com/blog/${SLUG}`);
}

main();
