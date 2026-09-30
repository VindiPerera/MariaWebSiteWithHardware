"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BellRing,
  Boxes,
  Check,
  ChevronRight,
  Cpu,
  Monitor,
  Printer,
  Receipt,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import posBilling from "@/assets/images/pos-billing.png";
import reports from "@/assets/images/reports.png";
import hwA from "@/assets/images/hw-a.jpeg";
import hwB from "@/assets/images/hw-b.jpeg";
import hwC from "@/assets/images/hw-c.jpeg";
import ownerMobileAlerts from "@/assets/images/owner-mobile-alerts.jpg";
import warehouseFifoStock from "@/assets/images/warehouse-fifo-stock.jpg";
import customerSmsReceipt from "@/assets/images/customer-sms-receipt.jpg";
import styles from "./Showcase.module.css";

const hardwareItems = [
  {
    title: "Counter Touchscreens & Standard Monitors",
    desc: "Optimized for capacitive touchscreens and keyboard-driven standard desktop PCs. High contrast, large hit areas for fast billing.",
    img: hwC,
    badge: "Touch & Desktop",
  },
  {
    title: "Thermal ESC/POS Receipt Printers",
    desc: "Plug-and-play support for all standard 80mm and 58mm USB/Ethernet thermal printers. Custom receipt headers and auto-cutter.",
    img: hwA,
    badge: "Auto-Cut & RJ11",
  },
  {
    title: "1D / 2D Barcode Scanners & Cash Drawers",
    desc: "Compatible with any handheld or hands-free USB barcode scanner. Direct RJ11 cash drawer trigger on bill payment.",
    img: hwB,
    badge: "Instant USB Scan",
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState<"billing" | "reports">("billing");

  return (
    <div className={styles.wrapper}>
      {/* Product Hero */}
      <section id="product" className={styles.heroSection}>
        <div data-reveal="up" className={styles.intro}>
          <div className={styles.eyebrowBadge}>
            <Zap size={13} />
            <span>The Desktop Engine</span>
          </div>
          <h1 className="section-title">Built for high-traffic retail counters</h1>
          <p className="lead">
            MariaPoS is a native Windows desktop application with zero web lag. It runs directly on your counter PC with
            a local SQLite database that never stops, even during network dropouts.
          </p>

          <div className={styles.screenTabs}>
            <button
              type="button"
              onClick={() => setActiveTab("billing")}
              className={`${styles.tabBtn} ${activeTab === "billing" ? styles.tabBtnActive : ""}`}
            >
              <Monitor size={16} />
              <span>01. Counter Billing Terminal</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reports")}
              className={`${styles.tabBtn} ${activeTab === "reports" ? styles.tabBtnActive : ""}`}
            >
              <Sparkles size={16} />
              <span>02. Management &amp; P&amp;L Reports</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Billing Screen */}
        {activeTab === "billing" && (
          <div data-reveal="scale" className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderLeft}>
                <span className={styles.screenDot} />
                <span className={styles.screenTitle}>MariaPoS · POS Billing Terminal [Shortcuts Enabled]</span>
              </div>
              <span className={styles.cardTag}>FIFO Auto-Deduction</span>
            </div>

            <div className={styles.imageFrame}>
              <Image
                src={posBilling}
                alt="MariaPoS Counter Billing Screen"
                className={styles.screenshot}
                sizes="(max-width: 1200px) 100vw, 1100px"
                priority
              />
            </div>

            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>Instant Barcode Scanner Read</strong>
                  <span>Item added to cart with zero keyboard intervention.</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>Cashier Shortcuts (F1–F12)</strong>
                  <span>Search, hold cart, apply line discounts, and checkout in seconds.</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>Split &amp; Credit Payments</strong>
                  <span>Accept partial cash, card swipe, and account credit on a single bill.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Reports Screen */}
        {activeTab === "reports" && (
          <div data-reveal="scale" className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderLeft}>
                <span className={styles.screenDot} />
                <span className={styles.screenTitle}>MariaPoS · Reports &amp; Analytics</span>
              </div>
              <span className={styles.cardTag}>Live Margin Valuation</span>
            </div>

            <div className={styles.imageFrame}>
              <Image
                src={reports}
                alt="MariaPoS Management Reports Screen"
                className={styles.screenshot}
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>

            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>Product &amp; Category Profitability</strong>
                  <span>See exact revenue, cost of goods (FIFO), and net profit per item.</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>Cashier Shift Reconciliations</strong>
                  <span>Review every cashier&apos;s drawer balance, refunds, and short/excess log.</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={14} color="var(--red)" strokeWidth={3} />
                </span>
                <div className={styles.highlightText}>
                  <strong>One-Click PDF / Excel Export</strong>
                  <span>Export sales tax summaries and stock valuation for your accountant.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Real-World Connected Ecosystem: 3 Clean Operational Cards */}
      <section id="operational-pillars" className={styles.realWorldSection}>
        <div data-reveal="up" className={styles.intro}>
          <span className="eyebrow">Connected Operations</span>
          <h2 className="section-title">Tested and trusted beyond the counter</h2>
          <p className="lead">
            MariaPoS connects your checkout tills, warehouse backroom, and pocket into one unified retail management system.
          </p>
        </div>

        <div className={styles.operationsGrid}>
          {/* Card 1: Owner Telegram Alerts */}
          <div data-reveal="up" className={styles.opCard}>
            <div className={styles.opImageWrap}>
              <Image
                src={ownerMobileAlerts}
                alt="Owner receiving Telegram sales notification anywhere"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.opImg}
              />
              <div className={styles.opPill}>
                <Send size={12} color="#38bdf8" />
                <span>Telegram Bot Push</span>
              </div>
            </div>
            <div className={styles.opContent}>
              <h3 className={styles.opTitle}>Instant Telegram Alerts &amp; Cloud Reports</h3>
              <p className={styles.opDesc}>
                Receive order totals, items, and cashier shifts on your phone the instant each bill prints, even while away from your shop.
              </p>
            </div>
          </div>

          {/* Card 2: Warehouse FIFO Stock */}
          <div data-reveal="up" data-delay="100" className={styles.opCard}>
            <div className={styles.opImageWrap}>
              <Image
                src={warehouseFifoStock}
                alt="Warehouse inventory barcode scanning and FIFO tracking"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.opImg}
              />
              <div className={styles.opPill}>
                <Boxes size={12} color="#22c55e" />
                <span>FIFO Inventory</span>
              </div>
            </div>
            <div className={styles.opContent}>
              <h3 className={styles.opTitle}>Strict FIFO Batch Tracking &amp; Inward Intake</h3>
              <p className={styles.opDesc}>
                Scan incoming goods, record batch costs, track expiry alarms, and ensure 100% accurate gross profit accounting.
              </p>
            </div>
          </div>

          {/* Card 3: Customer SMS e-Bill */}
          <div data-reveal="up" data-delay="200" className={styles.opCard}>
            <div className={styles.opImageWrap}>
              <Image
                src={customerSmsReceipt}
                alt="Customer receiving SMS e-bill on smartphone at counter"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.opImg}
              />
              <div className={styles.opPill}>
                <Smartphone size={12} color="#38bdf8" />
                <span>Paperless Checkout</span>
              </div>
            </div>
            <div className={styles.opContent}>
              <h3 className={styles.opTitle}>Digital SMS Receipts in 2 Seconds</h3>
              <p className={styles.opDesc}>
                Send branded SMS bills with invoice number, items, and warranty link directly to customers while saving paper costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Compatible Section */}
      <section id="hardware-ready" className={styles.hardwareSection}>
        <div className={styles.hardwareContainer}>
          <div data-reveal="up" className={styles.intro}>
            <span className="eyebrow">Counter Ecosystem</span>
            <h2 className="section-title">Works with the equipment you already have</h2>
            <p className="lead">
              No proprietary, locked-in hardware required. MariaPoS supports standard Windows point-of-sale peripherals.
            </p>
          </div>

          <div className={styles.hwGrid}>
            {hardwareItems.map((item, i) => (
              <div key={item.title} data-reveal="up" data-delay={i * 90} className={styles.hwCard}>
                <div className={styles.hwMedia}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.hwImg}
                  />
                  <span className={styles.hwBadge}>{item.badge}</span>
                </div>
                <div className={styles.hwBody}>
                  <h3 className={styles.hwTitle}>{item.title}</h3>
                  <p className={styles.hwDesc}>{item.desc}</p>
                  {item.badge.includes("Auto-Cut") && (
                    <Link href="/#bill-design" className={styles.billLink}>
                      <span>Preview 58mm / 80mm Bill Design</span>
                      <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum System Requirements */}
      <section id="requirements" className={styles.reqSection}>
        <div data-reveal="up" className={styles.reqCard}>
          <div className={styles.reqHeader}>
            <Cpu size={22} color="var(--red)" />
            <h3 className={styles.reqTitle}>System Requirements (Windows 10 / 11)</h3>
          </div>
          <div className={styles.reqGrid}>
            <div className={styles.reqItem}>
              <span className={styles.reqLabel}>Operating System</span>
              <span className={styles.reqVal}>Windows 10, 11 (64-bit)</span>
            </div>
            <div className={styles.reqItem}>
              <span className={styles.reqLabel}>Processor</span>
              <span className={styles.reqVal}>Intel Core i3 / AMD Ryzen 3 or higher</span>
            </div>
            <div className={styles.reqItem}>
              <span className={styles.reqLabel}>Memory (RAM)</span>
              <span className={styles.reqVal}>4 GB minimum (8 GB recommended)</span>
            </div>
            <div className={styles.reqItem}>
              <span className={styles.reqLabel}>Peripherals</span>
              <span className={styles.reqVal}>Standard USB for barcode scanner &amp; printer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
