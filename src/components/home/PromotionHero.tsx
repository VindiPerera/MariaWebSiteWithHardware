"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import salesGirlCounterImg from "@/assets/images/sales-girl-counter-pos-v3.jpg";
import { waGeneral } from "@/lib/shop";
import styles from "./PromotionHero.module.css";
import { useLang } from "@/lib/i18n";

export function PromotionHero() {
  const { t } = useLang();
  const [billSimulated, setBillSimulated] = useState(false);
  const [simCounter, setSimCounter] = useState(3284);

  const handleSimulate = () => {
    setBillSimulated(true);
    setSimCounter((prev) => prev + 1);
    setTimeout(() => {
      setBillSimulated(false);
    }, 2200);
  };

  return (
    <section className={styles.heroSection} aria-label="MariaPOS Retail Counter Hero">
      <div className={styles.container}>
        {/* Master Rounded Hero Card Canvas */}
        <div className={styles.heroCard}>
          {/* Subtle Ambient Background Mesh & Lighting */}
          <div className={styles.cardBackdrop} aria-hidden="true">
            <div className={styles.ambientGlowRed} />
            <div className={styles.ambientGlowBlue} />
            <div className={styles.gridCanvasPattern} />
          </div>

          <div className={styles.heroCardGrid}>
            {/* Left Column: Bold POS System in Sri Lanka Typography, Actions, & 3 Trust Features */}
            <div className={styles.copyCol}>
              {/* Prominent Eyebrow with Sri Lanka context */}
              <div className={styles.eyebrowPill}>
                <span className={styles.livePulseDot}>
                  <span className={styles.pulsePing} />
                  <span className={styles.pulseDotCore} />
                </span>
                <span className={styles.eyebrowText}>
                  <strong>{t("#1 POS System in Sri Lanka", "ශ්‍රී ලංකාවේ #1 POS System එක")}</strong> · {t("3,200+ Active Counters", "Active Counters 3,200+")}
                </span>
              </div>

              {/* Big Bold Headline featuring POS System in Sri Lanka */}
              <h1 className={styles.headline}>
                {t("A Complete POS System in Sri Lanka.", "ශ්‍රී ලංකාවටම සම්පූර්ණ POS System එකක්.")} <br />
                <span className={styles.accentText}>{t("Fast Billing.", "වේගවත් Billing.")}</span> {t("Never Freeze.", "කිසිදා Freeze වෙන්නේ නැහැ.")}
              </h1>

              {/* Lead Subtitle */}
              <p className={styles.subheadline}>
                {t(
                  "MariaPoS pairs robust 100% offline Windows software with heavy-duty touch screens, auto-cutter thermal printers, barcode scanners, and cash drawers. Built for intense retail rush hours — dispatched Cash on Delivery across all 25 districts.",
                  "MariaPoS එකේ 100% offline වැඩ කරන Windows software එක, heavy-duty touch screen, auto-cutter thermal printer, barcode scanner සහ cash drawer සමඟ පැමිණේ. Rush hour එකේදීවත් වෙළඳසැල නොනැවතී ක්‍රියාත්මක වීමට නිර්මාණය කළ එකක් — දිස්ත්‍රික්ක 25ටම Cash on Delivery ලෙස එවනවා.",
                )}
              </p>

              {/* Dual Action Buttons */}
              <div className={styles.actionRow}>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryPillBtn}
                  title={t("Order on WhatsApp", "WhatsApp එකෙන් Order කරන්න")}
                >
                  <MessageCircle size={19} className={styles.waBtnIcon} />
                  <span>{t("Order on WhatsApp", "WhatsApp එකෙන් Order කරන්න")}</span>
                  <ArrowRight size={17} className={styles.arrowIcon} />
                </a>

                <Link href="/hardware" className={styles.secondaryPillBtn}>
                  <span>{t("Explore Hardware Packages", "Hardware Packages බලන්න")}</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* 3 Horizontal Trust Badges */}
              <div className={styles.trustBadgesRow}>
                {/* 1. Free Shipping / Island-Wide COD */}
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconWrap}>
                    <Truck size={18} className={styles.trustIcon} />
                  </div>
                  <div className={styles.trustTexts}>
                    <strong className={styles.trustTitle}>{t("Island-Wide COD", "මුළු රටටම COD")}</strong>
                    <span className={styles.trustSub}>{t("All 25 districts in 24-48h", "දිස්ත්‍රික්ක 25ටම පැය 24-48ක් ඇතුළත")}</span>
                  </div>
                </div>

                {/* 2. 1-Year Warranty / Replacement */}
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconWrap}>
                    <ShieldCheck size={18} className={styles.trustIcon} />
                  </div>
                  <div className={styles.trustTexts}>
                    <strong className={styles.trustTitle}>{t("1-Year Warranty", "අවුරුදු 1ක Warranty")}</strong>
                    <span className={styles.trustSub}>{t("100% genuine replacement", "100% genuine replacement")}</span>
                  </div>
                </div>

                {/* 3. 100% Offline SQLite */}
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconWrap}>
                    <Zap size={18} className={styles.trustIcon} />
                  </div>
                  <div className={styles.trustTexts}>
                    <strong className={styles.trustTitle}>{t("100% Offline Ready", "100% Offline Ready")}</strong>
                    <span className={styles.trustSub}>{t("Zero internet lag at counter", "Counter එකේ internet lag එකක් නැහැ")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Big Real-World Sales Girl at POS Counter with Touch Screen & Cash Drawer */}
            <div className={styles.salesGirlCol}>
              <div className={styles.photoCardFrame}>
                {/* Real-World Retail Counter Photo with Sales Girl and MariaPOS Touch Terminal */}
                <div className={styles.imageContainer}>
                  <Image
                    src={salesGirlCounterImg}
                    alt="MariaPOS sales girl scanning product at retail counter with touch terminal and cash drawer"
                    className={styles.heroSceneImg}
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 580px, 640px"
                  />
                </div>

                {/* Floating Circular Promo Badge (Up to 70% Paper Saved) */}
                <div className={styles.circularPromoBadge}>
                  <span className={styles.badgeTopSub}>{t("Up to", "උපරිම")}</span>
                  <strong className={styles.badgeBigVal}>70%</strong>
                  <span className={styles.badgeBotSub}>{t("Paper Saved", "කඩදාසි ඉතිරියි")}</span>
                </div>

                {/* Floating Micro Live Radar Pill (Top-Right) */}
                <div className={styles.liveTillPill}>
                  <span className={styles.liveRadarDot} />
                  <span>{t("Till #01 Active · 0.8s Bill Speed", "Till #01 Active · Bill වේගය 0.8s")}</span>
                </div>

                {/* Floating Interactive Bill Simulator Pill (Bottom-Left) */}
                <button
                  type="button"
                  onClick={handleSimulate}
                  disabled={billSimulated}
                  className={styles.interactiveTestPill}
                  title={t("Test bill simulation", "Bill simulation එක test කරන්න")}
                >
                  <Sparkles size={14} className={billSimulated ? styles.spinAnim : ""} />
                  <span>{billSimulated ? t(`Bill #${simCounter} Tendered!`, `Bill #${simCounter} ගෙවා අවසන්!`, `Bill #${simCounter} செலுத்தி முடிந்தது!`) : t("Tap to Test 0.8s Bill", "0.8s Bill එක Test කරන්න Tap කරන්න")}</span>
                </button>

                {/* Official Hardware Certification Pill (Bottom-Right) */}
                <div className={styles.officialHostBadge}>
                  <Award size={14} color="#f59e0b" />
                  <span>{t("Complete 4-Piece Setup Ready", "සම්පූර්ණ 4-Piece Setup එක Ready")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
