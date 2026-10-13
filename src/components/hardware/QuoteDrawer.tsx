"use client";

import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { formatLkr } from "@/lib/hardwareCatalog";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./QuoteDrawer.module.css";
import { useLang } from "@/lib/i18n";

export function QuoteDrawer() {
  const { t } = useLang();
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQty,
    clearCart,
    totalAmount,
    totalCount,
    getWhatsAppOrderUrl,
  } = useCart();

  const { lang } = useLang();
  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  if (!isDrawerOpen) return null;

  const whatsappHref = getWhatsAppOrderUrl(customerName, customerCity);

  return (
    <div className={styles.overlay} onClick={closeDrawer}>
      <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleRow}>
            <span className={styles.headerIcon}>
              <ShoppingBag size={20} color="var(--red)" />
            </span>
            <div>
              <h3 className={styles.title}>{t("Hardware Quote & Order", "Hardware Quote සහ Order")}</h3>
              <p className={styles.subtitle}>
                {lang === "ta" ? `${totalCount} devices தேர்ந்தெடுக்கப்பட்டுள்ளன` : lang === "si" ? `Devices ${totalCount}ක් තෝරාගෙන` : `${totalCount} ${totalCount === 1 ? "device" : "devices"} selected`}
              </p>
            </div>
          </div>
          <button type="button" className={styles.closeBtn} onClick={closeDrawer} aria-label={t("Close cart", "Cart එක වසන්න")}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <ShoppingBag size={48} color="#94a3b8" />
              </div>
              <h4 className={styles.emptyTitle}>{t("Your hardware quote is empty", "ඔබේ hardware quote එක හිස්")}</h4>
              <p className={styles.emptyText}>
                {t(
                  "Browse our certified POS terminals, receipt printers, barcode scanners, and cash drawers to build your custom counter setup.",
                  "ඔබේම counter setup එක හදාගන්න, අපේ certified POS terminals, receipt printers, barcode scanners සහ cash drawers බලන්න.",
                )}
              </p>
              <button type="button" className="btn-primary" onClick={closeDrawer}>
                <span>{t("Explore Hardware Store", "Hardware Store එක බලන්න")}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className={styles.itemList}>
                {items.map((item) => (
                  <div key={item.code} className={styles.itemRow}>
                    <div className={styles.itemMain}>
                      <div className={styles.itemMeta}>
                        <span className={styles.itemCode}>{item.code}</span>
                        {item.inStock ? (
                          <span className={styles.stockBadge}>{t("In Stock", "Stock එකේ ඇත")}</span>
                        ) : (
                          <span className={styles.preorderBadge}>{t("Pre-Order", "Pre-Order")}</span>
                        )}
                      </div>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <div className={styles.itemPriceRow}>
                        <span className={styles.unitPrice}>{formatLkr(item.price)} {t("each", "බැගින්")}</span>
                        <strong className={styles.rowTotal}>{formatLkr(item.price * item.qty)}</strong>
                      </div>
                    </div>

                    <div className={styles.itemActions}>
                      <div className={styles.qtyControl}>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => updateQty(item.code, -1)}
                          aria-label={t("Decrease quantity", "ප්‍රමාණය අඩු කරන්න")}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.qtyValue}>{item.qty}</span>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => updateQty(item.code, 1)}
                          aria-label={t("Increase quantity", "ප්‍රමාණය වැඩි කරන්න")}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.code)}
                        aria-label={t("Remove item", "Item එක ඉවත් කරන්න")}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Details for Quote */}
              <div className={styles.customerForm}>
                <h5 className={styles.formTitle}>{t("Quotation / Dispatch Info (Optional)", "Quotation / Dispatch තොරතුරු (අවශ්‍ය නම් පමණක්)")}</h5>
                <div className={styles.formGrid}>
                  <input
                    type="text"
                    placeholder={t("Your Name / Shop Name", "ඔබේ නම / වෙළඳසැලේ නම")}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder={t("Town / City (e.g. Colombo, Kandy)", "නගරය (උදා: කොළඹ, මහනුවර)")}
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Guarantees */}
              <div className={styles.perks}>
                <div className={styles.perk}>
                  <ShieldCheck size={16} color="var(--red)" />
                  <span>{t("1-Year JAAN Commercial Warranty", "අවුරුදු 1ක JAAN Commercial Warranty")}</span>
                </div>
                <div className={styles.perk}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span>{t("Tested & Driver-Configured for MariaPoS", "MariaPoS සඳහා Test කර Driver-Configure කරලා")}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <div>
                <span className={styles.totalLabel}>{t("Estimated Total", "ඇස්තමේන්තුගත මුළු මුදල")}</span>
                <span className={styles.taxNote}>{t("Includes Driver Setup & VAT", "Driver Setup සහ VAT ඇතුළත්")}</span>
              </div>
              <strong className={styles.totalValue}>{formatLkr(totalAmount)}</strong>
            </div>

            <div className={styles.actionButtons}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <WhatsAppIcon size={18} />
                <span>{t("Confirm Order via WhatsApp", "WhatsApp එකෙන් Order එක තහවුරු කරන්න")}</span>
              </a>

              <div className={styles.secondaryActions}>
                <a href={site.phoneHref} className="btn-secondary" style={{ flex: 1, padding: "10px 14px", fontSize: "14px" }}>
                  <Phone size={15} color="var(--red)" />
                  <span>{t("Call Hotline", "Hotline එකට අමතන්න")}</span>
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className={styles.clearBtn}
                  aria-label={t("Clear quote", "Quote එක clear කරන්න")}
                >
                  {t("Clear All", "සියල්ල Clear කරන්න")}
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
