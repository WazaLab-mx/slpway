// Service categories. `query` feeds Google Places text search; `jev` is the
// plain-language meaning Jev uses both to vet providers and to route a
// visitor's problem description to a category.
const CATEGORIES = {
  plumbing: { query: 'plomero', jev: 'Plumbing: leaks, clogged drains or toilets, pipes, water heaters, water tanks and pumps' },
  electrical: { query: 'electricista', jev: 'Electrical: outlets, wiring, breakers, short circuits, lighting installation' },
  locksmith: { query: 'cerrajero', jev: 'Locksmith: locked out, lock changes, keys, safes' },
  hvac: { query: 'aire acondicionado instalación reparación', jev: 'Air conditioning and heating: install, repair or maintain AC units, minisplits, heaters' },
  appliance_repair: { query: 'reparación de lavadoras refrigeradores', jev: 'Appliance repair: washing machines, dryers, refrigerators, stoves, ovens' },
  carpentry: { query: 'carpintero', jev: 'Carpentry: doors, cabinets, closets, wooden furniture repair or custom work' },
  painting: { query: 'pintor de casas', jev: 'Painting: interior or exterior house painting, walls, facades' },
  masonry: { query: 'albañil', jev: 'Masonry and construction: walls, floors, tiles, small remodeling, concrete work' },
  waterproofing: { query: 'impermeabilización de techos', jev: 'Waterproofing: roof leaks and seepage, roof sealing, humidity in walls' },
  ironwork: { query: 'herrería', jev: 'Ironwork and welding: gates, window bars, railings, metal doors' },
  gardening: { query: 'jardinero', jev: 'Gardening: lawn, pruning, trees, garden maintenance, irrigation' },
  cleaning: { query: 'limpieza de casas', jev: 'Home cleaning: house, deep cleaning, upholstery, carpets, post-construction cleaning' },
  pest_control: { query: 'fumigación', jev: 'Pest control: fumigation, cockroaches, termites, rodents, scorpions' },
  glass: { query: 'vidrios y aluminio', jev: 'Glass and aluminum: broken windows, window frames, mirrors, shower screens' },
};

const CATEGORY_KEYS = Object.keys(CATEGORIES);

// Longest problem description the finder accepts (client + API).
const MAX_PROBLEM_LENGTH = 500;

module.exports = { CATEGORIES, CATEGORY_KEYS, MAX_PROBLEM_LENGTH };
