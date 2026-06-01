import type { CSSProperties } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  aiTools,
  education,
  experience,
  heroMeta,
  navItems,
  showcaseProjects,
  site,
  skillGroups,
} from "@/data/content";

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page text-body">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-line bg-header backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="text-sm font-semibold tracking-tight text-heading">
            {site.name.split(" ")[0]}
            <span className="text-subtle">.</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-colors hover:text-heading"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={site.cvPath}
              download
              className="rounded-full border border-line-strong bg-elevated px-4 py-2 text-xs font-medium text-on-elevated transition hover:border-line-strong-hover hover:bg-elevated-hover"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <section className="border-b border-line py-20 sm:py-28">
          <p className="text-sm font-medium text-accent">{site.title}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl sm:leading-[1.1]">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full bg-btn-primary px-5 py-2.5 text-sm font-medium text-inverted transition hover:bg-btn-primary-hover"
            >
              Get in touch
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-on-elevated transition hover:border-line-strong-hover"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-on-elevated transition hover:border-line-strong-hover"
            >
              LinkedIn
            </a>
          </div>
          <dl className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroMeta.map((item) => (
              <div
                key={item.label}
                className={
                  item.accent
                    ? "rounded-xl border border-accent-soft bg-accent-surface px-4 py-3.5"
                    : "rounded-xl border border-line-soft bg-surface px-4 py-3.5"
                }
              >
                <dt
                  className={
                    item.accent
                      ? "text-[11px] font-medium uppercase tracking-wider text-accent-label"
                      : "text-[11px] font-medium uppercase tracking-wider text-faint"
                  }
                >
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-normal text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <SectionHeading id="about" eyebrow="About" title="Crafting interfaces that ship" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            I&apos;m a frontend engineer with 2.5 years of experience, focused on polished,
            performant UIs across web and mobile. From real-time dashboards and payment flows to
            design-system quality, I care about detail in both pixels and developer experience.
          </p>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <SectionHeading id="skills" eyebrow="Skills" title="Tools I work with daily" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-subtle">
            Frontend stack for shipping production UI — plus AI tooling I use to move faster on
            implementation, refactors, and reviews.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-line bg-surface-raised p-5"
              >
                <h3 className="text-sm font-medium text-heading">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line-solid bg-page px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-accent-soft bg-accent-panel p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-medium text-accent-bright">AI-assisted development</h3>
                <p className="mt-1 max-w-xl text-sm text-subtle">
                  Agents and assistants for coding, debugging, scaffolding, and design exploration.
                </p>
              </div>
              <span className="w-fit rounded-full border border-accent-badge-border bg-accent-badge-bg px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-bright">
                Daily workflow
              </span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-accent-chip-border bg-accent-chip-bg px-3 py-1 text-xs text-body"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <SectionHeading id="experience" eyebrow="Experience" title="Where I&apos;ve built" />
          <ol className="mt-10 space-y-8">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-heading">{job.role}</h3>
                    <p className="text-body">{job.company}</p>
                  </div>
                  <div className="text-sm text-subtle sm:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="mt-5 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted marker:text-faint">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {job.links ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {job.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-accent hover:text-accent-bright"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <SectionHeading
            id="work"
            eyebrow="Selected work"
            title="Showcases (placeholders for now)"
          />
          <p className="mt-4 max-w-2xl text-sm text-subtle">
            Mock project cards — replace titles, copy, and links when your case studies are ready.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {showcaseProjects.map((project, index) => (
              <li
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-line-strong"
              >
                <div
                  className="showcase-thumb relative flex h-36 items-end p-5"
                  style={{ "--showcase-index": index } as CSSProperties}
                >
                  <span className="rounded-full border border-[var(--showcase-badge-border)] bg-[var(--showcase-badge-bg)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-body backdrop-blur-sm">
                    Coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-medium text-heading">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-subtle">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-tag px-2 py-0.5 text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    disabled
                    className="mt-5 w-full cursor-not-allowed rounded-lg border border-line-solid py-2 text-sm text-faint"
                    aria-disabled
                  >
                    View case study
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <SectionHeading id="education" eyebrow="Education" title="Academic background" />
          <div className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-medium text-heading">{education.degree}</h3>
            <p className="mt-1 text-body">{education.school}</p>
            <p className="mt-3 text-sm text-subtle">
              {education.period} · {education.location}
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something"
            id="contact-heading"
          />
          <p className="mt-6 max-w-xl text-muted">
            Open to frontend roles and collaborations. For cooperation, mail me — I&apos;ll get back
            to you soon.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="text-lg font-medium text-heading underline decoration-line-solid underline-offset-4 hover:decoration-line-strong"
            >
              {site.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 text-sm text-subtle sm:flex-row sm:items-center sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={site.links.github} className="hover:text-body">
              GitHub
            </a>
            <a href={site.links.linkedin} className="hover:text-body">
              LinkedIn
            </a>
            <a href={site.cvPath} download className="hover:text-body">
              CV (PDF)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
