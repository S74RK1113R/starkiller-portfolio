"use client";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Tags } from "@/presentation/components/atoms/Tags";
import { Button } from "@/presentation/components/atoms/Button";
import { useI18n } from "@/presentation/hooks/useI18n";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const t = useI18n();

  return (
    <article className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      <Tags items={techStack} />

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        {demoUrl && (
          <Button
            href={demoUrl}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 text-sm"
          >
            {t.buttons.viewProject}
            <ExternalLinkIcon className="h-4 w-4" />
          </Button>
        )}
        {githubUrl && (
          <Button
            href={githubUrl}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 text-sm"
          >
            {t.buttons.repository}
            <ExternalLinkIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </article>
  );
}
