"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Send,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import ownerTelegramImg from "@/assets/images/owner-telegram-alerts.jpg";
import mobileReceiptImg from "@/assets/images/mobile-checkout-receipt.jpg";
import warehouseScannerImg from "@/assets/images/warehouse-inventory-scanner.jpg";
import styles from "./VisualExperienceRow.module.css";

export function VisualExperienceRow() {
  return (
    <section className={styles.section} aria-label="Retail Store and Warehouse Experience">
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.headingBlock}>
          <div className={styles.eyebrow}>Built For Real Retail Operations in Sri Lanka</div>
          <h2 className={styles.title}>From the Front Till to the Owner&apos;s Phone.</h2>
          <p className={styles.subtitle}>
            MariaPoS connects every touchpoint of your store. Fast contactless customer checkout at the counter,
            strict FIFO batch auditing in your warehouse, and instant Telegram sales alerts in your pocket.
          </p>
        </div>

        {/* 3-Card Visual Feature Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Owner Telegram Sale Alerts */}
          <div className={styles.experienceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={ownerTelegramImg}
                alt="Shop owner checking live Telegram sale alerts and revenue dashboard on smartphone at cafe"
                className={styles.cardImg}
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.badgePulseBlue} />
                <span>Pushed in &lt;1s to Owner Telegram</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Send size={16} color="#0284c7" />
                <span>Remote Business Control</span>
              </div>

              <h3 className={styles.cardTitle}>Owner in Pocket. Live Telegram Push.</h3>

              <p className={styles.cardDesc}>
                Whether having tea or traveling, every completed sale pushes instantly to your Telegram with items,
                branch name, payment method, and gross profit margin.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Real-time order push notifications</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Discrepancy &amp; blind cash drawer alerts</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Cloud portal accessible from any phone</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#telegram-alerts" className={styles.cardLink}>
                  <span>Explore cloud alerts</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Customer Phone SMS Receipt & Checkout Experience */}
          <div className={styles.experienceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={mobileReceiptImg}
                alt="Customer holding smartphone with instant green-check SMS e-bill receipt at marble counter"
                className={styles.cardImg}
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.badgePulseGreen} />
                <span>Delivered in 1.8s via SMS Gateway</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Smartphone size={16} color="#dc2626" />
                <span>Customer Counter Experience</span>
              </div>

              <h3 className={styles.cardTitle}>Paperless SMS Receipts. Save 70% Rolls.</h3>

              <p className={styles.cardDesc}>
                Cut thermal paper roll purchases by up to 70%. When customers enter their phone number at checkout,
                MariaPOS automatically texts a branded digital receipt with items and hotlines.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Branded SMS header with shop name</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Permanent warranty proof on phone</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Build customer database for promo SMS</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#sms-ebill" className={styles.cardLink}>
                  <span>See SMS e-Billing in action</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Warehouse FIFO Stock Scanner Experience */}
          <div className={styles.experienceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={warehouseScannerImg}
                alt="Warehouse inventory manager scanning boxed stock with rugged tablet HUD overlay"
                className={styles.cardImg}
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.badgePulseAmber} />
                <span>FIFO Batch #B-409 Verified</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Boxes size={16} color="#d97706" />
                <span>Inventory &amp; Backroom Auditing</span>
              </div>

              <h3 className={styles.cardTitle}>Strict FIFO Batching &amp; Barcode Stocktake.</h3>

              <p className={styles.cardDesc}>
                Avoid dead stock and book discrepancies. Stock items purchased at different supplier costs are tracked
                chronologically. Perishables prompt proactive expiry alarms.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Automatic First-In, First-Out cost deduction</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Print custom barcode stickers in 1 click</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Barcode stocktake on Android tablets</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#fifo-inventory" className={styles.cardLink}>
                  <span>Explore FIFO inventory</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
