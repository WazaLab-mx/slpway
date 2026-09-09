import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import ParkEventCard from '@/components/ParkEventCard';
import { useUpcomingEvents } from '@/hooks/useUpcomingEvents';
import { Event } from '@/types';

interface TangamangaEventsProps {
  events: Event[];
  unavailable?: boolean;
}

export default function TangamangaEvents({ events: initialEvents, unavailable = false }: TangamangaEventsProps) {
  const { t } = useTranslation('park-events');
  const events = useUpcomingEvents(initialEvents);

  return (
    <section id="park-events" aria-labelledby="park-events-heading" className="mb-12 overflow-hidden rounded-3xl bg-primary shadow-xl">
      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
            {t('eyebrow')}
          </span>
          <h2 id="park-events-heading" className="mb-3 text-2xl font-bold !text-white md:text-3xl">{t('title')}</h2>
          <p className="!text-slate-200">{t('description')}</p>
        </div>
        <Link href="/events" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 font-semibold text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          {t('allEvents')} <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        {events.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {events.map(event => <ParkEventCard key={event.id} event={event} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
            <h3 className="mb-2 text-lg font-semibold !text-white">{t(unavailable ? 'unavailableTitle' : 'emptyTitle')}</h3>
            <p className="max-w-2xl !text-slate-200">{t(unavailable ? 'unavailableDescription' : 'emptyDescription')}</p>
            <a href="https://cecurt.slp.gob.mx/faq/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold text-secondary underline underline-offset-4 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t('source')}</a>
          </div>
        )}
        <p className="mt-5 text-sm !text-slate-300">{t('note')}</p>
      </div>
    </section>
  );
}
