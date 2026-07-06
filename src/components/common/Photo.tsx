import type { EditorialImage } from "../../data/images";

type Treatment = "plain" | "duotone";

interface PhotoProps {
  image: EditorialImage;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
  treatment?: Treatment;
  /** Bottom-up petrol scrim for overlaid text legibility. */
  scrim?: boolean;
  /** Eager-load above-the-fold images. */
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: string;
  objectPosition?: string;
}

/**
 * Unified photo frame. Every photo on the site renders through here so the
 * brand treatment stays consistent: a petrol placeholder while loading,
 * an optional petrol duotone for dark sections, and an optional scrim.
 */
export function Photo({
  image,
  ratio = "aspect-[3/2]",
  treatment = "plain",
  scrim = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  rounded = "rounded-3xl",
  objectPosition = "object-center",
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-petrol ${ratio} ${rounded} ${className}`}>
      <img
        src={image.lg}
        srcSet={`${image.sm} 800w, ${image.lg} 1600w`}
        sizes={sizes}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${objectPosition} ${
          treatment === "duotone" ? "opacity-90 grayscale contrast-[1.05]" : ""
        }`}
      />

      {treatment === "duotone" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-petrol mix-blend-color" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "linear-gradient(140deg, rgba(11,61,66,0.65), rgba(7,42,46,0.35) 55%, rgba(198,255,61,0.12))" }}
            aria-hidden="true"
          />
        </>
      )}

      {scrim && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(7,42,46,0.85), rgba(7,42,46,0.15) 55%, transparent)" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
