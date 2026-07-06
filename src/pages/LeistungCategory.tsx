import { Link, Navigate, useParams } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";
import { FadeIn } from "../components/common/FadeIn";
import { CTABand } from "../components/common/CTABand";
import { Icon } from "../components/icons/Icon";
import { serviceCategories } from "../data/services";

export function LeistungCategory() {
  const { categoryId } = useParams();
  const category = serviceCategories.find((c) => c.id === categoryId);
  const categoryIndex = serviceCategories.findIndex((c) => c.id === categoryId);

  usePageMeta(
    category
      ? `${category.title} | MOTIO Health Lab München`
      : "Leistungen | MOTIO Health Lab München",
    category?.longIntro,
  );

  if (!category) {
    return <Navigate to="/leistungen" replace />;
  }

  const otherCategories = serviceCategories.filter((c) => c.id !== category.id);

  return (
    <>
      <PageHero
        label={`Leistungen · Bereich 0${categoryIndex + 1}`}
        title={category.title}
        intro={category.longIntro}
      >
        <div className="mt-10">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-petrol px-7 py-3.5 font-heading font-semibold text-offwhite transition-all duration-200 hover:scale-[1.03] hover:bg-petrol-deep active:scale-[0.97]"
          >
            Termin anfragen
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {category.services.map((service, i) => (
              <FadeIn key={service.id} delay={(i % 2) * 90}>
                <article
                  id={service.id}
                  className="group relative h-full scroll-mt-28 overflow-hidden rounded-3xl border border-petrol/10 bg-offwhite p-8 transition-all duration-300 hover:-translate-y-1 hover:border-petrol/25 hover:shadow-card-hover md:p-10"
                >
                  <span
                    className="pointer-events-none absolute -right-3 -top-8 font-heading text-[8rem] font-bold leading-none text-petrol/[0.04] transition-colors duration-300 group-hover:text-lime/20"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-petrol text-lime">
                    <Icon name={service.icon} size={21} />
                  </div>
                  <h2 className="relative mt-8 font-heading text-xl font-bold text-petrol md:text-2xl">
                    {service.name}
                  </h2>
                  <p className="relative mt-3 leading-relaxed text-anthracite/70">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links to the other two categories */}
      <section className="border-t border-petrol/10 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FadeIn>
            <p className="micro-label text-petrol/70">Auch interessant</p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {otherCategories.map((other, i) => (
              <FadeIn key={other.id} delay={i * 100}>
                <Link
                  to={`/leistungen/${other.id}`}
                  className="group flex items-center justify-between gap-6 rounded-3xl border border-petrol/10 bg-white p-7 transition-all duration-300 hover:border-petrol hover:bg-petrol"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-petrol text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-petrol">
                      <Icon name={other.icon} size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-petrol transition-colors duration-300 group-hover:text-offwhite">
                        {other.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-anthracite/60 transition-colors duration-300 group-hover:text-offwhite/60">
                        {other.services.length} Leistungen
                      </p>
                    </div>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-petrol/15 text-petrol transition-all duration-300 group-hover:translate-x-1 group-hover:border-lime group-hover:text-lime">
                    <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
