export const site = {
  name: "Sofiia Tymechko",
  title: "Frontend Engineer",
  tagline:
    "Building responsive web and mobile experiences with React, Next.js, and TypeScript.",
  email: "sofiatymechko@gmail.com",
  location: "Remote",
  cvPath: "/SofiiaTymechko.CV.pdf",
  links: {
    github: "https://github.com/sonitiia",
    linkedin: "https://www.linkedin.com/in/sofi-tymechko/",
  },
} as const;

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
    value: "Cursor · Claude Code",
    accent: true,
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Core",
    items: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    title: "UI & styling",
    items: [
      "Tailwind CSS",
      "Nativewind",
      "Material UI",
      "styled-components",
      "shadcn/ui",
      "React Native Reusables",
    ],
  },
  {
    title: "Data & state",
    items: ["Redux Toolkit", "TanStack Query", "Axios", "REST API", "JWT Auth"],
  },
  {
    title: "APIs & integrations",
    items: ["Stripe API", "Monobank API", "Nova Post API"],
  },
  {
    title: "Charts & data UI",
    items: ["TradingView", "Recharts", "ECharts", "Skia", "Infinite Table"],
  },
  {
    title: "Testing & monitoring",
    items: ["Vitest", "Jest", "Playwright", "Sentry"],
  },
  {
    title: "Tooling & CI/CD",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "Dependabot",
      "CI/CD",
      "Docker (DevContainers)",
      "SOPS",
      "Figma",
      "Postman",
      "VS Code",
      "Volta",
    ],
  },
] as const;

export const aiTools = [
  "Cursor",
  "Claude Code",
  "CodeRabbit",
  "GitHub Copilot",
  "Claude",
  "Gemini",
  "OpenAI Codex",
  "ChatGPT",
  "v0",
  "Windsurf",
  "MCP",
] as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: readonly string[];
  links?: readonly { label: string; href: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Synergy Way",
    role: "Frontend Engineer",
    period: "Apr 2024 - present",
    location: "Lviv, Hybrid",
    highlights: [
      "Shipped responsive web and mobile apps with Vite, React, React Native, Next.js, TypeScript, and Tailwind.",
      "Integrated real-time data via SSE and WebSocket; built rich UIs with Infinite Table, FlashList, TradingView, ECharts, and Skia.",
      "Implemented JWT and Google auth, TanStack Query caching, Stripe payments, and Stream Chat messaging.",
      "Set up Sentry monitoring, CI/CD with SOPS, Dependabot, CodeRabbit, and Docker DevContainers.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "Mar 2023 - Mar 2024",
    location: "Remote",
    highlights: [
      "Built a production web app from scratch with React, Material UI, and styled-components from Figma designs.",
      "Integrated Monobank and Nova Post APIs for payments and delivery with dynamic location selection.",
      "Implemented JWT authentication and optimized API interactions for production performance.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/SHEVA-INC/sheva-ui" }],
  },
  {
    company: "Proga Tech",
    role: "Frontend Engineer",
    period: "Sep 2022 - Feb 2023",
    location: "Remote",
    highlights: [
      "Developed a responsive PWA with React, TypeScript, and Material UI with pixel-perfect Figma fidelity.",
      "Built dashboards, dynamic forms, modals, and reusable components with JWT auth and Axios integrations.",
      "Delivered animated landing pages with improved load times and responsiveness.",
    ],
  },
];

export type ShowcaseProject = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  status: "placeholder";
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: "realtime-dashboard",
    title: "Realtime analytics dashboard",
    description:
      "Mock showcase — trading-style charts, live SSE feeds, and dense data tables. Replace with your project when ready.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "ECharts"],
    status: "placeholder",
  },
  {
    slug: "commerce-checkout",
    title: "Commerce checkout flow",
    description:
      "Mock showcase — Stripe payments, cart state, and responsive checkout UI. Swap in a real case study later.",
    tags: ["React", "Stripe", "Tailwind CSS", "JWT"],
    status: "placeholder",
  },
  {
    slug: "mobile-messaging",
    title: "Cross-platform messaging",
    description:
      "Mock showcase — chat threads, push-friendly layout, and shared components across web and native.",
    tags: ["React Native", "Stream Chat", "TypeScript"],
    status: "placeholder",
  },
  {
    slug: "design-system",
    title: "Component library & docs",
    description:
      "Mock showcase — accessible primitives, theming tokens, and Storybook-style documentation.",
    tags: ["shadcn/ui", "Vitest", "Playwright"],
    status: "placeholder",
  },
];

export const education = {
  school: "Ivan Franko National University of Lviv",
  degree: "Master of Computer Science",
  period: "Sep 2020 – Dec 2025",
  location: "Lviv",
} as const;
