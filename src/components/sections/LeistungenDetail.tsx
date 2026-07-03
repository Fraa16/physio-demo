import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";
import { serviceCategories } from "../../data/services";

export function LeistungenDetail() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {serviceCategories.map((category) => (
          <div key={category.id} id={`leistungen-${category.id}`} className="scroll-mt-24">
            <FadeIn>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-petrol text-lime flex items-center justify-center">
                  <Icon name={category.icon} size={20} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold max-w-2xl">{category.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-anthracite/70 max-w-2xl">{category.intro}</p>
            </FadeIn>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.services.map((service, i) => (
                <FadeIn key={service.id} delay={(i % 4) * 75}>
                  <div className="group rounded-2xl bg-white shadow-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-lime/15 text-petrol flex items-center justify-center transition-colors group-hover:bg-lime">
                      <Icon name={service.icon} size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">{service.name}</h4>
                      <p className="mt-2 text-anthracite/75 text-sm">{service.description}</p>
                    </div>
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
