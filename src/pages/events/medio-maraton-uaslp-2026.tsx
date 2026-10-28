import Link from 'next/link';
import { useRouter } from 'next/router';
import { CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
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
// Rechecked 2026-10-27 (race already held): planoinformativo.com 1170858
// (Sept 27 date, kit pickup), 1171956 (~15k runners in SLP + 2k+ in Valles,
// 6:30 start in front of the UASLP Edificio Central) and 1173013 (XLIII
// edition; official results under review after athletes' complaints).
// 2026 fees and caps could not be re-verified, so they are no longer shown.

const OFFICIAL_URL = 'https://mediomaraton.uaslp.mx/';

export default function MedioMaratonUaslp2026() {
  const { locale = 'en' } = useRouter();
  const isEs = locale === 'es';
  const L = (es: string, en: string) => (isEs ? es : en);

  const distances = [
    {
      name: '21K',
      color: 'border-blue-700 bg-blue-950/60',
      accent: 'text-blue-400',
      desc: L(
        'La prueba estelar. Salida y meta frente al Edificio Central de la UASLP (Álvaro Obregón 64), Centro Histórico de SLP.',
        'The flagship race. Start and finish in front of the UASLP Edificio Central (Álvaro Obregón 64), in SLP’s Centro Histórico.'
      ),
    },
    {
      name: '10K',
      color: 'border-indigo-700 bg-indigo-950/60',
      accent: 'text-indigo-400',
      desc: L(
        'Misma salida y meta que el 21K (Álvaro Obregón 64). También se corrió en Ciudad Valles.',
        'Same start and finish as the 21K (Álvaro Obregón 64). Also run in Ciudad Valles.'
      ),
    },
    {
      name: '5K',
      color: 'border-cyan-700 bg-cyan-950/60',
      accent: 'text-cyan-400',
      desc: L(
        'Salida en Álvaro Obregón 64 y meta en Av. Venustiano Carranza 235. También se corrió en Ciudad Valles.',
        'Started at Álvaro Obregón 64 and finished at Av. Venustiano Carranza 235. Also run in Ciudad Valles.'
      ),
    },
  ];

  const recap = [
    {
      icon: '🏃',
      title: L('Participación', 'Turnout'),
      desc: L(
        'Unos 15 mil corredores en la capital y más de 2 mil en Ciudad Valles, llegados de 28 estados (Plano Informativo).',
        'About 15,000 runners in the capital and more than 2,000 in Ciudad Valles, from 28 states (Plano Informativo).'
      ),
    },
    {
      icon: '⏱️',
      title: L('Salida', 'Start'),
      desc: L(
        'A las 6:30 a.m. frente al Edificio Central de la UASLP; los corredores se reunieron antes en la Plaza de Fundadores.',
        'At 6:30 a.m. in front of the UASLP Edificio Central; runners gathered beforehand in Plaza de Fundadores.'
      ),
    },
    {
      icon: '📋',
      title: L('Resultados', 'Results'),
      desc: L(
        'Tras quejas de atletas sobre el jueceo, el comité organizador pidió a la empresa de cronometraje entregar y transparentar los resultados oficiales, y el caso se turnó a la federación de atletismo (Plano Informativo, 1 de octubre).',
        'After athletes complained about the judging, the organizing committee asked the timing company to deliver and publish the official results, and the case was referred to the athletics federation (Plano Informativo, October 1).'
      ),
    },
  ];

  const faqs = [
    {
      q: L('¿Cuándo fue el Medio Maratón UASLP 2026?', 'When was the UASLP Half Marathon 2026?'),
      a: L(
        'El domingo 27 de septiembre de 2026, con sedes simultáneas en San Luis Potosí capital y Ciudad Valles.',
        'On Sunday, September 27, 2026, held simultaneously in San Luis Potosí city and Ciudad Valles.'
      ),
    },
    {
      q: L('¿Qué distancias hubo?', 'What distances were offered?'),
      a: L(
        'En San Luis Potosí: 21, 10 y 5 kilómetros, además de 10K en silla de ruedas. En Ciudad Valles: 10 y 5 kilómetros.',
        'In San Luis Potosí: 21K, 10K and 5K, plus a 10K wheelchair race. In Ciudad Valles: 10K and 5K.'
      ),
    },
    {
      q: L('¿Cuántas personas corrieron?', 'How many people ran?'),
      a: L(
        'Plano Informativo reportó unos 15 mil corredores en la capital y más de 2 mil en Ciudad Valles, de 28 estados del país.',
        'Plano Informativo reported about 15,000 runners in the capital and more than 2,000 in Ciudad Valles, from 28 Mexican states.'
      ),
    },
    {
      q: L('¿A qué hora y dónde fue la salida?', 'When and where was the start?'),
      a: L(
        'A las 6:30 a.m. frente al Edificio Central de la UASLP, en el Centro Histórico. Los corredores se reunieron antes en la Plaza de Fundadores.',
        'At 6:30 a.m. in front of the UASLP Edificio Central, in the Centro Histórico. Runners gathered beforehand in Plaza de Fundadores.'
      ),
    },
    {
      q: L('¿Cuál fue la ruta en San Luis Potosí?', 'What was the route in San Luis Potosí?'),
      a: L(
        'Las carreras de 21K y 10K salieron y llegaron a Álvaro Obregón 64, en el Centro Histórico. El 5K salió del mismo punto y terminó en Av. Venustiano Carranza 235. Los mapas oficiales están en mediomaraton.uaslp.mx.',
        'The 21K and 10K started and finished at Álvaro Obregón 64, in the Centro Histórico. The 5K started from the same point and finished at Av. Venustiano Carranza 235. Official maps are at mediomaraton.uaslp.mx.'
      ),
    },
    {
      q: L('¿Quién ganó?', 'Who won?'),
      a: L(
        'Los resultados oficiales quedaron en revisión: tras quejas de atletas sobre el jueceo, el comité organizador pidió a la empresa de cronometraje transparentarlos y el caso se turnó a la federación de atletismo. Consulta mediomaraton.uaslp.mx para la versión oficial.',
        'The official results went under review: after athletes complained about the judging, the organizing committee asked the timing company to publish them and the case was referred to the athletics federation. Check mediomaraton.uaslp.mx for the official version.'
      ),
    },
    {
      q: L('¿Qué edición fue la de 2026?', 'Which edition was the 2026 race?'),
      a: L(
        'La XLIII (43ª) edición, como la identificó la cobertura local de la carrera.',
        'The 43rd (XLIII) edition, as identified in local coverage of the race.'
      ),
    },
    {
      q: L('¿Cuándo es la edición 2027?', 'When is the 2027 edition?'),
      a: L(
        'El sitio oficial se despide con un “Nos vemos en 2027”, pero aún no hemos visto una fecha oficial. La publicaremos cuando la UASLP la anuncie.',
        'The official site signs off with “See you in 2027”, but we have not seen an official date yet. We will post it when UASLP announces it.'
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
    { value: '17,000+', label: L('Corredores (SLP + Valles)', 'Runners (SLP + Valles)') },
    { value: '3', label: L('Distancias', 'Distances') },
  ];

  return (
    <>
      <SEO
        title={L(
          'Medio Maratón UASLP 2026: cómo fue la carrera, ruta y distancias',
          'UASLP Half Marathon 2026: Race Recap, Route & Distances'
        )}
        description={L(
          'El Medio Maratón UASLP 2026 (edición 43) se corrió el domingo 27 de septiembre en San Luis Potosí y Ciudad Valles, con unos 17 mil corredores. Distancias de 21K, 10K y 5K, ruta por el Centro Histórico y estado de los resultados oficiales.',
          'The UASLP Half Marathon 2026 (43rd edition) was run on Sunday, September 27 in San Luis Potosí and Ciudad Valles, with about 17,000 runners. 21K, 10K and 5K distances, the Centro Histórico route and the status of the official results.'
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
                {L('Carrera concluida', 'Race completed')}
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
                'El medio maratón universitario recorrió el Centro Histórico el 27 de septiembre de 2026: unos 15 mil corredores en la capital y más de 2 mil en Ciudad Valles, en distancias de 21, 10 y 5 kilómetros.',
                'The university half marathon crossed the Centro Histórico on September 27, 2026: about 15,000 runners in the capital and more than 2,000 in Ciudad Valles, over 21K, 10K and 5K distances.'
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
                href={OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                {L('Sitio oficial: mediomaraton.uaslp.mx', 'Official site: mediomaraton.uaslp.mx')}
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

      {/* Distances */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Distancias', 'Distances')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {L(
                'Las distancias del programa 2026.',
                'The distances on the 2026 program.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {distances.map((d) => (
              <div key={d.name} className={`border rounded-xl p-6 ${d.color}`}>
                <p className={`text-2xl font-bold mb-3 ${d.accent}`}>{d.name}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {L(
              'En Ciudad Valles se corrieron 10K y 5K.',
              'Ciudad Valles hosted the 10K and 5K.'
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
              { icon: '🏁', text: L('21K y 10K: salida y meta en Álvaro Obregón 64 (Edificio Central de la UASLP), Centro Histórico.', '21K & 10K: start and finish at Álvaro Obregón 64 (UASLP Edificio Central), Centro Histórico.') },
              { icon: '🎯', text: L('5K: salida en Álvaro Obregón 64 y meta en Av. Venustiano Carranza 235.', '5K: started at Álvaro Obregón 64 and finished at Av. Venustiano Carranza 235.') },
              { icon: '⛰️', text: L('La carrera se corre a unos 1,860 m de altitud, en el centro de la ciudad.', 'The race is run at about 1,860 m altitude, in the city center.') },
            ].map((item) => (
              <div key={item.icon} className="bg-gray-800 rounded-xl p-5 flex gap-3">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Race-day recap */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">{L('Así fue la carrera', 'How race day went')}</h2>
            <p className="text-gray-400">{L('Domingo 27 de septiembre de 2026.', 'Sunday, September 27, 2026.')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recap.map((r) => (
              <div key={r.icon} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-lg text-blue-300 mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
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
              'La próxima gran carrera en la capital es el Medio Maratón La Capital del Deporte, el 8 de noviembre.',
              'The next big race in the capital is the La Capital del Deporte Half Marathon on November 8.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events/medio-maraton-capital-del-deporte-2026"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              {L('Medio Maratón La Capital del Deporte (8 nov)', 'La Capital del Deporte Half Marathon (Nov 8)')}
            </Link>
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
