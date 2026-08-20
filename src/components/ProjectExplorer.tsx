"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { FILTERS, projects, type Filter } from "@/data/projects";

export function ProjectExplorer() {
  const [active, setActive] = useState<Filter>("All");
  const reduced = useReducedMotion();

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    for (const f of FILTERS) {
      if (f === "All") continue;
      map.set(f, projects.filter((p) => p.categories.includes(f)).length);
    }
    return map;
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active],
  );

  return (
    <>
      {/* filter rail */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="no-scrollbar -mx-[var(--pad-left)] mb-8 flex gap-2 overflow-x-auto px-[var(--pad-left)] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
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
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[12.5px] font-bold tracking-[-0.01em] transition-all duration-160 disabled:cursor-not-allowed disabled:opacity-35 ${
                isActive
                  ? "border-[var(--orange-border)] bg-[var(--orange-fill)] text-primary"
                  : "border-line bg-surface text-muted hover:border-[var(--orange-border)] hover:text-ink"
              }`}
            >
              {f}
              <span
                className={`ml-2 tabular-nums text-[11px] ${
                  isActive ? "text-primary/70" : "text-muted"
                }`}
              >
                {n}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} projects shown for {active}.
      </p>

      <motion.div layout={!reduced} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
              className="h-full"
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
