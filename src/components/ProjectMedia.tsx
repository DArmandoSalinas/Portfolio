"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Lightbox } from "./Lightbox";
import { ArrowLeft, ArrowRight, ChevronDown } from "./Icons";
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
    <figure className="w-full max-w-[16.5rem]">
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
        <figcaption className="mt-2 text-[12.5px] leading-snug text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

function shotFrame(shot: GalleryShot, fallback: GalleryShot["frame"]) {
  return shot.frame ?? fallback ?? "phone";
}

function shotWidth(frame: NonNullable<GalleryShot["frame"]>, size: "hero" | "rail") {
  if (frame === "wide") return size === "hero" ? "w-full max-w-[15rem]" : "w-[13rem] sm:w-[15rem]";
  if (frame === "doc") return size === "hero" ? "w-[10rem]" : "w-[7.2rem] sm:w-[8rem]";
  return size === "hero" ? "w-[6.8rem]" : "w-[6.2rem] sm:w-[6.8rem]";
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

function ShotTile({
  shot,
  frame,
  size,
  enlarge,
  onOpen,
}: {
  shot: GalleryShot;
  frame: NonNullable<GalleryShot["frame"]>;
  size: "hero" | "rail";
  enlarge: (alt: string) => string;
  onOpen: (shot: GalleryShot) => void;
}) {
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
    <div className={`${shotWidth(frame, size)} shrink-0`}>
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
          onClick={() => onOpen(shot)}
          className={tileClass}
          aria-label={enlarge(shot.alt)}
        >
          {img}
        </button>
      )}
      {shot.label && size === "rail" && (
        <p className="mt-1.5 text-center text-[11px] tracking-[0.04em] text-muted">{shot.label}</p>
      )}
    </div>
  );
}

export function ProjectMedia({
  gallery,
  locale,
  previewClassName = "",
  railClassName = "",
}: {
  gallery: Gallery;
  locale: Locale;
  previewClassName?: string;
  railClassName?: string;
}) {
  const t = getUi(locale);
  const shots = flattenShots(gallery);
  const railId = useId();
  const [shown, setShown] = useState<{ src: string; caption: string } | null>(null);
  const [open, setOpen] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const dark = gallery.tone === "dark";
  const defaultFrame = gallery.kind === "board" ? "doc" : "phone";
  const hasPlayer = Boolean(gallery.youtube || (gallery.kind === "video" && gallery.src));
  const hero = shots[0];
  const heroFrame = hero ? shotFrame(hero, defaultFrame) : "phone";
  const canExpand = shots.length > 1;
  const phones = gallery.kind === "phones";
  const countLabel = phones ? t.screensCount(shots.length) : t.docsCount(shots.length);
  const hideLabel = phones ? t.hideScreens : t.hideDocs;

  const updateArrows = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const overflow = max > 12;
    setCanPrev(overflow && el.scrollLeft > 10);
    setCanNext(overflow && el.scrollLeft < max - 10);
  }, []);

  useEffect(() => {
    if (!open) return;
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
  }, [open, shots, updateArrows]);

  const nudge = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.7), behavior: "smooth" });
  };

  const openShot = (shot: GalleryShot) => setShown({ src: shot.src, caption: shot.alt });

  const peek = !open && canExpand && heroFrame === "phone" && shots[1];

  return (
    <>
      <div className={`min-w-0 ${previewClassName}`}>
        {hasPlayer && (
          <Player
            src={gallery.src}
            poster={gallery.poster}
            caption={gallery.caption}
            youtube={gallery.youtube}
          />
        )}

        {hero && !hasPlayer && (
          <div className={`relative ${peek ? "w-[8.6rem]" : ""}`}>
            {peek && (
              <div
                className={`${shotWidth("phone", "hero")} pointer-events-none absolute top-3 left-7 rotate-6 opacity-40 motion-reduce:rotate-0`}
                aria-hidden
              >
                <div className={`${shotBox("phone")} overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={peek.src}
                    alt=""
                    className="block h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            )}
            <div className="relative">
              <ShotTile
                shot={hero}
                frame={heroFrame}
                size="hero"
                enlarge={t.enlarge}
                onOpen={openShot}
              />
            </div>
          </div>
        )}

        {canExpand && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={railId}
            onClick={() => setOpen((v) => !v)}
            className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] text-muted transition-colors hover:text-ink"
          >
            {open ? hideLabel : countLabel}
            <ChevronDown
              className={`text-[14px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <Lightbox
          open={Boolean(shown)}
          src={shown?.src}
          caption={shown?.caption}
          onClose={() => setShown(null)}
        />
      </div>

      {open && canExpand && (
        <div id={railId} className={`relative min-w-0 ${railClassName}`}>
          <div
            ref={scroller}
            className={`no-scrollbar w-full max-w-full overflow-x-auto rounded-[var(--r-md)] ${
              dark ? "bg-[#14161a]" : "bg-sunk"
            }`}
          >
            <ul className="flex min-w-min snap-x snap-mandatory items-end gap-2.5 px-4 py-4 sm:gap-3 sm:px-5 sm:py-5">
              {shots.map((shot) => {
                const frame = shotFrame(shot, defaultFrame);
                return (
                  <li key={shot.src} className="snap-start">
                    <ShotTile
                      shot={shot}
                      frame={frame}
                      size="rail"
                      enlarge={t.enlarge}
                      onOpen={openShot}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          {canPrev && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-14 rounded-l-[var(--r-md)] bg-linear-to-r from-plate to-transparent" />
          )}
          {canNext && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-[var(--r-md)] bg-linear-to-l from-plate to-transparent" />
          )}

          {canPrev && (
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label={t.scrollPrev}
              className="absolute left-2 top-1/2 z-[1] grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] ring-1 ring-black/8 hover:bg-signal hover:text-white"
            >
              <ArrowLeft className="text-[14px]" />
            </button>
          )}
          {canNext && (
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label={t.scrollNext}
              className="absolute right-2 top-1/2 z-[1] grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_rgba(20,26,34,0.16)] ring-1 ring-black/8 hover:bg-signal hover:text-white"
            >
              <ArrowRight className="text-[14px]" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
