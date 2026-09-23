// Server-side only (getStaticProps): keeps supabase-js out of the widget bundle.
import { createClient } from '@supabase/supabase-js';
import type { HomeServiceProvider } from './home-services-providers';

type Row = Record<string, any>;

export function toProvider(row: Row): HomeServiceProvider {
  const jev = row.jev_scores || {};
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    phone: row.phone ?? null,
    website: row.website ?? null,
    socialUrl: row.social_url ?? null,
    mapsUrl: row.maps_url ?? null,
    address: row.address ?? null,
    offersEmergency: Boolean(row.offers_emergency),
    googleRating: row.google_rating == null ? null : Number(row.google_rating),
    googleReviewCount: row.google_review_count || 0,
    autoVerified: Boolean(row.auto_verified),
    slwVerified: Boolean(row.slw_verified_at),
    jev: {
      reliability: jev.reliability ?? null,
      satisfaction: jev.satisfaction ?? null,
      responsive: jev.responsive ?? null,
      seriousComplaints: jev.seriousComplaints ?? null,
    },
    rankScore: Number(row.rank_score) || 0,
  };
}

export async function fetchActiveProviders(): Promise<HomeServiceProvider[]> {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from('home_service_providers')
    .select('*')
    .eq('active', true)
    .order('rank_score', { ascending: false });
  if (error) {
    console.error('Error fetching home service providers:', error.message);
    return [];
  }
  return (data || []).map(toProvider);
}
