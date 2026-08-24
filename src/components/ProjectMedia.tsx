"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";
import type { GalleryChapter, GalleryShot, Project } from "@/data/projects";
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

function shotWidth(frame: NonNullable<GalleryShot["frame"]>) {
  if (frame === "wide") return "w-[16rem] sm:w-[20rem]";
  if (frame === "doc") return "w-[10.5rem] sm:w-[12.5rem]";
  return "w-[9.2rem] sm:w-[10.8rem]";
}

function shotBox(frame: NonNullable<GalleryShot["frame"]>) {
  if (frame === "wide") return "device-wide";
  if (frame === "doc") return "device-doc";
  return "device-phone";
}

export function ProjectMedia({
  gallery,
  locale,
}: {
  gallery: Gallery;
  locale: Locale;
}) {
  const t = getUi(locale);
  const [shown, setShown] = useState<{ src: string; caption: string } | null>(null);
  const dark = gallery.tone === "dark";
  const defaultFrame = gallery.kind === "board" ? "doc" : "phone";
  const chapters: GalleryChapter[] =
    gallery.chapters && gallery.chapters.length > 0
      ? gallery.chapters
      : gallery.shots?.length
        ? [{ title: "", shots: gallery.shots }]
        : [];

  const renderShot = (shot: GalleryShot) => {
    const frame = shotFrame(shot, defaultFrame);
    return (
      <li key={shot.src} className={`${shotWidth(frame)} shrink-0`}>
        <button
          type="button"
          onClick={() => setShown({ src: shot.src, caption: shot.alt })}
          className={`${shotBox(frame)} cert-tile block w-full cursor-zoom-in overflow-hidden`}
          aria-label={t.enlarge(shot.alt)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            className={`block h-full w-full ${
              frame === "phone" ? "object-cover object-top" : "object-contain"
            }`}
          />
        </button>
        {shot.label && (
          <p
            className={`mt-2.5 text-center text-[11px] tracking-[0.04em] ${
              dark ? "text-white/55" : "text-muted"
            }`}
          >
            {shot.label}
          </p>
        )}
      </li>
    );
  };

  const shelfTone = dark ? "bg-[#14161a]" : "bg-sunk";

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

      {chapters.map((chapter, i) => {
        const phones = chapter.shots.filter((s) => shotFrame(s, defaultFrame) === "phone");
        const boards = chapter.shots.filter((s) => shotFrame(s, defaultFrame) !== "phone");
        return (
          <div key={`${chapter.title}-${i}`} className={i === 0 ? "mt-8" : "mt-6"}>
            {(chapter.title || chapter.caption) && (
              <div className="mb-3 max-w-[62ch]">
                {chapter.title && (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {chapter.title}
                  </p>
                )}
                {chapter.caption && (
                  <p className="mt-1 text-[14.5px] leading-snug text-body">{chapter.caption}</p>
                )}
              </div>
            )}
            {phones.length > 0 && (
              <div className={`rounded-[var(--r-md)] ${shelfTone}`}>
                <ul className="flex flex-wrap items-end gap-3.5 px-5 py-6 sm:gap-4 sm:px-7 sm:py-7">
                  {phones.map(renderShot)}
                </ul>
              </div>
            )}
            {boards.length > 0 && (
              <div
                className={`rounded-[var(--r-md)] ${shelfTone} ${phones.length ? "mt-3" : ""}`}
              >
                <ul className="flex flex-wrap items-end gap-5 px-5 py-6 sm:px-7 sm:py-7">
                  {boards.map(renderShot)}
                </ul>
              </div>
            )}
          </div>
        );
      })}

      <Lightbox
        open={Boolean(shown)}
        src={shown?.src}
        caption={shown?.caption}
        onClose={() => setShown(null)}
      />
    </>
  );
}
