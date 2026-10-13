"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  MessageCircle,
  Monitor,
  Printer,
  ScanBarcode,
  Smartphone,
  Zap,
} from "lucide-react";
import posTerminalImg from "@/assets/images/pos-terminal-receipt.jpg";
import { waGeneral } from "@/lib/shop";
import styles from "./HardwareShowcase.module.css";
import { useLang } from "@/lib/i18n";

const hardwareFeatures = [
  {
    icon: Monitor,
    title: "15.6\" Capacitive Touch Monitor",
    si: "15.6\" Capacitive Touch Monitor",
    desc: "Vibrant anti-glare display running MariaPOS with rapid item selection, full-screen keypad, and zero touch lag.",
    descSi: "MariaPOS දුවන anti-glare display එක. Item ඉක්මනින් select කරන්න, full-screen keypad එකක් තියෙනවා, touch lag එකක් නෑ.",
  },
  {
    icon: Printer,
    title: "80mm High-Speed Thermal Printer",
    si: "80mm High-Speed Thermal Printer",
    desc: "Xprinter heavy-duty auto-cutter mechanism. Prints bilingual receipts with shop logo in under 0.8 seconds.",
    descSi: "Xprinter heavy-duty auto-cutter එක. වෙළඳසැලේ logo එකත් එක්ක bilingual receipt එක තත්පර 0.8කට වඩා අඩු කාලයකින් print වෙනවා.",
  },
  {
    icon: Smartphone,
    title: "Mobile Sales & Companion Sync",
    si: "Mobile Sales සහ Companion Sync",
    desc: "Real-time sync to Android & iOS devices for queue busting, table orders, and owner live revenue alerts.",
    descSi: "Android සහ iOS devices වලට real-time sync වෙනවා. Queue එක අඩු කරන්න, table orders ගන්න, අයිතිකරුට live revenue alerts ලැබෙනවා.",
  },
  {
    icon: ScanBarcode,
    title: "Heavy-Duty Cash Drawer & Scanner",
    si: "Heavy-Duty Cash Drawer සහ Scanner",
    desc: "Auto-kick RJ11 all-steel cash drawer + fast omnidirectional hands-free barcode reader.",
    descSi: "Auto-kick RJ11 all-steel cash drawer එකයි, වේගවත් omnidirectional hands-free barcode reader එකයි.",
  },
];

