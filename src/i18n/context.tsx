"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import { defaultLocale } from "./config";
import { getUi, type Ui } from "./ui";

type I18nValue = {
  locale: Locale;
  t: Ui;
};

const I18nContext = createContext<I18nValue>({
  locale: defaultLocale,
  t: getUi(defaultLocale),
});

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, t: getUi(locale) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  return useContext(I18nContext);
}
