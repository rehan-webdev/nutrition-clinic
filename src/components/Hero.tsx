import { calendlyUrl, heroStats, highlights, marqueeItems, team } from "@/lib/data";
import { Button, Icon, Reveal } from "@/lib/ui";

const HERO_IMG = "/images/download.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pb-20 pt-16 sm:pt-20 lg:min-h-[calc(100svh-7rem)] lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_90%_at_78%_12%,rgba(168,220,177,0.3),transparent_55%),radial-gradient(90%_70%_at_4%_92%,rgba(246,189,142,0.2),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-2 -left-10 z-0 w-48 text-[#e88b4a]/80 sm:w-60 lg:w-75">
        <svg viewBox="0 0 300 60" className="w-full" fill="none" aria-hidden="true">
          <path d="M1 32c9-24 21-26 30-8s21 20 30 2 22-22 31-6 21 22 31 8 22-20 31-10 21 26 32 18 21-20 31-18 21 18 32 22 22-12 32-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container-x relative z-10 grid items-center gap-y-16 lg:min-h-[calc(100svh-13rem)] lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        {/* copy */}
        <div className="relative max-w-xl lg:col-span-5 lg:pr-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              <span className="rounded-full bg-[#e88b4a] px-2.5 py-1 text-[10px] tracking-wider text-white uppercase">
                Start here
              </span>
              In-Clinic | Online | Worldwide
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-160 font-display text-[clamp(2.35rem,5vw,4.65rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink">
              Eat better, live stronger — with a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-500">dietitian</span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 h-4 w-full text-leaf-300"
                  viewBox="0 0 240 16"
                  preserveAspectRatio="none"
                >
                  <path d="M3 11c60-9 140-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              in your corner.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 max-w-lg text-[15.5px] leading-relaxed text-ink-soft sm:text-base">
              Personalised nutrition for better health, healthy weight and everyday wellbeing.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={calendlyUrl}>
                Start your journey
                <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#programs" variant="outline">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
                  <Icon.Play className="h-3 w-3" />
                </span>
                View programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-brand-200/70 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {team.map((t) => (
                    <img
                      key={t.name}
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-sm"
                    />
                  ))}
                  <span className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-white bg-brand-500 text-[11px] font-bold text-white">
                    1k+
                  </span>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-leaf-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon.Star key={i} className="h-3.5 w-3.5" />
                    ))}
                    <span className="ml-1 font-bold text-ink">Trusted by 1,000+ clients</span>
                  </div>
                  <p className="text-ink-soft">Care that fits real life</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={200} className="order-first lg:col-span-5 lg:order-0">
          <div className="relative mx-auto w-full max-w-105">
            <div className="animate-float-slow absolute -top-12 -right-14 z-0 h-44 w-44 rounded-[48%_52%_44%_56%/52%_44%_56%_48%] bg-leaf-300 sm:h-52 sm:w-52" />
            <div className="arch-frame group relative z-10 overflow-hidden rounded-b-[26px] rounded-t-[999px] bg-white shadow-[0_30px_60px_-40px_rgba(17,61,33,0.45)]">
              <div className="aspect-[355/452] w-full overflow-hidden">
                <img src={HERO_IMG} alt="Fresh salad, herbs and infused water on a kitchen counter" className="arch-img h-full w-full object-cover" />
              </div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/10 via-transparent to-white/10" />
            </div>
            <span className="animate-floaty absolute -bottom-10 -left-8 z-20 size-28 rounded-full border border-[#e88b4a] sm:-left-12 sm:size-36" aria-hidden="true" />
            <span className="animate-floaty absolute -bottom-6 -left-4 z-20 size-24 rounded-full bg-[#e88b4a]/75 sm:-left-7 sm:size-32" aria-hidden="true" style={{ animationDelay: "-3.5s" }} />
            <div className="absolute right-2 bottom-14 z-30 hidden items-center gap-2 rounded-full bg-white/90 py-2 pr-4 pl-2.5 shadow-[0_16px_36px_-22px_rgba(17,61,33,0.6)] backdrop-blur-sm lg:flex">
              <span className="grid size-7 place-items-center rounded-full bg-brand-50 text-brand-500"><Icon.Star className="size-3.5" /></span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-ink uppercase">Registered Dietitian</span>
            </div>
          </div>
        </Reveal>

        {/* stats */}
        <Reveal delay={360} className="lg:col-span-2 lg:pl-3">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:flex lg:flex-col lg:gap-y-11">
            {heroStats.map((stat) => (
              <div key={stat.label} className="transition-transform duration-500 hover:-translate-y-1">
                <p className="font-display text-[22px] font-bold tracking-[0.01em] text-ink tabular-nums">{stat.value}</p>
                <p className="mt-1.5 text-[9.5px] font-medium uppercase leading-[1.75] tracking-[0.22em] text-ink-soft/85">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* highlights */}
      <div className="container-x mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => {
          const Ico = Icon[h.icon];
          return (
            <Reveal key={h.title} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-brand-50 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-40px_rgba(46,155,75,0.9)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Ico className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{h.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* marquee */}
      <div className="mt-16 border-y border-brand-50 bg-cream py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-wide whitespace-nowrap text-ink-soft/70"
              >
                <Icon.Award className="h-4 w-4 text-leaf-400" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
