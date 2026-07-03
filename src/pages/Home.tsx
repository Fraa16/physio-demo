import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { USPTiles } from "../components/sections/USPTiles";
import { LeistungenOverview } from "../components/sections/LeistungenOverview";
import { About } from "../components/sections/About";
import { LeistungenDetail } from "../components/sections/LeistungenDetail";
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";

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
        <About />
        <LeistungenDetail />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
