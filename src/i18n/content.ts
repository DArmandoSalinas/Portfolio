import { certifications, certCount, type CertGroup } from "@/data/certifications";
import { projects, SPOTLIGHT_IDS, type Project } from "@/data/projects";
import type { Locale } from "./config";
import { certificationsEs } from "./certs-es";
import { earlierByLocale } from "./earlier";
import { educationByLocale } from "./education";
import { experienceByLocale } from "./experience";
import { projectsEs } from "./projects-es";
import { courseraByLocale, stackByLocale } from "./stack";
import { siteCopy } from "./site";
import { getUi } from "./ui";

function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;
  const overlay = projectsEs[project.id];
  if (!overlay) return project;
  return {
    ...project,
    hook: overlay.hook ?? project.hook,
    problem: overlay.problem ?? project.problem,
    body: overlay.body ?? project.body,
    brief: overlay.brief ?? project.brief,
    note: overlay.note ?? project.note,
    live: overlay.live ?? project.live,
    repos: overlay.repos ?? project.repos,
    metrics: project.metrics?.map((metric, i) => ({
      value: metric.value,
      label: overlay.metrics?.[i]?.label ?? metric.label,
    })),
    gallery: project.gallery
      ? {
          ...project.gallery,
          caption: overlay.galleryCaption ?? project.gallery.caption,
          chapters: project.gallery.chapters?.map((chapter, i) => ({
            ...chapter,
            title: overlay.galleryChapters?.[i]?.title ?? chapter.title,
            caption: overlay.galleryChapters?.[i]?.caption ?? chapter.caption,
          })),
        }
      : project.gallery,
  };
}

export function getContent(locale: Locale) {
  const localized = projects.map((p) => localizeProject(p, locale));
  const byId = new Map(localized.map((p) => [p.id, p]));
  const certs: CertGroup[] = locale === "es" ? certificationsEs : certifications;

  return {
    locale,
    ui: getUi(locale),
    site: siteCopy[locale],
    projects: localized,
    spotlight: SPOTLIGHT_IDS.map((id) => byId.get(id)!),
    earlier: earlierByLocale[locale],
    experience: experienceByLocale[locale],
    education: educationByLocale[locale],
    certifications: certs,
    certCount,
    stack: stackByLocale[locale],
    coursera: courseraByLocale[locale],
  };
}

export type Content = ReturnType<typeof getContent>;
