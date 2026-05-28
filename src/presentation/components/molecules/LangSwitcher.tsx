"use client";

import { useLocale } from "@/presentation/context/LocaleContext";

export function LangSwitcher() {
  const { locale, setLocale } = useLocale();

  const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLocale}
      className="rounded-md px-3 py-1.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-red-400"
      aria-label={`Switch language to ${locale === "es" ? "English" : "Spanish"}`}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
