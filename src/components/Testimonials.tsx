import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { calendlyUrl,GoogleUrl } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-brand-100 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1000+", "Clients served"],
              ["3+", "Years of professional experience"],
              ["2", "Consultant dietitians"],
              ["PKR 2,500", "Consultation fee"],
            ].map(([metric, label]) => (
              <div key={label} className="bg-white px-7 py-8 text-center">
                <p className="font-display bg-gradient-to-br from-brand-600 to-leaf-400 bg-clip-text text-4xl font-extrabold text-transparent">{metric}</p>
                <p className="mt-2 text-[13.5px] font-bold text-ink">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            align="left"
            eyebrow="Client Reviews"
            title="What our clients"
            highlight="say"
            copy="Real experiences from people who trusted The Nutrition Club Clinic with their nutrition and health journey."
          />

          <Reveal delay={120}>
            <div className="relative rounded-[2rem] border border-brand-100 bg-cream p-8 sm:p-10">
              <span className="absolute -top-6 left-8 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_20px_36px_-18px_rgba(46,155,75,1)]">
                <Icon.Quote className="h-6 w-6" />
              </span>
              <div className="mt-4 flex items-center gap-1 text-leaf-400">
                {Array.from({ length: 5 }).map((_, i) => <Icon.Star key={i} className="h-4 w-4" />)}
              </div>
              <p className="mt-5 text-[17px] leading-relaxed font-medium text-ink sm:text-lg">Every journey is different. Our client transformations reflect what personalized nutrition, consistency and the right guidance can achieve.</p>
              <a href={GoogleUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600">
                Read More Reviews on Google <Icon.Arrow className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
