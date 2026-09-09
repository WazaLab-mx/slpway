import { fireEvent, render, screen } from '@testing-library/react';
import EventMonthlyTimeline from './EventMonthlyTimeline';
import { Event } from '@/types';

beforeEach(() => jest.useFakeTimers().setSystemTime(new Date('2026-09-08T18:00:00Z')));
afterEach(() => jest.useRealTimers());

it('places ongoing events in their own group instead of an old start month', () => {
  render(<EventMonthlyTimeline events={[
    { id: 'ongoing', title: 'Ongoing exhibition', start_date: '2025-11-01T18:00:00Z', end_date: '2026-10-01T18:00:00Z', category: 'arts-culture' },
    { id: 'future', title: 'Future event', start_date: '2026-09-19T18:00:00Z', end_date: '2026-09-19T20:00:00Z', category: 'music' },
  ] as Event[]} />);
  expect(screen.getByRole('heading', { name: 'En curso' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /2025/ })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Septiembre 2026/ })).toBeInTheDocument();
});

it('shows every card in a large expanded month and removes collapsed links from navigation', () => {
  const events = Array.from({ length: 39 }, (_, index) => ({
    id: `event-${index}`, title: `September event ${index}`, category: 'music',
    start_date: '2026-09-19T18:00:00Z', end_date: '2026-09-19T20:00:00Z',
  })) as Event[];
  const { container } = render(<EventMonthlyTimeline events={events} />);
  expect(screen.getAllByRole('link')).toHaveLength(39);
  expect(container.querySelector('[class*="max-h-"]')).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: /Septiembre 2026/ }));
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
