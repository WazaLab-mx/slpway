import { fireEvent, render, screen } from '@testing-library/react';
import EventHeroCarousel from './EventHeroCarousel';
import { Event } from '@/types';

it('keeps a valid active slide when another event expires', () => {
  const events = [
    { id: 'first', title: 'First', start_date: '2026-09-08', category: 'music', image_url: null },
    { id: 'second', title: 'Second', start_date: '2026-09-09', category: 'music', image_url: null },
  ] as Event[];
  const { rerender } = render(<EventHeroCarousel events={events} />);
  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons.find(button => button.getAttribute('aria-label')?.includes('2'))!);
  rerender(<EventHeroCarousel events={[events[0]]} />);
  expect(screen.getByRole('heading', { name: 'First' })).toBeInTheDocument();
});
