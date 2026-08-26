import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/lib/api/supabase-admin';
import { apiSuccess, apiError, setCacheHeaders, methodNotAllowed } from '@/lib/api/v1/response';
import { eventsQuerySchema, parseQuery } from '@/lib/api/v1/validate';
import { EVENT_LOCALE_COLUMNS, localizeEvents } from '@/lib/localizeEvent';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return methodNotAllowed(res);

  const parsed = parseQuery(eventsQuerySchema, req.query);
  if (!parsed.success) {
    return res.status(400).json(apiError('INVALID_PARAMS', parsed.error));
  }

  const { limit, category, from, to } = parsed.data;
  // Optional ?lang=es|de|ja localizes title/description; defaults to English.
  const lang = (req.query.lang as string) || 'en';

  try {
    let query = supabaseAdmin
      .from('events')
      .select(`id, title, description, start_date, end_date, location, category, image_url, featured, ${EVENT_LOCALE_COLUMNS}`)
      .gte('end_date', new Date().toISOString())
      .order('start_date', { ascending: true })
      .limit(limit);

    if (category) query = query.eq('category', category);
    if (from) query = query.gte('start_date', from);
    if (to) query = query.lte('start_date', to);

    const { data, error } = await query;

    if (error) {
      return res.status(500).json(apiError('DB_ERROR', 'Failed to fetch events'));
    }

    // localizeEvents resolves one title/description for `lang` and drops the
    // per-locale columns — public payload keeps its previous shape.
    const events = localizeEvents(data || [], lang).map(({ base_title, ...rest }) => {
      void base_title;
      return rest;
    });

    setCacheHeaders(res);
    return res.status(200).json(apiSuccess(events, { total: events.length, limit }));
  } catch {
    return res.status(500).json(apiError('INTERNAL_ERROR', 'Internal server error'));
  }
}
