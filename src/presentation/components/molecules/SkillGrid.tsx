import {
  CodeIcon,
  LightningBoltIcon,
  Pencil2Icon,
  TimerIcon,
  CommitIcon,
  GitHubLogoIcon,
  BorderSolidIcon,
  FileIcon,
  LayersIcon,
} from "@radix-ui/react-icons";
import { SkillIcon } from "@/presentation/components/atoms/SkillIcon";
import type { ReactNode } from "react";

interface SkillGridProps {
  skills: string[];
}

const skillIconMap: Record<string, ReactNode> = {
  React: <CodeIcon className="h-6 w-6" />,
  TailwindCSS: <Pencil2Icon className="h-6 w-6" />,
  Vite: <LightningBoltIcon className="h-6 w-6" />,
  JavaScript: <FileIcon className="h-6 w-6" />,
  GSAP: <TimerIcon className="h-6 w-6" />,
  Git: <CommitIcon className="h-6 w-6" />,
  GitHub: <GitHubLogoIcon className="h-6 w-6" />,
  CSS: <BorderSolidIcon className="h-6 w-6" />,
  HTML: <CodeIcon className="h-6 w-6" />,
  "Visual Studio Code": <LayersIcon className="h-6 w-6" />,
};

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {skills.map((skill: string) => (
        <SkillIcon key={skill} name={skill} icon={skillIconMap[skill]} />
      ))}
    </div>
  );
}
