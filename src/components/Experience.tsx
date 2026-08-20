import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHead
          eyebrow="Experience"
          title="Four roles. One protocol."
          lead="Research, product and enterprise — each one shipped something a person could actually use."
        />

        <ol className="relative">
          {/* spine */}
          <span
            aria-hidden
            className="absolute left-0 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/45 via-line to-transparent md:block"
          />

          {experience.map((role, i) => (
            <Reveal as="li" key={role.num} index={i} className="relative md:pl-10">
              <span
                aria-hidden
                className="absolute left-[-4.5px] top-[0.6rem] hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-black md:block"
              />

              <article className="border-t border-line py-8 first:border-t-0 md:py-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-[11px] font-extrabold tabular-nums tracking-[0.18em] text-primary">
                    {role.num}
                  </span>
                  <h3 className="text-[clamp(19px,2.6vw,24px)] font-extrabold tracking-[-0.022em] text-ink">
                    {role.title}
                  </h3>
                  {role.current && (
                    <span className="chip chip-accent !text-[10.5px] !uppercase !tracking-[0.12em]">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-muted">
                  {role.orgUrl ? (
                    <a
                      href={role.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-ink transition-colors hover:text-primary"
                    >
                      {role.org}
                      <ArrowUpRight className="text-[12px]" />
                    </a>
                  ) : (
                    <span className="font-bold text-ink">{role.org}</span>
                  )}
                  <span aria-hidden className="text-faint">·</span>
                  <span>{role.period}</span>
                  {role.location && (
                    <>
                      <span aria-hidden className="text-faint">·</span>
                      <span>{role.location}</span>
                    </>
                  )}
                </p>

                <p className="mt-4 max-w-[46rem] text-[16px] leading-[1.55] text-ink/90 text-pretty">
                  {role.summary}
                </p>

                <ul className="mt-4 grid max-w-[48rem] gap-2">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[14.5px] leading-snug text-muted">
                      <span
                        aria-hidden
                        className="mt-[0.62em] h-px w-3 shrink-0 bg-primary/60"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
