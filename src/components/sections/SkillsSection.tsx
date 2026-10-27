import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiTools, skillGroups } from "@/content";

export function SkillsSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Tools I work with daily"
      />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-subtle">
        Frontend stack for shipping production UI — plus AI tooling I use to
        move faster on implementation, refactors, and reviews.
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
            <h3 className="text-sm font-medium text-accent-bright">
              AI-assisted development
            </h3>
            <p className="mt-1 max-w-xl text-sm text-subtle">
              Agents and assistants for coding, debugging, scaffolding, and
              design exploration.
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
  );
}
