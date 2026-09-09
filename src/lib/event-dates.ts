export interface EventDates {
  start_date: string;
  end_date?: string | null;
}

const localDayFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit',
});

function localDay(date: Date): string {
  const parts = localDayFormatter.formatToParts(date);
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-');
}

export function isUpcomingEvent(event: EventDates, now = new Date()): boolean {
  const end = event.end_date || event.start_date;
  if (!Number.isFinite(Date.parse(end))) return false;
  if (/^\d{4}-\d{2}-\d{2}$/.test(end)) return end >= localDay(now);
  if (!event.end_date) return localDay(new Date(end)) >= localDay(now);
  return Date.parse(end) > now.getTime();
}

export function filterUpcomingEvents<T extends EventDates>(events: T[] | null | undefined, now = new Date()): T[] {
  return Array.isArray(events) ? events.filter(event => isUpcomingEvent(event, now)) : [];
}
