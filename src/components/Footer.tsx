import { LogoHalo } from "./LogoHalo";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoHalo size={28} bare />
          <div>
            <p className="text-[13px] font-semibold text-ink">
              © {year} {site.name}
            </p>
            <p className="text-[12.5px] text-muted">
              La fuerza no se improvisa. Se arma.
            </p>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { label: "GitHub", href: site.links.github },
            { label: "LinkedIn", href: site.links.linkedin },
            { label: "ARMATUS", href: site.links.armatus },
            { label: "Email", href: `mailto:${site.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
