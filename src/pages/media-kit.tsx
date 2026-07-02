import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import { ConversionEvents } from '@/lib/analytics';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'es', ['common'])) },
});

// Every figure on this page must stay verifiable against Beehiiv, Search
// Console or the Supabase tables. Update quarterly; last refresh 2026-07-02.
const STATS = {
  subscribers: '850+',
  openRate: '30%',
  clickRate: '5.9%',
  searchGrowth: '+378%',
  impressionsQ: '30,000+',
  guides: '35+',
  events: '40+',
  businesses: '116',
};

export default function MediaKit() {
  const { locale = 'es' } = useRouter();
  const isEs = locale === 'es';
  const t = (en: string, es: string) => (isEs ? es : en);
  const contact = (subject: string) => `/contact?subject=${encodeURIComponent(subject)}`;
  const track = (subject: string) => ConversionEvents.ctaClick('media_kit', subject, '/media-kit');

  const stats = [
    { value: STATS.subscribers, label: t('newsletter subscribers (expats + locals)', 'suscriptores del newsletter (expats + locales)') },
    { value: STATS.openRate, label: t('open rate — ~1.5x the industry average', 'tasa de apertura — ~1.5x el promedio de la industria') },
    { value: STATS.searchGrowth, label: t('Google search clicks, Q2 vs Q1 2026', 'clics desde Google, T2 vs T1 2026') },
    { value: STATS.impressionsQ, label: t('Google impressions per quarter, growing', 'impresiones en Google por trimestre, creciendo') },
  ];

  const audience = [
    { icon: '🌎', title: t('International expats', 'Expats internacionales'), body: t('US, German and Japanese professionals brought by the BMW/GM corridor — high income, new in town, actively searching where to eat, live and spend.', 'Profesionistas de EE.UU., Alemania y Japón traídos por el corredor BMW/GM — ingreso alto, recién llegados, buscando activamente dónde comer, vivir y gastar.') },
    { icon: '🇲🇽', title: t('Potosinos planning their week', 'Potosinos planeando su semana'), body: t('Locals who find events, restaurants and weekend plans through our guides — the audience that fills your tables.', 'Locales que encuentran eventos, restaurantes y planes de fin de semana en nuestras guías — la audiencia que llena tus mesas.') },
    { icon: '✈️', title: t('Visitors researching SLP', 'Visitantes investigando SLP'), body: t('Travelers reading our Huasteca, Real de Catorce and city guides before they arrive — with US readers monetizing at 2.5x local rates.', 'Viajeros leyendo nuestras guías de la Huasteca, Real de Catorce y la ciudad antes de llegar.') },
  ];

  const products = [
    {
      name: t('Featured business listing', 'Listing destacado de negocio'),
      price: '$250 MXN/mes',
      body: t('Your business highlighted in the directory with photos, WhatsApp button, hours and priority placement — plus a monthly report of the direct contacts we send you.', 'Tu negocio destacado en el directorio con fotos, botón de WhatsApp, horarios y posición prioritaria — más un reporte mensual de los contactos directos que te mandamos.'),
      subject: 'Listing destacado $250/mes — Media Kit',
    },
    {
      name: t('Newsletter sponsorship', 'Patrocinio del newsletter'),
      price: t('quote by edition', 'cotización por edición'),
      body: t("Your brand inside San Luis Way Weekly: 850+ inboxes every Monday at a 30% open rate, with placement options (top, middle, 'Around Town' mention) and click tracking.", 'Tu marca dentro de San Luis Way Weekly: 850+ bandejas cada lunes con 30% de apertura, opciones de ubicación (arriba, en medio, mención en "Around Town") y tracking de clics.'),
      subject: 'Patrocinio de newsletter — Media Kit',
    },
    {
      name: t('Campaign packages', 'Paquetes de campaña'),
      price: '$1,500 – $5,000+ MXN/mes',
      body: t('Site banners, sponsored content, brand stories and recurring newsletter presence, bundled — Basic, Premium and Enterprise tiers.', 'Banners en el sitio, contenido patrocinado, brand stories y presencia recurrente en el newsletter, en paquete — niveles Basic, Premium y Enterprise.'),
      subject: 'Paquete de campaña — Media Kit',
    },
  ];

  return (
    <>
      <SEO
        title={t('Media Kit — Advertise with San Luis Way', 'Media Kit — Anúnciate con San Luis Way')}
        description={t(
          "San Luis Way media kit: 850+ newsletter subscribers at 30% open rate, fast-growing search audience, and the city's most complete guide platform. Real, verifiable numbers.",
          'Media kit de San Luis Way: 850+ suscriptores con 30% de apertura, audiencia de búsqueda en rápido crecimiento y la plataforma de guías más completa de la ciudad. Números reales y verificables.'
        )}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-secondary text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-primary font-bold uppercase tracking-wide text-sm mb-3">Media Kit · 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {t('Reach the people deciding where to spend in San Luis Potosí', 'Llega a quienes deciden dónde gastar en San Luis Potosí')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              {t(
                'Every number below is real and verifiable — the same honesty standard we apply to our content.',
                'Cada número de abajo es real y verificable — el mismo estándar de honestidad que aplicamos a nuestro contenido.'
              )}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border-2 border-gray-100 p-6 text-center shadow-sm">
                  <p className="text-4xl font-extrabold text-primary mb-2">{s.value}</p>
                  <p className="text-sm text-gray-600 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-4 italic">
              {t('Sources: Beehiiv (July 2026), Google Search Console Q1–Q2 2026. Updated quarterly.', 'Fuentes: Beehiiv (julio 2026), Google Search Console T1–T2 2026. Actualizado trimestralmente.')}
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className="py-14 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 text-center">{t('Who you reach', 'A quién llegas')}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {audience.map((a) => (
                <div key={a.title} className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-3xl mb-3">{a.icon}</p>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
              <p className="text-gray-800">
                <strong>{t('Platform:', 'Plataforma:')}</strong>{' '}
                {t(
                  `${STATS.guides} in-depth guides · ${STATS.events} curated upcoming events · ${STATS.businesses} listed businesses · content in 4 languages (EN/ES/DE/JA) · weekly newsletter`,
                  `${STATS.guides} guías a fondo · ${STATS.events} eventos próximos curados · ${STATS.businesses} negocios listados · contenido en 4 idiomas (EN/ES/DE/JA) · newsletter semanal`
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal callout */}
        <section className="py-6 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg mb-1">🎡 {t('August = FENAPO season', 'Agosto = temporada FENAPO')}</p>
                <p className="text-white/85 text-sm">
                  {t(
                    "Mexico's national fair drives our biggest traffic of the year (Katy Perry, Mötley Crüe and 33 more nights). Sponsor slots for the season are limited.",
                    'La feria nacional dispara nuestro mayor tráfico del año (Katy Perry, Mötley Crüe y 33 noches más). Los espacios de patrocinio de la temporada son limitados.'
                  )}
                </p>
              </div>
              <Link
                href={contact('Patrocinio temporada FENAPO — Media Kit')}
                onClick={() => track('fenapo-season')}
                className="shrink-0 bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors"
              >
                {t('Reserve FENAPO season', 'Reservar temporada FENAPO')}
              </Link>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 text-center">{t('Ways to work with us', 'Formas de trabajar con nosotros')}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl border-2 border-gray-100 p-6 flex flex-col shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-primary font-extrabold text-xl mb-3">{p.price}</p>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{p.body}</p>
                  <Link
                    href={contact(p.subject)}
                    onClick={() => track(p.subject)}
                    className="mt-5 text-center bg-secondary text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    {t('Request details', 'Pedir detalles')}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              {t('Full package breakdown on the', 'Desglose completo de paquetes en la')}{' '}
              <Link href="/advertise" className="text-primary underline font-semibold">{t('advertise page', 'página de publicidad')}</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-3">{t('Let’s talk', 'Hablemos')}</h2>
            <p className="text-gray-600 mb-6">
              {t('Tell us about your business and we’ll propose the right mix — no commitment.', 'Cuéntanos de tu negocio y te proponemos la mezcla correcta — sin compromiso.')}
            </p>
            <Link
              href={contact('Quiero anunciarme — Media Kit')}
              onClick={() => track('main-cta')}
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors text-lg"
            >
              {t('Contact us', 'Contáctanos')}
            </Link>
            <p className="text-sm text-gray-500 mt-4">sanluisway@waza.baby</p>
          </div>
        </section>
      </div>
    </>
  );
}
