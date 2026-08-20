import type { Metadata } from "next";
import { site } from "@/data/site";
import { cvCerts, cvEducation, cvProjects, cvRoles, cvSkills } from "@/data/resume";
import { PrintButton } from "@/components/PrintButton";
import { DownloadIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resume",
  description: `Curriculum vitae for ${site.name} — ${site.role}.`,
  alternates: { canonical: "/resume" },
};

function Rule({ label }: { label: string }) {
  return (
    <h2 className="mb-3 border-b border-line pb-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary print:border-black/25 print:text-black">
      {label}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div
      className="shell print-page"
      style={{
        paddingTop: "calc(var(--nav-h) + var(--safe-top) + 2.5rem)",
        paddingBottom: "4rem",
        maxWidth: "58rem",
      }}
    >
      {/* toolbar */}
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-line bg-surface p-4">
        <p className="text-[13px] text-muted">
          Print-ready. Use <span className="text-ink">Download</span> for the PDF, or{" "}
          <span className="text-ink">Print</span> to regenerate it from this page.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a href={site.cv} download className="btn btn-primary !py-2.5 !text-[13px]">
            <DownloadIcon /> Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="text-[15px] leading-[1.5] print:text-[10.5pt]">
        {/* ── header ── */}
        <header className="mb-8 border-b-2 border-primary pb-5 print:border-black">
          <h1 className="text-[clamp(28px,5vw,40px)] font-extrabold leading-none tracking-[-0.03em] text-ink print:text-black">
            {site.name}
          </h1>
          <p className="mt-2 text-[15px] font-bold tracking-[-0.01em] text-primary print:text-black">
            AI &amp; Machine Learning Engineer · Founder
          </p>
          <p className="mt-2 text-[13px] text-muted print:text-black">
            Monterrey, Mexico · TN visa eligible · English / Spanish
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-muted print:text-black">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li aria-hidden className="text-faint">·</li>
            <li>{site.phone}</li>
            <li aria-hidden className="text-faint">·</li>
            <li>
              <a href={site.links.github} className="hover:text-primary">
                github.com/DArmandoSalinas
              </a>
            </li>
            <li aria-hidden className="text-faint">·</li>
            <li>
              <a href={site.links.linkedin} className="hover:text-primary">
                linkedin.com/in/diego-armando-salinas-062599248
              </a>
            </li>
            <li aria-hidden className="text-faint">·</li>
            <li>
              <a href={site.links.armatus} className="hover:text-primary">
                armatus.app
              </a>
            </li>
          </ul>
        </header>

        {/* ── summary ── */}
        <section className="mb-7">
          <Rule label="Profile" />
          <p className="text-muted print:text-black text-pretty">
            AI &amp; ML engineer who builds full systems, not notebooks. Generative AI at
            SAP for automated technical fault reporting, and founder of ARMATUS — a
            shipped iOS coach that architects training weeks from profile, readiness and
            logged evidence. MSc Artificial Intelligence with Distinction. Work spans
            signal processing, explainable clinical ML, predictive maintenance, RAG and
            deployed FastAPI / Streamlit / Cloud Run products.
          </p>
        </section>

        {/* ── experience ── */}
        <section className="mb-7">
          <Rule label="Experience" />
          <ol className="grid gap-5">
            {cvRoles.map((r) => (
              <li key={r.org} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[16px] font-bold tracking-[-0.015em] text-ink print:text-black">
                    {r.title} <span className="text-primary print:text-black">· {r.org}</span>
                  </h3>
                  <span className="text-[12px] font-semibold tabular-nums text-muted print:text-black">
                    {r.period}
                  </span>
                </div>
                {r.location && (
                  <p className="text-[12px] text-muted print:text-black">{r.location}</p>
                )}
                <ul className="mt-2 grid gap-1.5">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-[14px] leading-snug text-muted print:text-black"
                    >
                      <span aria-hidden className="mt-[0.62em] h-px w-2.5 shrink-0 bg-primary print:bg-black" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── selected systems ── */}
        <section className="mb-7">
          <Rule label="Selected systems" />
          <ol className="grid gap-3.5">
            {cvProjects.map((p) => (
              <li key={p.name} className="break-inside-avoid">
                <h3 className="text-[14.5px] font-bold tracking-[-0.01em] text-ink print:text-black">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-[13.5px] leading-snug text-muted print:text-black text-pretty">
                  {p.line}
                </p>
                <p className="mt-1 flex flex-wrap gap-x-3 text-[12.5px]">
                  {p.metrics && (
                    <span className="font-semibold text-primary print:text-black">
                      {p.metrics}
                    </span>
                  )}
                  {p.link && <span className="text-muted print:text-black">{p.link}</span>}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── skills ── */}
        <section className="mb-7 break-inside-avoid">
          <Rule label="Skills" />
          <dl className="grid gap-2.5">
            {cvSkills.map((g) => (
              <div key={g.label} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                <dt className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-primary print:text-black">
                  {g.label}
                </dt>
                <dd className="text-[13.5px] leading-snug text-muted print:text-black">
                  {g.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── education ── */}
        <section className="mb-7 break-inside-avoid">
          <Rule label="Education" />
          <ol className="grid gap-3">
            {cvEducation.map((e) => (
              <li key={e.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[14.5px] font-bold text-ink print:text-black">
                    {e.degree}
                  </h3>
                  <span className="text-[12px] font-semibold tabular-nums text-muted print:text-black">
                    {e.period}
                  </span>
                </div>
                <p className="text-[13px] text-muted print:text-black">{e.school}</p>
                <p className="text-[12.5px] text-muted print:text-black">{e.note}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── certifications ── */}
        <section className="break-inside-avoid">
          <Rule label="Certifications" />
          <ul className="grid gap-1 sm:grid-cols-2">
            {cvCerts.map((c) => (
              <li
                key={c}
                className="flex gap-2.5 text-[13px] leading-snug text-muted print:text-black"
              >
                <span aria-hidden className="mt-[0.6em] h-px w-2 shrink-0 bg-primary print:bg-black" />
                {c}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
