interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-petrol/10 bg-offwhite py-4">
      <div className="flex w-max whitespace-nowrap animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-5 flex items-center gap-5 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-petrol/60"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
