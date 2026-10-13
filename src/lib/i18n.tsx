"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

import { ta } from "./ta";

export type Lang = "en" | "si" | "ta";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "si", label: "සිංහල", short: "සිං" },
  { code: "ta", label: "தமிழ்", short: "த" },
];

const STORAGE_KEY = "mariapos-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /**
   * Pick the text for the selected language. Sinhala comes from `si`; Tamil comes from `ta`
   * when given (for strings built at runtime), otherwise from the dictionary in lib/ta.ts
   * keyed by the English text. Falls back to English.
   */
  t: (en: string, si?: string, ta?: string) => string;
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
    if (fromUrl === "si" || fromUrl === "ta" || fromUrl === "en") {
      localStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "si" || saved === "ta" ? saved : "en";
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

/** Dev-only: remembers English strings that have no Tamil yet, so they can be collected and translated. */
function recordMissing(en: string) {
  if (process.env.NODE_ENV === "production") return;
  const w = window as unknown as { __taMissing?: Set<string> };
  (w.__taMissing ??= new Set()).add(en);
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
    () => ({
      lang,
      setLang,
      t: (en, si, taText) => {
        if (lang === "si") return si || en;
        if (lang === "ta") {
          const text = taText || ta[en];
          if (!text) recordMissing(en);
          return text || en;
        }
        return en;
      },
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Inline translated text for server components: <T en="Hello" si="ආයුබෝවන්" /> */
export function T({ en, si, ta: taText }: { en: string; si?: string; ta?: string }) {
  const { t } = useLang();
  return <>{t(en, si, taText)}</>;
}
