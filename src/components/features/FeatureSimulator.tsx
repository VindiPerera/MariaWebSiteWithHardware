"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, MessageSquare, Plus, RefreshCw, Send, ShoppingCart, Smartphone, Sparkles, Tag, Zap } from "lucide-react";
import smsEbill from "@/assets/images/sms-ebill.jpeg";
import styles from "./FeatureSimulator.module.css";
import { useLang } from "@/lib/i18n";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  batch: string;
  stock: number;
};

const sampleProducts: Product[] = [
  { id: "p1", name: "3M 1*10 Plaster", category: "Medical", price: 450, batch: "B-2026-08", stock: 24 },
  { id: "p2", name: "4Ever Aloe Vera Gel 100ml", category: "Cosmetics", price: 750, batch: "A-2026-11", stock: 12 },
  { id: "p3", name: "Highland Fresh Milk 1L", category: "Dairy", price: 380, batch: "M-2026-05", stock: 35 },
  { id: "p4", name: "Dettol Antiseptic 125ml", category: "Hygiene", price: 310, batch: "D-2026-09", stock: 18 },
];

export function FeatureSimulator() {
  const { t } = useLang();
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([
    { product: sampleProducts[0], qty: 2 },
    { product: sampleProducts[1], qty: 1 },
  ]);
  const [checkedOut, setCheckedOut] = useState(false);
  const [activePreview, setActivePreview] = useState<"sms" | "telegram">("sms");

  const addItem = (product: Product) => {
    setCheckedOut(false);
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCheckedOut(false);
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; qty: number }[],
    );
  };

  const resetCart = () => {
    setCart([
      { product: sampleProducts[0], qty: 2 },
      { product: sampleProducts[1], qty: 1 },
    ]);
    setCheckedOut(false);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const total = subtotal;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div data-reveal="up" className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} color="var(--red)" />
            <span>{t("Interactive Counter Lab", "Interactive Counter Lab")}</span>
          </div>
          <h2 className="section-title">{t("Test the MariaPoS checkout flow live", "MariaPoS checkout flow එක live test කරන්න")}</h2>
          <p className={`lead ${styles.lead}`}>
            {t("Add products below to simulate real-time cashier billing, FIFO stock depletion, and instant eBill delivery.", "පහළ products එකතු කර, cashier ගේ billing, stock අඩුවීම සහ eBill යැවීම ඒ මොහොතේම බලන්න.")}
          </p>
        </div>

        <div data-reveal="up" data-delay="100" className={styles.simulator}>
          {/* Left Panel: Fast Product Selection */}
          <div className={styles.catalogPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>{t("Quick Products (Barcode / Tap)", "Quick Products (Barcode / Tap)")}</span>
              <span className={styles.panelHint}>{t("Click to add to billing cart", "Billing cart එකට add කිරීමට click කරන්න")}</span>
            </div>

            <div className={styles.productGrid}>
              {sampleProducts.map((product) => {
                const inCart = cart.find((i) => i.product.id === product.id);
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => addItem(product)}
                    className={`${styles.productCard} ${inCart ? styles.productInCart : ""}`}
                  >
                    <div className={styles.productTop}>
                      <span className={styles.productCategory}>{product.category}</span>
                      <span className={styles.productBatch}>{t("Batch", "Batch")} #{product.batch}</span>
                    </div>
                    <span className={styles.productName}>{product.name}</span>
                    <div className={styles.productBottom}>
                      <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                      <span className={styles.addBtn}>
                        <Plus size={14} />
                        {t("Add", "Add කරන්න")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={styles.keyboardShortcuts}>
              <span className={styles.shortcutsTitle}>{t("Cashier Hotkeys:", "Cashier Hotkeys:")}</span>
              <span className={styles.shortcutKey}>[F1] {t("Item Search", "Item Search")}</span>
              <span className={styles.shortcutKey}>[F4] {t("Price Check", "Price Check")}</span>
              <span className={styles.shortcutKey}>[F8] {t("Hold Cart", "Hold Cart")}</span>
              <span className={styles.shortcutKey}>[F12] {t("Quick Pay", "Quick Pay")}</span>
            </div>
          </div>

          {/* Middle Panel: Active POS Cart & FIFO Ledger */}
          <div className={styles.cartPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.cartTitleWrap}>
                <ShoppingCart size={16} color="var(--red)" />
                <span className={styles.panelTitle}>{t("Active Bill #2026-0428", "දැනට Active Bill #2026-0428")}</span>
              </div>
              <button type="button" onClick={resetCart} className={styles.resetBtn} title={t("Reset Cart", "Cart එක Reset කරන්න")}>
                <RefreshCw size={13} />
                {t("Reset", "Reset")}
              </button>
            </div>

            <div className={styles.cartList}>
              {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                  <span>{t("Cart is empty. Tap any product on the left to start billing.", "Cart එක හිස්ය. Billing පටන් ගන්න වම් පැත්තේ ඕනෑම product එකක් tap කරන්න.")}</span>
                </div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div key={product.id} className={styles.cartRow}>
                    <div className={styles.cartItemInfo}>
                      <span className={styles.cartItemName}>{product.name}</span>
                      <span className={styles.cartItemBatch}>
                        {t("FIFO: Deducting from Batch", "FIFO: මෙම Batch එකෙන් අඩු කරනවා")} <strong>{product.batch}</strong>
                      </span>
                    </div>
                    <div className={styles.qtyControls}>
                      <button type="button" onClick={() => updateQty(product.id, -1)} className={styles.qtyBtn}>
                        -
                      </button>
                      <span className={styles.qtyVal}>{qty}</span>
                      <button type="button" onClick={() => updateQty(product.id, 1)} className={styles.qtyBtn}>
                        +
                      </button>
                    </div>
                    <span className={styles.cartItemTotal}>${(product.price * qty).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <div className={styles.cartFooter}>
              <div className={styles.totalRow}>
                <span>{t("Total Amount:", "මුළු මුදල:")}</span>
                <span className={styles.grandTotal}>${total.toFixed(2)}</span>
              </div>

              {!checkedOut ? (
                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={() => setCheckedOut(true)}
                  className={styles.checkoutBtn}
                >
                  <Zap size={16} />
                  <span>{t("Simulate Checkout [F12]", "Checkout Simulate කරන්න [F12]")}</span>
                </button>
              ) : (
                <div className={styles.successBox}>
                  <div className={styles.successHeading}>
                    <CheckCircle2 size={18} color="#1faa55" />
                    <span>{t("Checkout Complete! Stock Deducted FIFO.", "Checkout සම්පූර්ණයි! Stock එක අඩු වුණා.")}</span>
                  </div>
                  <span className={styles.successMeta}>
                    {t("Receipt eBill dispatched to customer phone & push alert sent to store owner.", "Receipt එක customer ගේ phone එකටත්, alert එක ඔබේ phone එකටත් යැවුවා.")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Simulated Live Mobile Output */}
          <div className={styles.outputPanel}>
            <div className={styles.previewToggle}>
              <button
                type="button"
                onClick={() => setActivePreview("sms")}
                className={`${styles.toggleBtn} ${activePreview === "sms" ? styles.toggleActive : ""}`}
              >
                <Smartphone size={14} />
                <span>{t("Customer SMS", "Customer SMS")}</span>
              </button>
              <button
                type="button"
                onClick={() => setActivePreview("telegram")}
                className={`${styles.toggleBtn} ${activePreview === "telegram" ? styles.toggleActive : ""}`}
              >
                <Send size={14} />
                <span>{t("Owner Phone", "Owner Phone")}</span>
              </button>
            </div>

            <div className={styles.phoneMockup}>
              <div className={styles.phoneNotch} />
              {activePreview === "sms" ? (
                <div className={styles.smsScreen}>
                  <div className={styles.smsHeader}>
                    <span className={styles.smsSender}>MariaPoS eBill</span>
                    <span className={styles.smsTimestamp}>Today · Just now</span>
                  </div>
                  <div className={styles.smsBubble}>
                    <p className={styles.smsText}>
                      <strong>JAAN Network Store</strong>
                      <br />
                      Bill #2026-0428
                      <br />
                      Items: {cart.map((c) => `${c.product.name} (x${c.qty})`).join(", ") || "None"}
                      <br />
                      <strong>Total: ${total.toFixed(2)} [PAID]</strong>
                      <br />
                      {t("Thank you for shopping with us!", "අප සමඟ මිලදී ගැනීමට ස්තූතියි!")}
                    </p>
                    <span className={styles.smsStatus}>{t("Delivered · SMS wallet: 18 left", "Delivered · SMS wallet: 18ක් ඉතිරියි")}</span>
                  </div>
                </div>
              ) : (
                <div className={styles.telegramScreen}>
                  <div className={styles.tgHeader}>
                    <Send size={15} color="#229ed9" />
                    <span>{t("MariaPoS Bot · Sales Alert", "MariaPoS Bot · Sales Alert")}</span>
                  </div>
                  <div className={styles.tgCard}>
                    <span className={styles.tgTitle}>🎉 {t("New Sale", "අලුත් Sale එකක්")} · Till #01</span>
                    <span className={styles.tgItems}>
                      {cart.map((c) => `• ${c.product.name} × ${c.qty}`).join("\n")}
                    </span>
                    <div className={styles.tgBottom}>
                      <span className={styles.tgTotal}>{t("Amount", "මුදල")}: ${total.toFixed(2)}</span>
                      <span className={styles.tgTime}>Shift #214</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
