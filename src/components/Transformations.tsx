import { calendlyUrl } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";

const transformations = [
  "transform1.jpeg",
  "transform2.jpeg",
  "transform3.jpeg",
  "transform4.jpeg",
  "transform5.jpeg",
  "transform6.jpeg",
];

export default function Transformations() {
  return (
    <section id="transformations" className="scroll-mt-28 bg-cream py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="Client Transformations"
          title="Real progress,"
          highlight="real lives"
          copy="Personalized nutrition support can create meaningful, sustainable change. Explore results from clients who committed to their journey."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map((image, index) => (
            <Reveal key={image} delay={index * 70}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white p-2 shadow-[0_20px_50px_-38px_rgba(11,31,20,0.7)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_65px_-42px_rgba(46,155,75,0.8)]">
                <div className="overflow-hidden rounded-[1.35rem] bg-brand-50">
                  <img
                    src={`/transformations/${image}`}
                    alt={`Client transformation ${index + 1}`}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-4xl bg-ink px-7 py-7 text-center text-white sm:flex-row sm:px-10 sm:text-left">
            <div>
              <h3 className="text-xl font-bold">Ready to start your own journey?</h3>
              <p className="mt-1 text-sm text-white/70">Get guidance built around your goals, routine and health.</p>
            </div>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-leaf-300"
            >
              Book a consultation
              <Icon.Arrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}