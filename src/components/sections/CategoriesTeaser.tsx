import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";
import { Photo } from "../common/Photo";
import { serviceCategories } from "../../data/services";
import { photos, type EditorialImage } from "../../data/images";

const categoryImage: Record<string, EditorialImage> = {
  sport: photos.athleticSwing,
  praevention: photos.mobilityOverhead,
  technologie: photos.resistanceBand,
};

/** Three category panels: photo on top, invert-on-hover body. */
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
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-petrol/10 bg-white transition-all duration-500 hover:border-petrol hover:shadow-card-hover"
              >
                <div className="relative overflow-hidden">
                  <Photo
                    image={categoryImage[category.id]}
                    ratio="aspect-[16/11]"
                    rounded="rounded-none"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-petrol/85 px-3 py-1 font-heading text-xs font-semibold text-lime backdrop-blur-sm">
                    0{i + 1}
                  </span>
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-petrol">
                    <Icon name={category.icon} size={20} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-display-xs font-bold text-petrol">{category.title}</h3>
                  <p className="mt-3 flex-1 text-anthracite/70">{category.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-petrol">
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
