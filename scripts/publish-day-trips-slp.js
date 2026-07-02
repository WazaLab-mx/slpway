// Publishes "7 Best Day Trips from San Luis Potosí (2026)" — Tier 1 #5,
// closing the travel cluster. Facts from the verified dossier of 2026-07-02.
// Cautions applied: "La Joyita" dropped, Eisenstein claim dropped (Mask of
// Zorro verified), Guadalcázar is NOT a Pueblo Mágico, Huasteca/Xilitla get
// an honest "not a day trip" box, prices labeled with their period.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'day-trips-from-san-luis-potosi-2026';

// [num, title, dist EN, dist ES, body EN, body ES, badge EN, badge ES]
const TRIPS = [
  ['1', 'Cerro de San Pedro', '22 km · ~35 min · free', '22 km · ~35 min · gratis',
    "The ghost mining town that gave the whole state its name, 35 minutes from your door. Cobblestone lanes, roofless stone houses, two colonial churches (San Nicolás Tolentino, patron of miners, and the 17th-century San Pedro Apóstol), a walk-in mine tunnel and gorditas on the plaza. It wakes up on weekends — that's when the artisan shop and the handful of restaurants open. Even the city bus goes (Ruta 39 from the Alameda). The bittersweet context: a modern open-pit operation consumed the namesake hill itself before winding down; the village that survived is the attraction.",
    'El pueblo minero fantasma que le dio nombre a todo el estado, a 35 minutos de tu puerta. Callejones empedrados, casas de piedra sin techo, dos templos coloniales (San Nicolás Tolentino, patrón de los mineros, y San Pedro Apóstol del siglo XVII), un túnel de mina visitable y gorditas en la plaza. Despierta los fines de semana — cuando abren la tienda artesanal y los pocos restaurantes. Hasta el camión urbano llega (Ruta 39 desde la Alameda). El contexto agridulce: una mina moderna a cielo abierto consumió el cerro epónimo antes de apagarse; el pueblo que sobrevivió es el atractivo.',
    'Closest', 'El más cercano'],
  ['2', 'Santa María del Río', '48 km · ~40 min · free', '48 km · ~40 min · gratis',
    "The 'cradle of the rebozo' — a Pueblo Mágico (2020) where silk shawls are still ikat-dyed and woven on backstrap looms, a tradition running through the Taller Escuela de Rebocería (founded 1953) and family workshops you can visit. Buy directly from the weavers around the Palacio Municipal; try queso de tuna and asado de boda; if you come in early August, the Feria del Rebozo takes over town. Pair it with the Ojo Caliente thermal pools nearby (MX$140 adults, Tue–Sun) or the historic Balneario de Lourdes springs. Buses run constantly (~MX$40–70).",
    "La 'cuna del rebozo' — Pueblo Mágico (2020) donde los rebozos de seda todavía se tiñen en ikat y se tejen en telar de cintura, tradición que corre por el Taller Escuela de Rebocería (fundado en 1953) y talleres familiares visitables. Compra directo a las tejedoras alrededor del Palacio Municipal; prueba el queso de tuna y el asado de boda; si vienes a inicios de agosto, la Feria del Rebozo toma el pueblo. Combínalo con las aguas termales de Ojo Caliente ($140 adultos, mar–dom) o el histórico Balneario de Lourdes. Hay camiones todo el día (~$40–70).",
    'Culture', 'Cultura'],
  ['3', 'Balneario Gogorrón + the hacienda', '61 km · ~1 h · MX$100–120', '61 km · ~1 h · $100–120',
    "Thermal water at ~42°C feeding five pools, slides, picnic lawns and Roman tubs — the classic potosino family plan, rescued and relaunched by the state in 2023 after years of abandonment (open daily ~9–5; MX$100–120 latest published, confirm at 444 812 1550). Ten minutes away, the Ex-Hacienda San Pedro de Gogorrón (1592) is free to wander — you've seen it before without knowing: The Mask of Zorro filmed here. Car recommended.",
    'Agua termal a ~42°C alimentando cinco albercas, toboganes, jardines de picnic y tinas romanas — el plan familiar potosino clásico, rescatado y relanzado por el estado en 2023 tras años de abandono (abre diario ~9–5; $100–120 según lo último publicado, confirma al 444 812 1550). A diez minutos, la Ex-Hacienda San Pedro de Gogorrón (1592) se recorre gratis — ya la viste sin saberlo: ahí se filmó La Máscara del Zorro. Recomendable en coche.',
    'Family', 'Familiar'],
  ['4', 'Sierra de Álvarez', '~50 km · ~1 h · no formal fee', '~50 km · ~1 h · sin cuota formal',
    "The pine-and-oak wall east of the city on Highway 70: trails at Las Rusias, El Milagro and San Francisco for all levels, mountain biking, and — for technical cavers — 100+ sinkholes including the 678-m Resumidero del Borbollón. No formal entrance (ejido-run spots may charge small parking fees); local outfitters run guided hikes. Car only. Note: the separate Parque Nacional El Potosí (camping, lookouts) is a different, farther area (~2 h) toward Rioverde.",
    'La muralla de pino y encino al oriente de la ciudad sobre la carretera 70: senderos en Las Rusias, El Milagro y San Francisco para todos los niveles, ciclismo de montaña y — para espeleólogos técnicos — más de 100 sótanos incluido el Resumidero del Borbollón de 678 m. Sin entrada formal (los parajes ejidales pueden cobrar estacionamiento); hay operadores locales con caminatas guiadas. Solo en coche. Ojo: el Parque Nacional El Potosí (camping, miradores) es otra área más lejana (~2 h) rumbo a Rioverde.',
    'Hiking', 'Senderismo'],
  ['5', 'Guadalcázar & the Gruta de las Candelas', '~90 km · ~1.5 h · small local fees', '~90 km · ~1.5 h · cuotas locales menores',
    "An old mining town in the high desert (not a Pueblo Mágico, despite aspirations) hiding one of the state's most accessible show caves: Las Candelas, 5 km from town, stalactites and stalagmites with a picnic esplanade and camping at the mouth (last stretch is dirt road; a local guide is wise for the deeper galleries). Guadalcázar is also a documented sport-climbing destination. Car only.",
    "Un antiguo pueblo minero del altiplano (no es Pueblo Mágico, aunque aspira) que esconde una de las grutas más accesibles del estado: Las Candelas, a 5 km del pueblo, estalactitas y estalagmitas con explanada de picnic y camping en la boca (el último tramo es terracería; un guía local conviene para las galerías profundas). Guadalcázar también es destino documentado de escalada deportiva. Solo en coche.",
    'Adventure', 'Aventura'],
  ['6', 'Media Luna (Rioverde)', '~130 km · ~2 h · MX$100', '~130 km · ~2 h · $100',
    "A crescent-shaped spring of impossibly clear thermal water (27–30°C year-round, up to 30 m visibility) with petrified trees on the bottom and PADI dive schools among the channels. Swim, snorkel (~MX$200 rental), camp (MX$150/tent). Entry MX$100 adults as of mid-2025 — a rise to 150 has circulated locally, confirm at 487 101 5874. Hours 8–5; no alcohol, no pets. Doable by bus to Rioverde + taxi, easier by car.",
    'Un manantial en forma de media luna de agua termal imposiblemente clara (27–30°C todo el año, hasta 30 m de visibilidad) con árboles petrificados al fondo y escuelas PADI entre los canales. Nada, esnorquelea (~$200 la renta), acampa ($150 por tienda). Entrada $100 adultos a mediados de 2025 — circula un alza a 150, confirma al 487 101 5874. Horario 8–5; sin alcohol ni mascotas. Se puede en autobús a Rioverde + taxi; más fácil en coche.',
    'Swimming', 'Para nadar'],
  ['7', 'Real de Catorce', '223 km · ~3.5 h · tunnel toll', '223 km · ~3.5 h · peaje del túnel',
    "The big one — a silver ghost town at 2,730 m entered through a 2.3 km mining tunnel. As a day trip it's a long but classic run: leave at 7, climb the cobblestone after Matehuala, willys ride or ghost-town walk, lunch at the Mesón de la Abundancia, back by dark (never drive the sierra at night). Honestly better as an overnight — our complete guide covers everything.",
    'El grande — un pueblo fantasma de plata a 2,730 m al que se entra por un túnel minero de 2.3 km. Como day trip es una corrida larga pero clásica: sal a las 7, sube el empedrado después de Matehuala, willys o caminata al Pueblo Fantasma, comida en el Mesón de la Abundancia y de regreso antes de que oscurezca (nunca manejes la sierra de noche). Honestamente mejor con una noche — nuestra guía completa lo cubre todo.',
    'The classic', 'El clásico'],
];

