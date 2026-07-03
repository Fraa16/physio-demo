import { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { Icon } from "../icons/Icon";

const faqs = [
  {
    question: "Übernimmt meine Krankenkasse die Kosten?",
    answer:
      "Bei ärztlicher Verordnung rechnen wir mit gesetzlichen und privaten Krankenkassen ab. Diagnostik- und Trainingsleistungen ohne Rezept besprechen wir transparent vorab mit dir.",
  },
  {
    question: "Brauche ich eine Überweisung für den ersten Termin?",
    answer:
      "Nein, du kannst dich auch ohne Rezept direkt bei uns melden – etwa für Leistungsdiagnostik, Yoga oder Massage. Für klassische Physiotherapie auf Rezept bringst du deine Verordnung einfach mit.",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Je nach Leistung zwischen 30 und 60 Minuten. Für die Erstanamnese inklusive Bewegungsanalyse planen wir in der Regel etwas mehr Zeit ein.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer:
      "Ja, im Gebäude steht eine Tiefgarage zur Verfügung, außerdem gibt es eigene Fahrradstellplätze direkt vorm Haus.",
  },
  {
    question: "Kann ich die App auch ohne laufende Behandlung nutzen?",
    answer:
      "Die App ist Teil deines individuellen Behandlungsplans und wird gemeinsam mit deiner Therapeutin oder deinem Therapeuten freigeschaltet.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading eyebrow="Fragen & Antworten" title="Gut zu wissen" />
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={faq.question} delay={i * 60}>
                <div className="rounded-2xl bg-offwhite shadow-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-heading font-semibold"
                  >
                    {faq.question}
                    <Icon
                      name={isOpen ? "chevronUp" : "chevronDown"}
                      size={20}
                      className="shrink-0 text-petrol"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-anthracite/75">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
