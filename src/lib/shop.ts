import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Car,
  Croissant,
  Hammer,
  Pill,
  Shirt,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Warehouse,
} from "lucide-react";
import { hardwareCatalog } from "@/lib/hardwareCatalog";
import { getProductPhoto } from "@/lib/productImages";
import { site } from "@/lib/site";

/** Formats an LKR amount as clean integer e.g. `Rs. 110,000`, or placeholder when unknown. */
export const formatLkr = (n: number | null | undefined) =>
  n == null ? "Rs. —" : `Rs. ${Math.round(n).toLocaleString("en-LK")}`;

/** Buying happens on WhatsApp, so every order button opens a chat with a pre-filled message. */
export const waLink = (message: string) => `${site.whatsappHref}?text=${encodeURIComponent(message)}`;

export const waGeneral = waLink("Hi MariaPoS, I'd like to know more about a POS setup for my shop.");

export type ShopProduct = {
  code: string;
  name: string;
  catName: string;
  price: number;
  inStock: boolean;
  keySpecText: string;
  img: StaticImageData;
  href: string;
  waOrder: string;
};

// Selected featured hardware products from the official hardware catalogue (all properly linked with real images & specs)
const featuredItemConfig: { code: string; customSpecs?: string }[] = [
  { code: "PRI2915", customSpecs: '15.6" touch · Intel Core i5 (4th Gen) · 8 GB RAM' },
  { code: "PRI2914", customSpecs: '15.6" touch + 11.6" customer display · Intel i5 · 8 GB RAM' },
  { code: "PRI2448", customSpecs: "80T WiFi · 200 mm/s high-speed · 80 mm thermal · Auto-cutter" },
  { code: "PRI2124", customSpecs: "80T LAN · 200 mm/s high-speed · 80 mm thermal · USB + LAN" },
  { code: "PRI2178", customSpecs: "XP-246B · Dual mode sticker + receipt · USB + Bluetooth" },
  { code: "TON2290", customSpecs: "XP-T361U · 80 mm wide label & receipt · High-speed USB" },
  { code: "TON2291", customSpecs: "XP-T361U · 80 mm wide label & receipt · USB + Bluetooth" },
  { code: "PRI3055", customSpecs: "XP-365B · 127 mm/s clamshell barcode printer · Bluetooth" },
  { code: "PRI2716", customSpecs: "T451B · Industrial thermal transfer + direct thermal · Weatherproof" },
  { code: "TON2287", customSpecs: "XP-P301A · 58 mm mobile receipt · OLED display · Bluetooth" },
  { code: "PRI2352", customSpecs: "XP-P801A · 80 mm portable · 2600 mAh battery · Bluetooth" },
  { code: "ACC1639", customSpecs: "5-pin auto-kick · 5-bill / 8-coin · Heavy-gauge steel" },
  { code: "SCA3064", customSpecs: "AQ2210 · 1D laser · 300 scans/sec · Auto-sensing stand" },
  { code: "SCA2125", customSpecs: "A7 · 2D QR + 1D barcode optical CMOS scanner · USB wired" },
  { code: "SCA2126", customSpecs: "A9 · 1D + 2D QR · CMOS barcode optical scanner · USB wired" },
  { code: "SCA2128", customSpecs: "A8 wireless 2.4G + USB wired · 1D + 2D QR · Offline memory" },
  { code: "SCA2127", customSpecs: "AQ6180 · Hands-free desktop omnidirectional · 1D + 2D QR" },
  { code: "CAS2131", customSpecs: "2108 cash counter · 1,000 notes/min · UV counterfeit detection" },
  { code: "CAS2449", customSpecs: "P80 heavy duty · 1,200 notes/min · UV + MG + IR multi-sensor" },
  { code: "PAP2259", customSpecs: "Paper 80*80 (76) · 55 GSM high-density · 100% BPA free" },
];

export const featuredProducts: ShopProduct[] = featuredItemConfig
  .map(({ code, customSpecs }) => {
    const item = hardwareCatalog.find((h) => h.code.toUpperCase() === code.toUpperCase());
    if (!item) return null;
    const photo = getProductPhoto(item.code);
    if (!photo) return null;

    const specsText =
      customSpecs ||
      item.specs
        .slice(0, 3)
        .map((s) => s.value)
        .join(" · ");

    return {
      code: item.code,
      name: item.name,
      catName: item.categoryLabel,
      price: item.price,
      inStock: item.inStock,
      keySpecText: specsText,
      img: photo,
      href: `/hardware/${item.slug}`,
      waOrder: waLink(`Hi MariaPoS, I'd like to order: ${item.name} (${formatLkr(item.price)}). Delivery to: ___`),
    };
  })
  .filter((p): p is ShopProduct => p !== null);

export const hardwareProductCount = hardwareCatalog.length;

export const featuredHero = {
  terminal: featuredProducts.find((p) => p.code === "PRI2915") || featuredProducts[0],
  printer: featuredProducts.find((p) => p.code === "PRI2124") || featuredProducts[1],
  scanner: featuredProducts.find((p) => p.code === "SCA2127") || featuredProducts[2],
  drawer: featuredProducts.find((p) => p.code === "ACC1639") || featuredProducts[3],
};

export const industryChips: { name: string; icon: LucideIcon; href: string }[] = [
  { name: "Supermarkets & groceries", icon: ShoppingCart, href: "/industries/supermarket-grocery" },
  { name: "Pharmacies", icon: Pill, href: "/industries/pharmacy" },
  { name: "Hardware stores", icon: Hammer, href: "/industries/hardware-store" },
  { name: "Clothing & fashion", icon: Shirt, href: "/industries/clothing-textile" },
  { name: "Bookshops & stationery", icon: BookOpen, href: "/industries/bookshop-stationery" },
  { name: "Electronics & mobile", icon: Smartphone, href: "/industries/electronics-mobile" },
  { name: "Cosmetics & beauty", icon: Sparkles, href: "/industries/cosmetics-beauty" },
  { name: "Bakeries & cafés", icon: Croissant, href: "/industries/bakery-cafe" },
  { name: "Wholesale & distribution", icon: Warehouse, href: "/industries/wholesale-distribution" },
  { name: "Auto parts", icon: Car, href: "/industries/auto-parts" },
];

