interface PortraitProps {
  name: string;
  className?: string;
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
 * Deliberate photo stand-in: a portrait-format panel in the lab aesthetic
 * (petrol gradient, measurement grid, oversized initials).
 */
export function Portrait({ name, className = "" }: PortraitProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-petrol via-[#0d474d] to-petrol-deep ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-dark" />
      <div
        className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full blur-2xl"
        style={{ background: "rgba(198,255,61,0.22)" }}
      />
      <span className="absolute bottom-4 left-5 font-heading text-5xl font-bold text-lime/90">
        {getInitials(name)}
      </span>
      <span className="absolute right-4 top-4 h-3 w-3 text-lime/60">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M6 1v10M1 6h10" />
        </svg>
      </span>
    </div>
  );
}
