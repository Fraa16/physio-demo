import { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { Icon } from "../icons/Icon";
import { AvatarPlaceholder } from "../common/AvatarPlaceholder";

const testimonials = [
  {
    quote:
      "Nach meiner Knie-OP hatte ich Angst, nie wieder richtig laufen zu können. Das Return-to-Sport-Programm hat mir Schritt für Schritt das Vertrauen zurückgegeben – heute laufe ich wieder Halbmarathon.",
    name: "Laura K.",
    context: "Läuferin",
  },
  {
    quote:
      "Ich bin keine Leistungssportlerin, hatte aber jahrelang Rückenschmerzen im Büroalltag. Die Haltungsanalyse hat mir zum ersten Mal richtig erklärt, woran es eigentlich liegt.",
    name: "Jonas M.",
    context: "Softwareentwickler",
  },
  {
    quote:
      "Die Kombination aus Diagnostik und Osteopathie war für mich neu – und hat tatsächlich etwas verändert, das andere Behandlungen vorher nicht geschafft haben.",
    name: "Sabine R.",
    context: "Triathletin",
  },
  {
    quote:
      "Die App macht den Unterschied: Ich sehe genau, welche Übungen ich zuhause machen soll und wie sich mein Fortschritt entwickelt.",
    name: "David T.",
    context: "Hobby-Kletterer",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading eyebrow="Stimmen" title="Was unsere Patient:innen sagen" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white shadow-card p-8 md:p-12 relative">
              <Icon name="quote" size={36} className="text-lime" />
              <p
                key={index}
                className="mt-6 text-xl md:text-2xl font-heading text-petrol leading-snug animate-[fadeIn_0.4s_ease-out]"
              >
                „{current.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <AvatarPlaceholder name={current.name} />
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-anthracite/60">{current.context}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Vorheriges Zitat"
                className="w-10 h-10 rounded-full border-2 border-petrol/20 flex items-center justify-center hover:border-petrol hover:bg-petrol hover:text-offwhite transition"
              >
                <Icon name="arrowRight" size={16} className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Zitat ${i + 1} anzeigen`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === index ? "bg-petrol" : "bg-petrol/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Nächstes Zitat"
                className="w-10 h-10 rounded-full border-2 border-petrol/20 flex items-center justify-center hover:border-petrol hover:bg-petrol hover:text-offwhite transition"
              >
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
