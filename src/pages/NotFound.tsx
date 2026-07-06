import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { MotionFigure } from "../components/art/MotionFigure";

export function NotFound() {
  usePageMeta("Seite nicht gefunden | MOTIO Health Lab");

  return (
    <section className="relative overflow-hidden bg-petrol text-offwhite">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 md:py-40 lg:grid-cols-2">
        <div>
          <p className="micro-label text-lime">Fehler 404</p>
          <h1 className="mt-6 text-display font-bold text-offwhite">
            Diese Seite hat sich verlaufen.
          </h1>
          <p className="mt-6 max-w-md text-lg text-offwhite/70">
            Kein Problem – Bewegungsanalyse ist unser Job. Wir bringen dich
            zurück auf den richtigen Weg.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="rounded-full bg-lime px-8 py-4 font-heading font-semibold text-petrol transition-all duration-200 hover:scale-[1.03] hover:brightness-95"
            >
              Zur Startseite
            </Link>
            <Link
              to="/kontakt"
              className="rounded-full border border-offwhite/30 px-8 py-4 font-heading font-semibold text-offwhite transition hover:border-lime hover:text-lime"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <MotionFigure pose="reach" className="mx-auto hidden w-full max-w-sm lg:block" />
      </div>
    </section>
  );
}
