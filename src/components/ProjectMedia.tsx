"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";
import type { Project } from "@/data/projects";
import { getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

type Gallery = NonNullable<Project["gallery"]>;
type Shot = NonNullable<Gallery["shots"]>[number];

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

function shotFrame(shot: Shot, fallback: Shot["frame"]) {
  return shot.frame ?? fallback ?? "phone";
}

function shotWidth(frame: NonNullable<Shot["frame"]>, boardGrid: boolean) {
  if (frame === "wide") return "w-[16rem] sm:w-[20rem]";
  if (frame === "doc") return boardGrid ? "w-full max-w-[16rem]" : "w-[12rem] sm:w-[14rem]";
  return "w-[8.4rem] sm:w-[9.6rem]";
}

function shotBox(frame: NonNullable<Shot["frame"]>) {
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
  const shots = gallery.shots ?? [];
  const dark = gallery.tone === "dark";
  const defaultFrame = gallery.kind === "board" ? "doc" : "phone";
  const phones = shots.filter((s) => shotFrame(s, defaultFrame) === "phone");
  const boards = shots.filter((s) => shotFrame(s, defaultFrame) !== "phone");

  const renderShot = (shot: Shot, toneDark: boolean, widthClass: string) => {
    const frame = shotFrame(shot, defaultFrame);
    return (
      <li key={shot.src} className={widthClass}>
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
              toneDark ? "text-white/55" : "text-muted"
            }`}
          >
            {shot.label}
          </p>
        )}
      </li>
    );
  };

  const renderShelf = (items: Shot[], toneDark: boolean) => (
    <div
      className={`overflow-x-auto no-scrollbar rounded-[var(--r-md)] ${
        toneDark ? "bg-[#14161a]" : "bg-sunk"
      }`}
    >
      <ul className="flex min-w-min snap-x snap-mandatory items-end gap-3.5 px-5 py-6 sm:gap-4 sm:px-7 sm:py-8">
        {items.map((shot) =>
          renderShot(
            shot,
            toneDark,
            `${shotWidth(shotFrame(shot, defaultFrame), false)} shrink-0 snap-start`,
          ),
        )}
      </ul>
    </div>
  );

  const renderBoards = (items: Shot[]) => (
    <div className="rounded-[var(--r-md)] bg-sunk px-5 py-6 sm:px-7 sm:py-8">
      <ul className="flex flex-wrap items-end gap-5">
        {items.map((shot) =>
          renderShot(shot, false, `${shotWidth(shotFrame(shot, defaultFrame), true)} shrink-0`),
        )}
      </ul>
    </div>
  );

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

      {phones.length > 0 && <div className="mt-8">{renderShelf(phones, dark)}</div>}
      {boards.length > 0 && (
        <div className={phones.length || gallery.youtube || gallery.src ? "mt-4" : "mt-8"}>
          {renderBoards(boards)}
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
