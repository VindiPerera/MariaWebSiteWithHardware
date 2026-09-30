"use client";

import {
  Barcode,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  DollarSign,
  FileSpreadsheet,
  FileText,
  KeyRound,
  Layers,
  Lock,
  MessageSquare,
  Package,
  Percent,
  Printer,
  QrCode,
  Receipt,
  Scale,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tag,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import styles from "./FeatureVisualPreview.module.css";

interface Props {
  featureName: string;
}

export function FeatureVisualPreview({ featureName }: Props) {
  const name = featureName.toLowerCase();

  // 1. Barcode & name search billing
  if (name.includes("barcode & name search")) {
    return (
      <div className={styles.previewBox} title="Scans barcodes and searches instantly">
        <div className={styles.barcodeScan}>
          <Barcode size={20} color="#1faa55" />
          <div className={styles.laserLine} />
          <span className={styles.monoTag}>EAN-13 Ready</span>
        </div>
      </div>
    );
  }

  // 2. Keyboard shortcuts F1-F12
  if (name.includes("keyboard shortcuts")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.keycaps}>
          <span className={styles.keycap}>F2 Search</span>
          <span className={styles.keycap}>F5 Whls</span>
          <span className={`${styles.keycap} ${styles.keycapActive}`}>F12 Pay</span>
        </div>
      </div>
    );
  }

  // 3. Touch-screen numeric keypad
  if (name.includes("touch-screen numeric keypad") || name.includes("touch keypad")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.miniKeypad}>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>4</span>
          <span className={styles.miniKeyActive}>5</span>
          <span>6</span>
        </div>
      </div>
    );
  }

  // 4. Retail & wholesale pricing
  if (name.includes("retail & wholesale")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.dualPrice}>
          <span className={styles.priceRetail}>Retail: $12.00</span>
          <span className={styles.priceWholesale}>Wholesale: $9.50</span>
        </div>
      </div>
    );
  }

  // 5. Weighted & loose items
  if (name.includes("weighted") || name.includes("loose")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.weightBadge}>
          <Scale size={13} color="var(--red)" />
          <span className={styles.monoTag}>2.45 kg × $3.80</span>
        </div>
      </div>
    );
  }

  // 6. Item & bill discounts
  if (name.includes("discounts")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.discountBadge}>
          <Percent size={12} color="#ffffff" />
          <span>15% OFF Applied</span>
        </div>
      </div>
    );
  }

  // 7. Promo codes
  if (name.includes("promo codes") || name.includes("promo code")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.promoTicket}>
          <Tag size={12} color="var(--red)" />
          <span>SUMMER-2026</span>
        </div>
      </div>
    );
  }

  // 8. Price check
  if (name.includes("price check")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.priceCheck}>
          <Search size={12} color="#1faa55" />
          <span>$4.50 (18 in Stock)</span>
        </div>
      </div>
    );
  }

  // 9. Sales history & bill reprint
  if (name.includes("sales history") || name.includes("reprint")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.receiptReprint}>
          <Receipt size={13} color="var(--ink)" />
          <span>Reprint #2026-081</span>
        </div>
      </div>
    );
  }

  // 10. Split payments
  if (name.includes("split payments")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.splitMeter}>
          <span className={styles.splitCash}>Cash: 50%</span>
          <span className={styles.splitCard}>Card: 50%</span>
        </div>
      </div>
    );
  }

  // 11. Cash, card, bank transfer & cheque
  if (name.includes("cash, card") || name.includes("payment method")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.paymentPills}>
          <span className={styles.payCash}>Cash</span>
          <span className={styles.payCard}>Visa</span>
          <span className={styles.payBank}>QR Pay</span>
          <span className={styles.payCheque}>Cheque</span>
        </div>
      </div>
    );
  }

  // 12. Automatic change calculation
  if (name.includes("automatic change") || name.includes("change calculation")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.changeCalc}>
          <span>Tender: $50.00</span>
          <span className={styles.changeResult}>Change: $2.60</span>
        </div>
      </div>
    );
  }

  // 13. Credit bills & receivables
  if (name.includes("credit bills") || name.includes("credit (pay later)")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.creditDue}>
          <Wallet size={12} color="#d97706" />
          <span>Customer Due: $14.50</span>
        </div>
      </div>
    );
  }

  // 14. Loyalty points
  if (name.includes("loyalty points")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.loyaltyStar}>
          <Sparkles size={12} color="#d97706" />
          <span>+45 Points (Redeem $4.50)</span>
        </div>
      </div>
    );
  }

  // 14b. Expense tracking & running costs
  if (name.includes("expense")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.creditDue}>
          <DollarSign size={12} color="#b45309" />
          <span>Till Petty Cash</span>
        </div>
      </div>
    );
  }

  // 15. FIFO batch tracking
  if (name.includes("fifo batch")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.fifoPipeline}>
          <span className={styles.fifoBatchOld}>Batch #B1 (Cost $3.80)</span>
          <span className={styles.fifoArrow}>→</span>
          <span className={styles.fifoDeductTag}>FIFO Done</span>
        </div>
      </div>
    );
  }

  // 16. Low-stock alerts
  if (name.includes("low-stock alerts") || name.includes("stock alerts")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.alertPulse}>
          <span className={styles.pulseDotAmber} />
          <span>Restock Warning: 3 Left</span>
        </div>
      </div>
    );
  }

  // 17. Barcode label printing
  if (name.includes("barcode label printing") || name.includes("label printing")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.labelSticker}>
          <Printer size={12} color="var(--ink)" />
          <span>Print EAN-13 Label</span>
        </div>
      </div>
    );
  }

  // 18. Cheque maturity reminders
  if (name.includes("cheque maturity") || name.includes("cheque")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.chequeDue}>
          <Calendar size={12} color="#b45309" />
          <span>Due in 48 Hours</span>
        </div>
      </div>
    );
  }

  // 19. Shift open & close
  if (name.includes("shift open") || name.includes("expected vs counted")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.shiftBalance}>
          <Clock size={12} color="#1faa55" />
          <span>Float: $100.00 · Balanced</span>
        </div>
      </div>
    );
  }

  // 20. SMS e-bill receipts
  if (name.includes("sms e-bill") || name.includes("sms bill")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.smsSent}>
          <MessageSquare size={12} color="#1faa55" />
          <span>SMS eBill Delivered</span>
        </div>
      </div>
    );
  }

  // 21. Telegram order alerts
  if (name.includes("telegram")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.tgAlert}>
          <Send size={12} color="#229ed9" />
          <span>Telegram: New Sale $24.00</span>
        </div>
      </div>
    );
  }

  // 22. Two-way cloud sync
  if (name.includes("two-way cloud sync") || name.includes("cloud sync")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.cloudSync}>
          <Wifi size={12} color="#1faa55" />
          <span>Synced 2s ago · Offline Safe</span>
        </div>
      </div>
    );
  }

  // 23. Admin & cashier roles / permissions
  if (name.includes("admin & cashier") || name.includes("permissions") || name.includes("pin override")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.securityPin}>
          <ShieldCheck size={12} color="var(--red)" />
          <span>Manager PIN Override</span>
        </div>
      </div>
    );
  }

  // 24. Reports / Profit & Loss
  if (name.includes("profit & loss") || name.includes("reports") || name.includes("dashboard")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.reportGross}>
          <TrendingUp size={12} color="#1faa55" />
          <span>Gross Margin: 34.8%</span>
        </div>
      </div>
    );
  }

  // 25. Thermal receipt printers
  if (name.includes("thermal receipt printers") || name.includes("printers")) {
    return (
      <div className={styles.previewBox}>
        <div className={styles.printerRoll}>
          <Printer size={12} color="var(--ink)" />
          <span>58mm / 80mm ESC/POS</span>
        </div>
      </div>
    );
  }

  // Default sleek micro-preview tag for any other feature
  return (
    <div className={styles.previewBox}>
      <div className={styles.genericTag}>
        <CheckCircle2 size={12} color="var(--red)" />
        <span>Enterprise Ready</span>
      </div>
    </div>
  );
}
