"use client";

import {
  CheckCircle2,
  CreditCard,
  DollarSign,
  Package,
  Printer,
  Receipt,
  RotateCcw,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Truck,
  Undo2,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FeatureVisualPreview } from "./FeatureVisualPreview";
import styles from "./BentoGrid.module.css";

interface MainFeature {
  title: string;
  icon: LucideIcon;
  previewKey: string;
  desc: string;
  why: string;
}

const mainFeatures: MainFeature[] = [
  {
    title: "High-Velocity POS Billing",
    icon: ShoppingCart,
    previewKey: "barcode & name search billing",
    desc: "Scan barcodes or search items by typing, use F1–F12 hotkeys, toggle wholesale rates, and bill weighted goods with zero queue latency.",
    why: "Faster checkout at peak hours and fewer wrong items keyed in by hand.",
  },
  {
    title: "Shifts & Till Control",
    icon: Wallet,
    previewKey: "shift open & close",
    desc: "Cashiers open and close shifts with blind counts. Cash-in, petty cash payouts, and drawer short/excess are strictly recorded.",
    why: "Cash shortages are caught the same day and tied to the responsible cashier.",
  },
  {
    title: "Inventory with FIFO Batches",
    icon: Package,
    previewKey: "fifo batch tracking",
    desc: "Every goods delivery creates a batch with its own cost and expiry. Sales consume oldest batches first for accurate gross margin.",
    why: "Accurate profit on every sale, zero expired stock, and reliable inventory valuation.",
  },
  {
    title: "Suppliers & Purchasing",
    icon: Truck,
    previewKey: "cheque maturity reminders",
    desc: "Purchase orders, goods receiving notes (GRN), supplier payables ledger, and automatic reminders for maturing post-dated cheques.",
    why: "Pay suppliers on time, avoid double payments, and never bounce a cheque.",
  },
  {
    title: "Returns, Refunds & Credit",
    icon: Undo2,
    previewKey: "sales history & bill reprint",
    desc: "Find the original bill by invoice number, restock items back into the exact original cost batch, and refund cash or adjust store credit.",
    why: "Only genuine purchases are refunded, and stock valuation stays 100% accurate.",
  },
  {
    title: "Payments & Split Tender",
    icon: CreditCard,
    previewKey: "cash, card, bank transfer & cheque",
    desc: "Record cash, card, QR pay, bank transfer and cheques on every bill. Split one bill across multiple tender methods with change calculation.",
    why: "Removes counting mistakes at busy counters and eliminates voiding bills when customers split payment.",
  },
  {
    title: "Customer Credit & Loyalty",
    icon: Sparkles,
    previewKey: "loyalty points",
    desc: "Attach shoppers by phone number (F6), track outstanding credit books and settlements, and award loyalty points on purchases.",
    why: "Turns one-time shoppers into regulars and replaces forgotten paper credit books with a single digital ledger.",
  },
  {
    title: "Expenses & Petty Cash",
    icon: DollarSign,
    previewKey: "expense",
    desc: "Record electricity, store rent, transport, and daily petty cash expenses directly from the till drawer with category tags.",
    why: "Profit & loss reports reflect real operating costs, not just counter sales revenue.",
  },
  {
    title: "SMS Receipts & Telegram Push",
    icon: Send,
    previewKey: "telegram order alerts",
    desc: "Send paperless eBills to customer phones at checkout, and push real-time sales notifications with line items to the owner's Telegram.",
    why: "Customers keep permanent proof for returns, owners monitor branches live, and you save on thermal paper roll costs.",
  },
  {
    title: "Hardware & Printing Setup",
    icon: Printer,
    previewKey: "thermal receipt printers",
    desc: "Plug-and-play USB barcode scanners, 58mm/80mm thermal receipt printers, barcode label printers, and automatic cash drawer kick.",
    why: "Works out of the box with standard counter equipment retail shops already own.",
  },
  {
    title: "Reports & Business Intelligence",
    icon: TrendingUp,
    previewKey: "profit & loss",
    desc: "13+ exportable reports covering sales velocity, hourly rush peaks, product margins, tax collections, shrinkage, and P&L.",
    why: "Instant business figures for partners, banks and tax filings without waiting for an external accountant.",
  },
  {
    title: "Role Security & Permissions",
    icon: ShieldCheck,
    previewKey: "admin & cashier roles",
    desc: "Separate admin and cashier accounts with granular permission switches and manager PIN override at the counter.",
    why: "Cashiers focus on billing while profits, historical edits, and discount rights stay strictly with the owner.",
  },
];

export function BentoGrid() {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-main-title">
      <div data-reveal="up" className={styles.header}>
        <span className="eyebrow">Enterprise POS Architecture</span>
        <h1 id="features-main-title" className={`section-title ${styles.title}`}>
          Core POS capabilities engineered for counter speed
        </h1>
        <p className={`lead ${styles.intro}`}>
          Every module is linked to a single, lightning-fast FIFO stock ledger. All 12 core capabilities below operate
          cohesively so cashiers bill without lag and owners monitor every transaction.
        </p>
      </div>

      <div className={styles.grid}>
        {mainFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              data-reveal="up"
              data-delay={(i % 3) * 60}
              className={styles.card}
            >
              <div className={styles.cardTopRow}>
                <div className={styles.titleWrap}>
                  <span className={styles.iconBox}>
                    <Icon size={18} color="var(--red)" />
                  </span>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                </div>
                <FeatureVisualPreview featureName={feature.previewKey} />
              </div>

              <p className={styles.desc}>{feature.desc}</p>

              <div className={styles.why}>
                <CheckCircle2 size={16} color="var(--red)" />
                <span>
                  <strong>Why it matters:</strong> {feature.why}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
