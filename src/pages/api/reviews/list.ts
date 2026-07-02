import { NextApiRequest, NextApiResponse } from 'next';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { placeId } = req.query;

  if (!placeId || typeof placeId !== 'string') {
    return res.status(400).json({ error: 'Missing required query param: placeId' });
  }

  try {
    const supabase = createPagesServerClient({ req, res });

    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('place_id', placeId)
      .order('created_at', { ascending: false });

    if (error) {
      // 42P01 = relation does not exist: the reviews table hasn't been
      // created in this environment yet — treat as "no reviews" instead of
      // erroring on every place page.
      if ((error as { code?: string }).code === '42P01') {
        return res.status(200).json([]);
      }
      return res.status(500).json({ error: 'Failed to fetch reviews' });
    }

    return res.status(200).json(data || []);
  } catch (error) {
    // Unexpected error in review list
    return res.status(500).json({ error: 'Internal server error' });
  }
}
