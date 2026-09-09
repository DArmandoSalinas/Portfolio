"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, CloseIcon } from "./Icons";
import { useI18n } from "@/i18n/context";

export type LightboxItem = { src: string; caption?: string };

type Props = {
  open: boolean;
  items?: LightboxItem[];
  index?: number;
  src?: string;
  caption?: string;
  onClose: () => void;
  onIndex?: (index: number) => void;
};

export function Lightbox({
  open,
  items = [],
  index = 0,
  src,
  caption,
  onClose,
  onIndex,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const onIndexRef = useRef(onIndex);
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  onCloseRef.current = onClose;
  onIndexRef.current = onIndex;

  const slides = items.length ? items : src ? [{ src, caption }] : [];
  const safeIndex = slides.length ? Math.min(Math.max(index, 0), slides.length - 1) : 0;
  const current = slides[safeIndex];
  const many = slides.length > 1;

  const indexRef = useRef(safeIndex);
  const lenRef = useRef(slides.length);
  indexRef.current = safeIndex;
  lenRef.current = slides.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const step = (dir: -1 | 1) => {
      const total = lenRef.current;
      if (total < 2) return;
      onIndexRef.current?.((indexRef.current + dir + total) % total);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
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

  if (!mounted || !open || !current) return null;

  const go = (dir: -1 | 1, e: MouseEvent) => {
    e.stopPropagation();
    if (!many) return;
    onIndex?.((safeIndex + dir + slides.length) % slides.length);
  };

  const neighbor = (dir: -1 | 1) =>
    slides[(safeIndex + dir + slides.length) % slides.length]?.src;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption ?? t.certificate}
      onClick={() => onCloseRef.current()}
      className="lightbox flex items-center justify-center bg-[rgba(10,22,40,0.88)] p-4 sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={() => onCloseRef.current()}
        aria-label={t.close}
        className="absolute right-4 top-4 z-[1] grid h-11 w-11 place-items-center rounded-[var(--r-sm)] bg-white text-[19px] text-ink hover:bg-signal hover:text-white sm:right-6 sm:top-6"
      >
        <CloseIcon />
      </button>

      {many && (
        <>
          <button
            type="button"
            onClick={(e) => go(-1, e)}
            aria-label={t.photoPrev}
            className="absolute left-3 top-1/2 z-[1] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] hover:bg-signal hover:text-white sm:left-6"
          >
            <ArrowLeft className="text-[16px]" />
          </button>
          <button
            type="button"
            onClick={(e) => go(1, e)}
            aria-label={t.photoNext}
            className="absolute right-3 top-1/2 z-[1] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] hover:bg-signal hover:text-white sm:right-6"
          >
            <ArrowRight className="text-[16px]" />
          </button>
        </>
      )}

      <figure
        onClick={(e) => e.stopPropagation()}
        className="m-0 grid max-h-full w-full max-w-4xl place-items-center px-12 sm:px-16"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.caption ?? ""}
          decoding="async"
          className="max-h-[78vh] w-auto rounded-[var(--r-sm)] bg-[#f4f5f7] object-contain"
        />
        {(current.caption || many) && (
          <figcaption className="readout mt-4 text-center text-[13px] text-white/70">
            {many && (
              <span className="mr-2 tabular-nums text-white/45">
                {safeIndex + 1} / {slides.length}
              </span>
            )}{" "}
            {current.caption}
          </figcaption>
        )}
      </figure>

      {many && (
        <div aria-hidden className="hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={neighbor(-1)} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={neighbor(1)} alt="" />
        </div>
      )}
    </div>,
    document.body,
  );
}
