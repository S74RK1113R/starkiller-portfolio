import type { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </span>
    </a>
  );
}
