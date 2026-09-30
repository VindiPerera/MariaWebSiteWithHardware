"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Check,
  CheckCircle2,
  Headset,
  Laptop,
  MessageCircle,
  Package,
  PackageCheck,
  Percent,
  PiggyBank,
  Printer,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { posBundles, formatLkr } from "@/lib/hardwareCatalog";
import { waLink } from "@/lib/shop";
import { PosBundleCard } from "@/components/hardware/PosBundleCard";
import styles from "./PricingPlans.module.css";

type SoftwareTerm = 1 | 2 | 3;

const softwarePrices: Record<SoftwareTerm, { lkr: string; usd: string; note: string }> = {
  1: { lkr: "Rs. 44,000", usd: "$147.00", note: "12 months full license · Single payment" },
  2: { lkr: "Rs. 70,500", usd: "$235.20", note: "24 months full license · Save 20%" },
  3: { lkr: "Rs. 86,000", usd: "$286.65", note: "36 months full license · Save 35% (Best value)" },
};

export function PricingPlans() {
  const [activeView, setActiveView] = useState<"bundles" | "software" | "tracks">("bundles");
  const [softwareTerm, setSoftwareTerm] = useState<SoftwareTerm>(3);

  // Check URL hash on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("software")) {
        setActiveView("software");
      } else if (hash.includes("tracks") || hash.includes("fullset")) {
        setActiveView("tracks");
      } else if (hash.includes("bundle")) {
        setActiveView("bundles");
      }
    }
  }, []);

  const currentSoftware = softwarePrices[softwareTerm];

  const waSoftwareText = `Hi MariaPoS, I'd like to order: MariaPoS Software License (${softwareTerm}-Year, ${currentSoftware.lkr}). Shop name: ___`;
  const waFullSetText = `Hi MariaPoS, I'd like to order: Complete Software + Hardware Full Set (Starter Pack Rs. 169,900). Delivery to: ___`;
  const waHardwareText = `Hi MariaPoS, I'd like to ask about hardware products for my counter. Shop name: ___`;

  return (
    <section id="pricing" className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        {/* Intro */}
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <div className={styles.pillBadge}>
            <Sparkles size={14} color="var(--red)" />
            <span>Sri Lanka Pricing &amp; Hardware Bundles</span>
          </div>
          <h1 className="section-title">Pick the setup that fits your shop.</h1>
          <p className="lead">
            Transparent pricing in Sri Lankan Rupees. Order on WhatsApp and pay cash on delivery across all 25 districts.
            No hidden activation charges or credit card required.
          </p>

          {/* View Mode Switcher */}
          <div className={styles.viewToggleGroup}>
            <button
              type="button"
              className={`${styles.viewToggleBtn} ${activeView === "bundles" ? styles.viewToggleBtnActive : ""}`}
              onClick={() => setActiveView("bundles")}
            >
              <Package size={16} />
              <span>Complete Hardware Bundles (3)</span>
            </button>

            <button
              type="button"
              className={`${styles.viewToggleBtn} ${activeView === "software" ? styles.viewToggleBtnActive : ""}`}
              onClick={() => setActiveView("software")}
            >
              <Laptop size={16} />
              <span>Software-Only Licenses</span>
            </button>

            <button
              type="button"
              className={`${styles.viewToggleBtn} ${activeView === "tracks" ? styles.viewToggleBtnActive : ""}`}
              onClick={() => setActiveView("tracks")}
            >
              <PackageCheck size={16} />
              <span>Buying Tracks Overview</span>
            </button>
          </div>
        </div>


        {/* View 1: 3 Ways to Buy (Software / Hardware / Full Set) */}
        {activeView === "tracks" && (
          <div className={styles.tracksGrid}>
            {/* Card 1: Software Only */}
            <div id="software" className={styles.trackCard}>
              <div className={styles.cardHeaderRow}>
                <Laptop size={28} color="var(--red)" />
                <span className={styles.trackNumber}>01</span>
              </div>

              <div>
                <h2 className={styles.trackTitle}>Software only</h2>
                <p className={styles.trackLead}>MariaPoS licence for your existing Windows PC or laptop.</p>
              </div>

              {/* Term Selector */}
              <div className={styles.termToggle}>
                {([1, 2, 3] as SoftwareTerm[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`${styles.termBtn} ${softwareTerm === t ? styles.termBtnActive : ""}`}
                    onClick={() => setSoftwareTerm(t)}
                  >
                    {t}-Year{t === 3 ? " ★" : ""}
                  </button>
                ))}
              </div>

              <div className={styles.priceRow}>
                <div className={styles.priceAmount}>{currentSoftware.lkr}</div>
                <div className={styles.priceNote}>
                  {currentSoftware.note} ({currentSoftware.usd})
                </div>
              </div>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Full MariaPoS Windows software</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>FIFO inventory &amp; real-time stock ledger</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Cloud web back-office, SMS &amp; Telegram</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Free updates throughout licence term</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Local support on WhatsApp</span>
                </div>
              </div>

              <div className={styles.cardFooterArea}>
                <div className={styles.miniTrustRow}>
                  <span className={styles.miniTrustBadge}>
                    <Banknote size={13} color="var(--red)" />
                    COD Accepted
                  </span>
                  <span className={styles.miniTrustBadge}>
                    <Headset size={13} color="var(--red)" />
                    Colombo Support
                  </span>
                </div>

                <a
                  href={waLink(waSoftwareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPlanBtn}
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>

                <Link href="/sign-up" className={styles.trialSubLink}>
                  Or start the 7-day free trial (no card needed) →
                </Link>
              </div>
            </div>

            {/* Card 2: Hardware Only */}
            <div id="hardware" className={styles.trackCard}>
              <div className={styles.cardHeaderRow}>
                <Printer size={28} color="var(--red)" />
                <span className={styles.trackNumber}>02</span>
              </div>

              <div>
                <h2 className={styles.trackTitle}>Hardware only</h2>
                <p className={styles.trackLead}>
                  Choose individual devices. Already using MariaPoS or another billing system.
                </p>
              </div>

              <div style={{ height: 44 }} />

              <div className={styles.priceRow}>
                <div className={styles.priceAmount}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#71717a" }}>from </span>Rs. 9,450
                </div>
                <div className={styles.priceNote}>21+ hardware items · Paper rolls from Rs. 210</div>
              </div>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Touch POS terminals (Intel Core i5)</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>High-speed thermal receipt &amp; label printers</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>1D &amp; 2D barcode scanners &amp; steel cash drawers</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>1-Year JAAN commercial replacement warranty</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="var(--red)" />
                  <span>Tested &amp; driver pre-configured for MariaPoS</span>
                </div>
              </div>

              <div className={styles.cardFooterArea}>
                <div className={styles.miniTrustRow}>
                  <span className={styles.miniTrustBadge}>
                    <Banknote size={13} color="var(--red)" />
                    COD Accepted
                  </span>
                  <span className={styles.miniTrustBadge}>
                    <Truck size={13} color="var(--red)" />
                    Island-Wide Delivery
                  </span>
                </div>

                <a
                  href={waLink(waHardwareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPlanBtn}
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>

                <Link href="/hardware" className={styles.trialSubLink}>
                  Browse all 21+ hardware products →
                </Link>
              </div>
            </div>

            {/* Card 3: Software + Hardware (Full Set Combo) */}
            <div id="fullset" className={`${styles.trackCard} ${styles.trackCardFullSet}`}>
              <div className={styles.cardHeaderRow}>
                <PackageCheck size={28} color="#ff8a80" />
                <span className={styles.bestValueBadge}>Best value · Recommended</span>
              </div>

              <div>
                <h2 className={styles.trackTitle} style={{ color: "#ffffff" }}>
                  Software + Hardware
                </h2>
                <p className={styles.trackLead} style={{ color: "#d4d4d8" }}>
                  The full set. Complete counter setup, pre-installed and ready to bill on day one.
                </p>
              </div>

              <div className={styles.savingsCallout}>
                <PiggyBank size={18} color="#ff8a80" />
                <span>Save Rs. 15,100+ compared to separate purchase</span>
              </div>

              <div className={styles.priceRow}>
                <div className={styles.priceAmount} style={{ color: "#ffffff" }}>
                  Rs. 169,900
                </div>
                <div className={styles.priceNote} style={{ color: "#a1a1aa" }}>
                  Complete Starter Pack · <span style={{ textDecoration: "line-through" }}>Rs. 185,000</span>
                </div>
              </div>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>POS Touch 15.6&quot; i5 8GB 256GB Terminal</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>Xprinter 80T High-Speed Receipt Printer (USB+LAN)</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>AQ2210 1D Barcode Scanner + Stand</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>Heavy-Duty 5-Pin Steel Cash Drawer</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>1-Year MariaPoS Software License ($147 included)</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={18} color="#ff8a80" />
                  <span style={{ color: "#f4f4f5" }}>Free On-Site or Remote Installation &amp; Training</span>
                </div>
              </div>

              <div className={styles.cardFooterArea}>
                <div className={styles.miniTrustRow}>
                  <span className={styles.miniTrustBadgeDark}>
                    <Banknote size={13} color="#ff8a80" />
                    COD Accepted
                  </span>
                  <span className={styles.miniTrustBadgeDark}>
                    <Truck size={13} color="#ff8a80" />
                    All 25 Districts
                  </span>
                </div>

                <a
                  href={waLink(waFullSetText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPlanBtn}
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>

                <span style={{ textAlign: "center", fontSize: 13, color: "#a1a1aa" }}>
                  Need different items? Message us and we will customize the set.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Complete Hardware Bundles (Starter, Supermarket, Van Sales) */}
        {activeView === "bundles" && (
          <div id="bundles" className={styles.bundlesWrapper}>
            <div className={styles.bundlesIntroHeader}>
              <span className={styles.bundlesEyebrow}>Value Solution Packages</span>
              <h2 className={styles.bundlesMainTitle}>Complete Software + Hardware Packs</h2>
              <p className={styles.bundlesSubText}>
                Everything you need to start cashier billing on day one. Includes official MariaPoS full software license,
                touch terminal, printer, scanner, cash drawer and paper rolls.
              </p>
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
          </div>
        )}


        {/* View 3: Software-Only Licenses (1y / 2y / 3y + Trial) */}
        {activeView === "software" && (
          <div className={styles.softwareGrid}>
            {/* Free Trial */}
            <div className={styles.softCard}>
              <span className={styles.softBadge}>Risk-Free Trial</span>
              <h3 className={styles.softTitle}>7-Day Free Trial</h3>
              <div className={styles.softPrice}>Free</div>
              <p className={styles.softLead}>Instant cloud activation. Full feature suite for all your counters.</p>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Full offline billing screen</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>FIFO inventory &amp; reports</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>No credit card required</span>
                </div>
              </div>

              <Link href="/sign-up" className={styles.softCta}>
                Start 7-Day Free Trial
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 1 Year */}
            <div className={styles.softCard}>
              <span className={styles.softBadge}>Annual Plan</span>
              <h3 className={styles.softTitle}>1-Year License</h3>
              <div className={styles.softPrice}>Rs. 44,000</div>
              <p className={styles.softLead}>Single payment. Full features for 12 months ($147.00).</p>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Every billing &amp; inventory feature</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Cloud sync &amp; Telegram alerts</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Free software updates for 1 year</span>
                </div>
              </div>

              <a
                href={waLink("Hi MariaPoS, I want to activate the 1-Year Software License (Rs. 44,000).")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waPlanBtn}
              >
                <MessageCircle size={18} />
                <span>Buy on WhatsApp</span>
              </a>
            </div>

            {/* 2 Year */}
            <div className={styles.softCard}>
              <span className={styles.softBadge}>Save 20%</span>
              <h3 className={styles.softTitle}>2-Year License</h3>
              <div className={styles.softPrice}>Rs. 70,500</div>
              <p className={styles.softLead}>Save 20% compared to yearly renewal ($235.20).</p>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>All 63+ features included</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Cloud sync &amp; Telegram alerts</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="var(--red)" />
                  <span>Priority technical &amp; phone support</span>
                </div>
              </div>

              <a
                href={waLink("Hi MariaPoS, I want to activate the 2-Year Software License (Rs. 70,500).")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waPlanBtn}
              >
                <MessageCircle size={18} />
                <span>Buy on WhatsApp</span>
              </a>
            </div>

            {/* 3 Year Recommended */}
            <div className={`${styles.softCard} ${styles.softCardRecommended}`}>
              <span className={styles.softBadgeRecommended}>Best Value · Recommended</span>
              <h3 className={styles.softTitle} style={{ color: "#fff" }}>
                3-Year License
              </h3>
              <div className={styles.softPrice} style={{ color: "#fff" }}>
                Rs. 86,000
              </div>
              <p className={styles.softLead} style={{ color: "#d4d4d8" }}>
                Save 35%. Best value for established shops ($286.65).
              </p>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={16} color="#ff8a80" />
                  <span style={{ color: "#fff" }}>Every billing, inventory &amp; report feature</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="#ff8a80" />
                  <span style={{ color: "#fff" }}>Cloud sync &amp; Telegram alerts</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="#ff8a80" />
                  <span style={{ color: "#fff" }}>3 full years of free software updates</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} color="#ff8a80" />
                  <span style={{ color: "#fff" }}>Priority 24/7 technical hotline support</span>
                </div>
              </div>

              <a
                href={waLink("Hi MariaPoS, I want to activate the 3-Year Software License (Rs. 86,000).")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waPlanBtn}
              >
                <MessageCircle size={18} />
                <span>Buy on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Plan Comparison Matrix Table */}
        <div className={styles.compareSection}>
          <h2 className={styles.compareTitle}>Compare What&apos;s Included</h2>
          <div className={styles.compareTableCard}>
            <div className={styles.tableHeaderRow}>
              <span>Included Feature / Equipment</span>
              <span className={styles.tableColCenter}>Software Only</span>
              <span className={styles.tableColCenter}>Hardware Only</span>
              <span className={styles.tableColCenter} style={{ color: "var(--red)" }}>
                Full Set Pack
              </span>
            </div>

            {[
              { name: "MariaPoS Software Full Licence", soft: true, hw: false, full: true },
              { name: "7-Day Free Software Trial", soft: true, hw: false, full: true },
              { name: "Touch Screen POS Terminal", soft: "Use your PC", hw: "Optional", full: "Included" },
              { name: "High-Speed Thermal Receipt Printer", soft: "Use existing", hw: "Optional", full: "Included" },
              { name: "Barcode Scanner & Stand", soft: "Use existing", hw: "Optional", full: "Included" },
              { name: "Heavy Duty Cash Drawer", soft: "Use existing", hw: "Optional", full: "Included" },
              { name: "Free Remote / On-Site Installation", soft: "Guidance", hw: "Drivers only", full: "Full Setup Included" },
              { name: "1-Year JAAN Equipment Warranty", soft: "—", hw: true, full: true },
              { name: "Cash on Delivery Accepted", soft: true, hw: true, full: true },
              { name: "Island-Wide Courier Delivery (25 districts)", soft: "Digital", hw: true, full: true },
            ].map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <span className={styles.rowName}>{row.name}</span>
                <span className={styles.tableColCenter}>
                  {row.soft === true ? (
                    <Check size={18} color="var(--red)" />
                    ) : row.soft === false ? (
                    <span style={{ color: "#a1a1aa" }}>—</span>
                  ) : (
                    <span style={{ fontSize: 13, color: "#52525b" }}>{row.soft}</span>
                  )}
                </span>
                <span className={styles.tableColCenter}>
                  {row.hw === true ? (
                    <Check size={18} color="var(--red)" />
                  ) : row.hw === false ? (
                    <span style={{ color: "#a1a1aa" }}>—</span>
                  ) : (
                    <span style={{ fontSize: 13, color: "#52525b" }}>{row.hw}</span>
                  )}
                </span>
                <span className={styles.tableColCenter}>
                  {row.full === true ? (
                    <Check size={18} color="#1faa55" />
                  ) : (
                    <strong style={{ fontSize: 13, color: "var(--red)" }}>{row.full}</strong>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
