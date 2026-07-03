import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { FadeIn } from "../common/FadeIn";

const stats = [
  { value: 2021, suffix: "", label: "Gegründet", format: "plain" as const },
  { value: 1200, suffix: "+", label: "Patient:innen begleitet", format: "number" as const },
  { value: 3, suffix: "", label: "Berufsgruppen im Team", format: "plain" as const },
  { value: 17, suffix: "", label: "Leistungen im Angebot", format: "plain" as const },
];

function Stat({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) {
  const value = useCountUp(stat.value, active);
  const display = stat.format === "number" ? value.toLocaleString("de-DE") : value;

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-heading font-bold text-lime tabular-nums">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-offwhite/70">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="bg-petrol">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} active={inView} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
