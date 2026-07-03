import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutz | MOTIO Health Lab";
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>

          <div className="mt-8 space-y-6 text-anthracite/85">
            <div>
              <h2 className="text-lg font-semibold text-petrol">
                1. Verantwortlicher
              </h2>
              <p className="mt-2">
                Verantwortlicher im Sinne der Datenschutzgrundverordnung (DSGVO) ist:
                <br />
                MOTIO Health Lab GmbH, Atelierstraße 10, 81671 München
                <br />
                E-Mail: hallo@motio-healthlab.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mt-2">
                Angaben gemäß § 5 TMG. Personenbezogene Daten werden auf
                dieser Website nur im technisch notwendigen Umfang erhoben,
                etwa bei Nutzung des Kontaktformulars.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">3. Kontaktformular</h2>
              <p className="mt-2">
                Wenn du uns über das Kontaktformular Anfragen zukommen lässt,
                werden deine Angaben aus dem Formular zur Bearbeitung der
                Anfrage gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-petrol">4. Deine Rechte</h2>
              <p className="mt-2">
                Du hast jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung oder Einschränkung der Verarbeitung deiner
                gespeicherten personenbezogenen Daten.
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
