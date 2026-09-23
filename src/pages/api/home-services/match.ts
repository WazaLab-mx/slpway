import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { logger } from '@/lib/logger';
import { rateLimit } from '@/lib/rate-limit';
import { matchProblem } from '@/lib/home-services-match';
import { MAX_PROBLEM_LENGTH } from '@/lib/home-services-categories';

const bodySchema = z.object({
  problem: z.string().trim().min(3).max(MAX_PROBLEM_LENGTH),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (rateLimit(req, res, { limit: 10, windowSec: 60, prefix: 'home-services-match' })) return;

  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid problem description' });

  const apiKey = process.env.TYPESAFE_API_KEY;
  if (!apiKey) {
    logger.error('TYPESAFE_API_KEY missing — home services matcher unavailable');
    return res.status(503).json({ error: 'Matcher unavailable' });
  }

  try {
    return res.status(200).json(await matchProblem(apiKey, parsed.data.problem));
  } catch (error) {
    logger.error('Home services match failed:', error);
    return res.status(502).json({ error: 'Matcher failed' });
  }
}
