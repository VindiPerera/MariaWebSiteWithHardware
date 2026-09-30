import { CalendarCheck, Cloud, CreditCard, MessageSquare, Send, WifiOff, type LucideIcon } from "lucide-react";
import styles from "./TrustBar.module.css";

const items: [string, LucideIcon][] = [
  ["7-day free trial", CalendarCheck],
  ["No credit card required", CreditCard],
  ["Works offline", WifiOff],
  ["Cloud sync", Cloud],
  ["SMS receipts", MessageSquare],
  ["Telegram alerts", Send],
];

export function TrustBar() {
  return (
    <section aria-label="Highlights" className={styles.bar}>
      <div className={styles.inner}>
        {items.map(([label, Icon], i) => (
          <div key={label} data-reveal="up" data-delay={i * 60} className={styles.item}>
            <span className={styles.icon}>
              <Icon size={17} color="var(--red)" />
            </span>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
