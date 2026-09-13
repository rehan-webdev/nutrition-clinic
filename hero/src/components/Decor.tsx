import heroImage from "@/assets/hero-nutrition.jpg";

/** Soft pebble / blob used as the colour pop behind the arch photo. */
export function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M168.4 34.8c19.7 22.3 26.4 56.8 16.4 84.9-10 28.1-36.7 49.7-66.1 55.3-29.4 5.6-61.5-4.8-79.9-26.6C20.4 126.6 15.7 94.4 25.6 68.1 35.5 41.8 61 21.4 89.3 14.9c28.3-6.5 59.4-2.4 79.1 19.9Z"
      />
    </svg>
  );
}

/** Loose hand-drawn wave that anchors the bottom-left of the hero. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 60"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        className="squiggle-path"
        pathLength={1}
        d="M1 32c9-24 21-26 30-8s21 20 30 2 22-22 31-6 21 22 31 8 22-20 31-10 21 26 32 18 21-20 31-18 21 18 32 22 22-12 32-20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** The arched hero photograph with its warm layered shapes. */
export function ArchPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[400px]">
      {/* colour pop behind the frame */}
      <Blob className="animate-floaty-slow absolute -right-14 -top-12 z-0 w-[150px] text-leaf sm:-right-20 sm:-top-14 sm:w-[190px] lg:-right-16 lg:-top-16 lg:w-[200px]" />

      {/* arch frame */}
      <div
        className="arch-frame group relative z-10 overflow-hidden rounded-b-[26px] rounded-t-[999px] bg-white shadow-[0_30px_60px_-40px_rgba(17,61,33,0.45)]"
        data-reveal=""
        style={{ ["--reveal-delay" as string]: "260ms", ["--reveal-scale" as string]: 0.96 }}
      >
        <div className="aspect-[355/452] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="A bright kitchen counter with a bowl of fresh salad, herbs and infused water"
            className="arch-img h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        {/* gentle wash so the photo sits with the palette */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/10 via-transparent to-white/10" />
      </div>

      {/* citrus circle + outline ring, bottom-left of the frame */}
      <span
        className="animate-floaty absolute -bottom-10 -left-8 z-20 size-28 rounded-full border border-apricot sm:-left-12 sm:size-36 lg:-left-14 lg:size-40"
        aria-hidden="true"
      />
      <span
        className="animate-floaty absolute -bottom-6 -left-4 z-20 size-24 rounded-full bg-apricot/75 sm:-left-7 sm:size-32 lg:-left-9 lg:size-[8.5rem]"
        aria-hidden="true"
        style={{ animationDelay: "-3.5s" }}
      />

      {/* credential chip */}
      <div
        className="absolute -right-2 bottom-14 z-30 hidden items-center gap-2 rounded-full bg-white/90 py-2 pl-2.5 pr-4 shadow-[0_16px_36px_-22px_rgba(17,61,33,0.6)] backdrop-blur-sm lg:flex"
        data-reveal=""
        style={{ ["--reveal-delay" as string]: "900ms" }}
      >
        <span className="grid size-7 place-items-center rounded-full bg-brand/12 text-brand">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" aria-hidden="true">
            <path
              d="M12 3l2.1 4.5 4.9.6-3.6 3.4.9 4.9L12 14.1 7.7 16.4l.9-4.9L5 8.1l4.9-.6L12 3Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
          Registered Dietitian
        </span>
      </div>
    </div>
  );
}
