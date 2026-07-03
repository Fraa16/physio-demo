import { Link } from "react-router-dom";
import { navItems } from "../../data/nav";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 border-t border-petrol/10">
        {navItems.map((item) => (
          <Link
            key={item.hash}
            to={`/#${item.hash}`}
            onClick={onClose}
            className="py-3 text-anthracite font-medium border-b border-petrol/5 last:border-b-0"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/#kontakt"
          onClick={onClose}
          className="mt-4 rounded-full bg-lime text-petrol font-semibold px-5 py-3 text-sm text-center hover:brightness-95 transition"
        >
          Termin buchen
        </Link>
      </nav>
    </div>
  );
}
