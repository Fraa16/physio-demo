import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";

const steps = [
  {
    icon: "scan" as const,
    title: "Anamnese & Diagnostik",
    description:
      "Wir hören zu, erfassen deine Bewegungsgeschichte und ergänzen sie bei Bedarf mit 3D-Bewegungsanalyse oder Leistungsdiagnostik.",
  },
  {
    icon: "layers" as const,
    title: "Individueller Plan",
    description:
      "Aus Daten und Befund entsteht ein Plan, der Therapie, Training und Regeneration zusammen denkt.",
  },
  {
    icon: "activity" as const,
    title: "Therapie & Training",
    description:
      "Manuelle Therapie, Athletiktraining oder Yoga – je nachdem, was dich gerade weiterbringt.",
  },
  {
    icon: "smartphone" as const,
    title: "Digitale Nachsorge",
    description:
      "Trainingspläne und Fortschritt behältst du auch zuhause über die App im Blick.",
  },
];

export function Process() {
  return (
    <section className="border-t border-petrol/10 bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <FadeIn>
          <p className="micro-label text-petrol/70">Ablauf</p>
          <h2 className="mt-5 max-w-2xl text-display-sm font-bold text-petrol">
            So läuft deine erste Behandlung ab
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-petrol/10 bg-petrol/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 90} className="h-full">
              <div className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-offwhite">
                <span
                  className="pointer-events-none absolute -right-2 -top-6 font-heading text-[7rem] font-bold leading-none text-petrol/[0.05] transition-colors duration-300 group-hover:text-lime/25"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-petrol text-lime">
                  <Icon name={step.icon} size={20} />
                </div>
                <h3 className="relative mt-14 font-heading text-lg font-bold text-petrol">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-anthracite/70">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
