import { isTangamangaOneEvent, getTangamangaOneEvents } from './park-events';

describe('Tangamanga I event selection', () => {
  it.each(['Parque Tangamanga I', 'Tangamanga 1, San Luis Potosí', 'Teatro de la Ciudad, Parque Tangamanga I'])('includes explicit park I venues: %s', location => {
    expect(isTangamangaOneEvent({ location })).toBe(true);
  });

  it.each(['Parque Tangamanga II', 'Tangamanga 2', 'Parque Tangamanga', 'Tangamanga III', 'Tangamanga 10', 'Tangamanga I y Tangamanga II'])('excludes ambiguous or other park venues: %s', location => {
    expect(isTangamangaOneEvent({ location })).toBe(false);
  });

  it('retains ongoing park events and removes expired and other-park events', () => {
    const events = [
      { location: 'Tangamanga I', start_date: '2026-09-01', end_date: '2026-09-10' },
      { location: 'Tangamanga I', start_date: '2026-09-01', end_date: '2026-09-07' },
      { location: 'Tangamanga II', start_date: '2026-09-10', end_date: '2026-09-10' },
    ];
    expect(getTangamangaOneEvents(events, new Date('2026-09-08T18:00:00Z'))).toEqual([events[0]]);
    expect(getTangamangaOneEvents(null)).toEqual([]);
  });
});
