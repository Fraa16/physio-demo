import { Link } from "react-router-dom";
import { FadeIn } from "../common/FadeIn";

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

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
        <FadeIn>
          <p className="inline-block rounded-full bg-lime/15 text-lime border border-lime/30 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
            München · Werksviertel-Mitte
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-offwhite max-w-3xl leading-tight">
            Bewegung trifft Wissenschaft.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 text-lg md:text-xl text-offwhite/80 max-w-2xl">
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
              className="rounded-full bg-lime text-petrol font-semibold px-6 py-3 hover:brightness-95 transition inline-block text-center"
            >
              Termin buchen
            </Link>
            <Link
              to="/#leistungen"
              className="rounded-full border-2 border-offwhite/40 text-offwhite font-semibold px-6 py-3 hover:bg-offwhite hover:text-petrol transition inline-block text-center"
            >
              Unsere Leistungen
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
