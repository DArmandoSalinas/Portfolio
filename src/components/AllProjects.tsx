import { SectionHead } from "./SectionHead";
import { ProjectExplorer } from "./ProjectExplorer";
import { EarlierWork } from "./EarlierWork";
import { projects } from "@/data/projects";

export function AllProjects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="shell">
        <SectionHead
          eyebrow="All projects"
          title="The full archive."
          lead="Filter by what the system does. Every card links to source, and to the live deployment where one exists."
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
