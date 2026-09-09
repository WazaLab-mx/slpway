import { act, renderHook } from '@testing-library/react';
import { useUpcomingEvents } from '@/hooks/useUpcomingEvents';

describe('cached event listings', () => {
  beforeEach(() => jest.useFakeTimers().setSystemTime(new Date('2026-09-08T18:00:00Z')));
  afterEach(() => jest.useRealTimers());

  it('expires cached events on mount and while the listing stays open', () => {
    const events = [
      { id: 'past', start_date: '2026-08-01', end_date: '2026-08-31' },
      { id: 'ending', start_date: '2026-09-08T17:00:00Z', end_date: '2026-09-08T18:00:30Z' },
      { id: 'all-day', start_date: '2026-09-08', end_date: '2026-09-08' },
    ];
    const { result, unmount } = renderHook(() => useUpcomingEvents(events));
    expect(result.current.map(event => event.id)).toEqual(['ending', 'all-day']);
    act(() => { jest.advanceTimersByTime(30_000); });
    expect(result.current.map(event => event.id)).toEqual(['all-day']);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });

  it('refreshes after a tab was suspended and receives updated page props', () => {
    const events = [{ start_date: '2026-09-08', end_date: '2026-09-08' }];
    const { result, rerender } = renderHook(({ rows }) => useUpcomingEvents(rows), { initialProps: { rows: events } });
    act(() => {
      jest.setSystemTime(new Date('2026-09-09T06:00:00Z'));
      window.dispatchEvent(new Event('focus'));
    });
    expect(result.current).toEqual([]);
    const future = [{ start_date: '2026-09-10', end_date: '2026-09-10' }];
    rerender({ rows: future });
    expect(result.current).toEqual(future);
  });
});
