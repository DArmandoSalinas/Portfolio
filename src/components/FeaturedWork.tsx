import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedWork() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <SectionHead
          eyebrow="Selected work"
          title="Built, measured, deployed."
          lead="Eight systems that left the notebook. Metrics are test-set unless noted; healthcare projects are research, not devices."
          impact
          aside={
            <a href="#projects" className="btn btn-ghost">
              All projects
            </a>
          }
        />

        {/* lead card spans full width */}
        <Reveal className="mb-6">
          <ProjectCard project={lead} variant="featured" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} index={i} className="h-full">
              <ProjectCard project={p} variant="featured" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
