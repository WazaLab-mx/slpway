import Image from 'next/image';
import { BusinessPageData } from '@/types/business-page';
import { whatsappLink, telLink } from './contact';
import { WhatsAppIcon, PhoneIcon } from './icons';

interface BusinessHeroProps {
  business: BusinessPageData;
}

export default function BusinessHero({ business }: BusinessHeroProps) {
  const { name, tagline, hero, phone, whatsapp } = business;

  return (
    <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden">
      <Image
        src={hero.image}
        alt={`${name} — ${tagline}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-24 pt-32 text-center text-white">
        {hero.badge && (
          <p className="mb-6 inline-block rounded-full border border-white/30 bg-black/30 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
            {hero.badge}
          </p>
        )}

        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white drop-shadow-md sm:text-7xl md:text-8xl">
          {name}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90 sm:text-2xl">
          {tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {whatsapp ? (
            <a
              href={whatsappLink(phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--biz-primary)] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/30 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
          ) : (
            <a
              href={telLink(phone)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--biz-primary)] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/30 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              Llamar ahora
            </a>
          )}

          <a
            href="#menu"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  );
}
