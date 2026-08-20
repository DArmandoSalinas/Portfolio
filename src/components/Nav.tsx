"use client";

import { useEffect, useState } from "react";
import { LogoHalo } from "./LogoHalo";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";
import { site } from "@/data/site";

const IDS = site.nav.map((n) => n.href.slice(1));

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid
          ? "border-line/80 bg-black/82 backdrop-blur-[16px]"
          : "border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <nav
        className="shell flex items-center justify-between"
        style={{ height: "var(--nav-h)" }}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${site.shortName} — back to top`}
        >
          <LogoHalo size={26} bare />
          <span className="text-[13px] font-extrabold tracking-[0.14em] uppercase">
            Salinas
          </span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-colors duration-150 ${
                    isActive ? "text-primary" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-240 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={site.cv}
              download
              className="btn btn-primary !px-4 !py-2 !text-[12px]"
            >
              <DownloadIcon className="text-[13px]" />
              CV
            </a>
          </li>
        </ul>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 grid h-10 w-10 place-items-center rounded-full text-[20px] text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-black/97 backdrop-blur-xl lg:hidden"
      >
        <ul className="shell flex flex-col py-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-line/60 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] ${
                  active === item.href.slice(1) ? "text-primary" : "text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              href={site.cv}
              download
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              <DownloadIcon /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
