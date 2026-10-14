"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Sparkles, ArrowRight, PackageCheck } from "lucide-react";
import { hardwareCatalog, hardwareCategories, categoryIntros, HardwareCategory } from "@/lib/hardwareCatalog";
import { categoryIntrosSi, categoryLabelSi } from "@/lib/hardwareCatalogSi";
import { HardwareCard } from "./HardwareCard";
import { useCart } from "@/lib/cartContext";
import styles from "./HardwareCatalogSection.module.css";
import { useLang } from "@/lib/i18n";

type Props = {
  initialCategory?: HardwareCategory;
  showTitle?: boolean;
};

// Pure hardware categories (bundles are in Plans)
const pureHardwareCategories = hardwareCategories.filter((cat) => cat.id !== "bundles");

export function HardwareCatalogSection({ initialCategory = "all", showTitle = true }: Props) {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState<HardwareCategory>(
    initialCategory === "bundles" ? "all" : initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const { openDrawer, totalCount } = useCart();
  const { lang } = useLang();
  const introEn = categoryIntros[activeCategory];
  const introSi = categoryIntrosSi[activeCategory];
  const intro = {
    title: t(introEn.title, introSi.title),
    paragraphs: introEn.paragraphs.map((p, i) => t(p, introSi.paragraphs[i])),
  };
  const catLabel = (id: HardwareCategory, en: string) => t(en, categoryLabelSi[id]);

  const filteredItems = useMemo(() => {
    return hardwareCatalog.filter((item) => {
      // Category filter
      if (activeCategory !== "all") {
        if (item.category !== activeCategory) return false;
      }
      // In-stock filter
      if (inStockOnly && !item.inStock) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesCode = item.code.toLowerCase().includes(q);
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSub = item.subtitle.toLowerCase().includes(q);
        const matchesCat = item.categoryLabel.toLowerCase().includes(q);
        return matchesCode || matchesName || matchesSub || matchesCat;
      }
      return true;
    });
  }, [activeCategory, searchQuery, inStockOnly]);

  return (
    <section id="hardware-catalog" className={styles.section}>
      <div className={styles.inner}>
        {showTitle && (
          <div data-reveal="up" className="section-intro">
            <span className="eyebrow">
              <Sparkles size={13} />
              {t("Certified POS Hardware Catalog", "පරීක්ෂා කළ POS Hardware")}
            </span>
            <h2 className="section-title">{t("Tested, driver-configured and ready to bill", "පරීක්ෂා කර ඇත, ලැබුණු දවසේම bill කරන්න පුළුවන්")}</h2>
            <p className="lead">
              {t(
                "Every device is verified for seamless plug-and-play operation with MariaPoS Windows software. 1-year JAAN warranty and islandwide delivery across all 25 districts.",
                "හැම device එකක්ම MariaPoS සමඟ හොඳින් වැඩ කරන බව අපි කලින්ම තහවුරු කර ඇත, ඒ නිසා ඔබට setup කරන්න කරදර වෙන්න අවශ්‍ය නැහැ. අවුරුදු 1ක JAAN warranty එකත්, දිස්ත්‍රික්ක 25ටම delivery එකත් සමඟ.",
              )}
            </p>
          </div>
        )}

        {/* Nudge to Plans for Complete Bundles */}
        <div data-reveal="up" className={styles.bundlesBannerNudge}>
          <div className={styles.nudgeLeft}>
            <span className={styles.nudgeBadge}>
              <PackageCheck size={14} color="var(--red)" />
              {t("Complete Solution Bundles", "සියල්ල එකට ගන්න Bundles")}
            </span>
            <strong className={styles.nudgeTitle}>
              {t("Looking for MariaPoS Software Licenses?", "MariaPoS licence එකක් සොයනවාද?")}
            </strong>
            <span className={styles.nudgeDesc}>
              {t(
                "Activate full 1-Year, 2-Year or 3-Year MariaPoS software licenses with offline billing, FIFO inventory, push alerts & cloud sync.",
                "Internet නැති වෙලාවලත් bill කරන්න, stock නිවැරදිව තියාගන්න, sales ඔබේ phone එකට ගන්න, cloud backup එකත් සමඟ — අවුරුදු 1, 2 හෝ 3 MariaPoS licence එකක් ලබාගන්න.",
              )}
            </span>
          </div>
          <Link href="/pricing" className={styles.nudgeBtn}>
            <span>{t("View Software Plans & Pricing", "Software Plans සහ මිල බලන්න")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Filter bar */}
        <div data-reveal="up" className={styles.filterBar}>
          {/* Categories Horizontal Tabs */}
          <div className={styles.categoryTabs}>
            {pureHardwareCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{catLabel(cat.id, cat.label)}</span>
                </button>
              );
            })}
          </div>

          {/* Controls: Search + In Stock Toggle + Quote Cart Trigger */}
          <div className={styles.controlsRow}>
            <div className={styles.searchBox}>
              <Search size={16} className={styles.searchIcon} />
              <input
                type="text"
                placeholder={t("Search by item code (e.g. PRI2915, ACC1639) or model...", "Item code (උදා: PRI2915) හෝ model එකෙන් සොයන්න...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery("")}
                  aria-label={t("Clear search", "සෙවුම මකන්න")}
                >
                  ✕
                </button>
              )}
            </div>

            <label className={styles.stockToggle}>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className={styles.hiddenCheck}
              />
              <span className={`${styles.toggleSwitch} ${inStockOnly ? styles.toggleOn : ""}`} />
              <span className={styles.toggleLabel}>{t("In Stock Only", "දැන්ම ලබාගත හැකි ඒවා පමණයි")}</span>
            </label>

            <button type="button" className={styles.cartFloatBtn} onClick={openDrawer}>
              <ShoppingBag size={17} />
              <span>{t("Quote Cart", "Quote Cart")}</span>
              {totalCount > 0 && <span className={styles.cartCountBadge}>{totalCount}</span>}
            </button>
          </div>
        </div>

        {/* Category description panel */}
        <div key={activeCategory} data-reveal="up" className={styles.categoryIntro}>
          <span className={styles.categoryIntroEyebrow}>
            <Sparkles size={13} />
            {catLabel(activeCategory, hardwareCategories.find((c) => c.id === activeCategory)?.label ?? "All Hardware")}
          </span>
          <h3 className={styles.categoryIntroTitle}>{intro.title}</h3>
          <div className={styles.categoryIntroBody}>
            {intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Hardware Items Grid */}
        <div className={styles.catalogContainer}>
          <div className={styles.resultsInfo}>
            <span>
              {lang === "ta" ? (
                <>
                  <strong>{filteredItems.length}</strong> சான்றளிக்கப்பட்ட ஹார்ட்வேர் சாதனங்கள் காட்டப்படுகின்றன
                </>
              ) : lang === "si" ? (
                <>
                  Certified hardware devices <strong>{filteredItems.length}</strong>ක් පෙන්වනවා
                </>
              ) : (
                <>
                  Showing <strong>{filteredItems.length}</strong> certified hardware devices
                </>
              )}
            </span>
            {activeCategory !== "all" && (
              <button
                type="button"
                className={styles.resetFilterBtn}
                onClick={() => {
                  setActiveCategory("all");
                  setInStockOnly(false);
                }}
              >
                {t("Reset filter (Show all)", "සියල්ල පෙන්වන්න")}
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className={styles.emptyState}>
              <p>{t("No hardware found matching your criteria.", "ඔබ සෙව්වාට ගැලපෙන hardware හමු වුණේ නැහැ.")}</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                  setInStockOnly(false);
                }}
              >
                {t("Clear all filters", "සියලුම filters ඉවත් කරන්න")}
              </button>
            </div>
          ) : (
            <div className={styles.productGrid}>
              {filteredItems.map((item) => (
                <HardwareCard key={item.code} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
