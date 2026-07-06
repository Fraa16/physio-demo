import { useState } from "react";
import { FadeIn } from "../common/FadeIn";
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
    <section className="border-t border-petrol/10 bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:py-24 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <p className="micro-label text-petrol/70">FAQ</p>
              <h2 className="mt-5 text-display-sm font-bold text-petrol">Gut zu wissen</h2>
              <p className="mt-5 max-w-sm text-anthracite/65">
                Deine Frage ist nicht dabei? Ruf uns an oder schreib uns –
                wir antworten meist innerhalb eines Werktags.
              </p>
            </div>
          </FadeIn>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={faq.question} delay={i * 50}>
                <div className={`border-b border-petrol/10 ${i === 0 ? "border-t" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span
                        className={`font-heading text-sm font-semibold tabular-nums transition-colors ${
                          isOpen ? "text-lime" : "text-petrol/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-lg font-bold text-petrol md:text-xl">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-petrol bg-petrol text-lime"
                          : "border-petrol/20 text-petrol group-hover:border-petrol"
                      }`}
                    >
                      <Icon name="chevronDown" size={17} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-10 leading-relaxed text-anthracite/70 md:pl-12">
                        {faq.answer}
                      </p>
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
