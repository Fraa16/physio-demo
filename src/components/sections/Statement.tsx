import { FadeIn } from "../common/FadeIn";
import { ArrowLink } from "../common/ArrowLink";
import { Photo } from "../common/Photo";
import { photos } from "../../data/images";

/** Editorial statement block: image + label left, oversized claim right. */
export function Statement() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:py-32 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
        <div>
          <FadeIn>
            <p className="micro-label text-petrol/70">Warum MOTIO</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="relative mt-8">
              <Photo
                image={photos.assessmentStanding}
                ratio="aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                objectPosition="object-top"
              />
              {/* data caption chip */}
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-petrol px-5 py-4 shadow-card-hover sm:block">
                <p className="font-heading text-2xl font-bold text-lime">3D</p>
                <p className="mt-0.5 text-[11px] font-heading font-semibold uppercase tracking-[0.16em] text-offwhite/70">
                  Bewegungsanalyse
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:pt-4">
          <FadeIn delay={100}>
            <p className="text-display-sm font-heading font-bold text-petrol">
              Präzisionsdiagnostik war lange dem Spitzensport vorbehalten. Wir
              bringen sie ins Werksviertel –{" "}
              <span className="bg-lime/80 box-decoration-clone px-2">
                für alle, die sich besser bewegen wollen.
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-8 max-w-xl text-lg text-anthracite/70">
              Statt Symptome zu raten, messen wir Bewegung: 3D-Analyse,
              Leistungsdiagnostik und ein Behandlungsplan, der Therapie,
              Training und Regeneration zusammen denkt.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10">
              <ArrowLink to="/ueber-uns">Unsere Geschichte</ArrowLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
