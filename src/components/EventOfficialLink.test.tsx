import { render, screen } from '@testing-library/react';
import EventOfficialLink from './EventOfficialLink';

it('links directly to the official event source with a translated label', () => {
  render(<EventOfficialLink website="https://www.eticket.mx/" locale="es" />);
  expect(screen.getByRole('link', { name: 'Sitio oficial y detalles' })).toHaveAttribute('href', 'https://www.eticket.mx/');
});

it.each([undefined, 'javascript:alert(1)', 'data:text/html,test', 'invalid'])('omits unsafe or absent sources: %s', website => {
  render(<EventOfficialLink website={website} locale="en" />);
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
