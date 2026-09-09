const labels: Record<string, string> = {
  en: 'Official website and details', es: 'Sitio oficial y detalles',
  de: 'Offizielle Website und Details', ja: '公式サイト・詳細',
};

export default function EventOfficialLink({ website, locale }: { website?: string | null; locale: string }) {
  if (!website) return null;
  try {
    if (!['https:', 'http:'].includes(new URL(website).protocol)) return null;
  } catch {
    return null;
  }
  return (
    <a href={website} target="_blank" rel="noopener noreferrer"
      className="inline-flex mt-4 items-center rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      {labels[locale] || labels.en}<span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}
