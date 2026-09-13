import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { whatsappUrl } from "@/lib/data";

const products = [
  ["Complete Seed Cycling Kit", "Phase 1 + Phase 2", "Your complete two-phase kit."],
  ["Seed Cycling - Phase 1", "Individual Phase 1 formula.", "A simple start to your routine."],
  ["Seed Cycling - Phase 2", "Individual Phase 2 formula.", "Continue your two-phase routine."],
];

export default function Plans() {
  return (
    <section id="products" className="relative scroll-mt-28 overflow-hidden bg-cream py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="Nourihaus"
          title="The House of Pure"
          highlight="Nutrition"
          copy="By DN Irum Javed. Thoughtfully designed nutrition products to bring a simple, supportive routine into your everyday wellness."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <div>
                <span className="inline-flex rounded-full bg-leaf-400 px-3 py-1 text-[11px] font-bold tracking-wider text-ink uppercase">Featured product</span>
                <h3 className="mt-6 text-3xl font-extrabold">Seed Cycling Formula</h3>
                <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-white/70">A two-phase seed cycling formula designed around a simple and convenient routine.</p>
              </div>
              <a href={whatsappUrl("Seed Cycling Formula")} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-leaf-300">Order Now <Icon.Arrow className="h-4 w-4" /></a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {products.map(([title, label, copy], i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-[1.75rem] border border-brand-100 bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon.Leaf className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-[13px] font-semibold text-brand-600">{label}</p>
                  <p className="mt-1 flex-1 text-[13px] leading-relaxed text-ink-soft">{copy}</p>
                  <a href={whatsappUrl(title)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-brand-600">Order Now <Icon.Arrow className="h-4 w-4" /></a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
