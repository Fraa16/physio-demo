import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { NoiseOverlay } from "./components/art/NoiseOverlay";

function App() {
  return (
    <BrowserRouter>
      <NoiseOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
