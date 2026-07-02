import { BusinessPageData } from '@/types/business-page';
import {
  telLink, whatsappLink, mapsEmbedUrl, mapsDirectionsUrl,
} from './contact';
import {
  ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon,
} from './icons';

interface BusinessVisitProps {
  business: BusinessPageData;
}

export default function BusinessVisit({ business }: BusinessVisitProps) {
  const { name, hours, address, mapsQuery, phone, whatsapp } = business;

  return (
    <section id="visita" className="scroll-mt-16 bg-[#fdfbf7] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--biz-primary)]">
            Aquí lo esperamos
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[var(--biz-dark)] sm:text-5xl">
            Visítenos
          </h2>

          <div className="mt-10">
            <h3 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest text-neutral-500">
              <ClockIcon className="h-5 w-5 text-[var(--biz-primary)]" />
              Horario
            </h3>
            <dl className="mt-4 divide-y divide-neutral-200">
              {hours.map((entry) => (
                <div key={entry.days} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="font-medium text-neutral-800">{entry.days}</dt>
                  <dd className="tabular-nums text-neutral-600">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8">
            <h3 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest text-neutral-500">
              <MapPinIcon className="h-5 w-5 text-[var(--biz-primary)]" />
              Dirección
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-neutral-700">{address}</p>
          </div>

          <div className="mt-8">
            <h3 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest text-neutral-500">
              <PhoneIcon className="h-5 w-5 text-[var(--biz-primary)]" />
              Teléfono
            </h3>
            <a
              href={telLink(phone)}
              className="mt-3 inline-block text-lg font-medium text-[var(--biz-primary)] underline-offset-4 hover:underline"
            >
              {phone}
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row print:hidden">
            {whatsapp && (
              <a
                href={whatsappLink(phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--biz-primary)] px-7 py-3.5 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escríbanos por WhatsApp
              </a>
            )}
            <a
              href={mapsDirectionsUrl(mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[var(--biz-primary)] px-7 py-3.5 font-semibold text-[var(--biz-primary)] transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--biz-primary)_8%,transparent)]"
            >
              <MapPinIcon className="h-5 w-5" />
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl shadow-neutral-300/60 print:hidden">
          <iframe
            src={mapsEmbedUrl(mapsQuery)}
            title={`Mapa para llegar a ${name}`}
            className="aspect-[4/5] w-full border-0 sm:aspect-[4/3] lg:aspect-[4/5]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
