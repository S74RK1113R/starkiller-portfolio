import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const tagMap: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const baseStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
  2: "text-3xl sm:text-4xl font-bold",
  3: "text-2xl sm:text-3xl font-semibold",
  4: "text-xl font-semibold",
};

export function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = tagMap[level];

  return (
    <Tag className={`${baseStyles[level]} ${className}`}>{children}</Tag>
  );
}
