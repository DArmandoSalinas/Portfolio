import { SectionHead } from "./SectionHead";
import { SpotlightProject } from "./SpotlightProject";
import { ProjectExplorer } from "./ProjectExplorer";
import { EarlierWork } from "./EarlierWork";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

export function Work({ locale }: { locale: Locale }) {
  const { ui: t, projects, spotlight, earlier } = getContent(locale);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <SectionHead
          id="work-title"
          label={t.work.label}
          title={t.work.title}
          lead={t.work.lead}
          meta={t.projectsMeta(projects.length)}
        />

        <ol className="grid gap-5">
          {spotlight.map((p, i) => (
            <SpotlightProject key={p.id} project={p} index={i} locale={locale} />
          ))}
        </ol>

        <div className="mt-14">
          <ProjectExplorer projects={projects} locale={locale} />
        </div>
        <EarlierWork
          groups={earlier}
          label={t.earlier}
          title={t.earlierTitle}
          openLabel={t.open}
        />
      </div>
    </section>
  );
}
