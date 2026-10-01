"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Headset,
  Laptop,
  MessageCircle,
  PackageCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { posBundles } from "@/lib/hardwareCatalog";
import { PosBundleCard } from "@/components/hardware/PosBundleCard";
import { waLink } from "@/lib/shop";
import ownerMobileAlerts from "@/assets/images/owner-mobile-alerts.jpg";
import styles from "./PricingPlans.module.css";

const includedSoftware = [
  "Every billing, inventory & report feature",
  "Cloud sync & Telegram sales alerts",
  "SMS receipts (prepaid credits)",
  "Free software updates for full term",
  "Priority technical & WhatsApp support",
];

type SoftwarePlan = {
  id: string;
  name: string;
  priceLkr: string;
  priceUsd: string;
  pricePerYear: string;
  wasLkr?: string;
  note: string;
  badge?: string;
  badgeType?: "red" | "dark" | "green";
  variant: "trial" | "basic" | "popular" | "best";
  popular?: boolean;
  recommended?: boolean;
  ctaText?: string;
  waText?: string;
};

const softwarePlans: SoftwarePlan[] = [
  {
    id: "trial",
    name: "7-Day Free Trial",
    priceLkr: "Free",
    priceUsd: "$0.00",
    pricePerYear: "Rs. 0 · No card needed",
    note: "Instant activation. Full feature suite for all your counters.",
    badge: "Risk-Free Trial",
    badgeType: "green",
    variant: "trial",
    ctaText: "Start 7-Day Free Trial",
  },
  {
    id: "1y",
    name: "1-Year License",
    priceLkr: "Rs. 44,000",
    priceUsd: "$147.00",
    pricePerYear: "Rs. 44,000 / year ($147.00)",
    note: "Single payment. Full features for 12 months.",
    variant: "basic",
    ctaText: "Select 1-Year License",
    waText: "Hi MariaPoS, I'd like to order: 1-Year Software License (Rs. 44,000). Shop name: ___",
  },
  {
    id: "2y",
    name: "2-Year License",
    priceLkr: "Rs. 70,500",
    priceUsd: "$235.20",
    pricePerYear: "Rs. 35,250 / year ($117.60/yr)",
    wasLkr: "Rs. 88,000",
    note: "Save 20% compared to yearly renewal.",
    badge: "Save 20%",
    badgeType: "red",
    variant: "popular",
    popular: true,
    ctaText: "Select 2-Year License",
    waText: "Hi MariaPoS, I'd like to order: 2-Year Software License (Rs. 70,500 - Save 20%). Shop name: ___",
  },
  {
    id: "3y",
    name: "3-Year License",
    priceLkr: "Rs. 86,000",
    priceUsd: "$286.65",
    pricePerYear: "Rs. 28,667 / year ($95.55/yr)",
    wasLkr: "Rs. 132,000",
    note: "Best value. Only Rs. 2,388/mo ($7.96). Our best-selling plan.",
    badge: "Best Seller · Recommended",
    badgeType: "dark",
    variant: "best",
    recommended: true,
    ctaText: "Select 3-Year License",
    waText: "Hi MariaPoS, I'd like to order: 3-Year Software License (Rs. 86,000 - Best Value). Shop name: ___",
  },
];

