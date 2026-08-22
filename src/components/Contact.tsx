import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { ArrowRight, ArrowUpRight, DownloadIcon } from "./Icons";
import { site } from "@/data/site";
import { localePath, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";

export function Contact({ locale }: { locale: Locale }) {
  const { ui: t } = getContent(locale);
  const resumeHref = localePath(locale, "/resume");

  const elsewhere = [
    { label: "LinkedIn", value: "diego-armando-salinas", href: site.links.linkedin },
    { label: "GitHub", value: "DArmandoSalinas", href: site.links.github },
    { label: "ARMATUS", value: "armatus.app", href: site.links.armatus },
    { label: locale === "es" ? "Teléfono" : "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  ];

  return (
    <section id="contact" className="section band" aria-labelledby="contact-title">
      <div className="shell">
        <SectionHead
          id="contact-title"
          label={t.contact.label}
          title={t.contact.title}
          lead={t.contact.lead}
        />

        <Reveal index={1}>
          <a
            href={`mailto:${site.email}`}
            className="link inline-block max-w-full break-words text-[clamp(1.15rem,3.2vw,1.65rem)] font-medium tracking-[-0.02em] text-ink"
          >
            {site.email.split("@")[0]}
            <wbr />@{site.email.split("@")[1]}
          </a>
        </Reveal>

        <Reveal index={2} className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {t.emailMe} <ArrowRight />
          </a>
          <a href={site.cv} download className="btn btn-outline">
            <DownloadIcon /> {t.downloadCv}
          </a>
          <a href={resumeHref} className="text-[15px] font-medium text-signal hover:underline">
            {t.viewResume}
          </a>
        </Reveal>

        <Reveal index={3}>
          <dl className="mt-14 grid gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {elsewhere.map((c) => (
              <div key={c.label}>
                <dt className="text-[13px] font-semibold text-muted">{c.label}</dt>
                <dd className="mt-1.5">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link inline-flex items-center gap-1.5 text-[15px]"
                  >
                    {c.value}
                    {c.href.startsWith("http") && <ArrowUpRight className="text-[14px]" />}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
