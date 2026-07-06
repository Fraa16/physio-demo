import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { NoiseOverlay } from "../art/NoiseOverlay";

export function Layout() {
  const location = useLocation();

  return (
    <>
      <NoiseOverlay />
      <ScrollToTop />
      <Header />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
