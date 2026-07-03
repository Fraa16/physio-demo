import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
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
    title: "Individueller Behandlungsplan",
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
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Ablauf"
            title="So läuft deine erste Behandlung ab"
            subtitle="Vom ersten Gespräch bis zum Trainingsplan für zuhause – ein klarer Prozess statt Rätselraten."
          />
        </FadeIn>

        <div className="mt-16 relative">
          <div
            className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-petrol/15"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 100}>
                <div className="relative text-center md:text-left">
                  <div className="relative z-10 w-14 h-14 mx-auto md:mx-0 rounded-full bg-petrol text-lime flex items-center justify-center shadow-card">
                    <Icon name={step.icon} size={22} />
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-wide text-lime bg-petrol inline-block rounded-full px-2.5 py-0.5">
                    Schritt {i + 1}
                  </p>
                  <h3 className="mt-3 font-heading font-bold text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-anthracite/70">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
