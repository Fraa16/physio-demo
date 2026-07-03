import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { serviceCategories } from "../../data/services";

export function LeistungenOverview() {
  return (
    <section id="leistungen" className="bg-offwhite scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Leistungen"
            title="Was wir für deine Bewegung tun"
            subtitle="Von der Verletzungsreha im Leistungssport bis zur Beweglichkeit im Alltag – drei Bereiche, ein gemeinsamer Anspruch."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 100}>
              <a
                href={`#leistungen-${category.id}`}
                className="block rounded-2xl bg-white shadow-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-3 text-anthracite/75">{category.intro}</p>
                <span className="mt-6 inline-block text-petrol font-semibold text-sm">
                  Mehr erfahren →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
