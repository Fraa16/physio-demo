import { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { Icon } from "../icons/Icon";
import { CornerMarks } from "../art/CornerMarks";

const testimonials = [
  {
    quote:
      "Nach meiner Knie-OP hatte ich Angst, nie wieder richtig laufen zu können. Das Return-to-Sport-Programm hat mir Schritt für Schritt das Vertrauen zurückgegeben – heute laufe ich wieder Halbmarathon.",
    name: "Laura K.",
    context: "Läuferin · Return-to-Sport",
  },
  {
    quote:
      "Ich bin keine Leistungssportlerin, hatte aber jahrelang Rückenschmerzen im Büroalltag. Die Haltungsanalyse hat mir zum ersten Mal richtig erklärt, woran es eigentlich liegt.",
    name: "Jonas M.",
    context: "Softwareentwickler · Haltungsanalyse",
  },
  {
    quote:
      "Die Kombination aus Diagnostik und Osteopathie war für mich neu – und hat tatsächlich etwas verändert, das andere Behandlungen vorher nicht geschafft haben.",
    name: "Sabine R.",
    context: "Triathletin · Osteopathie",
  },
  {
    quote:
      "Die App macht den Unterschied: Ich sehe genau, welche Übungen ich zuhause machen soll und wie sich mein Fortschritt entwickelt.",
    name: "David T.",
    context: "Hobby-Kletterer · Digitale Nachsorge",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-offwhite px-6 py-24 md:py-28">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-petrol px-8 py-16 md:px-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <CornerMarks className="hidden md:block" />

          <div className="relative mx-auto max-w-4xl">
            <p className="micro-label text-lime">Stimmen aus dem Lab</p>

            <blockquote key={index} className="mt-10 animate-[fadeIn_0.45s_ease-out]">
              <p className="font-heading text-2xl font-bold leading-snug text-offwhite md:text-4xl">
                „{current.quote}"
              </p>
              <footer className="mt-8 text-sm text-offwhite/60">
                <span className="font-semibold text-offwhite">{current.name}</span>
                <span className="mx-3 text-lime">·</span>
                {current.context}
              </footer>
            </blockquote>

            <div className="mt-12 flex items-center justify-between border-t border-offwhite/10 pt-7">
              <span className="font-heading text-sm font-semibold tabular-nums text-offwhite/50">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="mx-1 text-offwhite/25">/</span>{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Vorheriges Zitat"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-offwhite/25 text-offwhite transition hover:border-lime hover:bg-lime hover:text-petrol"
                >
                  <Icon name="arrowRight" size={16} className="rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Nächstes Zitat"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-offwhite/25 text-offwhite transition hover:border-lime hover:bg-lime hover:text-petrol"
                >
                  <Icon name="arrowRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
