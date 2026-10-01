import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Printer, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/shop";
import styles from "./AuthorizedXprinterBanner.module.css";

export function AuthorizedXprinterBanner() {
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
                <span>OFFICIAL AUTHORIZED SELLER</span>
              </span>
              <span className={styles.countryBadge}>SRI LANKA</span>
            </div>

            <div className={styles.brandTitleRow}>
              <div className={styles.brandLogoBlock}>
                <span className={styles.xprinterBrand}>Xprinter</span>
                <span className={styles.brandSub}>CERTIFIED HARDWARE</span>
              </div>
              <div className={styles.titleDivider} />
              <h3 className={styles.mainTitle}>
                Direct Factory Certified Xprinter Hardware Partner
              </h3>
            </div>

            <p className={styles.desc}>
              <strong>JAAN Network (PVT) Ltd</strong> is an authorized reseller and warranty service provider for genuine <strong>Xprinter</strong> thermal receipt, barcode label, and portable mobile printers across all 25 districts of Sri Lanka.
            </p>

            <div className={styles.trustPills}>
              <div className={styles.pill}>
                <ShieldCheck size={15} className={styles.pillIcon} />
                <span>100% Genuine Factory-Direct Units</span>
              </div>
              <div className={styles.pill}>
                <CheckCircle2 size={15} className={styles.pillIcon} />
                <span>1-Year Direct JAAN Replacement Warranty</span>
              </div>
              <div className={styles.pill}>
                <Printer size={15} className={styles.pillIcon} />
                <span>Pre-Configured Plug &amp; Play for MariaPoS</span>
              </div>
              <div className={styles.pill}>
                <Sparkles size={15} className={styles.pillIcon} />
                <span>Colombo Service Center &amp; Genuine Parts</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card & Actions */}
          <div className={styles.rightCol}>
            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeHeader}>
                <ShieldCheck size={28} className={styles.guaranteeIcon} />
                <div>
                  <strong className={styles.guaranteeTitle}>Genuine Guarantee</strong>
                  <span className={styles.guaranteeSubtitle}>Serial-numbered warranty card</span>
                </div>
              </div>
              <p className={styles.guaranteeText}>
                Avoid counterfeit or gray-market units without warranty. Every printer shipped by MariaPoS includes official factory firmware, high-durability printheads (150km+ rating), and local technical support.
              </p>

              <div className={styles.actionButtons}>
                <Link href="/hardware" className={styles.btnPrimary}>
                  <span>Explore Xprinter Catalog</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waVerify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWhatsapp}
                >
                  <WhatsAppIcon size={16} />
                  <span>Verify / Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
