// Adds every La Bocana / La Bocanita restaurant branch as `seafood`, with data
// from Google Places (2026-09-29). Pescadería La Bocana (a fish market) is left out.
// Usage: node scripts/add-bocana-branches-2026-09-29.mjs <photos-dir>
import { addPlaces } from './lib/add-places.mjs';

const BOCANA = {
  description: 'Branch of La Bocana, a long-running Potosino seafood chain. Shrimp cocktails, aguachiles, tostadas, fish fillets and seafood platters for sharing, with beer and micheladas. Family-friendly; reservations accepted.',
  description_es: 'Sucursal de La Bocana, cadena de mariscos potosina con muchos años en la ciudad. Cócteles de camarón, aguachiles, tostadas, filetes de pescado y mariscadas para compartir, con cerveza y micheladas. Ambiente familiar; acepta reservaciones.',
  description_de: 'Filiale von La Bocana, einer langjährigen Meeresfrüchtekette aus San Luis Potosí. Garnelencocktails, Aguachiles, Tostadas, Fischfilets und Meeresfrüchteplatten zum Teilen, dazu Bier und Micheladas. Familienfreundlich; Reservierungen möglich.',
};

const BOCANITA = {
  description: 'The smaller, casual sister of La Bocana. Crab empanadas, shrimp tacos, tuna tostadas, aguachiles and seafood soups, with beer and micheladas.',
  description_es: 'La hermana chica y más casual de La Bocana. Empanadas de jaiba, tacos de camarón, tostadas de atún, aguachiles y caldos de mariscos, con cerveza y micheladas.',
  description_de: 'Die kleinere, lockere Schwester von La Bocana. Krabben-Empanadas, Garnelentacos, Thunfisch-Tostadas, Aguachiles und Meeresfrüchtesuppen, dazu Bier und Micheladas.',
};

const branches = [
  {
    ...BOCANA,
    photo: 'bocana-cuauh-1-web.jpg',
    name: 'La Bocana Cuauhtémoc',
    address: 'Av. Cuauhtémoc 1646 A, Jardín, 78270',
    phone: '444 833 5017',
    latitude: 22.1477584,
    longitude: -101.0084503,
    hours: 'Mon - Sun: 12:00 - 19:00',
    tags: ['seafood', 'mariscos', 'family friendly'],
  },
  {
    ...BOCANA,
    photo: 'bocana-himno-3-web.jpg',
    name: 'La Bocana Himno Nacional',
    address: 'Av. Himno Nacional 2790, Estadio, 78280',
    phone: '444 820 3540',
    latitude: 22.1387411,
    longitude: -100.9899376,
    hours: 'Mon - Sun: 12:00 - 19:00',
    tags: ['seafood', 'mariscos', 'family friendly'],
  },
  {
    ...BOCANA,
    photo: 'bocana-pozos-2-web.jpg',
    name: 'La Bocana Villa de Pozos',
    address: 'Emiliano Zapata 215, Ejido de la Libertad, Villa de Pozos, 78394',
    phone: '444 824 5223',
    latitude: 22.1242028,
    longitude: -100.9155108,
    hours: 'Mon - Fri: 11:30 - 18:30 / Sat - Sun: 12:00 - 19:00',
    tags: ['seafood', 'mariscos', 'family friendly'],
  },
  {
    ...BOCANITA,
    photo: 'bocanita-cuauh-0-web.jpg',
    name: 'La Bocanita Cuauhtémoc',
    address: 'Av. Cuauhtémoc 1625, Jardín, 78270',
    phone: '444 833 2455',
    latitude: 22.1476213,
    longitude: -101.0081036,
    hours: 'Mon - Sun: 12:00 - 18:00',
    tags: ['seafood', 'mariscos', 'outdoor seating'],
  },
  {
    ...BOCANITA,
    photo: 'bocanita-sierra-0-web.jpg',
    name: 'La Bocanita Sierra Leona',
    address: 'Lib. Sur Anillo Periférico 541, Garita de Jalisco, 78294',
    phone: '444 210 3602',
    latitude: 22.1322329,
    longitude: -101.0195746,
    hours: 'Mon - Sun: 12:00 - 19:00',
    tags: ['seafood', 'mariscos'],
  },
].map((branch) => ({ ...branch, category: 'seafood', website: null, instagram: null }));

await addPlaces(branches, process.argv[2]);
