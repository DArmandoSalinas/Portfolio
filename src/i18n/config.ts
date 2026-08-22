export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeHtml: Record<Locale, string> = {
  en: "en",
  es: "es",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  es: "es_MX",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

/** Strip a leading /en or /es so the rest of the path can be re-prefixed. */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function switchLocalePath(pathname: string, next: Locale): string {
  return localePath(next, stripLocale(pathname));
}
