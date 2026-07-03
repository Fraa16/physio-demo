import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { USPTiles } from "../components/sections/USPTiles";
import { LeistungenOverview } from "../components/sections/LeistungenOverview";
import { About } from "../components/sections/About";
import { Stats } from "../components/sections/Stats";
import { Process } from "../components/sections/Process";
import { LeistungenDetail } from "../components/sections/LeistungenDetail";
import { Team } from "../components/sections/Team";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";
import { Marquee } from "../components/common/Marquee";
import { SectionDivider } from "../components/art/SectionDivider";

const marqueeItems = [
  "3D-Bewegungsanalyse",
  "Return-to-Sport",
  "Leistungsdiagnostik",
  "Osteopathie",
  "Yoga & Faszientherapie",
  "Digitale Trainingspläne",
];

export function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "MOTIO Health Lab | Sportphysiotherapie & Prävention in München";
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <USPTiles />
        <LeistungenOverview />
        <Marquee items={marqueeItems} />
        <About />
        <SectionDivider fill="#0B3D42" className="bg-white" />
        <Stats />
        <SectionDivider fill="#F7F8F6" flip className="bg-petrol" />
        <Process />
        <LeistungenDetail />
        <Team />
        <Testimonials />
        <FAQ />
        <SectionDivider fill="#0B3D42" className="bg-white" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
