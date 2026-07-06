import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";
import { MotionFigure } from "../art/MotionFigure";
import { CornerMarks } from "../art/CornerMarks";

/** HUD annotations pinned to the motion-capture figure. */
const hudMarkers = [
  { label: "ROM Schulter · 176°", top: "6%", left: "68%" },
  { label: "Symmetrie L/R · 98,4 %", top: "46%", left: "-4%" },
  { label: "Knieflexion · 142°", top: "66%", left: "58%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-petrol text-offwhite">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(198,255,61,0.22), transparent 42%), radial-gradient(circle at 88% 80%, rgba(198,255,61,0.16), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <CornerMarks className="hidden md:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:py-36">
        <div>
          <FadeIn>
            <p className="micro-label text-lime">
              Physiotherapie · München Werksviertel
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-7 max-w-2xl text-display font-bold text-offwhite">
              Bewegung trifft{" "}
              <span className="relative inline-block text-lime">
                Wissenschaft.
                <svg
                  viewBox="0 0 320 14"
                  className="absolute -bottom-2 left-0 w-full text-lime/50"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10 C 80 2, 240 2, 316 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-offwhite/75 md:text-xl">
              Wir verbinden datenbasierte Diagnostik aus dem Leistungssport mit
              ganzheitlicher Physiotherapie – für ambitionierte Sportler:innen
              genauso wie für alle, die sich einfach wieder besser bewegen
              wollen.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 font-heading font-semibold text-petrol transition-all duration-200 hover:scale-[1.03] hover:brightness-95 active:scale-[0.97]"
              >
                Termin buchen
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/leistungen"
                className="rounded-full border border-offwhite/30 px-8 py-4 font-heading font-semibold text-offwhite transition-all duration-200 hover:border-lime hover:text-lime"
              >
                Unsere Leistungen
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-offwhite/10 pt-8 text-sm text-offwhite/55">
              <div>
                <span className="block font-heading text-2xl font-bold text-lime">3 min</span>
                vom Ostbahnhof
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-lime">07–20 Uhr</span>
                Mo bis Fr geöffnet
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-lime">17</span>
                Leistungen unter einem Dach
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={250} className="relative hidden lg:block">
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, #C6FF3D, transparent 70%)" }}
              aria-hidden="true"
            />
            <MotionFigure pose="running" className="relative h-auto w-full" />
            {hudMarkers.map((marker, i) => (
              <div
                key={marker.label}
                className="absolute flex items-center gap-2"
                style={{ top: marker.top, left: marker.left }}
                aria-hidden="true"
              >
                <span
                  className="hud-dot h-1.5 w-1.5 rounded-full bg-lime"
                  style={{ animationDelay: `${i * 500}ms` }}
                />
                <span className="whitespace-nowrap rounded-md border border-lime/25 bg-petrol-deep/80 px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-lime/90 backdrop-blur-sm">
                  {marker.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
