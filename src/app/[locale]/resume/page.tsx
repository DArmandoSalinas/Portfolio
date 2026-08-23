import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { PrintButton } from "@/components/PrintButton";
import { DownloadIcon } from "@/components/Icons";
import { isLocale, localePath } from "@/i18n/config";
import { getResume } from "@/i18n/resume";
import { getUi } from "@/i18n/ui";
import { getContent } from "@/i18n/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getUi(raw);
  return {
    title: t.resumeTitle,
    description: t.resumeDescription,
    alternates: {
      canonical: localePath(raw, "/resume"),
      languages: {
        en: "/resume",
        es: "/es/resume",
        "x-default": "/resume",
      },
    },
  };
}

function Rule({ label }: { label: string }) {
  return (
    <h2 className="mb-3 border-b border-line pb-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-primary print:border-black/30 print:text-black">
      {label}
    </h2>
  );
}

function host(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ContactLine({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <p className="flex flex-wrap items-baseline gap-y-0.5 text-[12.5px] text-muted print:text-black">
      {items.map((item, i) => (
        <span key={item.href} className="inline-flex items-baseline">
          {i > 0 && <span aria-hidden className="whitespace-pre text-muted print:text-black">{"  ·  "}</span>}
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:text-ink print:text-black"
          >
            {item.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[13.5px] leading-[1.45] text-muted print:text-black">
      <span aria-hidden className="shrink-0 text-muted print:text-black">
        •
      </span>
      <span>{children}</span>
    </li>
  );
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getUi(raw);
  const { site: copy } = getContent(raw);
  const cv = getResume(raw);

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
        <p className="text-[13px] text-muted">{t.resumeBanner}</p>
        <div className="flex flex-wrap gap-2.5">
          <a href={site.cv} download className="btn btn-primary !py-2.5 !text-[13px]">
            <DownloadIcon /> {t.downloadCv}
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="text-[14px] leading-[1.45] print:text-[8.6pt]">
        <header className="mb-6 border-b-2 border-primary pb-4 print:border-black">
          <h1 className="text-[clamp(26px,4.4vw,34px)] font-extrabold leading-none tracking-[-0.03em] text-ink print:text-black">
            {site.name}
          </h1>
          <p className="mt-2 text-[15px] font-bold tracking-[-0.01em] text-primary print:text-black">
            {copy.role}
          </p>
          <p className="mt-2 text-[12.5px] text-muted print:text-black">
            {t.resumeLocationLine}
          </p>
          <div className="mt-2 grid gap-0.5">
            <ContactLine
              items={[
                { href: `mailto:${site.email}`, label: site.email },
                { href: `tel:${site.phoneHref}`, label: site.phone },
              ]}
            />
            <ContactLine
              items={[
                { href: site.url, label: host(site.url) },
                { href: site.links.linkedin, label: "linkedin.com/in/diego-armando-salinas-062599248" },
                { href: site.links.github, label: "github.com/DArmandoSalinas" },
                { href: site.links.armatus, label: "armatus.app" },
              ]}
            />
          </div>
        </header>

        <section className="mb-6">
          <Rule label={t.resumeSections.summary} />
          <p className="text-[13.5px] leading-[1.5] text-muted print:text-black text-pretty">
            {cv.summary}
          </p>
        </section>

        <section className="mb-6">
          <Rule label={t.resumeSections.skills} />
          <dl className="grid gap-1.5">
            {cv.skills.map((g) => (
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
                {t.resumeSections.spoken}
              </dt>
              <dd className="text-[13px] text-muted print:text-black">{cv.spoken}</dd>
            </div>
          </dl>
        </section>

        <section className="mb-6">
          <Rule label={t.resumeSections.experience} />
          <ol className="grid gap-4">
            {cv.roles.map((r) => (
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

        <section className="mb-6">
          <Rule label={t.resumeSections.projects} />
          <ol className="grid gap-3.5">
            {cv.projects.map((p) => (
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

        <section className="mb-6">
          <Rule label={t.resumeSections.education} />
          <ol className="grid gap-2.5">
            {cv.education.map((e) => (
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

        <section>
          <Rule label={t.resumeSections.certs} />
          <div className="grid gap-3 print:gap-1">
            {cv.certs.map((g) => (
              <div key={g.group}>
                <p className="mb-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink print:hidden">
                  {g.group}
                </p>
                <ul className="grid gap-x-8 gap-y-0.5 sm:grid-cols-2 print:grid-cols-2 print:gap-y-0">
                  {g.items.map((c) => (
                    <li
                      key={c}
                      className="text-[13px] leading-[1.4] text-muted print:text-black"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
