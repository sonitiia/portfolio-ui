import { heroMeta, site } from "@/content";

export function HeroSection() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {site.title}
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl sm:leading-[1.1]">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {site.tagline}
      </p>
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
            <dd className="mt-1.5 text-sm font-normal text-muted">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
