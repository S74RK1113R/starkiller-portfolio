"use client";

import { Heading } from "@/presentation/components/atoms/Heading";
import { ProjectCard } from "@/presentation/components/molecules/ProjectCard";
import { useI18n } from "@/presentation/hooks/useI18n";

export function ProjectsSection() {
  const t = useI18n();
  const projectIds = Object.keys(t.projectNames) as Array<
    keyof typeof t.projectNames
  >;

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <Heading level={2} className="mb-10 text-center">
        {t.sectionTitles.projects}
      </Heading>

      <div className="grid gap-6 md:grid-cols-2">
        {projectIds.map((id) => (
          <ProjectCard
            key={id}
            title={t.projectNames[id]}
            description={t.projectDescriptions[id]}
            techStack={t.projectTech[id]}
            demoUrl={t.projectUrls[id]}
          />
        ))}
      </div>
    </section>
  );
}
