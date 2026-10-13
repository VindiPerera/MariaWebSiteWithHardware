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
import { useLang } from "@/lib/i18n";

export function VisualExperienceRow() {
  const { t } = useLang();
  return (
    <section className={styles.section} aria-label="Retail Store and Warehouse Experience">
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.headingBlock}>
          <div className={styles.eyebrow}>{t("Built For Real Retail Operations in Sri Lanka", "ශ්‍රී ලංකාවේ සැබෑ Retail Operations වලටම හදපු")}</div>
          <h2 className={styles.title}>{t("From the Front Till to the Owner's Phone.", "Front Till එකේ සිට අයිතිකරුගේ Phone එක දක්වා.")}</h2>
          <p className={styles.subtitle}>
            {t(
              "MariaPoS connects every touchpoint of your store. Fast contactless customer checkout at the counter, strict FIFO batch auditing in your warehouse, and instant Telegram sales alerts in your pocket.",
              "MariaPoS මගින් ඔබේ කඩයේ හැම touchpoint එකම සම්බන්ධ කරනවා. Counter එකේ වේගවත් contactless checkout, ගබඩාවේ නිවැරදි FIFO batch auditing, සහ සාක්කුවේ ඇති phone එකට instant Telegram sales alerts.",
            )}
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
                <span>{t("Pushed in <1s to Owner Telegram", "අයිතිකරුගේ Telegram එකට තත්පර 1කට වඩා අඩුවෙන් push වෙනවා")}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Send size={16} color="#0284c7" />
                <span>{t("Remote Business Control", "දුරින් ඉඳන් Business Control")}</span>
              </div>

              <h3 className={styles.cardTitle}>{t("Owner in Pocket. Live Telegram Push.", "අයිතිකරු සාක්කුවේ. Live Telegram Push.")}</h3>

              <p className={styles.cardDesc}>
                {t(
                  "Whether having tea or traveling, every completed sale pushes instantly to your Telegram with items, branch name, payment method, and gross profit margin.",
                  "තේ එකක් බොන ගමන් හෝ ගමනක් යන ගමන්, සම්පූර්ණ වෙන හැම sale එකක්ම items, branch name, payment method සහ gross profit margin එක්ක ඔබේ Telegram එකට instant එනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Real-time order push notifications", "Real-time order push notifications")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Discrepancy & blind cash drawer alerts", "Discrepancy සහ blind cash drawer alerts")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Cloud portal accessible from any phone", "ඕනෑම phone එකකින් Cloud portal එකට access කරන්න පුළුවන්")}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#telegram-alerts" className={styles.cardLink}>
                  <span>{t("Explore cloud alerts", "Cloud alerts ගැන බලන්න")}</span>
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
                <span>{t("Delivered in 1.8s via SMS Gateway", "SMS Gateway හරහා තත්පර 1.8කින් ලැබෙනවා")}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Smartphone size={16} color="#dc2626" />
                <span>{t("Customer Counter Experience", "Customer ගේ Counter Experience එක")}</span>
              </div>

              <h3 className={styles.cardTitle}>{t("Paperless SMS Receipts. Save 70% Rolls.", "Paperless SMS Receipts. Rolls 70%ක් ඉතිරියි.")}</h3>

              <p className={styles.cardDesc}>
                {t(
                  "Cut thermal paper roll purchases by up to 70%. When customers enter their phone number at checkout, MariaPOS automatically texts a branded digital receipt with items and hotlines.",
                  "Thermal paper roll මිලදී ගැනීම 70%ක් දක්වා අඩු කරගන්න. Checkout එකේදී customer phone number එක දුන්නම, MariaPOS එක items සහ hotlines සහිත branded digital receipt එකක් automatically SMS කරනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Branded SMS header with shop name", "කඩේ නමින් Branded SMS header එකක්")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Permanent warranty proof on phone", "Phone එකේ ස්ථිර warranty proof එකක්")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Build customer database for promo SMS", "Promo SMS සඳහා customer database එකක් හදාගන්න")}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#sms-ebill" className={styles.cardLink}>
                  <span>{t("See SMS e-Billing in action", "SMS e-Billing වැඩ කරන හැටි බලන්න")}</span>
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
                <span>{t("FIFO Batch #B-409 Verified", "FIFO Batch #B-409 Verified")}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Boxes size={16} color="#d97706" />
                <span>{t("Inventory & Backroom Auditing", "Inventory සහ Backroom Auditing")}</span>
              </div>

              <h3 className={styles.cardTitle}>{t("Strict FIFO Batching & Barcode Stocktake.", "නිවැරදි FIFO Batching සහ Barcode Stocktake.")}</h3>

              <p className={styles.cardDesc}>
                {t(
                  "Avoid dead stock and book discrepancies. Stock items purchased at different supplier costs are tracked chronologically. Perishables prompt proactive expiry alarms.",
                  "Dead stock සහ book discrepancies වලින් ගැලවෙන්න. වෙනස් supplier costs වලට ගත්ත stock items කාලානුක්‍රමිකව track වෙනවා. Perishables වලට expiry alarms කලින්ම එනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Automatic First-In, First-Out cost deduction", "Automatic First-In, First-Out cost deduction")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Print custom barcode stickers in 1 click", "Custom barcode stickers එක click එකකින් print කරන්න")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Barcode stocktake on Android tablets", "Android tablets වලින් Barcode stocktake")}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/features#fifo-inventory" className={styles.cardLink}>
                  <span>{t("Explore FIFO inventory", "FIFO inventory ගැන බලන්න")}</span>
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
