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


// Default view before a visitor picks a category: the best provider of each
// category, highest-ranked first, so the widget shows variety at a glance.
export function featuredProviders(providers: HomeServiceProvider[], limit = 6) {
  const best = new Map<string, HomeServiceProvider>();
  for (const p of providers) {
    const current = best.get(p.category);
    if (!current || p.rankScore > current.rankScore) best.set(p.category, p);
  }
  return Array.from(best.values()).sort((a, b) => b.rankScore - a.rankScore).slice(0, limit);
}
