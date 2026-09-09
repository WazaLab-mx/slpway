import { getEventSchedule } from './event-schedule';

const dates = { start_date: '2026-10-30T06:00:00Z', end_date: '2026-11-03T05:59:59Z' };

it('does not turn unknown hours into a midnight schedule', () => {
  expect(getEventSchedule({ ...dates, date: '2026-10-30', time: null }, 'es')).toEqual({
    label: 'Horario por confirmar', startDate: '2026-10-30', endDate: '2026-11-02',
  });
  expect(getEventSchedule({ ...dates, date: '2026-10-30', time: null }, 'ja').label).toBe('時間未定');
});

it('shows only the confirmed start when the closing time is unknown', () => {
  expect(getEventSchedule({ ...dates, date: '2026-10-30', time: '18:30:00' }, 'en')).toEqual({
    label: '18:30', startDate: dates.start_date,
  });
});

it('shows a confirmed start and end without changing legacy schedules', () => {
  expect(getEventSchedule({ ...dates, date: '2026-10-30', time: '18:30', end_time: '22:00' }, 'en').label).toBe('18:30 - 22:00');
  const legacy = getEventSchedule(dates, 'es');
  expect(legacy.startDate).toBe(dates.start_date);
  expect(legacy.endDate).toBe(dates.end_date);
  expect(legacy.label).toContain('23:59');
});
