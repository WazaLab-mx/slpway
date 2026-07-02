import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Event } from '@/types';
import { supabase } from '@/lib/supabase';
import { buildEventPath } from '@/lib/event-slug';
import EventCard from '@/components/EventCard';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import NewsletterBanner from '@/components/NewsletterBanner';

interface ThisWeekProps {
  events: Event[];
  weekStart: string;
  weekEnd: string;
}

// Static page beats the dynamic /events/[category] route, so this URL is safe.
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const now = new Date();
  const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const { data: events } = await supabase
    .from('events')
    .select('*')
    .lte('start_date', weekEnd.toISOString())
    .gte('end_date', now.toISOString())
    .order('start_date', { ascending: true })
    .limit(24);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
      events: events || [],
      weekStart: now.toISOString(),
      weekEnd: weekEnd.toISOString(),
    },
    // Hourly ISR keeps "this week" honest without a cron.
    revalidate: 3600,
  };
};

function formatRange(startIso: string, endIso: string, locale: string): string {
  const tag = locale === 'es' ? 'es-MX' : locale === 'de' ? 'de-DE' : locale === 'ja' ? 'ja-JP' : 'en-US';
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', timeZone: 'America/Mexico_City' };
  const start = new Date(startIso).toLocaleDateString(tag, opts);
  const end = new Date(endIso).toLocaleDateString(tag, opts);
  return `${start} – ${end}`;
}

export default function EventsThisWeek({ events, weekStart, weekEnd }: ThisWeekProps) {
  const { locale = 'es' } = useRouter();
  const isEs = locale === 'es';

  const title = isEs
    ? 'Eventos Esta Semana en San Luis Potosí — Agenda Actualizada'
    : 'Events This Week in San Luis Potosí — Updated Agenda';
  const description = isEs
    ? `Qué hacer esta semana en San Luis Potosí (${formatRange(weekStart, weekEnd, 'es')}): conciertos, deportes, cultura y ferias. Agenda actualizada cada semana.`
    : `What to do this week in San Luis Potosí (${formatRange(weekStart, weekEnd, 'en')}): concerts, sports, culture and fairs. Updated weekly.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: events.length,
    itemListElement: events.map((event, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: event.title,
        startDate: event.start_date,
        endDate: event.end_date,
        url: `https://www.sanluisway.com${buildEventPath(event)}`,
        location: { '@type': 'Place', name: event.location, address: 'San Luis Potosí, MX' },
      },
    })),
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords="eventos esta semana san luis potosi, que hacer en san luis potosi, agenda slp, eventos slp hoy, events this week san luis potosi"
        structuredData={structuredData as Record<string, unknown>}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="relative overflow-hidden text-white py-14 px-4">
          <Image
            src="/images/events/festival.jpg"
            alt="Festival in San Luis Potosí"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/90" />
          <div className="relative z-10 container mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              <CalendarIcon className="w-5 h-5" />
              {formatRange(weekStart, weekEnd, locale)}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">
              {isEs ? 'Eventos esta semana en San Luis Potosí' : 'Events this week in San Luis Potosí'}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              {isEs
                ? 'La agenda de los próximos 7 días, actualizada automáticamente: conciertos, deportes, cultura, ferias y más.'
                : 'The next 7 days at a glance, updated automatically: concerts, sports, culture, fairs and more.'}
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-12">
          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600 mb-6">
                {isEs
                  ? 'No hay eventos registrados para esta semana todavía. Revisa la agenda completa:'
                  : 'No events registered for this week yet. Check the full agenda:'}
              </p>
              <Link
                href="/events/all"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                {isEs ? 'Ver todos los eventos' : 'Browse all events'}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {events.slice(0, 6).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              {events.length > 6 && (
                <>
                  <section className="my-8">
                    <AdUnit placement="mid-content" />
                  </section>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {events.slice(6).map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </>
              )}

              <div className="text-center mb-12">
                <Link
                  href="/events/all"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                >
                  {isEs ? 'Ver la agenda completa' : 'See the full agenda'}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </>
          )}

          <NewsletterBanner variant="mid-content" />

          <section className="mt-12 mb-8">
            <AdUnit placement="top-banner" />
          </section>
        </div>
      </div>
    </>
  );
}
