import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { Icon } from "../icons/Icon";
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
                className="group block rounded-2xl bg-white shadow-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full relative overflow-hidden"
              >
                <div
                  className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-lime/10 transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />
                <div className="relative w-12 h-12 rounded-xl bg-petrol text-lime flex items-center justify-center mb-5">
                  <Icon name={category.icon} size={22} />
                </div>
                <h3 className="relative text-xl font-bold">{category.title}</h3>
                <p className="relative mt-3 text-anthracite/75">{category.intro}</p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-petrol font-semibold text-sm">
                  Mehr erfahren
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
