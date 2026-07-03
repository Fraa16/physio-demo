interface SectionDividerProps {
  fill: string;
  flip?: boolean;
  className?: string;
}

export function SectionDivider({ fill, flip = false, className = "" }: SectionDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 80" className="w-full h-[50px] md:h-[80px]" preserveAspectRatio="none">
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
