"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbox } from "./Lightbox";
import { ArrowLeft, ArrowRight } from "./Icons";
import type { GalleryShot, Project } from "@/data/projects";
import { getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

type Gallery = NonNullable<Project["gallery"]>;

function youtubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return match?.[1] ?? null;
}

function Player({
  src,
  poster,
  caption,
  youtube,
}: {
  src?: string;
  poster?: string;
  caption?: string;
  youtube?: string;
}) {
  const id = youtube ? youtubeId(youtube) : null;
  if (!src && !id) return null;

  return (
    <figure className="mt-8 w-full max-w-[20rem] sm:max-w-[22rem]">
      <div className="overflow-hidden rounded-[var(--r-md)] bg-ink">
        {id ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={caption ?? "Walkthrough"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
          />
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            poster={poster}
            className="aspect-video w-full bg-ink object-contain"
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-[13px] leading-snug text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

function shotFrame(shot: GalleryShot, fallback: GalleryShot["frame"]) {
  return shot.frame ?? fallback ?? "phone";
}

function shotWidth(frame: NonNullable<GalleryShot["frame"]>, lone = false) {
  if (frame === "wide") return "w-[14rem] sm:w-[17rem]";
  if (frame === "doc") return lone ? "w-[11rem] sm:w-[13rem]" : "w-[8.4rem] sm:w-[9.6rem]";
  return "w-[7.4rem] sm:w-[8.4rem]";
}

function shotBox(frame: NonNullable<GalleryShot["frame"]>) {
  if (frame === "wide") return "device-wide";
  if (frame === "doc") return "device-doc";
  return "device-phone";
}

function flattenShots(gallery: Gallery): GalleryShot[] {
  if (gallery.chapters?.length) return gallery.chapters.flatMap((c) => c.shots);
  return gallery.shots ?? [];
}

export function ProjectMedia({
  gallery,
  locale,
}: {
  gallery: Gallery;
  locale: Locale;
}) {
  const t = getUi(locale);
  const shots = flattenShots(gallery);
  const [shown, setShown] = useState<{ src: string; caption: string } | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(shots.length > 3);
  const dark = gallery.tone === "dark";
  const defaultFrame = gallery.kind === "board" ? "doc" : "phone";

  const updateArrows = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const overflow = max > 12;
    setCanPrev(overflow && el.scrollLeft > 10);
    setCanNext(overflow && el.scrollLeft < max - 10);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const inner = el.firstElementChild;
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    if (inner) ro.observe(inner);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    const frame = requestAnimationFrame(() => requestAnimationFrame(updateArrows));
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [shots, updateArrows]);

  const nudge = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <>
      {(gallery.youtube || (gallery.kind === "video" && gallery.src)) && (
        <Player
          src={gallery.src}
          poster={gallery.poster}
          caption={gallery.caption}
          youtube={gallery.youtube}
        />
      )}

      {shots.length > 0 && (
        <div className="relative mt-8 min-w-0">
          <div
            ref={scroller}
            className={`no-scrollbar w-full max-w-full overflow-x-auto rounded-[var(--r-md)] ${
              dark ? "bg-[#14161a]" : "bg-sunk"
            }`}
          >
            <ul className="flex min-w-min snap-x snap-mandatory items-end gap-3 px-5 py-5 sm:gap-3.5 sm:px-6 sm:py-6">
              {shots.map((shot) => {
                const frame = shotFrame(shot, defaultFrame);
                const tileClass = `${shotBox(frame)} cert-tile block w-full overflow-hidden ${
                  shot.href ? "cursor-pointer" : "cursor-zoom-in"
                }`;
                const img = (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className={`block h-full w-full ${
                      frame === "phone" ? "object-cover object-top" : "object-contain"
                    }`}
                  />
                );
                return (
                  <li
                    key={shot.src}
                    className={`${shotWidth(frame, shots.length === 1 && frame === "doc")} shrink-0 snap-start`}
                  >
                    {shot.href ? (
                      <a
                        href={shot.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tileClass}
                        aria-label={shot.label ? `${shot.label}: ${shot.alt}` : shot.alt}
                      >
                        {img}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setShown({ src: shot.src, caption: shot.alt })}
                        className={tileClass}
                        aria-label={t.enlarge(shot.alt)}
                      >
                        {img}
                      </button>
                    )}
                    {shot.label && (
                      <p
                        className={`mt-2 text-center text-[11px] tracking-[0.04em] ${
                          dark ? "text-white/55" : "text-muted"
                        }`}
                      >
                        {shot.label}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {canPrev && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 rounded-l-[var(--r-md)] bg-linear-to-r from-plate to-transparent" />
          )}
          {canNext && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-[var(--r-md)] bg-linear-to-l from-plate to-transparent" />
          )}

          {canPrev && (
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label={t.scrollPrev}
              className="absolute left-2 top-1/2 z-[1] grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] ring-1 ring-black/8 hover:bg-signal hover:text-white"
            >
              <ArrowLeft className="text-[15px]" />
            </button>
          )}
          {canNext && (
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label={t.scrollNext}
              className="absolute right-2 top-1/2 z-[1] grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] ring-1 ring-black/8 hover:bg-signal hover:text-white"
            >
              <ArrowRight className="text-[15px]" />
            </button>
          )}
        </div>
      )}

      <Lightbox
        open={Boolean(shown)}
        src={shown?.src}
        caption={shown?.caption}
        onClose={() => setShown(null)}
      />
    </>
  );
}
