"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  onOpen?: () => void;
  /** Larger placeholder for the featured slot. */
  large?: boolean;
  /** Resolved on the server — false renders a placeholder in the HTML itself. */
  exists?: boolean;
  /** Shown on the production placeholder so the tile still says something. */
  issuer?: string;
};

const isDev = process.env.NODE_ENV === "development";

/**
 * Renders certificate artwork from /public/certs/.
 *
 * The existence check happens on the server, so a missing file never produces a
 * broken-image flash. What replaces it depends on the environment: locally you
 * get a drop-zone naming the exact file to add; in production you get a branded
 * issuer tile, so a gap in the archive still looks deliberate.
 */
export function CertImage({
  src,
  alt,
  className = "",
  onOpen,
  large,
  exists = true,
  issuer,
}: Props) {
  const [failed, setFailed] = useState(false);
  const filename = src.replace(/^\//, "");

  if (!exists || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2.5 rounded-[var(--radius-md)] border px-4 text-center ${
          isDev ? "border-dashed border-line bg-black/40" : "border-line"
        } ${large ? "py-14" : "py-8"} ${className}`}
        style={
          isDev
            ? undefined
            : {
                background:
                  "linear-gradient(160deg, var(--orange-fill) 0%, rgba(28,28,30,0.9) 60%)",
              }
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`h-6 w-6 ${isDev ? "text-faint" : "text-primary/70"}`}
        >
          <circle cx="12" cy="9.5" r="5.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8.6 14.2 7.4 21l4.6-2.3 4.6 2.3-1.2-6.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {isDev ? (
          <>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
              Drop image here
            </p>
            <code className="text-[11px] break-all text-muted">public/{filename}</code>
          </>
        ) : (
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
            {issuer ?? "Credential on file"}
          </p>
        )}
      </div>
    );
  }

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`w-full rounded-[var(--radius-md)] border border-line bg-white object-contain ${className}`}
    />
  );

  if (!onOpen) return img;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full cursor-zoom-in rounded-[var(--radius-md)] transition-transform duration-240 hover:scale-[1.01]"
      aria-label={`Enlarge ${alt}`}
    >
      {img}
    </button>
  );
}
