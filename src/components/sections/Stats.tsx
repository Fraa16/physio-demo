import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { FadeIn } from "../common/FadeIn";

const stats = [
  { value: 2021, suffix: "", label: "In München gegründet", format: "plain" as const },
  { value: 1200, suffix: "+", label: "Patient:innen begleitet", format: "number" as const },
  { value: 3, suffix: "", label: "Berufsgruppen im Team", format: "plain" as const },
  { value: 17, suffix: "", label: "Leistungen im Angebot", format: "plain" as const },
];

function Stat({ stat, active, index }: { stat: (typeof stats)[number]; active: boolean; index: number }) {
  const value = useCountUp(stat.value, active);
  const display = stat.format === "number" ? value.toLocaleString("de-DE") : value;

  return (
    <div
      className={`px-8 py-10 md:py-14 ${index > 0 ? "border-t border-offwhite/10 md:border-l md:border-t-0" : ""}`}
    >
      <p className="font-heading text-5xl font-bold tabular-nums text-lime md:text-6xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-3 text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-offwhite/55">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="bg-petrol">
      <div className="ruler-ticks h-2 w-full opacity-50" aria-hidden="true" />
      <div ref={ref} className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Stat key={stat.label} stat={stat} active={inView} index={i} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
