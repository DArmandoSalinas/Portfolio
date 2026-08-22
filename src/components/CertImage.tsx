"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";

type Props = {
  src: string;
  alt: string;
  className?: string;
  onOpen?: () => void;
  /** Resolved on the server — false renders a placeholder in the HTML itself. */
  exists?: boolean;
  /** Shown on the production placeholder so the tile still says something. */
  issuer?: string;
  ratio?: string;
  /** Thumbnail-sized: the placeholder drops its caption and keeps the glyph. */
  compact?: boolean;
};

const isDev = process.env.NODE_ENV === "development";

/**
 * Certificate artwork on a recessed mat, the way a document sits in a frame.
 *
 * The existence check happens on the server, so a missing file never produces a
 * broken-image flash. Locally you get a drop-zone naming the exact file to add;
 * in production you get an issuer tile, so a gap still looks deliberate.
 */
export function CertImage({
  src,
  alt,
  className = "",
  onOpen,
  exists = true,
  issuer,
  ratio = "aspect-[4/3]",
  compact = false,
}: Props) {
  const { t } = useI18n();
  const [failed, setFailed] = useState(false);
  const filename = src.replace(/^\//, "");

  const pad = compact ? "p-1.5" : "p-2";
  const mat = `flex items-center justify-center overflow-hidden rounded-[var(--r-sm)] bg-sunk ${pad} ${ratio} ${className}`;

  if (!exists || failed) {
    return (
      <div className={`${mat} ${isDev ? "border border-dashed border-line-strong" : ""}`}>
        <div className="flex min-w-0 flex-col items-center gap-2 px-2 text-center sm:px-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className={`text-muted ${compact ? "h-5 w-5" : "h-6 w-6"}`}
          >
            <circle cx="12" cy="9.5" r="5.25" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M8.6 14.2 7.4 21l4.6-2.3 4.6 2.3-1.2-6.8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          {/* a thumbnail has no room for a caption — the glyph says "on file" */}
          {compact ? null : isDev ? (
            <code className="text-[11px] break-all text-muted">public/{filename}</code>
          ) : (
            <p className="label text-[11px]">{issuer ?? t.credentialOnFile}</p>
          )}
        </div>
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
      className="h-full w-full object-contain object-center shadow-[0_2px_14px_rgba(20,26,34,0.14)]"
    />
  );

  if (!onOpen) return <div className={mat}>{img}</div>;

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`${mat} cert-tile cursor-zoom-in`}
      aria-label={t.enlarge(alt)}
    >
      {img}
    </button>
  );
}
