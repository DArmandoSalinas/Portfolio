import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

export function Toolkit({ locale }: { locale: Locale }) {
  const { ui: t, stack } = getContent(locale);

  return (
    <section id="toolkit" className="section !pt-0" aria-labelledby="toolkit-title">
      <div className="shell">
        <SectionHead
          id="toolkit-title"
          label={t.toolkit.label}
          title={t.toolkit.title}
          lead={t.toolkit.lead}
        />

        <dl>
          {stack.map((g, i) => (
            <Reveal key={g.label} index={i}>
              <div className="grid gap-x-12 gap-y-2 border-t border-line py-6 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
                <dt className="label pt-[3px]">{g.label}</dt>
                <dd className="text-[16px] leading-[1.65] text-body">
                  {g.items.join("  ·  ")}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
