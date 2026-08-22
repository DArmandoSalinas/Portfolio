import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

export function Experience({ locale }: { locale: Locale }) {
  const { ui: t, experience } = getContent(locale);

  return (
    <section id="experience" className="section band" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHead
          id="experience-title"
          label={t.experience.label}
          title={t.experience.title}
          lead={t.experience.lead}
        />

        <ol className="relative">
          <span className="spine" aria-hidden />

          {experience.map((role, i) => (
            <Reveal as="li" key={role.org} index={i} className="relative pl-7 sm:pl-9">
              <span
                aria-hidden
                className="marker absolute top-[2.9rem]"
                data-current={role.current ? "true" : "false"}
              />

              <article className="row-hover grid gap-x-12 gap-y-4 border-t border-line py-9 pr-4 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:py-11">
                <div>
                  <h3 className="h3 text-[clamp(1.2rem,2.1vw,1.5rem)]">
                    {role.orgUrl ? (
                      <a
                        href={role.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link inline-flex items-center gap-1.5"
                      >
                        {role.org}
                        <ArrowUpRight className="text-[15px]" />
                      </a>
                    ) : (
                      role.org
                    )}
                  </h3>
                  <p className="readout mt-3 text-[13px] text-muted">{role.period}</p>
                  {role.location && (
                    <p className="mt-1 text-[13.5px] leading-snug text-muted">
                      {role.location}
                    </p>
                  )}
                  {role.current && <p className="flag mt-3.5">{t.current}</p>}
                </div>

                <div className="max-w-[62ch]">
                  <p className="text-[clamp(1.05rem,1.6vw,1.2rem)] font-semibold text-ink">
                    {role.title}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.62] text-body text-pretty">
                    {role.summary}
                  </p>

                  <ul className="mt-5 grid gap-2.5">
                    {role.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-5 text-[15px] leading-[1.55] text-muted text-pretty"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.62em] h-px w-[11px] bg-line-strong"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
