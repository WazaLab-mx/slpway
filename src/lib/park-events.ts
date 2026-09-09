import { EventDates, filterUpcomingEvents } from './event-dates';

export function isTangamangaOneEvent(event: { location?: string | null }): boolean {
  const location = (event.location ?? '').normalize('NFKC').toLowerCase();
  return /\btangamanga\s+(?:i|1)\b/.test(location)
    && !/\btangamanga\s+(?:ii|2)\b/.test(location);
}

export function getTangamangaOneEvents<T extends EventDates & { location?: string | null }>(
  events: T[] | null | undefined,
  now = new Date(),
): T[] {
  return filterUpcomingEvents(events, now).filter(isTangamangaOneEvent);
}
