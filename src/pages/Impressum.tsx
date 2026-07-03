import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function Impressum() {
  useEffect(() => {
    document.title = "Impressum | MOTIO Health Lab";
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold">Impressum</h1>

          <div className="mt-8 space-y-6 text-anthracite/85">
            <div>
              <h2 className="text-lg font-semibold text-petrol">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2">
                MOTIO Health Lab GmbH
                <br />
                Atelierstraße 10
                <br />
                81671 München
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">Vertreten durch</h2>
              <p className="mt-2">Matteo Brandt, Sophia Lindner (Geschäftsführung)</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">Kontakt</h2>
              <p className="mt-2">
                Telefon: 089 / 41 09 87 30
                <br />
                E-Mail: hallo@motio-healthlab.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">Registereintrag</h2>
              <p className="mt-2">
                Eintragung im Handelsregister.
                <br />
                Registergericht: München
                <br />
                Registernummer: HRB XXXXXX
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">Umsatzsteuer-ID</h2>
              <p className="mt-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                DE XXXXXXXXX
              </p>
            </div>

            <p className="text-sm text-anthracite/50">
              Hinweis: Diese Website dient als fiktives Demo-Projekt. Alle
              Angaben sind frei erfunden.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
