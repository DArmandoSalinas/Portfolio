"use client";

import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";

export function LangSwitch({ className = "" }: { className?: string }) {
  const { locale, t } = useI18n();
  const pathname = usePathname() || "/";

  return (
    <div
      role="group"
      aria-label={t.langAria}
      className={`inline-flex items-center rounded-full border border-line bg-plate p-[3px] ${className}`}
    >
      {locales.map((code) => {
        const active = code === locale;
        const href = switchLocalePath(pathname, code as Locale);
        return (
          <a
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-[12px] font-semibold lowercase tracking-[0.04em] transition-colors ${
              active ? "lang-on bg-signal" : "text-muted hover:text-ink"
            }`}
            onClick={(event) => {
              if (active) {
                event.preventDefault();
                return;
              }
              event.preventDefault();
              const hash = window.location.hash;
              window.location.assign(href + hash);
            }}
          >
            {code}
          </a>
        );
      })}
    </div>
  );
}
