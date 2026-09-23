// Ranking policy, all in code. Jev supplies review judgments; Google supplies
// the aggregate rating; web search supplies verification. Weights sum to 1.
const WEIGHTS = {
  rating: 0.3,        // Bayesian-smoothed Google stars
  volume: 0.1,        // how many people rated it
  satisfaction: 0.15, // Jev: quality of work in review text
  reliability: 0.15,  // Jev: punctuality, keeps quotes
  noComplaints: 0.15, // Jev: absence of overcharging/damage/fraud
  responsive: 0.05,   // Jev: fast response
  verification: 0.1,  // automatic + manual badges
};

const PRIOR_MEAN = 4.0;
const PRIOR_WEIGHT = 10;
const MIN_SERVES_CATEGORY = 0.5;
const EMERGENCY_THRESHOLD = 0.6;
const NEUTRAL = 0.5; // used when there are no reviews to judge

// Pulls few-review providers toward the prior so 5.0 from 2 people doesn't beat 4.7 from 200.
function smoothedRating(rating, count) {
  if (rating == null || !count) return PRIOR_MEAN;
  return (PRIOR_MEAN * PRIOR_WEIGHT + rating * count) / (PRIOR_WEIGHT + count);
}

function isAutoVerified(candidate, presence) {
  return candidate.businessStatus === 'OPERATIONAL' && Boolean(candidate.phone)
    && (presence.phoneConfirmed || Boolean(candidate.website) || Boolean(presence.socialUrl));
}

function verificationScore(autoVerified, slwVerified) {
  return (autoVerified ? 0.5 : 0) + (slwVerified ? 0.5 : 0);
}

function rankScore({ rating, reviewCount, jev, autoVerified, slwVerified }) {
  const orNeutral = (v, scale = 1) => (v == null ? NEUTRAL : v / scale);
  const parts = {
    rating: (smoothedRating(rating, reviewCount) - 1) / 4,
    volume: Math.min(1, Math.log10((reviewCount || 0) + 1) / 2),
    satisfaction: orNeutral(jev.satisfaction, 3),
    reliability: orNeutral(jev.reliability, 3),
    noComplaints: jev.seriousComplaints == null ? NEUTRAL : 1 - jev.seriousComplaints,
    responsive: orNeutral(jev.responsive),
    verification: verificationScore(autoVerified, slwVerified),
  };
  const score = Object.entries(WEIGHTS).reduce((sum, [k, w]) => sum + w * parts[k], 0);
  return Math.round(score * 10000) / 10000;
}

// Listed only if still operating and Jev agrees it actually does this work.
function isListable(candidate, jev) {
  return candidate.businessStatus === 'OPERATIONAL' && jev.servesCategory >= MIN_SERVES_CATEGORY;
}

module.exports = {
  WEIGHTS, EMERGENCY_THRESHOLD, smoothedRating, isAutoVerified, rankScore, isListable,
};
