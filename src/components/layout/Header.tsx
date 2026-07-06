import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  // Close the overlay on navigation and lock body scroll while it is open.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-offwhite/90 backdrop-blur transition-all ${
          scrolled ? "border-petrol/10 py-3 shadow-sm" : "border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-baseline gap-2.5">
            <span className="font-heading text-xl font-bold tracking-tight text-petrol">
              MOTIO<span className="text-lime group-hover:animate-pulse">.</span>
            </span>
            <span className="hidden text-[10px] font-heading font-semibold uppercase tracking-[0.28em] text-anthracite/50 sm:inline">
              Health Lab
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `group relative py-1 text-sm font-medium transition ${
                    isActive ? "text-petrol" : "text-anthracite/75 hover:text-petrol"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-lime transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="tel:+498941098730"
              className="hidden text-sm font-medium text-anthracite/60 transition hover:text-petrol xl:inline"
            >
              089 / 41 09 87 30
            </a>
            <Link
              to="/kontakt"
              className="rounded-full bg-petrol px-5 py-2.5 text-sm font-heading font-semibold text-offwhite transition-all duration-200 hover:scale-[1.03] hover:bg-petrol-deep active:scale-[0.97]"
            >
              Termin buchen
            </Link>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-petrol transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-petrol transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-petrol transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-0.5">
          <div
            className="h-full bg-lime transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-petrol md:hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <nav className="relative flex flex-1 flex-col justify-center gap-2 px-8 pt-16">
            {navItems.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="overlay-link py-3 font-heading text-4xl font-bold text-offwhite transition hover:text-lime"
                style={{ animationDelay: `${120 + i * 70}ms` }}
              >
                <span className="mr-4 text-sm font-semibold text-lime/60">
                  0{i + 1}
                </span>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="overlay-link mt-8 inline-flex w-fit rounded-full bg-lime px-8 py-4 font-heading font-semibold text-petrol"
              style={{ animationDelay: `${120 + navItems.length * 70}ms` }}
            >
              Termin buchen
            </Link>
          </nav>
          <div
            className="overlay-link relative px-8 pb-10 text-sm text-offwhite/50"
            style={{ animationDelay: "500ms" }}
          >
            Atelierstraße 10 · 81671 München
            <br />
            <a href="tel:+498941098730" className="hover:text-lime">
              089 / 41 09 87 30
            </a>
          </div>
        </div>
      )}
    </>
  );
}
