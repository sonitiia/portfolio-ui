import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        id="contact-heading"
      />
      <p className="mt-6 max-w-xl text-muted">
        Open to frontend roles and collaborations. For cooperation, e-mail me —
        I&apos;ll get back to you soon.
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
  );
}
