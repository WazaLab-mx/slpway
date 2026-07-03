import Link from 'next/link';
import { useRouter } from 'next/router';
import { CalendarIcon, MapPinIcon, TrophyIcon, ClockIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

// Medio Maratón UASLP 2026 — facts verified 2026-07 against:
// - mediomaraton.uaslp.mx (official registration portal)
// - elexpres.com (nota 363517: registration opened June 1; prices; caps;
//   in-person modules; deadline two weeks before or sell-out)
// - liderlife.liderempresarial.com + canal7slp.tv (date Sept 27; SLP routes
//   start/finish Álvaro Obregón 64; 5K finish Av. V. Carranza 235; Valles)
// - palestra.com.mx / mediastintasslp.com.mx (2025 race was the 42nd edition,
//   so 2026 is edition 43 — the site DB title saying "42nd" was wrong)
// - wp.uaslp.mx (41st edition set an attendance record).

const REGISTRATION_URL = 'https://mediomaraton.uaslp.mx/';

export default function MedioMaratonUaslp2026() {
  const { locale = 'en' } = useRouter();
  const isEs = locale === 'es';
  const L = (es: string, en: string) => (isEs ? es : en);

  const distances = [
    {
      name: '21K',
      price: '$500 MXN',
      color: 'border-blue-700 bg-blue-950/60',
      accent: 'text-blue-400',
      desc: L(
        'La prueba estelar. Salida y meta en Álvaro Obregón 64, Centro Histórico de SLP.',
        'The flagship race. Start and finish at Álvaro Obregón 64, in SLP’s Centro Histórico.'
      ),
    },
    {
      name: '10K',
      price: '$450 MXN',
      color: 'border-indigo-700 bg-indigo-950/60',
      accent: 'text-indigo-400',
      desc: L(
        'Misma salida y meta que el 21K (Álvaro Obregón 64). También se corre en Ciudad Valles.',
        'Same start and finish as the 21K (Álvaro Obregón 64). Also run in Ciudad Valles.'
      ),
    },
    {
      name: '5K',
      price: '$400 MXN',
      color: 'border-cyan-700 bg-cyan-950/60',
      accent: 'text-cyan-400',
      desc: L(
        'Salida en Álvaro Obregón 64 y meta en Av. Venustiano Carranza 235. Ideal para debutantes; también en Ciudad Valles.',
        'Starts at Álvaro Obregón 64, finishes at Av. Venustiano Carranza 235. Great for first-timers; also in Ciudad Valles.'
      ),
    },
  ];

  const registration = [
    {
      icon: '💻',
      title: L('En línea', 'Online'),
      desc: L(
        'Desde el 1 de junio de 2026 en mediomaraton.uaslp.mx. Cierra dos semanas antes de la carrera o al agotarse los lugares.',
        'From June 1, 2026 at mediomaraton.uaslp.mx. Closes two weeks before race day or when spots sell out.'
      ),
    },
    {
      icon: '🏟️',
      title: L('Módulos presenciales', 'In-person modules'),
      desc: L(
        'Unidad Deportiva Universitaria (9:00–16:00) y Unimanía, Av. Niño Artillero 140 (8:00–16:00). Desde el 10 de agosto también en el Parque Tangamanga I, frente al planetario (7:00–10:00).',
        'Unidad Deportiva Universitaria (9:00–16:00) and Unimanía, Av. Niño Artillero 140 (8:00–16:00). From August 10 also at Parque Tangamanga I, in front of the planetarium (7:00–10:00).'
      ),
    },
    {
      icon: '🎽',
      title: L('Cupo limitado', 'Limited capacity'),
      desc: L(
        '10,000 corredores en la sede San Luis Potosí y 1,500 en Ciudad Valles (El Exprés / Líder Life).',
        '10,000 runners at the San Luis Potosí venue and 1,500 in Ciudad Valles (El Exprés / Líder Life).'
      ),
    },
  ];

  const faqs = [
    {
      q: L('¿Cuándo es el Medio Maratón UASLP 2026?', 'When is the UASLP Half Marathon 2026?'),
      a: L(
        'El domingo 27 de septiembre de 2026, con sedes simultáneas en San Luis Potosí capital y Ciudad Valles.',
        'Sunday, September 27, 2026, held simultaneously in San Luis Potosí city and Ciudad Valles.'
      ),
    },
    {
      q: L('¿Qué distancias hay?', 'What distances are offered?'),
      a: L(
        'En San Luis Potosí: 21, 10 y 5 kilómetros. En Ciudad Valles: 10 y 5 kilómetros.',
        'In San Luis Potosí: 21K, 10K and 5K. In Ciudad Valles: 10K and 5K.'
      ),
    },
    {
      q: L('¿Cuánto cuesta la inscripción?', 'How much does registration cost?'),
      a: L(
        '$500 MXN los 21K, $450 los 10K y $400 los 5K — las mismas cuotas que el año anterior, según la UASLP.',
        '$500 MXN for the 21K, $450 for the 10K and $400 for the 5K — the same fees as the previous year, per UASLP.'
      ),
    },
    {
      q: L('¿Dónde me inscribo?', 'Where do I register?'),
      a: L(
        'En línea en mediomaraton.uaslp.mx (desde el 1 de junio de 2026) o en los módulos presenciales: Unidad Deportiva Universitaria, Unimanía (Av. Niño Artillero 140) y, a partir del 10 de agosto, Parque Tangamanga I frente al planetario. Cierre: dos semanas antes del evento o hasta agotar lugares.',
        'Online at mediomaraton.uaslp.mx (since June 1, 2026) or at the in-person modules: Unidad Deportiva Universitaria, Unimanía (Av. Niño Artillero 140) and, from August 10, Parque Tangamanga I in front of the planetarium. Deadline: two weeks before the event or until sold out.'
      ),
    },
    {
      q: L('¿Cuál es la ruta en San Luis Potosí?', 'What is the route in San Luis Potosí?'),
      a: L(
        'Las carreras de 21K y 10K salen y llegan a Álvaro Obregón 64, en el Centro Histórico. El 5K sale del mismo punto y termina en Av. Venustiano Carranza 235. Los mapas oficiales por distancia se publican en mediomaraton.uaslp.mx.',
        'The 21K and 10K start and finish at Álvaro Obregón 64, in the Centro Histórico. The 5K starts from the same point and finishes at Av. Venustiano Carranza 235. Official route maps per distance are published at mediomaraton.uaslp.mx.'
      ),
    },
    {
      q: L('¿Qué edición es la de 2026?', 'Which edition is the 2026 race?'),
      a: L(
        'La edición 43. La UASLP presentó la playera y medalla de la edición 42 en septiembre de 2025 (Palestra, Medias Tintas SLP), por lo que la carrera de 2026 corresponde al número 43.',
        'The 43rd. UASLP unveiled the shirt and medal of the 42nd edition in September 2025 (Palestra, Medias Tintas SLP), which makes the 2026 race number 43.'
      ),
    },
    {
      q: L('¿Cuánta gente corre?', 'How many people run it?'),
      a: L(
        'El cupo 2026 es de 10,000 corredores en SLP más 1,500 en Ciudad Valles. Es una de las carreras más tradicionales del estado: la edición 41 registró récord de asistencia, según la propia UASLP.',
        'The 2026 cap is 10,000 runners in SLP plus 1,500 in Ciudad Valles. It is one of the state’s most traditional races: the 41st edition set an attendance record, per UASLP itself.'
      ),
    },
    {
      q: L('¿Vale la pena si vengo de fuera?', 'Is it worth traveling for?'),
      a: L(
        'Sí: la ruta pasa por el Centro Histórico (Patrimonio de la Humanidad), la fecha de fines de septiembre suele traer clima fresco, y la altitud de la ciudad (~1,860 m) es un reto interesante. Reserva hotel con anticipación: el fin de semana llegan corredores de varios estados.',
        'Yes: the course runs through the UNESCO-listed Centro Histórico, late-September weather is usually cool, and the city’s ~1,860 m altitude is an interesting challenge. Book your hotel early — runners come in from several states that weekend.'
      ),
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        name: 'Medio Maratón UASLP 2026 (edición 43)',
        sport: 'Running',
        startDate: '2026-09-27',
        endDate: '2026-09-27',
        location: {
          '@type': 'Place',
          name: 'Centro Histórico de San Luis Potosí (salida y meta: Álvaro Obregón 64)',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Álvaro Obregón 64',
            addressLocality: 'San Luis Potosí',
            addressRegion: 'SLP',
            addressCountry: 'MX',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Universidad Autónoma de San Luis Potosí (UASLP)',
          url: 'https://www.uaslp.mx/',
        },
        offers: [
          { '@type': 'Offer', name: '21K', price: '500', priceCurrency: 'MXN', url: REGISTRATION_URL, availability: 'https://schema.org/InStock', validFrom: '2026-06-01' },
          { '@type': 'Offer', name: '10K', price: '450', priceCurrency: 'MXN', url: REGISTRATION_URL, availability: 'https://schema.org/InStock', validFrom: '2026-06-01' },
          { '@type': 'Offer', name: '5K', price: '400', priceCurrency: 'MXN', url: REGISTRATION_URL, availability: 'https://schema.org/InStock', validFrom: '2026-06-01' },
        ],
        maximumAttendeeCapacity: 10000,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: 'https://www.sanluisway.com/events/medio-maraton-uaslp-2026',
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
          { '@type': 'ListItem', position: 3, name: 'Medio Maratón UASLP 2026', item: 'https://www.sanluisway.com/events/medio-maraton-uaslp-2026' },
        ],
      },
    ],
  };

  const stats = [
    { value: L('27 sep', 'Sep 27'), label: L('Domingo, 2026', 'Sunday, 2026') },
    { value: '43ª', label: L('Edición', 'Edition') },
    { value: '11,500', label: L('Cupo total (SLP + Valles)', 'Total cap (SLP + Valles)') },
    { value: '3', label: L('Distancias', 'Distances') },
  ];

  return (
    <>
      <SEO
        title={L(
          'Medio Maratón UASLP 2026: fecha, ruta e inscripciones',
          'UASLP Half Marathon 2026: Date, Route & Registration'
        )}
        description={L(
          'El Medio Maratón UASLP 2026 (edición 43) se corre el domingo 27 de septiembre en San Luis Potosí y Ciudad Valles. Distancias de 21K, 10K y 5K, costos de $400–500 MXN, ruta por el Centro Histórico e inscripciones en mediomaraton.uaslp.mx.',
          'The UASLP Half Marathon 2026 (43rd edition) runs Sunday, September 27 in San Luis Potosí and Ciudad Valles. 21K, 10K and 5K distances, $400–500 MXN fees, a Centro Histórico route, and registration at mediomaraton.uaslp.mx.'
        )}
        keywords="medio maraton uaslp 2026, medio maraton uaslp, medio maraton san luis potosi 2026, medio maraton uaslp inscripciones, medio maraton uaslp ruta, carrera 27 septiembre san luis potosi"
        ogImage="/images/events/maraton-runners.jpg"
        structuredData={structuredData as Record<string, unknown>}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-gray-950 text-white overflow-hidden">
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-1.5 mb-6">
              <TrophyIcon className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">
                {L('Inscripciones abiertas', 'Registration open')}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2 text-blue-200">
              <CalendarIcon className="w-5 h-5" />
              <span className="font-medium">
                {L('Domingo 27 de septiembre de 2026', 'Sunday, September 27, 2026')}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3 text-blue-200/80">
              <MapPinIcon className="w-5 h-5" />
              <span className="text-sm">
                {L(
                  'Centro Histórico de San Luis Potosí · también en Ciudad Valles',
                  'Centro Histórico of San Luis Potosí · also in Ciudad Valles'
                )}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-3">
              {L('Medio Maratón UASLP 2026', 'UASLP Half Marathon 2026')}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-5">
              {L('La fiesta atlética universitaria — edición 43', 'The university running festival — 43rd edition')}
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mb-8">
              {L(
                'La carrera más tradicional de San Luis Potosí recorre el Centro Histórico cada septiembre. En 2026 hay cupo para 10,000 corredores en la capital y 1,500 en Ciudad Valles, en distancias de 21, 10 y 5 kilómetros.',
                'San Luis Potosí’s most traditional race crosses the Centro Histórico every September. In 2026 there are spots for 10,000 runners in the capital and 1,500 in Ciudad Valles, over 21K, 10K and 5K distances.'
              )}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/55 uppercase tracking-wider leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                {L('Inscríbete en mediomaraton.uaslp.mx', 'Register at mediomaraton.uaslp.mx')}
                <TrophyIcon className="w-5 h-5" />
              </a>
              <a
                href="#ruta"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                {L('Ver ruta y salida', 'See route & start')}
                <MapPinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distances & prices */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Distancias y costos', 'Distances & fees')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {L(
                'Cuotas 2026 confirmadas por la UASLP — sin aumento respecto al año anterior.',
                '2026 fees confirmed by UASLP — unchanged from the previous year.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {distances.map((d) => (
              <div key={d.name} className={`border rounded-xl p-6 ${d.color}`}>
                <div className="flex items-baseline justify-between mb-3">
                  <p className={`text-2xl font-bold ${d.accent}`}>{d.name}</p>
                  <p className="text-white font-bold">{d.price}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {L(
              'En Ciudad Valles solo se corren 10K y 5K.',
              'Ciudad Valles hosts the 10K and 5K only.'
            )}
          </p>
        </div>
      </section>

      <section className="my-8"><AdUnit placement="mid-content" /></section>

      {/* Route */}
      <section id="ruta" className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">{L('Ruta y punto de salida', 'Route & start point')}</h2>
            <p className="text-gray-400">
              {L(
                'Salida y meta en pleno Centro Histórico (fuente: Líder Life / El Exprés).',
                'Start and finish in the heart of the Centro Histórico (source: Líder Life / El Exprés).'
              )}
            </p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps?q=Alvaro+Obregon+64+Centro+Historico+San+Luis+Potosi&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={L('Mapa: salida Álvaro Obregón 64, San Luis Potosí', 'Map: start at Álvaro Obregón 64, San Luis Potosí')}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '🏁', text: L('21K y 10K: salida y meta en Álvaro Obregón 64, Centro Histórico.', '21K & 10K: start and finish at Álvaro Obregón 64, Centro Histórico.') },
              { icon: '🎯', text: L('5K: salida en Álvaro Obregón 64 y meta en Av. Venustiano Carranza 235.', '5K: starts at Álvaro Obregón 64, finishes at Av. Venustiano Carranza 235.') },
              { icon: '⛰️', text: L('La ciudad está a ~1,860 m de altitud: si vienes del nivel del mar, considera llegar 1–2 días antes.', 'The city sits at ~1,860 m altitude: if you are coming from sea level, consider arriving 1–2 days early.') },
            ].map((item) => (
              <div key={item.icon} className="bg-gray-800 rounded-xl p-5 flex gap-3">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">{L('Inscripciones', 'Registration')}</h2>
            <p className="text-gray-400">
              {L(
                'Abiertas desde el 1 de junio de 2026 — hasta dos semanas antes o agotar cupo.',
                'Open since June 1, 2026 — until two weeks before race day or sell-out.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registration.map((r) => (
              <div key={r.icon} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-lg text-blue-300 mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              {L('Ir al portal oficial de inscripción', 'Go to the official registration portal')}
              <ClockIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900 text-white">
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
      <section className="py-16 px-4 bg-gradient-to-br from-blue-950 via-indigo-900 to-gray-950 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">
            {L('¿Corres en San Luis?', 'Running in San Luis?')}
          </h2>
          <p className="text-white/85 mb-8">
            {L(
              'Asegura tu lugar antes de que se agote el cupo, y revisa qué más hay en la ciudad ese fin de semana.',
              'Lock in your spot before it sells out, and see what else is on in the city that weekend.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              {L('Inscribirme ahora', 'Register now')}
              <TrophyIcon className="w-5 h-5" />
            </a>
            <Link
              href="/events/maraton-tangamanga-2026"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              {L('Maratón Tangamanga', 'Tangamanga Marathon')}
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
