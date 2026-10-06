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

export function PromotionHero() {
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
                  <strong>#1 POS System in Sri Lanka</strong> · 3,200+ Active Counters
                </span>
              </div>

              {/* Big Bold Headline featuring POS System in Sri Lanka */}
              <h1 className={styles.headline}>
                A Complete POS System in Sri Lanka. <br />
                <span className={styles.accentText}>Fast Billing.</span> Never Freeze.
              </h1>

              {/* Lead Subtitle */}
              <p className={styles.subheadline}>
                MariaPoS pairs robust 100% offline Windows software with heavy-duty touch screens, auto-cutter thermal
                printers, barcode scanners, and cash drawers. Built for intense retail rush hours — dispatched Cash on
                Delivery across all 25 districts.
              </p>

              {/* Dual Action Buttons */}
              <div className={styles.actionRow}>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryPillBtn}
                  title="Order on WhatsApp"
                >
                  <MessageCircle size={19} className={styles.waBtnIcon} />
                  <span>Order on WhatsApp</span>
                  <ArrowRight size={17} className={styles.arrowIcon} />
                </a>

                <Link href="/hardware" className={styles.secondaryPillBtn}>
                  <span>Explore Hardware Packages</span>
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
                    <strong className={styles.trustTitle}>Island-Wide COD</strong>
                    <span className={styles.trustSub}>All 25 districts in 24-48h</span>
                  </div>
                </div>

                {/* 2. 1-Year Warranty / Replacement */}
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconWrap}>
                    <ShieldCheck size={18} className={styles.trustIcon} />
                  </div>
                  <div className={styles.trustTexts}>
                    <strong className={styles.trustTitle}>1-Year Warranty</strong>
                    <span className={styles.trustSub}>100% genuine replacement</span>
                  </div>
                </div>

                {/* 3. 100% Offline SQLite */}
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconWrap}>
                    <Zap size={18} className={styles.trustIcon} />
                  </div>
                  <div className={styles.trustTexts}>
                    <strong className={styles.trustTitle}>100% Offline Ready</strong>
                    <span className={styles.trustSub}>Zero internet lag at counter</span>
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
                  <span className={styles.badgeTopSub}>Up to</span>
                  <strong className={styles.badgeBigVal}>70%</strong>
                  <span className={styles.badgeBotSub}>Paper Saved</span>
                </div>

                {/* Floating Micro Live Radar Pill (Top-Right) */}
                <div className={styles.liveTillPill}>
                  <span className={styles.liveRadarDot} />
                  <span>Till #01 Active · 0.8s Bill Speed</span>
                </div>

                {/* Floating Interactive Bill Simulator Pill (Bottom-Left) */}
                <button
                  type="button"
                  onClick={handleSimulate}
                  disabled={billSimulated}
                  className={styles.interactiveTestPill}
                  title="Test bill simulation"
                >
                  <Sparkles size={14} className={billSimulated ? styles.spinAnim : ""} />
                  <span>{billSimulated ? `Bill #${simCounter} Tendered!` : "Tap to Test 0.8s Bill"}</span>
                </button>

                {/* Official Hardware Certification Pill (Bottom-Right) */}
                <div className={styles.officialHostBadge}>
                  <Award size={14} color="#f59e0b" />
                  <span>Complete 4-Piece Setup Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
