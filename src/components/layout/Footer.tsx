"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  Building2,
  CheckCircle2,
  FileCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { waGeneral, waLink } from "@/lib/shop";
import { locations } from "@/lib/locations";
import { legalLinks, site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/images/logo-cropped.jpg";
import styles from "./Footer.module.css";

/** Each district links to its local POS page (the district's main town, or its first listed town). */
const districtPages = Array.from(new Set(locations.map((l) => l.district))).map((district) => {
  const page = locations.find((l) => l.name === district) ?? locations.find((l) => l.district === district)!;
  return { district, href: `/pos-system/sri-lanka/${page.slug}` };
});

const hardwareColumns = [
  { label: "Touch POS Terminals", si: "Touch POS Terminals", href: "/hardware?cat=touch-pos" },
  { label: "Thermal Receipt Printers (80mm)", si: "Thermal Receipt Printers (80mm)", href: "/hardware?cat=printers" },
  { label: "Barcode Scanners (1D/2D)", si: "Barcode Scanners (1D/2D)", href: "/hardware?cat=scanners" },
  { label: "Heavy Duty Cash Drawers", si: "Heavy Duty Cash Drawers", href: "/hardware?cat=cash-drawers" },
  { label: "Thermal Paper & Label Rolls", si: "Thermal Paper සහ Label Rolls", href: "/hardware?cat=consumables" },
  { label: "All Certified Hardware", si: "සියලුම Certified Hardware", href: "/hardware" },
];

const softwareColumns = [
  { label: "POS Billing & Checkout", si: "POS Billing සහ Checkout", href: "/features#billing-checkout" },
  { label: "FIFO Inventory & Stock", si: "FIFO Inventory සහ Stock", href: "/features#inventory-stock" },
  { label: "Shift, Till & Cash Control", si: "Shift, Till සහ Cash Control", href: "/features#shifts-till" },
  { label: "Reports & Financials", si: "Reports සහ Financials", href: "/features#reports-analytics" },
  { label: "Cloud Panel & Telegram Alerts", si: "Cloud Panel සහ Telegram Alerts", href: "/features#cloud-alerts" },
  { label: "7-Day Free Software Trial", si: "දින 7ක Free Software Trial", href: "/sign-up" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.ambientGlow} />

        <div className={styles.inner}>
          {/* Top Showcase: Live Thermal Bill + Brand Certification */}
          <div className={styles.showcaseSection}>
            <div className={styles.showcaseLeft}>
              <div className={styles.brandBadge}>
                <Sparkles size={14} color="var(--red)" />
                <span>{t("JAAN Certified Hardware & Software", "JAAN Certified Hardware සහ Software")}</span>
              </div>

              <div className={styles.brandRow}>
                <Image
                  src={logo}
                  alt="MariaPoS"
                  className={styles.brandLogo}
                />
              </div>

              <h2 className={styles.showcaseHeading}>
                {t("The Complete Sri Lankan POS Platform.", "සම්පූර්ණ ශ්‍රී ලාංකික POS Platform එක.")}
              </h2>

              <p className={styles.showcaseLead}>
                {t("Developed and supported by ", "කොළඹදී ")}
                <strong>{site.company}</strong>
                {t(
                  " in Colombo. Built specifically for retail supermarkets, pharmacies, hardware shops, and restaurants across all 25 districts.",
                  " විසින් develop කර support කරයි. දිස්ත්‍රික්ක 25ටම ඇති supermarkets, pharmacies, hardware shops සහ restaurants සඳහාම විශේෂයෙන් සාදන ලදී.",
                )}
              </p>

              {/* Trust Pillar Badges */}
              <div className={styles.trustBadgesGrid}>
                <div className={styles.trustBadgeCard}>
                  <Banknote size={18} color="#1faa55" />
                  <div>
                    <strong>Cash on Delivery</strong>
                    <span>{t("Pay cash to the courier when goods arrive", "බඩු ලැබුණාම courier එකට cash ගෙවන්න")}</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <Truck size={18} color="#38bdf8" />
                  <div>
                    <strong>{t("All 25 Districts", "දිස්ත්‍රික්ක 25ම")}</strong>
                    <span>{t("Fast island-wide courier dispatch from Colombo", "කොළඹ සිට මුළු ලංකාවටම ඉක්මන් courier delivery")}</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <ShieldCheck size={18} color="#f59e0b" />
                  <div>
                    <strong>{t("1-Year Warranty", "අවුරුදු 1ක Warranty")}</strong>
                    <span>{t("Direct commercial hardware replacement", "Hardware වෙනුවට කෙලින්ම replacement")}</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <Phone size={18} color="#ec4899" />
                  <div>
                    <strong>{t("Colombo Direct Support", "කොළඹ Direct Support")}</strong>
                    <span>{t("WhatsApp and hotline support: 076 593 3255", "WhatsApp සහ hotline support: 076 593 3255")}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className={styles.directOrderCard}>
                <div className={styles.directOrderText}>
                  <strong>{t("Ready to set up your counter?", "ඔබේ counter එක set up කරන්න ready ද?")}</strong>
                  <span>{t("Message our Colombo engineers on WhatsApp today.", "අදම WhatsApp එකෙන් අපේ කොළඹ engineers ට message කරන්න.")}</span>
                </div>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directOrderBtn}
                >
                  <MessageCircle size={17} />
                  <span>{t("Chat on WhatsApp", "WhatsApp එකෙන් කතා කරන්න")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Island-wide Delivery Marquee / District Badges */}
          <div className={styles.districtsBar}>
            <div className={styles.districtsTitleRow}>
              <Truck size={16} color="#38bdf8" />
              <span>{t("POS systems & hardware with Cash on Delivery in all 25 Districts:", "දිස්ත්‍රික්ක 25ටම Cash on Delivery සහිත POS systems සහ hardware:")}</span>
            </div>
            <div className={styles.districtsList}>
              {districtPages.map(({ district, href }) => (
                <Link key={district} href={href} className={styles.districtPill} title={`POS system in ${district}`}>
                  <CheckCircle2 size={12} color="#1faa55" />
                  <span>{district}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className={styles.navGrid}>
            {/* Column 1: Hardware */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>POS Hardware</span>
              <div className={styles.navColLinks}>
                {hardwareColumns.map((col) => (
                  <Link key={col.label} href={col.href} className={styles.navLink}>
                    {t(col.label, col.si)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Software */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>Software Modules</span>
              <div className={styles.navColLinks}>
                {softwareColumns.map((col) => (
                  <Link key={col.label} href={col.href} className={styles.navLink}>
                    {t(col.label, col.si)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Industries */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>Industries</span>
              <div className={styles.navColLinks}>
                <Link href="/industries#supermarkets" className={styles.navLink}>
                  {t("Supermarkets & Grocery", "Supermarkets සහ Grocery")}
                </Link>
                <Link href="/industries#pharmacies" className={styles.navLink}>
                  {t("Pharmacies & Health", "Pharmacies සහ Health")}
                </Link>
                <Link href="/industries#hardware-shops" className={styles.navLink}>
                  {t("Hardware & Electrical", "Hardware සහ Electrical")}
                </Link>
                <Link href="/industries#clothing" className={styles.navLink}>
                  {t("Clothing & Textile", "Clothing සහ Textile")}
                </Link>
                <Link href="/industries#restaurants" className={styles.navLink}>
                  {t("Restaurants & Bakeries", "Restaurants සහ Bakeries")}
                </Link>
                <Link href="/industries" className={styles.navLink}>
                  {t("View All Industries →", "සියලුම Industries බලන්න →")}
                </Link>
                <Link href="/pos-system/sri-lanka" className={styles.navLink}>
                  {t("POS System Sri Lanka", "ශ්‍රී ලංකාවේ POS System")}
                </Link>
                <Link href="/pos-system" className={styles.navLink}>
                  {t("POS System Worldwide", "ලොව පුරා POS System")}
                </Link>
              </div>
            </div>

            {/* Column 4: Contact & Office */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>{t("Colombo Office", "කොළඹ කාර්යාලය")}</span>
              <div className={styles.contactItems}>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactRowWa}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp: 076 593 3255</span>
                </a>

                <a href={site.phoneHref} className={styles.contactRow}>
                  <Phone size={15} color="#94a3b8" />
                  <span>{site.phone}</span>
                </a>

                <a href={site.emailHref} className={styles.contactRow}>
                  <Mail size={15} color="#94a3b8" />
                  <span>{site.email}</span>
                </a>

                <div className={styles.contactAddress}>
                  <MapPin size={15} color="#94a3b8" />
                  <span>
                    46 Hudson Road,
                    <br />
                    Colombo 00300, Sri Lanka
                  </span>
                </div>

                <a
                  href={site.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactRow}
                >
                  <FacebookIcon size={15} color="#94a3b8" />
                  <span>{t("Official Facebook Page", "නිල Facebook Page එක")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © 2026 {site.company}. {t("All rights reserved. Registered in Colombo, Sri Lanka.", "සියලුම හිමිකම් ඇවිරිණි. කොළඹ, ශ්‍රී ලංකාවේ ලියාපදිංචි.")}
            </div>

            <div className={styles.legalLinks}>
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className={styles.legalLink}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className={styles.madeWithTag}>
              <span>{t("Made to Bill · Engineered for Sri Lanka", "Made to Bill · ශ්‍රී ලංකාව වෙනුවෙන් engineer කළ")}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Quick Button */}
      <a
        href={waGeneral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MariaPoS Colombo on WhatsApp"
        className={styles.floatingWaButton}
      >
        <span className={styles.floatingWaPulse} />
        <MessageCircle size={26} />
      </a>
    </>
  );
}
