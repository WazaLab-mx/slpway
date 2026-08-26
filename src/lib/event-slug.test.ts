import { buildEventSlug, buildEventPath, extractIdPrefix } from './event-slug';
import { localizeEvent } from './localizeEvent';

const event = {
  id: 'f7555c3c-1111-2222-3333-444444444444',
  title: 'Kany García in San Luis Potosí',
  title_es: 'Kany García en San Luis Potosí',
  description: null,
  category: 'music',
};

describe('buildEventSlug', () => {
  it('slugifies the title and appends the 8-hex id prefix', () => {
    expect(buildEventSlug(event)).toBe('kany-garcia-in-san-luis-potosi-f7555c3c');
    expect(extractIdPrefix(buildEventSlug(event))).toBe('f7555c3c');
  });

  it('keeps the same slug for every locale once the event is localized', () => {
    const es = localizeEvent(event, 'es');
    expect(es.title).toBe('Kany García en San Luis Potosí');
    expect(buildEventSlug(es)).toBe(buildEventSlug(event));
    expect(buildEventPath(es)).toBe('/events/music/kany-garcia-in-san-luis-potosi-f7555c3c');
  });
});
