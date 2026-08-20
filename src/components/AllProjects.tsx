import { SectionHead } from "./SectionHead";
import { ProjectExplorer } from "./ProjectExplorer";
import { EarlierWork } from "./EarlierWork";
import { projects } from "@/data/projects";

export function AllProjects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="shell">
        <SectionHead
          eyebrow="Selected work"
          title="Built, measured, deployed."
          lead="Every system that left the notebook, filterable by what it does. Metrics are test-set unless noted; healthcare projects are research, not devices. Each card links to source and to the live deployment where one exists."
          impact
          aside={
            <span className="text-[13px] text-muted">
              <span className="metric-value !text-[20px]">{projects.length}</span>{" "}
              projects
            </span>
          }
        />
        <ProjectExplorer />
        <EarlierWork />
      </div>
    </section>
  );
}
