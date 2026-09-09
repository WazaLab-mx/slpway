import { relatedLinksForEvent } from './related-links';

it('promotes the current seasonal guide from music events', () => {
  const links = relatedLinksForEvent('music');
  expect(links.some(({ href }) => href === '/events/xantolo-2026')).toBe(true);
  expect(links.some(({ href }) => href === '/events/fenapo-2026')).toBe(false);
});
