"use client";

import { useState } from "react";
import Link from "next/link";
import { pricingFaqs as faqs } from "@/lib/pricingFaqs";
import { site } from "@/lib/site";
import styles from "./Faq.module.css";
import { useLang } from "@/lib/i18n";

export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div data-reveal="up" className={styles.heading}>
        <h2 className={styles.title}>{t("Questions, answered", "ප්‍රශ්න වලට පිළිතුරු")}</h2>
        <p className={styles.text}>
          {t("Something else? Email", "වෙනත් දෙයක් අසන්නට තිබේද? Email කරන්න")}{" "}
          <a href={site.emailHref} className={styles.email}>
            {site.email}
          </a>
          .
        </p>
      </div>

      <div data-reveal="up" className={styles.list}>
        {faqs.map(({ q: question, a: answer, qSi, aSi }, i) => {
          const isOpen = open === i;
          return (
            <div key={question} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={styles.question}
              >
                <span>{t(question, qSi)}</span>
                <span className={styles.sign}>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className={styles.answer}>
                  {t(answer, aSi)}
                  {question.includes("refund") && (
                    <>
                      {" "}
                      <Link href="/refund-policy">{t("Read the full refund policy", "සම්පූර්ණ refund policy එක කියවන්න")}</Link>.
                    </>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
