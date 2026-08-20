import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { stack } from "@/data/stack";

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
      </div>
    </section>
  );
}
