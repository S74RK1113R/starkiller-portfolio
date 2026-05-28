"use client";

import { useLocale } from "@/presentation/context/LocaleContext";
import { es, en } from "@/infrastructure/i18n";
import type { I18nDictionary } from "@/infrastructure/i18n/types";

const dictionaries: Record<string, I18nDictionary> = { es, en };

export function useI18n(): I18nDictionary {
  const { locale } = useLocale();

  return dictionaries[locale] ?? es;
}
