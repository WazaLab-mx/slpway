// Google Places API (New) text search. Returns hard data plus up to 5 review
// texts; the texts only feed Jev and are never stored.
const ENDPOINT = 'https://places.googleapis.com/v1/places:searchText';
const FIELDS = [
  'id', 'displayName', 'formattedAddress', 'nationalPhoneNumber', 'websiteUri',
  'googleMapsUri', 'businessStatus', 'rating', 'userRatingCount', 'types',
  'regularOpeningHours.weekdayDescriptions', 'reviews.rating', 'reviews.text',
  'reviews.relativePublishTimeDescription',
].map(f => `places.${f}`).concat('nextPageToken').join(',');

// City of San Luis Potosí plus the Soledad metro area.
const SLP_BIAS = {
  rectangle: {
    low: { latitude: 22.05, longitude: -101.08 },
    high: { latitude: 22.25, longitude: -100.85 },
  },
};
const IN_METRO = /San Luis Potos[ií]|Soledad de Graciano S[aá]nchez/i;

async function searchPage(apiKey, textQuery, pageToken) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    signal: AbortSignal.timeout(30000),
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': FIELDS },
    body: JSON.stringify({ textQuery, languageCode: 'es', regionCode: 'MX', locationRestriction: SLP_BIAS, pageSize: 20, pageToken }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Places API ${response.status}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

function toCandidate(place) {
  return {
    googlePlaceId: place.id,
    name: place.displayName?.text || '',
    address: place.formattedAddress || '',
    phone: place.nationalPhoneNumber || null,
    website: place.websiteUri || null,
    mapsUrl: place.googleMapsUri || null,
    businessStatus: place.businessStatus || null,
    rating: typeof place.rating === 'number' ? place.rating : null,
    reviewCount: place.userRatingCount || 0,
    types: place.types || [],
    hours: place.regularOpeningHours?.weekdayDescriptions || [],
    reviews: (place.reviews || []).map(r => ({
      rating: r.rating, text: r.text?.text || '', when: r.relativePublishTimeDescription || '',
    })),
  };
}

// Up to `maxPages` pages (20 results each) for one category query.
async function searchCategory(apiKey, query, maxPages = 2) {
  const candidates = [];
  let pageToken;
  for (let page = 0; page < maxPages; page++) {
    const data = await searchPage(apiKey, `${query} en San Luis Potosí`, pageToken);
    candidates.push(...(data.places || []).map(toCandidate));
    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }
  return candidates.filter(c => c.name && IN_METRO.test(c.address));
}

module.exports = { searchCategory, toCandidate };
