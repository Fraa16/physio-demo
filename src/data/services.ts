export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  intro: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "sport",
    title: "Sportphysiotherapie & Leistungssport",
    intro:
      "Verletzungsreha, Return-to-Sport und Trainingstherapie nach den Standards des Profisports.",
    services: [
      {
        id: "verletzungsreha",
        name: "Sportphysiotherapie & Verletzungsreha",
        description:
          "Gezielte Behandlung akuter und chronischer Sportverletzungen, damit du sicher und nachhaltig wieder belastbar wirst.",
      },
      {
        id: "return-to-sport",
        name: "Return-to-Sport-Programme",
        description:
          "Strukturierter Wiedereinstieg ins Training nach Verletzung oder OP, mit klaren Belastungsstufen und regelmäßigen Kontrollmessungen.",
      },
      {
        id: "bewegungsanalyse",
        name: "3D-Bewegungsanalyse & Ganganalyse",
        description:
          "Wir erfassen deinen Bewegungsablauf digital und erkennen Dysbalancen, bevor sie zu Beschwerden werden.",
      },
      {
        id: "leistungsdiagnostik",
        name: "Leistungsdiagnostik (Kraft, Beweglichkeit, Belastbarkeit)",
        description:
          "Deine Kraft, Beweglichkeit und Belastbarkeit im Test – als Grundlage für Trainingssteuerung und Verletzungsprävention.",
      },
      {
        id: "manuelle-therapie",
        name: "Manuelle Therapie",
        description:
          "Gezielte Handgriffe zur Behandlung von Gelenk- und Weichteilfunktionsstörungen, abgestimmt auf deinen Befund.",
      },
      {
        id: "stosswellentherapie",
        name: "Stoßwellentherapie",
        description:
          "Fokussierte Schallwellen regen die Selbstheilung bei chronischen Sehnen- und Muskelbeschwerden an.",
      },
      {
        id: "kinesio-taping",
        name: "Kinesio-Taping",
        description:
          "Elastische Tapes unterstützen Muskulatur und Gelenke im Alltag und beim Sport, ganz ohne Bewegungseinschränkung.",
      },
      {
        id: "athletiktherapie",
        name: "Athletik- und Trainingstherapie",
        description:
          "Individuelles Kraft- und Bewegungstraining, das Reha-Ziele mit sportartspezifischen Anforderungen verbindet.",
      },
    ],
  },
  {
    id: "praevention",
    title: "Prävention & Wellness",
    intro:
      "Yoga, Massage, Osteopathie und Faszientherapie für mehr Beweglichkeit im Alltag.",
    services: [
      {
        id: "yoga",
        name: "Yoga & funktionelles Beweglichkeitstraining (Einzel & Kleingruppen)",
        description:
          "In Einzel- oder Kleingruppenstunden verbesserst du gezielt Beweglichkeit, Stabilität und Körperwahrnehmung.",
      },
      {
        id: "massage",
        name: "Klassische Massage & Sportmassage",
        description:
          "Löst Verspannungen, unterstützt die Regeneration und tut einfach gut – vor und nach dem Sport.",
      },
      {
        id: "osteopathie",
        name: "Osteopathie",
        description:
          "Ganzheitliche, manuelle Untersuchung und Behandlung von Bewegungseinschränkungen im gesamten Körpersystem.",
      },
      {
        id: "faszientherapie",
        name: "Faszientherapie & Myofasziale Techniken",
        description:
          "Gezielte Techniken für dein Bindegewebe, die Beweglichkeit verbessern und Schmerzen lindern können.",
      },
      {
        id: "atemtraining",
        name: "Atem- und Entspannungstraining",
        description:
          "Bewusste Atmung als Werkzeug für Regeneration, Stressreduktion und bessere Körperspannung.",
      },
      {
        id: "haltungsanalyse",
        name: "Ganzheitliche Haltungs- und Bewegungsanalyse",
        description:
          "Wir schauen uns deine Haltung im Alltag an und entwickeln daraus konkrete Ansatzpunkte für dein Training.",
      },
    ],
  },
  {
    id: "technologie",
    title: "Technologie & Digital-Angebote",
    intro:
      "3D-Bewegungsanalyse, Wearables und digitale Trainingsbegleitung für messbare Fortschritte.",
    services: [
      {
        id: "app-training",
        name: "App-basierte Heimtrainingsprogramme mit Fortschritts-Tracking",
        description:
          "Deine Übungen als individueller Plan in der App – inklusive Videos und Fortschritts-Tracking auch nach der Behandlung.",
      },
      {
        id: "wearables",
        name: "Wearable-Integration (Herzfrequenz-/Belastungsmonitoring)",
        description:
          "Herzfrequenz- und Belastungsdaten aus deinem Wearable fließen direkt in Trainingssteuerung und Diagnostik ein.",
      },
      {
        id: "terminbuchung",
        name: "Digitale Terminbuchung & Patientenportal",
        description:
          "Termine buchen, Unterlagen einsehen, Trainingspläne abrufen – unkompliziert online.",
      },
    ],
  },
];
