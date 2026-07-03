import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary:
    "rounded-full bg-lime text-petrol font-semibold px-6 py-3 hover:brightness-95 transition inline-block text-center",
  secondary:
    "rounded-full border-2 border-petrol text-petrol font-semibold px-6 py-3 hover:bg-petrol hover:text-offwhite transition inline-block text-center",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function LinkButton({ variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <a className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
