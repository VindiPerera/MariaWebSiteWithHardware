"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, MessageSquare, Plus, RefreshCw, Send, ShoppingCart, Smartphone, Sparkles, Tag, Zap } from "lucide-react";
import smsEbill from "@/assets/images/sms-ebill.jpeg";
import styles from "./FeatureSimulator.module.css";

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
            <span>Interactive Counter Lab</span>
          </div>
          <h2 className="section-title">Test the MariaPoS checkout flow live</h2>
          <p className={`lead ${styles.lead}`}>
            Add products below to simulate real-time cashier billing, FIFO stock depletion, and instant eBill delivery.
          </p>
        </div>

        <div data-reveal="up" data-delay="100" className={styles.simulator}>
          {/* Left Panel: Fast Product Selection */}
          <div className={styles.catalogPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Quick Products (Barcode / Tap)</span>
              <span className={styles.panelHint}>Click to add to billing cart</span>
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
                      <span className={styles.productBatch}>Batch #{product.batch}</span>
                    </div>
                    <span className={styles.productName}>{product.name}</span>
                    <div className={styles.productBottom}>
                      <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                      <span className={styles.addBtn}>
                        <Plus size={14} />
                        Add
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={styles.keyboardShortcuts}>
              <span className={styles.shortcutsTitle}>Cashier Hotkeys:</span>
              <span className={styles.shortcutKey}>[F1] Item Search</span>
              <span className={styles.shortcutKey}>[F4] Price Check</span>
              <span className={styles.shortcutKey}>[F8] Hold Cart</span>
              <span className={styles.shortcutKey}>[F12] Quick Pay</span>
            </div>
          </div>

          {/* Middle Panel: Active POS Cart & FIFO Ledger */}
          <div className={styles.cartPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.cartTitleWrap}>
                <ShoppingCart size={16} color="var(--red)" />
                <span className={styles.panelTitle}>Active Bill #2026-0428</span>
              </div>
              <button type="button" onClick={resetCart} className={styles.resetBtn} title="Reset Cart">
                <RefreshCw size={13} />
                Reset
              </button>
            </div>

            <div className={styles.cartList}>
              {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                  <span>Cart is empty. Tap any product on the left to start billing.</span>
                </div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div key={product.id} className={styles.cartRow}>
                    <div className={styles.cartItemInfo}>
                      <span className={styles.cartItemName}>{product.name}</span>
                      <span className={styles.cartItemBatch}>
                        FIFO: Deducting from Batch <strong>{product.batch}</strong>
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
                <span>Total Amount:</span>
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
                  <span>Simulate Checkout [F12]</span>
                </button>
              ) : (
                <div className={styles.successBox}>
                  <div className={styles.successHeading}>
                    <CheckCircle2 size={18} color="#1faa55" />
                    <span>Checkout Complete! Stock Deducted FIFO.</span>
                  </div>
                  <span className={styles.successMeta}>
                    Receipt eBill dispatched to customer phone &amp; Telegram alert sent to store owner.
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
                <span>Customer SMS</span>
              </button>
              <button
                type="button"
                onClick={() => setActivePreview("telegram")}
                className={`${styles.toggleBtn} ${activePreview === "telegram" ? styles.toggleActive : ""}`}
              >
                <Send size={14} />
                <span>Owner Telegram</span>
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
                      Thank you for shopping with us!
                    </p>
                    <span className={styles.smsStatus}>Delivered · SMS wallet: 18 left</span>
                  </div>
                </div>
              ) : (
                <div className={styles.telegramScreen}>
                  <div className={styles.tgHeader}>
                    <Send size={15} color="#229ed9" />
                    <span>MariaPoS Bot · Sales Alert</span>
                  </div>
                  <div className={styles.tgCard}>
                    <span className={styles.tgTitle}>🎉 New Sale · Till #01</span>
                    <span className={styles.tgItems}>
                      {cart.map((c) => `• ${c.product.name} × ${c.qty}`).join("\n")}
                    </span>
                    <div className={styles.tgBottom}>
                      <span className={styles.tgTotal}>Amount: ${total.toFixed(2)}</span>
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
