import { Check, Crown, Heart, Calculator, UserRound, type LucideIcon } from "lucide-react";
import styles from "./Benefits.module.css";

const audiences: { role: string; headline: string; icon: LucideIcon; points: string[] }[] = [
  {
    role: "For shop owners",
    headline: "Control without being at the counter",
    icon: Crown,
    points: [
      "See every sale live on Telegram, from every branch",
      "True profit & loss using FIFO cost and real expenses",
      "Cash shortages traced to the exact shift and cashier",
      "Data backed up to the cloud automatically",
      "One licence, every feature, no hidden add-ons",
    ],
  },
  {
    role: "For cashiers",
    headline: "Faster, simpler billing",
    icon: UserRound,
    points: [
      "Scan or search products and bill in seconds",
      "F-key shortcuts and touch keypad",
      "Automatic change calculation",
      "Keeps working when the internet goes down",
      "Learn it in a single shift",
    ],
  },
  {
    role: "For managers & accountants",
    headline: "Numbers you can trust",
    icon: Calculator,
    points: [
      "13+ reports exported to PDF or Excel",
      "Supplier payables and cheque due-date reminders",
      "Customer credit balances and settlements",
      "Tax summary and shrinkage reports",
      "Audit log of important actions",
    ],
  },
  {
    role: "For your customers",
    headline: "A better checkout experience",
    icon: Heart,
    points: [
      "Shorter queues at the counter",
      "Receipts by SMS that never fade",
      "Loyalty points on every purchase",
      "Easy returns against the original bill",
      "Pay by cash, card, transfer or cheque",
    ],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.inner}>
        <div data-reveal="up" className="section-intro">
          <span className={`eyebrow ${styles.eyebrow}`}>Benefits</span>
          <h2 id="benefits-title" className={`section-title ${styles.title}`}>
            What changes when you switch to MariaPoS
          </h2>
          <p className={`lead ${styles.lead}`}>
            Less time billing, fewer losses and a clear view of the business, for everyone who works with the till.
          </p>
        </div>

        <div className={styles.grid}>
          {audiences.map(({ role, headline, icon: Icon, points }, i) => (
            <article key={role} data-reveal="up" data-delay={i * 80} className={styles.card}>
              <span className={styles.icon}>
                <Icon size={22} />
              </span>
              <span className={styles.role}>{role}</span>
              <h3 className={styles.headline}>{headline}</h3>
              <ul className={styles.points}>
                {points.map((point) => (
                  <li key={point}>
                    <Check size={15} strokeWidth={2.6} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
