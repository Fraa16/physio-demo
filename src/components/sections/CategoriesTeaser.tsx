import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";
import { serviceCategories } from "../../data/services";

/** Three category panels with a full color-invert on hover. */
export function CategoriesTeaser() {
  return (
    <section className="border-t border-petrol/10 bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <div>
              <p className="micro-label text-petrol/70">Leistungen</p>
              <h2 className="mt-5 max-w-xl text-display-sm font-bold text-petrol">
                Drei Bereiche, ein Anspruch
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <Link
              to="/leistungen"
              className="group mb-2 inline-flex items-center gap-2 font-heading font-semibold text-petrol"
            >
              Alle Leistungen
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-petrol/25 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-petrol group-hover:text-lime">
                <Icon name="arrowRight" size={15} />
              </span>
            </Link>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceCategories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 100}>
              <Link
                to={`/leistungen/${category.id}`}
                className="group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-petrol/10 bg-white p-8 transition-all duration-500 hover:border-petrol hover:bg-petrol"
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-sm font-semibold text-petrol/40 transition-colors duration-500 group-hover:text-lime/70">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol text-lime transition-all duration-500 group-hover:bg-lime group-hover:text-petrol">
                    <Icon name={category.icon} size={22} />
                  </div>
                </div>

                <div>
                  <h3 className="text-display-xs font-bold text-petrol transition-colors duration-500 group-hover:text-offwhite">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-anthracite/70 transition-colors duration-500 group-hover:text-offwhite/70">
                    {category.intro}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-petrol transition-colors duration-500 group-hover:text-lime">
                    {category.services.length} Leistungen entdecken
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
