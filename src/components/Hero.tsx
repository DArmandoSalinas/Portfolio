import { Portrait } from "./Portrait";
import { ArrowRight, DownloadIcon } from "./Icons";
import { site } from "@/data/site";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

const d = (ms: number) => ({ "--cal-delay": `${ms}ms` }) as React.CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  const { site: copy, ui: t } = getContent(locale);

  return (
    <section
      id="top"
      className="band"
      style={{
        paddingTop: "calc(var(--nav-h) + var(--safe-top) + clamp(2.5rem, 6vw, 4.5rem))",
        paddingBottom: "clamp(3rem, 7vw, 5rem)",
      }}
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-16">
        <div>
          <p className="cal text-[15px] font-semibold tracking-[0.02em] text-signal" style={d(40)}>
            {copy.role}
          </p>
          <h1
            className="display cal mt-3 text-[clamp(2.15rem,4.8vw,3.35rem)]"
            style={d(80)}
          >
            {site.displayName}
          </h1>
          <p className="cal mt-5 max-w-[38ch] text-[19px] font-medium leading-snug text-ink" style={d(140)}>
            {copy.bio[0]}
          </p>
          <p
            className="cal mt-4 max-w-[46ch] text-[16px] leading-[1.5] text-muted"
            style={d(200)}
          >
            {copy.bio[1]}
          </p>
          <div className="cal mt-8 flex flex-wrap items-center gap-3" style={d(260)}>
            <a href="#contact" className="btn btn-primary">
              {t.getInTouch} <ArrowRight />
            </a>
            <a href={site.cv} download className="btn btn-outline">
              <DownloadIcon /> {t.downloadCv}
            </a>
          </div>
        </div>

        <Portrait locale={locale} className="cal mx-auto w-full max-w-[20rem] lg:mx-0 lg:max-w-none" />
      </div>

      <div className="shell mt-14 lg:mt-20">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
          {copy.proof.map((p) => (
            <div key={p.label}>
              <dt className="text-[15px] font-semibold text-ink">{p.label}</dt>
              <dd className="mt-1 text-[14px] leading-snug text-muted">{p.detail}</dd>
              <dd className="mt-1 text-[13px] text-muted">{p.meta}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
