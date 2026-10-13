"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  MessageCircle,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { featureCategories as baseCategories, featureCount } from "@/lib/featureCatalog";
import { localizeCategories } from "@/lib/featureCatalogSi";
import { waGeneral } from "@/lib/shop";
import posBilling from "@/assets/images/pos-billing.png";
import reportsImg from "@/assets/images/reports.png";
import styles from "./FeatureCatalog.module.css";
import { useLang } from "@/lib/i18n";

export function FeatureCatalog() {
  const { t, lang } = useLang();
  const featureCategories = useMemo(() => localizeCategories(baseCategories, t), [t]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>(baseCategories[0].id);

  // Filter features by search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return featureCategories;

    return featureCategories
      .map((cat) => {
        const matchesCat = cat.title.toLowerCase().includes(q) || cat.summary.toLowerCase().includes(q);
        const matchingFeatures = cat.features.filter(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.what.toLowerCase().includes(q) ||
            f.why.toLowerCase().includes(q),
        );

        if (matchesCat || matchingFeatures.length > 0) {
          return {
            ...cat,
            features: matchingFeatures.length > 0 ? matchingFeatures : cat.features,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof featureCategories;
  }, [searchQuery, featureCategories]);

  const totalVisibleFeatures = filteredCategories.reduce((acc, cat) => acc + cat.features.length, 0);

  // Observe active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const cat of baseCategories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop - 140;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveCategoryId(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveCategoryId(id);
    }
  };

  return (
    <div className={styles.featuresPage}>
      {/* 1. Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <Sparkles size={14} />
                <span>{t("Enterprise POS Architecture", "Enterprise POS Architecture")}</span>
              </div>
              <h1 className={styles.heroTitle}>{t("Everything a Sri Lankan counter needs.", "ශ්‍රී ලාංකික counter එකකට අවශ්‍ය හැමදේම.")}</h1>
              <p className={styles.heroLead}>
                {t(
                  "Billing, FIFO stock, supplier cheques, cash till control and reports in one Windows app. Works offline and syncs to the cloud.",
                  "Billing, FIFO stock, supplier cheques, cash till control සහ reports, සියල්ලම එක Windows app එකක. Offline වැඩ කරනවා, cloud එකට sync වෙනවා.",
                )}
              </p>
              <div className={styles.heroActions}>
                <Link href="/sign-up" className={styles.trialBtn}>
                  {t("Start 7-day free trial", "දින 7ක free trial එක පටන් ගන්න")}
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer" className={styles.waAskBtn}>
                  <MessageCircle size={18} />
                  <span>{t("Ask on WhatsApp", "WhatsApp එකෙන් අහන්න")}</span>
                </a>
              </div>
            </div>

            {/* Device Mockup Screenshot */}
            <div className={styles.deviceMockupCol}>
              <div className={styles.deviceScreenFrame}>
                <Image
                  src={posBilling}
                  alt="MariaPoS POS Billing Screen Interface"
                  className={styles.deviceScreenshot}
                  priority
                />
              </div>
              <div className={styles.deviceStandPole} />
              <div className={styles.deviceStandBase} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Stats Bar */}
      <div className={styles.filterBarSection}>
        <div className={styles.filterBarInner}>
          <div className={styles.searchWrap}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Search all 63+ features (e.g. barcode, FIFO, discount, push notification, reprint)...", "Features 63+ ම search කරන්න (උදා: barcode, FIFO, discount, push notification, reprint)...")}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className={styles.clearBtn}
                aria-label={t("Clear search", "Search එක clear කරන්න")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles.countBadge}>
            <Layers size={15} color="var(--red)" />
            <span>
              {lang === "ta" ? (
                <>
                  {filteredCategories.length} modules-இல் உள்ள {featureCount} features-ல் <strong>{totalVisibleFeatures}</strong> காட்டப்படுகின்றன
                </>
              ) : lang === "si" ? (
                <>
                  Modules {filteredCategories.length} ක features {featureCount} න් <strong>{totalVisibleFeatures}</strong> ක් පෙන්වනවා
                </>
              ) : (
                <>
                  Showing <strong>{totalVisibleFeatures}</strong> of {featureCount} features across{" "}
                  {filteredCategories.length} modules
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Category Chips (Horizontal Scroll) */}
      <div className={styles.mobileChipsRow}>
        {featureCategories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollToCategory(cat.id)}
              className={`${styles.mobileChip} ${isActive ? styles.mobileChipActive : ""}`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* 3. Catalog Two-Column Layout */}
      <section className={styles.catalogSection}>
        <div className={styles.catalogLayout}>
          {/* Sticky Left Sidebar Navigation */}
          <aside className={styles.stickySidebar}>
            <div className={styles.sidebarHeader}>{t("13 Integrated Modules", "Integrated Modules 13ක්")}</div>
            {featureCategories.map((cat, idx) => {
              const isActive = activeCategoryId === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className={`${styles.sidebarLink} ${isActive ? styles.sidebarLinkActive : ""}`}
                >
                  <Icon size={16} color={isActive ? "var(--red)" : "#71717a"} />
                  <span>{cat.title}</span>
                  <span className={styles.sidebarCount}>{String(idx + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </aside>

          {/* Right Column: Feature Modules */}
          <div className={styles.modulesCol}>
            {filteredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isHardware = cat.id === "hardware-printing";
              const isReports = cat.id === "reports-analytics";

              return (
                <div key={cat.id} id={cat.id} className={styles.moduleCard}>
                  <div className={styles.moduleHeaderRow}>
                    <div className={styles.moduleTitleGroup}>
                      <div className={styles.moduleIconWrap}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className={styles.moduleIndex}>{t("Module", "Module")} {String(idx + 1).padStart(2, "0")}</span>
                        <h2 className={styles.moduleTitle}>{cat.title}</h2>
                      </div>
                    </div>

                    {isHardware && (
                      <Link href="/hardware" className={styles.hardwareShopLink}>
                        <span>{t("Shop Hardware Catalog", "Hardware Catalog එක බලන්න")}</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>

                  <p className={styles.moduleSummary}>{cat.summary}</p>

                  {/* Features Grid */}
                  <div className={styles.featuresGrid}>
                    {cat.features.map((f) => (
                      <div key={f.name} className={styles.featureCard}>
                        <h3 className={styles.featureName}>{f.name}</h3>
                        <p className={styles.featureWhat}>{f.what}</p>
                        <div className={styles.featureWhy}>
                          <CheckCircle2 size={15} color="#15803d" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>
                            <strong>{t("Why it matters:", "වැදගත් වන්නේ ඇයි:")}</strong> {f.why}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Embedded Screenshot for Reports Module */}
                  {isReports && (
                    <div className={styles.screenshotEmbed}>
                      <Image
                        src={reportsImg}
                        alt="MariaPoS Sales, Inventory & Profit Reports Dashboard"
                        className={styles.screenshotImg}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Call to Action Card */}
            <div className={styles.bottomCtaCard}>
              <div>
                <div className={styles.bottomCtaTitle}>{t("Try every single feature free for 7 days.", "හැම feature එකක්ම දින 7ක් free try කරන්න.")}</div>
                <p style={{ margin: "6px 0 0", color: "#a1a1aa", fontSize: 15, fontFamily: "var(--font-figtree)" }}>
                  {t("Instant cloud activation. No credit card required. Works with your existing hardware.", "Cloud activation එක instant. Credit card එකක් අවශ්‍ය නැහැ. ඔබේ දැනට තියෙන hardware එක්ක වැඩ කරනවා.")}
                </p>
              </div>

              <div className={styles.bottomCtaButtons}>
                <Link href="/sign-up" className={styles.ctaLightBtn}>
                  {t("Start Free Trial", "Free Trial එක පටන් ගන්න")}
                </Link>
                <Link href="/pricing" className={styles.ctaRedBtn}>
                  <span>{t("See Plans & Pricing", "Plans සහ Pricing බලන්න")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
