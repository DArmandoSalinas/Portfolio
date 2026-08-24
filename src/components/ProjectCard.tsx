import { ArrowUpRight, DownloadIcon, GitHubIcon, PlayIcon } from "./Icons";
import type { Project } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { categoryLabel, getUi } from "@/i18n/ui";

export function ProjectCard({
  project: p,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = getUi(locale);
  const repos = p.repos ?? (p.repo ? [{ label: t.repository, url: p.repo }] : []);
  const links = [
    ...(p.live ?? []).map((l) => ({ ...l, kind: "live" as const })),
    ...repos.map((r) => ({ ...r, kind: "repo" as const })),
    ...(p.docs ?? []).map((d) => ({ ...d, kind: "doc" as const })),
    ...(p.video ? [{ label: t.walkthrough, url: p.video, kind: "video" as const }] : []),
  ];

  return (
    <li className="border-t border-line py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-[17px] font-semibold text-ink">{p.title}</h4>
        <p className="text-[13px] text-muted">
          {p.categories.map((c, n) => (
            <span key={c}>
              {n > 0 && <span aria-hidden> · </span>}
              <span className="whitespace-nowrap">{categoryLabel(locale, c)}</span>
            </span>
          ))}
        </p>
      </div>

      <p className="mt-2 text-[15.5px] font-medium leading-[1.45] text-ink text-pretty">
        {p.hook}
      </p>
      <p className="mt-2 text-[14.5px] leading-[1.55] text-body text-pretty">{p.body}</p>

      {p.metrics && p.metrics.length > 0 && (
        <p className="readout mt-3 text-[13px] leading-[1.7] text-muted">
          {p.metrics.map((m) => (
            <span key={m.label} className="mr-4 inline-block whitespace-nowrap">
              <span className="text-ink">{m.value}</span> {m.label}
            </span>
          ))}
        </p>
      )}

      <p className="keys mt-3 text-[12.5px]">{p.stack.slice(0, 5).join("  ·  ")}</p>

      {p.note && (
        <p className="mt-2 text-[13px] leading-snug text-muted text-pretty">{p.note}</p>
      )}

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-[14px] ${
                l.kind === "live"
                  ? "link-signal"
                  : "text-muted transition-colors hover:text-ink"
              }`}
            >
              {l.kind === "repo" && <GitHubIcon className="text-[15px]" />}
              {l.kind === "doc" && <DownloadIcon className="text-[15px]" />}
              {l.kind === "video" && <PlayIcon className="text-[15px]" />}
              {l.label}
              {l.kind === "live" && <ArrowUpRight className="text-[14px]" />}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
