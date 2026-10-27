export type ExperienceEntry = {
  company: string;
  role: string;
  domain: string;
  period: string;
  location: string;
  highlights: readonly string[];
  links?: readonly { label: string; href: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Synergy Way",
    role: "Frontend Engineer",
    domain: "Fintech",
    period: "Apr 2024 - Aug 2026",
    location: "Lviv, Hybrid",
    highlights: [
      "Shipped responsive web and mobile apps with Vite, React, React Native, Next.js, TypeScript, Tailwind, shadcn/ui, React Native Reusables.",
      "Integrated real-time data via SSE and WebSocket; built rich UIs with Infinite Table, FlashList, TradingView, ECharts, and Skia.",
      "Implemented JWT and Google auth, TanStack Query caching, Stripe payments, and Stream Chat messaging.",
      "Set up Sentry monitoring, CI/CD with SOPS, Dependabot, CodeRabbit, and Docker DevContainers.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    domain: "E-commerce",
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
    domain: "Sport",
    period: "Sep 2022 - Feb 2023",
    location: "Remote",
    highlights: [
      "Developed a responsive PWA with React, TypeScript, and Material UI with pixel-perfect Figma fidelity.",
      "Built dashboards, dynamic forms, modals, and reusable components with JWT auth and Axios integrations.",
      "Delivered animated landing pages with improved load times and responsiveness.",
    ],
  },
];