function tripCards(isEs) {
  return TRIPS.map(
    ([num, title, distEn, distEs, bodyEn, bodyEs, badgeEn, badgeEs]) => `
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">${num}.</span>${title}</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">${isEs ? badgeEs : badgeEn}</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">${isEs ? distEs : distEn}</p>
    <p class="text-sm text-gray-700 leading-relaxed">${isEs ? bodyEs : bodyEn}</p>
  </div>`
  ).join('\n');
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best day trips from San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'The seven that actually work as day trips: Cerro de San Pedro (ghost mining town, 35 min), Santa María del Río (rebozo Pueblo Mágico, 40 min), Balneario Gogorrón thermal pools + the Mask-of-Zorro hacienda (~1 h), Sierra de Álvarez hiking (~1 h), Guadalcázar and the Candelas cave (~1.5 h), Media Luna crystal spring (~2 h) and — the long classic — Real de Catorce (~3.5 h each way).' } },
    { '@type': 'Question', name: 'What is the closest day trip to San Luis Potosí city?', acceptedAnswer: { '@type': 'Answer', text: 'Cerro de San Pedro, the semi-abandoned mining town that gave the state its name — 22 km, about 35 minutes, free to visit, and even reachable on the Ruta 39 city bus. Go on a weekend, when its restaurants and artisan shop open.' } },
    { '@type': 'Question', name: 'Can you visit the Huasteca Potosina as a day trip from SLP city?', acceptedAnswer: { '@type': 'Answer', text: "Honestly, no. Tamasopo — the nearest Huasteca waterfall zone — is 2.5–3 hours each way on a winding mountain highway, and Xilitla or Tamul run 4+ hours each way. You'd spend 6 hours driving for 3 hours of swimming. Treat the Huasteca as an overnight (minimum) using Ciudad Valles as a base." } },
    { '@type': 'Question', name: 'Do you need a car for day trips from San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'For most, yes — Sierra de Álvarez, Guadalcázar and the Gogorrón pools are car-only in practice. The exceptions: Cerro de San Pedro (Ruta 39 city bus), Santa María del Río (constant buses, ~MX$40–70) and Media Luna (bus to Rioverde + taxi). Real de Catorce works by bus to Matehuala + combi, but a car makes the day realistic.' } },
    { '@type': 'Question', name: 'Are there hot springs near San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Three within ~an hour: the relaunched Balneario Gogorrón (five thermal pools at ~42°C, MX$100–120), the Ojo Caliente pools near Santa María del Río (MX$140 adults), and the historic Balneario de Lourdes springs. For thermal water you can snorkel in, Media Luna near Rioverde (27–30°C year-round) is two hours out.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuáles son los mejores day trips desde San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Los siete que de verdad funcionan en un día: Cerro de San Pedro (pueblo minero fantasma, 35 min), Santa María del Río (Pueblo Mágico del rebozo, 40 min), Balneario Gogorrón + la hacienda de La Máscara del Zorro (~1 h), senderismo en la Sierra de Álvarez (~1 h), Guadalcázar y la Gruta de las Candelas (~1.5 h), la Media Luna (~2 h) y — el clásico largo — Real de Catorce (~3.5 h por trayecto).' } },
    { '@type': 'Question', name: '¿Cuál es la escapada más cercana a la capital?', acceptedAnswer: { '@type': 'Answer', text: 'Cerro de San Pedro, el pueblo minero semiabandonado que le dio nombre al estado — 22 km, unos 35 minutos, gratis, y hasta llega el camión urbano (Ruta 39). Ve en fin de semana, cuando abren sus restaurantes y la tienda artesanal.' } },
    { '@type': 'Question', name: '¿Se puede visitar la Huasteca Potosina en un día desde la capital?', acceptedAnswer: { '@type': 'Answer', text: 'Honestamente, no. Tamasopo — la zona de cascadas más cercana — queda a 2.5–3 horas por trayecto en carretera de montaña, y Xilitla o Tamul a 4+ horas. Pasarías 6 horas manejando por 3 de alberca. Trata a la Huasteca como viaje de al menos una noche con base en Ciudad Valles.' } },
    { '@type': 'Question', name: '¿Necesitas coche para estas escapadas?', acceptedAnswer: { '@type': 'Answer', text: 'Para la mayoría sí — Sierra de Álvarez, Guadalcázar y Gogorrón son de coche en la práctica. Las excepciones: Cerro de San Pedro (Ruta 39), Santa María del Río (camiones constantes, ~$40–70) y Media Luna (autobús a Rioverde + taxi). Real de Catorce se puede en autobús a Matehuala + combi, pero el coche hace el día realista.' } },
    { '@type': 'Question', name: '¿Hay aguas termales cerca de San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Tres a ~una hora: el relanzado Balneario Gogorrón (cinco albercas termales a ~42°C, $100–120), las albercas de Ojo Caliente junto a Santa María del Río ($140 adultos) y el histórico Balneario de Lourdes. Para agua termal donde puedas esnorquelear, la Media Luna de Rioverde (27–30°C todo el año) queda a dos horas.' } },
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
    "<strong>San Luis Potosí city sits at the crossroads of three completely different worlds</strong> — high-desert ghost towns, thermal-spring country and pine-forest sierra — and seven genuinely great escapes fit inside a single day. Verified distances, prices and honest verdicts (including which famous trips do NOT work as day trips).",
    '<strong>La capital potosina está en el cruce de tres mundos completamente distintos</strong> — pueblos fantasma del altiplano, país de aguas termales y sierra de pinos — y siete escapadas genuinamente buenas caben en un solo día. Distancias y precios verificados y veredictos honestos (incluyendo cuáles viajes famosos NO funcionan en un día).'
  )}
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    ${t(
      '<strong>The seven, by distance:</strong> Cerro de San Pedro (35 min), Santa María del Río (40 min), Balneario Gogorrón + hacienda (1 h), Sierra de Álvarez (1 h), Guadalcázar (1.5 h), Media Luna (2 h), Real de Catorce (3.5 h). The Huasteca is <em>not</em> on this list on purpose — it deserves a night.',
      '<strong>Las siete, por distancia:</strong> Cerro de San Pedro (35 min), Santa María del Río (40 min), Balneario Gogorrón + hacienda (1 h), Sierra de Álvarez (1 h), Guadalcázar (1.5 h), Media Luna (2 h), Real de Catorce (3.5 h). La Huasteca <em>no</em> está en la lista a propósito — merece una noche.'
    )}
  </p>
