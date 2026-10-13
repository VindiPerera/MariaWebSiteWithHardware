"use client";

import { Languages } from "lucide-react";
import { languages, useLang, type Lang } from "@/lib/i18n";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <label className={`${styles.wrap} ${className}`} title="Language / භාෂාව">
      <Languages size={15} className={styles.icon} aria-hidden />
      <select
        className={styles.select}
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label="Language / භාෂාව"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
