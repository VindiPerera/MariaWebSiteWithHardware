"use client";

import Image from "next/image";
import { useState } from "react";
import { Cloud, MessageSquare, Send, type LucideIcon } from "lucide-react";
import smsEbill from "@/assets/images/sms-ebill.jpeg";
import styles from "./ConnectedSection.module.css";

const tabs: { title: string; icon: LucideIcon; body: string }[] = [
  {
    title: "SMS bill receipts",
    icon: MessageSquare,
    body: "The receipt goes to the customer's phone at checkout, ready for warranty or return lookups later. Messages draw from a prepaid SMS wallet on your license, and the cashier sees the live balance before every sale.",
  },
  {
    title: "Telegram order alerts",
    icon: Send,
    body: 'Every completed sale sends a "New Order" message with the items to the owner\'s Telegram. Follow each branch from your phone without opening the POS or a dashboard.',
  },
  {
    title: "Two-way cloud sync",
    icon: Cloud,
    body: "Sales never wait on the internet. When the till reconnects, sales, stock, suppliers, customers, credit and expenses sync to your cloud panel, so your data isn't stuck on one machine.",
  },
];

const telegramMessages = [
  { title: "New Order · Branch 2", items: "3 M 1*10 Plaster ×2, 4Ever Aloe Vera Gel ×1", total: "$1,200.00", dur: 5200, opacity: 1 },
  { title: "New Order · Branch 1", items: "Empty bottle 19L ×1", total: "$1,500.00", dur: 6000, opacity: 0.75 },
  { title: "New Order · Branch 2", items: "apple13 ×1", total: "$1,000.00", dur: 6800, opacity: 0.5 },
];

const branches = [
  { name: "Branch 1", state: "Synced", top: "17.6%" },
  { name: "Branch 2", state: "Synced", top: "50%" },
  { name: "Owner panel", state: "Up to date", top: "82.4%" },
];

function SmsDemo() {
  return (
    <div className={styles.sms}>
      <div className={styles.checkout}>
        <span className={styles.checkoutTitle}>Checkout</span>
        <span className={styles.checkoutTotal}>
          <span>Total</span>
          <span className={styles.mono}>$4,740.00</span>
        </span>
        <span className={styles.checkoutPhone}>077 •••• 412</span>
        <span className={styles.checkoutButton}>Checkout [F12]</span>
        <span className={styles.checkoutCredits}>18 SMS left</span>
      </div>
      <svg width="80" height="12" viewBox="0 0 80 12" aria-hidden="true">
        <line data-dash="" x1="0" y1="6" x2="80" y2="6" stroke="#ff8a80" strokeWidth="2" strokeDasharray="6 6" />
      </svg>
      <div data-float="5000" data-amp="6" className={styles.phone}>
        <div className={styles.phoneScreen}>
          <span className={styles.notch} />
          <Image
            src={smsEbill}
            alt="Real MariaPoS SMS eBill showing invoice, items, totals and payment"
            fill
            sizes="212px"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
    </div>
  );
}

function TelegramDemo() {
  return (
    <div className={styles.telegram}>
      <div className={styles.telegramStatus}>
        <span className={styles.onlineDot} />
        Sale completed · Till 1 · 14:32
      </div>
      {telegramMessages.map((message, i) => (
        <div key={i} data-float={message.dur} data-amp="4" className={styles.message} style={{ opacity: message.opacity }}>
          <span className={styles.messageIcon}>
            <Send size={16} color="#ffffff" />
          </span>
          <span className={styles.messageText}>
            <span className={styles.messageTitle}>{message.title}</span>
            <span className={styles.messageItems}>{message.items}</span>
            <span className={styles.messageTotal}>{message.total}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function CloudDemo() {
  return (
    <div className={styles.cloud}>
      <svg viewBox="0 0 440 340" preserveAspectRatio="none" className={styles.cloudLines} aria-hidden="true">
        <line data-dash="" x1="80" y1="170" x2="220" y2="170" stroke="#ff8a80" strokeWidth="2" strokeDasharray="6 6" />
        <line data-dash="" x1="220" y1="170" x2="370" y2="60" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="6 6" />
        <line data-dash="" x1="220" y1="170" x2="370" y2="170" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="6 6" />
        <line data-dash="" x1="220" y1="170" x2="370" y2="280" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="6 6" />
      </svg>
      <div className={styles.till}>
        <span className={styles.nodeName}>Till 1</span>
        <span className={styles.tillState}>Offline · 12 queued</span>
      </div>
      <div className={styles.cloudHub}>
        <Cloud size={40} color="#ffffff" />
      </div>
      {branches.map((branch) => (
        <div key={branch.name} className={styles.branch} style={{ top: branch.top }}>
          <span className={styles.nodeName}>{branch.name}</span>
          <span className={styles.branchState}>{branch.state}</span>
        </div>
      ))}
    </div>
  );
}

export function ConnectedSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="connected" className={styles.section}>
      <div aria-hidden="true" className={styles.dots} />
      <div aria-hidden="true" className={styles.glow} />

      <div className={styles.inner}>
        <div data-reveal="up" className={styles.heading}>
          <span className={styles.eyebrow}>Connected beyond the counter</span>
          <h2 className="section-title">
            Your receipt, your owner&apos;s phone and your cloud panel, all updated at checkout.
          </h2>
        </div>

        <div data-reveal="up" className={styles.layout}>
          <div role="tablist" className={styles.tabs}>
            {tabs.map(({ title, icon: Icon, body }, i) => {
              const selected = active === i;
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                >
                  <span className={styles.tabTitle}>
                    <span className={styles.tabIcon}>
                      <Icon size={17} color="#ffffff" />
                    </span>
                    {title}
                  </span>
                  {selected && <span className={styles.tabBody}>{body}</span>}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className={styles.stage}>
            {active === 0 && <SmsDemo />}
            {active === 1 && <TelegramDemo />}
            {active === 2 && <CloudDemo />}
          </div>
        </div>
      </div>
    </section>
  );
}
