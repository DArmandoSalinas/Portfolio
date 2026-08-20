import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  cvCerts,
  cvEducation,
  cvSpokenLanguages,
  cvProjects,
  cvRoles,
  cvSkills,
  cvSummary,
} from "@/data/resume";
import { PrintButton } from "@/components/PrintButton";
import { DownloadIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resume",
  description: `Curriculum vitae for ${site.name} — ${site.role}.`,
  alternates: { canonical: "/resume" },
};

function Rule({ label }: { label: string }) {
  return (
    <h2 className="mb-3 border-b border-line pb-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-primary print:border-black/30 print:text-black">
      {label}
    </h2>
  );
}

/**
 * Literal glyph rather than a CSS marker: list markers drawn by the renderer
 * do not always survive PDF text extraction, and ATS parsers read the text
 * layer. A real character guarantees the bullet structure is preserved.
 */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[13.5px] leading-[1.45] text-muted print:text-black">
      <span aria-hidden className="shrink-0 text-primary print:text-black">
        •
      </span>
      <span>{children}</span>
    </li>
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
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-line bg-surface p-4">
        <p className="text-[13px] text-muted">
          ATS-formatted: single column, standard headings, no tables or graphics.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a href={site.cv} download className="btn btn-primary !py-2.5 !text-[13px]">
            <DownloadIcon /> Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="text-[14px] leading-[1.45] print:text-[8.6pt]">
        {/* ── header ── */}
        <header className="mb-6 border-b-2 border-primary pb-4 print:border-black">
          <h1 className="text-[clamp(26px,4.4vw,34px)] font-extrabold leading-none tracking-[-0.03em] text-ink print:text-black">
            {site.name}
          </h1>
          <p className="mt-2 text-[15px] font-bold tracking-[-0.01em] text-primary print:text-black">
            AI &amp; Machine Learning Engineer
          </p>
          <p className="mt-2 text-[12.5px] text-muted print:text-black">
            Monterrey, Mexico | TN Visa Eligible for United States roles | Open to
            relocation and remote
          </p>
          <p className="mt-1.5 text-[12.5px] text-muted print:text-black">
            {site.email} | {site.phone} | linkedin.com/in/diego-armando-salinas-062599248
            | github.com/DArmandoSalinas | armatus.app
          </p>
        </header>

        {/* ── summary ── */}
        <section className="mb-6">
          <Rule label="Professional Summary" />
          <p className="text-[13.5px] leading-[1.5] text-muted print:text-black text-pretty">
            {cvSummary}
          </p>
        </section>

        {/* ── skills: keyword block, placed high for ATS ── */}
        <section className="mb-6">
          <Rule label="Technical Skills" />
          <dl className="grid gap-1.5">
            {cvSkills.map((g) => (
              <div key={g.label} className="grid gap-0.5 sm:grid-cols-[10.5rem_1fr] sm:gap-3">
                <dt className="text-[12px] font-bold text-ink print:text-black">
                  {g.label}
                </dt>
                <dd className="text-[13px] leading-[1.45] text-muted print:text-black">
                  {g.items.join(", ")}
                </dd>
              </div>
            ))}
            <div className="grid gap-0.5 sm:grid-cols-[10.5rem_1fr] sm:gap-3">
              <dt className="text-[12px] font-bold text-ink print:text-black">
                Spoken Languages
              </dt>
              <dd className="text-[13px] text-muted print:text-black">{cvSpokenLanguages}</dd>
            </div>
          </dl>
        </section>

        {/* ── experience ── */}
        <section className="mb-6">
          <Rule label="Professional Experience" />
          <ol className="grid gap-4">
            {cvRoles.map((r) => (
              <li key={r.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[14.5px] font-bold tracking-[-0.015em] text-ink print:text-black">
                    {r.title}, {r.org}
                  </h3>
                  <span className="text-[12px] font-semibold tabular-nums text-muted print:text-black">
                    {r.period}
                  </span>
                </div>
                {r.location && (
                  <p className="text-[12px] text-muted print:text-black">{r.location}</p>
                )}
                <ul className="mt-1.5 grid gap-1">
                  {r.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── projects ── */}
        <section className="mb-6">
          <Rule label="Selected Projects" />
          <ol className="grid gap-3.5">
            {cvProjects.map((p) => (
              <li key={p.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[14px] font-bold tracking-[-0.01em] text-ink print:text-black">
                    {p.name}
                  </h3>
                  {p.link && (
                    <span className="text-[11.5px] text-muted print:text-black">
                      {p.link}
                    </span>
                  )}
                </div>
                <p className="text-[12px] italic text-muted print:text-black">{p.stack}</p>
                <ul className="mt-1 grid gap-1">
                  {p.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── education ── */}
        <section className="mb-6">
          <Rule label="Education" />
          <ol className="grid gap-2.5">
            {cvEducation.map((e) => (
              <li key={e.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[14px] font-bold text-ink print:text-black">
                    {e.degree}
                  </h3>
                  <span className="text-[12px] font-semibold tabular-nums text-muted print:text-black">
                    {e.period}
                  </span>
                </div>
                <p className="text-[12.5px] text-muted print:text-black">{e.school}</p>
                <ul className="mt-1 grid gap-0.5">
                  {e.notes.map((n) => (
                    <Bullet key={n}>{n}</Bullet>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── certifications ── */}
        <section>
          <Rule label="Certifications" />
          {/* flowing list rather than a grid: same keywords for the parser,
              a fraction of the vertical space */}
          <p className="text-[13px] leading-[1.5] text-muted print:text-black">
            {cvCerts.join("  ·  ")}
          </p>
        </section>
      </article>
    </div>
  );
}
