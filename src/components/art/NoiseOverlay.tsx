export function NoiseOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.035] mix-blend-overlay z-[999]"
      aria-hidden="true"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
