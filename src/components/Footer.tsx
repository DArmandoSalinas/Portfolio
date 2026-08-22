"use client";

import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">
          © {year} {site.name}
        </p>
        <nav aria-label={t.footerAria} className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { label: "Email", href: `mailto:${site.email}` },
            { label: "LinkedIn", href: site.links.linkedin },
            { label: "GitHub", href: site.links.github },
            { label: t.cv, href: site.cv },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[13.5px] text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
