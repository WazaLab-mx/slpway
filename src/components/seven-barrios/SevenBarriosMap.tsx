import { useTranslation } from 'next-i18next';
import { BARRIOS, CATEDRAL, createProjection, type LabelSide, type Point } from '@/lib/seven-barrios';

const SIZE = 400;
const YELLOW = '#FFCB05';
const NAVY = '#011A42';
const PAPER = '#F6F3EC';

const project = createProjection(SIZE);
const center = project(CATEDRAL);
const stops = BARRIOS.map((b) => ({ ...b, point: project(b) }));
const loop = [center, ...stops.map((s) => s.point), center].map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

// 1 km in SVG units: project a point 1 km (1/111.32 degrees of latitude) north of the Catedral.
const kmLength = center.y - project({ lat: CATEDRAL.lat + 1 / 111.32, lon: CATEDRAL.lon }).y;

function labelProps({ x, y }: Point, side: LabelSide) {
  const offset = 15;
  if (side === 'left') return { x: x - offset, y: y + 4, textAnchor: 'end' as const };
  if (side === 'right') return { x: x + offset, y: y + 4, textAnchor: 'start' as const };
  if (side === 'top') return { x, y: y - offset, textAnchor: 'middle' as const };
  return { x, y: y + offset + 10, textAnchor: 'middle' as const };
}

export default function SevenBarriosMap() {
  const { t } = useTranslation('seven-barrios');

  return (
    <figure className="mx-auto w-full max-w-xl">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-labelledby="barrios-map-title"
        aria-describedby="barrios-map-desc"
        className="h-auto w-full rounded-3xl shadow-lg ring-1 ring-[#011A42]/10"
      >
        <title id="barrios-map-title">{t('map.svgTitle')}</title>
        <desc id="barrios-map-desc">{t('map.svgDesc')}</desc>
        <rect width={SIZE} height={SIZE} fill={PAPER} />
        <circle cx={center.x} cy={center.y} r={kmLength} fill="none" stroke={NAVY} strokeOpacity={0.12} />
        <circle cx={center.x} cy={center.y} r={kmLength * 2} fill="none" stroke={NAVY} strokeOpacity={0.08} />
        <polyline points={loop} fill="none" stroke={NAVY} strokeWidth={2.5} strokeDasharray="7 6" strokeLinejoin="round" strokeOpacity={0.7} />

        <g aria-label={t('map.center')}>
          <rect x={center.x - 9} y={center.y - 9} width={18} height={18} rx={3} fill={NAVY} transform={`rotate(45 ${center.x} ${center.y})`} />
          <text x={center.x - 16} y={center.y + 4} textAnchor="end" fontSize={12} fontWeight={700} fill={NAVY}>
            {t('map.center')}
          </text>
        </g>

        {stops.map((stop, index) => {
          const label = t('map.markerLabel', { number: index + 1, name: stop.name });
          return (
            <g key={stop.id} role="group" aria-label={label}>
              <circle cx={stop.point.x} cy={stop.point.y} r={11} fill={YELLOW} stroke={NAVY} strokeWidth={2.5} />
              <text x={stop.point.x} y={stop.point.y + 4} textAnchor="middle" fontSize={12} fontWeight={800} fill={NAVY} aria-hidden="true">
                {index + 1}
              </text>
              <text {...labelProps(stop.point, stop.labelSide)} fontSize={12} fontWeight={700} fill={NAVY} aria-hidden="true">
                {stop.name}
              </text>
            </g>
          );
        })}

        <g transform="translate(360 44)" aria-hidden="true">
          <circle r={20} fill="white" stroke={NAVY} strokeOpacity={0.2} />
          <path d="M0 -15 L6 3 L0 -1 L-6 3 Z" fill={NAVY} />
          <path d="M0 15 L6 -3 L0 1 L-6 -3 Z" fill={NAVY} fillOpacity={0.25} />
          <text y={-24} textAnchor="middle" fontSize={12} fontWeight={800} fill={NAVY}>{t('map.north')}</text>
        </g>

        <g transform={`translate(24 ${SIZE - 24})`} aria-hidden="true">
          <line x1={0} x2={kmLength} y1={0} y2={0} stroke={NAVY} strokeWidth={3} />
          <line x1={0} x2={0} y1={-5} y2={5} stroke={NAVY} strokeWidth={2} />
          <line x1={kmLength} x2={kmLength} y1={-5} y2={5} stroke={NAVY} strokeWidth={2} />
          <text x={kmLength / 2} y={-8} textAnchor="middle" fontSize={11} fill={NAVY}>{t('map.scale')}</text>
        </g>
      </svg>
      <figcaption className="mt-3 flex items-center justify-center gap-2 text-sm text-[#011A42]/80">
        <svg width="28" height="6" aria-hidden="true"><line x1="0" y1="3" x2="28" y2="3" stroke={NAVY} strokeWidth="2.5" strokeDasharray="7 6" /></svg>
        {t('map.legendRoute')}
      </figcaption>
    </figure>
  );
}
