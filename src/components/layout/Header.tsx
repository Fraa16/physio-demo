import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../data/nav";
import { MobileNav } from "./MobileNav";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeId = useScrollSpy(navItems.map((item) => item.hash));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 bg-offwhite/90 backdrop-blur border-b transition-all ${
        scrolled ? "border-petrol/10 shadow-sm py-2" : "border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-lg text-petrol">
          MOTIO Health Lab
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHome && activeId === item.hash;
            return (
              <Link
                key={item.hash}
                to={`/#${item.hash}`}
                className={`relative text-sm font-medium py-1 transition ${
                  isActive ? "text-petrol" : "text-anthracite hover:text-petrol"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-lime transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/#kontakt"
            className="rounded-full bg-lime text-petrol font-semibold px-5 py-2.5 text-sm hover:brightness-95 transition"
          >
            Termin buchen
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-petrol transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block w-6 h-0.5 bg-petrol transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-petrol transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />

      <div className="h-0.5 bg-petrol/5">
        <div
          className="h-full bg-lime transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
