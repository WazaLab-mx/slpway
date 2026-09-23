// Jev judgments for one provider, all in a single request (independent
// questions over the same state run in parallel). Review-based answers are
// discarded when there are no reviews to read.
const { askSystemOne } = require('../../../netlify/functions/lib/typesafe-guard');
const { CATEGORIES } = require('../../../src/lib/home-services-categories');

function buildQuestions(category) {
  return {
    servesCategory: {
      type: 'noul',
      instructions: {
        service: CATEGORIES[category].jev,
        question: 'Does this business offer `service` to households (it does the work, not just sell materials or parts)?',
      },
    },
    satisfaction: {
      type: 'score',
      instructions: 'Across `reviews`, how satisfied are customers with the work done?',
      criteria: [
        'Mostly dissatisfied: poor work or bad experiences dominate',
        'Mixed: similar amounts of praise and complaints',
        'Satisfied: mostly positive with minor complaints',
        'Very satisfied: consistently praised quality of work',
      ],
    },
    reliability: {
      type: 'score',
      instructions: 'Across `reviews`, how reliable is this provider: shows up on time, keeps quotes and finishes the job?',
      criteria: [
        'Unreliable: no-shows, delays or unfinished jobs are reported',
        'Unclear: reviews say little about punctuality or follow-through',
        'Reliable: reviewers note punctuality or keeping their word',
        'Very reliable: several reviewers stress punctuality, honesty and fair quotes',
      ],
    },
    seriousComplaints: {
      type: 'noul',
      instructions: 'Do any `reviews` report overcharging, property damage, fraud, theft, or abusive treatment?',
    },
    responsive: {
      type: 'noul',
      instructions: 'Do `reviews` say this provider responds or arrives quickly (same day or within hours)?',
    },
    emergency: {
      type: 'noul',
      instructions: 'Is there evidence in `name`, `hours` or `reviews` that this provider handles urgent or 24-hour emergency calls?',
    },
  };
}

async function evaluateProvider(apiKey, candidate, category) {
  const state = {
    name: candidate.name,
    types: candidate.types,
    hours: candidate.hours,
    reviews: candidate.reviews.filter(r => r.text).map(r => ({ stars: r.rating, text: r.text.slice(0, 1200), when: r.when })),
  };
  const a = await askSystemOne(apiKey, state, buildQuestions(category));
  const hasReviews = state.reviews.length > 0;
  return {
    servesCategory: a.servesCategory.noul,
    emergency: a.emergency.noul,
    satisfaction: hasReviews ? a.satisfaction.score : null,
    reliability: hasReviews ? a.reliability.score : null,
    seriousComplaints: hasReviews ? a.seriousComplaints.noul : null,
    responsive: hasReviews ? a.responsive.noul : null,
    reviewsRead: state.reviews.length,
  };
}

module.exports = { buildQuestions, evaluateProvider };
