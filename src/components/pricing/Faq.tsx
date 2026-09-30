"use client";

import { useState } from "react";
import Link from "next/link";
import { pricingFaqs as faqs } from "@/lib/pricingFaqs";
import { site } from "@/lib/site";
import styles from "./Faq.module.css";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div data-reveal="up" className={styles.heading}>
        <h2 className={styles.title}>Questions, answered</h2>
        <p className={styles.text}>
          Something else? Email{" "}
          <a href={site.emailHref} className={styles.email}>
            {site.email}
          </a>
          .
        </p>
      </div>

      <div data-reveal="up" className={styles.list}>
        {faqs.map(({ q: question, a: answer }, i) => {
          const isOpen = open === i;
          return (
            <div key={question} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={styles.question}
              >
                <span>{question}</span>
                <span className={styles.sign}>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className={styles.answer}>
                  {answer}
                  {question.includes("refund") && (
                    <>
                      {" "}
                      <Link href="/refund-policy">Read the full refund policy</Link>.
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
