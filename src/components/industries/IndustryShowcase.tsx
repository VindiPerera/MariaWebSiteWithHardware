"use client";

import { useState } from "react";
import {
  ArrowRight,
  Barcode,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Package,
  Plus,
  Receipt,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";
import styles from "./IndustryShowcase.module.css";

interface IndustryShowcaseProps {
  slug: string;
  name: string;
  short: string;
}

type TradeItem = {
  name: string;
  unit: string;
  price: number;
  badge: string;
  qty: number;
};

const tradeScenarios: Record<
  string,
  {
    modeTitle: string;
    description: string;
    items: TradeItem[];
    actionHotkey: string;
    hotkeyDesc: string;
    receiptSummary: string;
  }
> = {
  pharmacy: {
    modeTitle: "Pharmacy Batch & Expiry Mode",
    description: "Every item billed automatically consumes the oldest non-expired batch with distributor traceability.",
    items: [
      { name: "Paracetamol 500mg (Card)", unit: "10 Tabs", price: 12.0, badge: "Exp: 2028 · Batch #P92", qty: 2 },
      { name: "Amoxicillin 250mg Susp.", unit: "Bottle", price: 24.5, badge: "Exp: 2027 · Batch #A14", qty: 1 },
      { name: "3M Surgical Medical Tape", unit: "Roll", price: 8.5, badge: "Exp: 2029 · Batch #M08", qty: 1 },
    ],
    actionHotkey: "[F4] Drug Batch Lookup",
    hotkeyDesc: "Check strip vs box price instantly",
    receiptSummary: "Invoice #004921 dispatched with distributor traceability",
  },
  "supermarket-grocery": {
    modeTitle: "Supermarket Rapid Checkout Mode",
    description: "Decimal weights, loose produce pricing, and barcode queue busting at peak rush hours.",
    items: [
      { name: "Organic Basmati Rice", unit: "5.0 kg", price: 18.5, badge: "Scale Weigh @ $3.70/kg", qty: 1 },
      { name: "Fresh Whole Milk 1L", unit: "Carton", price: 3.5, badge: "Barcode Scan (EAN-13)", qty: 2 },
      { name: "Whole Grain Crackers", unit: "490g Pack", price: 4.2, badge: "Promo 5% Applied", qty: 1 },
    ],
    actionHotkey: "[F12] Instant Pay & SMS",
    hotkeyDesc: "Send digital receipt to customer's mobile",
    receiptSummary: "eBill SMS dispatched to customer mobile",
  },
  "hardware-store": {
    modeTitle: "Hardware & Contractor Trade Mode",
    description: "Sell by metre, box or kg, with one-key toggle between retail and trade contractor pricing.",
    items: [
      { name: "PVC Pressure Pipe 1 inch", unit: "12 Metres", price: 28.5, badge: "Trade Rate (Wholesale)", qty: 3 },
      { name: "Portland Cement 50kg", unit: "Bag", price: 14.5, badge: "Heavy Goods Batch #C4", qty: 10 },
      { name: "Brass Wood Screws 1.5 in", unit: "Box of 100", price: 6.5, badge: "Bin Label Scanned", qty: 2 },
    ],
    actionHotkey: "[F5] Toggle Wholesale Rate",
    hotkeyDesc: "Switches entire cart to contractor discount",
    receiptSummary: "Trade Credit: $250.00 added to Metro Contractors",
  },
  "clothing-textile": {
    modeTitle: "Fashion & Retail Seasonal Rush Mode",
    description: "Promo coupon validation, invoice-based garment exchanges, and customer loyalty reward points.",
    items: [
      { name: "Pure Linen Men's Shirt (L)", unit: "Garment", price: 45.0, badge: "Barcode Tag #L-812", qty: 1 },
      { name: "Premium Silk Fabric", unit: "3.5 Metres", price: 56.0, badge: "Decimal Length Billed", qty: 1 },
      { name: "Seasonal Promo Voucher", unit: "Code: SAVE2026", price: -10.0, badge: "Validated -10%", qty: 1 },
    ],
    actionHotkey: "[F7] Apply Promo Voucher",
    hotkeyDesc: "Applies verified discount to bill",
    receiptSummary: "Invoice stamped for 14-day exchange with SMS receipt",
  },
  "bakery-cafe": {
    modeTitle: "Quick-Service Counter Rush Mode",
    description: "High-speed on-screen keypad, blind shift changeover, and instant cash drawer triggers.",
    items: [
      { name: "Artisan Butter Croissant", unit: "Piece", price: 3.5, badge: "Quick Key #1", qty: 4 },
      { name: "Iced Caramel Latte", unit: "Cup", price: 4.75, badge: "Quick Key #4", qty: 2 },
      { name: "Chocolate Fudge Brownie", unit: "Portion", price: 3.8, badge: "Fresh Daily Batch", qty: 1 },
    ],
    actionHotkey: "[ENTER] Auto Drawer Kick",
    hotkeyDesc: "Cash drawer opens, change calculated",
    receiptSummary: "Shift #42 counted cash matches expected till float",
  },
  "auto-parts": {
    modeTitle: "Auto Spare Parts & Workshop Mode",
    description: "Search by OEM part number or scan barcode, and assign trade invoices to mechanics on credit.",
    items: [
      { name: "Front Strut Shock Absorber", unit: "OE 48510-09", price: 145.0, badge: "Landed FIFO Cost $112.00", qty: 2 },
      { name: "Denso Iridium Spark Plug", unit: "Pack of 4", price: 48.0, badge: "OEM Stock", qty: 1 },
    ],
    actionHotkey: "[F2] Part Number Search",
    hotkeyDesc: "Look up interchange numbers across vehicles",
    receiptSummary: "Trade account ledger updated for Express Auto Care",
  },
};

const defaultScenario = {
  modeTitle: "Multi-Trade Retail Counter Mode",
  description: "High-speed barcode scanning, FIFO stock deduction, and instant receipts offline.",
  items: [
    { name: "Retail Item Alpha 500g", unit: "Pack", price: 850, badge: "Barcode Scan", qty: 2 },
    { name: "Bulk Trade Item Beta", unit: "Box", price: 2400, badge: "Wholesale Rate", qty: 1 },
  ],
  actionHotkey: "[F12] Complete Sale",
  hotkeyDesc: "Print thermal receipt & SMS eBill",
  receiptSummary: "100% offline database synced seamlessly",
};

export function IndustryShowcase({ slug, name, short }: IndustryShowcaseProps) {
  const scenario = tradeScenarios[slug] || defaultScenario;
  const [items, setItems] = useState<TradeItem[]>(scenario.items);
  const [billCompleted, setBillCompleted] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const triggerCheckout = () => {
    setBillCompleted(true);
    setTimeout(() => setBillCompleted(false), 4000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div data-reveal="up" className={styles.headingWrap}>
          <div className={styles.badgePill}>
            <Sparkles size={14} color="var(--red)" />
            <span>Interactive {short} Counter Simulator</span>
          </div>
          <h2 className="section-title">Experience MariaPoS in action for {short.toLowerCase()}</h2>
          <p className="lead">{scenario.description}</p>
        </div>

        <div data-reveal="up" data-delay="100" className={styles.terminal}>
          {/* Top Bar of the POS Simulator */}
          <div className={styles.terminalHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.modeBadge}>
              <Zap size={13} color="var(--red)" />
              <span>{scenario.modeTitle}</span>
            </div>
            <div className={styles.statusOffline}>
              <ShieldCheck size={13} color="#1faa55" />
              <span>Offline Database · Zero Lag</span>
            </div>
          </div>

          {/* Active Counter Screen Content */}
          <div className={styles.terminalBody}>
            {/* Left Column: Interactive Cart */}
            <div className={styles.cartColumn}>
              <div className={styles.cartHead}>
                <span className={styles.cartTitle}>Counter Bill #2026-{short.slice(0, 3).toUpperCase()}</span>
                <span className={styles.hotkeyChip}>{scenario.actionHotkey}</span>
              </div>

              <div className={styles.itemsList}>
                {items.map((item, idx) => (
                  <div key={item.name} className={styles.itemRow}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <div className={styles.itemSub}>
                        <span className={styles.itemUnit}>{item.unit}</span>
                        <span className={styles.itemBadge}>{item.badge}</span>
                      </div>
                    </div>

                    <div className={styles.itemPriceCol}>
                      <span className={styles.qtyMultiplier}>×{item.qty}</span>
                      <span className={styles.itemPrice}>
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Grand Total (Net)</span>
                  <span className={styles.grandTotal}>${total.toFixed(2)}</span>
                </div>

                <div className={styles.actionRow}>
                  <button
                    type="button"
                    onClick={triggerCheckout}
                    className={styles.checkoutBtn}
                  >
                    <Check size={16} />
                    <span>{billCompleted ? "Bill Completed & Synced!" : "Simulate Instant Checkout [F12]"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Key Capabilities for this Trade */}
            <div className={styles.infoColumn}>
              <span className={styles.infoTitle}>Trade Counter Highlights</span>
              <p className={styles.infoDesc}>
                Every transaction automatically runs deep bookkeeping in the background:
              </p>

              <div className={styles.perkCards}>
                <div className={styles.perkCard}>
                  <div className={styles.perkIcon}>
                    <Package size={16} color="var(--red)" />
                  </div>
                  <div>
                    <h4 className={styles.perkName}>True FIFO Deduction</h4>
                    <p className={styles.perkText}>Oldest batch deducted with accurate gross margin.</p>
                  </div>
                </div>

                <div className={styles.perkCard}>
                  <div className={styles.perkIcon}>
                    <Send size={16} color="#229ed9" />
                  </div>
                  <div>
                    <h4 className={styles.perkName}>Owner Phone Alerts</h4>
                    <p className={styles.perkText}>Telegram alert dispatched to owner the instant bill prints.</p>
                  </div>
                </div>

                <div className={styles.perkCard}>
                  <div className={styles.perkIcon}>
                    <Clock size={16} color="#1faa55" />
                  </div>
                  <div>
                    <h4 className={styles.perkName}>Shift Audit Lock</h4>
                    <p className={styles.perkText}>Cashier blind count compared to actual drawer float.</p>
                  </div>
                </div>
              </div>

              <div className={styles.auditStatus}>
                <CheckCircle2 size={15} color="#1faa55" />
                <span>{scenario.receiptSummary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
