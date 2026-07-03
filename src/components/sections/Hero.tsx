import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";
import { MotionFigure } from "../art/MotionFigure";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-petrol text-offwhite scroll-mt-24"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(198,255,61,0.35), transparent 40%), radial-gradient(circle at 85% 75%, rgba(198,255,61,0.25), transparent 45%), linear-gradient(135deg, rgba(198,255,61,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,248,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(247,248,246,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full bg-lime/15 text-lime border border-lime/30 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              München · Werksviertel-Mitte
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-offwhite max-w-xl leading-[1.05]">
              Bewegung trifft Wissenschaft.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-offwhite/80 max-w-xl">
              In unserem Health Lab im Münchner Werksviertel verbinden wir
              datenbasierte Diagnostik aus dem Leistungssport mit ganzheitlicher
              Physiotherapie – für ambitionierte Sportler:innen genauso wie für
              alle, die sich einfach wieder besser bewegen wollen.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/#kontakt"
                className="group rounded-full bg-lime text-petrol font-semibold px-6 py-3 hover:brightness-95 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-flex items-center gap-2 text-center"
              >
                Termin buchen
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/#leistungen"
                className="rounded-full border-2 border-offwhite/40 text-offwhite font-semibold px-6 py-3 hover:bg-offwhite hover:text-petrol transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block text-center"
              >
                Unsere Leistungen
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-offwhite/60">
              <div>
                <span className="block text-2xl font-heading font-bold text-lime">2021</span>
                gegründet
              </div>
              <div>
                <span className="block text-2xl font-heading font-bold text-lime">3</span>
                Berufsgruppen im Team
              </div>
              <div>
                <span className="block text-2xl font-heading font-bold text-lime">17</span>
                Leistungen im Angebot
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={250} className="hidden lg:block relative">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #C6FF3D, transparent 70%)" }}
              aria-hidden="true"
            />
            <MotionFigure pose="running" className="relative w-full h-auto" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
