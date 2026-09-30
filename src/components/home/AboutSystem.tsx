"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Cloud,
  Monitor,
  ScanBarcode,
  Smartphone,
  Sparkles,
  Wallet,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import styles from "./AboutSystem.module.css";

const purposes: { title: string; body: string; icon: LucideIcon; metric: string }[] = [
  {
    title: "Bill customers fast",
    body: "Scan, key in or tap items, take any payment method and print or SMS the receipt in seconds.",
    icon: ScanBarcode,
    metric: "3-Sec Barcode Billing",
  },
  {
    title: "Control stock & cost",
    body: "Every sale, return and supplier delivery updates FIFO batch stock, so you always know what is on the shelf and what it cost.",
    icon: Boxes,
    metric: "Accurate FIFO Batches",
  },
  {
    title: "Account for every transaction",
    body: "Shifts, till movements, customer credit, supplier payables and expenses are all recorded in one ledger.",
    icon: Wallet,
    metric: "Shift Float Balancing",
  },
  {
    title: "Run the business from anywhere",
    body: "Reports, the cloud panel and Telegram alerts show the owner what is happening at every counter, live.",
    icon: BarChart3,
    metric: "Live Telegram Alerts",
  },
];

const flow: {
  title: string;
  body: string;
  icon: LucideIcon;
  status: string;
  badgeColor: string;
}[] = [
  {
    title: "At the counter",
    body: "MariaPoS desktop app on Windows. Works fully offline with an encrypted local database.",
    icon: Monitor,
    status: "100% Offline Local Engine",
    badgeColor: "#1faa55",
  },
  {
    title: "In the cloud",
    body: "Data syncs in the background whenever internet is available. Backed up and viewable online.",
    icon: Cloud,
    status: "Two-Way Background Sync",
    badgeColor: "#229ed9",
  },
  {
    title: "In your pocket",
    body: "Cloud panel in any browser, live Telegram sale alerts and SMS e-bills to customers.",
    icon: Smartphone,
    status: "Instant Telegram Push",
    badgeColor: "#ff8a80",
  },
];

export function AboutSystem() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="what-is-mariapos" className={styles.section} aria-labelledby="about-title">
      <div className={styles.top}>
        <div data-reveal="up" className={styles.copy}>
          <span className="eyebrow">Enterprise Counter Engineering</span>
          <h2 id="about-title" className="section-title">
            A complete shop management system, not just a billing screen
          </h2>
          <p className="lead">
            MariaPoS is a <strong>point of sale (POS) and inventory management system</strong> for Windows, built by
            JAAN Network for retail counters worldwide. It replaces the cash book, stock book, credit book and
            supplier file with one fast system that runs at the counter, even without internet.
          </p>
          <p className={styles.body}>
            Cashiers use it to bill. Managers use it to receive stock, handle returns and close shifts. Owners use it to
            see sales, profit and cash from anywhere, through reports, the MariaPoS cloud panel and instant Telegram
            alerts.
          </p>
          <Link href="/features" className={styles.link}>
            <span>See every feature explained</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div data-reveal="right" className={styles.flow} aria-label="How MariaPoS works">
          <div className={styles.flowTopHeader}>
            <div className={styles.ecosystemBadge}>
              <Zap size={14} color="#ffffff" />
              <span>Three-Tier Synchronized Architecture</span>
            </div>
            <span className={styles.flowStageCounter}>Stage 0{activeStep + 1} of 03</span>
          </div>

          <div className={styles.flowStepList}>
            {flow.map(({ title, body, icon: Icon, status }, i) => {
              const isSelected = activeStep === i;
              return (
                <div
                  key={title}
                  onClick={() => setActiveStep(i)}
                  className={`${styles.flowStep} ${isSelected ? styles.flowStepActive : ""}`}
                >
                  <span className={styles.flowIcon}>
                    <Icon size={18} color="#ffffff" />
                  </span>
                  <div className={styles.flowStepContent}>
                    <div className={styles.flowMeta}>
                      <span className={styles.flowIndex}>Stage 0{i + 1}</span>
                      <span className={styles.flowStatus}>{status}</span>
                    </div>
                    <h3 className={styles.flowTitle}>{title}</h3>
                    <p className={styles.flowBody}>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.purposeHead} data-reveal="up">
        <span className="eyebrow">Daily Impact</span>
        <h2 className={styles.purposeTitle}>Four jobs MariaPoS executes for your shop every day</h2>
      </div>

      <div className={styles.purposes}>
        {purposes.map(({ title, body, icon: Icon, metric }, i) => (
          <article key={title} data-reveal="up" data-delay={i * 80} className={styles.purpose}>
            <div className={styles.purposeTop}>
              <span className="icon-tile">
                <Icon size={24} />
              </span>
              <span className={styles.purposeMetric}>{metric}</span>
            </div>
            <h3 className={styles.purposeName}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
