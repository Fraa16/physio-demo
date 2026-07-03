import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";

const usps = [
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

export function USPTiles() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 md:-mt-32 relative z-10">
          {usps.map((usp, i) => (
            <FadeIn key={usp.title} delay={i * 100}>
              <div className="group rounded-2xl bg-white shadow-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full">
                <div className="w-12 h-12 rounded-xl bg-petrol text-lime flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={usp.icon} size={22} />
                </div>
                <h3 className="text-xl font-bold">{usp.title}</h3>
                <p className="mt-3 text-anthracite/75">{usp.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
