import { usePageMeta } from "../hooks/usePageMeta";
import { Hero } from "../components/sections/Hero";
import { Marquee } from "../components/common/Marquee";
import { Statement } from "../components/sections/Statement";
import { Principles } from "../components/sections/Principles";
import { CategoriesTeaser } from "../components/sections/CategoriesTeaser";
import { Stats } from "../components/sections/Stats";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { CTABand } from "../components/common/CTABand";

const marqueeItems = [
  "3D-Bewegungsanalyse",
  "Return-to-Sport",
  "Leistungsdiagnostik",
  "Osteopathie",
  "Yoga & Faszientherapie",
  "Digitale Trainingspläne",
  "Manuelle Therapie",
];

export function Home() {
  usePageMeta(
    "MOTIO Health Lab | Sportphysiotherapie & Prävention in München",
    "MOTIO Health Lab in München: Sportphysiotherapie, Prävention und Wellness auf Basis datengestützter Diagnostik – für Sportler:innen und alle, die sich bewegen wollen.",
  );

  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <Statement />
      <Principles />
      <CategoriesTeaser />
      <Stats />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  );
}
