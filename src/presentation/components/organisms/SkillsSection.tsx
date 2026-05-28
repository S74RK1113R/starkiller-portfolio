"use client";

import { Heading } from "@/presentation/components/atoms/Heading";
import { SkillGrid } from "@/presentation/components/molecules/SkillGrid";
import { useI18n } from "@/presentation/hooks/useI18n";

export function SkillsSection() {
  const t = useI18n();

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <Heading level={2} className="mb-10 text-center">
        {t.sectionTitles.skills}
      </Heading>

      <SkillGrid skills={t.skills} />
    </section>
  );
}
