import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { courseraTrackCount, courseraTracks, stack } from "@/data/stack";

export function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="shell">
        <SectionHead
          eyebrow="Stack"
          title="Grouped by what it does."
          lead="Not a logo wall. Every tool here appears in a project on this page."
        />

        <dl className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line">
          {stack.map((g, i) => (
            <Reveal key={g.label} index={i}>
              <div className="grid gap-4 bg-background p-6 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-7">
                <dt className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  {g.label}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] font-semibold tracking-[-0.01em] text-ink/90 after:ml-2 after:text-faint after:content-['·'] last:after:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* ── Coursera skill tracks ── */}
        <div className="mt-14">
          <Reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3">
            <h3 className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
              Coursera skill tracks
            </h3>
            <p className="text-[13px] text-muted">
              {courseraTrackCount} tracked skill areas, in progress — not completed
              certifications.
            </p>
          </Reveal>

          <dl className="grid gap-8 md:grid-cols-2">
            {courseraTracks.map((g, i) => (
              <Reveal key={g.label} index={i}>
                <dt className="mb-2.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-muted">
                  {g.label}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="chip !text-[11px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
