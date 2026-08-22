import { cache } from "react";
import { defaultLocale, type Locale } from "./config";

const localeRef = cache((): { locale: Locale } => ({ locale: defaultLocale }));

export function setRequestLocale(locale: Locale) {
  localeRef().locale = locale;
}

export function getRequestLocale(): Locale {
  return localeRef().locale;
}
