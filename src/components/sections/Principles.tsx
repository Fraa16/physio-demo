import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";

const principles = [
  {
    icon: "scan" as const,
    title: "Datenbasierte Diagnostik",
    description:
      "3D-Bewegungsanalyse und Leistungsdiagnostik aus dem Profisport zeigen uns genau, wo du stehst – bevor wir behandeln.",
  },
  {
    icon: "layers" as const,
    title: "Ganzheitlicher Ansatz",
    description:
      "Wir betrachten Körper, Beweglichkeit und Regeneration im Zusammenhang, statt nur einzelne Symptome zu behandeln.",
  },
  {
    icon: "smartphone" as const,
    title: "Digitale Begleitung",
    description:
      "Mit app-basierten Trainingsplänen und Fortschritts-Tracking bleiben wir auch nach der Behandlung an deiner Seite.",
  },
];

/** Flat, numbered three-column principle row. */
export function Principles() {
  return (
    <section className="border-t border-petrol/10 bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
        {principles.map((principle, i) => (
          <FadeIn key={principle.title} delay={i * 100} className="h-full">
            <div
              className={`group h-full px-6 py-12 md:px-10 md:py-16 ${
                i > 0 ? "border-t border-petrol/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-petrol text-lime transition-transform duration-300 group-hover:scale-110">
                  <Icon name={principle.icon} size={19} />
                </div>
                <span className="font-heading text-sm font-semibold text-petrol/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold text-petrol">
                {principle.title}
              </h3>
              <p className="mt-3 leading-relaxed text-anthracite/70">
                {principle.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
