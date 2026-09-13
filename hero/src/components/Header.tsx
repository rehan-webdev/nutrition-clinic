import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Recipes", href: "#recipes" },
  { label: "Contact", href: "#contact" },
];

export function LeafMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-9 place-items-center rounded-full border border-ink/45 text-ink transition-colors duration-500 group-hover:border-brand group-hover:text-brand",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M20 4c0 8.284-4.477 13-10.5 13H5.5C5.5 9.716 11.5 4 20 4Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M20 4c0 8.284-4.477 13-10.5 13H5.5C5.5 9.716 11.5 4 20 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4 20c2.2-4.4 5.4-7.6 9.5-9.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream/90 py-3 shadow-[0_1px_0_rgba(18,58,34,0.08)] backdrop-blur-md"
          : "bg-transparent py-5 lg:py-7",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
        {/* ── Logo ─────────────────────────────────── */}
        <Reveal as="a" href="#home" className="group flex items-center gap-2.5" y={-14} delay={80}>
          <LeafMark />
          <span className="font-display text-[19px] leading-none tracking-tight text-ink sm:text-[21px]">
            <span className="font-bold">nutri</span>
            <span className="font-semibold italic text-brand">bloom</span>
          </span>
        </Reveal>

        {/* ── Desktop nav ──────────────────────────── */}
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex xl:gap-12">
          {NAV.map((item, i) => (
            <Reveal key={item.label} y={-14} delay={140 + i * 70}>
              <a
                href={item.href}
                data-active={i === 0}
                className={cn(
                  "nav-link text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-300",
                  i === 0 ? "font-bold text-ink" : "text-ink/70 hover:text-brand",
                )}
              >
                {item.label}
              </a>
            </Reveal>
          ))}
        </nav>

        {/* ── CTA + burger ─────────────────────────── */}
        <div className="flex items-center gap-3">
          <Reveal y={-14} delay={520}>
            <a
              href="#contact"
              className="hidden rounded-full border border-brand/55 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-700 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0_10px_24px_-10px_rgba(46,155,75,0.75)] sm:inline-block"
            >
              Book now
            </a>
          </Reveal>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 block h-[1.5px] w-4 bg-current transition-all duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────── */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-6 pb-6 pt-4 sm:px-8"
        >
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-ink/8 py-3 text-[12px] uppercase tracking-[0.28em] transition-colors",
                i === 0 ? "font-bold text-ink" : "text-ink/65 hover:text-brand",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex justify-center rounded-full border border-brand/55 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-700 transition-colors hover:bg-brand hover:text-white"
          >
            Book a consult
          </a>
        </nav>
      </div>
    </header>
  );
}
