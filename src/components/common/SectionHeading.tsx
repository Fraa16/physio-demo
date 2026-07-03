interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <p
          className={`inline-block rounded-full px-4 py-1 text-sm font-semibold tracking-wide mb-4 ${
            light ? "bg-lime/15 text-lime border border-lime/30" : "text-lime bg-petrol"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? "text-offwhite" : "text-petrol"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-offwhite/75" : "text-anthracite/80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
