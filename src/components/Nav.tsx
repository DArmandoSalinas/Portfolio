"use client";

import { useEffect, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";
import { LangSwitch } from "./LangSwitch";
import { site } from "@/data/site";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/context";

const SECTION_IDS = ["work", "experience", "credentials", "contact"] as const;

export function Nav() {
  const { locale, t } = useI18n();
  const home = localePath(locale);
  const [lifted, setLifted] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const onScroll = () => {
      const y = window.scrollY;
      setLifted(y > 8);

      const line = window.innerHeight * 0.35;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(y < 80 ? "" : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        lifted
          ? "border-b border-line bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-paper/70 backdrop-blur-md"
      }`}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <nav
        className="shell flex items-center justify-between gap-4 sm:gap-6"
        style={{ height: "var(--nav-h)" }}
        aria-label={t.navAria}
      >
        <a
          href={`${home}#top`}
          className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-ink"
          aria-label={`${site.displayName} — ${t.backToTop}`}
        >
          {site.displayName}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={`${home}${item.href}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li>
            <LangSwitch />
          </li>
          <li>
            <a
              href={site.cv}
              download
              className="btn btn-primary !px-4 !py-2 !text-[13.5px]"
            >
              <DownloadIcon className="text-[14px]" />
              {t.cv}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            className="-mr-2 grid h-11 w-11 place-items-center text-[21px] text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div id="mobile-nav" hidden={!open} className="border-t border-line bg-paper lg:hidden">
        <ul className="shell flex flex-col py-2">
          {t.nav.map((item) => (
            <li key={item.href}>
              <a
                href={`${home}${item.href}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-4 text-[17px] font-medium ${
                  active === item.href.slice(1) ? "text-signal" : "text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-5">
            <a
              href={site.cv}
              download
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              <DownloadIcon /> {t.downloadCv}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
