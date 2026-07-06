import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";

export function Impressum() {
  usePageMeta("Impressum | MOTIO Health Lab");

  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" />

      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto max-w-3xl space-y-10 px-6 py-16 md:py-20">
          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              MOTIO Health Lab GmbH
              <br />
              Atelierstraße 10
              <br />
              81671 München
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">Vertreten durch</h2>
            <p className="mt-3 text-anthracite/80">
              Matteo Brandt, Sophia Lindner (Geschäftsführung)
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">Kontakt</h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Telefon: 089 / 41 09 87 30
              <br />
              E-Mail: hallo@motio-healthlab.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">Registereintrag</h2>
            <p className="mt-3 leading-relaxed text-anthracite/80">
              Eintragung im Handelsregister.
              <br />
              Registergericht: München
              <br />
              Registernummer: HRB XXXXXX
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-petrol">Umsatzsteuer-ID</h2>
            <p className="mt-3 text-anthracite/80">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE XXXXXXXXX
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
