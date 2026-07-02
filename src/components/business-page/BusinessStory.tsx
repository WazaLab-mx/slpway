import Image from 'next/image';
import { BusinessPageData } from '@/types/business-page';

interface BusinessStoryProps {
  business: BusinessPageData;
}

export default function BusinessStory({ business }: BusinessStoryProps) {
  const { name, description, gallery, established } = business;
  const storyImage = business.storyImage ?? gallery[0];

  return (
    <section
      id="historia"
      className="scroll-mt-16 bg-[color-mix(in_srgb,var(--biz-accent)_10%,#fdfbf7)] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--biz-primary)]">
            Nuestra historia
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[var(--biz-dark)] sm:text-5xl">
            El sazón de {name}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-700">
            {description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {established && (
            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-display text-6xl font-semibold text-[var(--biz-primary)]">
                {established}
              </span>
              <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                Sirviendo al barrio desde entonces
              </span>
            </div>
          )}
        </div>

        {storyImage && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[var(--biz-accent)]"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-[var(--biz-dark)]/20">
              <Image
                src={storyImage}
                alt={`La cocina de ${name}`}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
