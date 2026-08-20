"use client";

import { useState } from "react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { CertImage } from "./CertImage";
import { Lightbox } from "./Lightbox";
import { ArrowUpRight, SparkIcon } from "./Icons";
import { certifications, certCount, featuredCert, type Cert } from "@/data/certifications";

type Props = {
  /** Image paths that actually exist in /public — resolved on the server. */
  available: string[];
};

export function Certifications({ available }: Props) {
  const [shown, setShown] = useState<Cert | null>(null);
  const have = new Set(available);

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="shell">
        <SectionHead
          eyebrow="Certifications"
          title="Verified, not claimed."
          lead="Vendor certifications, a graded specialization, and the course record underneath them."
          aside={
            <span className="text-[13px] text-muted">
              <span className="metric-value !text-[20px]">{certCount}</span> credentials
            </span>
          }
        />

        {/* ── featured ── */}
        <Reveal className="mb-12">
          <article
            className="card overflow-hidden p-0"
            style={{ borderColor: "var(--orange-border)" }}
          >
            <div className="grid gap-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="border-b border-line p-5 md:border-b-0 md:border-r">
                <CertImage
                  src={featuredCert.image}
                  alt={`${featuredCert.title} certificate`}
                  exists={have.has(featuredCert.image)}
                  issuer={featuredCert.issuer}
                  onOpen={have.has(featuredCert.image) ? () => setShown(featuredCert) : undefined}
                  large
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  <SparkIcon className="text-[13px]" />
                  Featured credential
                </p>
                <h3 className="text-[clamp(20px,2.8vw,26px)] font-extrabold leading-tight tracking-[-0.025em] text-ink text-balance">
                  {featuredCert.title}
                </h3>
                <p className="mt-2 text-[13.5px] font-semibold text-muted">
                  {featuredCert.issuer} · {featuredCert.year}
                </p>
                <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.55] text-muted text-pretty">
                  {featuredCert.takeaway}
                </p>
                <p className="mt-5 text-[13px] leading-snug text-muted">
                  Earned alongside the SAP role — the same stack used in production for
                  automated technical fault reporting.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── grouped grid ── */}
        <div className="grid gap-12">
          {certifications.map((group) => (
            <div key={group.group}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3">
                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  {group.group}
                </h3>
                <p className="text-[13px] text-muted">{group.blurb}</p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((c, i) => (
                  <Reveal as="li" key={c.id} index={i} className="h-full">
                    <article className="card h-full p-4">
                      <CertImage
                        src={c.image}
                        alt={`${c.title} certificate`}
                        exists={have.has(c.image)}
                        issuer={c.issuer}
                        onOpen={have.has(c.image) ? () => setShown(c) : undefined}
                        className="mb-4 aspect-[4/3] object-contain"
                      />
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
                          {c.issuer}
                        </p>
                        <p className="shrink-0 text-[11px] font-bold tabular-nums text-muted">
                          {c.year}
                        </p>
                      </div>
                      <h4 className="mt-1.5 text-[15.5px] font-bold leading-snug tracking-[-0.015em] text-ink text-pretty">
                        {c.title}
                      </h4>
                      <p className="mt-2 text-[13px] leading-snug text-muted text-pretty">
                        {c.takeaway}
                      </p>
                      {c.url && (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[12.5px] font-bold text-primary transition-opacity hover:opacity-80"
                        >
                          Verify <ArrowUpRight className="text-[13px]" />
                        </a>
                      )}
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={Boolean(shown)}
        src={shown?.image}
        caption={shown ? `${shown.title} — ${shown.issuer}, ${shown.year}` : undefined}
        onClose={() => setShown(null)}
      />
    </section>
  );
}
