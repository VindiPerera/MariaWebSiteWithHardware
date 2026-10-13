"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Banknote,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Package,
  Cable,
  FileText,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Sparkles,
  Layers,
  Copy,
  Zap,
  RotateCw,
  MapPin,
} from "lucide-react";
import { HardwareItem, formatLkr, hardwareCatalog } from "@/lib/hardwareCatalog";
import { HardwareDeviceVisual } from "@/components/hardware/HardwareDeviceVisual";
import { HardwareCard } from "@/components/hardware/HardwareCard";
import { useCart } from "@/lib/cartContext";
import { waLink } from "@/lib/shop";
import { getProductPhotos } from "@/lib/productImages";
import styles from "./ProductDetail.module.css";

const sriLankaDistricts = [
  { name: "Colombo", time: "Next Day (within 24 hrs)" },
  { name: "Gampaha", time: "Next Day (within 24 hrs)" },
  { name: "Kalutara", time: "1-2 Days" },
  { name: "Kandy", time: "1-2 Days" },
  { name: "Galle", time: "1-2 Days" },
  { name: "Kurunegala", time: "1-2 Days" },
  { name: "Jaffna", time: "2-3 Days" },
  { name: "Matara", time: "1-2 Days" },
  { name: "Ratnapura", time: "1-2 Days" },
  { name: "Badulla", time: "2-3 Days" },
];

type Props = {
  product: HardwareItem;
};

