"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "./Icons";
import { useI18n } from "@/i18n/context";

type Props = {
  open: boolean;
  src?: string;
  caption?: string;
  onClose: () => void;
};

export function Lightbox({ open, src, caption, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  onCloseRef.current = onClose;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    const gap = window.innerWidth - root.clientWidth;
    root.dataset.lightbox = "open";
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      delete root.dataset.lightbox;
      root.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  if (!mounted || !open || !src) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? t.certificate}
      onClick={() => onCloseRef.current()}
      className="lightbox flex items-center justify-center bg-[rgba(10,22,40,0.88)] p-4 sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={() => onCloseRef.current()}
        aria-label={t.close}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-[var(--r-sm)] bg-white text-[19px] text-ink hover:bg-signal hover:text-white sm:right-6 sm:top-6"
      >
        <CloseIcon />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="m-0 grid max-h-full w-full max-w-4xl place-items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption ?? ""}
          decoding="async"
          className="max-h-[78vh] w-auto rounded-[var(--r-sm)] bg-[#f4f5f7] object-contain"
        />
        {caption && (
          <figcaption className="readout mt-4 text-center text-[13px] text-white/70">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body,
  );
}
