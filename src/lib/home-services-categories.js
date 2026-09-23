// Service categories. `queries` feed Google Places text search; `jev` is the
// plain-language meaning Jev uses both to vet providers and to route a
// visitor's problem description to a category.
const CATEGORIES = {
  plumbing: { queries: ['plomero', 'destapa caños desazolve'], jev: 'Plumbing: leaks, clogged drains or toilets, drain unclogging (desazolve), pipes, water heaters, water tanks and pumps' },
  electrical: { queries: ['electricista'], jev: 'Electrical: outlets, wiring, breakers, short circuits, lighting installation' },
  locksmith: { queries: ['cerrajero'], jev: 'Locksmith: locked out, lock changes, keys, safes' },
  hvac: { queries: ['aire acondicionado instalación reparación', 'instalación de minisplit'], jev: 'Air conditioning and heating: install, repair or maintain AC units, minisplits, heaters' },
  appliance_repair: { queries: ['reparación de lavadoras refrigeradores'], jev: 'Appliance repair: washing machines, dryers, refrigerators, stoves, ovens' },
  carpentry: { queries: ['carpintero'], jev: 'Carpentry: doors, cabinets, closets, wooden furniture repair or custom work' },
  painting: { queries: ['pintor', 'pintura residencial'], jev: 'Painting: interior or exterior house painting, walls, facades' },
  masonry: { queries: ['albañil', 'albañilería remodelación'], jev: 'Masonry and construction: walls, floors, tiles, small remodeling, concrete work' },
  waterproofing: { queries: ['impermeabilización de techos', 'impermeabilizante aplicación'], jev: 'Waterproofing: roof leaks and seepage, roof sealing, humidity in walls' },
  ironwork: { queries: ['herrería'], jev: 'Ironwork and welding: gates, window bars, railings, metal doors' },
  gardening: { queries: ['jardinero', 'mantenimiento de jardines'], jev: 'Gardening: lawn, pruning, trees, garden maintenance, irrigation' },
  cleaning: { queries: ['limpieza de casas', 'limpieza de salas y colchones'], jev: 'Home cleaning: house, deep cleaning, upholstery, carpets, post-construction cleaning' },
  pest_control: { queries: ['fumigación'], jev: 'Pest control: fumigation, cockroaches, termites, rodents, scorpions' },
  glass: { queries: ['vidrios y aluminio'], jev: 'Glass and aluminum: broken windows, window frames, mirrors, shower screens' },
};

const CATEGORY_KEYS = Object.keys(CATEGORIES);

// Longest problem description the finder accepts (client + API).
const MAX_PROBLEM_LENGTH = 500;

module.exports = { CATEGORIES, CATEGORY_KEYS, MAX_PROBLEM_LENGTH };
