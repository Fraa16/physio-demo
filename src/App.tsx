import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Leistungen } from "./pages/Leistungen";
import { LeistungCategory } from "./pages/LeistungCategory";
import { UeberUns } from "./pages/UeberUns";
import { TeamPage } from "./pages/TeamPage";
import { Kontakt } from "./pages/Kontakt";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/:categoryId" element={<LeistungCategory />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
