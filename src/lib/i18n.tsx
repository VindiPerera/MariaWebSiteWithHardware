"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type Lang = "en" | "si";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "si", label: "සිංහල", short: "සිං" },
];

const STORAGE_KEY = "mariapos-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the Sinhala (Sinhala + English mix) text when Sinhala is selected, else English. */
  t: (en: string, si?: string) => string;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

// Language lives in localStorage; useSyncExternalStore keeps server and first client render on "en"
// and switches to the saved choice right after hydration.
const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    // A shared link such as /?lang=si wins over (and updates) the saved choice.
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "si" || fromUrl === "en") {
      localStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "si" ? "si" : "en";
  } catch {
    return "en";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
    listeners.forEach((l) => l());
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: (en, si) => (lang === "si" && si ? si : en) }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Inline translated text for server components: <T en="Hello" si="ආයුබෝවන්" /> */
export function T({ en, si }: { en: string; si?: string }) {
  const { t } = useLang();
  return <>{t(en, si)}</>;
}
