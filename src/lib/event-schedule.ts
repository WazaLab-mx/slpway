import { EventDates } from './event-dates';

interface EventSchedule extends EventDates {
  date?: string | null;
  time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
}

const timePending: Record<string, string> = {
  en: 'Time to be confirmed', es: 'Horario por confirmar',
  de: 'Uhrzeit wird noch bekannt gegeben', ja: '時間未定',
};

function localDate(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date(value));
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-');
}

export function getEventSchedule(event: EventSchedule, locale: string) {
  const startTime = event.time || event.start_time;
  if (event.date && !startTime) {
    return {
      label: timePending[locale] || timePending.en,
      startDate: localDate(event.start_date),
      ...(event.end_date ? { endDate: localDate(event.end_date) } : {}),
    };
  }
  if (event.date && startTime) {
    const start = startTime.slice(0, 5);
    return {
      label: event.end_time ? `${start} - ${event.end_time.slice(0, 5)}` : start,
      startDate: event.start_date,
      ...(event.end_time && event.end_date ? { endDate: event.end_date } : {}),
    };
  }
  const formatTime = (value: string) => new Date(value).toLocaleTimeString(locale, {
    timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit',
  });
  return {
    label: [event.start_date, event.end_date].filter(Boolean).map(value => formatTime(value!)).join(' - '),
    startDate: event.start_date,
    ...(event.end_date ? { endDate: event.end_date } : {}),
  };
}
