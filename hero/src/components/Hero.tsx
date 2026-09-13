import { useCountUp } from "@/hooks/useCountUp";
import { ArchPhoto, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";

const HEADLINE = ["We", "are", "your", "everyday", "nutrition", "partner"];

const STATS = [
  { value: 100, suffix: "%", label: ["Wholefood", "Recipes"] },
  { value: 420, suffix: "+", label: ["Meal plans", "Delivered"] },
  { value: 1200, suffix: "+", label: ["Clients", "Coached"] },
];

function Stat({ value, suffix, label, index }: (typeof STATS)[number] & { index: number }) {
  const { ref, value: current } = useCountUp(value, 1500 + index * 220);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group transition-transform duration-500 hover:-translate-y-1"
    >
      <p className="font-display text-[22px] font-bold tracking-[0.01em] text-ink tabular-nums">
        {current}
        {suffix}
      </p>
      <p className="mt-1.5 text-[9.5px] font-medium uppercase leading-[1.75] tracking-[0.22em] text-ink-soft/85">
        {label.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:min-h-svh lg:pb-24 lg:pt-28"
    >
      {/* ── ambient background ─────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 12%, rgba(168,220,177,0.30) 0%, rgba(242,247,236,0) 55%), radial-gradient(90% 70% at 4% 92%, rgba(246,189,142,0.20) 0%, rgba(242,247,236,0) 60%)",
        }}
      />

      {/* hand-drawn wave */}
      <div
        data-reveal=""
        className="pointer-events-none absolute -left-8 bottom-6 z-0 w-[190px] text-apricot/85 sm:bottom-10 sm:w-[240px] lg:-left-6 lg:bottom-14 lg:w-[300px]"
        style={{ ["--reveal-delay" as string]: "700ms" }}
      >
        <Squiggle className="h-auto w-full" />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-y-16 px-6 sm:px-8 lg:min-h-[calc(100svh-13rem)] lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0 lg:px-12">
        {/* ── copy ─────────────────────────────────── */}
        <div className="relative z-10 lg:col-span-5 lg:pr-10">
          <h1 className="font-display text-[clamp(2.05rem,5vw,3.55rem)] font-bold leading-[1.06] tracking-[-0.015em] text-ink">
            {HEADLINE.map((word, i) => (
              <span
                key={word}
                className="-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-bottom"
              >
                <span
                  data-reveal=""
                  className="inline-block"
                  style={{
                    ["--reveal-delay" as string]: `${120 + i * 90}ms`,
                    ["--reveal-y" as string]: "110%",
                  }}
                >
                  {word}
                  {i < HEADLINE.length - 1 ? "\u00A0" : ""}
                </span>
              </span>
            ))}
          </h1>

          <Reveal as="p" delay={620} y={22} className="mt-6 max-w-[22rem] text-[15px] leading-[1.7] text-ink-soft text-balance-pretty">
            Evidence-based dietetics, gentle habit coaching and meal plans built
            around your real life — so eating well stops feeling like a project
            and starts feeling like you.
          </Reveal>

          <Reveal delay={780} y={22} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-l-2xl rounded-r-full bg-brand px-9 py-4 text-[15px] font-semibold tracking-[0.01em] text-white shadow-[0_20px_38px_-20px_rgba(46,155,75,0.9)] transition-all duration-500 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_28px_46px_-20px_rgba(46,155,75,0.95)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
              />
              <span className="relative">Explore plans</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="relative size-4 transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path
                  d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-brand"
            >
              Free 15-min call
              <span className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
            </a>
          </Reveal>
        </div>

        {/* ── photo ────────────────────────────────── */}
        <div className="lg:col-span-5">
          <ArchPhoto />
        </div>

        {/* ── stats ────────────────────────────────── */}
        <div className="lg:col-span-2 lg:pl-3">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 lg:flex lg:flex-col lg:gap-y-11">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label.join()} delay={880 + i * 130} y={24}>
                <Stat {...stat} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
