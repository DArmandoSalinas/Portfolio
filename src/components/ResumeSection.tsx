import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { ArrowUpRight, DownloadIcon } from "./Icons";
import { principles } from "@/data/stack";
import { site } from "@/data/site";

const HOW_TO_READ = [
  "Production systems and founder work lead. Coursework sits at the bottom on purpose.",
  "Every metric is test-set unless the card says otherwise.",
  "Healthcare projects are research. None of them is a cleared clinical device.",
  "ARMATUS is a shipped product with real users — not a class project.",
  "Where a system is deployed, the live URL is on the card. Click it.",
];

export function ResumeSection() {
  return (
    <section id="resume" className="section" aria-labelledby="resume-title">
      <div className="shell">
        <SectionHead
          eyebrow="Resume"
          title="Take it with you."
          lead="One page, print-clean, kept in sync with everything on this site."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <div className="card h-full p-6 sm:p-8">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
                How to read this CV
              </p>
              <ul className="mt-5 grid gap-3">
                {HOW_TO_READ.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-snug text-muted">
                    <span aria-hidden className="mt-[0.6em] h-px w-3.5 shrink-0 bg-primary/60" />
                    <span className="text-ink/90">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a href={site.cv} download className="btn btn-primary">
                  <DownloadIcon /> Download CV (PDF)
                </a>
                <a href="/resume" className="btn btn-ghost">
                  Read in browser <ArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal index={1} className="h-full">
            <div className="card h-full p-6 sm:p-8">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
                How I work
              </p>
              <ol className="mt-5 grid gap-5">
                {principles.map((p) => (
                  <li key={p.num}>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-extrabold tabular-nums tracking-[0.18em] text-primary">
                        {p.num}
                      </span>
                      <span className="text-[15.5px] font-bold tracking-[-0.02em] text-ink">
                        {p.label}
                      </span>
                    </div>
                    <p className="mt-1 pl-[calc(0.75rem+2.4ch)] text-[13.5px] leading-snug text-muted text-pretty">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
