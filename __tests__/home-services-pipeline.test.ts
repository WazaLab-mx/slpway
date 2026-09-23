const { smoothedRating, isAutoVerified, rankScore, isListable } = require('../scripts/home-services/lib/ranking');
const { assessPresence, digits } = require('../scripts/home-services/lib/web-presence');
const { toCandidate } = require('../scripts/home-services/lib/places');
const { evaluateProvider, buildQuestions } = require('../scripts/home-services/lib/jev-evaluate');

const jevNeutral = { servesCategory: 0.9, satisfaction: null, reliability: null, seriousComplaints: null, responsive: null };
const jevStrong = { servesCategory: 0.95, satisfaction: 3, reliability: 3, seriousComplaints: 0.02, responsive: 0.9 };

describe('ranking', () => {
  it('smooths few-review ratings toward the prior', () => {
    expect(smoothedRating(5, 2)).toBeLessThan(smoothedRating(4.7, 200));
    expect(smoothedRating(null, 0)).toBe(4);
  });

  it('rewards strong reviews, volume and verification', () => {
    const weak = rankScore({ rating: 5, reviewCount: 2, jev: jevNeutral, autoVerified: false, slwVerified: false });
    const strong = rankScore({ rating: 4.7, reviewCount: 200, jev: jevStrong, autoVerified: true, slwVerified: false });
    const manual = rankScore({ rating: 4.7, reviewCount: 200, jev: jevStrong, autoVerified: true, slwVerified: true });
    expect(strong).toBeGreaterThan(weak);
    expect(manual).toBeGreaterThan(strong);
    expect(manual).toBeLessThanOrEqual(1);
  });

  it('penalizes serious complaints found by Jev', () => {
    const base = { rating: 4.5, reviewCount: 50, autoVerified: true, slwVerified: false };
    const clean = rankScore({ ...base, jev: jevStrong });
    const complaints = rankScore({ ...base, jev: { ...jevStrong, seriousComplaints: 0.95 } });
    expect(complaints).toBeLessThan(clean);
  });

  it('auto-verifies only operating businesses with a phone and a second source', () => {
    const c = { businessStatus: 'OPERATIONAL', phone: '444 123 4567', website: null };
    expect(isAutoVerified(c, { phoneConfirmed: true, socialUrl: null })).toBe(true);
    expect(isAutoVerified(c, { phoneConfirmed: false, socialUrl: null })).toBe(false);
    expect(isAutoVerified({ ...c, businessStatus: 'CLOSED_PERMANENTLY' }, { phoneConfirmed: true })).toBe(false);
  });

  it('lists only operating providers that Jev says do the work', () => {
    expect(isListable({ businessStatus: 'OPERATIONAL' }, { servesCategory: 0.8 })).toBe(true);
    expect(isListable({ businessStatus: 'OPERATIONAL' }, { servesCategory: 0.2 })).toBe(false);
    expect(isListable({ businessStatus: 'CLOSED_TEMPORARILY' }, { servesCategory: 0.9 })).toBe(false);
  });
});

describe('web presence', () => {
  const candidate = { name: 'Plomería Hernández', phone: '444 123 4567' };

  it('confirms the phone on an independent source and finds social profiles', () => {
    const result = assessPresence(candidate, [
      { url: 'https://www.google.com/maps/place/x', title: 'Plomeria Hernandez', content: '4441234567' },
      { url: 'https://www.facebook.com/plomeriahernandez', title: 'Plomería Hernández SLP', content: 'Llámanos 444-123-4567' },
    ]);
    expect(result.phoneConfirmed).toBe(true);
    expect(result.socialUrl).toBe('https://www.facebook.com/plomeriahernandez');
    expect(result.sources).toEqual(['https://www.facebook.com/plomeriahernandez']);
  });

  it('ignores unrelated pages and Google-only matches', () => {
    const result = assessPresence(candidate, [
      { url: 'https://www.google.com/maps/place/x', title: 'Plomeria Hernandez', content: '4441234567' },
      { url: 'https://otro.mx', title: 'Ferretería Centro', content: '4441234567' },
    ]);
    expect(result).toEqual({ sources: [], phoneConfirmed: false, socialUrl: null });
  });

  it('normalizes phones to 10 digits', () => {
    expect(digits('+52 444 123 4567')).toBe('4441234567');
  });
});

describe('places mapping', () => {
  it('maps a Places (New) result into a candidate', () => {
    const c = toCandidate({
      id: 'ChIJ1', displayName: { text: 'Cerrajería 24h' }, formattedAddress: 'Centro, San Luis Potosí, S.L.P.',
      nationalPhoneNumber: '444 000 0000', businessStatus: 'OPERATIONAL', rating: 4.6, userRatingCount: 88,
      regularOpeningHours: { weekdayDescriptions: ['lunes: Abierto 24 horas'] },
      reviews: [{ rating: 5, text: { text: 'Llegó en 20 minutos' }, relativePublishTimeDescription: 'hace un mes' }],
    });
    expect(c).toMatchObject({ googlePlaceId: 'ChIJ1', name: 'Cerrajería 24h', rating: 4.6, reviewCount: 88, website: null });
    expect(c.reviews[0]).toEqual({ rating: 5, text: 'Llegó en 20 minutos', when: 'hace un mes' });
  });
});

describe('jev evaluation', () => {
  afterEach(() => (global.fetch as jest.Mock)?.mockRestore?.());

  const answers = {
    servesCategory: { type: 'noul', noul: 0.93 },
    emergency: { type: 'noul', noul: 0.81 },
    satisfaction: { type: 'score', score: 2.7 },
    reliability: { type: 'score', score: 2.4 },
    seriousComplaints: { type: 'noul', noul: 0.04 },
    responsive: { type: 'noul', noul: 0.88 },
  };
  const candidate = { name: 'Cerrajería 24h', types: [], hours: [], reviews: [{ rating: 5, text: 'Rápido y honesto', when: '' }] };

  it('sends the category meaning and reviews in one request', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ answers }) }) as any;
    const result = await evaluateProvider('ts-key', candidate, 'locksmith');
    const body = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
    expect(Object.keys(body.questions)).toEqual(Object.keys(buildQuestions('locksmith')));
    expect(body.questions.servesCategory.instructions.service).toMatch(/Locksmith/);
    expect(body.state.reviews).toEqual([{ stars: 5, text: 'Rápido y honesto', when: '' }]);
    expect(result).toMatchObject({ servesCategory: 0.93, emergency: 0.81, reliability: 2.4, reviewsRead: 1 });
  });

  it('discards review-based answers when there are no reviews', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ answers }) }) as any;
    const result = await evaluateProvider('ts-key', { ...candidate, reviews: [] }, 'locksmith');
    expect(result).toMatchObject({ satisfaction: null, reliability: null, seriousComplaints: null, responsive: null, reviewsRead: 0 });
  });
});
