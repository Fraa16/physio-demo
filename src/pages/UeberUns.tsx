import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";
import { FadeIn } from "../components/common/FadeIn";
import { ArrowLink } from "../components/common/ArrowLink";
import { CTABand } from "../components/common/CTABand";
import { Portrait } from "../components/common/Portrait";
import { Photo } from "../components/common/Photo";
import { Icon } from "../components/icons/Icon";
import { founderBios } from "../data/team";
import { photos } from "../data/images";

const values = [
  {
    title: "Präzision statt Bauchgefühl",
    description:
      "Jede Behandlung beginnt mit messbaren Daten – aus Bewegungsanalyse, Leistungsdiagnostik oder Haltungsbefund. Behandelt wird, was belegbar ist.",
  },
  {
    title: "Ganzheitlichkeit",
    description:
      "Körper, Beweglichkeit und mentale Regeneration gehören zusammen. Deshalb arbeiten Physiotherapie, Osteopathie und Training bei uns Hand in Hand.",
  },
  {
    title: "Zugänglichkeit",
    description:
      "High-End-Diagnostik soll kein Privileg für Profis sein. Wir machen die Standards des Leistungssports für alle zugänglich, die sich bewegen wollen.",
  },
];

export function UeberUns() {
  usePageMeta(
    "Über uns | MOTIO Health Lab München",
    "Die Geschichte hinter MOTIO Health Lab: 2021 in München gegründet, um Präzisionsdiagnostik aus dem Leistungssport für alle zugänglich zu machen.",
  );

  return (
    <>
      <PageHero
        label="Über uns"
        title={
          <>
            Sportphysiotherapie für alle –{" "}
            <span className="text-petrol/40">nicht nur für Profis.</span>
          </>
        }
        intro="MOTIO ist aus einer einfachen Beobachtung entstanden: Die beste Diagnostik gab es bisher nur im Spitzensport. Das wollten wir ändern."
      />

      {/* Story: sticky label + editorial text */}
      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:py-28 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <div className="lg:sticky lg:top-28">
              <FadeIn>
                <p className="micro-label text-petrol/70">Die Geschichte</p>
              </FadeIn>
              <FadeIn delay={120}>
                <div className="mt-8">
                  <Photo
                    image={photos.handsCare}
                    ratio="aspect-[4/5]"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="max-w-2xl space-y-8 text-lg leading-relaxed text-anthracite/80 md:text-xl">
            <FadeIn>
              <p>
                Matteo und Sophia haben sich im Leistungssport kennengelernt –
                dort, wo Bewegungsanalyse, Leistungsdiagnostik und individuelle
                Trainingssteuerung längst Standard sind. Was ihnen dabei
                auffiel: Diese Präzision blieb meist Spitzensportler:innen
                vorbehalten.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                Menschen mit Rückenschmerzen, nach Verletzungen oder mit dem
                Wunsch, sich einfach wieder freier zu bewegen, hatten selten
                Zugang zu vergleichbar fundierter Diagnostik.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                <span className="bg-lime/70 box-decoration-clone px-1.5 font-heading font-semibold text-petrol">
                  2021 haben sie deshalb MOTIO Health Lab gegründet
                </span>{" "}
                – mit dem Ziel, sportphysiotherapeutische Standards für alle
                zugänglich zu machen und mit einem ganzheitlichen Blick auf
                Regeneration zu verbinden. Heute arbeitet im Werksviertel-Mitte
                ein Team aus Physiotherapeut:innen, Sportwissenschaftler:innen
                und Osteopath:innen zusammen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values as numbered editorial rows */}
      <section className="border-t border-petrol/10 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <FadeIn>
            <p className="micro-label text-petrol/70">Wofür wir stehen</p>
            <h2 className="mt-5 text-display-sm font-bold text-petrol">Drei Prinzipien</h2>
          </FadeIn>
          <div className="mt-12">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 90}>
                <div
                  className={`group grid grid-cols-1 gap-4 border-b border-petrol/10 py-9 transition-all duration-300 hover:pl-3 md:grid-cols-[auto_0.42fr_0.58fr] md:items-baseline md:gap-10 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <span className="font-heading text-sm font-semibold text-petrol/35 transition-colors group-hover:text-lime">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-petrol md:text-3xl">
                    {value.title}
                  </h3>
                  <p className="max-w-xl leading-relaxed text-anthracite/70">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <FadeIn>
            <p className="micro-label text-petrol/70">Gründung</p>
            <h2 className="mt-5 text-display-sm font-bold text-petrol">
              Die zwei hinter dem Lab
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {founderBios.map((founder, i) => (
              <FadeIn key={founder.name} delay={i * 120}>
                <div className="grid h-full grid-cols-[110px_1fr] items-start gap-6 rounded-3xl border border-petrol/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:grid-cols-[150px_1fr] md:p-9">
                  <Portrait name={founder.name} />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-petrol md:text-2xl">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-petrol/60">{founder.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-anthracite/70 md:text-base">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-10">
              <ArrowLink to="/team">Das ganze Team kennenlernen</ArrowLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location */}
      <section className="relative overflow-hidden border-t border-petrol/10 bg-petrol text-offwhite">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="micro-label text-lime">Standort</p>
              <h2 className="mt-5 max-w-2xl text-display-sm font-bold text-offwhite">
                Mitten im Werksviertel
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-offwhite/70">
                Unser Lab liegt im kreativen Werksviertel-Mitte – zwischen
                Ateliers, Start-ups und Konzerthallen. Drei Gehminuten vom
                Ostbahnhof, mit eigenen Fahrradstellplätzen und Tiefgarage im
                Gebäude.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="mt-10 flex flex-col gap-4 text-sm text-offwhite/60">
                <div className="flex items-center gap-3">
                  <Icon name="mapPin" size={18} className="text-lime" />
                  Atelierstraße 10, 81671 München
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="route" size={18} className="text-lime" />
                  S-Bahn S1–S8 · Ostbahnhof
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="clock" size={18} className="text-lime" />
                  Mo–Fr 07–20 Uhr · Sa 09–14 Uhr
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <div className="relative">
              <Photo
                image={photos.clinicRoom}
                ratio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 48vw"
                rounded="rounded-[2rem]"
              />
              <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-lime/70" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-lime/70" aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Einblicke gallery */}
      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <FadeIn>
            <p className="micro-label text-petrol/70">Einblicke</p>
            <h2 className="mt-5 max-w-2xl text-display-sm font-bold text-petrol">
              Ein Tag im Lab
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[photos.therapyFoot, photos.mobilityHamstring, photos.therapyKnee].map((img, i) => (
              <FadeIn key={img.lg} delay={i * 100}>
                <Photo
                  image={img}
                  ratio="aspect-[4/5]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={i === 1 ? "sm:mt-12" : ""}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
