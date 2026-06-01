# portfolio-ui

Single-page portfolio for **Sofiia Tymechko** — frontend engineer. Built with Next.js, Tailwind CSS, and Biome.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Biome](https://biomejs.dev/) — lint & format
- [Dependabot](https://docs.github.com/en/code-security/dependabot) — weekly npm updates

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run Biome checks |
| `npm run lint:fix` | Fix lint issues |
| `npm run format` | Format with Biome |

## Customize

- **Copy & CV data:** `src/data/content.ts`
- **Layout & sections:** `src/components/PortfolioPage.tsx`
- **CV PDF:** replace `public/SofiiaTymechko.CV.pdf`
- **Showcase projects:** update `showcaseProjects` in `content.ts` and wire real links in the Work section
