import { FadeIn } from "../common/FadeIn";
import { ArrowLink } from "../common/ArrowLink";

/** Editorial statement block: sticky label left, oversized claim right. */
export function Statement() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:py-32 lg:grid-cols-[0.3fr_0.7fr]">
        <div>
          <FadeIn>
            <p className="micro-label sticky top-28 text-petrol/70">Warum MOTIO</p>
          </FadeIn>
        </div>
        <div>
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
