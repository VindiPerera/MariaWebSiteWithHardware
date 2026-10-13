"use client";

import React from "react";
import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteDrawer } from "@/components/hardware/QuoteDrawer";
import { MotionProvider } from "@/components/motion/MotionProvider";

export function AppClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
    <CartProvider>
      <Header />
      {children}
      <Footer />
      <QuoteDrawer />
      <MotionProvider />
    </CartProvider>
    </LanguageProvider>
  );
}
