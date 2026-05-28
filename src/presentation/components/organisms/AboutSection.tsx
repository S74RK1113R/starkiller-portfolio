"use client";

import { Heading } from "@/presentation/components/atoms/Heading";
import { useI18n } from "@/presentation/hooks/useI18n";

export function AboutSection() {
  const t = useI18n();

  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6"
    >
      <Heading level={2} className="mb-10 text-center">
        {t.sectionTitles.about}
      </Heading>

      <div className="space-y-4">
        {t.aboutParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
