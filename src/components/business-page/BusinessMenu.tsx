import { MenuCategory } from '@/types/business-page';
import { formatPrice } from './contact';

interface BusinessMenuProps {
  menu: MenuCategory[];
}

export default function BusinessMenu({ menu }: BusinessMenuProps) {
  return (
    <section id="menu" className="scroll-mt-16 bg-[#fdfbf7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--biz-primary)]">
            Hecho al momento
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[var(--biz-dark)] sm:text-5xl">
            Nuestro menú
          </h2>
          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full bg-[var(--biz-accent)]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="flex items-center gap-4 font-display text-2xl font-semibold text-[var(--biz-dark)] sm:text-3xl">
                {section.category}
                <span
                  className="h-px flex-1 bg-[color-mix(in_srgb,var(--biz-accent)_45%,transparent)]"
                  aria-hidden="true"
                />
              </h3>

              <ul className="mt-7 space-y-6">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium text-neutral-900">
                        {item.name}
                      </span>
                      <span
                        className="mx-1 min-w-[1.5rem] flex-1 -translate-y-1 border-b border-dotted border-neutral-400/70"
                        aria-hidden="true"
                      />
                      <span className="font-semibold tabular-nums text-[var(--biz-primary)]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="mt-1 pr-14 text-sm leading-relaxed text-neutral-500">
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-neutral-400">
          Precios en pesos mexicanos. Pueden cambiar sin previo aviso.
        </p>
      </div>
    </section>
  );
}
