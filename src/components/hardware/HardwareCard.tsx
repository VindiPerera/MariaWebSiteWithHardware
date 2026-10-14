"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Plus, Check, ShieldCheck, Zap, ArrowRight, Info } from "lucide-react";
import { HardwareItem, formatLkr } from "@/lib/hardwareCatalog";
import { useCart } from "@/lib/cartContext";
import { categoryLabelSi } from "@/lib/hardwareCatalogSi";
import { getProductPhoto } from "@/lib/productImages";
import { HardwareDeviceVisual } from "./HardwareDeviceVisual";
import styles from "./HardwareCard.module.css";
import { useLang } from "@/lib/i18n";

type Props = {
  item: HardwareItem;
  featured?: boolean;
};

export function HardwareCard({ item, featured }: Props) {
  const { t } = useLang();
  const { addItem, items } = useCart();
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  const isInCart = items.some((i) => i.code === item.code);
  const photo = getProductPhoto(item.code);

  const handleAdd = () => {
    addItem(item);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1500);
  };

  return (
    <>
      <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
        {/* Header badges */}
        <div className={styles.cardHeader}>
          <div className={styles.codeGroup}>
            <span className={styles.itemCode}>{item.code}</span>
            <span className={styles.categoryLabel}>{t(item.categoryLabel, categoryLabelSi[item.category])}</span>
          </div>

          {item.inStock ? (
            <span className={styles.inStockBadge}>
              <span className={styles.inStockDot} />
              {t("In Stock", "දැන්ම ලබාගත හැක")}
            </span>
          ) : (
            <span className={styles.preorderBadge}>
              <span className={styles.preorderDot} />
              {t("On Request", "Order කළාම ලැබේ")}
            </span>
          )}
        </div>

        {/* Visual Render */}
        <Link href={`/hardware/${item.slug}`} className={styles.visualWrapper} aria-label={`View ${item.name} details`}>
          {photo ? (
            <div className={styles.photoBox}>
              <Image
                src={photo}
                alt={item.name}
                className={styles.cardRealImg}
                priority={featured}
                sizes="(max-width: 600px) 100vw, 300px"
              />
            </div>
          ) : (
            <HardwareDeviceVisual code={item.code} category={item.category} name={item.name} />
          )}
          {item.badge && <span className={styles.specialBadge}>{item.badge}</span>}
        </Link>


        {/* Info */}
        <div className={styles.cardContent}>
          <Link href={`/hardware/${item.slug}`} className={styles.titleLink}>
            <h3 className={styles.title}>{item.name}</h3>
          </Link>
          <p className={styles.subtitle}>{item.subtitle}</p>

          {/* Quick specs pills */}
          <div className={styles.specsPills}>
            {item.specs.slice(0, 3).map((spec) => (
              <span key={spec.label} className={styles.specPill}>
                <strong>{spec.label}:</strong> {spec.value}
              </span>
            ))}
          </div>

          <div className={styles.warrantyRow}>
            <ShieldCheck size={14} color="var(--red)" />
            <span>{item.warranty} · {t("MariaPoS Driver Verified", "MariaPoS Driver Verified")}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className={styles.cardFooter}>
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>{t("Unit Price (LKR)", "එකක මිල (LKR)")}</span>
            <strong className={styles.priceValue}>{formatLkr(item.price)}</strong>
          </div>

          <div className={styles.btnGroup}>
            <Link
              href={`/hardware/${item.slug}`}
              className={styles.detailsBtn}
              aria-label={`View details for ${item.name}`}
            >
              {t("Details", "විස්තර")}
            </Link>

            <button
              type="button"
              className={`${styles.addBtn} ${addedAnim || isInCart ? styles.addBtnActive : ""}`}
              onClick={handleAdd}
              aria-label={`Add ${item.name} to quote`}
            >
              {addedAnim ? (
                <>
                  <Check size={16} />
                  <span>{t("Added!", "එකතු වුණා!")}</span>
                </>
              ) : isInCart ? (
                <>
                  <Check size={16} />
                  <span>{t("In Quote (+1)", "Quote එකේ ඇත (+1)")}</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>{t("Add to Quote", "Quote එකට එකතු කරන්න")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Specifications & Details Modal */}
      {showSpecsModal && (
        <div className={styles.modalOverlay} onClick={() => setShowSpecsModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.itemCode}>{item.code}</span>
                <h3 className={styles.modalTitle}>{item.name}</h3>
                <span className={styles.categoryLabel}>{item.categoryLabel}</span>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setShowSpecsModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDesc}>{item.description}</p>

              <h4 className={styles.modalSectionTitle}>{t("Technical Specifications", "Technical Specifications")}</h4>
              <div className={styles.modalSpecsGrid}>
                {item.specs.map((spec) => (
                  <div key={spec.label} className={styles.modalSpecRow}>
                    <span className={styles.modalSpecLabel}>{spec.label}</span>
                    <span className={styles.modalSpecVal}>{spec.value}</span>
                  </div>
                ))}
              </div>

              <h4 className={styles.modalSectionTitle}>{t("Included Features", "ඇතුළත් විශේෂාංග")}</h4>
              <ul className={styles.featuresList}>
                {item.features.map((feat) => (
                  <li key={feat}>
                    <Zap size={13} color="var(--red)" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {item.recommendedFor && (
                <div className={styles.recommendedFor}>
                  <strong>{t("Recommended for:", "ගැලපෙන්නේ:")}</strong> {item.recommendedFor.join(", ")}
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <div>
                <span className={styles.priceLabel}>{t("Price", "මිල")}</span>
                <strong className={styles.modalPrice}>{formatLkr(item.price)}</strong>
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  handleAdd();
                  setShowSpecsModal(false);
                }}
              >
                <span>{t("Add to Hardware Quote", "Hardware Quote එකට එකතු කරන්න")}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
