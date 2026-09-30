import { Check, X, Shield, Zap } from "lucide-react";
import styles from "./FeatureMatrix.module.css";

const comparisonRows = [
  {
    feature: "Offline Billing Architecture",
    mariapos: "100% Offline — local zero-latency database",
    traditional: "Stalls or locks up when internet drops",
    highlight: true,
  },
  {
    feature: "Stock Deduction Accuracy",
    mariapos: "True FIFO batch tracking with exact cost valuation",
    traditional: "Crude simple averages or no batch tracking",
    highlight: true,
  },
  {
    feature: "Customer Receipts",
    mariapos: "Instant SMS eBill to phone + thermal paper print",
    traditional: "Thermal paper roll only (expensive paper waste)",
    highlight: true,
  },
  {
    feature: "Owner Remote Alerts",
    mariapos: "Instant real-time Telegram sales push notification",
    traditional: "Manual end-of-day spreadsheet or none",
    highlight: true,
  },
  {
    feature: "Cashier Till Control",
    mariapos: "Blind shift close with short/excess cash record",
    traditional: "Open till drawer with untracked float",
    highlight: false,
  },
  {
    feature: "Cloud Synchronization",
    mariapos: "Two-way background sync whenever reconnected",
    traditional: "Manual backup files or locked cloud lock-in",
    highlight: false,
  },
];

export function FeatureMatrix() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div data-reveal="up" className={styles.header}>
          <span className="eyebrow">Direct Comparison</span>
          <h2 className="section-title">Built differently from old, clunky retail software</h2>
          <p className="lead">
            See why retail, pharmacy, and grocery counters worldwide choose MariaPoS for peak hours.
          </p>
        </div>

        <div data-reveal="up" data-delay="100" className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>Core Capability</div>
            <div className={`${styles.colMaria} ${styles.colMariaHeader}`}>
              <div className={styles.mariaBadge}>
                <Zap size={14} color="#ffffff" />
                <span>MariaPoS</span>
              </div>
            </div>
            <div className={styles.colTrad}>Traditional Clunky POS</div>
          </div>

          <div className={styles.tableBody}>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} className={`${styles.row} ${row.highlight ? styles.rowHighlight : ""}`}>
                <div className={styles.colFeature}>
                  <span className={styles.featureName}>{row.feature}</span>
                </div>
                <div className={`${styles.colMaria} ${styles.colMariaCell}`}>
                  <span className={styles.checkIcon}>
                    <Check size={14} color="#ffffff" strokeWidth={3} />
                  </span>
                  <span>{row.mariapos}</span>
                </div>
                <div className={`${styles.colTrad} ${styles.colTradCell}`}>
                  <span className={styles.xIcon}>
                    <X size={14} color="#9ca3af" strokeWidth={2.5} />
                  </span>
                  <span>{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
