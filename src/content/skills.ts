export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
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
  "GitHub Copilot",
  "OpenAI Codex",
  "CodeRabbit",
  "Claude",
  "Gemini",
] as const;
