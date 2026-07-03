interface BlobBackgroundProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BlobBackground({ variant = "light", className = "" }: BlobBackgroundProps) {
  const lime = variant === "light" ? "rgba(198,255,61,0.25)" : "rgba(198,255,61,0.18)";
  const petrol = variant === "light" ? "rgba(11,61,66,0.08)" : "rgba(198,255,61,0.08)";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl"
        style={{ background: lime }}
      />
      <div
        className="absolute top-1/3 -left-32 w-[26rem] h-[26rem] rounded-full blur-3xl"
        style={{ background: petrol }}
      />
    </div>
  );
}
