import { BARRIOS, CATEDRAL, LOOP_DISTANCE_KM, buildPlaceUrl, buildWalkingRouteUrl, createProjection } from './seven-barrios';
import { buildSevenBarriosSchema } from './seven-barrios-schema';
import { STATIC_ROUTES } from './sitemap/static-routes';

const EARTH_KM = 6371;
function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const rad = (d: number) => (d * Math.PI) / 180;
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lon - a.lon) / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.sqrt(h));
}

describe('seven barrios data', () => {
  it('lists the seven barrios with unique ids in clockwise walking order from Santiago to Tequisquiapan', () => {
    expect(BARRIOS.map((b) => b.id)).toEqual([
      'santiago', 'tlaxcala', 'montecillo', 'sanSebastian', 'sanJuanDeGuadalupe', 'sanMiguelito', 'tequisquiapan',
    ]);
    expect(new Set(BARRIOS.map((b) => b.id)).size).toBe(7);
  });

  it('places every church inside the San Luis Potosí city center, within 2 km of the Catedral', () => {
    for (const b of BARRIOS) {
      expect(b.lat).toBeGreaterThan(22.12);
      expect(b.lat).toBeLessThan(22.18);
      expect(b.lon).toBeGreaterThan(-101.0);
      expect(b.lon).toBeLessThan(-100.95);
      expect(haversineKm(CATEDRAL, b)).toBeLessThan(2);
    }
  });

  it('runs clockwise: bearings from the Catedral increase along the route', () => {
    const bearing = (b: { lat: number; lon: number }) => {
      const deg = (Math.atan2(b.lon - CATEDRAL.lon, b.lat - CATEDRAL.lat) * 180) / Math.PI;
      return (deg + 360 + 30) % 360; // shift so Santiago (just west of north) starts near 0
    };
    const bearings = BARRIOS.map(bearing);
    expect([...bearings].sort((a, b) => a - b)).toEqual(bearings);
  });

  it('keeps only founding years confirmed by two sources', () => {
    const years = Object.fromEntries(BARRIOS.map((b) => [b.id, b.foundedYear]));
    expect(years).toEqual({
      santiago: 1592, tlaxcala: 1592, montecillo: null, sanSebastian: 1603,
      sanJuanDeGuadalupe: 1676, sanMiguelito: 1597, tequisquiapan: null,
    });
  });

  it('states a street distance consistent with straight-line legs × ~1.25', () => {
    const points = [CATEDRAL, ...BARRIOS, CATEDRAL];
    const straight = points.slice(1).reduce((sum, p, i) => sum + haversineKm(points[i], p), 0);
    expect(straight).toBeGreaterThan(10);
    expect(LOOP_DISTANCE_KM / straight).toBeGreaterThan(1.1);
    expect(LOOP_DISTANCE_KM / straight).toBeLessThan(1.4);
  });
});

describe('createProjection', () => {
  const project = createProjection(400, 56);

  it('puts the Catedral at the center with north up and east right', () => {
    expect(project(CATEDRAL)).toEqual({ x: 200, y: 200 });
    const santiago = project(BARRIOS[0]);
    const montecillo = project(BARRIOS[2]);
    expect(santiago.y).toBeLessThan(200);
    expect(montecillo.x).toBeGreaterThan(200);
  });

  it('fits every barrio inside the padded canvas, touching the edge with the farthest one', () => {
    const points = BARRIOS.map(project);
    for (const p of points) {
      expect(p.x).toBeGreaterThanOrEqual(56 - 1e-9);
      expect(p.x).toBeLessThanOrEqual(344 + 1e-9);
      expect(p.y).toBeGreaterThanOrEqual(56 - 1e-9);
      expect(p.y).toBeLessThanOrEqual(344 + 1e-9);
    }
    const maxOffset = Math.max(...points.map((p) => Math.max(Math.abs(p.x - 200), Math.abs(p.y - 200))));
    expect(maxOffset).toBeCloseTo(144, 6);
  });

  it('preserves real proportions: map distance ratio matches ground distance ratio', () => {
    const c = project(CATEDRAL);
    const [tequis, tlaxcala] = [project(BARRIOS[6]), project(BARRIOS[1])];
    const mapRatio = Math.hypot(tequis.x - c.x, tequis.y - c.y) / Math.hypot(tlaxcala.x - c.x, tlaxcala.y - c.y);
    const groundRatio = haversineKm(CATEDRAL, BARRIOS[6]) / haversineKm(CATEDRAL, BARRIOS[1]);
    expect(mapRatio).toBeCloseTo(groundRatio, 2);
  });
});

describe('Google Maps URLs', () => {
  it('builds a walking loop from the Catedral through all seven barrios in order', () => {
    const url = new URL(buildWalkingRouteUrl());
    expect(url.origin + url.pathname).toBe('https://www.google.com/maps/dir/');
    expect(url.searchParams.get('api')).toBe('1');
    expect(url.searchParams.get('travelmode')).toBe('walking');
    expect(url.searchParams.get('origin')).toBe('22.15166,-100.97551');
    expect(url.searchParams.get('destination')).toBe('22.15166,-100.97551');
    expect(url.searchParams.get('waypoints')).toBe(BARRIOS.map((b) => `${b.lat},${b.lon}`).join('|'));
    expect(url.search).toContain('%7C');
  });

  it('builds a per-barrio search link', () => {
    expect(buildPlaceUrl(BARRIOS[0])).toBe('https://www.google.com/maps/search/?api=1&query=22.16699%2C-100.97863');
  });
});

describe('structured data and sitemap', () => {
  it('describes the barrios as an ordered list plus an FAQ, tied to the city on Wikidata', () => {
    const faqs = [{ q: 'Q?', a: 'A.' }];
    const [attraction, list, faq] = buildSevenBarriosSchema('T', 'D', faqs)['@graph'] as Array<Record<string, any>>;
    expect(attraction['@type']).toBe('TouristAttraction');
    expect(attraction.containedInPlace.sameAs).toBe('https://www.wikidata.org/wiki/Q204271');
    expect(list.itemListElement).toHaveLength(7);
    expect(list.itemListElement[6].item.name).toBe('Barrio de Tequisquiapan');
    expect(faq.mainEntity[0].acceptedAnswer.text).toBe('A.');
  });

  it('is listed in the sitemap', () => {
    expect(STATIC_ROUTES.map((r) => r.path)).toContain('/seven-barrios-san-luis-potosi');
  });
});
