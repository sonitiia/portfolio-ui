import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content";

export function EducationSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <SectionHeading
        id="education"
        eyebrow="Education"
        title="Academic background"
      />
      <div className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h3 className="text-lg font-medium text-heading">{education.degree}</h3>
        <p className="mt-1 text-body">{education.school}</p>
        <p className="mt-3 text-sm text-subtle">
          {education.period} · {education.location}
        </p>
      </div>
    </section>
  );
}
