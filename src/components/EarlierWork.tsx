import { ArrowUpRight } from "./Icons";
import { earlierWork } from "@/data/projects";

/**
 * Tier C. Kept out of the main grid on purpose — the ML and product work
 * should not sit underneath undergraduate labs.
 */
export function EarlierWork() {
  return (
    <details className="group mt-14 border-t border-line pt-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
            Earlier work
          </span>
          <span className="mt-1 block text-[17px] font-bold tracking-[-0.02em] text-ink">
            Engineering roots and smaller builds
          </span>
        </span>
        <span
          aria-hidden
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-240 group-hover:border-[var(--orange-border)] group-hover:text-primary group-open:rotate-180"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>

      <div className="mt-7 grid gap-9 md:grid-cols-2">
        {earlierWork.map((group) => (
          <div key={group.group}>
            <h3 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-muted">
              {group.group}
            </h3>
            <ul className="grid gap-3">
              {group.items.map((item) => {
                const inner = (
                  <>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] font-bold tracking-[-0.015em] text-ink">
                        {item.title}
                      </span>
                      <span className="shrink-0 text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-[13.5px] leading-snug text-muted">{item.body}</p>
                  </>
                );
                return (
                  <li key={item.title}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card block p-4 transition-colors hover:border-[var(--orange-border)]"
                      >
                        {inner}
                        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-primary">
                          Open <ArrowUpRight className="text-[12px]" />
                        </span>
                      </a>
                    ) : (
                      <div className="card p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}
