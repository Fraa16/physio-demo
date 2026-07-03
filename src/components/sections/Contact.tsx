import { useState, type FormEvent } from "react";
import { FadeIn } from "../common/FadeIn";
import { SectionHeading } from "../common/SectionHeading";
import { serviceCategories } from "../../data/services";

const openingHours = [
  { label: "Montag–Freitag", hours: "07:00–20:00 Uhr" },
  { label: "Samstag", hours: "09:00–14:00 Uhr" },
  { label: "Sonntag", hours: "geschlossen" },
];

// Demo site: no backend exists, so submission is handled entirely client-side.
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-petrol text-offwhite scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Kontakt"
            title="Lass uns über deine Bewegung sprechen"
            subtitle="Ob Trainingsaufbau, Reha oder einfach mehr Beweglichkeit im Alltag – schreib uns oder ruf an, gemeinsam finden wir den passenden Weg."
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <FadeIn delay={100} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-lime text-sm tracking-wide">
                Adresse
              </h3>
              <p className="mt-2 text-offwhite/90">
                MOTIO Health Lab GmbH
                <br />
                Atelierstraße 10
                <br />
                81671 München (Werksviertel-Mitte)
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lime text-sm tracking-wide">
                Kontakt
              </h3>
              <p className="mt-2 text-offwhite/90">
                <a href="tel:+498941098730" className="hover:text-lime transition">
                  089 / 41 09 87 30
                </a>
                <br />
                <a href="mailto:hallo@motio-healthlab.de" className="hover:text-lime transition">
                  hallo@motio-healthlab.de
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lime text-sm tracking-wide">
                Öffnungszeiten
              </h3>
              <ul className="mt-2 text-offwhite/90 space-y-1">
                {openingHours.map((row) => (
                  <li key={row.label} className="flex justify-between gap-6 max-w-xs">
                    <span>{row.label}</span>
                    <span>{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lime text-sm tracking-wide">
                Anfahrt
              </h3>
              <p className="mt-2 text-offwhite/90">
                3 Gehminuten vom Ostbahnhof, S-Bahn-Linien S1–S8, eigene
                Fahrradstellplätze, Tiefgarage im Gebäude.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                title="MOTIO Health Lab auf der Karte"
                src="https://www.google.com/maps?q=Atelierstra%C3%9Fe+10%2C+81671+M%C3%BCnchen&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={200} className="lg:col-span-3">
            <div className="rounded-2xl bg-white text-anthracite shadow-card p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="text-xl font-heading font-bold text-petrol">
                    Danke für deine Nachricht!
                  </p>
                  <p className="mt-3 text-anthracite/75">
                    Wir melden uns innerhalb von 1–2 Werktagen bei dir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-anthracite/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-anthracite/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-anthracite/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                        Gewünschte Leistung
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-anthracite/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime bg-white"
                      >
                        <option value="">Bitte wählen</option>
                        {serviceCategories.map((category) => (
                          <optgroup key={category.id} label={category.title}>
                            {category.services.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-anthracite/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-lime text-petrol font-semibold px-6 py-3 hover:brightness-95 transition"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
