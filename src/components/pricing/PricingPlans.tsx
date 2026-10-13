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
import { useLang } from "@/lib/i18n";

const includedSoftware = [
  { en: "Every billing, inventory & report feature", si: "හැම billing, inventory සහ report feature එකක්ම" },
  { en: "Cloud sync & push sales alerts", si: "Cloud sync සහ push sales alerts" },
  { en: "SMS receipts (prepaid credits)", si: "SMS receipts (prepaid credits)" },
  { en: "Free software updates for full term", si: "මුළු කාලය පුරාම නොමිලේ software updates" },
  { en: "Priority technical & WhatsApp support", si: "Priority technical සහ WhatsApp support" },
];

/** Sinhala + English text for the software plan cards, keyed by plan id. */
const planSi: Record<string, { name: string; per: string; note: string; badge?: string; cta: string }> = {
  trial: { name: "දින 7ක Free Trial", per: "Rs. 0 · Card එකක් අවශ්‍ය නැහැ", note: "Instant activation. ඔබේ සියලුම counters සඳහා full feature suite එක.", badge: "අවදානම් රහිත Trial", cta: "දින 7ක Free Trial එක පටන් ගන්න" },
  "1y": { name: "අවුරුදු 1ක License", per: "Rs. 44,000 / අවුරුද්දකට ($147.00)", note: "එක් ගෙවීමක්. මාස 12ක් full features.", cta: "අවුරුදු 1ක License එක තෝරන්න" },
  "2y": { name: "අවුරුදු 2ක License", per: "Rs. 35,250 / අවුරුද්දකට ($117.60/yr)", note: "අවුරුදු පතා renew කරනවාට වඩා 20%ක් ඉතිරියි.", badge: "20%ක් ඉතිරි", cta: "අවුරුදු 2ක License එක තෝරන්න" },
  "3y": { name: "අවුරුදු 3ක License", per: "Rs. 28,667 / අවුරුද්දකට ($95.55/yr)", note: "Best value. මාසයකට Rs. 2,388ක් ($7.96) විතරයි. අපේ වැඩිපුරම විකිණෙන plan එක.", badge: "Best Seller · නිර්දේශිතයි", cta: "අවුරුදු 3ක License එක තෝරන්න" },
};

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
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<"both" | "bundles" | "software">("both");
  const [selectedSoftPlan, setSelectedSoftPlan] = useState<string>("3y");
  const tp = (id: string) => planSi[id];

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
            <span>{t("Sri Lanka Pricing & Solutions", "ශ්‍රී ලංකා Pricing සහ Solutions")}</span>
          </div>
          <h1 className="section-title">{t("Pick the setup that fits your shop.", "ඔබේ වෙළඳසැලට ගැලපෙන setup එක තෝරන්න.")}</h1>
          <p className="lead">
            {lang === "ta" ? (
              <>
                <strong>software உடன் வரும் hardware bundles</strong> (turnkey) அல்லது உங்களிடம் ஏற்கனவே உள்ள Windows PC-க்கு{" "}
                <strong>software-only license</strong> ஒன்றை activate செய்வது, இந்த இரண்டில் ஒன்றைத் தேர்ந்தெடுங்கள். இரண்டு option-களும் கீழே உள்ளன.
              </>
            ) : lang === "si" ? (
              <>
                <strong>Software ඇතුළත් hardware bundles</strong> (turnkey), නැත්නම් ඔබේ දැනට තියෙන Windows PC එකට{" "}
                <strong>software-only license</strong> එකක් activate කිරීම අතරින් තෝරන්න. Options දෙකම පහළ තියෙනවා.
              </>
            ) : (
              <>
                Choose between turnkey <strong>hardware bundles with software included</strong>, or activate a{" "}
                <strong>software-only license</strong> for your existing Windows PC. Both options available below.
              </>
            )}
          </p>

          {/* Segmented Switcher */}
          <div className={styles.tabSwitcher}>
            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "both" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("both")}
            >
              <Sparkles size={16} />
              <span>{t("All Plans (Both)", "සියලුම Plans (දෙකම)")}</span>
              <span className={styles.miniPill}>{t("Full Overview", "සම්පූර්ණ දළ විශ්ලේෂණය")}</span>
            </button>

            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "bundles" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("bundles")}
            >
              <PackageCheck size={16} />
              <span>{t("Hardware Bundles with Software", "Software සමඟ Hardware Bundles")}</span>
              <span className={styles.miniPill}>{t("Turnkey Setup", "Turnkey Setup")}</span>
            </button>

            <button
              type="button"
              className={`${styles.switcherBtn} ${activeTab === "software" ? styles.switcherBtnActive : ""}`}
              onClick={() => setActiveTab("software")}
            >
              <Laptop size={16} />
              <span>{t("Software-Only Plans", "Software-Only Plans")}</span>
              <span className={styles.miniPill}>{t("For Existing PC", "දැනට ඇති PC එකට")}</span>
            </button>
          </div>
        </div>

        {/* Section 1: Hardware Bundles with Software */}
        {showBundles && (
          <div id="bundles" className={styles.tabSection}>
            <div className={styles.sectionSubHeader}>
              <div className={styles.subHeaderLeft}>
                <span className={styles.subHeaderEyebrow}>{t("Turnkey Solution Packs", "Turnkey Solution Packs")}</span>
                <h2 className={styles.subHeaderTitle}>{t("Complete Hardware Bundles (Software Included)", "සම්පූර්ණ Hardware Bundles (Software ඇතුළත්)")}</h2>
                <p className={styles.subHeaderDesc}>
                  {t(
                    "Everything you need to start cashier billing on day one. Includes touch terminal, receipt printer, barcode scanner, heavy-duty cash drawer, thermal paper rolls + official MariaPoS full license.",
                    "පළමු දවසේම cashier billing පටන් ගන්න අවශ්‍ය හැමදේම. Touch terminal, receipt printer, barcode scanner, heavy-duty cash drawer, thermal paper rolls + නිල MariaPoS full license ඇතුළත්.",
                  )}
                </p>
              </div>
              {activeTab === "both" && (
                <button
                  type="button"
                  onClick={() => setActiveTab("bundles")}
                  className={styles.filterOnlyBtn}
                  title={t("Filter to show only bundles", "Bundles පමණක් පෙන්වන්න")}
                >
                  {t("Focus Bundles Only", "Bundles පමණයි")}
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
                <span>{t("Zero Card / Hidden Fees", "Card / සැඟවුණු ගාස්තු කිසිවක් නැහැ")}</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>{t("Free Remote Setup & Training", "නොමිලේ Remote Setup සහ Training")}</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>{t("1-Year Direct JAAN Warranty", "අවුරුදු 1ක Direct JAAN Warranty")}</span>
              </div>
              <div className={styles.ribbonItem}>
                <CheckCircle2 size={16} color="#1faa55" />
                <span>{t("Cash on Delivery (All 25 Districts)", "Cash on Delivery (දිස්ත්‍රික්ක 25ම)")}</span>
              </div>
            </div>

            {/* Nudge to Software Only when in bundles-only mode */}
            {activeTab === "bundles" && (
              <div className={styles.tabNudge}>
                <span>{t("Already have a Windows PC, laptop, or tablet?", "දැනටමත් Windows PC, laptop හෝ tablet එකක් තියෙනවද?")}</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("software")}
                  className={styles.tabNudgeLink}
                >
                  <span>{t("View Software-Only License Plans (from Rs. 44,000)", "Software-Only License Plans බලන්න (Rs. 44,000 සිට)")}</span>
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
                <span className={styles.subHeaderEyebrow}>{t("Independent Software Licenses", "ස්වාධීන Software Licenses")}</span>
                <h2 className={styles.subHeaderTitle}>{t("Software-Only Plans: One Simple License. Every Feature.", "Software-Only Plans: එක සරල License එකක්. හැම Feature එකක්ම.")}</h2>
                <p className={styles.subHeaderDesc}>
                  {t(
                    "Install on any Windows 10 or 11 PC or laptop. Full offline POS billing, FIFO inventory ledger, push sales alerts, SMS e-receipts, and cloud sync. Longer terms save up to 35%.",
                    "ඕනෑම Windows 10 හෝ 11 PC එකක හෝ laptop එකක install කරන්න. Full offline POS billing, FIFO inventory ledger, push sales alerts, SMS e-receipts සහ cloud sync. දිගු කාලයක් තෝරාගත්තොත් 35%ක් දක්වා ඉතිරියි.",
                  )}
                </p>
              </div>
              {activeTab === "both" && (
                <button
                  type="button"
                  onClick={() => setActiveTab("software")}
                  className={styles.filterOnlyBtn}
                  title={t("Filter to show only software", "Software පමණක් පෙන්වන්න")}
                >
                  {t("Focus Software Only", "Software පමණයි")}
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
                    {plan.recommended && <div className={styles.recommendedRibbon}>{t("Recommended", "නිර්දේශිතයි")}</div>}

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
                          {plan.badge ? t(plan.badge, tp(plan.id)?.badge) : null}
                        </span>
                      </div>
                    )}

                    <div className={styles.cardTop}>
                      <h3 className={isDark ? styles.planNameDark : styles.planName}>{t(plan.name, tp(plan.id)?.name)}</h3>
                      <div className={styles.priceRow}>
                        <span className={isDark ? styles.priceDark : styles.price}>{plan.priceLkr === "Free" ? t("Free", "නොමිලේ") : plan.priceLkr}</span>
                        {plan.wasLkr && <span className={isDark ? styles.wasDark : styles.was}>{plan.wasLkr}</span>}
                      </div>
                      <span
                        className={
                          isDark ? styles.rateDark : isTrial ? styles.rateGreen : styles.rate
                        }
                      >
                        {t(plan.pricePerYear, tp(plan.id)?.per)}
                      </span>
                      <p className={isDark ? styles.noteDark : styles.note}>{t(plan.note, tp(plan.id)?.note)}</p>
                    </div>

                    <div className={isDark ? styles.dividerDark : styles.divider} />

                    <div className={styles.featureList}>
                      {includedSoftware.map((item) => (
                        <div key={item.en} className={styles.featureRow}>
                          <Check size={16} color={isDark ? "#ff8a80" : "var(--red)"} />
                          <span className={isDark ? styles.featureTextDark : styles.featureText}>
                            {t(item.en, item.si)}
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
                          <span>{plan.ctaText ? t(plan.ctaText, tp(plan.id)?.cta) : null}</span>
                        </a>
                      ) : (
                        <a
                          href={waLink(plan.waText ?? `Hi MariaPoS, I'd like to buy the ${plan.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={isDark ? styles.ctaDark : styles.ctaRed}
                        >
                          <WhatsAppIcon size={16} />
                          <span>{t("Buy on WhatsApp", "WhatsApp එකෙන් මිලදී ගන්න")}</span>
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
                <span>{t("Need the physical touch POS terminal, receipt printer & barcode scanner too?", "Touch POS terminal එක, receipt printer එක සහ barcode scanner එකත් ඕනද?")}</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("bundles")}
                  className={styles.tabNudgeLink}
                >
                  <span>{t("View Complete Hardware Bundles with Software (from Rs. 72,500)", "Software සමඟ සම්පූර්ණ Hardware Bundles බලන්න (Rs. 72,500 සිට)")}</span>
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
              alt={t("Store owner receiving push sales notification anywhere", "ඕනෑම තැනක සිට push sales notification එකක් ලබන වෙළඳසැල් අයිතිකරුවෙක්")}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.ownerImg}
            />
            <div className={styles.ownerPill}>
              <Send size={12} color="#ffffff" />
              <span>{t("Instant Push Notification", "Instant Push Notification")}</span>
            </div>
          </div>
          <div className={styles.ownerTextCol}>
            <span className={styles.ownerEyebrow}>{t("Included in Every Plan", "හැම Plan එකකම ඇතුළත්")}</span>
            <h3 className={styles.ownerHeading}>{t("Run your store from your pocket, wherever you are", "ඔබ කොහේ හිටියත්, සාක්කුවෙන්ම ඔබේ වෙළඳසැල පවත්වන්න")}</h3>
            <p className={styles.ownerDesc}>
              {t(
                "No monthly cloud fees or server maintenance charges. Every trial and multi-year license includes automated cloud backup, multi-device web reports, and instant push sales alerts pushed directly to your phone.",
                "මාසික cloud ගාස්තු හෝ server maintenance ගාස්තු නැහැ. හැම trial එකකටම සහ multi-year license එකකටම automated cloud backup, multi-device web reports සහ ඔබේ phone එකට කෙලින්ම එන instant push sales alerts ඇතුළත්.",
              )}
            </p>
            <div className={styles.ownerPerks}>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>{t("Unlimited push sale alerts", "Unlimited push sale alerts")}</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>{t("Multi-branch comparison in browser", "Browser එකෙන් Multi-branch සැසඳීම")}</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>{t("Zero surprise cloud surcharges", "අනපේක්ෂිත cloud අමතර ගාස්තු කිසිවක් නැහැ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Guarantee Banner */}
        <div data-reveal="up" className={styles.securityBanner}>
          <div className={styles.securityLeft}>
            <ShieldCheck size={20} color="#1faa55" />
            <span>{t("Processed securely · Cash on Delivery across all 25 districts & 1-Year JAAN hardware warranty", "ආරක්ෂිතව process කරයි · දිස්ත්‍රික්ක 25ටම Cash on Delivery සහ අවුරුදු 1ක JAAN hardware warranty")}</span>
          </div>
          <div className={styles.linksRow}>
            <a
              href={waLink("Hi MariaPoS, I would like to request a 7-day free trial activation.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footLink}
            >
              {t("Try 7 days free first →", "මුලින් දින 7ක් free try කරන්න →")}
            </a>
            <span className={styles.dotSep}>•</span>
            <Link href="/contact" className={styles.footLink}>
              {t("Multi-till / Multi-branch pricing", "Multi-till / Multi-branch pricing")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
