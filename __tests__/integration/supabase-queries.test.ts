import { filterUpcomingEvents, getSafetyDateBuffer } from '@/lib/supabase';

// Mock the supabase client initialization to avoid env var issues
jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createPagesBrowserClient: jest.fn(() => ({
    from: jest.fn(),
  })),
}));

jest.mock('@/lib/logger', () => ({
  logger: { log: jest.fn(), error: jest.fn(), warn: jest.fn() },
}));

describe('Supabase Query Helpers', () => {
  beforeEach(() => jest.useFakeTimers().setSystemTime(new Date('2026-09-08T18:00:00Z')));
  afterEach(() => jest.useRealTimers());

  describe('filterUpcomingEvents', () => {
    it('returns empty array for null input', () => {
      expect(filterUpcomingEvents(null)).toEqual([]);
    });

    it('returns empty array for non-array input', () => {
      expect(filterUpcomingEvents('not-array' as any)).toEqual([]);
    });

    it('returns empty array for empty array', () => {
      expect(filterUpcomingEvents([])).toEqual([]);
    });

    it('includes events still ongoing today but excludes those already finished today', () => {
      const events = [
        {
          id: '1',
          title: 'Today Event',
          start_date: '2026-09-08T09:00:00-06:00',
          end_date: '2026-09-08T13:00:00-06:00',
        },
        {
          id: 'finished',
          title: 'Finished Today',
          start_date: '2026-09-08T08:00:00-06:00',
          end_date: '2026-09-08T11:00:00-06:00',
        },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('Today Event');
    });

    it('includes future events', () => {
      const future = new Date();
      future.setDate(future.getDate() + 7);

      const events = [
        {
          id: '2',
          title: 'Future Event',
          start_date: future.toISOString(),
          end_date: future.toISOString(),
        },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(1);
    });

    it('excludes events that have already ended', () => {
      const pastStart = new Date();
      pastStart.setDate(pastStart.getDate() - 10);

      const pastEnd = new Date();
      pastEnd.setDate(pastEnd.getDate() - 5);

      const events = [
        {
          id: '3',
          title: 'Past Event',
          start_date: pastStart.toISOString(),
          end_date: pastEnd.toISOString(),
        },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(0);
    });

    it('includes ongoing events (started in the past, ends in the future)', () => {
      const pastStart = new Date();
      pastStart.setDate(pastStart.getDate() - 2);

      const futureEnd = new Date();
      futureEnd.setDate(futureEnd.getDate() + 5);

      const events = [
        {
          id: '4',
          title: 'Ongoing Festival',
          start_date: pastStart.toISOString(),
          end_date: futureEnd.toISOString(),
        },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('Ongoing Festival');
    });

    it('includes future events with missing end_date', () => {
      const futureStart = new Date();
      futureStart.setDate(futureStart.getDate() + 1);

      const events = [
        {
          id: '5',
          title: 'No End Date',
          start_date: futureStart.toISOString(),
        },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(1);
    });

    it('filters mixed events correctly', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 30);

      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 14);

      const events = [
        { id: '1', title: 'Past', start_date: pastDate.toISOString(), end_date: pastDate.toISOString() },
        { id: '2', title: 'Future', start_date: futureDate.toISOString(), end_date: futureDate.toISOString() },
        { id: '3', title: 'Also Past', start_date: pastDate.toISOString(), end_date: pastDate.toISOString() },
      ];

      const result = filterUpcomingEvents(events);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('Future');
    });
  });

  describe('getSafetyDateBuffer', () => {
    it('returns ISO string', () => {
      const result = getSafetyDateBuffer();
      expect(() => new Date(result)).not.toThrow();
      expect(typeof result).toBe('string');
    });

    it('defaults to 7 days back', () => {
      const result = new Date(getSafetyDateBuffer());
      const expected = new Date();
      expected.setDate(expected.getDate() - 7);

      // Within 1 second tolerance
      expect(Math.abs(result.getTime() - expected.getTime())).toBeLessThan(1000);
    });

    it('respects custom daysBack parameter', () => {
      const result = new Date(getSafetyDateBuffer(14));
      const expected = new Date();
      expected.setDate(expected.getDate() - 14);

      expect(Math.abs(result.getTime() - expected.getTime())).toBeLessThan(1000);
    });
  });
});
