"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  Download,
  FileText,
  MessageCircle,
  Printer,
  RotateCw,
  Sparkles,
} from "lucide-react";
import { formatLkr, waLink } from "@/lib/shop";
import styles from "./ThermalReceiptBill.module.css";

interface BillItem {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
}

const sampleItems: BillItem[] = [
  { id: "1", name: "Munchee Super Cream Cracker 490g", qty: 2, unitPrice: 280 },
  { id: "2", name: "Highland Fresh Milk 1000ml", qty: 1, unitPrice: 520 },
  { id: "3", name: "Anchor Butter Salted 227g", qty: 1, unitPrice: 1450 },
  { id: "4", name: "Ceylon BOPF Tea Premium 200g", qty: 1, unitPrice: 480 },
];

export function ThermalReceiptBill({
  showControls = true,
  compact = false,
}: {
  showControls?: boolean;
  compact?: boolean;
}) {
  const [items, setItems] = useState<BillItem[]>(sampleItems);
  const [isPrinting, setIsPrinting] = useState(false);
  const [copied, setCopied] = useState(false);

  const subtotal = items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0);
  const discount = Math.round(subtotal * 0.05); // 5% loyalty discount
  const grandTotal = subtotal - discount;
  const cashTendered = Math.ceil(grandTotal / 500) * 500;
  const changeDue = cashTendered - grandTotal;

  const handleReprint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
    }, 900);
  };

  const billText = `
MARIAPOS RETAIL COUNTER
JAAN Network (PVT) Ltd · Colombo
Tel: 076 593 3255
--------------------------------
BILL NO: INV-LK-2026-08429
DATE: ${new Date().toLocaleDateString("en-GB")} 12:45 PM
CASHIER: Kasun P.  |  REG: 01
--------------------------------
${items
  .map(
    (i) =>
      `${i.name}\n  ${i.qty} x ${formatLkr(i.unitPrice)} = ${formatLkr(
        i.qty * i.unitPrice
      )}`
  )
  .join("\n")}
--------------------------------
SUBTOTAL:     ${formatLkr(subtotal)}
LOYALTY (5%): -${formatLkr(discount)}
NET TOTAL:    ${formatLkr(grandTotal)}
CASH:         ${formatLkr(cashTendered)}
CHANGE:       ${formatLkr(changeDue)}
--------------------------------
ITEMS: ${items.reduce((s, i) => s + i.qty, 0)}  |  TAX: INCLUSIVE
ස්තූතියි නැවත එන්න!
THANK YOU, VISIT AGAIN!
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(billText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waBillMessage = `Hi MariaPoS, I saw the thermal receipt sample. I want a POS system that prints bills like this for my shop!`;

  return (
    <div className={`${styles.wrapper} ${compact ? styles.compact : ""}`}>
      {/* Sawtooth Top Edge */}
      <div className={styles.sawtoothTop} />

      {/* Main Thermal Paper Sheet */}
      <div
        className={`${styles.paper} ${isPrinting ? styles.printingSlide : ""}`}
      >
        {/* Receipt Header */}
        <div className={styles.receiptHeader}>
          <div className={styles.storeName}>MARIAPOS RETAIL STORE</div>
          <div className={styles.subHeader}>JAAN NETWORK (PVT) LTD</div>
          <div className={styles.metaRow}>46 Hudson Road, Colombo 00300</div>
          <div className={styles.metaRow}>Tel: 076 593 3255 · VAT: 10482910-7000</div>
        </div>

        <div className={styles.dashedDivider} />

        {/* Invoice Metadata */}
        <div className={styles.infoGrid}>
          <div>
            <span>INV: </span>
            <strong>#LK-8429</strong>
          </div>
          <div style={{ textAlign: "right" }}>
            <span>REG: </span>
            <strong>POS-01</strong>
          </div>
          <div>
            <span>DATE: </span>
            <span>{new Date().toLocaleDateString("en-GB")}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span>TIME: </span>
            <span>12:45:18</span>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <span>CASHIER: </span>
            <span>Kasun P. (Emp #104)</span>
          </div>
        </div>

        <div className={styles.dashedDivider} />

        {/* Itemized Table */}
        <div className={styles.tableHeader}>
          <span>ITEM / QTY</span>
          <span style={{ textAlign: "right" }}>PRICE</span>
          <span style={{ textAlign: "right" }}>AMOUNT</span>
        </div>

        <div className={styles.itemsList}>
          {items.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              <div className={styles.itemDetails}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemCalc}>
                  {item.qty} pcs @ {formatLkr(item.unitPrice)}
                </span>
              </div>
              <span className={styles.itemTotal}>
                {formatLkr(item.qty * item.unitPrice)}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.dashedDivider} />

        {/* Totals Section */}
        <div className={styles.totalsSection}>
          <div className={styles.totalRow}>
            <span>SUBTOTAL ({items.reduce((s, i) => s + i.qty, 0)} Items)</span>
            <span>{formatLkr(subtotal)}</span>
          </div>
          <div className={`${styles.totalRow} ${styles.discountRow}`}>
            <span>LOYALTY PROMO (5%)</span>
            <span>-{formatLkr(discount)}</span>
          </div>
          <div className={`${styles.totalRow} ${styles.grandTotalRow}`}>
            <span>NET TOTAL</span>
            <span>{formatLkr(grandTotal)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>CASH TENDERED</span>
            <span>{formatLkr(cashTendered)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>BALANCE CHANGE</span>
            <span>{formatLkr(changeDue)}</span>
          </div>
        </div>

        <div className={styles.dashedDivider} />

        {/* Sinhala / English Greeting */}
        <div className={styles.footerNote}>
          <div className={styles.sinhalaText}>ස්තූතියි නැවත එන්න!</div>
          <div className={styles.englishText}>THANK YOU, VISIT AGAIN!</div>
          <div className={styles.cloudText}>Powered by MariaPoS · Cloud Sync Active</div>
        </div>

        {/* Barcode & QR Code simulation */}
        <div className={styles.barcodeWrap}>
          <div className={styles.barcodeLines}>
            <span style={{ width: 2 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 3 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 4 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 3 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 4 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 3 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 4 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 3 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 4 }} />
            <span style={{ width: 2 }} />
            <span style={{ width: 3 }} />
            <span style={{ width: 1 }} />
            <span style={{ width: 2 }} />
          </div>
          <div className={styles.barcodeDigits}>* INV 08429 2026 *</div>
        </div>
      </div>

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
            title="Simulate 80mm thermal reprint"
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
