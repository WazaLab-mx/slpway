export interface JevHighlights {
  reliability: number | null;
  satisfaction: number | null;
  responsive: number | null;
  seriousComplaints: number | null;
}

export interface HomeServiceProvider {
  id: string;
  name: string;
  category: string;
  phone: string | null;
  website: string | null;
  socialUrl: string | null;
  mapsUrl: string | null;
  address: string | null;
  offersEmergency: boolean;
  googleRating: number | null;
  googleReviewCount: number;
  autoVerified: boolean;
  slwVerified: boolean;
  jev: JevHighlights;
  rankScore: number;
}

// Urgent problems put emergency-capable providers first; rank order otherwise.
export function selectProviders(providers: HomeServiceProvider[], category: string, urgent: boolean) {
  const inCategory = providers.filter(p => p.category === category);
  if (!urgent) return inCategory;
  return [...inCategory.filter(p => p.offersEmergency), ...inCategory.filter(p => !p.offersEmergency)];
}

