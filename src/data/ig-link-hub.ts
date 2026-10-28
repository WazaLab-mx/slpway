// Links shown on /ig, the Instagram bio page. Order = display order; keep the
// guides currently promoted in posts at the top and drop events once they pass.
export interface LinkHubItem {
  id: string;
  href: string;
  icon: string;
}

export const LINK_HUB_ITEMS: LinkHubItem[] = [
  { id: 'sevenBarrios', href: '/seven-barrios-san-luis-potosi', icon: '⛪' },
  { id: 'realPotosi', href: '/events/carrera-real-del-potosi-2026', icon: '🌙' },
  { id: 'halfMarathon', href: '/events/medio-maraton-capital-del-deporte-2026', icon: '🏃' },
  { id: 'xantolo', href: '/events/xantolo-2026', icon: '🕯️' },
  { id: 'potosiHistory', href: '/blog/san-luis-potosi-mining-history-baroque-architecture-cultural-legacy', icon: '⛏️' },
  { id: 'thisWeek', href: '/events/this-week', icon: '📅' },
  { id: 'freeEvents', href: '/free-events-san-luis-potosi', icon: '🆓' },
  { id: 'homeServices', href: '/san-luis-potosi-home-services', icon: '🔧' },
  { id: 'costOfLiving', href: '/resources/cost-of-living-san-luis-potosi', icon: '💸' },
  { id: 'neighborhoods', href: '/resources/neighborhoods-san-luis-potosi', icon: '🏘️' },
  { id: 'factchecks', href: '/blog/factchecks', icon: '🔍' },
  { id: 'newsletter', href: '/subscribe', icon: '✉️' },
];
