export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Team", to: "/team" },
  { label: "Kontakt", to: "/kontakt" },
];
