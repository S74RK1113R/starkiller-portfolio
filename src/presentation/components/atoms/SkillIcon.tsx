import type { ReactNode } from "react";

interface SkillIconProps {
  name: string;
  icon?: ReactNode;
}

export function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800">
      <div className="flex h-12 w-12 items-center justify-center text-gray-700 dark:text-gray-200">
        {icon}
      </div>
      <span className="text-center text-sm font-medium text-gray-800 dark:text-gray-100">
        {name}
      </span>
    </div>
  );
}
