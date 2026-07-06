import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";

export function Datenschutz() {
  usePageMeta("Datenschutz | MOTIO Health Lab");

  return (
    <>
      <PageHero label="Rechtliches" title="Datenschutzerklärung" />

      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-3xl space-y-10 px-6 py-16 md:py-20">
          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">1. Verantwortlicher</h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Verantwortlicher im Sinne der Datenschutzgrundverordnung (DSGVO) ist:
              <br />
              MOTIO Health Lab GmbH, Atelierstraße 10, 81671 München
              <br />
              E-Mail: hallo@motio-healthlab.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Angaben gemäß § 5 TMG. Personenbezogene Daten werden auf dieser
              Website nur im technisch notwendigen Umfang erhoben, etwa bei
              Nutzung des Kontaktformulars.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">3. Kontaktformular</h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Wenn du uns über das Kontaktformular Anfragen zukommen lässt,
              werden deine Angaben aus dem Formular zur Bearbeitung der Anfrage
              gespeichert.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">4. Deine Rechte</h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung
              oder Einschränkung der Verarbeitung deiner gespeicherten
              personenbezogenen Daten.
            </p>
          </div>

          <p className="border-t border-petrol/10 pt-6 text-sm text-anthracite/50">
            Hinweis: Diese Website dient als fiktives Demo-Projekt. Alle Angaben
            sind frei erfunden.
          </p>
        </div>
      </section>
    </>
  );
}
