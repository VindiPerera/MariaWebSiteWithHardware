"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Barcode,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Layers,
  MessageCircle,
  Package,
  Play,
  Pause,
  Printer,
  Radio,
  RotateCcw,
  ScanBarcode,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import { waGeneral, formatLkr } from "@/lib/shop";
import { AuthorizedXprinterBadge } from "@/components/common/AuthorizedXprinterBadge";
import acc1639 from "@/assets/images/products/ACC1639.png";
import pri2124 from "@/assets/images/products/PRI2124-main.png";
import pri2915 from "@/assets/images/products/PRI2915.png";
import sca2127 from "@/assets/images/products/SCA2127.png";
import styles from "./InteractiveCounterHero.module.css";

type CartItem = {
  id: string;
  name: string;
  code: string;
  qty: number;
  price: number;
};

const defaultItems: CartItem[] = [
  { id: "1", name: "Munchee Super Cream Cracker 490g", code: "EAN 4791001", qty: 2, price: 280 },
  { id: "2", name: "Highland Fresh Milk 1000ml", code: "EAN 4792014", qty: 1, price: 520 },
  { id: "3", name: "Anchor Butter Salted 227g", code: "EAN 9414002", qty: 1, price: 1450 },
];

const scanPool = [
  { name: "Ceylon Tea BOPF Premium 200g", code: "EAN 4790021", price: 480 },
  { name: "Sunlight Care Laundry Soap 115g", code: "EAN 8901030", price: 190 },
  { name: "Maliban Real Chocolate Biscuit 100g", code: "EAN 4791012", price: 240 },
  { name: "Kotmale Cheddar Cheese Wedge 200g", code: "EAN 4792109", price: 1150 },
];

