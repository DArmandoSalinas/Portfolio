import { Reveal } from "./Reveal";
import { ProjectMedia } from "./ProjectMedia";
import { ArrowUpRight, DownloadIcon, GitHubIcon, PlayIcon } from "./Icons";
import type { Project } from "@/data/projects";
import { categoryLabel, getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

export function SpotlightProject({
  project: p,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: Locale;
}) {
  const t = getUi(locale);
  const repos = p.repos ?? (p.repo ? [{ label: t.repository, url: p.repo }] : []);
  const live = p.live ?? [];
  const docs = p.docs ?? [];
  const metrics = p.metrics?.slice(0, 4) ?? [];

  return (
    <Reveal as="li" index={index} className="min-w-0">
      <article className="entry min-w-0 overflow-hidden p-7 sm:p-9">
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
          <div>
            <h3 className="h3">{p.title}</h3>
            <p className="mt-2 text-[13.5px] text-muted">
              {p.categories.map((c) => categoryLabel(locale, c)).join(" · ")}
            </p>
            {live.length > 0 && <p className="flag mt-3">{t.live}</p>}
          </div>

          <div className="max-w-[62ch]">
          <p className="text-[18px] font-medium leading-snug text-ink text-pretty">{p.hook}</p>

          {p.problem && (
            <p className="mt-4 text-[16px] leading-[1.5] text-body text-pretty">{p.problem}</p>
          )}

          <p className="mt-3 text-[16px] leading-[1.5] text-muted text-pretty">
            {p.brief ?? p.body}
          </p>

          {metrics.length > 0 && (
            <dl className="strip mt-6 grid grid-cols-2 gap-x-6 gap-y-4 px-5 py-4 sm:flex sm:gap-x-10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <dd className="num text-[1.35rem] leading-none">{m.value}</dd>
                  <dt className="mt-1.5 text-[12px] text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <p className="keys mt-5">{p.stack.slice(0, 6).join("  ·  ")}</p>

          {p.note && (
            <p className="mt-3 text-[13.5px] leading-snug text-muted">{p.note}</p>
          )}

          {(live.length > 0 || repos.length > 0 || docs.length > 0 || p.video) && (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {live.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-signal inline-flex items-center gap-1.5 text-[15px]"
                >
                  {l.label}
                  <ArrowUpRight className="text-[14px]" />
                </a>
              ))}
              {repos.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-muted hover:text-ink"
                >
                  <GitHubIcon className="text-[15px]" />
                  {r.label}
                </a>
              ))}
              {docs.map((d) => (
                <a
                  key={d.url}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-muted hover:text-ink"
                >
                  <DownloadIcon className="text-[15px]" />
                  {d.label}
                </a>
              ))}
              {p.video && (
                <a
                  href={p.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-muted hover:text-ink"
                >
                  <PlayIcon className="text-[15px]" />
                  {t.walkthrough}
                </a>
              )}
            </div>
          )}
          </div>
        </div>
        {p.gallery && <ProjectMedia gallery={p.gallery} locale={locale} />}
      </article>
    </Reveal>
  );
}
