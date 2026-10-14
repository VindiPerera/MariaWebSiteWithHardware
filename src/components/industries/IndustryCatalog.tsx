"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { industries, type Industry } from "@/lib/industries";
import { industriesSi, industryPowerSi, industryTabSi } from "@/lib/industriesSi";
import styles from "./IndustryCatalog.module.css";
import { useLang } from "@/lib/i18n";

// Taglines / superpowers for each industry
const industrySuperpowers: Record<string, { tag: string; metric: string; highlight: string }> = {
  "supermarket-grocery": {
    tag: "High Volume Queues",
    metric: "⚡ 3-Sec Barcode Checkout",
    highlight: "Decimal weights (kg/g) & instant SMS receipts",
  },
  pharmacy: {
    tag: "Batch & Expiry Control",
    metric: "💊 FIFO Expiry Valuation",
    highlight: "Distributor payables & post-dated cheque alerts",
  },
  "hardware-store": {
    tag: "Contractor Credit",
    metric: "📏 Metre / Decimal Units",
    highlight: "Wholesale (F5) toggle & trade customer ledger",
  },
  "clothing-textile": {
    tag: "Festival Rushes",
    metric: "🏷️ Season Promo Codes",
    highlight: "Invoice returns, loyalty points & fabric by metre",
  },
  "bookshop-stationery": {
    tag: "School Season Rush",
    metric: "📚 ISBN & Label Print",
    highlight: "Barcode label generator & low-stock pre-orders",
  },
  "electronics-mobile": {
    tag: "High-Value Items",
    metric: "🛡️ Split Pay & Warranty",
    highlight: "Part cash / part card with searchable bill history",
  },
  "cosmetics-beauty": {
    tag: "Repeat Shoppers",
    metric: "✨ Built-in Loyalty Points",
    highlight: "Customer profiles & shrinkage loss audit",
  },
  "bakery-cafe": {
    tag: "Rapid Counter Rush",
    metric: "☕ Touchscreen Keypad",
    highlight: "Blind shift cashier till float balancing",
  },
  "wholesale-distribution": {
    tag: "Trade Distribution",
    metric: "📦 Wholesale Price Tiers",
    highlight: "Customer receivables & supplier payables ledger",
  },
  "auto-parts": {
    tag: "Part Number Search",
    metric: "🔧 OEM Part Lookup",
    highlight: "FIFO landed cost & mechanic credit accounts",
  },
};

const filterTabs = [
  { id: "all", label: "All Industries" },
  { id: "retail", label: "Grocery & Retail" },
  { id: "healthcare", label: "Pharmacy & Care" },
  { id: "trades", label: "Hardware & Auto" },
  { id: "lifestyle", label: "Fashion & Beauty" },
  { id: "food", label: "Bakery & Takeaway" },
];

export function IndustryCatalog() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("all");
  const { lang } = useLang();

  const filtered = industries.filter((ind) => {
    if (activeTab === "all") return true;
    if (activeTab === "retail") return ["supermarket-grocery", "wholesale-distribution", "bookshop-stationery"].includes(ind.slug);
    if (activeTab === "healthcare") return ["pharmacy", "cosmetics-beauty"].includes(ind.slug);
    if (activeTab === "trades") return ["hardware-store", "auto-parts"].includes(ind.slug);
    if (activeTab === "lifestyle") return ["clothing-textile", "cosmetics-beauty", "electronics-mobile"].includes(ind.slug);
    if (activeTab === "food") return ["bakery-cafe"].includes(ind.slug);
    return true;
  });

  return (
    <section className={styles.section}>
      {/* Category Filter Tabs */}
      <div data-reveal="up" className={styles.filterWrap}>
        <div className={styles.filterPills}>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.filterPill} ${activeTab === tab.id ? styles.filterPillActive : ""}`}
            >
              {t(tab.label, industryTabSi[tab.label])}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Elevated Industry Cards */}
      <div className={styles.grid}>
        {filtered.map(({ slug, name, icon: Icon, intro, keyword }) => {
          const si = industriesSi[slug];
          const base = industrySuperpowers[slug];
          const power = base ?? {
            tag: "Counter Optimized",
            metric: "⚡ Zero-Lag Billing",
            highlight: "Full FIFO stock ledger & shift control",
          };

          return (
            <Link key={slug} href={`/industries/${slug}`} data-reveal="up" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <Icon size={24} color="#ffffff" />
                </div>
                <div className={styles.badgesCol}>
                  <span className={styles.tradeTag}>{t(power.tag, industryPowerSi[slug]?.tag)}</span>
                  <span className={styles.metricPill}>{t(power.metric, industryPowerSi[slug]?.metric)}</span>
                </div>
              </div>

              <h2 className={styles.cardTitle}>{t(name, si?.name)}</h2>
              <p className={styles.cardBody}>{t(intro, si?.intro)}</p>

              <div className={styles.highlightRow}>
                <CheckCircle2 size={15} color="var(--red)" />
                <span className={styles.highlightText}>{t(power.highlight, industryPowerSi[slug]?.highlight)}</span>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.cardLink}>
                  {lang === "si" ? `${t(name, si?.name).split(" ")[0]} Guide එක බලන්න` : lang === "ta" ? `${t(name).split(" ")[0]} வழிகாட்டியைப் பாருங்கள்` : `Explore ${name.split(" ")[0]} Guide`}
                </span>
                <span className={styles.arrowCircle}>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
