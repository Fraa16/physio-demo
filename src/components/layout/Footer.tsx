import { Link } from "react-router-dom";
import { navItems } from "../../data/nav";
import { serviceCategories } from "../../data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-petrol-deep text-offwhite">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 pb-12 pt-16 md:grid-cols-12 md:pt-20">
        <div className="col-span-2 md:col-span-4">
          <p className="font-heading text-2xl font-bold tracking-tight">
            MOTIO<span className="text-lime">.</span>
          </p>
          <p className="mt-1 text-[10px] font-heading font-semibold uppercase tracking-[0.28em] text-offwhite/40">
            Health Lab
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-offwhite/60">
            Bewegung trifft Wissenschaft – Sportphysiotherapie, Prävention und
            datenbasierte Diagnostik im Münchner Werksviertel.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="micro-label text-lime">Seiten</p>
          <ul className="mt-5 space-y-2.5 text-sm text-offwhite/70">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="micro-label text-lime">Leistungen</p>
          <ul className="mt-5 space-y-2.5 text-sm text-offwhite/70">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <Link to={`/leistungen/${category.id}`} className="transition hover:text-lime">
                  {category.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="micro-label text-lime">Kontakt</p>
          <ul className="mt-5 space-y-2.5 text-sm text-offwhite/70">
            <li>Atelierstraße 10</li>
            <li>81671 München · Werksviertel-Mitte</li>
            <li>
              <a href="tel:+498941098730" className="transition hover:text-lime">
                089 / 41 09 87 30
              </a>
            </li>
            <li>
              <a href="mailto:hallo@motio-healthlab.de" className="transition hover:text-lime">
                hallo@motio-healthlab.de
              </a>
            </li>
            <li className="pt-3 text-offwhite/50">
              Mo–Fr 07–20 Uhr · Sa 09–14 Uhr
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-offwhite/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-offwhite/45 md:flex-row">
          <p>© 2026 MOTIO Health Lab GmbH · Made in München</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-lime" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>
            <a href="#" className="transition hover:text-lime" onClick={(e) => e.preventDefault()}>
              LinkedIn
            </a>
            <Link to="/impressum" className="transition hover:text-lime">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition hover:text-lime">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized decorative wordmark */}
      <div className="relative select-none overflow-hidden" aria-hidden="true">
        <p className="-mb-[0.23em] text-center font-heading text-[clamp(4.5rem,15vw,14rem)] font-bold leading-none text-offwhite/[0.05]">
          MOTIO
        </p>
      </div>
    </footer>
  );
}
