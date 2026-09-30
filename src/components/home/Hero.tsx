import Image from "next/image";
import { ArrowRight, Check, MessageSquare, Package, Send } from "lucide-react";
import posBilling from "@/assets/images/pos-billing.png";
import styles from "./Hero.module.css";

const perks = ["No credit card required", "Full access for 7 days", "Windows 10+"];
const sparkBars = [30, 45, 38, 60, 52, 70, 48, 80, 66, 95];

export function Hero() {
  return (
    <section data-screen-label="Hero" className={styles.hero}>
      <div aria-hidden="true" className={styles.grid} />
      <div aria-hidden="true" className={styles.glowRight} />
      <div aria-hidden="true" className={styles.glowLeft} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div data-reveal="up" data-delay="0" className={styles.badge}>
            <span className={styles.badgeTag}>New</span>
            SMS receipts and Telegram sales alerts
          </div>
          <h1 data-reveal="up" data-delay="80" className={styles.title}>
            Bill fast. Know exactly what&apos;s <span className={styles.titleAccent}>left on the shelf.</span>
          </h1>
          <p data-reveal="up" data-delay="200" className={styles.subtitle}>
            MariaPoS deducts stock FIFO on every sale, closes each cashier&apos;s shift against the till, and texts the
            receipt to your customer — even when the internet is down.
          </p>
          <div data-reveal="up" data-delay="320" className={styles.actions}>
            <a href="#trial" className={styles.primary}>
              Start 7-Day Free Trial
              <ArrowRight size={18} />
            </a>
            <a href="#demo" className={styles.secondary}>
              Book a Demo
            </a>
          </div>
          <div data-reveal="up" data-delay="440" className={styles.perks}>
            {perks.map((perk) => (
              <span key={perk} className={styles.perk}>
                <Check size={16} color="var(--red)" />
                {perk}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal="right" data-delay="250" className={styles.visual}>
          <div data-float="7000" data-amp="6">
            <div className={styles.window}>
              <div className={styles.windowBar}>
                <span />
                <span />
                <span />
                <span className={styles.windowTitle}>MariaPoS · POS Billing</span>
              </div>
              <Image
                src={posBilling}
                alt="MariaPoS billing screen with product search, shopping cart and numeric keypad"
                className={styles.screenshot}
                sizes="(max-width: 1000px) 100vw, 640px"
                priority
              />
            </div>
          </div>

          <div data-reveal="up" data-delay="700" className={`${styles.chipSlot} ${styles.orderSlot}`}>
            <div data-float="5200" data-amp="9" className={styles.orderChip}>
              <span className={styles.orderIcon}>
                <Send size={18} color="#ffffff" />
              </span>
              <span className={styles.chipText}>
                <strong>New Order · Branch 2</strong>
                <span>3 M 1*10 Plaster ×2 · $900.00</span>
              </span>
            </div>
          </div>

          <div data-reveal="up" data-delay="850" className={`${styles.chipSlot} ${styles.salesSlot}`}>
            <div data-float="6400" data-amp="8" className={styles.salesChip}>
              <span className={styles.salesLabel}>Today&apos;s sales · Shift #214</span>
              <span className={styles.salesAmount}>$4,740.00</span>
              <div className={styles.spark}>
                {sparkBars.map((h, i) => (
                  <span
                    key={i}
                    className={i === sparkBars.length - 1 ? styles.sparkBarActive : styles.sparkBar}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div data-reveal="up" data-delay="1000" className={`${styles.chipSlot} ${styles.smsSlot}`}>
            <div data-float="5800" data-amp="7" className={styles.miniChip}>
              <span className={styles.miniIcon}>
                <MessageSquare size={15} color="var(--red)" />
              </span>
              <span className={styles.chipText}>
                <strong>SMS receipt sent</strong>
                <span>18 SMS left</span>
              </span>
            </div>
          </div>

          <div data-reveal="up" data-delay="1150" className={`${styles.chipSlot} ${styles.stockSlot}`}>
            <div data-float="6900" data-amp="6" className={styles.miniChip}>
              <span className={`${styles.miniIcon} ${styles.miniIconWarn}`}>
                <Package size={15} color="#b26a00" />
              </span>
              <span className={styles.chipText}>
                <strong>Low stock</strong>
                <span>3 M 2*10 Plaster · 0 left</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
