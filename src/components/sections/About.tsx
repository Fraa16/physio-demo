import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { AvatarPlaceholder } from "../common/AvatarPlaceholder";

const founders = [
  {
    name: "Matteo Brandt",
    role: "Gründer & Leitung Sportphysiotherapie",
    bio: "Matteo Brandt ist Gründer und leitet den Bereich Sportphysiotherapie bei MOTIO. Der Physiotherapeut (B.Sc.) und Sportwissenschaftler (M.Sc.) hat mehrere Jahre im Nachwuchsleistungszentrum eines Bundesliga-Vereins gearbeitet, ist zertifizierter Athletiktrainer und hat sich auf Return-to-Sport-Programme spezialisiert.",
  },
  {
    name: "Sophia Lindner",
    role: "Gründerin & Leitung Prävention & Wellness",
    bio: "Sophia Lindner ist Gründerin und leitet den Bereich Prävention & Wellness. Als Physiotherapeutin, Heilpraktikerin für Osteopathie und Yogalehrerin (500h RYT) mit Zusatzausbildung in Faszientherapie bringt sie einen ganzheitlichen Blick auf Bewegungsgesundheit und Regeneration in jede Behandlung ein.",
  },
];

export function About() {
  return (
    <section id="ueber-uns" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Über uns"
            title="Sportphysiotherapie für alle – nicht nur für Profis"
          />
        </FadeIn>

        <div className="mt-8 max-w-3xl mx-auto space-y-5 text-anthracite/85 text-lg">
          <FadeIn delay={100}>
            <p>
              Matteo und Sophia haben sich im Leistungssport kennengelernt –
              dort, wo Bewegungsanalyse, Leistungsdiagnostik und individuelle
              Trainingssteuerung längst Standard sind. Was ihnen dabei
              auffiel: Diese Präzision blieb meist Spitzensportler:innen
              vorbehalten. Menschen mit Rückenschmerzen, nach Verletzungen
              oder mit dem Wunsch, sich einfach wieder freier zu bewegen,
              hatten selten Zugang zu vergleichbar fundierter Diagnostik.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p>
              2021 haben sie deshalb MOTIO Health Lab gegründet – mit dem
              Ziel, sportphysiotherapeutische Standards für alle zugänglich
              zu machen und mit einem ganzheitlichen Blick auf Regeneration
              zu verbinden. Heute arbeitet im Werksviertel-Mitte ein Team aus
              Physiotherapeut:innen, Sportwissenschaftler:innen und
              Osteopath:innen zusammen – mit einem gemeinsamen Anspruch:
              Präzision statt Bauchgefühl, Ganzheitlichkeit statt
              Symptombehandlung, und Zugänglichkeit für alle, die sich
              bewegen wollen.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <FadeIn key={founder.name} delay={i * 100}>
              <div className="rounded-2xl bg-offwhite shadow-card p-8 h-full">
                <div className="flex items-center gap-4">
                  <AvatarPlaceholder name={founder.name} />
                  <div>
                    <p className="font-heading font-bold text-lg">{founder.name}</p>
                    <p className="text-sm text-anthracite/70">{founder.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-anthracite/80">{founder.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
