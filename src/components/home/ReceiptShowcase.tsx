"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barcode,
  CheckCircle2,
  Copy,
  FileCheck2,
  Printer,
  Receipt,
  RotateCcw,
  Sparkles,
  Store,
  Wallet,
} from "lucide-react";
import logo from "@/assets/images/marialogo.png";
import styles from "./ReceiptShowcase.module.css";

const billHighlights = [
  {
    id: "header",
    title: "Branded Header & Contacts",
    desc: "Your shop logo, custom store name, address, and hotlines in any language or currency at the top of every bill.",
    icon: Store,
  },
  {
    id: "items",
    title: "Accurate Line Itemization",
    desc: "Item names, decimal quantities (packs, kg, litres), unit prices, and instant line subtotaling with zero queue latency.",
    icon: Receipt,
  },
  {
    id: "payment",
    title: "Cash Tender & Balance Calculation",
    desc: "Explicit record of paid cash and change returned so cashiers never make counting errors during peak rush.",
    icon: Wallet,
  },
  {
    id: "audit",
    title: "Audit Barcode for 2-Sec Returns",
    desc: "Scan the invoice barcode on customer returns to immediately pull the original sale and restock into the exact cost batch.",
    icon: Barcode,
  },
];

export function ReceiptShowcase() {
  const [paperWidth, setPaperWidth] = useState<"80mm" | "58mm">("80mm");
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSimulatePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
    }, 850);
  };

  const handleCopyBill = () => {
    const billText = `MariaPOS — Made to Bill
The Aiko Coffee Bar
488 Central Avenue, Suite 14B
Tel: +1 (555) 234-5678
========================================
Invoice No: INV202609248673
Date: 2026-09-24 16:16:06
Customer: Walk-in Customer
Cashier: System Administrator
----------------------------------------
Item               Qty   Price      Total
Avocado Smoothie     3   $3.00      $9.00
Avocado              3   $2.00      $6.00
African Tea          1   $2.50      $2.50
Banana               1   $1.50      $1.50
----------------------------------------
Subtotal:                         $19.00
========================================
TOTAL:                            $19.00
========================================
Payment Method: Cash
Paid Amount:                      $20.00
Total Balance:                    $ 1.00
----------------------------------------
     Thank you for your business!
  Powered By MariaPos - mariapos.com`;

    navigator.clipboard?.writeText(billText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="bill-design" className={styles.section} aria-labelledby="receipt-showcase-title">
      <div className={styles.container}>
        <div aria-hidden="true" className={styles.ambientGlow} />
        <div aria-hidden="true" className={styles.ambientGlowLeft} />

        {/* Left Column: Context & Feature Highlights */}
        <div data-reveal="up" className={styles.copy}>
          <span className="eyebrow">Counter Output &amp; Bill Design</span>
          <h2 id="receipt-showcase-title" className={styles.title}>
            Crisp, branded receipts engineered for your counter
          </h2>
          <p className={styles.lead}>
            Every MariaPoS transaction produces a clean, high-contrast thermal bill formatted for customer clarity and
            cashier accountability. Compatible out of the box with standard 80mm and 58mm ESC/POS thermal printers.
          </p>

          <div className={styles.featuresGrid}>
            {billHighlights.map((feat) => {
              const Icon = feat.icon;
              const isActive = activeHighlight === feat.id;
              return (
                <div
                  key={feat.id}
                  className={`${styles.featureItem} ${isActive ? styles.featureItemActive : ""}`}
                  onMouseEnter={() => setActiveHighlight(feat.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                >
                  <div className={styles.featureIconBox}>
                    <Icon size={18} color="var(--red)" />
                  </div>
                  <div className={styles.featureText}>
                    <span className={styles.featureTitle}>{feat.title}</span>
                    <span className={styles.featureDesc}>{feat.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actionRow}>
            <Link href="/product#hardware-ready" className={styles.ctaBtn}>
              <Printer size={16} />
              <span>Explore Hardware Support</span>
              <ArrowRight size={14} />
            </Link>

            <span className={styles.specsBadge}>
              <CheckCircle2 size={15} color="#1faa55" />
              <span>58mm &amp; 80mm ESC/POS Native</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Thermal Receipt Card */}
        <div data-reveal="scale" className={styles.receiptStage}>
          {/* Controls Bar */}
          <div className={styles.receiptToolbar}>
            <div className={styles.rollToggleGroup} role="group" aria-label="Receipt Paper Width">
              <button
                type="button"
                onClick={() => setPaperWidth("80mm")}
                className={`${styles.toggleBtn} ${paperWidth === "80mm" ? styles.toggleBtnActive : ""}`}
              >
                80mm Standard
              </button>
              <button
                type="button"
                onClick={() => setPaperWidth("58mm")}
                className={`${styles.toggleBtn} ${paperWidth === "58mm" ? styles.toggleBtnActive : ""}`}
              >
                58mm Compact
              </button>
            </div>

            <div style={{ display: "flex", gap: "6px" }}>
              <button
                type="button"
                onClick={handleCopyBill}
                className={styles.simulateCutBtn}
                title="Copy receipt text to clipboard"
              >
                <Copy size={13} />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <button
                type="button"
                onClick={handleSimulatePrint}
                className={styles.simulateCutBtn}
                title="Simulate thermal printer feeding and cutting"
              >
                <Printer size={13} />
                <span>Simulate Print</span>
              </button>
            </div>
          </div>

          {/* Physical Thermal Slip Container */}
          <div
            className={`${styles.receiptWrapper} ${paperWidth === "58mm" ? styles.receiptWrapper58mm : ""}`}
          >
            {/* Sawtooth Top Edge */}
            <div className={styles.perforatedTop} aria-hidden="true" />

            {/* Printed Paper Body */}
            <article
              className={`${styles.receiptCard} ${isPrinting ? styles.receiptPrinting : ""}`}
              aria-label="Sample thermal printed bill from MariaPoS"
            >
              {/* Receipt Header */}
              <div
                className={styles.receiptHeader}
                style={{
                  outline: activeHighlight === "header" ? "2px dashed var(--red)" : "none",
                  borderRadius: "6px",
                  padding: "4px",
                }}
              >
                <Image
                  src={logo}
                  alt="MariaPOS — Made to Bill"
                  className={styles.logoImage}
                  priority
                />
                <div className={styles.storeName}>The Aiko Coffee Bar</div>
                <div className={styles.storeAddress}>
                  488 Central Avenue, Suite 14B
                </div>
                <div className={styles.storeTel}>Tel: +1 (555) 234-5678</div>
              </div>

              <div className={styles.doubleDivider} />

              {/* Invoice & Shift Metadata */}
              <div className={styles.metaGrid}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Invoice No:</span>
                  <span className={styles.metaValue}>INV202609248673</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Date:</span>
                  <span className={styles.metaValue}>2026-09-24 16:16:06</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Customer:</span>
                  <span className={styles.metaValue}>Walk-in Customer</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Cashier:</span>
                  <span className={styles.metaValue}>System Administrator</span>
                </div>
              </div>

              <div className={styles.dashedDivider} />

              {/* Items Table */}
              <div
                className={styles.itemsTable}
                style={{
                  outline: activeHighlight === "items" ? "2px dashed var(--red)" : "none",
                  borderRadius: "6px",
                  padding: "2px",
                }}
              >
                <div className={styles.tableHeader}>
                  <span className={styles.colItem}>Item</span>
                  <span className={styles.colQty}>Qty</span>
                  <span className={styles.colPrice}>Price</span>
                  <span className={styles.colTotal}>Total</span>
                </div>

                <div className={styles.tableRow}>
                  <span className={styles.colItem}>Avocado Smoothie</span>
                  <span className={styles.colQty}>3</span>
                  <span className={styles.colPrice}>$3.00</span>
                  <span className={styles.colTotal}>$9.00</span>
                </div>

                <div className={styles.tableRow}>
                  <span className={styles.colItem}>Avocado</span>
                  <span className={styles.colQty}>3</span>
                  <span className={styles.colPrice}>$2.00</span>
                  <span className={styles.colTotal}>$6.00</span>
                </div>

                <div className={styles.tableRow}>
                  <span className={styles.colItem}>African Tea</span>
                  <span className={styles.colQty}>1</span>
                  <span className={styles.colPrice}>$2.50</span>
                  <span className={styles.colTotal}>$2.50</span>
                </div>

                <div className={styles.tableRow}>
                  <span className={styles.colItem}>Banana</span>
                  <span className={styles.colQty}>1</span>
                  <span className={styles.colPrice}>$1.50</span>
                  <span className={styles.colTotal}>$1.50</span>
                </div>
              </div>

              <div className={styles.dashedDivider} />

              {/* Totals & Cash Tender */}
              <div
                className={styles.totalsSection}
                style={{
                  outline: activeHighlight === "payment" ? "2px dashed var(--red)" : "none",
                  borderRadius: "6px",
                  padding: "2px",
                }}
              >
                <div className={styles.totalRow}>
                  <span>Subtotal:</span>
                  <span>$19.00</span>
                </div>

                <div className={styles.doubleDivider} />

                <div className={styles.grandTotalRow}>
                  <span>TOTAL:</span>
                  <span>$19.00</span>
                </div>

                <div className={styles.doubleDivider} />

                <div className={styles.paymentRow}>
                  <span>Payment Method:</span>
                  <span>Cash</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Paid Amount:</span>
                  <span>$20.00</span>
                </div>
                <div className={styles.paymentRow} style={{ fontWeight: 700 }}>
                  <span>Total Balance:</span>
                  <span>$1.00</span>
                </div>
              </div>

              <div className={styles.dashedDivider} />

              {/* Footer */}
              <div
                className={styles.receiptFooter}
                style={{
                  outline: activeHighlight === "audit" ? "2px dashed var(--red)" : "none",
                  borderRadius: "6px",
                  padding: "4px",
                }}
              >
                <div className={styles.thankYouText}>Thank you for your business!</div>
                <div className={styles.poweredBy}>Powered By MariaPos — mariapos.com</div>

                {/* Audit Barcode */}
                <div className={styles.barcodeWrapper}>
                  <svg
                    viewBox="0 0 200 40"
                    className={styles.barcodeSvg}
                    aria-label="Invoice Barcode INV202609248673"
                  >
                    {/* Simulated Clean Code128 Thermal Barcode */}
                    <rect x="10" y="2" width="2" height="32" fill="#000" />
                    <rect x="14" y="2" width="4" height="32" fill="#000" />
                    <rect x="21" y="2" width="2" height="32" fill="#000" />
                    <rect x="26" y="2" width="5" height="32" fill="#000" />
                    <rect x="34" y="2" width="2" height="32" fill="#000" />
                    <rect x="38" y="2" width="3" height="32" fill="#000" />
                    <rect x="44" y="2" width="6" height="32" fill="#000" />
                    <rect x="53" y="2" width="2" height="32" fill="#000" />
                    <rect x="58" y="2" width="4" height="32" fill="#000" />
                    <rect x="65" y="2" width="3" height="32" fill="#000" />
                    <rect x="71" y="2" width="5" height="32" fill="#000" />
                    <rect x="79" y="2" width="2" height="32" fill="#000" />
                    <rect x="84" y="2" width="4" height="32" fill="#000" />
                    <rect x="91" y="2" width="6" height="32" fill="#000" />
                    <rect x="100" y="2" width="2" height="32" fill="#000" />
                    <rect x="105" y="2" width="3" height="32" fill="#000" />
                    <rect x="111" y="2" width="5" height="32" fill="#000" />
                    <rect x="119" y="2" width="3" height="32" fill="#000" />
                    <rect x="125" y="2" width="4" height="32" fill="#000" />
                    <rect x="132" y="2" width="2" height="32" fill="#000" />
                    <rect x="137" y="2" width="6" height="32" fill="#000" />
                    <rect x="146" y="2" width="3" height="32" fill="#000" />
                    <rect x="152" y="2" width="4" height="32" fill="#000" />
                    <rect x="159" y="2" width="2" height="32" fill="#000" />
                    <rect x="164" y="2" width="5" height="32" fill="#000" />
                    <rect x="172" y="2" width="3" height="32" fill="#000" />
                    <rect x="178" y="2" width="4" height="32" fill="#000" />
                    <rect x="185" y="2" width="5" height="32" fill="#000" />
                  </svg>
                  <span className={styles.barcodeNumber}>* INV202609248673 *</span>
                </div>
              </div>
            </article>

            {/* Sawtooth Bottom Edge */}
            <div className={styles.perforatedBottom} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
