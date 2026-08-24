"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";
import type { Project } from "@/data/projects";
import { getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

type Gallery = NonNullable<Project["gallery"]>;

export function ProjectMedia({
  gallery,
  locale,
}: {
  gallery: Gallery;
  locale: Locale;
}) {
  const t = getUi(locale);
  const [shown, setShown] = useState<{ src: string; caption: string } | null>(null);

  if (gallery.kind === "video" && gallery.src) {
    return (
      <figure className="mt-8 overflow-hidden rounded-[var(--r-md)] bg-sunk">
        <video
          controls
          playsInline
          preload="metadata"
          poster={gallery.poster}
          className="aspect-video w-full bg-ink object-cover"
        >
          <source src={gallery.src} type="video/mp4" />
        </video>
        {gallery.caption && (
          <figcaption className="px-4 py-3 text-[13px] text-muted">{gallery.caption}</figcaption>
        )}
      </figure>
    );
  }

  const shots = gallery.shots ?? [];
  if (shots.length === 0) return null;

  const dark = gallery.tone === "dark";
  const solo = shots.length === 1;

  return (
    <>
      <div
        className={`mt-8 overflow-x-auto no-scrollbar rounded-[var(--r-md)] ${
          dark ? "bg-[#14161a]" : "bg-sunk"
        }`}
      >
        <ul
          className={`flex snap-x snap-mandatory items-end gap-4 px-5 py-6 sm:gap-5 sm:px-7 sm:py-8 ${
            solo ? "justify-center" : "min-w-min"
          }`}
        >
          {shots.map((shot) => (
            <li
              key={shot.src}
              className={
                solo
                  ? "w-[min(16.5rem,58%)]"
                  : "w-[8.8rem] shrink-0 snap-start sm:w-[10.4rem]"
              }
            >
              <button
                type="button"
                onClick={() => setShown({ src: shot.src, caption: shot.alt })}
                className="device-phone cert-tile block w-full cursor-zoom-in overflow-hidden"
                aria-label={t.enlarge(shot.alt)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover object-top"
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
          ))}
        </ul>
      </div>

      <Lightbox
        open={Boolean(shown)}
        src={shown?.src}
        caption={shown?.caption}
        onClose={() => setShown(null)}
      />
    </>
  );
}
