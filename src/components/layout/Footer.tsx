import { site } from "@/content/site";

export function Footer() {
  return (
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
  );
}
