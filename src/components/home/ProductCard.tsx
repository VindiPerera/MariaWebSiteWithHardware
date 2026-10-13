"use client";

import Image from "next/image";
import Link from "next/link";
import { Banknote, MessageCircle, Truck } from "lucide-react";
import { formatLkr, type ShopProduct } from "@/lib/shop";
import styles from "./ProductCard.module.css";
import { useLang } from "@/lib/i18n";

export function ProductCard({ product }: { product: ShopProduct }) {
  const { t } = useLang();
  const stockClass = product.inStock ? styles.inStock : styles.onOrder;
  return (
    <article className={styles.card}>
      <Link href={product.href} className={styles.media}>
        <Image src={product.img} alt={product.name} className={styles.img} sizes="260px" />
        <span className={`${styles.stock} ${stockClass}`}>
          <span className={styles.dot} />
          {product.inStock ? t("In stock", "Stock එකේ තියෙනවා") : t("Available on order", "Order කළාම ලබාගත හැක")}
        </span>
      </Link>

      <div className={styles.info}>
        <div className={styles.cat}>{product.catName}</div>
        <Link href={product.href} className={styles.name}>
          {product.name}
        </Link>
        <div className={styles.specs}>{product.keySpecText}</div>
        <div className={styles.tags}>
          <span className={styles.tag}>
            <Banknote size={13} color="var(--red)" />
            COD
          </span>
          <span className={styles.tag}>
            <Truck size={13} color="var(--red)" />
            {t("Island-wide", "මුළු රටටම")}
          </span>
        </div>
        <div className={styles.price}>{formatLkr(product.price)}</div>
      </div>

      <div className={styles.actions}>
        <Link href={product.href} className={styles.details}>
          {t("View details", "විස්තර බලන්න")}
        </Link>
        <a href={product.waOrder} target="_blank" rel="noopener" className={styles.order}>
          <MessageCircle size={16} />
          {t("Order", "Order කරන්න")}
        </a>
      </div>
    </article>
  );
}