export function InteractiveCounterHero() {
  const [cart, setCart] = useState<CartItem[]>(defaultItems);
  const [isScanning, setIsScanning] = useState(false);
  const [isTendered, setIsTendered] = useState(false);
  const [isDrawerPopped, setIsDrawerPopped] = useState(false);
  const [poolIdx, setPoolIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showTelegramAlert, setShowTelegramAlert] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "hardware">("terminal");

  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);

  // Manual Scan Trigger
  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const next = scanPool[poolIdx % scanPool.length];
      setPoolIdx((prev) => prev + 1);

      setCart((prev) => {
        const found = prev.find((i) => i.name === next.name);
        if (found) {
          return prev.map((i) => (i.name === next.name ? { ...i, qty: i.qty + 1 } : i));
        }
        return [
          ...prev,
          {
            id: String(Date.now()),
            name: next.name,
            code: next.code,
            qty: 1,
            price: next.price,
          },
        ];
      });
      setIsScanning(false);
      setIsTendered(false);
    }, 400);
  };

  // Manual Tender & Print Trigger
  const triggerTender = () => {
    setIsTendered(true);
    setIsDrawerPopped(true);
    setShowTelegramAlert(true);

    setTimeout(() => {
      setIsDrawerPopped(false);
    }, 4500);

    setTimeout(() => {
      setShowTelegramAlert(false);
    }, 6000);
  };

  // Reset Trigger
  const triggerReset = () => {
    setCart(defaultItems);
    setIsTendered(false);
    setIsDrawerPopped(false);
    setShowTelegramAlert(false);
  };

  // Auto-Play Simulation Loop
  useEffect(() => {
    if (!autoPlay) return;

    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 6;
      if (step === 1 || step === 3) {
        triggerScan();
      } else if (step === 4) {
        triggerTender();
      } else if (step === 0) {
        triggerReset();
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [autoPlay, poolIdx]);

  return (
    <section className={styles.heroSection} aria-label="MariaPoS Animated Hero">
      {/* Dynamic Background Atmosphere */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.ambientBlobRed} aria-hidden="true" />
      <div className={styles.ambientBlobGreen} aria-hidden="true" />

      <div className={styles.container}>
        {/* Left Column: High-Impact Copy & Actions */}
        <div className={styles.leftCol}>
          {/* Highlighted Official Partner Trust Pill */}
          <div className={styles.heroBadgeRow}>
            <AuthorizedXprinterBadge />
          </div>

          {/* Main Animated Headline */}
          <h1 className={styles.mainTitle}>
            A Complete POS Setup{" "}
            <span className={styles.gradientHighlight}>Engineered to Bill.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.leadText}>
            MariaPoS offline-first billing software paired with commercial touch terminals,
            high-speed thermal printers, 1D/2D scanners and heavy-duty cash drawers.
            Pre-configured and tested for Sri Lankan shops.
          </p>

          {/* Primary CTA Cluster */}
          <div className={styles.ctaCluster}>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappPrimaryBtn}
            >
              <span className={styles.waPulsePing} />
              <MessageCircle size={19} />
              <span>Order on WhatsApp (COD)</span>
            </a>

            <Link href="/pricing" className={styles.plansSecondaryBtn}>
              <span>View Plans &amp; Bundles</span>
              <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              className={styles.autoPlayToggle}
              onClick={() => setAutoPlay(!autoPlay)}
              title={autoPlay ? "Pause automated counter simulation" : "Start automated counter simulation"}
            >
              {autoPlay ? <Pause size={15} color="var(--red)" /> : <Play size={15} color="#1faa55" />}
              <span>{autoPlay ? "Auto-Demo: ON" : "Auto-Demo: OFF"}</span>
            </button>
          </div>

          {/* Trust Pillars */}
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <Banknote size={16} color="var(--red)" />
              <span>Cash on Delivery</span>
            </div>
            <div className={styles.trustItem}>
              <Truck size={16} color="var(--red)" />
              <span>All 25 Districts</span>
            </div>
            <div className={styles.trustItem}>
              <ShieldCheck size={16} color="var(--red)" />
              <span>1-Year Direct Warranty</span>
            </div>
            <div className={styles.trustItem}>
              <Zap size={16} color="var(--red)" />
              <span>1.2s Fast Printing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Animated Retail Counter Station */}
        <div className={styles.rightCol}>
          {/* Outer Dimensional Stage */}
          <div className={styles.stageFrame}>
            {/* Stage Mode Tabs */}
            <div className={styles.stageHeader}>
              <div className={styles.stageTabs}>
                <button
                  type="button"
                  className={`${styles.stageTab} ${activeTab === "terminal" ? styles.stageTabActive : ""}`}
                  onClick={() => setActiveTab("terminal")}
                >
                  <Tv size={14} />
                  <span>Live Counter Terminal</span>
                </button>
                <button
                  type="button"
                  className={`${styles.stageTab} ${activeTab === "hardware" ? styles.stageTabActive : ""}`}
                  onClick={() => setActiveTab("hardware")}
                >
                  <Package size={14} />
                  <span>Certified Hardware 4-Piece</span>
                </button>
              </div>

              <div className={styles.liveTillIndicator}>
                <span className={styles.tillPulse} />
                <span>Till 01 · Active</span>
              </div>
            </div>

            {/* TAB 1: Live Interactive Terminal & Equipment */}
            {activeTab === "terminal" ? (
              <div className={styles.terminalContainer}>
                {/* Simulated Windows Touch POS Screen */}
                <div className={styles.screenShell}>
                  <div className={styles.screenTopBar}>
                    <div className={styles.windowDots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <div className={styles.screenBarTitle}>
                      <span>MariaPoS Counter 01</span>
                      <span className={styles.offlineTag}>
                        <Wifi size={10} />
                        Offline-First Active
                      </span>
                    </div>
                    <span className={styles.shiftTag}>Shift #14</span>
                  </div>

                  {/* Cart Items List */}
                  <div className={styles.cartBody}>
                    <div className={styles.cartHeaderRow}>
                      <span>ITEM / DESCRIPTION</span>
                      <span style={{ textAlign: "right" }}>AMOUNT</span>
                    </div>

                    <div className={styles.cartItemsScroll}>
                      {cart.map((item) => (
                        <div key={item.id} className={styles.cartItemRow}>
                          <div className={styles.itemMeta}>
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemCode}>
                              {item.code} · {item.qty} × {formatLkr(item.price)}
                            </span>
                          </div>
                          <span className={styles.itemTotal}>
                            {formatLkr(item.qty * item.price)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Laser Scanner Sweep Beam Animation */}
                    {isScanning && (
                      <div className={styles.laserScanEffect}>
                        <div className={styles.laserRedLine} />
                        <span className={styles.laserBarcodeLabel}>
                          <Barcode size={16} />
                          <span>Reading EAN-13 Barcode...</span>
                        </span>
                      </div>
                    )}

                    {/* Subtotal & Action Bar */}
                    <div className={styles.cartFooterBar}>
                      <div className={styles.totalBlock}>
                        <span className={styles.totalLabel}>
                          NET TOTAL ({totalCount} Items)
                        </span>
                        <span className={styles.totalValue}>{formatLkr(subtotal)}</span>
                      </div>

                      <div className={styles.interactiveButtons}>
                        <button
                          type="button"
                          className={styles.simScanBtn}
                          onClick={triggerScan}
                          disabled={isScanning}
                          title="Simulate scanning a barcode"
                        >
                          <ScanBarcode size={15} />
                          <span>{isScanning ? "Scanning..." : "Scan Item"}</span>
                        </button>

                        <button
                          type="button"
                          className={styles.simTenderBtn}
                          onClick={triggerTender}
                          title="Simulate tender payment & print bill"
                        >
                          <Printer size={15} />
                          <span>Tender &amp; Bill</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-equipment: Thermal Printer Slip + Cash Drawer Ejection */}
                <div className={styles.subEquipmentRow}>
                  {/* Thermal Printer with Animated Receipt Slip */}
                  <div className={styles.printerCard}>
                    <div className={styles.printerHead}>
                      <Printer size={16} color="var(--red)" />
                      <span>Xprinter 80mm High-Speed</span>
                    </div>

                    <div className={styles.printerSlot}>
                      <div
                        className={`${styles.receiptPaperSlip} ${
                          isTendered ? styles.receiptSlipPrinted : ""
                        }`}
                      >
                        <div className={styles.slipHeader}>MARIAPOS COUNTER</div>
                        <div className={styles.slipDate}>
                          {new Date().toLocaleDateString("en-GB")} 12:45
                        </div>
                        <div className={styles.slipDivider}>- - - - - - - - -</div>
                        <div className={styles.slipItemRow}>
                          <span>ITEMS ({totalCount}):</span>
                          <span>{formatLkr(subtotal)}</span>
                        </div>
                        <div className={styles.slipBoldTotal}>
                          PAID CASH: {formatLkr(subtotal)}
                        </div>
                        <div className={styles.slipSinhala}>ස්තූතියි නැවත එන්න!</div>
                      </div>
                    </div>
                  </div>

                  {/* Cash Drawer with Pop-out Action */}
                  <div
                    className={`${styles.drawerCard} ${
                      isDrawerPopped ? styles.drawerPoppedOut : ""
                    }`}
                  >
                    <div className={styles.drawerFront}>
                      <div className={styles.drawerKeyhole} />
                      <div className={styles.drawerHandle} />
                      <span className={styles.drawerStatus}>
                        {isDrawerPopped ? "⚡ 24V Pulse Kicked Open" : "RJ11 Cash Drawer (Locked)"}
                      </span>
                    </div>
                    {isDrawerPopped && (
                      <div className={styles.drawerInterior}>
                        <div className={styles.cashSlot}>5000</div>
                        <div className={styles.cashSlot}>1000</div>
                        <div className={styles.cashSlot}>500</div>
                        <div className={styles.coinCup}>Coins</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* TAB 2: Certified Hardware 4-Piece Suite */
              <div className={styles.hardwareGrid}>
                <div className={styles.hwPiece}>
                  <div className={styles.hwImgWrap}>
                    <Image src={pri2915} alt="Touch POS Terminal" fill className={styles.hwImg} />
                  </div>
                  <span className={styles.hwCode}>PRI2915</span>
                  <strong className={styles.hwName}>15.6&quot; Capacitive Touch Terminal</strong>
                  <span className={styles.hwPrice}>Rs. 110,000</span>
                </div>

                <div className={styles.hwPiece}>
                  <div className={styles.hwImgWrap}>
                    <Image src={pri2124} alt="80mm Thermal Printer" fill className={styles.hwImg} />
                  </div>
                  <span className={styles.hwCode}>PRI2124</span>
                  <strong className={styles.hwName}>Xprinter 80T Thermal Printer</strong>
                  <span className={styles.hwPrice}>Rs. 23,500</span>
                </div>

                <div className={styles.hwPiece}>
                  <div className={styles.hwImgWrap}>
                    <Image src={sca2127} alt="Omnidirectional Barcode Scanner" fill className={styles.hwImg} />
                  </div>
                  <span className={styles.hwCode}>SCA2127</span>
                  <strong className={styles.hwName}>Desktop 1D/2D Barcode Scanner</strong>
                  <span className={styles.hwPrice}>Rs. 16,800</span>
                </div>

                <div className={styles.hwPiece}>
                  <div className={styles.hwImgWrap}>
                    <Image src={acc1639} alt="Cash Drawer" fill className={styles.hwImg} />
                  </div>
                  <span className={styles.hwCode}>ACC1639</span>
                  <strong className={styles.hwName}>Heavy Duty 5-Pin Steel Cash Drawer</strong>
                  <span className={styles.hwPrice}>Rs. 9,450</span>
                </div>
              </div>
            )}

            {/* Floating Push Notifications Alert Notification */}
            {showTelegramAlert && (
              <div className={styles.floatingTelegramAlert}>
                <div className={styles.telegramIcon}>
                  <Bell size={16} />
                </div>
                <div className={styles.telegramCopy}>
                  <strong>Instant Push Notification</strong>
                  <span>Bill #LK-8429 paid in Cash: {formatLkr(subtotal)}</span>
                </div>
              </div>
            )}

            {/* Floating Trust Badge on Top-Right of Stage */}
            <div className={styles.floatingDistrictBadge}>
              <span className={styles.floatingFlag}>🇱🇰</span>
              <div>
                <strong>Island-Wide COD</strong>
                <span>Dispatched to all 25 districts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
