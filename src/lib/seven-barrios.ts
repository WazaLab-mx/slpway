// The seven traditional barrios of San Luis Potosí, in suggested walking order
// (clockwise from the north). Coordinates verified 2026-10-28: OSM objects
// cross-checked against Wikidata, HMDB marker GPS or Google Places data.
// Founding years only where two independent external sources agree.

export type LabelSide = 'left' | 'right' | 'top' | 'bottom';

export interface Barrio {
  id: string;
  name: string;
  lat: number;
  lon: number;
  foundedYear: number | null;
  labelSide: LabelSide;
}

export interface LatLon {
  lat: number;
  lon: number;
}

export const SEVEN_BARRIOS_PATH = '/seven-barrios-san-luis-potosi';

// Catedral Metropolitana on Plaza de Armas (OSM way 745465490, Wikidata Q5694278).
export const CATEDRAL: LatLon = { lat: 22.15166, lon: -100.97551 };

export const BARRIOS: Barrio[] = [
  { id: 'santiago', name: 'Santiago', lat: 22.16699, lon: -100.97863, foundedYear: 1592, labelSide: 'left' },
  { id: 'tlaxcala', name: 'Tlaxcala', lat: 22.16566, lon: -100.97395, foundedYear: 1592, labelSide: 'right' },
  { id: 'montecillo', name: 'Montecillo', lat: 22.15389, lon: -100.96818, foundedYear: null, labelSide: 'right' },
  { id: 'sanSebastian', name: 'San Sebastián', lat: 22.14507, lon: -100.97147, foundedYear: 1603, labelSide: 'right' },
  { id: 'sanJuanDeGuadalupe', name: 'San Juan de Guadalupe', lat: 22.13608, lon: -100.9707, foundedYear: 1676, labelSide: 'bottom' },
  { id: 'sanMiguelito', name: 'San Miguelito', lat: 22.14453, lon: -100.97614, foundedYear: 1597, labelSide: 'left' },
  { id: 'tequisquiapan', name: 'Tequisquiapan', lat: 22.15061, lon: -100.99235, foundedYear: null, labelSide: 'bottom' },
];

// Loop Catedral → 7 barrios → Catedral, measured on the OSM foot network
// (routing.openstreetmap.de, routed-foot) on 2026-10-28: 12,996 m.
export const LOOP_DISTANCE_KM = 13;

export interface Point {
  x: number;
  y: number;
}

/**
 * Projects lat/lon to SVG coordinates (equirectangular around the Catedral,
 * north up), scaled so every barrio fits a square `size` canvas with `padding`.
 */
export function createProjection(size = 400, padding = 56, center: LatLon = CATEDRAL, points: LatLon[] = BARRIOS) {
  const cosLat = Math.cos((center.lat * Math.PI) / 180);
  const extent = Math.max(
    ...points.map((p) => Math.max(Math.abs(p.lat - center.lat), Math.abs((p.lon - center.lon) * cosLat))),
  );
  const scale = (size / 2 - padding) / extent;
  return ({ lat, lon }: LatLon): Point => ({
    x: size / 2 + (lon - center.lon) * cosLat * scale,
    y: size / 2 - (lat - center.lat) * scale,
  });
}

const coord = ({ lat, lon }: LatLon) => `${lat},${lon}`;

/** Google Maps walking directions: Catedral → every barrio in order → Catedral. */
export function buildWalkingRouteUrl(stops: LatLon[] = BARRIOS, start: LatLon = CATEDRAL): string {
  const params = new URLSearchParams({
    api: '1',
    origin: coord(start),
    destination: coord(start),
    waypoints: stops.map(coord).join('|'),
    travelmode: 'walking',
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function buildPlaceUrl(point: LatLon): string {
  const params = new URLSearchParams({ api: '1', query: coord(point) });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