</div>

<div class="space-y-6 mb-12">
${tripCards(isEs)}
</div>

<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-red-900 mb-3">${t("The honest 'not a day trip' box", 'El recuadro honesto de "no es day trip"')}</h2>
  <p class="text-gray-800 leading-relaxed mb-3">${t(
    "<strong>The Huasteca Potosina:</strong> Tamasopo is 2.5–3 h each way on a winding mountain road; Tamul and Aquismón 4+; Xilitla 4.5. A 'day trip' means 6+ hours of driving for 3 hours of waterfall. Do it right instead: our <a href='/blog/huasteca-potosina-itinerary-2026' class='text-red-800 underline font-semibold'>3/5/7-day Huasteca itinerary</a> and the <a href='/blog/xilitla-las-pozas-guide-2026' class='text-red-800 underline font-semibold'>Xilitla deep-dive</a> are built for overnights from Ciudad Valles.",
    "<strong>La Huasteca Potosina:</strong> Tamasopo queda a 2.5–3 h por trayecto en carretera de montaña; Tamul y Aquismón a 4+; Xilitla a 4.5. Un 'day trip' significa 6+ horas de volante por 3 de cascada. Mejor hazlo bien: nuestro <a href='/blog/huasteca-potosina-itinerary-2026' class='text-red-800 underline font-semibold'>itinerario de 3/5/7 días</a> y el <a href='/blog/xilitla-las-pozas-guide-2026' class='text-red-800 underline font-semibold'>deep-dive de Xilitla</a> están armados para pernoctar con base en Ciudad Valles."
  )}</p>
  <p class="text-gray-800 leading-relaxed">${t(
    "<strong>Real de Catorce</strong> makes the list as a long classic — but it's better overnight too: the <a href='/blog/real-de-catorce-guide-2026' class='text-red-800 underline font-semibold'>complete guide</a> has hotels from ~MX$950.",
    "<strong>Real de Catorce</strong> entra en la lista como clásico largo — pero también es mejor con noche: la <a href='/blog/real-de-catorce-guide-2026' class='text-red-800 underline font-semibold'>guía completa</a> trae hoteles desde ~$950."
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
    'Verified July 2026: Turismo SLP and SIC Cultura (Santa María del Río, taller 1953, Pueblo Mágico Dec 2020), El Universal SLP (Ojo Caliente, Gogorrón prices Aug 2024, Media Luna prices May 2025, Gruta de las Candelas, Huasteca drive times), CONANP (Sierra de Álvarez and PN El Potosí protected areas), state and municipal announcements (Gogorrón relaunch 2023, Ruta de las Haciendas), El Rutero/Moovit (Ruta 39), realdecatorce.info (route via Matehuala), Wikipedia/IMDb (Mask of Zorro at Hacienda Gogorrón). Prices are latest-published figures with their dates — confirm locally; rural fees change without notice.',
    'Verificado en julio 2026: Turismo SLP y SIC Cultura (Santa María del Río, taller 1953, Pueblo Mágico dic 2020), El Universal SLP (Ojo Caliente, precios de Gogorrón ago 2024, Media Luna may 2025, Gruta de las Candelas, tiempos a la Huasteca), CONANP (Sierra de Álvarez y PN El Potosí), anuncios estatales y municipales (relanzamiento de Gogorrón 2023, Ruta de las Haciendas), El Rutero/Moovit (Ruta 39), realdecatorce.info (ruta por Matehuala), Wikipedia/IMDb (La Máscara del Zorro en la Hacienda Gogorrón). Los precios son lo último publicado con su fecha — confirma en sitio; las cuotas rurales cambian sin aviso.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Want a weekend instead of a day?', '¿Mejor un fin de semana que un día?')}</p>
  <p class="text-orange-100 text-sm mb-4">${t('See our <a href="/weekend-getaways" class="underline font-semibold text-white">weekend getaways guide</a> — or get the weekly agenda free.', 'Mira nuestra <a href="/weekend-getaways" class="underline font-semibold text-white">guía de escapadas de fin de semana</a> — o recibe la agenda semanal gratis.')}</p>
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
  image_url: '/images/outdoors/hiking.jpg',
  category: 'Travel',
  tags: ['day-trips', 'travel', 'san-luis-potosi', 'cerro-de-san-pedro', 'santa-maria-del-rio', 'media-luna', 'gogorron', 'real-de-catorce', 'mexico', '2026'],

  title: '7 Best Day Trips from San Luis Potosí (2026): Verified Distances & Prices',
  excerpt: "Ghost mining towns 35 minutes away, rebozo weavers, relaunched thermal pools, a crystal spring you can snorkel, a show cave and the Real de Catorce classic — plus the honest verdict on why the Huasteca is NOT a day trip.",
  content: buildContent(false),
  meta_title: '7 Best Day Trips from San Luis Potosí 2026 | Distances & Prices',
  meta_description: 'The 7 day trips that actually work from SLP city: Cerro de San Pedro, Santa María del Río, Gogorrón hot springs, Sierra de Álvarez, Guadalcázar, Media Luna and Real de Catorce. Verified 2026 info.',

  title_es: 'Las 7 Mejores Escapadas de un Día desde San Luis Potosí (2026)',
  excerpt_es: 'Pueblos mineros fantasma a 35 minutos, tejedoras de rebozo, aguas termales relanzadas, un manantial cristalino para esnorquelear, una gruta y el clásico Real de Catorce — más el veredicto honesto de por qué la Huasteca NO es day trip.',
  content_es: buildContent(true),
  meta_title_es: '7 Escapadas de un Día desde San Luis Potosí 2026 | Distancias y Precios',
  meta_description_es: 'Las 7 escapadas que sí funcionan en un día desde la capital: Cerro de San Pedro, Santa María del Río, Gogorrón, Sierra de Álvarez, Guadalcázar, Media Luna y Real de Catorce. Info verificada 2026.',

  title_de: 'Die 7 besten Tagesausflüge ab San Luis Potosí (2026)',
  excerpt_de: 'Geisterstädte 35 Minuten entfernt, Rebozo-Weberinnen, Thermalbäder, eine kristallklare Quelle zum Schnorcheln, eine Tropfsteinhöhle und der Klassiker Real de Catorce — plus das ehrliche Urteil, warum die Huasteca KEIN Tagesausflug ist.',
  content_de: buildContent(false),
  meta_title_de: '7 Tagesausflüge ab San Luis Potosí 2026 | Distanzen & Preise',
  meta_description_de: 'Die 7 Tagesausflüge, die ab SLP wirklich funktionieren: Cerro de San Pedro, Santa María del Río, Gogorrón, Sierra de Álvarez, Guadalcázar, Media Luna, Real de Catorce.',

  title_ja: 'サン・ルイス・ポトシ発 日帰り旅行ベスト7（2026年）',
  excerpt_ja: '車で35分のゴーストタウン、レボソ織りの町、温泉プール、シュノーケルできる透明な泉、鍾乳洞、そして定番レアル・デ・カトルセ——ワステカが日帰りに向かない正直な理由も。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ日帰り旅行ベスト7 2026 | 距離・料金',
  meta_description_ja: 'SLP発で本当に日帰りできる7つの旅先：セロ・デ・サン・ペドロ、サンタ・マリア・デル・リオ、ゴゴロン温泉、メディア・ルナ、レアル・デ・カトルセ。2026年検証済み。',
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
