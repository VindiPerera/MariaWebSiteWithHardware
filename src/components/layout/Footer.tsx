"use client";

import React, { useState } from "react";
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
import { legalLinks, site } from "@/lib/site";
import logo from "@/assets/images/logo-cropped.jpg";
import styles from "./Footer.module.css";

const sriLankaDistricts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaittivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle",
];

const hardwareColumns = [
  { label: "Touch POS Terminals", href: "/hardware?cat=touch-pos" },
  { label: "Thermal Receipt Printers (80mm)", href: "/hardware?cat=printers" },
  { label: "Barcode Scanners (1D/2D)", href: "/hardware?cat=scanners" },
  { label: "Heavy Duty Cash Drawers", href: "/hardware?cat=cash-drawers" },
  { label: "Thermal Paper & Label Rolls", href: "/hardware?cat=consumables" },
  { label: "All Certified Hardware", href: "/hardware" },
];

const softwareColumns = [
  { label: "POS Billing & Checkout", href: "/features#billing-checkout" },
  { label: "FIFO Inventory & Stock", href: "/features#inventory-stock" },
  { label: "Shift, Till & Cash Control", href: "/features#shifts-till" },
  { label: "Reports & Financials", href: "/features#reports-analytics" },
  { label: "Cloud Panel & Telegram Alerts", href: "/features#cloud-alerts" },
  { label: "7-Day Free Software Trial", href: "/sign-up" },
];

export function Footer() {
  const [selectedDistrict, setSelectedDistrict] = useState("Colombo");

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
                <span>JAAN Certified Hardware &amp; Software</span>
              </div>

              <div className={styles.brandRow}>
                <Image
                  src={logo}
                  alt="MariaPoS"
                  className={styles.brandLogo}
                />
              </div>

              <h2 className={styles.showcaseHeading}>
                The Complete Sri Lankan POS Platform.
              </h2>

              <p className={styles.showcaseLead}>
                Developed and supported by <strong>{site.company}</strong> in
                Colombo. Built specifically for retail supermarkets, pharmacies,
                hardware shops, and restaurants across all 25 districts.
              </p>

              {/* Trust Pillar Badges */}
              <div className={styles.trustBadgesGrid}>
                <div className={styles.trustBadgeCard}>
                  <Banknote size={18} color="#1faa55" />
                  <div>
                    <strong>Cash on Delivery</strong>
                    <span>Pay cash to the courier when goods arrive</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <Truck size={18} color="#38bdf8" />
                  <div>
                    <strong>All 25 Districts</strong>
                    <span>Fast island-wide courier dispatch from Colombo</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <ShieldCheck size={18} color="#f59e0b" />
                  <div>
                    <strong>1-Year Warranty</strong>
                    <span>Direct commercial hardware replacement</span>
                  </div>
                </div>

                <div className={styles.trustBadgeCard}>
                  <Phone size={18} color="#ec4899" />
                  <div>
                    <strong>Colombo Direct Support</strong>
                    <span>WhatsApp and hotline support: 076 593 3255</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className={styles.directOrderCard}>
                <div className={styles.directOrderText}>
                  <strong>Ready to set up your counter?</strong>
                  <span>Message our Colombo engineers on WhatsApp today.</span>
                </div>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directOrderBtn}
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Island-wide Delivery Marquee / District Badges */}
          <div className={styles.districtsBar}>
            <div className={styles.districtsTitleRow}>
              <Truck size={16} color="#38bdf8" />
              <span>Island-wide Cash on Delivery available in all 25 Districts:</span>
            </div>
            <div className={styles.districtsList}>
              {sriLankaDistricts.map((district) => (
                <button
                  key={district}
                  type="button"
                  onClick={() => setSelectedDistrict(district)}
                  className={`${styles.districtPill} ${
                    selectedDistrict === district ? styles.districtPillActive : ""
                  }`}
                  title={`COD delivery available in ${district}`}
                >
                  <CheckCircle2 size={12} color="#1faa55" />
                  <span>{district}</span>
                </button>
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
                    {col.label}
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
                    {col.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Industries */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>Industries</span>
              <div className={styles.navColLinks}>
                <Link href="/industries#supermarkets" className={styles.navLink}>
                  Supermarkets &amp; Grocery
                </Link>
                <Link href="/industries#pharmacies" className={styles.navLink}>
                  Pharmacies &amp; Health
                </Link>
                <Link href="/industries#hardware-shops" className={styles.navLink}>
                  Hardware &amp; Electrical
                </Link>
                <Link href="/industries#clothing" className={styles.navLink}>
                  Clothing &amp; Textile
                </Link>
                <Link href="/industries#restaurants" className={styles.navLink}>
                  Restaurants &amp; Bakeries
                </Link>
                <Link href="/industries" className={styles.navLink}>
                  View All Industries →
                </Link>
              </div>
            </div>

            {/* Column 4: Contact & Office */}
            <div className={styles.navCol}>
              <span className={styles.navColHeading}>Colombo Office</span>
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
                  <span>Official Facebook Page</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © 2026 {site.company}. All rights reserved. Registered in Colombo, Sri Lanka.
            </div>

            <div className={styles.legalLinks}>
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className={styles.legalLink}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className={styles.madeWithTag}>
              <span>Made to Bill · Engineered for Sri Lanka</span>
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
