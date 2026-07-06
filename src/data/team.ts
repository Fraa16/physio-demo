export interface TeamMember {
  name: string;
  role: string;
  note: string;
  founder?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Matteo Brandt",
    role: "Physiotherapeut · Sportwissenschaftler · Gründer",
    note: "Spezialist für Return-to-Sport-Programme und Athletiktraining – mit mehrjähriger Erfahrung im Nachwuchsleistungszentrum eines Bundesliga-Vereins.",
    founder: true,
  },
  {
    name: "Sophia Lindner",
    role: "Physiotherapeutin · Osteopathin · Yogalehrerin · Gründerin",
    note: "Verbindet Osteopathie, Yoga und Faszientherapie zu einem ganzheitlichen Behandlungsansatz.",
    founder: true,
  },
  {
    name: "Julia Ahrens",
    role: "Physiotherapeutin",
    note: "Schwerpunkt Rückenschmerzen und Haltung – vom Büroalltag bis zur Reha.",
  },
  {
    name: "Tom Winkler",
    role: "Physiotherapeut",
    note: "Schwerpunkt Sportrehabilitation und Belastungsaufbau nach Verletzungen.",
  },
  {
    name: "Elena Rossi",
    role: "Yoga- & Faszientrainerin",
    note: "Begleitet dich bei Beweglichkeit, Atmung und Regeneration – einzeln oder in Kleingruppen.",
  },
];

export const founderBios = [
  {
    name: "Matteo Brandt",
    role: "Gründer & Leitung Sportphysiotherapie",
    bio: "Matteo Brandt leitet den Bereich Sportphysiotherapie bei MOTIO. Der Physiotherapeut (B.Sc.) und Sportwissenschaftler (M.Sc.) hat mehrere Jahre im Nachwuchsleistungszentrum eines Bundesliga-Vereins gearbeitet, ist zertifizierter Athletiktrainer und hat sich auf Return-to-Sport-Programme spezialisiert.",
  },
  {
    name: "Sophia Lindner",
    role: "Gründerin & Leitung Prävention & Wellness",
    bio: "Sophia Lindner leitet den Bereich Prävention & Wellness. Als Physiotherapeutin, Heilpraktikerin für Osteopathie und Yogalehrerin (500h RYT) mit Zusatzausbildung in Faszientherapie bringt sie einen ganzheitlichen Blick auf Bewegungsgesundheit und Regeneration in jede Behandlung ein.",
  },
];
