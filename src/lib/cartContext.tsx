"use client";

import React, { useEffect, useState } from "react";
import { HardwareItem, PosBundle } from "./hardwareCatalog";
import { site } from "./site";

export type CartItem = {
  code: string;
  name: string;
  price: number;
  qty: number;
  inStock: boolean;
  isBundle?: boolean;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: HardwareItem | PosBundle, qty?: number) => void;
  removeItem: (code: string) => void;
  updateQty: (code: string, delta: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalCount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  getWhatsAppOrderUrl: (customerName?: string, customerCity?: string) => string;
};

const defaultContextValue: CartContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clearCart: () => {},
  totalAmount: 0,
  totalCount: 0,
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
  getWhatsAppOrderUrl: () => "",
};

// Safe for React 19 server-side evaluation where createContext might not be defined
const CartContext =
  typeof React.createContext === "function"
    ? React.createContext<CartContextType>(defaultContextValue)
    : null;

const STORAGE_KEY = "mariapos_hardware_quote_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, isHydrated]);

  const addItem = (item: HardwareItem | PosBundle, qty = 1) => {
    setItems((prev) => {
      const isBundle = "totalPriceLkr" in item;
      const code = isBundle ? item.id : item.code;
      const name = item.name;
      const price = isBundle ? item.totalPriceLkr : item.price;
      const inStock = isBundle ? true : item.inStock;

      const existingIndex = prev.findIndex((i) => i.code === code);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += qty;
        return updated;
      } else {
        return [...prev, { code, name, price, qty, inStock, isBundle }];
      }
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (code: string) => {
    setItems((prev) => prev.filter((i) => i.code !== code));
  };

  const updateQty = (code: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.code === code) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalAmount = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const totalCount = items.reduce((acc, curr) => acc + curr.qty, 0);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const getWhatsAppOrderUrl = (customerName = "", customerCity = "") => {
    let msg = `*🛒 MariaPoS Hardware Order & Quotation Request*\n\n`;
    if (customerName) msg += `*Customer:* ${customerName}\n`;
    if (customerCity) msg += `*City/Location:* ${customerCity}\n`;
    msg += `------------------------------------\n`;

    if (items.length === 0) {
      msg += `Hello! I would like to inquire about MariaPoS software and hardware packages.\n`;
    } else {
      msg += `*Requested Items:*\n`;
      items.forEach((item, index) => {
        msg += `${index + 1}. [${item.code}] *${item.name}*\n   Qty: ${item.qty} × Rs. ${item.price.toLocaleString("en-LK")} = Rs. ${(
          item.price * item.qty
        ).toLocaleString("en-LK")}\n`;
      });
      msg += `------------------------------------\n`;
      msg += `*Estimated Total: Rs. ${totalAmount.toLocaleString("en-LK")}*\n\n`;
      msg += `Please confirm stock availability, delivery time, and dispatch options for my shop. Thank you!`;
    }

    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  if (!CartContext) {
    return <>{children}</>;
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalAmount,
        totalCount,
        isDrawerOpen,
        setIsDrawerOpen,
        openDrawer,
        closeDrawer,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  if (!CartContext || typeof React.useContext !== "function") {
    return defaultContextValue;
  }
  const context = React.useContext(CartContext);
  return context || defaultContextValue;
}
