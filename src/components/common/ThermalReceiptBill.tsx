"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  MessageCircle,
  Printer,
} from "lucide-react";
import { waLink } from "@/lib/shop";
import logo from "@/assets/images/marialogo.png";
import styles from "./ThermalReceiptBill.module.css";

export function ThermalReceiptBill({
  showControls = true,
  compact = false,
}: {
  showControls?: boolean;
  compact?: boolean;
}) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReprint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
    }, 850);
  };

  const billText = `MariaPOS — Made to Bill
THE AIKO COFFEE BAR
488 Central Avenue, Suite 14B
Tel: +1 (555) 234-5678
========================================
Invoice No:                      INV202609248673
Date:                         2026-09-24 16:16:06
Customer:                        Walk-in Customer
Cashier:                     System Administrator
----------------------------------------
Item                     Qty         Price          Total
Avocado Smoothie           3         $3.00          $9.00
Avocado                    3         $2.00          $6.00
African Tea                1         $2.50          $2.50
Banana                     1         $1.50          $1.50
----------------------------------------
Subtotal:                                          $19.00
========================================
TOTAL:                                             $19.00
========================================
Payment Method:                                      Cash
Paid Amount:                                       $20.00
Total Balance:                                      $1.00
----------------------------------------
              Thank you for your business!
             Powered By MariaPos — mariapos.com
                     * INV202609248673 *`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(billText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waBillMessage = `Hi MariaPoS, I saw the thermal receipt sample from MariaPoS. I want a POS system that prints bills like this for my store!`;

  return (
    <div className={`${styles.wrapper} ${compact ? styles.compact : ""}`}>
      {/* Sawtooth Top Edge */}
      <div className={styles.sawtoothTop} />

      {/* Main Thermal Paper Sheet */}
      <article
        className={`${styles.paper} ${isPrinting ? styles.printingSlide : ""}`}
        aria-label="Sample thermal printed bill from MariaPoS"
      >
        {/* Receipt Header */}
        <div className={styles.receiptHeader}>
          <Image
            src={logo}
            alt="MariaPOS — Made to Bill"
            className={styles.logoImage}
            priority
          />
          <div className={styles.storeName}>THE AIKO COFFEE BAR</div>
          <div className={styles.storeAddress}>488 Central Avenue, Suite 14B</div>
          <div className={styles.storeTel}>Tel: +1 (555) 234-5678</div>
        </div>

        <div className={styles.solidDivider} />

        {/* Invoice Metadata */}
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
        <div className={styles.itemsTable}>
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

        {/* Totals Section */}
        <div className={styles.totalsSection}>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>$19.00</span>
          </div>

          <div className={styles.solidDivider} />

          <div className={styles.grandTotalRow}>
            <span>TOTAL:</span>
            <span>$19.00</span>
          </div>

          <div className={styles.solidDivider} />

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
        <div className={styles.receiptFooter}>
          <div className={styles.thankYouText}>Thank you for your business!</div>
          <div className={styles.poweredBy}>Powered By MariaPos — mariapos.com</div>

          {/* Audit Barcode */}
          <div className={styles.barcodeWrapper}>
            <svg
              viewBox="0 0 200 40"
              className={styles.barcodeSvg}
              aria-label="Invoice Barcode INV202609248673"
            >
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
      <div className={styles.sawtoothBottom} />

      {/* Interactive Controls */}
      {showControls && (
        <div className={styles.controlsBar}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={handleReprint}
            disabled={isPrinting}
            title="Simulate thermal reprint"
          >
            <Printer size={15} />
            <span>{isPrinting ? "Printing..." : "Reprint Bill"}</span>
          </button>

          <button
            type="button"
            className={styles.controlBtn}
            onClick={handleCopy}
            title="Copy receipt text"
          >
            {copied ? <Check size={15} color="#1faa55" /> : <Copy size={15} />}
            <span>{copied ? "Copied!" : "Copy Text"}</span>
          </button>

          <a
            href={waLink(waBillMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.controlBtn} ${styles.waControl}`}
            title="Ask about bill customization on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      )}
    </div>
  );
}
