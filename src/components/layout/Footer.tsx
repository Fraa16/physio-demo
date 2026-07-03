import { Link } from "react-router-dom";
import { navItems } from "../../data/nav";

export function Footer() {
  return (
    <footer className="bg-petrol text-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading font-bold text-lg">MOTIO Health Lab</p>
          <p className="mt-3 text-sm text-offwhite/70">Bewegung trifft Wissenschaft.</p>
        </div>

        <div>
          <p className="font-heading font-semibold mb-4 text-sm tracking-wide text-lime">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-offwhite/80">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link to={`/#${item.hash}`} className="hover:text-lime transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold mb-4 text-sm tracking-wide text-lime">
            Kontakt
          </p>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li>Atelierstraße 10</li>
            <li>81671 München</li>
            <li>
              <a href="tel:+498941098730" className="hover:text-lime transition">
                089 / 41 09 87 30
              </a>
            </li>
            <li>
              <a href="mailto:hallo@motio-healthlab.de" className="hover:text-lime transition">
                hallo@motio-healthlab.de
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold mb-4 text-sm tracking-wide text-lime">
            Social
          </p>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li>
              <a href="#" className="hover:text-lime transition">
                Instagram @motio.healthlab
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime transition">
                LinkedIn MOTIO Health Lab GmbH
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-offwhite/60">
          <p>© 2026 MOTIO Health Lab GmbH</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-lime transition">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-lime transition">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
