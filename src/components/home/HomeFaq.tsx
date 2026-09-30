"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import styles from "./Home.module.css";

const faqs = [
  {
    q: "Do you really accept cash on delivery?",
    a: "Yes. You pay the courier in cash when your order arrives. No card or online payment is needed.",
  },
  {
    q: "Do you deliver to my district?",
    a: "We deliver island-wide, to all 25 districts. Typical delivery time: — working days.",
  },
  {
    q: "Can I try the software first?",
    a: "Yes. The 7-day free trial has the full software. Sign up, or message us on WhatsApp and we will help you install it.",
  },
  {
    q: "Will you help me set it up?",
    a: "Full set orders include installation and setup. For other orders, message us and we will guide you.",
  },
];

export function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.faqGrid}>
        <div className={styles.faqIntro}>
          <div className={styles.eyebrow}>FAQ</div>
          <h2 className={styles.h2}>Common questions</h2>
          <Link href="/pricing#faq" className={styles.textLink}>
            More answers
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqButton}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  {isOpen ? <Minus size={20} color="#71717a" /> : <Plus size={20} color="#71717a" />}
                </button>
                {isOpen && <p className={styles.faqAnswer}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
