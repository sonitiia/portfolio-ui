export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
