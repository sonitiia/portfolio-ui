export type HeroMetaItem = {
  label: string;
  value: string;
  accent?: true;
};

export const heroMeta: readonly HeroMetaItem[] = [
  {
    label: "Domains",
    value: "E-commerce · Fintech · Sport",
  },
  {
    label: "Web & mobile",
    value: "React · React Native · Next.js",
  },
  {
    label: "Experience",
    value: "2.5+ years",
  },
  {
    label: "AI-assisted development",
    value: "Cursor · Claude Code · GitHub Copilot etc.",
    accent: true,
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  // { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
