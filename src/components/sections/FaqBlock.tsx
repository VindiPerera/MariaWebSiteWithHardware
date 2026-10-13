"use client";

import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import styles from "./FaqBlock.module.css";
import { useLang } from "@/lib/i18n";

type Props = {
  title: string;
  titleSi?: string;
  eyebrow?: string;
  eyebrowSi?: string;
  faqs: { q: string; a: string; qSi?: string; aSi?: string }[];
};

/** Server-rendered FAQ (native <details>) with FAQPage structured data. */
export function FaqBlock({ title, titleSi, eyebrow = "FAQ", eyebrowSi = "නිතර අසන ප්‍රශ්න", faqs }: Props) {
  const { t } = useLang();
  return (
    <section className={styles.section} aria-label={t(title, titleSi)}>
      <JsonLd data={faqSchema(faqs)} />
      <div data-reveal="up" className={styles.heading}>
        <span className="eyebrow">{t(eyebrow, eyebrow === "FAQ" ? eyebrowSi : undefined)}</span>
        <h2 className={styles.title}>{t(title, titleSi)}</h2>
      </div>
      <div data-reveal="up" className={styles.list}>
        {faqs.map(({ q, a, qSi, aSi }, i) => (
          <details key={q} className={styles.item} open={i === 0}>
            <summary className={styles.question}>
              <h3>{t(q, qSi)}</h3>
              <Plus size={18} className={styles.sign} />
            </summary>
            <p className={styles.answer}>{t(a, aSi)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
