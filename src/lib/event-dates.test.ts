import { filterUpcomingEvents, isUpcomingEvent } from './event-dates';
import { getUpcomingEvents } from '@/utils/eventHelpers';
import { Event } from '@/types';

const now = new Date('2026-09-08T18:00:00Z');

describe('event expiration in San Luis Potosi', () => {
  it('removes events at their exact end, including events earlier today', () => {
    expect(isUpcomingEvent({ start_date: '2026-09-08T09:00:00-06:00', end_date: now.toISOString() }, now)).toBe(false);
  });

  it('retains an ongoing event that started on a previous day', () => {
    expect(isUpcomingEvent({ start_date: '2026-09-01T09:00:00-06:00', end_date: '2026-09-09T20:00:00-06:00' }, now)).toBe(true);
  });

  it('keeps date-only events through the final day in Mexico City', () => {
    const event = { start_date: '2026-09-08', end_date: '2026-09-08' };
    expect(isUpcomingEvent(event, new Date('2026-09-09T05:59:59Z'))).toBe(true);
    expect(isUpcomingEvent(event, new Date('2026-09-09T06:00:00Z'))).toBe(false);
  });

  it('uses the start day for missing end dates without inventing a duration', () => {
    const event = { start_date: '2026-09-08T08:00:00-06:00', end_date: null };
    expect(isUpcomingEvent(event, now)).toBe(true);
    expect(isUpcomingEvent(event, new Date('2026-09-09T06:00:00Z'))).toBe(false);
  });

  it('rejects invalid dates and handles an empty result', () => {
    expect(isUpcomingEvent({ start_date: 'invalid', end_date: 'invalid' }, now)).toBe(false);
    expect(filterUpcomingEvents(null, now)).toEqual([]);
  });

  it('uses the current clock and keeps ongoing events in the coming-up list', () => {
    jest.useFakeTimers().setSystemTime(now);
    const events = [
      { id: 'ended', start_date: '2026-08-01', end_date: '2026-08-31' },
      { id: 'ongoing', start_date: '2026-09-01', end_date: '2026-09-09' },
      { id: 'future', start_date: '2026-09-10', end_date: '2026-09-10' },
    ] as Event[];
    expect(getUpcomingEvents(events, 5).map(event => event.id)).toEqual(['ongoing', 'future']);
    jest.useRealTimers();
  });
});
