"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Printer, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/shop";
import styles from "./AuthorizedXprinterBanner.module.css";
import { useLang } from "@/lib/i18n";

export function AuthorizedXprinterBanner() {
  const { t } = useLang();
  const waVerify = waLink("Hi MariaPoS, I'd like to check genuine Xprinter printer models and warranty availability.");

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        {/* Decorative background glow elements */}
        <div className={styles.glowAura} aria-hidden="true" />
        <div className={styles.glowCorner} aria-hidden="true" />

        <div className={styles.contentGrid}>
          {/* Left Column: Brand Badges & Credibility */}
          <div className={styles.leftCol}>
            <div className={styles.topBadgeRow}>
              <span className={styles.authBadge}>
                <Award size={15} className={styles.badgeIcon} />
                <span>{t("OFFICIAL AUTHORIZED SELLER", "OFFICIAL AUTHORIZED SELLER")}</span>
              </span>
              <span className={styles.countryBadge}>{t("SRI LANKA", "ශ්‍රී ලංකාව")}</span>
            </div>

            <div className={styles.brandTitleRow}>
              <div className={styles.brandLogoBlock}>
                <span className={styles.xprinterBrand}>Xprinter</span>
                <span className={styles.brandSub}>CERTIFIED HARDWARE</span>
              </div>
              <div className={styles.titleDivider} />
              <h3 className={styles.mainTitle}>
                {t("Direct Factory Certified Xprinter Hardware Partner", "Factory-Certified Xprinter Hardware Partner")}
              </h3>
            </div>

            <p className={styles.desc}>
              <strong>JAAN Network (PVT) Ltd</strong>{" "}
              {t(
                "is an authorized reseller and warranty service provider for genuine",
                "යනු ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක 25ටම genuine",
              )}{" "}
              <strong>Xprinter</strong>{" "}
              {t(
                "thermal receipt, barcode label, and portable mobile printers across all 25 districts of Sri Lanka.",
                "thermal receipt, barcode label සහ portable mobile printers සඳහා authorized reseller සහ warranty service provider ය.",
              )}
            </p>

            <div className={styles.trustPills}>
              <div className={styles.pill}>
                <ShieldCheck size={15} className={styles.pillIcon} />
                <span>{t("100% Genuine Factory-Direct Units", "100% Genuine Factory-Direct Units")}</span>
              </div>
              <div className={styles.pill}>
                <CheckCircle2 size={15} className={styles.pillIcon} />
                <span>{t("1-Year Direct JAAN Replacement Warranty", "අවුරුදු 1ක JAAN Replacement Warranty")}</span>
              </div>
              <div className={styles.pill}>
                <Printer size={15} className={styles.pillIcon} />
                <span>{t("Pre-Configured Plug & Play for MariaPoS", "MariaPoS සඳහා Pre-Configured Plug & Play")}</span>
              </div>
              <div className={styles.pill}>
                <Sparkles size={15} className={styles.pillIcon} />
                <span>{t("Colombo Service Center & Genuine Parts", "කොළඹ Service Center සහ Genuine Parts")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card & Actions */}
          <div className={styles.rightCol}>
            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeHeader}>
                <ShieldCheck size={28} className={styles.guaranteeIcon} />
                <div>
                  <strong className={styles.guaranteeTitle}>{t("Genuine Guarantee", "Genuine Guarantee")}</strong>
                  <span className={styles.guaranteeSubtitle}>{t("Serial-numbered warranty card", "Serial number සහිත warranty card එක")}</span>
                </div>
              </div>
              <p className={styles.guaranteeText}>
                {t(
                  "Avoid counterfeit or gray-market units without warranty. Every printer shipped by MariaPoS includes official factory firmware, high-durability printheads (150km+ rating), and local technical support.",
                  "Warranty නැති counterfeit හෝ gray-market units වලින් ඉවත්ව සිටින්න. MariaPoS එවන හැම printer එකකටම official factory firmware, high-durability printheads (150km+ rating) සහ local technical support ඇතුළත්.",
                )}
              </p>

              <div className={styles.actionButtons}>
                <Link href="/hardware" className={styles.btnPrimary}>
                  <span>{t("Explore Xprinter Catalog", "Xprinter Catalog එක බලන්න")}</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waVerify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWhatsapp}
                >
                  <WhatsAppIcon size={16} />
                  <span>{t("Verify / Inquire on WhatsApp", "WhatsApp එකෙන් තහවුරු කරගන්න / විමසන්න")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
