import Image from "next/image";
import { LogoHalo } from "./LogoHalo";
import { publicFileExists } from "@/lib/certAssets";
import { site } from "@/data/site";

export const PORTRAIT_SRC = "/me/diego-salinas.jpg";

const STATS = [
  { v: "17", l: "systems shipped" },
  { v: "0.90", l: "best clinical AUC" },
  { v: "16.74", l: "RUL test RMSE" },
];

/** Thin architectural corner brackets — the ARMATUS "precise" register. */
function Bracket({ at }: { at: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "left-0 top-0 border-l-2 border-t-2 rounded-tl-[var(--radius-lg)]",
    tr: "right-0 top-0 border-r-2 border-t-2 rounded-tr-[var(--radius-lg)]",
    bl: "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-[var(--radius-lg)]",
    br: "right-0 bottom-0 border-r-2 border-b-2 rounded-br-[var(--radius-lg)]",
  }[at];
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-8 w-8 border-primary ${pos}`}
    />
  );
}

export function Portrait() {
  const hasPhoto = publicFileExists(PORTRAIT_SRC);

  return (
    <figure className="relative m-0">
      {/* warm bloom behind the frame */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-70 blur-[64px]"
        style={{
          background:
            "radial-gradient(circle at 60% 35%, rgba(255,107,53,0.30) 0%, rgba(224,74,18,0.08) 45%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div
          className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-lg)] border"
          style={{ borderColor: "var(--orange-border)", background: "var(--surface)" }}
        >
          {hasPhoto ? (
            <>
              <Image
                src={PORTRAIT_SRC}
                alt={`${site.name}, ${site.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 42vw"
                className="object-cover object-center"
                style={{ filter: "grayscale(0.45) contrast(1.08) brightness(0.94)" }}
              />
              {/* grade the neutral studio grey toward the brand */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(255,107,53,0.32) 0%, rgba(224,74,18,0.10) 45%, transparent 72%)",
                  mixBlendMode: "soft-light",
                }}
              />
              {/* seat the figure on the black canvas */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.55) 100%)",
                }}
              />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <LogoHalo size={60} />
              <code className="text-[11px] text-muted">public{PORTRAIT_SRC}</code>
            </div>
          )}

          <Bracket at="tl" />
          <Bracket at="tr" />
          <Bracket at="bl" />
          <Bracket at="br" />
        </div>

        {/* proof line, hairline-separated rather than boxed */}
        <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line">
          {STATS.map((m) => (
            <div key={m.l} className="bg-background px-3 py-3.5 text-center">
              <dt className="sr-only">{m.l}</dt>
              <dd>
                <span className="metric-value block !text-[19px]">{m.v}</span>
                <span className="metric-label block !text-[10px]">{m.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </figure>
  );
}
