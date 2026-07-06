import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";
import { CornerMarks } from "../art/CornerMarks";
import { photos } from "../../data/images";

/** HUD annotations pinned around the hero photo — the "lab data" motif. */
const hudMarkers = [
  { label: "ROM Schulter · 176°", top: "8%", left: "-6%" },
  { label: "Symmetrie L/R · 98,4 %", top: "50%", right: "-8%" },
  { label: "Knieflexion · 142°", bottom: "9%", left: "4%" },
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <FadeIn>
            <p className="micro-label text-lime">Physiotherapie · München Werksviertel</p>
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
            <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-offwhite/10 pt-8 text-sm text-offwhite/55">
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

        <FadeIn delay={250} className="relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Framed hero photo with brand duotone + lab HUD overlay */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-offwhite/10 bg-petrol-deep">
              <img
                src={photos.mobilityLegRaise.lg}
                srcSet={`${photos.mobilityLegRaise.sm} 800w, ${photos.mobilityLegRaise.lg} 1600w`}
                sizes="(max-width: 1024px) 100vw, 45vw"
                alt={photos.mobilityLegRaise.alt}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover opacity-95 contrast-[1.03] saturate-[0.9]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(150deg, rgba(11,61,66,0.55), transparent 45%, rgba(7,42,46,0.55))" }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

              {/* corner brackets */}
              <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-lime/70" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-lime/70" aria-hidden="true" />

              {/* live-capture chip */}
              <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-petrol-deep/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="hud-dot h-2 w-2 rounded-full bg-lime" />
                <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-lime">
                  Motion Capture · live
                </span>
              </div>
            </div>

            {/* floating HUD annotations */}
            {hudMarkers.map((marker, i) => {
              const { label, ...pos } = marker;
              return (
                <div
                  key={label}
                  className="absolute z-10 hidden items-center gap-2 sm:flex"
                  style={pos as React.CSSProperties}
                  aria-hidden="true"
                >
                  <span className="hud-dot h-1.5 w-1.5 rounded-full bg-lime" style={{ animationDelay: `${i * 500}ms` }} />
                  <span className="whitespace-nowrap rounded-md border border-lime/25 bg-petrol-deep/85 px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-lime/90 backdrop-blur-sm">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
