import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <SectionHeading
        id="about"
        eyebrow="About"
        title="Crafting interfaces that ship"
      />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        I&apos;m a frontend engineer with 2.5 years+ of experience, focused on
        polished, performant UIs across web and mobile. From real-time
        dashboards and payment flows to design-system quality, I care about
        detail in both pixels and developer experience.
      </p>
    </section>
  );
}
