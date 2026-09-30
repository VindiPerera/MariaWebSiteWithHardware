"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Barcode,
  BellRing,
  Boxes,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  Lock,
  MessageSquare,
  Monitor,
  Printer,
  Receipt,
  ScanBarcode,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  WifiOff,
  Zap,
  type LucideIcon,
} from "lucide-react";
import styles from "./StoreExperience.module.css";

interface RetailScene {
  id: string;
  tabLabel: string;
  tabSubtitle: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  subtitle: string;
  statusBadge: {
    status: string;
    sub: string;
    color: string;
  };
  features: {
    title: string;
    desc: string;
    icon: LucideIcon;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

const retailScenes: RetailScene[] = [
  {
    id: "counter",
    tabLabel: "Counter Checkout",
    tabSubtitle: "Offline Fast Billing",
    icon: Monitor,
    tag: "Front Counter Engineering",
    title: "High-speed billing that never drops during peak rush",
    subtitle:
      "Engineered for fast retail counters. Cashiers scan barcodes, tap quick touch categories, tender split cash or card, and print crisp receipts in under 3 seconds.",
    statusBadge: {
      status: "Till Online",
      sub: "100% Offline SQLite Active",
      color: "#22c55e",
    },
    features: [
      {
        title: "100% Offline Resilience",
        desc: "All billing, inventory lookups, and cash floats run locally. If the internet disconnects, your line keeps moving without delay.",
        icon: WifiOff,
      },
      {
        title: "Touch & Hotkey Speed",
        desc: "Complete an entire transaction using single-key shortcuts (F12 Cash, F5 Discount, F9 Hold) or large touch screen buttons.",
        icon: Zap,
      },
      {
        title: "Plug & Play Hardware",
        desc: "Native driver support for 80mm & 58mm thermal receipt printers, USB barcode scanners, customer displays, and cash drawers.",
        icon: Printer,
      },
    ],
    metrics: [
      { label: "Checkout Speed", value: "< 3.5s" },
      { label: "Offline Uptime", value: "100%" },
      { label: "Tender Types", value: "Cash, Card, Credit" },
    ],
    ctaText: "Explore billing features",
    ctaHref: "/features",
  },
  {
    id: "pocket",
    tabLabel: "Owner in Pocket",
    tabSubtitle: "Live Cloud Push",
    icon: Smartphone,
    tag: "Remote Business Intelligence",
    title: "Real-time Telegram sale alerts & cloud control anywhere",
    subtitle:
      "Whether you are traveling or having coffee down the street, every completed sale pushes instantly to your Telegram with item details and profit margin.",
    statusBadge: {
      status: "Pushed 12s ago",
      sub: "Direct Bot Notification",
      color: "#38bdf8",
    },
    features: [
      {
        title: "Instant Telegram Bot Notifications",
        desc: "Receive real-time notifications with order total, cashier ID, payment method, and items the exact second the receipt prints.",
        icon: Send,
      },
      {
        title: "Cloud Owner Dashboard",
        desc: "Log into the MariaPOS web portal from any phone, tablet, or laptop to view multi-branch revenue, gross profit, and live cash in drawer.",
        icon: TrendingUp,
      },
      {
        title: "Discrepancy & Blind Shift Alerts",
        desc: "Detect any short cash in drawer, unexpected discount, or deleted item with immediate alerts sent directly to management.",
        icon: BellRing,
      },
    ],
    metrics: [
      { label: "Push Notification Delay", value: "< 1 sec" },
      { label: "Remote Access", value: "Any Browser" },
      { label: "Multi-Store Support", value: "Unlimited Tills" },
    ],
    ctaText: "See cloud panel capabilities",
    ctaHref: "/features",
  },
  {
    id: "warehouse",
    tabLabel: "FIFO Stock Control",
    tabSubtitle: "Batch Costing",
    icon: Boxes,
    tag: "Backroom & Warehouse Management",
    title: "Strict FIFO batch costing, expiry alerts & barcode inward",
    subtitle:
      "Never suffer stock book mismatches or expired goods. Scan incoming supplier pallets, assign FIFO lots, and automate inventory valuation across all shelves.",
    statusBadge: {
      status: "Stock Landed",
      sub: "Batch #B-409 Verified",
      color: "#22c55e",
    },
    features: [
      {
        title: "True First-In, First-Out (FIFO)",
        desc: "Products bought at different supplier costs are deducted chronologically, providing 100% accurate profit margins and tax valuation.",
        icon: Boxes,
      },
      {
        title: "Batch & Expiry Date Alarms",
        desc: "Get proactive warnings before perishable or seasonal goods expire. Restock older batches to the front of customer shelves first.",
        icon: Clock,
      },
      {
        title: "Barcode Label Generation",
        desc: "Print custom barcode labels with item name, retail price, and batch code directly from your thermal barcode printer.",
        icon: Barcode,
      },
    ],
    metrics: [
      { label: "Stock Accuracy", value: "99.8%" },
      { label: "Valuation Method", value: "Strict FIFO" },
      { label: "Expiry Alarms", value: "30/60/90 Days" },
    ],
    ctaText: "Discover inventory tools",
    ctaHref: "/features",
  },
  {
    id: "sms",
    tabLabel: "Paperless SMS e-Bills",
    tabSubtitle: "Digital SMS Receipt",
    icon: Receipt,
    tag: "Modern Customer Checkout",
    title: "Eco-friendly SMS receipts delivered to customer phones",
    subtitle:
      "Give shoppers a modern digital receipt on their smartphone with one click. Reduce expensive thermal paper roll consumption while building customer loyalty.",
    statusBadge: {
      status: "Delivered in 1.8s",
      sub: "Branded Gateway Active",
      color: "#22c55e",
    },
    features: [
      {
        title: "Paperless 1-Click Dispatch",
        desc: "Enter the customer mobile number at checkout or select an existing customer profile. The receipt sends automatically via SMS gateway.",
        icon: Smartphone,
      },
      {
        title: "Permanent Warranty Proof",
        desc: "Customers receive a branded SMS with invoice number, items, total, and a secure online link to review or download the full receipt anytime.",
        icon: ShieldCheck,
      },
      {
        title: "Save on Paper Overhead",
        desc: "Cut thermal paper roll purchases by up to 50-70% while offering customers the modern digital checkout experience they expect.",
        icon: Receipt,
      },
    ],
    metrics: [
      { label: "Delivery Speed", value: "1.8 seconds" },
      { label: "Paper Reduction", value: "Up to 70%" },
      { label: "Customer Transparency", value: "100%" },
    ],
    ctaText: "Learn about SMS e-billing",
    ctaHref: "/features",
  },
];

/* 1. Till Simulator */
function TillSimulator() {
  return (
    <div className={styles.simWrapper}>
      <div className={styles.simWindowHeader}>
        <div className={styles.simWindowDots}>
          <span className={styles.simDotRed} />
          <span className={styles.simDotYellow} />
          <span className={styles.simDotGreen} />
        </div>
        <span className={styles.simWindowTitle}>MariaPoS Till #01 — Active Register</span>
        <span className={styles.simStatusPill}>
          <span className={styles.pulseGreen} /> 100% OFFLINE READY
        </span>
      </div>

      <div className={styles.simBody}>
        {/* Scanner Bar */}
        <div className={styles.tillScanBar}>
          <ScanBarcode size={16} className={styles.tillScanIcon} />
          <span className={styles.tillScanCode}>[ 893450012903 ]</span>
          <span className={styles.tillScanBadge}>Barcode Matched</span>
        </div>

        {/* Cart Line Items */}
        <div className={styles.tillCartTable}>
          <div className={styles.tillCartHeader}>
            <span>Item Description</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className={styles.tillCartRow}>
            <span className={styles.tillItemName}>1000-D Vitamin D3 60s</span>
            <span>1</span>
            <span>$15.00</span>
            <span className={styles.tillItemTotal}>$15.00</span>
          </div>
          <div className={styles.tillCartRow}>
            <span className={styles.tillItemName}>3M Surgical Plaster 1/2" Roll</span>
            <span>2</span>
            <span>$4.50</span>
            <span className={styles.tillItemTotal}>$9.00</span>
          </div>
          <div className={styles.tillCartRow}>
            <span className={styles.tillItemName}>4Ever Aloe Vera Skin Gel 100ml</span>
            <span>1</span>
            <span>$14.50</span>
            <span className={styles.tillItemTotal}>$14.50</span>
          </div>
        </div>

        {/* Live Calculation Strip */}
        <div className={styles.tillSummaryStrip}>
          <div className={styles.tillCalcCol}>
            <span className={styles.tillCalcLabel}>Subtotal</span>
            <span className={styles.tillCalcVal}>$38.50</span>
          </div>
          <div className={styles.tillCalcCol}>
            <span className={styles.tillCalcLabel}>Tax / VAT</span>
            <span className={styles.tillCalcVal}>$0.00</span>
          </div>
          <div className={styles.tillCalcColHighlight}>
            <span className={styles.tillCalcLabel}>Total Due</span>
            <span className={styles.tillCalcTotalVal}>$38.50</span>
          </div>
        </div>

        {/* Hotkey Tender Buttons */}
        <div className={styles.tillHotkeysRow}>
          <div className={styles.tillHotkeyBtnActive}>
            <span className={styles.hotkeyTag}>F12</span>
            <span>Cash Tendered ($50.00)</span>
          </div>
          <div className={styles.tillHotkeyBtn}>
            <span className={styles.hotkeyTag}>F5</span>
            <span>Card</span>
          </div>
          <div className={styles.tillHotkeyBtn}>
            <span className={styles.hotkeyTag}>F9</span>
            <span>Hold</span>
          </div>
        </div>

        {/* Peripheral Telemetry */}
        <div className={styles.tillPeripheralBar}>
          <span className={styles.peripheralItem}>
            <Printer size={13} color="#22c55e" /> 80mm Thermal Ready
          </span>
          <span className={styles.peripheralItem}>
            <CheckCircle2 size={13} color="#38bdf8" /> Cash Drawer Armed
          </span>
          <span className={styles.peripheralItem}>
            <Zap size={13} color="#f59e0b" /> Response: 0.8s
          </span>
        </div>
      </div>
    </div>
  );
}

/* 2. Telegram Alert Simulator */
function TelegramSimulator() {
  return (
    <div className={styles.simWrapper}>
      <div className={styles.simWindowHeader}>
        <div className={styles.simWindowDots}>
          <span className={styles.simDotRed} />
          <span className={styles.simDotYellow} />
          <span className={styles.simDotGreen} />
        </div>
        <span className={styles.simWindowTitle}>MariaPoS Cloud Telegram Bot</span>
        <span className={styles.simStatusPillBlue}>
          <span className={styles.pulseBlue} /> BOT ACTIVE
        </span>
      </div>

      <div className={styles.simBody}>
        <div className={styles.chatMessage}>
          <div className={styles.chatBubbleHeader}>
            <span className={styles.chatIconBox}>
              <Send size={13} color="#ffffff" />
            </span>
            <span className={styles.chatSender}>MariaPoS Alert Bot</span>
            <span className={styles.chatTime}>12s ago</span>
          </div>
          <div className={styles.chatAlertContent}>
            <div className={styles.chatAlertBadge}>🔔 NEW SALE COMPLETED</div>
            <div className={styles.chatLineItem}>
              <strong>Invoice:</strong> #INV-1048 · Counter A (Till #01)
            </div>
            <div className={styles.chatLineItem}>
              <strong>Total Amount:</strong> <span className={styles.chatPrice}>$142.50</span>
            </div>
            <div className={styles.chatLineItem}>
              <strong>Payment:</strong> VISA Debit (Card Auth #9021)
            </div>
            <div className={styles.chatLineItem}>
              <strong>Items (4):</strong> Baby Powder, Olive Oil 500ml, Organic Honey 1kg, Green Tea
            </div>
            <div className={styles.chatProfitPill}>
              <span>Gross Profit Margin:</span> <strong>+$48.20 (33.8%)</strong>
            </div>
          </div>
        </div>

        <div className={styles.chatMessageSub}>
          <div className={styles.chatBubbleHeader}>
            <span className={styles.chatIconBoxGreen}>
              <ShieldCheck size={13} color="#ffffff" />
            </span>
            <span className={styles.chatSender}>MariaPoS Security</span>
            <span className={styles.chatTime}>45m ago</span>
          </div>
          <div className={styles.chatAlertContent}>
            <div className={styles.chatAlertBadgeGreen}>✓ SHIFT FLOAT BALANCED</div>
            <div className={styles.chatLineItem}>
              Cashier: Sarah M. · Register #01 · Closing Float $840.00
            </div>
            <div className={styles.chatDiscrepancy}>
              Drawer Discrepancy: <strong>$0.00 (Zero Variance)</strong>
            </div>
          </div>
        </div>

        <div className={styles.chatFooterKpi}>
          <div className={styles.kpiItem}>
            <span>Today&apos;s Store Revenue</span>
            <strong>$3,420.50</strong>
          </div>
          <div className={styles.kpiItem}>
            <span>Active Registers</span>
            <strong style={{ color: "#22c55e" }}>3 of 3 Live</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. FIFO Simulator */
function FifoSimulator() {
  return (
    <div className={styles.simWrapper}>
      <div className={styles.simWindowHeader}>
        <div className={styles.simWindowDots}>
          <span className={styles.simDotRed} />
          <span className={styles.simDotYellow} />
          <span className={styles.simDotGreen} />
        </div>
        <span className={styles.simWindowTitle}>FIFO Batch Stock & Expiry Shield</span>
        <span className={styles.simStatusPill}>
          <span className={styles.pulseGreen} /> FIFO ACTIVE
        </span>
      </div>

      <div className={styles.simBody}>
        <div className={styles.fifoCardActive}>
          <div className={styles.fifoBatchHeader}>
            <div>
              <span className={styles.fifoBatchTag}>First In, First Out (Current Depleting)</span>
              <h4 className={styles.fifoBatchCode}>Batch #B-382 · Infant Formula 800g</h4>
            </div>
            <span className={styles.fifoStatusBadge}>FIRST OUT</span>
          </div>
          <div className={styles.fifoMetricsGrid}>
            <div>
              <span className={styles.fifoMetricLabel}>Stock Remaining</span>
              <span className={styles.fifoMetricVal}>12 Units</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Supplier Cost</span>
              <span className={styles.fifoMetricVal}>$9.80 / unit</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Retail Price</span>
              <span className={styles.fifoMetricVal}>$18.00 / unit</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Expiry Date</span>
              <span className={styles.fifoMetricSafe}>Jun 2026</span>
            </div>
          </div>
        </div>

        <div className={styles.fifoCardQueue}>
          <div className={styles.fifoBatchHeader}>
            <div>
              <span className={styles.fifoBatchTagQueue}>Inward Pallet Landed</span>
              <h4 className={styles.fifoBatchCode}>Batch #B-409 · Infant Formula 800g</h4>
            </div>
            <span className={styles.fifoQueueBadge}>IN QUEUE</span>
          </div>
          <div className={styles.fifoMetricsGrid}>
            <div>
              <span className={styles.fifoMetricLabel}>Stock Remaining</span>
              <span className={styles.fifoMetricVal}>48 Units</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Supplier Cost</span>
              <span className={styles.fifoMetricVal}>$10.20 / unit</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Retail Price</span>
              <span className={styles.fifoMetricVal}>$18.00 / unit</span>
            </div>
            <div>
              <span className={styles.fifoMetricLabel}>Expiry Date</span>
              <span className={styles.fifoMetricSafe}>Oct 2027</span>
            </div>
          </div>
        </div>

        <div className={styles.fifoShieldFooter}>
          <CheckCircle2 size={15} color="#22c55e" />
          <span>
            Chronological FIFO Cost Matching Active. No profit erosion or expired products on customer shelves.
          </span>
        </div>
      </div>
    </div>
  );
}

/* 4. SMS Receipt Simulator */
function SmsReceiptSimulator() {
  return (
    <div className={styles.simWrapper}>
      <div className={styles.simWindowHeader}>
        <div className={styles.simWindowDots}>
          <span className={styles.simDotRed} />
          <span className={styles.simDotYellow} />
          <span className={styles.simDotGreen} />
        </div>
        <span className={styles.simWindowTitle}>Instant SMS E-Bill Dispatcher</span>
        <span className={styles.simStatusPill}>
          <span className={styles.pulseGreen} /> GATEWAY CONNECTED
        </span>
      </div>

      <div className={styles.simBody}>
        {/* Recipient bar */}
        <div className={styles.smsRecipientBar}>
          <Smartphone size={15} color="#38bdf8" />
          <span>Recipient: <strong>+1 (555) 392-1084</strong> (Customer Profile: Michael R.)</span>
          <span className={styles.smsVerifiedTag}>VERIFIED</span>
        </div>

        {/* SMS Bubble */}
        <div className={styles.smsBubble}>
          <div className={styles.smsBubbleMeta}>
            <span className={styles.smsSenderId}>MARIAPOS</span>
            <span className={styles.smsTimestamp}>Just Now · Delivered</span>
          </div>
          <div className={styles.smsText}>
            Thank you for shopping at Metro Mart! Your invoice <strong>#INV-8821</strong> for <strong>$58.40</strong>{" "}
            has been processed.
          </div>
          <div className={styles.smsLinkBox}>
            <ExternalLink size={13} color="#2563eb" />
            <span>mariapos.com/receipt/8821</span>
          </div>
          <div className={styles.smsDeliveryStatus}>
            <CheckCircle2 size={13} color="#22c55e" />
            <span>Delivered via SMS Gateway in 1.8 seconds</span>
          </div>
        </div>

        {/* Ecological & Cost Impact */}
        <div className={styles.smsImpactGrid}>
          <div className={styles.smsImpactCard}>
            <Receipt size={18} color="#22c55e" />
            <div>
              <span className={styles.impactTitle}>Zero Paper Waste</span>
              <span className={styles.impactDesc}>100% digital thermal roll reduction</span>
            </div>
          </div>
          <div className={styles.smsImpactCard}>
            <Lock size={18} color="#38bdf8" />
            <div>
              <span className={styles.impactTitle}>Permanent Warranty</span>
              <span className={styles.impactDesc}>Customers never lose purchase proof</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StoreExperience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeScene = retailScenes[activeTab];

  return (
    <section id="retail-experience" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.container}>
        <div data-reveal="up" className={styles.header}>
          <div className={styles.headingBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Real-World Retail Operations</span>
          </div>
          <h2 id="experience-title" className="section-title">
            Engineered for real counters, real shelves, and busy owners
          </h2>
          <p className={`lead ${styles.lead}`}>
            See how MariaPoS connects your checkout tills, backroom inventory, and mobile phone into one seamless,
            high-speed retail ecosystem.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsNav} role="tablist" aria-label="Retail operational scenes">
          {retailScenes.map((scene, idx) => {
            const isActive = activeTab === idx;
            const TabIcon = scene.icon;
            return (
              <button
                key={scene.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
              >
                <TabIcon size={16} className={styles.tabBtnIcon} />
                <span className={styles.tabText}>{`0${idx + 1}. ${scene.tabLabel}`}</span>
              </button>
            );
          })}
        </div>

        {/* Active Scene Showcase */}
        <div className={styles.showcaseCard}>
          <div className={styles.contentCol}>
            <div className={styles.tagRow}>
              <span className={styles.sceneTag}>{activeScene.tag}</span>
              <div className={styles.liveIndicator}>
                <span className={styles.pulseDot} style={{ backgroundColor: activeScene.statusBadge.color }} />
                <span>{activeScene.statusBadge.status}</span>
              </div>
            </div>

            <h3 className={styles.sceneTitle}>{activeScene.title}</h3>
            <p className={styles.sceneSubtitle}>{activeScene.subtitle}</p>

            <div className={styles.featureList}>
              {activeScene.features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className={styles.featureItem}>
                    <div className={styles.featureIconBox}>
                      <Icon size={18} />
                    </div>
                    <div className={styles.featureText}>
                      <h4 className={styles.featureHeading}>{feat.title}</h4>
                      <p className={styles.featureDesc}>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metrics Bar */}
            <div className={styles.metricsBar}>
              {activeScene.metrics.map((m) => (
                <div key={m.label} className={styles.metricItem}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            <Link href={activeScene.ctaHref} className={styles.actionBtn}>
              <span>{activeScene.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual Column with Pure Vector UI Simulations (Zero Raster Images) */}
          <div className={styles.visualCol}>
            {activeTab === 0 && <TillSimulator />}
            {activeTab === 1 && <TelegramSimulator />}
            {activeTab === 2 && <FifoSimulator />}
            {activeTab === 3 && <SmsReceiptSimulator />}
          </div>
        </div>

        {/* Clean Vector Tab Cards (No raster photo thumbnails) */}
        <div className={styles.thumbGrid}>
          {retailScenes.map((scene, idx) => {
            const isSelected = activeTab === idx;
            const Icon = scene.icon;
            return (
              <div
                key={scene.id}
                onClick={() => setActiveTab(idx)}
                className={`${styles.thumbCard} ${isSelected ? styles.thumbCardActive : ""}`}
              >
                <div className={styles.thumbIconWrap}>
                  <Icon size={20} />
                </div>
                <div className={styles.thumbInfo}>
                  <span className={styles.thumbIdx}>0{idx + 1}</span>
                  <span className={styles.thumbTitle}>{scene.tabLabel}</span>
                  <span className={styles.thumbSub}>{scene.tabSubtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