export function HardwareShowcase() {
  const { t } = useLang();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className={styles.section} id="counter-setup" aria-labelledby="hardware-showcase-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headingBlock}>
          <div className={styles.eyebrow}>{t("Complete POS Hardware Ecosystem", "සම්පූර්ණ POS Hardware Ecosystem එක")}</div>
          <h2 id="hardware-showcase-title" className={styles.title}>
            {t("Engineered for 12-Hour Non-Stop Shifts.", "පැය 12ක් නොනවත්වා වැඩ කරන්න engineer කළ.")}
          </h2>
          <p className={styles.subtitle}>
            {t(
              "A synchronized counter workstation that eliminates queues. MariaPOS software configured out-of-the-box with genuine Xprinter hardware, delivered Cash on Delivery.",
              "Queue එක නැති කරන synchronized counter workstation එකක්. MariaPOS software එක genuine Xprinter hardware එක්ක කලින්ම configure කරලා, Cash on Delivery විදිහට එවනවා.",
            )}
          </p>
        </div>

        {/* Master Showcase Layout */}
        <div className={styles.showcaseGrid}>
          {/* Left: The High-Resolution 3D Workstation Image with Interactive Floating Pins */}
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <Image
                src={posTerminalImg}
                alt="MariaPOS All-In-One Touch Terminal with 80mm Xprinter thermal printer and mobile companion"
                className={styles.workstationImg}
                priority
                quality={95}
                sizes="(max-width: 900px) 100vw, 680px"
              />

              {/* Hotspot 1: Terminal Display */}
              <div
                className={`${styles.hotspot} ${styles.hotspotTerminal} ${activeHotspot === 0 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(0)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>{t("15.6\" Touch Screen", "15.6\" Touch Screen")}</strong>
                  <span>{t("Spill & dust resistant", "වතුර සහ දූවිලි වලට ඔරොත්තු දෙයි")}</span>
                </div>
              </div>

              {/* Hotspot 2: Thermal Receipt Printer */}
              <div
                className={`${styles.hotspot} ${styles.hotspotPrinter} ${activeHotspot === 1 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(1)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>{t("80mm Auto-Cutter", "80mm Auto-Cutter")}</strong>
                  <span>{t("260mm/sec speed", "වේගය 260mm/sec")}</span>
                </div>
              </div>

              {/* Hotspot 3: Mobile Phone Companion */}
              <div
                className={`${styles.hotspot} ${styles.hotspotMobile} ${activeHotspot === 2 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(2)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>{t("Mobile Companion", "Mobile Companion")}</strong>
                  <span>{t("Live cloud syncing", "Live cloud sync")}</span>
                </div>
              </div>

              {/* Overlaid Hardware Badge */}
              <div className={styles.liveStationBadge}>
                <div className={styles.stationBadgeHeader}>
                  <Zap size={14} color="#dc2626" />
                  <strong>{t("Zero Setup Hassle", "Setup කරන්න කරදරයක් නෑ")}</strong>
                </div>
                <p>{t("Pre-installed drivers & database. Plug into power and begin scanning.", "Drivers සහ database කලින්ම install කරලා. Power එකට plug කරලා scan කරන්න පටන් ගන්න.")}</p>
              </div>
            </div>
          </div>

          {/* Right: Technical Features & Package Buying Actions */}
          <div className={styles.detailsColumn}>
            <div className={styles.featuresList}>
              {hardwareFeatures.map((item, index) => {
                const Icon = item.icon;
                const isHighlighted = activeHotspot === index;
                return (
                  <div
                    key={item.title}
                    className={`${styles.featureItem} ${isHighlighted ? styles.featureItemActive : ""}`}
                    onMouseEnter={() => setActiveHotspot(index)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className={styles.featureIconWrap}>
                      <Icon size={20} className={styles.featureIcon} />
                    </div>
                    <div className={styles.featureCopy}>
                      <h3 className={styles.featureTitle}>{t(item.title, item.si)}</h3>
                      <p className={styles.featureDesc}>{t(item.desc, item.descSi)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buying Package Card */}
            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <div>
                  <span className={styles.packageEyebrow}>{t("Full 4-Piece Setup", "සම්පූර්ණ 4-Piece Setup එක")}</span>
                  <div className={styles.packagePrice}>
                    <span>{t("Complete Kit from", "සම්පූර්ණ Kit එක")}</span> <strong>{t("Rs. 89,500", "Rs. 89,500 සිට")}</strong>
                  </div>
                </div>
                <div className={styles.authBadge}>
                  <Award size={15} color="#d97706" />
                  <span>{t("Authorized Seller", "Authorized Seller")}</span>
                </div>
              </div>

              <div className={styles.packagePills}>
                <span>✓ {t("Windows 11 Ready", "Windows 11 Ready")}</span>
                <span>✓ {t("Cash on Delivery", "Cash on Delivery")}</span>
                <span>✓ {t("1-Year Local Warranty", "අවුරුදු 1ක Local Warranty")}</span>
                <span>✓ {t("WhatsApp Setup Support", "WhatsApp Setup Support")}</span>
              </div>

              <div className={styles.packageActions}>
                <a
                  href={`${waGeneral}&text=Hello%20MariaPOS,%20I%20would%20like%20to%20order%20the%20Complete%20POS%20Hardware%20Workstation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPackageBtn}
                >
                  <MessageCircle size={18} />
                  <span>{t("Order Hardware on WhatsApp", "Hardware WhatsApp එකෙන් Order කරන්න")}</span>
                </a>
                <Link href="/hardware" className={styles.specLink}>
                  <span>{t("Browse Individual Items", "Items වෙන වෙනම බලන්න")}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
