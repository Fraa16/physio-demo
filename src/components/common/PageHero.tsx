import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}

/** Shared subpage opener: micro label, oversized headline, optional intro. */
export function PageHero({ label, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="pointer-events-none absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <FadeIn>
          <p className="micro-label text-petrol/70">{label}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="mt-6 max-w-4xl text-display font-bold text-petrol">{title}</h1>
        </FadeIn>
        {intro && (
          <FadeIn delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-anthracite/75 md:text-xl">
              {intro}
            </p>
          </FadeIn>
        )}
        {children && <FadeIn delay={300}>{children}</FadeIn>}
      </div>
      <div className="ruler-ticks h-2 w-full opacity-60" aria-hidden="true" />
    </section>
  );
}
