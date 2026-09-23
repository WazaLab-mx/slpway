// Routes a visitor's free-text home problem to a service category with Jev.
// Jev only returns typed probabilities, so untrusted input can't inject text
// into the page; code decides what counts as confident.
import { askSystemOne } from '../../netlify/functions/lib/typesafe-guard';
import { CATEGORIES } from './home-services-categories';

const CONFIDENT = 0.5;
const ALTERNATIVE_MIN = 0.15;
const URGENT_SCORE = 1.5;

export interface MatchResult {
  category: string | null;
  alternatives: string[];
  urgent: boolean;
}

type Answers = {
  category: { choice: string; probabilities: Record<string, number>; confidence: number };
  urgency: { score: number };
};

export function buildMatchQuestions() {
  const criteria: Record<string, string> = {};
  for (const [key, { jev }] of Object.entries(CATEGORIES)) criteria[key] = jev;
  criteria.none = 'Not a home repair or home service problem, or too vague to tell';
  return {
    category: {
      type: 'choice',
      instructions: 'Which kind of home-service professional should fix the problem described in `problem`?',
      criteria,
    },
    urgency: {
      type: 'score',
      instructions: 'How urgent is the problem described in `problem`?',
      criteria: [
        'Can wait: cosmetic or planned work',
        'Should be fixed within days: inconvenient but not causing damage',
        'Needs help today: active damage, safety risk, no water/power, or locked out',
      ],
    },
  };
}

// Pure: turns Jev's answers into what the widget needs.
export function interpretMatch(answers: Answers): MatchResult {
  const { choice, probabilities, confidence } = answers.category;
  const ranked = Object.entries(probabilities)
    .filter(([key, p]) => key !== 'none' && p >= ALTERNATIVE_MIN)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);
  const confident = choice !== 'none' && confidence >= CONFIDENT;
  return {
    category: confident ? choice : null,
    alternatives: confident ? ranked.filter(k => k !== choice).slice(0, 2) : ranked.slice(0, 3),
    urgent: answers.urgency.score >= URGENT_SCORE,
  };
}

export async function matchProblem(apiKey: string, problem: string): Promise<MatchResult> {
  const answers = await askSystemOne(apiKey, { problem }, buildMatchQuestions());
  return interpretMatch(answers as Answers);
}
