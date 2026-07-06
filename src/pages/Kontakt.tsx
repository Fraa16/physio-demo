import { useState, type FormEvent } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHero } from "../components/common/PageHero";
import { FadeIn } from "../components/common/FadeIn";
import { FAQ } from "../components/sections/FAQ";
import { Photo } from "../components/common/Photo";
import { Icon } from "../components/icons/Icon";
import { serviceCategories } from "../data/services";
import { photos } from "../data/images";

const openingHours = [
  { label: "Montag–Freitag", hours: "07:00–20:00 Uhr" },
  { label: "Samstag", hours: "09:00–14:00 Uhr" },
  { label: "Sonntag", hours: "geschlossen" },
];

// Demo site: no backend exists, submission is handled entirely client-side.
export function Kontakt() {
  usePageMeta(
    "Kontakt & Terminbuchung | MOTIO Health Lab München",
    "Termin buchen bei MOTIO Health Lab: Atelierstraße 10, 81671 München. Telefon 089 / 41 09 87 30 – drei Gehminuten vom Ostbahnhof.",
  );

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
    <>
      <PageHero
        label="Kontakt"
        title={
          <>
            Lass uns über deine{" "}
            <span className="text-petrol/40">Bewegung sprechen.</span>
          </>
        }
        intro="Ob Trainingsaufbau, Reha oder einfach mehr Beweglichkeit im Alltag – schreib uns oder ruf an, gemeinsam finden wir den passenden Weg."
      />

      <section className="border-t border-petrol/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 md:py-24 lg:grid-cols-[0.4fr_0.6fr]">
          {/* Info column */}
          <div className="space-y-10">
            <FadeIn>
              <Photo
                image={photos.shoulderClose}
                ratio="aspect-[3/2]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </FadeIn>
            <FadeIn>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol text-lime">
                  <Icon name="mapPin" size={18} />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-petrol/60">
                    Adresse
                  </h2>
                  <p className="mt-2 leading-relaxed text-anthracite/80">
                    MOTIO Health Lab GmbH
                    <br />
                    Atelierstraße 10
                    <br />
                    81671 München (Werksviertel-Mitte)
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol text-lime">
                  <Icon name="phone" size={18} />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-petrol/60">
                    Direkt erreichen
                  </h2>
                  <p className="mt-2 leading-relaxed text-anthracite/80">
                    <a href="tel:+498941098730" className="transition hover:text-petrol">
                      089 / 41 09 87 30
                    </a>
                    <br />
                    <a
                      href="mailto:hallo@motio-healthlab.de"
                      className="underline decoration-lime decoration-2 underline-offset-4 transition hover:text-petrol"
                    >
                      hallo@motio-healthlab.de
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol text-lime">
                  <Icon name="clock" size={18} />
                </div>
                <div className="grow">
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-petrol/60">
                    Öffnungszeiten
                  </h2>
                  <ul className="mt-2 max-w-xs space-y-1.5 text-anthracite/80">
                    {openingHours.map((row) => (
                      <li key={row.label} className="flex justify-between gap-6">
                        <span>{row.label}</span>
                        <span className="tabular-nums">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol text-lime">
                  <Icon name="route" size={18} />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-petrol/60">
                    Anfahrt
                  </h2>
                  <p className="mt-2 leading-relaxed text-anthracite/80">
                    3 Gehminuten vom Ostbahnhof, S-Bahn-Linien S1–S8, eigene
                    Fahrradstellplätze, Tiefgarage im Gebäude.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="overflow-hidden rounded-3xl border border-petrol/10">
                <iframe
                  title="MOTIO Health Lab auf der Karte"
                  src="https://www.google.com/maps?q=Atelierstra%C3%9Fe+10%2C+81671+M%C3%BCnchen&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>

          {/* Form column */}
          <FadeIn delay={140}>
            <div className="relative overflow-hidden rounded-4xl border border-petrol/10 bg-offwhite p-8 md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-grid-light" aria-hidden="true" />
              <div className="relative">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-petrol">
                      <Icon name="check" size={28} />
                    </div>
                    <p className="mt-7 font-heading text-2xl font-bold text-petrol md:text-3xl">
                      Danke für deine Nachricht!
                    </p>
                    <p className="mt-3 max-w-sm text-anthracite/70">
                      Wir melden uns innerhalb von 1–2 Werktagen bei dir.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="micro-label text-petrol/70">Terminanfrage</p>
                    <h2 className="mt-4 font-heading text-2xl font-bold text-petrol md:text-3xl">
                      Schreib uns
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-petrol/55"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Dein Name"
                          className="input-line"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-petrol/55"
                        >
                          E-Mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="du@beispiel.de"
                          className="input-line"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-petrol/55"
                        >
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="input-line"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="service"
                          className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-petrol/55"
                        >
                          Gewünschte Leistung
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="input-line appearance-none pr-8"
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
                        <Icon
                          name="chevronDown"
                          size={16}
                          className="pointer-events-none absolute bottom-4 right-0 text-petrol/50"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-petrol/55"
                        >
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Worum geht es bei dir?"
                          className="input-line resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-petrol px-8 py-4 font-heading font-semibold text-offwhite transition-all duration-200 hover:scale-[1.03] hover:bg-petrol-deep active:scale-[0.97]"
                      >
                        Anfrage senden
                        <Icon name="arrowRight" size={16} />
                      </button>
                      <p className="max-w-[220px] text-xs leading-relaxed text-anthracite/45">
                        Wir melden uns in der Regel innerhalb von 1–2 Werktagen.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ />
    </>
  );
}
