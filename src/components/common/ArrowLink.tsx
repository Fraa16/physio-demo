import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../icons/Icon";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function ArrowLink({ to, children, light = false, className = "" }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 font-heading font-semibold ${
        light ? "text-offwhite" : "text-petrol"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
            light ? "bg-lime" : "bg-petrol"
          }`}
        />
      </span>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
          light
            ? "border-offwhite/30 group-hover:bg-lime group-hover:border-lime group-hover:text-petrol"
            : "border-petrol/25 group-hover:bg-petrol group-hover:text-lime"
        }`}
      >
        <Icon name="arrowRight" size={15} />
      </span>
    </Link>
  );
}
