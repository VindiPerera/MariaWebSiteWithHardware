"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Check } from "lucide-react";
import { PosBundle, formatLkr } from "@/lib/hardwareCatalog";
import { useCart } from "@/lib/cartContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./PosBundleCard.module.css";

type Props = {
  bundle: PosBundle;
  featured?: boolean;
};

export function PosBundleCard({ bundle, featured }: Props) {
  const { addItem, items } = useCart();
  const [addedAnim, setAddedAnim] = useState(false);

  const isInCart = items.some((i) => i.code === bundle.id);

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
          <span>{bundle.badge}</span>
        </span>
      </div>

      <div className={styles.header}>
        <h3 className={styles.name}>{bundle.name}</h3>
        <p className={styles.tagline}>{bundle.tagline}</p>
      </div>

      {/* Pricing */}
      <div className={styles.priceBox}>
        <div className={styles.priceRow}>
          <strong className={styles.totalPrice}>{formatLkr(bundle.totalPriceLkr)}</strong>
          <span className={styles.regularPrice}>{formatLkr(bundle.regularPriceLkr)}</span>
        </div>
        <span className={styles.savingsTag}>{bundle.highlight}</span>
      </div>

      {/* Software license included */}
      <div className={styles.softwareIncluded}>
        <CheckCircle2 size={16} color="#16a34a" />
        <span>{bundle.softwareLicense}</span>
      </div>

      {/* Included items */}
      <div className={styles.itemsList}>
        <span className={styles.itemsTitle}>Hardware Components Included:</span>
        {bundle.items.map((item) => (
          <div key={item.code} className={styles.itemRow}>
            <span className={styles.itemQty}>{item.qty}×</span>
            <span className={styles.itemCode}>{item.code}</span>
            <span className={styles.itemName}>{item.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.targetAudience}>
        <strong>Best for:</strong> {bundle.recommendedFor}
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
              <span>Bundle Added!</span>
            </>
          ) : isInCart ? (
            <>
              <Check size={16} />
              <span>Bundle in Quote (+1)</span>
            </>
          ) : (
            <>
              <span>Add Bundle to Quote</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>

        <a href={whatsappDirectHref} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          <WhatsAppIcon size={16} />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
