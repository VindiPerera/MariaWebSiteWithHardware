import React from "react";
import Link from "next/link";
import { Award, ChevronRight, ShieldCheck } from "lucide-react";
import styles from "./AuthorizedXprinterBadge.module.css";

type Props = {
  href?: string;
  className?: string;
};

export function AuthorizedXprinterBadge({ href = "/hardware", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`${styles.badgePill} ${className}`}
      aria-label="Official Authorized Seller of Xprinter Sri Lanka — 100% Genuine with 1-Year Direct Warranty"
    >
      {/* Subtle light sweep */}
      <span className={styles.shimmerEffect} aria-hidden="true" />

      {/* Gold Seal Icon */}
      <span className={styles.iconBox}>
        <Award size={15} className={styles.awardIcon} />
      </span>

      {/* Micro Tag */}
      <span className={styles.officialTag}>OFFICIAL</span>

      {/* Main Core Brand Message */}
      <span className={styles.brandText}>
        Authorized Seller of <strong className={styles.xprinterWord}>Xprinter</strong>
      </span>

      <span className={styles.divider} aria-hidden="true" />

      {/* Secondary Trust Note */}
      <span className={styles.trustText}>
        <ShieldCheck size={13} className={styles.shieldIcon} />
        <span>100% Genuine · 1-Yr Warranty</span>
      </span>

      {/* Trailing Arrow */}
      <span className={styles.arrowWrap}>
        <ChevronRight size={14} className={styles.arrowIcon} />
      </span>
    </Link>
  );
}
