import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";
import { FadeIn } from "../components/common/FadeIn";
import { ArrowLink } from "../components/common/ArrowLink";
import { CTABand } from "../components/common/CTABand";
import { Photo } from "../components/common/Photo";
import { Icon } from "../components/icons/Icon";
import { serviceCategories } from "../data/services";
import { photos, type EditorialImage } from "../data/images";

const sectionImage: Record<string, EditorialImage> = {
  sport: photos.therapyNeck,
  praevention: photos.therapyShoulder,
  technologie: photos.postureBack,
};

/** Editorial numbered index of every service, grouped by category. */
export function Leistungen() {
  usePageMeta(
    "Leistungen | MOTIO Health Lab München",
    "Alle Leistungen im Überblick: Sportphysiotherapie, Return-to-Sport, 3D-Bewegungsanalyse, Osteopathie, Yoga und digitale Trainingsbegleitung in München.",
  );

  return (
    <>
      <PageHero
        label="Leistungen"
        title={
          <>
            Alles für deine Bewegung –{" "}
            <span className="text-petrol/40">unter einem Dach.</span>
          </>
        }
        intro="Siebzehn Leistungen, drei Bereiche, ein Prinzip: Erst messen, dann behandeln. Hier findest du den kompletten Überblick."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {serviceCategories.map((category, i) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-petrol/20 px-5 py-2.5 font-heading text-sm font-semibold text-petrol transition hover:border-petrol hover:bg-petrol hover:text-lime"
            >
              <span className="text-petrol/40">0{i + 1}</span>
              {category.shortTitle}
            </a>
          ))}
        </div>
      </PageHero>

      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 border-t border-petrol/10 ${
            categoryIndex % 2 === 1 ? "bg-white" : "bg-offwhite"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr]">
              {/* Sticky category intro */}
              <div>
                <div className="lg:sticky lg:top-28">
                  <FadeIn>
                    <p className="micro-label text-petrol/70">
                      0{categoryIndex + 1} — Bereich
                    </p>
                    <h2 className="mt-5 text-display-sm font-bold text-petrol">
                      {category.title}
                    </h2>
                    <p className="mt-6 max-w-md leading-relaxed text-anthracite/70">
                      {category.longIntro}
                    </p>
                    <div className="mt-8">
                      <ArrowLink to={`/leistungen/${category.id}`}>
                        Zur Detailseite
                      </ArrowLink>
                    </div>
                  </FadeIn>
                  <FadeIn delay={120}>
                    <div className="mt-10">
                      <Photo
                        image={sectionImage[category.id]}
                        ratio="aspect-[4/3]"
                        sizes="(max-width: 1024px) 100vw, 38vw"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* Numbered service index rows */}
              <div>
                {category.services.map((service, i) => (
                  <FadeIn key={service.id} delay={(i % 4) * 60}>
                    <Link
                      to={`/leistungen/${category.id}#${service.id}`}
                      className={`group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-b border-petrol/10 py-6 transition-all duration-300 hover:pl-3 md:gap-8 ${
                        i === 0 ? "border-t" : ""
                      }`}
                    >
                      <span className="font-heading text-sm font-semibold tabular-nums text-petrol/35 transition-colors group-hover:text-lime">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-petrol md:text-xl">
                          {service.name}
                        </h3>
                        <p className="mt-1.5 max-w-xl text-sm text-anthracite/65">
                          {service.description}
                        </p>
                      </div>
                      <span className="hidden h-9 w-9 shrink-0 items-center justify-center self-center rounded-full border border-petrol/15 text-petrol opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                        <Icon name="arrowRight" size={14} />
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABand />
    </>
  );
}
