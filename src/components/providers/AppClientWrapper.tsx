"use client";

import React from "react";
import { CartProvider } from "@/lib/cartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteDrawer } from "@/components/hardware/QuoteDrawer";
import { MotionProvider } from "@/components/motion/MotionProvider";

export function AppClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
      <QuoteDrawer />
      <MotionProvider />
    </CartProvider>
  );
}