export function PricingPlans() {
  const [activeTab, setActiveTab] = useState<"both" | "bundles" | "software">("both");
  const [selectedSoftPlan, setSelectedSoftPlan] = useState<string>("3y");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("software") || hash.includes("license")) {
        setActiveTab("software");
      } else if (hash.includes("bundle") || hash.includes("hardware") || hash.includes("fullset")) {
        setActiveTab("bundles");
      }
    }
  }, []);

  const showBundles = activeTab === "both" || activeTab === "bundles";
  const showSoftware = activeTab === "both" || activeTab === "software";

  return (
    <section id="pricing" className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        {/* Intro */}
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <div className={styles.pillBadge}>
            <Sparkles size={14} color="var(--red)" />
            <span>Sri Lanka Pricing &amp; Solutions</span>
          </div>
          <h1 className="section-title">Pick the setup that fits your shop.</h1>
          <p className="lead">
            Choose between turnkey <strong>hardware bundles with software included</strong>, or activate a{" "}
            <strong>software-only license</strong> for your existing Windows PC. Both options available below.
          </p>

          {/* Segmented Switcher */}
          <div className={styles.tabSwitcher}>
            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "both" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("both")}
            >
              <Sparkles size={16} />
              <span>All Plans (Both)</span>
              <span className={styles.miniPill}>Full Overview</span>
            </button>

            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "bundles" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("bundles")}
            >
              <PackageCheck size={16} />
              <span>Hardware Bundles with Software</span>
              <span className={styles.miniPill}>Turnkey Setup</span>
            </button>

            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "software" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("software")}
            >
              <Laptop size={16} />
              <span>Software-Only Plans</span>
              <span className={styles.miniPill}>For Existing PC</span>
            </button>
          </div>
        </div>

        {/* Section 1: Hardware Bundles with Software */}
        {showBundles && (
          <div id="bundles" className={styles.tabSection}>
            <div className={styles.sectionSubHeader}>
              <div className={styles.subHeaderLeft}>
                <span className={styles.subHeaderEyebrow}>Turnkey Solution Packs</span>
                <h2 className={styles.subHeaderTitle}>Complete Hardware Bundles (Software Included)</h2>
                <p className={styles.subHeaderDesc}>
                  Everything you need to start cashier billing on day one. Includes touch terminal, receipt printer,
                  barcode scanner, heavy-duty cash drawer, thermal paper rolls + official MariaPoS full license.
                </p>
              </div>
              {activeTab === "both" && (
                <button
                  type="button"
                  onClick={() => setActiveTab("bundles")}
                  className={styles.filterOnlyBtn}
                  title="Filter to show only bundles"
                >
                  Focus Bundles Only
                </button>
              )}
            </div>

            <div className={styles.posBundlesGrid}>
              {posBundles.map((bundle) => (
                <PosBundleCard
                  key={bundle.id}
                  bundle={bundle}
                  featured={bundle.id === "bundle-starter"}
                />
              ))}
            </div>

            {/* Value Trust Ribbon */}
            <div className={styles.bundleTrustRibbon}>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>Zero Card / Hidden Fees</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>Free Remote Setup &amp; Training</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>1-Year Direct JAAN Warranty</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>Cash on Delivery (All 25 Districts)</span>
              </div>
            </div>

            {/* Nudge to Software Only when in bundles-only mode */}
            {activeTab === "bundles" && (
              <div className={styles.tabNudge}>
                <span>Already have a Windows PC, laptop, or tablet?</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("software")}
                  className={styles.tabNudgeLink}
                >
                  <span>View Software-Only License Plans (from Rs. 44,000)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Section Divider if showing both */}
        {activeTab === "both" && <div className={styles.majorSectionDivider} />}

        {/* Section 2: Software-Only Plans */}
        {showSoftware && (
          <div id="software" className={styles.tabSection}>
            <div className={styles.sectionSubHeader}>
              <div className={styles.subHeaderLeft}>
                <span className={styles.subHeaderEyebrow}>Independent Software Licenses</span>
                <h2 className={styles.subHeaderTitle}>Software-Only Plans: One Simple License. Every Feature.</h2>
                <p className={styles.subHeaderDesc}>
                  Install on any Windows 10 or 11 PC or laptop. Full offline POS billing, FIFO inventory ledger,
                  Telegram sales alerts, SMS e-receipts, and cloud sync. Longer terms save up to 35%.
                </p>
              </div>
              {activeTab === "both" && (
                <button
                  type="button"
                  onClick={() => setActiveTab("software")}
                  className={styles.filterOnlyBtn}
                  title="Filter to show only software"
                >
                  Focus Software Only
                </button>
              )}
            </div>

            <div className={styles.plans}>
              {softwarePlans.map((plan, i) => {
                const isDark = plan.variant === "best";
                const isTrial = plan.variant === "trial";
                const isSelected = selectedSoftPlan === plan.id;

                return (
                  <div
                    key={plan.id}
                    data-reveal="up"
                    data-delay={i * 80}
                    onClick={() => setSelectedSoftPlan(plan.id)}
                    className={`${styles.card} ${
                      isDark ? styles.cardDark : isTrial ? styles.cardTrial : styles.cardLight
                    } ${plan.popular ? styles.cardPopular : ""} ${isSelected ? styles.cardSelected : ""}`}
                  >
                    {plan.recommended && <div className={styles.recommendedRibbon}>Recommended</div>}

                    {plan.badge && (
                      <div className={styles.badgeWrapper}>
                        <span
                          className={
                            plan.badgeType === "green"
                              ? styles.badgeGreen
                              : plan.badgeType === "dark"
                              ? styles.badgeDark
                              : styles.badgeRed
                          }
                        >
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className={styles.cardTop}>
                      <h3 className={isDark ? styles.planNameDark : styles.planName}>{plan.name}</h3>
                      <div className={styles.priceRow}>
                        <span className={isDark ? styles.priceDark : styles.price}>{plan.priceLkr}</span>
                        {plan.wasLkr && <span className={isDark ? styles.wasDark : styles.was}>{plan.wasLkr}</span>}
                      </div>
                      <span
                        className={
                          isDark ? styles.rateDark : isTrial ? styles.rateGreen : styles.rate
                        }
                      >
                        {plan.pricePerYear}
                      </span>
                      <p className={isDark ? styles.noteDark : styles.note}>{plan.note}</p>
                    </div>

                    <div className={isDark ? styles.dividerDark : styles.divider} />

                    <div className={styles.featureList}>
                      {includedSoftware.map((item) => (
                        <div key={item} className={styles.featureRow}>
                          <Check size={16} color={isDark ? "#ff8a80" : "var(--red)"} />
                          <span className={isDark ? styles.featureTextDark : styles.featureText}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.cardCtaWrapper}>
                      {isTrial ? (
                        <a
                          href={waLink("Hi MariaPoS, I'd like to activate a free 7-day software trial for my shop.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.ctaTrial}
                        >
                          <Zap size={16} />
                          <span>{plan.ctaText}</span>
                        </a>
                      ) : (
                        <a
                          href={waLink(plan.waText ?? `Hi MariaPoS, I'd like to buy the ${plan.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={isDark ? styles.ctaDark : styles.ctaRed}
                        >
                          <WhatsAppIcon size={16} />
                          <span>Buy on WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nudge to Bundles when in software-only mode */}
            {activeTab === "software" && (
              <div className={styles.tabNudge}>
                <span>Need the physical touch POS terminal, receipt printer &amp; barcode scanner too?</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("bundles")}
                  className={styles.tabNudgeLink}
                >
                  <span>View Complete Hardware Bundles with Software (from Rs. 72,500)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Visual Included Value Card */}
        <div data-reveal="up" className={styles.ownerFreedomCard}>
          <div className={styles.ownerImgCol}>
            <Image
              src={ownerMobileAlerts}
              alt="Store owner receiving Telegram sales notification anywhere"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.ownerImg}
            />
            <div className={styles.ownerPill}>
              <Send size={12} color="#ffffff" />
              <span>Instant Telegram Push</span>
            </div>
          </div>
          <div className={styles.ownerTextCol}>
            <span className={styles.ownerEyebrow}>Included in Every Plan</span>
            <h3 className={styles.ownerHeading}>Run your store from your pocket, wherever you are</h3>
            <p className={styles.ownerDesc}>
              No monthly cloud fees or server maintenance charges. Every trial and multi-year license includes automated
              cloud backup, multi-device web reports, and instant Telegram sales alerts pushed directly to your phone.
            </p>
            <div className={styles.ownerPerks}>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Unlimited Telegram sale alerts</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Multi-branch comparison in browser</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Zero surprise cloud surcharges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Guarantee Banner */}
        <div data-reveal="up" className={styles.securityBanner}>
          <div className={styles.securityLeft}>
            <ShieldCheck size={20} color="#1faa55" />
            <span>Processed securely · Cash on Delivery across all 25 districts &amp; 1-Year JAAN hardware warranty</span>
          </div>
          <div className={styles.linksRow}>
            <a
              href={waLink("Hi MariaPoS, I would like to request a 7-day free trial activation.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footLink}
            >
              Try 7 days free first →
            </a>
            <span className={styles.dotSep}>•</span>
            <Link href="/contact" className={styles.footLink}>
              Multi-till / Multi-branch pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
