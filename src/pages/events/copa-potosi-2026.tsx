import Link from 'next/link';
import { useRouter } from 'next/router';
import { CalendarIcon, MapPinIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

// Copa Potosí 2026 — facts verified 2026-07 against:
// - slp.gob.mx/noticias/2026/2/10 (convocatoria, venues, 1M+ MXN prize pool)
// - laorquesta.mx "Así se jugará la Copa Potosí 2026" (format, group draws,
//   Mar 30–Apr 4 window, ~1,400 players, teams from USA and Peru, Inpode)
// - oem.com.mx/elsoldesanluis (dates and first-round schedule coverage)
// - elmananaslp.com.mx (final results, 13k final attendance, 80k total,
//   1.9M MXN distributed, final at Estadio Libertad Financiera)
// - atleticodesanluis.mx / TUDN (Estadio Alfonso Lastras renamed Estadio
//   Libertad Financiera in January 2026).
// 2027 edition NOT announced as of July 2026 — marked TBD below.

const GROUPS_MEN: Record<string, string[]> = {
  A: ['Villa de Arriaga', 'Epoxipisos', 'Chivas', 'Naranjeros'],
  B: ['Atlético Nacional', 'Canchola', 'Huasteca', 'UPSLP'],
  C: ['Armadillos', 'Molino', 'Prados', 'Cusco'],
  D: ['Chivas Alabama', 'Cartagena', 'Quinta Imperial', 'Terrero'],
};

const GROUPS_WOMEN: Record<string, string[]> = {
  A: ['Ejército Mexicano', 'Peñarol', 'Orgullo Femenil', 'Cobach'],
  B: ['Proline', 'Molino', 'UDEP', 'Atlético de San Luis'],
  C: ['Recicladora Ramírez', 'Leza', 'Sassuolo', 'Universidad Politécnica'],
  D: ['Siberianas', 'PKS Blinders', 'Flamingos', 'Oro La Piedad'],
};

export default function CopaPotosi2026() {
  const { locale = 'en' } = useRouter();
  const isEs = locale === 'es';
  const L = (es: string, en: string) => (isEs ? es : en);

  const calendar = [
    {
      date: L('10 de febrero de 2026', 'February 10, 2026'),
      phase: L('Apertura de convocatoria', 'Registration opens'),
      detail: L('El Gobierno del Estado e Inpode abren la inscripción de equipos (slp.gob.mx).', 'The State Government and Inpode open team registration (slp.gob.mx).'),
    },
    {
      date: L('Marzo de 2026', 'March 2026'),
      phase: L('Sorteo de grupos', 'Group draw'),
      detail: L('Se definen 4 grupos de 4 equipos por categoría libre, varonil y femenil (La Orquesta).', 'Four groups of four teams are drawn per open category, men’s and women’s (La Orquesta).'),
    },
    {
      date: L('30 de marzo – 3 de abril de 2026', 'March 30 – April 3, 2026'),
      phase: L('Fase de grupos y eliminatorias', 'Group stage & knockouts'),
      detail: L('Round robin en cada grupo (mínimo 3 partidos por equipo); avanzan los 2 mejores de cada sector a cuartos de final, luego semifinales.', 'Round robin in each group (minimum 3 matches per team); top 2 per group advance to quarterfinals, then semifinals.'),
    },
    {
      date: L('4 de abril de 2026', 'April 4, 2026'),
      phase: L('Finales', 'Finals'),
      detail: L('Finales varonil y femenil en el estadio del Atlético de San Luis — el Alfonso Lastras, renombrado Estadio Libertad Financiera en enero de 2026 — ante más de 13 mil aficionados (El Mañana).', 'Men’s and women’s finals at Atlético de San Luis’s stadium — the Alfonso Lastras, renamed Estadio Libertad Financiera in January 2026 — before 13,000+ fans (El Mañana).'),
    },
    {
      date: L('Por definir', 'TBD'),
      phase: L('Copa Potosí 2027', 'Copa Potosí 2027'),
      detail: L('A julio de 2026 no hay convocatoria ni fechas anunciadas para la edición 2027. Actualizaremos esta página cuando Inpode publique la convocatoria.', 'As of July 2026 there is no announced call or dates for the 2027 edition. We will update this page when Inpode publishes the convocatoria.'),
    },
  ];

  const faqs = [
    {
      q: L('¿Qué es la Copa Potosí?', 'What is the Copa Potosí?'),
      a: L(
        'Es un torneo de futbol amateur organizado por el Gobierno de San Luis Potosí a través del Inpode (Instituto Potosino de Cultura Física y Deporte). En 2026 reunió a cerca de 1,400 futbolistas en categorías infantil, juvenil y libre, en ramas varonil y femenil, con equipos invitados de Estados Unidos y Perú.',
        'It is an amateur football (soccer) tournament organized by the Government of San Luis Potosí through Inpode (the state sports institute). In 2026 it gathered around 1,400 players across children’s, youth and open categories, men’s and women’s, with guest teams from the United States and Peru.'
      ),
    },
    {
      q: L('¿Cuándo se jugó la Copa Potosí 2026?', 'When was Copa Potosí 2026 played?'),
      a: L(
        'Del 30 de marzo al 4 de abril de 2026, con seis días de actividad y las finales el sábado 4 de abril.',
        'From March 30 to April 4, 2026 — six days of competition, with the finals on Saturday, April 4.'
      ),
    },
    {
      q: L('¿Quién ganó la Copa Potosí 2026?', 'Who won Copa Potosí 2026?'),
      a: L(
        'En la rama varonil, Chivas Impulsora venció 2-1 a Epoxipisos Tacos Julio; en la femenil, Proline Ángel y Asociados ganó 1-0 a PKS Blinders (El Mañana SLP).',
        'In the men’s bracket, Chivas Impulsora beat Epoxipisos Tacos Julio 2-1; in the women’s, Proline Ángel y Asociados defeated PKS Blinders 1-0 (El Mañana SLP).'
      ),
    },
    {
      q: L('¿Dónde se jugaron los partidos?', 'Where were the matches played?'),
      a: L(
        'Las sedes fueron la Unidad Deportiva Adolfo López Mateos, el Inpojuve y la Universidad Politécnica de SLP. Las finales se disputaron en el estadio de Primera División del Atlético de San Luis (Alfonso Lastras, hoy Estadio Libertad Financiera).',
        'Venues were the Unidad Deportiva Adolfo López Mateos, Inpojuve and the Universidad Politécnica de SLP. The finals were played at Atlético de San Luis’s First Division stadium (Alfonso Lastras, now Estadio Libertad Financiera).'
      ),
    },
    {
      q: L('¿Cuál fue el formato del torneo?', 'What was the tournament format?'),
      a: L(
        'En la categoría libre: 16 equipos por rama, divididos en 4 grupos de 4 en formato de todos contra todos. Cada equipo tuvo garantizados al menos 3 partidos; los 2 mejores de cada grupo avanzaron a cuartos de final.',
        'In the open category: 16 teams per bracket, split into 4 groups of 4 playing round robin. Every team was guaranteed at least 3 matches; the top 2 in each group advanced to the quarterfinals.'
      ),
    },
    {
      q: L('¿Cuánto se repartió en premios?', 'How much prize money was awarded?'),
      a: L(
        'La bolsa anunciada superaba el millón de pesos (slp.gob.mx); al cierre, El Mañana reportó 1.9 millones de pesos repartidos entre las distintas categorías.',
        'The announced pool exceeded one million pesos (slp.gob.mx); at the close, El Mañana reported 1.9 million pesos distributed across the categories.'
      ),
    },
    {
      q: L('¿Cuándo será la Copa Potosí 2027 y cómo me inscribo?', 'When is Copa Potosí 2027 and how do I register?'),
      a: L(
        'Aún no hay fechas oficiales. Como referencia, la convocatoria 2026 abrió el 10 de febrero y el torneo se jugó a fines de marzo. Mantente atento a los canales del Inpode y del Gobierno de SLP (slp.gob.mx), o suscríbete a nuestro boletín para recibir el aviso.',
        'No official dates yet. For reference, the 2026 call opened February 10 and the tournament was played in late March. Watch Inpode and SLP Government channels (slp.gob.mx), or subscribe to our newsletter for the announcement.'
      ),
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        name: 'Copa Potosí 2026',
        sport: 'Soccer',
        startDate: '2026-03-30',
        endDate: '2026-04-04',
        location: [
          {
            '@type': 'Place',
            name: 'Unidad Deportiva Adolfo López Mateos',
            address: { '@type': 'PostalAddress', addressLocality: 'San Luis Potosí', addressRegion: 'SLP', addressCountry: 'MX' },
          },
          {
            '@type': 'Place',
            name: 'Estadio Alfonso Lastras (Estadio Libertad Financiera)',
            address: { '@type': 'PostalAddress', addressLocality: 'San Luis Potosí', addressRegion: 'SLP', addressCountry: 'MX' },
          },
        ],
        organizer: {
          '@type': 'Organization',
          name: 'Instituto Potosino de Cultura Física y Deporte (Inpode)',
          url: 'https://inpode.slp.gob.mx/',
        },
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: 'https://www.sanluisway.com/events/copa-potosi-2026',
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
          { '@type': 'ListItem', position: 3, name: 'Copa Potosí 2026', item: 'https://www.sanluisway.com/events/copa-potosi-2026' },
        ],
      },
    ],
  };

  const stats = [
    { value: '1,400', label: L('Futbolistas', 'Players') },
    { value: '80,000+', label: L('Aficionados', 'Fans overall') },
    { value: '$1.9M', label: L('MXN en premios', 'MXN in prizes') },
    { value: '6', label: L('Días de torneo', 'Tournament days') },
  ];

  return (
    <>
      <SEO
        title={L(
          'Copa Potosí 2026: calendario, resultados y campeones',
          'Copa Potosí 2026: Schedule, Results & Champions'
        )}
        description={L(
          'La Copa Potosí 2026 se jugó del 30 de marzo al 4 de abril: calendario completo, formato, grupos, sedes y resultados de las finales en el Estadio Alfonso Lastras (Libertad Financiera). Campeones: Chivas Impulsora y Proline.',
          'Copa Potosí 2026 was played March 30 – April 4: full schedule, format, groups, venues and finals results at Estadio Alfonso Lastras (Libertad Financiera). Champions: Chivas Impulsora and Proline.'
        )}
        keywords="copa potosi 2026, copa potosi 2026 calendario, copa san luis 2026, final copa potosi 2026, copa potosi resultados, torneo futbol amateur san luis potosi"
        ogImage="/images/events/sports-hero.png"
        structuredData={structuredData as Record<string, unknown>}
      />

      {/* Post-event banner */}
      <section className="bg-gradient-to-r from-emerald-700 to-green-700 text-white py-5 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base leading-relaxed">
            <strong>
              {L(
                '⚽ La Copa Potosí 2026 se jugó del 30 de marzo al 4 de abril.',
                '⚽ Copa Potosí 2026 was played March 30 – April 4.'
              )}
            </strong>{' '}
            {L(
              'La edición 2027 aún no tiene fechas — te avisamos cuando abra la convocatoria.',
              'The 2027 edition has no dates yet — we will let you know when registration opens.'
            )}
          </p>
          <Link
            href="/subscribe"
            className="shrink-0 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-full hover:bg-emerald-50 transition-colors text-sm"
          >
            {L('Avísame del 2027', 'Tell me about 2027')}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-gray-950 text-white overflow-hidden">
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-4 py-1.5 mb-6">
              <TrophyIcon className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-200 text-xs font-bold uppercase tracking-widest">
                {L('Futbol amateur · SLP', 'Amateur football · SLP')}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2 text-emerald-200">
              <CalendarIcon className="w-5 h-5" />
              <span className="font-medium">
                {L('30 de marzo – 4 de abril de 2026 (concluida)', 'March 30 – April 4, 2026 (concluded)')}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3 text-emerald-200/80">
              <MapPinIcon className="w-5 h-5" />
              <span className="text-sm">
                {L(
                  'Unidad Deportiva A. López Mateos · Inpojuve · UPSLP · Estadio Alfonso Lastras',
                  'Unidad Deportiva A. López Mateos · Inpojuve · UPSLP · Estadio Alfonso Lastras'
                )}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-3">Copa Potosí 2026</h1>
            <h2 className="text-xl md:text-2xl text-emerald-300 font-semibold mb-5">
              {L(
                'Calendario, resultados y campeones del torneo amateur más grande del país',
                'Schedule, results and champions of Mexico’s biggest amateur tournament'
              )}
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mb-8">
              {L(
                'Organizada por el Inpode y el Gobierno del Estado, la Copa Potosí 2026 reunió a unos 1,400 futbolistas en categorías infantil, juvenil y libre — varonil y femenil — con equipos invitados de Estados Unidos y Perú y finales en el estadio del Atlético de San Luis.',
                'Organized by Inpode and the State Government, Copa Potosí 2026 gathered some 1,400 players across children’s, youth and open categories — men’s and women’s — with guest teams from the US and Peru and finals at Atlético de San Luis’s stadium.'
              )}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/55 uppercase tracking-wider leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section id="calendario" className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Calendario de la Copa Potosí 2026', 'Copa Potosí 2026 schedule')}
            </h2>
            <p className="text-gray-400">
              {L(
                'Cómo se desarrolló el torneo, fase por fase.',
                'How the tournament unfolded, phase by phase.'
              )}
            </p>
          </div>
          <div className="space-y-4">
            {calendar.map((row) => (
              <div key={row.phase} className="bg-gray-900 border border-gray-800 rounded-xl p-5 md:flex md:items-start md:gap-6">
                <div className="md:w-56 shrink-0 mb-2 md:mb-0">
                  <p className="text-emerald-400 font-bold text-sm">{row.date}</p>
                  <p className="text-white font-semibold">{row.phase}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-8"><AdUnit placement="mid-content" /></section>

      {/* Results */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Resultados de las finales', 'Finals results')}
            </h2>
            <p className="text-gray-400">
              {L(
                'Sábado 4 de abril de 2026 · Estadio Alfonso Lastras (Libertad Financiera) · 13,000+ aficionados',
                'Saturday, April 4, 2026 · Estadio Alfonso Lastras (Libertad Financiera) · 13,000+ fans'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-900/60 to-gray-900 border border-emerald-700/50 rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-emerald-300 mb-3">
                {L('Final varonil', 'Men’s final')}
              </p>
              <p className="text-xl font-bold text-white mb-1">Chivas Impulsora</p>
              <p className="text-3xl font-bold text-emerald-400 my-2">2 – 1</p>
              <p className="text-lg text-gray-300">Epoxipisos Tacos Julio</p>
              <p className="text-xs text-gray-500 mt-3">🏆 {L('Campeón: Chivas Impulsora', 'Champion: Chivas Impulsora')}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/60 to-gray-900 border border-emerald-700/50 rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-emerald-300 mb-3">
                {L('Final femenil', 'Women’s final')}
              </p>
              <p className="text-xl font-bold text-white mb-1">Proline Ángel y Asociados</p>
              <p className="text-3xl font-bold text-emerald-400 my-2">1 – 0</p>
              <p className="text-lg text-gray-300">PKS Blinders</p>
              <p className="text-xs text-gray-500 mt-3">🏆 {L('Campeón: Proline Ángel y Asociados', 'Champion: Proline Ángel y Asociados')}</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {L(
              'Fuente: El Mañana SLP y cobertura local del cierre del torneo.',
              'Source: El Mañana SLP and local coverage of the tournament’s close.'
            )}
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">
              {L('Grupos de la categoría libre', 'Open-category groups')}
            </h2>
            <p className="text-gray-400">
              {L('Sorteo oficial reportado por La Orquesta.', 'Official draw as reported by La Orquesta.')}
            </p>
          </div>
          {[
            { title: L('Rama varonil', 'Men’s bracket'), groups: GROUPS_MEN },
            { title: L('Rama femenil', 'Women’s bracket'), groups: GROUPS_WOMEN },
          ].map((bracket) => (
            <div key={bracket.title} className="mb-10 last:mb-0">
              <h3 className="flex items-center gap-2 font-bold text-emerald-300 text-lg mb-4">
                <UserGroupIcon className="w-5 h-5" />
                {bracket.title}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(bracket.groups).map(([letter, teams]) => (
                  <div key={letter} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                      {L(`Grupo ${letter}`, `Group ${letter}`)}
                    </p>
                    <ul className="space-y-1">
                      {teams.map((team) => (
                        <li key={team} className="text-sm text-gray-300">{team}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-950 via-green-900 to-gray-950 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">
            {L('Más deporte en San Luis Potosí', 'More sports in San Luis Potosí')}
          </h2>
          <p className="text-white/85 mb-8">
            {L(
              'El calendario deportivo potosino no para: revisa el Medio Maratón UASLP (27 de septiembre) o lo que hay esta semana.',
              'SLP’s sports calendar never stops: check out the UASLP Half Marathon (September 27) or what’s on this week.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events/medio-maraton-uaslp-2026"
              className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold px-8 py-4 rounded-full transition-colors"
            >
              {L('Medio Maratón UASLP 2026', 'UASLP Half Marathon 2026')}
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
