import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";
import { FadeIn } from "../components/common/FadeIn";
import { CTABand } from "../components/common/CTABand";
import { Portrait } from "../components/common/Portrait";
import { team } from "../data/team";

export function TeamPage() {
  usePageMeta(
    "Team | MOTIO Health Lab München",
    "Das interdisziplinäre Team von MOTIO Health Lab: Physiotherapeut:innen, Sportwissenschaftler:innen, Osteopath:innen und Trainer:innen in München.",
  );

  return (
    <>
      <PageHero
        label="Team"
        title={
          <>
            Die Menschen{" "}
            <span className="text-petrol/40">hinter MOTIO.</span>
          </>
        }
        intro="Physiotherapie, Sportwissenschaft, Osteopathie und Training – fünf Menschen, vier Disziplinen, ein gemeinsamer Blick auf deine Bewegung."
      />

      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={(i % 3) * 90}>
                <article className="group h-full">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                      <Portrait name={member.name} />
                    </div>
                    {member.founder && (
                      <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-petrol">
                        Gründung
                      </span>
                    )}
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-petrol">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-petrol/55">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite/70">
                    {member.note}
                  </p>
                </article>
              </FadeIn>
            ))}

            {/* Recruiting slot */}
            <FadeIn delay={180}>
              <a
                href="mailto:hallo@motio-healthlab.de?subject=Initiativbewerbung"
                className="group flex h-full min-h-[320px] flex-col justify-between rounded-2xl border-2 border-dashed border-petrol/20 p-8 transition-colors duration-300 hover:border-petrol hover:bg-offwhite"
              >
                <span className="font-heading text-5xl font-bold text-petrol/15 transition-colors group-hover:text-lime">
                  +
                </span>
                <div>
                  <h2 className="font-heading text-xl font-bold text-petrol">
                    Dein Platz?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-anthracite/65">
                    Wir wachsen und suchen Menschen, die Bewegung genauso ernst
                    nehmen wie wir. Schreib uns eine Initiativbewerbung.
                  </p>
                  <span className="mt-4 inline-block font-heading text-sm font-semibold text-petrol underline decoration-lime decoration-2 underline-offset-4">
                    hallo@motio-healthlab.de
                  </span>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