export function ProductDetailClient({ product }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(sriLankaDistricts[0]);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const { addItem, items } = useCart();

  const photos = getProductPhotos(product.code);

  type GalleryTab =
    | { type: "photo"; label: string; src: (typeof photos)[number] }
    | { type: "schematic"; label: string }
    | { type: "ports"; label: string };

  // Real product photos take priority; the schematic/ports fallback tabs only
  // appear when a product has no real photos to show.
  const galleryTabs: GalleryTab[] =
    photos.length > 0
      ? photos.map((src, i) => ({
          type: "photo" as const,
          label: photos.length > 1 ? `Photo ${i + 1}` : "Photo",
          src,
        }))
      : [
          { type: "schematic" as const, label: "Schematic" },
          { type: "ports" as const, label: "Ports" },
        ];

  const activeGalleryTab = galleryTabs[activeTab] ?? galleryTabs[0];

  const isInCart = items.some((i) => i.code === product.code);

  const totalPrice = product.price * qty;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(product.code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  // Mouse move 3D tilt effect on the image card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const waOrderText = `Hi MariaPoS, I'd like to order: ${qty}x ${product.name} (${product.code}) for ${formatLkr(
    totalPrice
  )}. Delivery to ${selectedDistrict.name} (Cash on Delivery). Shop name: ___`;

  const waAskText = `Hi MariaPoS, I have a question about ${product.name} (${product.code}): ___`;

  // Related products
  const relatedProducts = hardwareCatalog
    .filter((item) => item.code !== product.code)
    .filter((item) =>
      product.category === "touch-pos"
        ? item.category === "printers" || item.category === "scanners"
        : item.category === product.category || item.category === "consumables"
    )
    .slice(0, 3);

  return (
    <article className={styles.page}>
      {/* Hero Product Studio */}
      <section className={styles.heroSection}>
        <div className={styles.ambientBlob} aria-hidden="true" />

        <div className={styles.inner}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/hardware" className={styles.breadcrumbLink}>
              Hardware
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbLink}>{product.categoryLabel}</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{product.code}</span>
          </nav>

          <div className={styles.productGrid}>
            {/* Gallery Column: 3D Stage + Inspection Tabs */}
            <div className={styles.galleryCol}>
              <div
                className={styles.mainImageCard}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg)`,
                }}
              >
                {/* Floating Item Code with Copy Action */}
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className={styles.badgeTopLeft}
                  title="Click to copy item code"
                >
                  <Sparkles size={13} color="var(--red)" />
                  <span>{product.code}</span>
                  {codeCopied ? (
                    <Check size={12} color="#1faa55" />
                  ) : (
                    <Copy size={12} color="#71717a" />
                  )}
                  {codeCopied && <span className={styles.copiedTooltip}>Copied!</span>}
                </button>

                {/* Stock Status Pill */}
                <div className={styles.stockBadge}>
                  <span className={product.inStock ? styles.stockDotLive : styles.stockDotAmber} />
                  <span>
                    {product.inStock ? "In Stock · Islandwide Delivery" : "Available on Order"}
                  </span>
                </div>

                {/* Main Visual Display */}
                {activeGalleryTab.type === "photo" ? (
                  <div className={styles.photoContainer}>
                    <Image
                      src={activeGalleryTab.src}
                      alt={product.name}
                      className={styles.productPhoto}
                      priority
                      sizes="(max-width: 768px) 90vw, 520px"
                    />
                  </div>
                ) : activeGalleryTab.type === "schematic" ? (
                  <div className={styles.visualMockupWrap}>
                    <HardwareDeviceVisual
                      code={product.code}
                      category={product.category}
                      name={product.name}
                    />
                  </div>
                ) : (
                  <div className={styles.portsInspectionCard}>
                    <Cable size={36} color="var(--red)" />
                    <h4>Hardware Interface &amp; Connectivity</h4>
                    <p>
                      Pre-wired with standard Sri Lankan RJ11/RJ12 printer kick interface and USB 2.0/3.0.
                      Plug-and-play with MariaPoS Windows drivers.
                    </p>
                    <div className={styles.portsTags}>
                      <span>RJ11 24V Kick</span>
                      <span>USB Plug &amp; Play</span>
                      <span>12V/24V Power Support</span>
                    </div>
                  </div>
                )}

                {/* Driver Compatibility Stamp */}
                <div className={styles.driverStamp}>
                  <Zap size={13} color="#1faa55" />
                  <span>MariaPoS Plug &amp; Play Tested</span>
                </div>
              </div>

              {/* Interactive Visualizer Tabs */}
              <div className={styles.thumbnailRow}>
                {galleryTabs.map((tab, i) => (
                  <button
                    key={`${tab.type}-${i}`}
                    type="button"
                    className={`${styles.thumbBtn} ${activeTab === i ? styles.thumbBtnActive : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {tab.type === "photo" ? (
                      <>
                        <Image src={tab.src} alt="" className={styles.thumbImg} sizes="80px" />
                        <span className={styles.thumbName}>{tab.label}</span>
                      </>
                    ) : tab.type === "schematic" ? (
                      <div className={styles.thumbLabel}>
                        <Layers size={17} color="var(--red)" />
                        <span>Schematic</span>
                      </div>
                    ) : (
                      <div className={styles.thumbLabel}>
                        <Cable size={17} color="#0284c7" />
                        <span>Ports</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Details Column: Pricing, Stepper, Order Hub */}
            <div className={styles.detailsCol}>
              {/* Category & Badge */}
              <div className={styles.eyebrowRow}>
                <span className={styles.itemCodeTag}>{product.code}</span>
                <span>{product.categoryLabel}</span>
              </div>

              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.subtitle}>{product.description || product.subtitle}</p>

              {/* Price & Quantity Calculation Hub */}
              <div className={styles.priceCalculationCard}>
                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.priceLabel}>Price per Unit (LKR)</span>
                    <div className={styles.priceAmount}>{formatLkr(product.price)}</div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className={styles.qtyStepper}>
                    <span className={styles.qtyLabel}>Quantity:</span>
                    <div className={styles.stepperControls}>
                      <button
                        type="button"
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        disabled={qty <= 1}
                        className={styles.stepperBtn}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className={styles.stepperVal}>{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        className={styles.stepperBtn}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {qty > 1 && (
                  <div className={styles.multiQtyTotalRow}>
                    <span>Total for {qty} units:</span>
                    <strong>{formatLkr(totalPrice)}</strong>
                  </div>
                )}

                <div className={styles.codReassurance}>
                  <Banknote size={15} color="#1faa55" />
                  <span>Cash on Delivery accepted · Pay courier in cash</span>
                </div>
              </div>

              {/* District Delivery Timeline Calculator */}
              <div className={styles.deliveryEstimator}>
                <div className={styles.estimatorHeader}>
                  <MapPin size={16} color="var(--red)" />
                  <span>Island-Wide Delivery Timeline:</span>
                </div>
                <div className={styles.districtChips}>
                  {sriLankaDistricts.map((d) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => setSelectedDistrict(d)}
                      className={`${styles.districtChip} ${
                        selectedDistrict.name === d.name ? styles.districtChipActive : ""
                      }`}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
                <div className={styles.estimateResult}>
                  <Truck size={15} color="#0284c7" />
                  <span>
                    Delivering to <strong>{selectedDistrict.name}</strong>: {selectedDistrict.time} via registered courier.
                  </span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className={styles.ctaRow}>
                <a
                  href={waLink(waOrderText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waOrderBtn}
                >
                  <MessageCircle size={20} />
                  <span>
                    Order {qty > 1 ? `${qty} Units ` : ""}on WhatsApp (Cash on Delivery)
                  </span>
                </a>

                <div className={styles.actionSecondaryRow}>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`${styles.addToQuoteBtn} ${
                      added || isInCart ? styles.addToQuoteBtnAdded : ""
                    }`}
                  >
                    {added || isInCart ? <Check size={18} /> : <Plus size={18} />}
                    <span>
                      {added ? "Added to Quote Cart" : isInCart ? "In Quote Cart (+1)" : "Add to Quote Cart"}
                    </span>
                  </button>

                  <a
                    href={waLink(waAskText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.askQuestionLink}
                  >
                    <span>Technical Question?</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Key Features Bullet List */}
              {product.features && product.features.length > 0 && (
                <div className={styles.featureList}>
                  {product.features.map((feat, i) => (
                    <div key={i} className={styles.featureItem}>
                      <CheckCircle2 size={17} className={styles.featureIcon} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sri Lanka Commerce Trust Grid */}
              <div className={styles.trustGrid}>
                <div className={styles.trustCard}>
                  <Banknote size={20} className={styles.trustIcon} />
                  <div>
                    <div className={styles.trustTitle}>Cash on Delivery</div>
                    <div className={styles.trustSubtitle}>Pay courier in cash upon arrival</div>
                  </div>
                </div>

                <div className={styles.trustCard}>
                  <Truck size={20} className={styles.trustIcon} />
                  <div>
                    <div className={styles.trustTitle}>All 25 Districts</div>
                    <div className={styles.trustSubtitle}>Island-wide dispatch from Colombo</div>
                  </div>
                </div>

                <div className={styles.trustCard}>
                  <ShieldCheck size={20} className={styles.trustIcon} />
                  <div>
                    <div className={styles.trustTitle}>JAAN Warranty</div>
                    <div className={styles.trustSubtitle}>{product.warranty || "1 Year Direct Replacement"}</div>
                  </div>
                </div>

                <div className={styles.trustCard}>
                  <CheckCircle2 size={20} className={styles.trustIcon} />
                  <div>
                    <div className={styles.trustTitle}>MariaPoS Ready</div>
                    <div className={styles.trustSubtitle}>Pre-configured drivers installed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className={styles.specsSection}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Technical Blueprint</span>
            <h2 className={styles.sectionTitle}>Full Hardware Specifications</h2>
            <p className={styles.sectionLead}>
              Detailed engineering parameters for {product.name} ({product.code}).
            </p>
          </div>

          <div className={styles.specsGrid}>
            <div className={styles.specTableWrapper}>
              <table className={styles.specTable}>
                <tbody>
                  <tr className={styles.specRow}>
                    <th className={styles.specKey}>Product Code</th>
                    <td className={styles.specVal}>
                      <strong>{product.code}</strong>
                    </td>
                  </tr>
                  <tr className={styles.specRow}>
                    <th className={styles.specKey}>Equipment Category</th>
                    <td className={styles.specVal}>{product.categoryLabel}</td>
                  </tr>
                  <tr className={styles.specRow}>
                    <th className={styles.specKey}>Direct Commercial Warranty</th>
                    <td className={styles.specVal}>{product.warranty}</td>
                  </tr>
                  <tr className={styles.specRow}>
                    <th className={styles.specKey}>Operating System Support</th>
                    <td className={styles.specVal}>
                      Windows 11 / Windows 10 / Windows 7 / POSReady
                    </td>
                  </tr>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={styles.specRow}>
                      <th className={styles.specKey}>{spec.label}</th>
                      <td className={styles.specVal}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* "What's in the Box" Card */}
            <div className={styles.boxContentsCard}>
              <div className={styles.boxCardHeader}>
                <Package size={22} color="var(--red)" />
                <h3 className={styles.boxCardTitle}>Verified Package Contents</h3>
              </div>
              <p className={styles.boxCardSubtitle}>
                Every unit is sealed and certified by JAAN Network Colombo before dispatch.
              </p>

              <div className={styles.boxChecklist}>
                <div className={styles.boxCheckItem}>
                  <CheckCircle2 size={16} color="#1faa55" />
                  <span>1× {product.name} hardware unit</span>
                </div>
                <div className={styles.boxCheckItem}>
                  <CheckCircle2 size={16} color="#1faa55" />
                  <span>Connecting Cables (RJ11, USB or Power Cable)</span>
                </div>
                <div className={styles.boxCheckItem}>
                  <CheckCircle2 size={16} color="#1faa55" />
                  <span>Official Sri Lankan Warranty Card (1 Year)</span>
                </div>
                <div className={styles.boxCheckItem}>
                  <CheckCircle2 size={16} color="#1faa55" />
                  <span>Quick Setup &amp; MariaPoS Integration Guide</span>
                </div>
              </div>

              <div className={styles.boxDriverNote}>
                <Zap size={16} color="var(--red)" />
                <span>
                  Free remote setup assistance on WhatsApp available for every hardware purchase.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products & Full Set Combo Nudge */}
      <section className={styles.relatedSection}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Counter Pairing</span>
            <h2 className={styles.sectionTitle}>
              Works Best With Complementary POS Devices
            </h2>
          </div>

          <div className={styles.relatedGrid}>
            {relatedProducts.map((rel) => (
              <HardwareCard key={rel.code} item={rel} />
            ))}

            {/* Software License Nudge Card */}
            <Link href="/pricing" className={styles.bundleNudgeCard}>
              <span className={styles.bundleBadge}>MariaPoS Software</span>
              <div className={styles.bundleTitle}>Pair with MariaPoS Software License</div>
              <p className={styles.bundleLead}>
                Offline billing, FIFO batch stock, SMS e-bills, and push sales alerts ready to run on this device.
              </p>
              <span className={styles.bundleLinkText}>
                View Software Plans
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Order Bar */}
      <div className={styles.mobileStickyBar}>
        <div className={styles.mobilePriceCol}>
          <span className={styles.mobilePrice}>{formatLkr(totalPrice)}</span>
          <span className={styles.mobileSub}>{qty} unit · COD Island-wide</span>
        </div>
        <a
          href={waLink(waOrderText)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileWaBtn}
        >
          <MessageCircle size={18} />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
