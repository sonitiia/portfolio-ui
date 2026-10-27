import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content";

export function ExperienceSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <SectionHeading
        id="experience"
        eyebrow="Experience"
        title="Where I've built"
      />
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
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {job.domain}
                </p>
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
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
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
  );
}
