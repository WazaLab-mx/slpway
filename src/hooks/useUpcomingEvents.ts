import { useEffect, useMemo, useState } from 'react';
import { EventDates, filterUpcomingEvents } from '@/lib/event-dates';

export function useEventClock(): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const refresh = () => setNow(new Date());
    refresh();
    const interval = window.setInterval(refresh, 30_000);
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);

  return now;
}

export function useUpcomingEvents<T extends EventDates>(events: T[]): T[] {
  const now = useEventClock();
  // Preserve the server snapshot during hydration, then expire cached rows.
  return useMemo(() => now ? filterUpcomingEvents(events, now) : events, [events, now]);
}
