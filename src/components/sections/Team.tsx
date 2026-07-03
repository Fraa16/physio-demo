import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { AvatarPlaceholder } from "../common/AvatarPlaceholder";

const team = [
  {
    name: "Matteo Brandt",
    role: "Physiotherapeut, Sportwissenschaftler, Gründer",
    note: "Spezialist für Return-to-Sport-Programme und Athletiktraining.",
  },
  {
    name: "Sophia Lindner",
    role: "Physiotherapeutin, Osteopathin, Yogalehrerin, Gründerin",
    note: "Verbindet Osteopathie, Yoga und Faszientherapie zu einem ganzheitlichen Behandlungsansatz.",
  },
  {
    name: "Julia Ahrens",
    role: "Physiotherapeutin",
    note: "Schwerpunkt Rückenschmerzen und Haltung.",
  },
  {
    name: "Tom Winkler",
    role: "Physiotherapeut",
    note: "Schwerpunkt Sportrehabilitation.",
  },
  {
    name: "Elena Rossi",
    role: "Yoga- & Faszientrainerin",
    note: "Begleitet dich bei Beweglichkeit, Atmung und Regeneration.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Team"
            title="Die Menschen hinter MOTIO"
            subtitle="Hinter MOTIO Health Lab steht ein interdisziplinäres Team aus Physiotherapeut:innen, Sportwissenschaftler:innen, Osteopath:innen und Trainer:innen."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 75}>
              <div className="rounded-2xl bg-offwhite shadow-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full flex flex-col items-center">
                <AvatarPlaceholder name={member.name} />
                <p className="mt-4 font-heading font-bold">{member.name}</p>
                <p className="mt-1 text-sm text-anthracite/70">{member.role}</p>
                <p className="mt-3 text-sm text-anthracite/60">{member.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
