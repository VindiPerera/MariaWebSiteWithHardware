"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  MessageCircle,
  Monitor,
  Printer,
  ScanBarcode,
  Smartphone,
  Zap,
} from "lucide-react";
import posTerminalImg from "@/assets/images/pos-terminal-receipt.jpg";
import { waGeneral } from "@/lib/shop";
import styles from "./HardwareShowcase.module.css";

const hardwareFeatures = [
  {
    icon: Monitor,
    title: "15.6\" Capacitive Touch Monitor",
    desc: "Vibrant anti-glare display running MariaPOS with rapid item selection, full-screen keypad, and zero touch lag.",
  },
  {
    icon: Printer,
    title: "80mm High-Speed Thermal Printer",
    desc: "Xprinter heavy-duty auto-cutter mechanism. Prints bilingual receipts with shop logo in under 0.8 seconds.",
  },
  {
    icon: Smartphone,
    title: "Mobile Sales & Companion Sync",
    desc: "Real-time sync to Android & iOS devices for queue busting, table orders, and owner live revenue alerts.",
  },
  {
    icon: ScanBarcode,
    title: "Heavy-Duty Cash Drawer & Scanner",
    desc: "Auto-kick RJ11 all-steel cash drawer + fast omnidirectional hands-free barcode reader.",
  },
];

export function HardwareShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className={styles.section} id="counter-setup" aria-labelledby="hardware-showcase-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headingBlock}>
          <div className={styles.eyebrow}>Complete POS Hardware Ecosystem</div>
          <h2 id="hardware-showcase-title" className={styles.title}>
            Engineered for 12-Hour Non-Stop Shifts.
          </h2>
          <p className={styles.subtitle}>
            A synchronized counter workstation that eliminates queues. MariaPOS software configured out-of-the-box with
            genuine Xprinter hardware, delivered Cash on Delivery.
          </p>
        </div>

        {/* Master Showcase Layout */}
        <div className={styles.showcaseGrid}>
          {/* Left: The High-Resolution 3D Workstation Image with Interactive Floating Pins */}
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <Image
                src={posTerminalImg}
                alt="MariaPOS All-In-One Touch Terminal with 80mm Xprinter thermal printer and mobile companion"
                className={styles.workstationImg}
                priority
                quality={95}
                sizes="(max-width: 900px) 100vw, 680px"
              />

              {/* Hotspot 1: Terminal Display */}
              <div
                className={`${styles.hotspot} ${styles.hotspotTerminal} ${activeHotspot === 0 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(0)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>15.6&quot; Touch Screen</strong>
                  <span>Spill &amp; dust resistant</span>
                </div>
              </div>

              {/* Hotspot 2: Thermal Receipt Printer */}
              <div
                className={`${styles.hotspot} ${styles.hotspotPrinter} ${activeHotspot === 1 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(1)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>80mm Auto-Cutter</strong>
                  <span>260mm/sec speed</span>
                </div>
              </div>

              {/* Hotspot 3: Mobile Phone Companion */}
              <div
                className={`${styles.hotspot} ${styles.hotspotMobile} ${activeHotspot === 2 ? styles.hotspotActive : ""}`}
                onMouseEnter={() => setActiveHotspot(2)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={styles.hotspotPin}>
                  <span className={styles.pingAnim} />
                  <span className={styles.pinDot} />
                </div>
                <div className={styles.hotspotTooltip}>
                  <strong>Mobile Companion</strong>
                  <span>Live cloud syncing</span>
                </div>
              </div>

              {/* Overlaid Hardware Badge */}
              <div className={styles.liveStationBadge}>
                <div className={styles.stationBadgeHeader}>
                  <Zap size={14} color="#dc2626" />
                  <strong>Zero Setup Hassle</strong>
                </div>
                <p>Pre-installed drivers &amp; database. Plug into power and begin scanning.</p>
              </div>
            </div>
          </div>

          {/* Right: Technical Features & Package Buying Actions */}
          <div className={styles.detailsColumn}>
            <div className={styles.featuresList}>
              {hardwareFeatures.map((item, index) => {
                const Icon = item.icon;
                const isHighlighted = activeHotspot === index;
                return (
                  <div
                    key={item.title}
                    className={`${styles.featureItem} ${isHighlighted ? styles.featureItemActive : ""}`}
                    onMouseEnter={() => setActiveHotspot(index)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className={styles.featureIconWrap}>
                      <Icon size={20} className={styles.featureIcon} />
                    </div>
                    <div className={styles.featureCopy}>
                      <h3 className={styles.featureTitle}>{item.title}</h3>
                      <p className={styles.featureDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buying Package Card */}
            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <div>
                  <span className={styles.packageEyebrow}>Full 4-Piece Setup</span>
                  <div className={styles.packagePrice}>
                    <span>Complete Kit from</span> <strong>Rs. 89,500</strong>
                  </div>
                </div>
                <div className={styles.authBadge}>
                  <Award size={15} color="#d97706" />
                  <span>Authorized Seller</span>
                </div>
              </div>

              <div className={styles.packagePills}>
                <span>✓ Windows 11 Ready</span>
                <span>✓ Cash on Delivery</span>
                <span>✓ 1-Year Local Warranty</span>
                <span>✓ WhatsApp Setup Support</span>
              </div>

              <div className={styles.packageActions}>
                <a
                  href={`${waGeneral}&text=Hello%20MariaPOS,%20I%20would%20like%20to%20order%20the%20Complete%20POS%20Hardware%20Workstation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPackageBtn}
                >
                  <MessageCircle size={18} />
                  <span>Order Hardware on WhatsApp</span>
                </a>
                <Link href="/hardware" className={styles.specLink}>
                  <span>Browse Individual Items</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
