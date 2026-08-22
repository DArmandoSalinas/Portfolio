"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Disclosure } from "./Disclosure";
import { FILTERS, type Filter, type Project } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { filterLabel, getUi } from "@/i18n/ui";

export function ProjectExplorer({
  projects,
  locale,
}: {
  projects: Project[];
  locale: Locale;
}) {
  const t = getUi(locale);
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    for (const f of FILTERS) {
      if (f === "All") continue;
      map.set(f, projects.filter((p) => p.categories.includes(f)).length);
    }
    return map;
  }, [projects]);

  const visible = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.categories.includes(active)),
    [active, projects],
  );

  return (
    <Disclosure label={t.archive} title={t.allProjects(projects.length)}>
      <div
        role="group"
        aria-label={t.filterAria}
        className="no-scrollbar -mx-[var(--pad-left)] flex gap-2 overflow-x-auto px-[var(--pad-left)] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {FILTERS.map((f) => {
          const n = counts.get(f) ?? 0;
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              disabled={n === 0}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40 ${
                isActive
                  ? "border-signal bg-signal text-white"
                  : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {filterLabel(locale, f)}
              <span className="readout ml-2 text-[12px]">{n}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {t.shownFor(visible.length, filterLabel(locale, active))}
      </p>

      <ul className="mt-9 grid gap-x-12 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} locale={locale} />
        ))}
      </ul>
    </Disclosure>
  );
}
