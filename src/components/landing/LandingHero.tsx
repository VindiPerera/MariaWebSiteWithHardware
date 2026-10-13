"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./Landing.module.css";
import { useLang } from "@/lib/i18n";

type Props = {
  eyebrow: string;
  eyebrowSi?: string;
  title: string;
  titleSi?: string;
  intro: string;
  introSi?: string;
  crumbs: { name: string; path: string }[];
  /** Same heading in local languages, e.g. Tamil and Sinhala, for native-script searches. */
  localTitles?: { lang: string; text: string }[];
};

export function LandingHero({ eyebrow, eyebrowSi, title, titleSi, intro, introSi, crumbs, localTitles }: Props) {
  const { t } = useLang();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.crumbs}>
            <li>
              <Link href="/">{t("Home", "මුල් පිටුව")}</Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <span className="eyebrow">{t(eyebrow, eyebrowSi)}</span>
        <h1 className={styles.title}>{t(title, titleSi)}</h1>
        {localTitles?.map(({ lang, text }) => (
          <p key={lang} lang={lang} className={styles.localTitle}>
            {text}
          </p>
        ))}
        <p className={styles.intro}>{t(intro, introSi)}</p>
        <div className={styles.actions}>
          <a href="#trial" className={styles.primary}>
            {t(`Start ${site.trialDays}-day free trial`, `දින ${site.trialDays}ක free trial එක පටන් ගන්න`, `${site.trialDays} நாள் free trial-ஐத் தொடங்குங்கள்`)} <ArrowRight size={16} />
          </a>
          <a href={site.phoneHref} className={styles.secondary}>
            <Phone size={16} color="var(--red)" /> {t("Call", "අමතන්න")} {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
