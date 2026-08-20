import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const FACTS = [
  { k: "Now", v: "Generative AI Engineer at SAP" },
  { k: "Founding", v: "ARMATUS — production iOS coach" },
  { k: "Studied", v: "MSc AI, Distinction · Mechatronics" },
  { k: "Based", v: "Monterrey, MX · TN visa eligible" },
];

export function About() {
  return (
    <section id="about" className="section !pt-0" aria-labelledby="about-title">
      <div className="shell">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 id="about-title" className="section-title">
              Full systems, not notebooks.
            </h2>
            <span className="brand-underline" aria-hidden />
            <p className="mt-6 max-w-[38rem] text-[17px] leading-[1.6] text-muted text-pretty">
              {site.about}
            </p>
          </Reveal>

          <Reveal index={1}>
            <dl className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line">
              {FACTS.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline gap-4 bg-background px-5 py-4"
                >
                  <dt className="w-[4.5rem] shrink-0 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                    {f.k}
                  </dt>
                  <dd className="text-[14.5px] font-semibold leading-snug text-ink text-pretty">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
