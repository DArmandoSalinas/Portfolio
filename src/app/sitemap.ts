import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: site.url, es: `${site.url}/es` } },
    },
    {
      url: `${site.url}/es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: site.url, es: `${site.url}/es` } },
    },
    {
      url: `${site.url}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: { en: `${site.url}/resume`, es: `${site.url}/es/resume` },
      },
    },
    {
      url: `${site.url}/es/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: { en: `${site.url}/resume`, es: `${site.url}/es/resume` },
      },
    },
  ];
}
