import { Reveal } from "./Reveal";
import { PipelinePanel } from "./PipelinePanel";
import { site } from "@/data/site";


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
            <PipelinePanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
