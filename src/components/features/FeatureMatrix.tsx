"use client";

import { Check, X, Shield, Zap } from "lucide-react";
import styles from "./FeatureMatrix.module.css";
import { useLang } from "@/lib/i18n";

const comparisonRows = [
  {
    feature: "Offline Billing Architecture",
    mariapos: "100% Offline — local zero-latency database",
    traditional: "Stalls or locks up when internet drops",
    si: ["Offline Billing Architecture", "100% Offline — local zero-latency database එකක්", "Internet නැති වුණාම නවතිනවා හෝ lock වෙනවා"],
    highlight: true,
  },
  {
    feature: "Stock Deduction Accuracy",
    mariapos: "True FIFO batch tracking with exact cost valuation",
    traditional: "Crude simple averages or no batch tracking",
    si: ["Stock අඩු කිරීමේ නිරවද්‍යතාව", "නිවැරදි cost valuation එක්ක සැබෑ FIFO batch tracking", "අසම්පූර්ණ සරල averages, නැත්නම් batch tracking නැහැ"],
    highlight: true,
  },
  {
    feature: "Customer Receipts",
    mariapos: "Instant SMS eBill to phone + thermal paper print",
    traditional: "Thermal paper roll only (expensive paper waste)",
    si: ["Customer Receipts", "Phone එකට instant SMS eBill + thermal paper print", "Thermal paper roll එක විතරයි (මිල අධික කඩදාසි නාස්තිය)"],
    highlight: true,
  },
  {
    feature: "Owner Remote Alerts",
    mariapos: "Instant real-time sales push notification",
    traditional: "Manual end-of-day spreadsheet or none",
    si: ["අයිතිකරුට Remote Alerts", "Instant real-time sales push notification", "දවස අවසානයේ අතින් හදන spreadsheet එකක්, නැත්නම් කිසිවක් නැහැ"],
    highlight: true,
  },
  {
    feature: "Cashier Till Control",
    mariapos: "Blind shift close with short/excess cash record",
    traditional: "Open till drawer with untracked float",
    si: ["Cashier Till Control", "Short/excess cash record එක්ක Blind shift close", "Track නොකරන float එකක් සහිත open till drawer"],
    highlight: false,
  },
  {
    feature: "Cloud Synchronization",
    mariapos: "Two-way background sync whenever reconnected",
    traditional: "Manual backup files or locked cloud lock-in",
    si: ["Cloud Synchronization", "නැවත connect වුණු ගමන් Two-way background sync", "අතින් backup files, නැත්නම් cloud lock-in"],
    highlight: false,
  },
];

export function FeatureMatrix() {
  const { t } = useLang();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div data-reveal="up" className={styles.header}>
          <span className="eyebrow">{t("Direct Comparison", "සෘජු සැසඳීම")}</span>
          <h2 className="section-title">{t("Built differently from old, clunky retail software", "පරණ, අපහසු retail software වලට වඩා වෙනස්ව නිර්මාණය කළ")}</h2>
          <p className="lead">
            {t("See why retail, pharmacy, and grocery counters worldwide choose MariaPoS for peak hours.", "Peak hours වලට retail, pharmacy සහ grocery counters ලොව පුරා MariaPoS තෝරාගන්නේ ඇයිද බලන්න.")}
          </p>
        </div>

        <div data-reveal="up" data-delay="100" className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>{t("Core Capability", "ප්‍රධාන හැකියාව")}</div>
            <div className={`${styles.colMaria} ${styles.colMariaHeader}`}>
              <div className={styles.mariaBadge}>
                <Zap size={14} color="#ffffff" />
                <span>MariaPoS</span>
              </div>
            </div>
            <div className={styles.colTrad}>{t("Traditional Clunky POS", "සාම්ප්‍රදායික, අපහසු POS")}</div>
          </div>

          <div className={styles.tableBody}>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} className={`${styles.row} ${row.highlight ? styles.rowHighlight : ""}`}>
                <div className={styles.colFeature}>
                  <span className={styles.featureName}>{t(row.feature, row.si[0])}</span>
                </div>
                <div className={`${styles.colMaria} ${styles.colMariaCell}`}>
                  <span className={styles.checkIcon}>
                    <Check size={14} color="#ffffff" strokeWidth={3} />
                  </span>
                  <span>{t(row.mariapos, row.si[1])}</span>
                </div>
                <div className={`${styles.colTrad} ${styles.colTradCell}`}>
                  <span className={styles.xIcon}>
                    <X size={14} color="#9ca3af" strokeWidth={2.5} />
                  </span>
                  <span>{t(row.traditional, row.si[2])}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
