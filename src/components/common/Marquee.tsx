interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="bg-petrol overflow-hidden py-5 border-y border-lime/10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 mx-4 text-lg md:text-xl font-heading font-semibold text-offwhite/80"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
