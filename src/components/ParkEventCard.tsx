import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { buildEventPath } from '@/lib/event-slug';
import { Event } from '@/types';

function formatParkDate(value: string, locale: string) {
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  return new Intl.DateTimeFormat(locale, {
    timeZone: dateOnly ? 'UTC' : 'America/Mexico_City',
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(value));
}

export default function ParkEventCard({ event }: { event: Event }) {
  const { t, i18n } = useTranslation('park-events');
  const start = formatParkDate(event.start_date, i18n.language);
  const end = event.end_date ? formatParkDate(event.end_date, i18n.language) : start;
  return (
    <Link href={buildEventPath(event)} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 to-primary">
        {event.image_url ? <Image src={event.image_url} alt={event.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" /> : <CalendarDaysIcon className="h-16 w-16 text-secondary" aria-hidden="true" />}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">{t(`categories.${event.category}`)}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:underline">{event.title}</h3>
        <p className="flex items-start gap-2 text-sm !text-gray-600"><CalendarDaysIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>{start === end ? start : `${start} – ${end}`}</span></p>
        <p className="flex items-start gap-2 text-sm !text-gray-600"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>{event.location}</span></p>
        {event.description && <p className="line-clamp-3 text-sm !text-gray-600">{event.description}</p>}
        {event.family_friendly && <span className="mt-auto w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">{t('familyFriendly')}</span>}
      </div>
    </Link>
  );
}
