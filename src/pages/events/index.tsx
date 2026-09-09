import { getEventSchedule } from '@/lib/event-schedule';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Event } from '@/types';
import { supabase, getSafetyDateBuffer } from '@/lib/supabase';
import { filterUpcomingEvents } from '@/lib/event-dates';
import { useUpcomingEvents } from '@/hooks/useUpcomingEvents';
import EventHeroCarousel from '@/components/EventHeroCarousel';
import EventCategoryFilter, { EventCategory } from '@/components/EventCategoryFilter';
import EventSearchBar from '@/components/EventSearchBar';
import EventComingUp from '@/components/EventComingUp';
import EventList from '@/components/EventList';
import EventMonthlyTimeline from '@/components/EventMonthlyTimeline';
import EventEmptyState from '@/components/EventEmptyState';
import SEO from '@/components/common/SEO';
import NewsletterBanner from '@/components/NewsletterBanner';
import { getCategoryTitle } from '@/utils/eventHelpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { buildEventPath } from '@/lib/event-slug';
import { localizeEvents } from '@/lib/localizeEvent';
import AdUnit from '@/components/common/AdUnit';

interface EventsPageProps {
  events: Event[];
  categoryCounts: Record<string, number>;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    // Only events that haven't ended: the hero carousel takes `featured` rows
    // from this list, so past featured events would otherwise linger there.
    const { data: eventsData, error } = await supabase
      .from('events')
      .select('*')
      .or(`end_date.gte.${getSafetyDateBuffer(1)},end_date.is.null`)
      .order('start_date', { ascending: true });
    if (error) throw error;

    const events = localizeEvents(filterUpcomingEvents(eventsData), locale);
    const artsCount = events.filter((e) => e.category === 'arts-culture').length;
    const categoryCounts: Record<string, number> = {
      all: events.length,
      sports: events.filter((e) => e.category === 'sports').length,
      cultural: artsCount,
      'arts-culture': artsCount,
      music: events.filter((e) => e.category === 'music').length,
      culinary: events.filter((e) => e.category === 'culinary').length,
      'community-social': events.filter((e) => e.category === 'community-social').length,
    };

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'es', ['common'])),
        events,
        categoryCounts,
      },
      revalidate: 300,
    };
  } catch (error) {
    console.error('Error fetching events:', error);
    const empty = { all: 0, sports: 0, cultural: 0, 'arts-culture': 0, music: 0, culinary: 0, 'community-social': 0 };
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'es', ['common'])),
        events: [],
        categoryCounts: empty,
      },
      revalidate: 60,
    };
  }
};

export default function EventsIndex({ events: initialEvents, categoryCounts: initialCategoryCounts }: EventsPageProps) {
  const events = useUpcomingEvents(initialEvents);
  const categoryCounts = Object.fromEntries(Object.keys(initialCategoryCounts).map(category => [
    category, category === 'all' ? events.length : events.filter(event =>
      event.category === (category === 'cultural' ? 'arts-culture' : category)
    ).length,
  ]));
  const router = useRouter();
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all' as EventCategory);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (newCategory: EventCategory) => {
    router.push(`/events/${newCategory}`);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredEvents(events);
      return;
    }
    const term = searchTerm.toLowerCase();
    setFilteredEvents(
      events.filter(
        (e) =>
          e.title.toLowerCase().includes(term) ||
          (e.description?.toLowerCase() || '').includes(term) ||
          e.location.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, events]);

  const handleClearFilters = () => {
    setSearchTerm('');
    router.push('/events');
  };

  const heroEvents = events.filter((e) => e.featured).slice(0, 5);
  const hasHero = heroEvents.length > 0;
  const familyEvents = events.filter((e) => e.family_friendly).slice(0, 6);

  return (
    <>
      <SEO
        title="Eventos en San Luis Potosí: Agenda Cultural 2026 | Conciertos, Festivales y Deportes"
        description="Agenda cultural completa de San Luis Potosí 2026. Conciertos, festivales, eventos deportivos, culinarios y familiares. Actualizada semanalmente."
        keywords="eventos san luis potosi, agenda cultural slp, que hacer en san luis potosi, conciertos slp, festivales san luis potosi, eventos 2026"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Eventos en San Luis Potosí',
          description: 'Agenda cultural y eventos en San Luis Potosí, México.',
          url: 'https://www.sanluisway.com/events',
          numberOfItems: events.length,
          itemListElement: events.slice(0, 20).map((event, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Event',
              '@id': `https://www.sanluisway.com${buildEventPath(event)}`,
              name: event.title,
              startDate: getEventSchedule(event, router.locale ?? 'es').startDate,
              ...(getEventSchedule(event, router.locale ?? 'es').endDate
                ? { endDate: getEventSchedule(event, router.locale ?? 'es').endDate } : {}),
              url: `https://www.sanluisway.com${buildEventPath(event)}`,
              inLanguage: 'es-MX',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: event.location || 'San Luis Potosí',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'San Luis Potosí',
                  addressRegion: 'SLP',
                  addressCountry: 'MX',
                },
              },
              ...(event.image_url ? { image: event.image_url } : {}),
            },
          })),
        }}
      />

      {/* Canonical emitted globally (locale-aware) by HreflangAlternates in _app.tsx.
          The hardcoded EN canonical that lived here conflicted with it on the
          /es, /de and /ja variants and broke the hreflang cluster. */}

      {hasHero && <EventHeroCarousel events={heroEvents} />}

      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              {getCategoryTitle('all')}
            </h1>
            <EventSearchBar value={searchTerm} onChange={setSearchTerm} className="md:w-80" />
          </div>

          <EventCategoryFilter
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
            showCounts
            counts={categoryCounts}
          />

          <Link
            href="/events/this-week"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            📅 ¿Solo quieres ver esta semana? → Eventos de los próximos 7 días
          </Link>

          {filteredEvents.length === 0 && (
            <div className="mt-8">
              <EventEmptyState onClear={handleClearFilters} />
            </div>
          )}

          {filteredEvents.length > 0 && (
            <div className="mt-8">
              <EventComingUp events={filteredEvents} count={5} />
            </div>
          )}

          {!searchTerm && familyEvents.length > 0 && (
            <section className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    👨‍👩‍👧‍👦 {t('homepage.events.familyTitle')}
                  </h2>
                  <p className="text-gray-600 mt-1">{t('homepage.events.familySubtitle')}</p>
                </div>
                <Link
                  href="/family-friendly-activities"
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  {t('homepage.events.familyMore')} →
                </Link>
              </div>
              <EventList events={familyEvents} />
            </section>
          )}

          {filteredEvents.length > 0 && (
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 pl-14 md:pl-20">
                Calendario de Eventos
              </h2>
              <EventMonthlyTimeline events={filteredEvents} />
            </section>
          )}

          <section className="my-8">
            <AdUnit placement="mid-content" />
          </section>

          <NewsletterBanner variant="mid-content" className="mb-12" />
        </div>
      </div>
    </>
  );
}
