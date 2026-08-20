"use client";

import { useState } from "react";
import { SectionHead } from "./SectionHead";
import { CertImage } from "./CertImage";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";
import { education } from "@/data/education";
import { site } from "@/data/site";

type Props = {
  /** Diploma image paths that exist in /public — resolved on the server. */
  available: string[];
};

export function Education({ available }: Props) {
  const have = new Set(available);
  const [shown, setShown] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="shell">
        <SectionHead
          eyebrow="Education"
          title="Hardware foundation. AI specialization."
          lead="Mechatronics taught the physics under the signal. The MSc taught what to do with it."
        />

        <ol className="grid gap-5 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal as="li" key={e.num} index={i} className="h-full">
              <article className="card h-full p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[11px] font-extrabold tabular-nums tracking-[0.18em] text-primary">
                    {e.num}
                  </span>
                  <span className="text-[12px] font-semibold tabular-nums text-muted">
                    {e.period}
                  </span>
                </div>

                <h3 className="mt-3 text-[19px] font-extrabold leading-snug tracking-[-0.022em] text-ink text-pretty">
                  {e.degree}
                </h3>
                <p className="mt-1.5 text-[14px] font-semibold text-muted">
                  {e.school}
                  {e.location && <span className="text-muted"> · {e.location}</span>}
                </p>

                {e.distinction && (
                  <p className="mt-3">
                    <span className="chip chip-accent">{e.distinction}</span>
                  </p>
                )}

                <p className="mt-4 text-[14px] leading-[1.55] text-muted text-pretty">
                  {e.detail}
                </p>

                {e.certificate && have.has(e.certificate) && (
                  <div className="mt-5">
                    <CertImage
                      src={e.certificate}
                      alt={e.certificateAlt ?? `${e.degree} certificate`}
                      exists
                      onOpen={() =>
                        setShown({
                          src: e.certificate!,
                          caption: `${e.degree} — ${e.school}`,
                        })
                      }
                      className="aspect-[4/3] object-contain"
                    />
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                      Degree certificate
                    </p>
                  </div>
                )}

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {e.coursework.map((c) => (
                    <li key={c} className="chip !text-[11px]">
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal index={3} className="mt-6">
          <div className="card flex flex-wrap items-center justify-between gap-x-8 gap-y-3 p-5">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-muted">
              Languages
            </p>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {site.languages.map((l) => (
                <li key={l.name} className="text-[14.5px]">
                  <span className="font-bold text-ink">{l.name}</span>{" "}
                  <span className="text-muted">— {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Lightbox
        open={Boolean(shown)}
        src={shown?.src}
        caption={shown?.caption}
        onClose={() => setShown(null)}
      />
    </section>
  );
}
