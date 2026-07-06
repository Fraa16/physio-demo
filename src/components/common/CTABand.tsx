import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { CornerMarks } from "../art/CornerMarks";

/** Pre-footer conversion band, used on every content page. */
export function CTABand() {
  return (
    <section className="bg-offwhite px-6 pb-20 pt-8 md:pb-28">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-petrol px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "rgba(198,255,61,0.18)" }}
            aria-hidden="true"
          />
          <CornerMarks />

          <div className="relative">
            <p className="micro-label justify-center text-lime">Nächster Schritt</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-display-sm font-bold text-offwhite">
              Bereit, dich besser zu bewegen?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-offwhite/70">
              Buch dir deinen ersten Termin – oder ruf uns einfach an und wir
              finden gemeinsam heraus, womit wir starten.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/kontakt"
                className="rounded-full bg-lime px-8 py-4 font-heading font-semibold text-petrol transition-all duration-200 hover:scale-[1.03] hover:brightness-95 active:scale-[0.97]"
              >
                Termin buchen
              </Link>
              <a
                href="tel:+498941098730"
                className="rounded-full border border-offwhite/30 px-8 py-4 font-heading font-semibold text-offwhite transition-all duration-200 hover:border-lime hover:text-lime"
              >
                089 / 41 09 87 30
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
