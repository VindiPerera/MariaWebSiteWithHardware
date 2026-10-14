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
              "MariaPoS connects every touchpoint of your store. Fast contactless customer checkout at the counter, strict FIFO batch auditing in your warehouse, and instant push sales alerts in your pocket.",
              "MariaPoS ඔබේ වෙළඳසැලේ හැම තැනක්ම එකට සම්බන්ධ කරනවා: counter එකේ වේගවත් checkout, ගබඩාවේ නිවැරදි stock පාලනය, සාක්කුවේ ඇති phone එකට වහාම එන sales alerts.",
            )}
          </p>
        </div>

        {/* 3-Card Visual Feature Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Owner Phone Sale Alerts */}
          <div className={styles.experienceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={ownerTelegramImg}
                alt="Shop owner checking live push sale alerts and revenue dashboard on smartphone at cafe"
                className={styles.cardImg}
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.badgePulseBlue} />
                <span>{t("Pushed in <1s to Owner Phone", "අයිතිකරුගේ phone එකට තත්පර 1ක් ඇතුළත alert එක එනවා")}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardCategory}>
                <Send size={16} color="#0284c7" />
                <span>{t("Remote Business Control", "දුරින් සිට Business Control")}</span>
              </div>

              <h3 className={styles.cardTitle}>{t("Owner in Pocket. Live Push Notification.", "අයිතිකරු සාක්කුවේ. Live Push Notification.")}</h3>

              <p className={styles.cardDesc}>
                {t(
                  "Whether having tea or traveling, every completed sale pushes instantly to your phone with items, branch name, payment method, and gross profit margin.",
                  "තේ එකක් බොමින් හෝ ගමනක් යමින් වුණත්, අවසන් වන හැම sale එකක්ම items, branch එක, ගෙවීම් ක්‍රමය සහ ලාභය සමඟ ඔබේ phone එකට වහාම එනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Real-time order push notifications", "Real-time order push notifications")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Discrepancy & blind cash drawer alerts", "Cash අඩුවීම් සහ drawer එකේ වෙනස්කම් ගැන alerts")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Cloud portal accessible from any phone", "ඕනෑම phone එකකින් cloud එකට ඇතුළු වෙන්න පුළුවන්")}</span>
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
                  "Thermal paper මිලදී ගැනීම 70%ක් දක්වා අඩු කරගන්න. Checkout එකේදී customer ගේ phone number එක දුන්නම, items සහ ඔබේ contact විස්තර සමඟ bill එක ඉබේම SMS වෙනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Branded SMS header with shop name", "වෙළඳසැලේ නමින් SMS bill එක")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Permanent warranty proof on phone", "Phone එකේම warranty සාක්ෂියක්")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Build customer database for promo SMS", "Promo SMS යවන්න customer ලැයිස්තුවක් හදාගන්න")}</span>
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
                <span>{t("Inventory & Backroom Auditing", "Stock සහ ගබඩා පරීක්ෂාව")}</span>
              </div>

              <h3 className={styles.cardTitle}>{t("Strict FIFO Batching & Barcode Stocktake.", "පරණම stock මුලින්ම විකිණීම සහ barcode stocktake.")}</h3>

              <p className={styles.cardDesc}>
                {t(
                  "Avoid dead stock and book discrepancies. Stock items purchased at different supplier costs are tracked chronologically. Perishables prompt proactive expiry alarms.",
                  "විකිණෙන්නේ නැතුව ඉතිරි වෙන stock සහ ගණන් වැරදීම් වලින් ගැලවෙන්න. වෙනස් මිල වලට ගත්ත stock කාලානුක්‍රමයෙන් තියාගන්නවා. කල් ඉකුත් වෙන බඩු ගැන කලින්ම alerts එනවා.",
                )}
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Automatic First-In, First-Out cost deduction", "Automatic First-In, First-Out cost deduction")}</span>
                </div>
                <div className={styles.pointItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{t("Print custom barcode stickers in 1 click", "Barcode stickers එක click එකකින් print කරන්න")}</span>
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
