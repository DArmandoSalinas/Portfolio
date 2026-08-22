"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const { t } = useI18n();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? t.certificate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(10,22,40,0.82)] p-4 backdrop-blur-[3px] sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-[var(--r-sm)] bg-white text-[19px] text-ink transition-colors hover:bg-signal hover:text-white sm:right-6 sm:top-6"
          >
            <CloseIcon />
          </button>

          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="m-0 max-h-full w-full max-w-4xl overflow-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={caption ?? ""}
              className="mx-auto max-h-[78vh] w-auto rounded-[var(--r-sm)] bg-white object-contain"
            />
            {caption && (
              <figcaption className="readout mt-4 text-center text-[13px] text-muted">
                {caption}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
