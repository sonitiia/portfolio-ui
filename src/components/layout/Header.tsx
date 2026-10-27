import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/content/profile";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-header backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <span className="text-sm font-semibold tracking-tight text-heading">
          {site.name.split(" ")[0]}
          <span className="text-subtle">.</span>
        </span>
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
  );
}
