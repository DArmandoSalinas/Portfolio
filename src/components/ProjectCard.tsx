import { ArrowUpRight, GitHubIcon, PlayIcon } from "./Icons";
import type { Project } from "@/data/projects";

type Props = { project: Project; variant?: "featured" | "compact" };

export function ProjectCard({ project: p, variant = "compact" }: Props) {
  const featured = variant === "featured";
  const repos = p.repos ?? (p.repo ? [{ label: "Repository", url: p.repo }] : []);

  return (
    <article
      className={`card card-linkable h-full ${featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}
    >
      {/* categories */}
      <ul className="mb-4 flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {p.categories.map((c) => (
          <li
            key={c}
            className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary/85 after:ml-1.5 after:text-faint after:content-['·'] last:after:content-['']"
          >
            {c}
          </li>
        ))}
      </ul>

      <h3
        className={`font-extrabold tracking-[-0.025em] text-ink ${
          featured ? "text-[clamp(21px,2.8vw,27px)]" : "text-[19px]"
        }`}
      >
        {p.title}
      </h3>

      <p
        className={`mt-2 font-semibold leading-snug text-primary-soft text-pretty ${
          featured ? "text-[16px]" : "text-[14.5px]"
        }`}
      >
        {p.hook}
      </p>

      <p
        className={`mt-3 leading-[1.6] text-ink/75 text-pretty ${
          featured ? "text-[15.5px]" : "text-[14.5px]"
        }`}
      >
        {p.body}
      </p>

      {p.metrics && p.metrics.length > 0 && (
        <dl
          className={`mt-5 grid gap-x-4 gap-y-4 border-t border-line pt-5 ${
            featured
              ? p.metrics.length >= 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3"
              : "grid-cols-2"
          }`}
        >
          {p.metrics.map((m) => (
            <div key={m.label} className="min-w-0">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className={`metric-value block ${featured ? "" : "!text-[18px]"}`}>
                  {m.value}
                </span>
                <span className="metric-label block">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {p.note && (
        <p className="mt-4 border-l-2 pl-3 text-[13px] leading-snug text-muted"
          style={{ borderColor: "var(--orange-border)" }}>
          {p.note}
        </p>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>

      {/* links pinned to the bottom so cards in a row align */}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
        {p.live?.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-opacity hover:opacity-80"
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
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink"
          >
            <GitHubIcon className="text-[14px]" />
            {r.label}
          </a>
        ))}
        {p.video && (
          <a
            href={p.video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink"
          >
            <PlayIcon className="text-[14px]" />
            Walkthrough
          </a>
        )}
      </div>
    </article>
  );
}
