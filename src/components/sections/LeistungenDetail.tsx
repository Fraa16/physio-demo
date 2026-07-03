import { FadeIn } from "../common/FadeIn";
import { serviceCategories } from "../../data/services";

export function LeistungenDetail() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {serviceCategories.map((category) => (
          <div key={category.id} id={`leistungen-${category.id}`} className="scroll-mt-24">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold max-w-2xl">{category.title}</h3>
              <p className="mt-3 text-anthracite/70 max-w-2xl">{category.intro}</p>
            </FadeIn>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.services.map((service, i) => (
                <FadeIn key={service.id} delay={(i % 4) * 75}>
                  <div className="rounded-2xl bg-white shadow-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full">
                    <h4 className="font-heading font-semibold text-lg">{service.name}</h4>
                    <p className="mt-2 text-anthracite/75 text-sm">{service.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
