import { calendlyUrl, team } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-28 bg-white py-24">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-8 lg:flex-row">
          <SectionHead
            align="left"
            eyebrow="Meet The Team"
            title="Meet our"
            highlight="dietitians"
            copy="Personalized nutrition care from consultant dietitians who understand that every health journey is different."
            className="max-w-xl"
          />
          <Reveal>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-500 hover:text-brand-600"
            >
              Book with a dietitian
              <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-cream p-4 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-45px_rgba(11,31,20,0.8)]">
                <div className="relative overflow-hidden rounded-[1.35rem]">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80" />

                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-600">
                    {m.creds}
                  </span>

                  <div className="absolute right-3 bottom-3 left-3 flex translate-y-3 items-center justify-between gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full bg-brand-500 px-4 py-2.5 text-center text-[12.5px] font-bold text-white"
                    >
                      Book with {m.name.split(" ")[1]}
                    </a>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-600">
                      <Icon.Chat className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="px-2 pt-4 pb-2">
                  <h3 className="text-[17px] font-bold text-ink">{m.name}</h3>
                  <p className="text-[13px] font-semibold text-brand-600">{m.role}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-soft"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
