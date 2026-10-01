"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Sparkles, ArrowRight, PackageCheck } from "lucide-react";
import { hardwareCatalog, hardwareCategories, categoryIntros, HardwareCategory } from "@/lib/hardwareCatalog";
import { HardwareCard } from "./HardwareCard";
import { useCart } from "@/lib/cartContext";
import styles from "./HardwareCatalogSection.module.css";

type Props = {
  initialCategory?: HardwareCategory;
  showTitle?: boolean;
};

// Pure hardware categories (bundles are in Plans)
const pureHardwareCategories = hardwareCategories.filter((cat) => cat.id !== "bundles");

export function HardwareCatalogSection({ initialCategory = "all", showTitle = true }: Props) {
  const [activeCategory, setActiveCategory] = useState<HardwareCategory>(
    initialCategory === "bundles" ? "all" : initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const { openDrawer, totalCount } = useCart();

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
              Certified POS Hardware Catalog
            </span>
            <h2 className="section-title">Tested, driver-configured and ready to bill</h2>
            <p className="lead">
              Every device is verified for seamless plug-and-play operation with MariaPoS Windows software. 1-year JAAN
              warranty and islandwide delivery across all 25 districts.
            </p>
          </div>
        )}

        {/* Nudge to Plans for Complete Bundles */}
        <div data-reveal="up" className={styles.bundlesBannerNudge}>
          <div className={styles.nudgeLeft}>
            <span className={styles.nudgeBadge}>
              <PackageCheck size={14} color="var(--red)" />
              Complete Solution Bundles
            </span>
            <strong className={styles.nudgeTitle}>
              Looking for a Complete Hardware + Software Pack?
            </strong>
            <span className={styles.nudgeDesc}>
              Starter Retail Pack (Rs. 169,900), Supermarket Dual-Screen Pack (Rs. 279,500), and Van Sales Pack with full licenses are available in Plans.
            </span>
          </div>
          <Link href="/pricing#bundles" className={styles.nudgeBtn}>
            <span>View Bundle Plans &amp; Pricing</span>
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
                  <span>{cat.label}</span>
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
                placeholder="Search by item code (e.g. PRI2915, ACC1639) or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
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
              <span className={styles.toggleLabel}>In Stock Only</span>
            </label>

            <button type="button" className={styles.cartFloatBtn} onClick={openDrawer}>
              <ShoppingBag size={17} />
              <span>Quote Cart</span>
              {totalCount > 0 && <span className={styles.cartCountBadge}>{totalCount}</span>}
            </button>
          </div>
        </div>

        {/* Category description panel */}
        <div key={activeCategory} data-reveal="up" className={styles.categoryIntro}>
          <span className={styles.categoryIntroEyebrow}>
            <Sparkles size={13} />
            {hardwareCategories.find((c) => c.id === activeCategory)?.label ?? "All Hardware"}
          </span>
          <h3 className={styles.categoryIntroTitle}>{categoryIntros[activeCategory].title}</h3>
          <div className={styles.categoryIntroBody}>
            {categoryIntros[activeCategory].paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Hardware Items Grid */}
        <div className={styles.catalogContainer}>
          <div className={styles.resultsInfo}>
            <span>
              Showing <strong>{filteredItems.length}</strong> certified hardware devices
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
                Reset filter (Show all)
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No hardware found matching your criteria.</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                  setInStockOnly(false);
                }}
              >
                Clear all filters
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
