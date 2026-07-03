interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <p className="text-lime bg-petrol inline-block rounded-full px-4 py-1 text-sm font-semibold tracking-wide mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-anthracite/80">{subtitle}</p>
      )}
    </div>
  );
}
