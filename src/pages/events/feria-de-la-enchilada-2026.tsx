import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CalendarIcon, MapPinIcon, SparklesIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

// Feria Nacional de la Enchilada (FENAE) — facts verified 2026-07 against:
// - turismo.slp.gob.mx/eventos/2026/3/13/feria-nacional-de-la-enchilada/
// - metropolisanluis.com (2026 dates Apr 4-12; closing balance: 600k+ visitors,
//   250M+ MXN economic impact)
// - infobae.com/mexico/2026/02/28 (fair born 2012, free rides, cartelera)
// - municipiosoledad.gob.mx (official municipal recaps)
// - sanluis.eluniversal.com.mx (free-concert lineup)
// - vanguardia.com.mx (enchilada potosina created 1919 by Cristina Jalomo;
//   state intangible-cultural-heritage declaration, origin Soledad).
// 2027 edition NOT announced as of July 2026 — page states this honestly.

const ARTISTS_2026 = [
  'Gloria Trevi',
  'Luis R. Conríquez',
  'La Arrolladora Banda El Limón',
  'Bronco',
  'Los Acosta',
  'Horóscopos de Durango',
];

export default function FeriaDeLaEnchilada2026() {
  const { locale = 'en' } = useRouter();
  const isEs = locale === 'es';
  const L = (es: string, en: string) => (isEs ? es : en);

  const faqs = [
    {
      q: L('¿Qué es la Feria Nacional de la Enchilada (FENAE)?', 'What is the Feria Nacional de la Enchilada (FENAE)?'),
      a: L(
        'Es una feria gastronómica y popular celebrada en Soledad de Graciano Sánchez, en la zona metropolitana de San Luis Potosí, dedicada a la enchilada potosina. Nació en 2012 y combina muestra gastronómica, conciertos gratuitos, juegos mecánicos y actividades culturales.',
        'It is a food-and-fair festival held in Soledad de Graciano Sánchez, in the San Luis Potosí metro area, dedicated to the enchilada potosina. Born in 2012, it combines a gastronomic showcase, free concerts, fair rides and cultural activities.'
      ),
    },
    {
      q: L('¿Cuándo fue la Feria de la Enchilada 2026?', 'When was the Feria de la Enchilada 2026?'),
      a: L(
        'La edición 2026 se celebró del 4 al 12 de abril de 2026 en la plaza principal de Soledad de Graciano Sánchez, según el ayuntamiento y medios locales como Metrópoli San Luis.',
        'The 2026 edition ran April 4–12, 2026 on the main plaza of Soledad de Graciano Sánchez, per the municipal government and local outlets such as Metrópoli San Luis.'
      ),
    },
    {
      q: L('¿Ya hay fechas para la Feria de la Enchilada 2027?', 'Are there dates for the Feria de la Enchilada 2027 yet?'),
      a: L(
        'No. A julio de 2026 el ayuntamiento de Soledad no ha anunciado fechas para 2027. Las ediciones recientes se han celebrado en abril (2025: 18–27 de abril; 2026: 4–12 de abril), así que la ventana típica es la primera quincena o mediados de abril. Actualizaremos esta página cuando haya anuncio oficial.',
        'No. As of July 2026 the Soledad municipal government has not announced 2027 dates. Recent editions have run in April (2025: April 18–27; 2026: April 4–12), so the typical window is early-to-mid April. We will update this page when there is an official announcement.'
      ),
    },
    {
      q: L('¿La entrada es gratuita?', 'Is admission free?'),
      a: L(
        'Sí. La entrada a la feria es libre, y en 2026 también fueron gratuitos los conciertos del Teatro del Pueblo, los juegos mecánicos y las funciones de circo, de acuerdo con el ayuntamiento de Soledad e Infobae.',
        'Yes. Admission is free, and in 2026 the Teatro del Pueblo concerts, the fair rides and the circus shows were also free of charge, according to the Soledad municipal government and Infobae.'
      ),
    },
    {
      q: L('¿Qué es una enchilada potosina?', 'What is an enchilada potosina?'),
      a: L(
        'Una tortilla de masa teñida con chile rojo, rellena de queso, doblada y frita o asada al comal. Se atribuye su creación a doña Cristina Jalomo en Soledad de Graciano Sánchez en 1919, y su preparación fue declarada Patrimonio Cultural Inmaterial del Estado de San Luis Potosí.',
        'A tortilla made from chile-tinted red masa, filled with cheese, folded and griddled or fried. Its creation is credited to Cristina Jalomo in Soledad de Graciano Sánchez in 1919, and its preparation has been declared Intangible Cultural Heritage of the State of San Luis Potosí.'
      ),
    },
    {
      q: L('¿Qué artistas se presentaron en 2026?', 'Which artists performed in 2026?'),
      a: L(
        'El Teatro del Pueblo tuvo conciertos gratuitos de Gloria Trevi, Luis R. Conríquez, La Arrolladora Banda El Limón (que cerró la feria), Bronco, Los Acosta y Horóscopos de Durango, entre otros, según El Universal San Luis y El Sol de San Luis.',
        'The Teatro del Pueblo hosted free concerts by Gloria Trevi, Luis R. Conríquez, La Arrolladora Banda El Limón (who closed the fair), Bronco, Los Acosta and Horóscopos de Durango, among others, per El Universal San Luis and El Sol de San Luis.'
      ),
    },
    {
      q: L('¿Cómo llego desde el centro de San Luis Potosí?', 'How do I get there from downtown San Luis Potosí?'),
      a: L(
        'La feria se monta en la plaza principal de Soledad de Graciano Sánchez, municipio conurbado al noreste de la capital. En auto o taxi/app son unos 20 minutos desde el Centro Histórico; también llegan rutas de transporte urbano que conectan el centro de SLP con el centro de Soledad.',
        'The fair is set up on the main plaza of Soledad de Graciano Sánchez, a municipality adjoining the capital to the northeast. By car or ride-hailing it is about 20 minutes from the Centro Histórico; city bus routes also connect downtown SLP with downtown Soledad.'
      ),
    },
    {
      q: L('¿Qué tan grande fue la edición 2026?', 'How big was the 2026 edition?'),
      a: L(
        'De acuerdo con el ayuntamiento de Soledad y Metrópoli San Luis, la FENAE 2026 superó los 600 mil asistentes en nueve días y dejó una derrama económica estimada en más de 250 millones de pesos — récord de la feria.',
        'According to the Soledad municipal government and Metrópoli San Luis, FENAE 2026 topped 600,000 visitors over nine days and generated an estimated economic impact of over 250 million pesos — a record for the fair.'
      ),
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Article (not Event): the 2026 edition already happened and 2027 dates
      // are unannounced, so Event markup would be invalid/misleading.
      {
        '@type': 'Article',
        headline: isEs
          ? 'Feria Nacional de la Enchilada (FENAE): guía verificada de la feria de Soledad, SLP'
          : 'Feria Nacional de la Enchilada (FENAE): a verified guide to the Soledad, SLP fair',
        description: isEs
          ? 'Qué es la Feria Nacional de la Enchilada, cómo fue la edición 2026 (4–12 de abril, 600 mil asistentes) y qué esperar de la edición 2027.'
          : 'What the Feria Nacional de la Enchilada is, how the 2026 edition went (April 4–12, 600k visitors) and what to expect from the 2027 edition.',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
        author: { '@type': 'Organization', name: 'San Luis Way', url: 'https://www.sanluisway.com' },
        publisher: { '@type': 'Organization', name: 'San Luis Way', url: 'https://www.sanluisway.com' },
        mainEntityOfPage: 'https://www.sanluisway.com/events/feria-de-la-enchilada-2026',
        about: {
          '@type': 'Festival',
          name: 'Feria Nacional de la Enchilada (FENAE)',
          location: {
            '@type': 'Place',
            name: 'Plaza Principal de Soledad de Graciano Sánchez',
            address: { '@type': 'PostalAddress', addressLocality: 'Soledad de Graciano Sánchez', addressRegion: 'SLP', addressCountry: 'MX' },
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanluisway.com' },
          { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://www.sanluisway.com/events' },
          { '@type': 'ListItem', position: 3, name: 'Feria de la Enchilada 2026', item: 'https://www.sanluisway.com/events/feria-de-la-enchilada-2026' },
        ],
      },
    ],
  };

  const stats = [
    { value: '600,000+', label: L('Asistentes en 2026', 'Visitors in 2026') },
    { value: '9', label: L('Días de feria', 'Days of fair') },
    { value: '2012', label: L('Año de origen', 'Founded') },
    { value: L('Gratis', 'Free'), label: L('Entrada y conciertos', 'Entry & concerts') },
  ];

  const expect = [
    { icon: '🌮', title: L('Muestra gastronómica', 'Gastronomic showcase'), desc: L('Cocineras tradicionales de Soledad y de todo el estado preparan enchiladas potosinas frente al público, junto a otros antojitos de la cocina potosina.', 'Traditional cooks from Soledad and across the state prepare enchiladas potosinas in front of visitors, alongside other Potosino antojitos.') },
    { icon: '🎤', title: L('Conciertos gratuitos', 'Free concerts'), desc: L('El Teatro del Pueblo programa artistas nacionales de primer nivel sin costo. En 2026 pasaron Gloria Trevi, Luis R. Conríquez y La Arrolladora, entre otros.', 'The Teatro del Pueblo stage books top national acts at no cost. In 2026 it hosted Gloria Trevi, Luis R. Conríquez and La Arrolladora, among others.') },
    { icon: '🎡', title: L('Juegos mecánicos gratis', 'Free fair rides'), desc: L('En la edición 2026 los juegos mecánicos y las funciones de circo fueron gratuitos, según el ayuntamiento de Soledad.', 'In the 2026 edition the mechanical rides and circus shows were free of charge, per the Soledad municipal government.') },
    { icon: '🏆', title: L('Concurso culinario', 'Cooking contest'), desc: L('Concurso de cocina en torno a la enchilada potosina con bolsa de premios superior a 30 mil pesos en 2026 (Infobae).', 'A cooking contest around the enchilada potosina with a prize pool above 30,000 pesos in 2026 (Infobae).') },
  ];

  return (
    <>
      <SEO
        title={L(
          'Feria de la Enchilada 2026 (FENAE) — Soledad, San Luis Potosí: guía y fechas',
          'Feria de la Enchilada 2026 (FENAE) — Soledad, San Luis Potosí: Guide & Dates'
        )}
        description={L(
          'La Feria Nacional de la Enchilada 2026 se celebró del 4 al 12 de abril en Soledad de Graciano Sánchez con más de 600 mil asistentes. Qué es, historia verificada, qué esperar y cuándo será la edición 2027.',
          'The Feria Nacional de la Enchilada 2026 ran April 4–12 in Soledad de Graciano Sánchez with 600,000+ visitors. What it is, verified history, what to expect, and when the 2027 edition may be.'
        )}
        keywords="feria de la enchilada 2026, FENAE 2026, feria nacional de la enchilada, Soledad de Graciano Sánchez, enchiladas potosinas, feria enchilada 2027"
        ogImage="/images/food/enchiladas-potosinas.jpg"
        structuredData={structuredData as Record<string, unknown>}
      />

      {/* Post-event banner — the 2026 fair ended April 12; keep the query
          equity and set honest expectations for 2027. */}
      <section className="bg-gradient-to-r from-red-700 to-orange-700 text-white py-5 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base leading-relaxed">
            <strong>
              {L(
                '🌶️ La FENAE 2026 se celebró del 4 al 12 de abril con más de 600 mil asistentes.',
                '🌶️ FENAE 2026 ran April 4–12 with more than 600,000 visitors.'
              )}
            </strong>{' '}
            {L(
              'Las fechas 2027 aún no se anuncian — publicaremos la información en cuanto sea oficial.',
              '2027 dates have not been announced yet — we will publish them as soon as they are official.'
            )}
          </p>
          <Link
            href="/subscribe"
            className="shrink-0 bg-white text-red-700 font-bold px-5 py-2.5 rounded-full hover:bg-red-50 transition-colors text-sm"
          >
            {L('Avísame del 2027', 'Tell me about 2027')}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-950 via-orange-900 to-amber-950 text-white overflow-hidden">
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 rounded-full px-4 py-1.5 mb-6">
                <SparklesIcon className="w-4 h-4 text-orange-300" />
                <span className="text-orange-200 text-xs font-bold uppercase tracking-widest">
                  {L('Feria gastronómica · Soledad, SLP', 'Food fair · Soledad, SLP')}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2 text-orange-200">
                <CalendarIcon className="w-5 h-5" />
                <span className="font-medium">
                  {L('Edición 2026: 4–12 de abril (concluida)', '2026 edition: April 4–12 (concluded)')}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3 text-orange-200/80">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">
                  {L('Plaza Principal, Soledad de Graciano Sánchez', 'Main Plaza, Soledad de Graciano Sánchez')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-3">
                {L('Feria Nacional de la Enchilada (FENAE)', 'Feria Nacional de la Enchilada (FENAE)')}
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-300 font-semibold mb-5">
                {L(
                  'La fiesta del platillo más emblemático de San Luis Potosí',
                  'The festival of San Luis Potosí’s most iconic dish'
                )}
              </h2>
              <p className="text-lg text-white/85 max-w-2xl mb-8">
                {L(
                  'Cada abril, Soledad de Graciano Sánchez convierte su plaza principal en la capital de la enchilada potosina: muestra gastronómica, conciertos gratuitos y juegos para toda la familia, con entrada libre.',
                  'Every April, Soledad de Graciano Sánchez turns its main plaza into the capital of the enchilada potosina: a gastronomic showcase, free concerts and rides for the whole family, with free admission.'
                )}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/55 uppercase tracking-wider leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-orange-400/20 shadow-2xl">
              <Image
                src="/images/food/enchiladas-potosinas.jpg"
                alt={L('Enchiladas potosinas, platillo emblema de la FENAE', 'Enchiladas potosinas, the signature dish of FENAE')}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            {L('Historia verificada', 'Verified history')}
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              {L(
                'La enchilada potosina nació en Soledad de Graciano Sánchez: su creación se atribuye a doña Cristina Jalomo, quien alrededor de 1919 comenzó a preparar tortillas de masa teñida con chile rojo rellenas de queso (Vanguardia). El platillo y su técnica de preparación han sido declarados Patrimonio Cultural Inmaterial del Estado de San Luis Potosí.',
                'The enchilada potosina was born in Soledad de Graciano Sánchez: its creation is credited to Cristina Jalomo, who around 1919 began preparing chile-tinted red masa tortillas filled with cheese (Vanguardia). The dish and its preparation technique have been declared Intangible Cultural Heritage of the State of San Luis Potosí.'
              )}
            </p>
            <p>
              {L(
                'La feria que la celebra es más reciente: la Feria Nacional de la Enchilada se fundó en 2012 (Infobae) y desde entonces se realiza cada año en la plaza principal de Soledad. En poco más de una década pasó de festival local a una de las ferias más concurridas del centro del país.',
                'The fair that celebrates it is more recent: the Feria Nacional de la Enchilada was founded in 2012 (Infobae) and has been held annually on Soledad’s main plaza ever since. In just over a decade it grew from a local festival into one of the busiest fairs in central Mexico.'
              )}
            </p>
            <p>
              {L(
                'La edición 2026 (4 al 12 de abril) fue la más grande registrada: el ayuntamiento reportó más de 600 mil asistentes y una derrama económica superior a 250 millones de pesos (Metrópoli San Luis, Gobierno Municipal de Soledad).',
                'The 2026 edition (April 4–12) was the largest on record: the municipal government reported more than 600,000 visitors and an economic impact above 250 million pesos (Metrópoli San Luis, Soledad Municipal Government).'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="my-8"><AdUnit placement="mid-content" /></section>

      {/* 2026 recap — free concerts */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Así fue la FENAE 2026', 'How FENAE 2026 went')}
            </h2>
            <p className="text-gray-400">
              {L(
                'Conciertos gratuitos en el Teatro del Pueblo (fuente: El Universal San Luis / El Sol de San Luis)',
                'Free concerts at the Teatro del Pueblo (source: El Universal San Luis / El Sol de San Luis)'
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ARTISTS_2026.map((artist) => (
              <div key={artist} className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center gap-3">
                <MusicalNoteIcon className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="font-semibold text-sm">{artist}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {L(
              'La Arrolladora Banda El Limón cerró la feria el 12 de abril ante un lleno total.',
              'La Arrolladora Banda El Limón closed the fair on April 12 before a packed plaza.'
            )}
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Qué esperar de la feria', 'What to expect at the fair')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {L(
                'Lo que ha ofrecido la FENAE en sus ediciones recientes.',
                'What FENAE has offered in its recent editions.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {expect.map((item) => (
              <div key={item.icon} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-orange-300 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting there */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">{L('Cómo llegar', 'Getting there')}</h2>
            <p className="text-gray-400">
              {L(
                'Plaza Principal de Soledad de Graciano Sánchez, zona metropolitana de SLP',
                'Main Plaza of Soledad de Graciano Sánchez, SLP metro area'
              )}
            </p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps?q=Plaza+Principal+Soledad+de+Graciano+Sanchez+San+Luis+Potosi&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={L('Mapa: Plaza Principal de Soledad de Graciano Sánchez', 'Map: Main Plaza of Soledad de Graciano Sánchez')}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: '🚗', title: L('En auto o app', 'By car or ride-hailing'), desc: L('Unos 20 minutos desde el Centro Histórico de SLP hacia el noreste. En días pico el cierre de calles alrededor de la plaza es habitual; considera llegar temprano.', 'About 20 minutes northeast of SLP’s Centro Histórico. Street closures around the plaza are common on peak days; plan to arrive early.') },
              { icon: '🚌', title: L('Transporte público', 'Public transport'), desc: L('Rutas urbanas conectan el centro de San Luis Potosí con el centro de Soledad durante todo el día.', 'City bus routes connect downtown San Luis Potosí with downtown Soledad throughout the day.') },
              { icon: '🌮', title: L('El resto del año', 'The rest of the year'), desc: L('Sin feria, las enchiladas potosinas se consiguen todo el año en los portales y fondas del centro de Soledad, su lugar de origen.', 'Outside fair season, enchiladas potosinas are available year-round at the portales and fondas of downtown Soledad, their birthplace.') },
            ].map((card) => (
              <div key={card.icon} className="bg-gray-800 rounded-xl p-5 flex gap-3">
                <span className="text-2xl shrink-0">{card.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1 text-sm">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-serif mb-10 text-center">
            {L('Preguntas frecuentes', 'Frequently asked questions')}
          </h2>
          <div className="space-y-7">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-800 pb-7">
                <p className="font-bold text-white mb-2">{f.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 mb-8"><AdUnit placement="top-banner" /></section>

      {/* CTA + internal links */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-950 via-orange-900 to-amber-950 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">
            {L('Más fiestas y festivales potosinos', 'More Potosino fairs and festivals')}
          </h2>
          <p className="text-white/85 mb-8">
            {L(
              'Mientras llega la FENAE 2027, explora los festivales culturales del estado o revisa qué hay esta semana en San Luis.',
              'While FENAE 2027 arrives, explore the state’s cultural festivals or see what’s on this week in San Luis.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cultural/festivals"
              className="bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold px-8 py-4 rounded-full transition-colors"
            >
              {L('Festivales culturales', 'Cultural festivals')}
            </Link>
            <Link
              href="/events/this-week"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              {L('Eventos de esta semana', 'Events this week')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
