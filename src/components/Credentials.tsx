"use client";

import { useMemo, useState } from "react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { CertImage } from "./CertImage";
import { Lightbox } from "./Lightbox";
import { Disclosure } from "./Disclosure";
import { ArrowUpRight } from "./Icons";
import { type Cert } from "@/data/certifications";
import { courseraTrackCount } from "@/data/stack";
import { getContent } from "@/i18n/content";
import { getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

type Shown = { src: string; caption: string };

type Headline = {
  id: string;
  title: string;
  issuer: string;
  meta: string;
  note: string;
  image?: string;
  alt: string;
};

export function Credentials({
  available,
  locale,
}: {
  available: string[];
  locale: Locale;
}) {
  const t = getUi(locale);
  const {
    certifications,
    certCount,
    education,
    coursera,
    site: siteCopy,
  } = getContent(locale);
  const [shown, setShown] = useState<Shown | null>(null);
  const have = useMemo(() => new Set(available), [available]);

  const headlines = useMemo<Headline[]>(() => {
    const flat = certifications.flatMap((g) => g.items);
    const sap = flat.find((c) => c.id === "sap-genai");
    const rockwell = flat.find((c) => c.id === "rockwell");
    const distinction = education[0].distinction
      ? ` · ${education[0].distinction}`
      : "";

    return [
      {
        id: "msc",
        title: education[0].degree,
        issuer: education[0].school,
        meta: `${education[0].period}${distinction}`,
        note: education[0].detail,
        image: education[0].certificate,
        alt: education[0].certificateAlt ?? education[0].degree,
      },
      {
        id: "mecatronica",
        title: education[1].degree,
        issuer: education[1].school,
        meta: education[1].period,
        note: education[1].detail,
        image: education[1].certificate,
        alt: education[1].certificateAlt ?? education[1].degree,
      },
      {
        id: "sap",
        title: sap?.title ?? "SAP Certified — Generative AI Developer",
        issuer: sap?.issuer ?? "SAP",
        meta: sap?.year ?? "2026",
        note: sap?.takeaway ?? "",
        image: sap?.image,
        alt: "SAP Generative AI Developer certificate",
      },
      {
        id: "rockwell",
        title: rockwell?.title ?? "Rockwell Automation recognition",
        issuer: rockwell?.issuer ?? "Rockwell Automation",
        meta: rockwell?.year ?? "Dec 2025",
        note: rockwell?.takeaway ?? "",
        image: rockwell?.image,
        alt: "Rockwell Automation recognition certificate",
      },
    ];
  }, [certifications, education]);

  const headlineIds = new Set(["sap-genai", "rockwell"]);
  const archive = certifications
    .map((g) => ({ ...g, items: g.items.filter((c) => !headlineIds.has(c.id)) }))
    .filter((g) => g.items.length > 0);

  const open = (c: Cert) =>
    setShown({ src: c.image, caption: `${c.title} — ${c.issuer}, ${c.year}` });

  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <div className="shell">
        <SectionHead
          id="credentials-title"
          label={t.credentials.label}
          title={t.credentials.title}
          lead={t.credentials.lead}
          meta={t.onFile(certCount + education.length)}
        />

        <ul className="grid gap-6 lg:grid-cols-2">
          {headlines.map((h, i) => (
            <Reveal as="li" key={h.id} index={i} className="h-full">
              <article className="plate plate-link flex h-full flex-col overflow-hidden p-0">
                {h.image && (
                  <CertImage
                    src={h.image}
                    alt={h.alt}
                    exists={have.has(h.image)}
                    issuer={h.issuer}
                    onOpen={
                      have.has(h.image)
                        ? () => setShown({ src: h.image!, caption: `${h.title} — ${h.issuer}` })
                        : undefined
                    }
                    ratio="aspect-[4/3]"
                    className="w-full rounded-none"
                  />
                )}
                <div className="min-w-0 px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-display text-[clamp(1.2rem,2.1vw,1.45rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink text-pretty">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-body">{h.issuer}</p>
                  <p className="readout mt-1 text-[13px] text-muted">{h.meta}</p>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted text-pretty">
                    {h.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 grid gap-x-12 gap-y-8 border-t border-line pt-8 md:grid-cols-2">
          <div>
            <p className="label">{t.mscCoursework}</p>
            <p className="keys mt-3 text-[13.5px]">
              {education[0].coursework.join("  ·  ")}
            </p>
          </div>
          <div>
            <p className="label">{t.spokenLanguages}</p>
            <p className="keys mt-3 text-[13.5px]">
              {siteCopy.languages
                .map((l) => `${t.languageNames[l.name]} — ${t.langLevel[l.level]}`)
                .join("  ·  ")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <Disclosure label={t.archive} title={t.allCerts(certCount)}>
            <div className="grid gap-12">
              {archive.map((group) => (
                <div key={group.group}>
                  <p className="label border-b border-line pb-2.5">{group.group}</p>
                  <p className="mt-3 max-w-[62ch] text-[14px] leading-[1.55] text-muted">
                    {group.blurb}
                  </p>
                  <ul className="mt-2 grid gap-x-12 lg:grid-cols-2">
                    {group.items.map((c) => (
                      <li
                        key={c.id}
                        className="flex items-start gap-4 border-b border-line py-6"
                      >
                        <CertImage
                          src={c.image}
                          alt={`${c.title} ${t.certificate.toLowerCase()}`}
                          exists={have.has(c.image)}
                          issuer={c.issuer}
                          onOpen={have.has(c.image) ? () => open(c) : undefined}
                          compact
                          ratio="aspect-[4/3]"
                          className="w-28 shrink-0 sm:w-36"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[17px] font-semibold leading-snug tracking-[-0.015em] text-ink text-pretty">
                            {c.title}
                          </p>
                          <p className="mt-1 text-[13.5px] text-muted">
                            {c.issuer} · <span className="readout">{c.year}</span>
                          </p>
                          <p className="mt-2.5 text-[14px] leading-[1.58] text-body text-pretty">
                            {c.takeaway}
                          </p>
                          {c.url && (
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-signal mt-2.5 inline-flex items-center gap-1 text-[13.5px]"
                            >
                              {t.verify} <ArrowUpRight className="text-[13px]" />
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <p className="label border-b border-line pb-2.5">{t.courseraTracks}</p>
                <p className="mt-4 max-w-[62ch] text-[14.5px] leading-[1.6] text-muted text-pretty">
                  {t.courseraBlurb(courseraTrackCount, coursera.length)}
                </p>
                <dl className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">
                  {coursera.map((g) => (
                    <div key={g.label}>
                      <dt className="text-[14px] font-medium text-ink">{g.label}</dt>
                      <dd className="keys mt-1.5 text-[12.5px]">
                        {g.items.join("  ·  ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Disclosure>
        </div>
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
