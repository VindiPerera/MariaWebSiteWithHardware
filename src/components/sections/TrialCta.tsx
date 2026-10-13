"use client";

import { site } from "@/lib/site";
import { TrialForm } from "./TrialForm";
import styles from "./TrialCta.module.css";
import { useLang } from "@/lib/i18n";

export function TrialCta() {
  const { t } = useLang();
  return (
    <section id="trial" className={styles.section}>
      <div data-reveal="scale" className={styles.card}>
        <div aria-hidden="true" className={styles.glow} />
        <div aria-hidden="true" className={styles.dots} />
        <div className={styles.copy}>
          <h2 className={styles.title}>{t("Run your shop on MariaPoS for 7 days, free.", "ඔබේ කඩය MariaPoS එකෙන් දින 7ක් free පවත්වන්න.")}</h2>
          <p className={styles.subtitle}>{t("Full access, no credit card. One trial per business.", "Full access, credit card එකක් ඕන නෑ. ව්‍යාපාරයකට එක trial එකයි.")}</p>
          <div id="demo" className={styles.demo}>
            {t("Prefer a walkthrough?", "Walkthrough එකක් ඕනද?")}{" "}
            <a href={site.demoHref} className={styles.demoLink}>
              {t("Book a demo", "Demo එකක් book කරන්න")}
            </a>
          </div>
        </div>
        <TrialForm />
      </div>
    </section>
  );
}
