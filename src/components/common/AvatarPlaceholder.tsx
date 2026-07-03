interface AvatarPlaceholderProps {
  name: string;
  size?: "md" | "lg";
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

export function AvatarPlaceholder({ name, size = "md" }: AvatarPlaceholderProps) {
  const sizeClasses = size === "lg" ? "w-32 h-32 text-3xl" : "w-24 h-24 text-2xl";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-gradient-to-br from-petrol to-lime flex items-center justify-center font-heading font-bold text-offwhite shadow-card shrink-0`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
