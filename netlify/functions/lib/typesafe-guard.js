// Jev (TypeSafe System One) editorial guard. Code owns the policy: Jev returns
// calibrated probabilities per source item and the thresholds below decide.
// Runs AFTER the regex filters in news-curation.js — it catches what keywords
// miss (paraphrased crime notes, official bulletins that never name an office).
const ENDPOINT = 'https://api.typesafe.ai/v1/systemone';
const RETRYABLE = new Set([429, 529]);

const THRESHOLDS = {
  crime: 0.7,
  disaster: 0.7,
  govPrNews: 0.7,
  govPrTrending: 0.5,
};

const GUARD_QUESTIONS = {
  crime: {
    type: 'noul',
    instructions: 'Is this local news item mainly about crime, violence, insecurity, arrests, or police/judicial cases?',
    criteria: {
      true: 'The core story is a crime, violent incident, insecurity, an arrest, or a criminal investigation',
      false: 'Crime is absent or only incidental to a cultural, community, business, or everyday-life story',
    },
  },
  disaster: {
    type: 'noul',
    instructions: 'Is this news item mainly about a disaster, accident, flooding, collapse, or emergency damage?',
  },
  govPr: {
    type: 'noul',
    instructions: 'Does this news item read as government publicity: promoting a governor, mayor, official, agency, or public-works achievement, or relaying an official bulletin?',
    criteria: {
      true: 'Centers officials or government achievements, announcements, programs, approval, or inaugurations',
      false: 'Centers citizens, culture, businesses, universities, or practical information where government is incidental',
    },
  },
  communityUtility: {
    type: 'score',
    instructions: 'How useful is this item for people living in San Luis Potosí in their everyday community life?',
    criteria: [
      'No practical value for residents: pure publicity, gossip, or distant news',
      'General interest: nice to know but nothing residents can act on',
      'Useful: a local event, service, or opportunity residents can attend or use',
      'Highly useful: a concrete change, service, or opportunity with clear ways to participate',
    ],
  },
};

// Retries overload responses (429/529) and timeouts with exponential backoff.
async function askSystemOne(apiKey, state, questions, attempts = 3) {
  for (let attempt = 1; ; attempt++) {
    let response;
    try {
      response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({ model: 'jev-latest', state, questions }),
      });
    } catch (err) {
      if (err.name !== 'TimeoutError' || attempt >= attempts) throw err;
      await new Promise(r => setTimeout(r, 500 * 2 ** (attempt - 1)));
      continue;
    }
    if (response.ok) return (await response.json()).answers;
    if (!RETRYABLE.has(response.status) || attempt >= attempts) {
      const body = await response.text().catch(() => '');
      throw new Error(`TypeSafe API ${response.status}: ${String(body).slice(0, 200)}`);
    }
    await new Promise(r => setTimeout(r, 500 * 2 ** (attempt - 1)));
  }
}

async function judgeItem(apiKey, { title, description, source }) {
  const answers = await askSystemOne(apiKey, { title, description, source }, GUARD_QUESTIONS);
  return {
    crime: answers.crime.noul,
    disaster: answers.disaster.noul,
    govPr: answers.govPr.noul,
    communityUtility: answers.communityUtility.score,
  };
}

// Judges each distinct item once (keyed by `keyOf`). A failed judgment
// leaves that key out, so the caller keeps the regex-only verdict for it.
async function judgeAll(apiKey, items, keyOf) {
  const unique = new Map();
  for (const item of items) if (!unique.has(keyOf(item))) unique.set(keyOf(item), item);
  const entries = [...unique.entries()];
  const results = await Promise.allSettled(entries.map(([, item]) => judgeItem(apiKey, item)));
  const verdicts = new Map();
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') verdicts.set(entries[i][0], result.value);
    else console.error(`Jev judgment failed for ${entries[i][0]}: ${result.reason && result.reason.message}`);
  });
  return verdicts;
}

function isUnsafe(v) {
  return v.crime >= THRESHOLDS.crime || v.disaster >= THRESHOLDS.disaster;
}

// Filters curated news/trending with Jev and puts the most community-useful
// news in the 3 community-card slots. Without a key it is a no-op.
async function applyJevGuard(apiKey, curated, feedItems) {
  if (!apiKey) {
    console.warn('TYPESAFE_API_KEY missing — skipping Jev guard (regex filters still applied).');
    return curated;
  }
  const byUrl = new Map(feedItems.map(f => [f.url, f]));
  const sourceOf = item => byUrl.get(item.url) || { title: item.title_es, description: item.summary_es, source: item.source };
  const verdicts = await judgeAll(apiKey, [...curated.news, ...curated.trending].map(sourceOf), f => f.url || f.title);
  const verdictOf = item => verdicts.get(item.url);

  let govNewsKept = 0;
  const news = curated.news.filter(item => {
    const v = verdictOf(item);
    if (!v) return true;
    if (isUnsafe(v)) {
      console.error(`Dropped by Jev (crime/disaster): ${item.title_es}`);
      return false;
    }
    // Editorial rule: at most one government-related item among published news.
    if (v.govPr >= THRESHOLDS.govPrNews && govNewsKept++ >= 1) {
      console.error(`Dropped by Jev (gov PR over quota): ${item.title_es}`);
      return false;
    }
    return true;
  });

  const trending = curated.trending.filter(item => {
    const v = verdictOf(item);
    if (v && (isUnsafe(v) || v.govPr >= THRESHOLDS.govPrTrending)) {
      console.error(`Dropped trending by Jev: ${item.title_es}`);
      return false;
    }
    return true;
  });

  return { news: promoteCommunityUseful(news, verdictOf), trending };
}

// Among the 8 published items, the 3 with the highest community utility go
// first (they become community cards); the rest keep the model's order.
function promoteCommunityUseful(news, verdictOf) {
  const published = news.slice(0, 8);
  const utility = item => (verdictOf(item) ? verdictOf(item).communityUtility : -1);
  const top = [...published].sort((a, b) => utility(b) - utility(a)).slice(0, 3);
  return [...top, ...published.filter(item => !top.includes(item)), ...news.slice(8)];
}

// Social topics: drop conversations that are really crime or government PR.
async function guardSocialTopics(apiKey, topics) {
  if (!apiKey || !topics.length) return topics;
  const verdicts = await judgeAll(apiKey, topics.map(t => ({
    url: t.url, title: t.title_es, description: t.summary_es, source: t.source,
  })), t => t.url);
  return topics.filter(t => {
    const v = verdicts.get(t.url);
    const keep = !v || (!isUnsafe(v) && v.govPr < THRESHOLDS.govPrTrending);
    if (!keep) console.error(`Dropped social topic by Jev: ${t.title_es}`);
    return keep;
  });
}

module.exports = { THRESHOLDS, askSystemOne, applyJevGuard, guardSocialTopics };
