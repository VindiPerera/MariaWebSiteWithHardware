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
import { featureCategories, featureCount } from "@/lib/featureCatalog";
import { waGeneral } from "@/lib/shop";
import posBilling from "@/assets/images/pos-billing.png";
import reportsImg from "@/assets/images/reports.png";
import styles from "./FeatureCatalog.module.css";

export function FeatureCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>(featureCategories[0].id);

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
  }, [searchQuery]);

  const totalVisibleFeatures = filteredCategories.reduce((acc, cat) => acc + cat.features.length, 0);

  // Observe active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const cat of featureCategories) {
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
                <span>Enterprise POS Architecture</span>
              </div>
              <h1 className={styles.heroTitle}>Everything a Sri Lankan counter needs.</h1>
              <p className={styles.heroLead}>
                Billing, FIFO stock, supplier cheques, cash till control and reports in one Windows app. Works offline
                and syncs to the cloud.
              </p>
              <div className={styles.heroActions}>
                <Link href="/sign-up" className={styles.trialBtn}>
                  Start 7-day free trial
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer" className={styles.waAskBtn}>
                  <MessageCircle size={18} />
                  <span>Ask on WhatsApp</span>
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
              placeholder="Search all 63+ features (e.g. barcode, FIFO, discount, Telegram, reprint)..."
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className={styles.clearBtn}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles.countBadge}>
            <Layers size={15} color="var(--red)" />
            <span>
              Showing <strong>{totalVisibleFeatures}</strong> of {featureCount} features across{" "}
              {filteredCategories.length} modules
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
            <div className={styles.sidebarHeader}>13 Integrated Modules</div>
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
                        <span className={styles.moduleIndex}>Module {String(idx + 1).padStart(2, "0")}</span>
                        <h2 className={styles.moduleTitle}>{cat.title}</h2>
                      </div>
                    </div>

                    {isHardware && (
                      <Link href="/hardware" className={styles.hardwareShopLink}>
                        <span>Shop Hardware Catalog</span>
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
                            <strong>Why it matters:</strong> {f.why}
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
                <div className={styles.bottomCtaTitle}>Try every single feature free for 7 days.</div>
                <p style={{ margin: "6px 0 0", color: "#a1a1aa", fontSize: 15, fontFamily: "var(--font-figtree)" }}>
                  Instant cloud activation. No credit card required. Works with your existing hardware.
                </p>
              </div>

              <div className={styles.bottomCtaButtons}>
                <Link href="/sign-up" className={styles.ctaLightBtn}>
                  Start Free Trial
                </Link>
                <Link href="/pricing" className={styles.ctaRedBtn}>
                  <span>See Plans &amp; Pricing</span>
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
