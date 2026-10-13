"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Check } from "lucide-react";
import { PosBundle, formatLkr } from "@/lib/hardwareCatalog";
import { useCart } from "@/lib/cartContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./PosBundleCard.module.css";
import { useLang } from "@/lib/i18n";

/** Sinhala + English text for the bundle cards, keyed by bundle id. */
const bundleSi: Record<string, { name: string; badge: string; tagline: string; softwareLicense: string; highlight: string; recommendedFor: string }> = {
  "bundle-starter": {
    name: "Starter Retail Counter Pack",
    badge: "වැඩිපුරම තෝරාගන්නා Combo",
    tagline: "Plug in කරලා bill කරන්න ready වන සම්පූර්ණ hardware + software setup එකක්",
    softwareLicense: "අවුරුදු 1ක MariaPoS Full License ($147 ඇතුළත්)",
    highlight: "Rs. 15,100ක් ඉතිරියි + නොමිලේ Remote Installation සහ Staff Training",
    recommendedFor: "අලුතින් පටන් ගන්න grocery stores, pharmacies, boutique retail සහ bakery shops.",
  },
  "bundle-supermarket": {
    name: "Supermarket High-Speed Dual-Screen Pack",
    badge: "Flagship Heavy Duty",
    tagline: "Hands-free desktop scanning සහ bill counter සහිත Dual screen customer experience එකක්",
    softwareLicense: "අවුරුදු 2ක MariaPoS Full License ($235.20 ඇතුළත්)",
    highlight: "Rs. 28,500ක් ඉතිරියි + බස්නාහිර පළාතේ Priority On-Site Onboarding",
    recommendedFor: "High-volume supermarkets, කාර්යබහුල retail hubs, wholesalers සහ marts.",
  },
  "bundle-mobile": {
    name: "Van Sales & Mobile Delivery POS Pack",
    badge: "ගමනට සූදානම්",
    tagline: "Delivery trucks සහ field reps ලාට portable Bluetooth billing pack එකක්",
    softwareLicense: "අවුරුදු 1ක MariaPoS Full License ($147 ඇතුළත්)",
    highlight: "Rs. 7,400ක් ඉතිරියි + ඕනෑම laptop/tablet හෝ mobile device එකකට connect වෙනවා",
    recommendedFor: "Distribution vans, delivery drivers, pop-up stalls සහ field sales teams.",
  },
};

type Props = {
  bundle: PosBundle;
  featured?: boolean;
};

export function PosBundleCard({ bundle, featured }: Props) {
  const { t } = useLang();
  const { addItem, items } = useCart();
  const [addedAnim, setAddedAnim] = useState(false);

  const isInCart = items.some((i) => i.code === bundle.id);
  const si = bundleSi[bundle.id];

  const handleAdd = () => {
    addItem(bundle);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1500);
  };

  const whatsappDirectHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hello! I am interested in ordering the *${bundle.name}* (Price: ${formatLkr(bundle.totalPriceLkr)}). Please provide delivery and installation details.`
  )}`;

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {/* Ribbon */}
      <div className={styles.badgeWrapper}>
        <span className={styles.badge}>
          <Sparkles size={13} color="#ffffff" />
          <span>{t(bundle.badge, si?.badge)}</span>
        </span>
      </div>

      <div className={styles.header}>
        <h3 className={styles.name}>{t(bundle.name, si?.name)}</h3>
        <p className={styles.tagline}>{t(bundle.tagline, si?.tagline)}</p>
      </div>

      {/* Pricing */}
      <div className={styles.priceBox}>
        <div className={styles.priceRow}>
          <strong className={styles.totalPrice}>{formatLkr(bundle.totalPriceLkr)}</strong>
          <span className={styles.regularPrice}>{formatLkr(bundle.regularPriceLkr)}</span>
        </div>
        <span className={styles.savingsTag}>{t(bundle.highlight, si?.highlight)}</span>
      </div>

      {/* Software license included */}
      <div className={styles.softwareIncluded}>
        <CheckCircle2 size={16} color="#16a34a" />
        <span>{t(bundle.softwareLicense, si?.softwareLicense)}</span>
      </div>

      {/* Included items */}
      <div className={styles.itemsList}>
        <span className={styles.itemsTitle}>{t("Hardware Components Included:", "ඇතුළත් Hardware Components:")}</span>
        {bundle.items.map((item) => (
          <div key={item.code} className={styles.itemRow}>
            <span className={styles.itemQty}>{item.qty}×</span>
            <span className={styles.itemCode}>{item.code}</span>
            <span className={styles.itemName}>{item.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.targetAudience}>
        <strong>{t("Best for:", "වඩාත්ම ගැලපෙන්නේ:")}</strong> {t(bundle.recommendedFor, si?.recommendedFor)}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.addBtn} ${addedAnim || isInCart ? styles.addBtnActive : ""}`}
          onClick={handleAdd}
        >
          {addedAnim ? (
            <>
              <Check size={16} />
              <span>{t("Bundle Added!", "Bundle එක Add වුණා!")}</span>
            </>
          ) : isInCart ? (
            <>
              <Check size={16} />
              <span>{t("Bundle in Quote (+1)", "Bundle එක Quote එකේ ඇත (+1)")}</span>
            </>
          ) : (
            <>
              <span>{t("Add Bundle to Quote", "Bundle එක Quote එකට Add කරන්න")}</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>

        <a href={whatsappDirectHref} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          <WhatsAppIcon size={16} />
          <span>{t("Order via WhatsApp", "WhatsApp එකෙන් Order කරන්න")}</span>
        </a>
      </div>
    </div>
  );
}
