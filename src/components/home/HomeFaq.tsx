"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import styles from "./Home.module.css";
import { useLang } from "@/lib/i18n";

const faqs = [
  {
    q: "Do you really accept cash on delivery?",
    a: "Yes. You pay the courier in cash when your order arrives. No card or online payment is needed.",
    qSi: "ඇත්තටම Cash on Delivery ගන්නවද?",
    aSi: "ඔව්. Order එක ලැබුණාම courier එකට cash ගෙවන්න. Card එකක් හෝ online payment එකක් අවශ්‍ය නැහැ.",
  },
  {
    q: "Do you deliver to my district?",
    a: "We deliver island-wide, to all 25 districts. Typical delivery time: — working days.",
    qSi: "මගේ දිස්ත්‍රික්කයට deliver කරනවද?",
    aSi: "දිස්ත්‍රික්ක 25ටම, මුළු රටටම අපි deliver කරනවා. සාමාන්‍ය delivery කාලය: වැඩ කරන දින —.",
  },
  {
    q: "Can I try the software first?",
    a: "Yes. The 7-day free trial has the full software. Sign up, or message us on WhatsApp and we will help you install it.",
    qSi: "මුලින් software එක try කරලා බලන්න පුළුවන්ද?",
    aSi: "පුළුවන්. දින 7ක නොමිලේ trial එකේ සම්පූර්ණ software එකම ලැබෙනවා. Sign up වෙන්න, නැත්නම් WhatsApp එකෙන් message කරන්න, install කරන්න අපි උදව් කරනවා.",
  },
  {
    q: "Will you help me set it up?",
    a: "Full set orders include installation and setup. For other orders, message us and we will guide you.",
    qSi: "Set up කරන්න උදව් කරනවද?",
    aSi: "සම්පූර්ණ set එකක් order කළොත් installation සහ setup එකත් ඇතුළත්. වෙනත් orders වලට message කරන්න, අපි මඟ පෙන්වනවා.",
  },
];

export function HomeFaq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.faqGrid}>
        <div className={styles.faqIntro}>
          <div className={styles.eyebrow}>{t("FAQ", "නිතර අසන ප්‍රශ්න")}</div>
          <h2 className={styles.h2}>{t("Common questions", "නිතර අසන ප්‍රශ්න")}</h2>
          <Link href="/pricing#faq" className={styles.textLink}>
            {t("More answers", "තව පිළිතුරු")}
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
                  {t(f.q, f.qSi)}
                  {isOpen ? <Minus size={20} color="#71717a" /> : <Plus size={20} color="#71717a" />}
                </button>
                {isOpen && <p className={styles.faqAnswer}>{t(f.a, f.aSi)}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
