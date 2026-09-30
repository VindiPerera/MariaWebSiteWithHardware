"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import ambassadorImg from "@/assets/images/mariapos-brand-ambassador.png";
import styles from "./BrandPromoter.module.css";

export function BrandPromoter() {
  return (
    <section id="promotion" className={styles.section} aria-labelledby="promoter-headline">
      <div className={styles.container}>
        {/* Subtle Architectural Grid Background inspired by the reference design */}
        <div aria-hidden="true" className={styles.gridCanvas}>
          <div className={styles.gridLineV1} />
          <div className={styles.gridLineV2} />
          <div className={styles.gridLineH1} />
          <div className={styles.gridLineH2} />
          <div className={styles.editorialFrame} />
        </div>

        <div className={styles.layout}>
          {/* Brand Ambassador Cutout Column */}
          <div data-reveal="scale" className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              {/* Floating Quote Badge */}
              <div className={styles.quoteBadge}>
                <div className={styles.quoteBadgeHeader}>
                  <div className={styles.avatarMini}>
                    <Sparkles size={13} color="#e11d48" />
                  </div>
                  <span className={styles.handle}>@mariapos_official</span>
                </div>
                <p className={styles.quoteText}>
                  &ldquo;A fast till is not a luxury. It is the heartbeat of your store.&rdquo;
                </p>
              </div>

              {/* Cutout Image with explicit sizing for perfect framing */}
              <div className={styles.cutoutContainer}>
                <Image
                  src={ambassadorImg}
                  alt="MariaPoS retail ambassador in red branded uniform"
                  width={420}
                  height={562}
                  priority
                  className={styles.cutoutImg}
                />
              </div>

              {/* Status Verification Pill at base */}
              <div className={styles.trustBadge}>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <div className={styles.trustInfo}>
                  <strong className={styles.trustTitle}>3,200+ Counters Active</strong>
                  <span className={styles.trustSub}>99.98% Peak-Hour Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Promotion Typography Column */}
          <div data-reveal="right" className={styles.copyCol}>
            <div className={styles.badgeRow}>
              <span className={styles.brandTag}>
                <Zap size={13} />
                <span>The Counter Standard</span>
              </span>
              <span className={styles.versionTag}>Made to Bill · Built to Scale</span>
            </div>

            <div className={styles.headlineBlock}>
              <span className={styles.preTitle}>If your counter slows down during peak rush,</span>
              <h2 id="promoter-headline" className={styles.headline}>
                who will keep your customers?
              </h2>
            </div>

            <p className={styles.narrative}>
              Every customer standing in a slow queue is a customer thinking about shopping somewhere else. MariaPoS was
              engineered from the ground up for high-volume retail counters that cannot afford a single second of web lag
              or internet downtime.
            </p>

            {/* Feature highlights */}
            <div className={styles.highlights}>
              <div className={styles.highlightPill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>3.2-second average transaction speed</span>
              </div>
              <div className={styles.highlightPill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>100% offline local SQLite database</span>
              </div>
              <div className={styles.highlightPill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Real-time Telegram sale alerts to owner</span>
              </div>
              <div className={styles.highlightPill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Automatic FIFO stock deduction &amp; batch audit</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <Link href="/pricing" className={styles.primaryBtn}>
                <span>Start Free 7-Day Trial</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#bill-design" className={styles.secondaryBtn}>
                <span>See Bill Design</span>
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Micro guarantee */}
            <div className={styles.guarantee}>
              <ShieldCheck size={16} className={styles.shieldIcon} />
              <span>Full feature access · No credit card required · Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
