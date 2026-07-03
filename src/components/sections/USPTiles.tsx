import { FadeIn } from "../common/FadeIn";

const usps = [
  {
    title: "Datenbasierte Diagnostik",
    description:
      "3D-Bewegungsanalyse und Leistungsdiagnostik aus dem Profisport zeigen uns genau, wo du stehst – bevor wir behandeln.",
  },
  {
    title: "Ganzheitlicher Ansatz",
    description:
      "Wir betrachten Körper, Beweglichkeit und Regeneration im Zusammenhang, statt nur einzelne Symptome zu behandeln.",
  },
  {
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
              <div className="rounded-2xl bg-white shadow-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full">
                <div className="w-10 h-10 rounded-full bg-lime mb-5" aria-hidden="true" />
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
