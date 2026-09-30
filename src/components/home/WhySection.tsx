import { MessageSquare, Package, Printer, Send, Wallet, WifiOff, type LucideIcon } from "lucide-react";
import styles from "./WhySection.module.css";

const reasons: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Never lose a sale to the internet",
    body: "Billing, stock and shifts run fully offline. Everything syncs to your cloud panel when the connection returns.",
    icon: WifiOff,
  },
  {
    title: "Stock that matches the shelf",
    body: "Every sale, return and goods receipt moves stock through FIFO batches, so counts and valuation stay accurate.",
    icon: Package,
  },
  {
    title: "Cash you can account for",
    body: "Cashiers open and close shifts. The till ledger records cash-in, cash-out and any short or excess.",
    icon: Wallet,
  },
  {
    title: "Receipts on the customer's phone",
    body: "Send the bill as an SMS eBill at checkout, with invoice, items, totals and balance.",
    icon: MessageSquare,
  },
  {
    title: "Every sale on your phone",
    body: "Telegram alerts send the owner each new order with its items, from every branch.",
    icon: Send,
  },
  {
    title: "Fits the counter you already have",
    body: "Touch or standard screens, USB barcode scanners, and bill and barcode label printers.",
    icon: Printer,
  },
];

export function WhySection() {
  return (
    <section id="why" data-screen-label="Why MariaPoS" className={styles.section}>
      <div data-reveal="up" className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Why MariaPoS</span>
          <h2 className="section-title">Why shops switch to MariaPoS</h2>
        </div>
        <p className={`lead ${styles.intro}`}>
          Built in Colombo for counters that can&apos;t stop: grocery, pharmacy, retail and cafés.
        </p>
      </div>

      <div className={styles.grid}>
        {reasons.map(({ title, body, icon: Icon }, i) => (
          <article key={title} data-reveal="up" data-delay={(i % 3) * 90} className={styles.card}>
            <span aria-hidden="true" className={styles.number}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={styles.cardTop}>
              <span className="icon-tile">
                <Icon size={24} />
              </span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
