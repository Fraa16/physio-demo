import { portraitBySlug, slugFromName } from "../../data/images";

interface PortraitProps {
  name: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Team/founder portrait in a consistent 3:4 frame. Uses the real photo when a
 * matching slug exists, otherwise falls back to the lab-style initials panel.
 */
export function Portrait({ name, className = "", rounded = "rounded-2xl", priority = false }: PortraitProps) {
  const img = portraitBySlug[slugFromName(name)];

  if (img) {
    return (
      <div className={`relative aspect-[3/4] w-full overflow-hidden bg-petrol ${rounded} ${className}`}>
        <img
          src={img.lg}
          srcSet={`${img.sm} 450w, ${img.lg} 900w`}
          sizes="(max-width: 768px) 50vw, 320px"
          alt={`${name}, MOTIO Health Lab`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-petrol via-[#0d474d] to-petrol-deep ${rounded} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-dark" />
      <span className="absolute bottom-4 left-5 font-heading text-5xl font-bold text-lime/90">
        {getInitials(name)}
      </span>
    </div>
  );
}
