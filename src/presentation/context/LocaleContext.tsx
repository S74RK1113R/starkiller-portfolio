"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";

const LOCALE_COOKIE = "NEXT_LOCALE";
const DEFAULT_LOCALE: Locale = "es";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: string;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (
      initialLocale &&
      (initialLocale === "es" || initialLocale === "en")
    ) {
      return initialLocale;
    }
    const cookie = getCookie(LOCALE_COOKIE);
    if (cookie === "es" || cookie === "en") return cookie;
    return DEFAULT_LOCALE;
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookie(LOCALE_COOKIE, newLocale);
  }, []);

  // Sync with cookie changes (e.g., from middleware on first visit)
  useEffect(() => {
    const cookie = getCookie(LOCALE_COOKIE);
    if (cookie === "es" || cookie === "en") {
      setLocaleState(cookie);
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
