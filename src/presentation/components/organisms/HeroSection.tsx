"use client";

import { ArrowDownIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heading } from "@/presentation/components/atoms/Heading";
import { Button } from "@/presentation/components/atoms/Button";
import { useI18n } from "@/presentation/hooks/useI18n";

export function HeroSection() {
  const t = useI18n();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Heading level={1} className="mb-4 text-gray-800 dark:text-gray-100">
          {t.greeting}
          <span className="text-red-600">{t.name}</span>
        </Heading>

        <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          {t.role}
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {t.aboutText}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">{t.nav.projects}</Button>

          <Button
            href="https://github.com/S74RK1113R"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <GitHubLogoIcon className="h-5 w-5" />
            GitHub
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDownIcon className="h-6 w-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
}
