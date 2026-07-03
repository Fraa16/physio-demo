import type { SVGProps } from "react";

const paths: Record<string, string> = {
  pulse: "M2 12h4l2.5-7 4 14 2.5-7H22",
  target: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0|M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0|M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  heart: "M20.8 8.6c0-3.2-2.5-5.6-5.6-5.6-1.8 0-3.4.9-4.4 2.3C9.8 3.9 8.2 3 6.4 3 3.3 3 .8 5.4.8 8.6c0 6.4 9.2 11 9.2 11h4c0-.1 9.2-4.6 9.2-11z|M9.6 4.2C11.2 5.6 12 7.6 12 9.6",
  smartphone: "M7 2h10v20H7z|M11 18h2",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  wind: "M4 8h11a3 3 0 1 0-3-3|M2 13h15a3 3 0 1 1-3 3|M4 18h8a2.5 2.5 0 1 1-2.5 2.5",
  calendar: "M4 5h16v16H4z|M4 10h16|M8 2v6|M16 2v6",
  mapPin: "M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z|M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  phone: "M5 3h4l1.5 5-2.5 2a12 12 0 0 0 6 6l2-2.5 5 1.5v4a1 1 0 0 1-1 1C10.5 20.5 3.5 13.5 4 4a1 1 0 0 1 1-1z",
  mail: "M3 5h18v14H3z|M3 6l9 7 9-7",
  clock: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0|M12 7v5l3 3",
  check: "M4 12l6 6L20 6",
  chevronDown: "M6 9l6 6 6-6",
  chevronUp: "M6 15l6-6 6 6",
  quote: "M9 7H4v6a3 3 0 0 0 3 3|M9 7v3a3 3 0 0 1-3 3|M20 7h-5v6a3 3 0 0 0 3 3|M20 7v3a3 3 0 0 1-3 3",
  arrowRight: "M4 12h16|M13 5l7 7-7 7",
  users: "M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2|M9.5 10.5m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0|M23 20v-2a4 4 0 0 0-3-3.9|M16.5 3.6a4 4 0 0 1 0 7.8",
  sparkles: "M12 3l1.8 4.8L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.7z|M19 15l.9 2.3L22 18l-2.1.8L19 21l-.9-2.2L16 18l2.1-.7z",
  layers: "M12 2l9 5-9 5-9-5z|M3 12l9 5 9-5|M3 17l9 5 9-5",
  wave: "M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0",
  droplet: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  route: "M4 20l7-7-3-3 8-8|M4 4l16 16",
  scan: "M4 8V4h4|M16 4h4v4|M20 16v4h-4|M8 20H4v-4",
  hand: "M9 12V4a1.5 1.5 0 0 1 3 0v7|M12 11V3a1.5 1.5 0 0 1 3 0v8|M15 11.5V5a1.5 1.5 0 0 1 3 0v9|M6 11v3a7 7 0 0 0 7 7h1a7 7 0 0 0 7-7v-2",
};

export type IconName = keyof typeof paths;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const d = paths[name];
  if (!d) return null;
  const subPaths = d.split("|");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {subPaths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
