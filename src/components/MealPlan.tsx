import { Icon, Reveal, SectionHead } from "@/lib/ui";

const guideFiles: Record<string, string> = {
  "IBS Guide": "/guides/ibs-guide.pdf",
  "Fatty Liver Guide": "/guides/fatty-liver-guide.pdf",
  "Diabetes & Blood Sugar Guide": "/guides/diabetes-blood-sugar-guide.pdf",
  "PCOS Guide": "/guides/pcos-guide.pdf",
  "Weight Loss Guide": "/guides/weight-loss-guide.pdf",
  "Healthy Weight Gain Guide": "/guides/healthy-weight-gain-guide.pdf",
};

const guides = [
  { title: "IBS Guide", copy: "Understand common triggers and practical ways to support digestive comfort.", icon: "Stomach" as const },
  { title: "Fatty Liver Guide", copy: "Learn the everyday nutrition habits that can support liver and metabolic health.", icon: "Heart" as const },
  { title: "Diabetes & Blood Sugar Guide", copy: "Simple, useful information for more confident blood sugar choices.", icon: "Activity" as const },
  { title: "PCOS Guide", copy: "A practical introduction to nutrition and lifestyle support for PCOS.", icon: "Leaf" as const },
  { title: "Weight Loss Guide", copy: "Build healthier weight management habits without crash diets or unnecessary restriction.", icon: "Scale" as const },
  { title: "Healthy Weight Gain Guide", copy: "Explore balanced, nourishing strategies for sustainable weight gain.", icon: "Apple" as const },
];

export default function MealPlan() {
  return (
    <section id="guides" className="relative scroll-mt-28 overflow-hidden bg-white py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="Free Nutrition Guides"
          title="Learn. Understand. Make"
          highlight="better choices."
          copy="Practical guides for common health and nutrition concerns."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, i) => {
            const GuideIcon = Icon[guide.icon];
            return (
              <Reveal key={guide.title} delay={i * 70}>
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-brand-100 bg-cream p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:bg-white hover:shadow-[0_32px_65px_-45px_rgba(46,155,75,1)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm transition group-hover:bg-brand-500 group-hover:text-white">
                    <GuideIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{guide.title}</h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{guide.copy}</p>
                  <a href={guideFiles[guide.title]} download className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-brand-600">
                    Get Your Free Guide <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-ink-soft/70">For general education only.</p>
      </div>
    </section>
  );
}
