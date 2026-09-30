"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, PhoneCall, X } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./FloatingContact.module.css";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-pop after 2 seconds to catch customer attention, then user can toggle or close
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <aside className={styles.floatingWrapper} aria-label="Customer Support Contact">
      {/* 24/7 Support Popup Card — Sits directly ABOVE the button in a single vertical column */}
      {isOpen && (
        <div
          className={styles.popupBanner}
          role="dialog"
          aria-modal="false"
          aria-labelledby="contact-popup-title"
        >
          <div className={styles.popupHeader}>
            <div className={styles.popupHeaderLeft}>
              <div className={styles.popupIconBox}>
                <Phone size={18} color="var(--red-light)" strokeWidth={2.4} />
              </div>
              <div className={styles.popupTitles}>
                <div id="contact-popup-title" className={styles.popupTitle}>
                  <span>24/7 Service</span>
                  <span className={styles.popupBadge}>Online</span>
                </div>
                <div className={styles.popupSubtitle}>
                  Lifetime Guarantee &amp; 24/7 Global Support
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
              aria-label="Close support card"
            >
              <X size={15} />
            </button>
          </div>

          <div className={styles.popupActionLinks}>
            <a
              href={site.phoneHref}
              className={styles.popupCallLink}
              aria-label={`Call MariaPoS at ${site.phone}`}
            >
              <PhoneCall size={13} />
              <span>{site.phone}</span>
            </a>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.popupWaLink}
              aria-label="Chat with MariaPoS on WhatsApp"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Single Floating Button with Online Status Pill on the Right Side */}
      <div className={styles.triggerContainer}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>Call Us</span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${styles.mainCircleBtn} ${isOpen ? styles.mainCircleBtnActive : ""}`}
          aria-label={isOpen ? "Close support details" : "Open 24/7 service contact"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} strokeWidth={2.4} />
          ) : (
            <Phone size={24} strokeWidth={2.4} />
          )}
        </button>
      </div>
    </aside>
  );
}
