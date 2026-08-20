import Image from "next/image";
import { LogoHalo } from "./LogoHalo";
import { publicFileExists } from "@/lib/certAssets";
import { site } from "@/data/site";

/** Drop the headshot here and it appears automatically. */
export const PORTRAIT_SRC = "/me/diego-salinas.jpg";

const STATS = [
  { v: "17", l: "systems built" },
  { v: "62", l: "study participants" },
  { v: "0.90", l: "best clinical AUC" },
];

/**
 * Hero portrait. The studio background is neutral grey, so it is warmed toward
 * the brand with a low-opacity orange wash and dissolved into the page with a
 * bottom scrim — the source file is never modified.
 */
export function Portrait() {
  const hasPhoto = publicFileExists(PORTRAIT_SRC);

  return (
    <figure className="relative m-0">
      <div
        className="card overflow-hidden p-0"
        style={{ borderColor: "var(--orange-border)" }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-elevated sm:aspect-[5/6]">
          {hasPhoto ? (
            <>
              <Image
                src={PORTRAIT_SRC}
                alt={`${site.name} — ${site.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-top"
                style={{ filter: "grayscale(0.3) contrast(1.06) brightness(0.96)" }}
              />
              {/* warm the neutral studio grey toward the brand */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(255,107,53,0.20) 0%, rgba(224,74,18,0.06) 42%, rgba(0,0,0,0) 68%)",
                  mixBlendMode: "soft-light",
                }}
              />
              {/* dissolve the frame edge into the page */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.72) 100%)",
                }}
              />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <LogoHalo size={64} />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
                Add your headshot
              </p>
              <code className="text-[11px] text-muted">public{PORTRAIT_SRC}</code>
            </div>
          )}
        </div>

        <dl className="grid grid-cols-3 divide-x divide-line/70 border-t border-line">
          {STATS.map((m) => (
            <div key={m.l} className="px-3 py-4 text-center">
              <dt className="sr-only">{m.l}</dt>
              <dd>
                <span className="metric-value block">{m.v}</span>
                <span className="metric-label block">{m.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </figure>
  );
}
