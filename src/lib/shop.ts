import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Car, Croissant, Hammer, Pill, Shirt, ShoppingCart, Smartphone, Sparkles, Warehouse } from "lucide-react";
import pri2915 from "@/assets/images/products/PRI2915.jpg";
import pri2124 from "@/assets/images/products/PRI2124.jpg";
import sca2127 from "@/assets/images/products/SCA2127.jpg";
import acc1639 from "@/assets/images/products/ACC1639.jpg";
import pri2178 from "@/assets/images/products/PRI2178.jpg";
import pri2352 from "@/assets/images/products/PRI2352.jpg";
import { hardwareCatalog } from "@/lib/hardwareCatalog";
import { site } from "@/lib/site";

/** Formats an LKR amount as `Rs. 45,000`, or a marked placeholder when the price is unknown. */
export const formatLkr = (n: number | null | undefined) => (n == null ? "Rs. —" : `Rs. ${n.toLocaleString("en-LK")}`);

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

// Names and key specs follow the KM IT POS product list; prices and stock come from the hardware catalogue.
const featuredRaw: [code: string, catName: string, name: string, keySpecs: string[], img: StaticImageData][] = [
  ["PRI2915", "POS systems", 'POS Touch 15.6" Display System', ['15.6" touch', "Intel Core i5 (4th Gen)", "8 GB RAM"], pri2915],
  ["PRI2124", "Receipt printers", "Xprinter XP-80T Thermal Receipt Printer (USB + LAN)", ["XP-80T", "Thermal receipt", "80 mm"], pri2124],
  ["SCA2127", "Barcode scanners", "AQ6180 1D & 2D Desktop Barcode Scanner", ["AQ6180", "1D + 2D", "Desktop"], sca2127],
  ["ACC1639", "Cash drawers", "Cash Drawer 5-Pin 8-Coin", ["5-pin", "8"], acc1639],
  ["PRI2178", "Label printers", "Xprinter XP-246B Dual Mode Barcode & Receipt Printer (USB + Bluetooth)", ["XP-246B", "Dual mode: label + receipt", "USB + Bluetooth"], pri2178],
  ["PRI2352", "Portable printers", "Xprinter XP-P801A Portable Printer", ["XP-P801A", "Portable"], pri2352],
];

export const featuredProducts: ShopProduct[] = featuredRaw.map(([code, catName, name, keySpecs, img]) => {
  const item = hardwareCatalog.find((h) => h.code === code);
  const price = item?.price ?? 0;
  return {
    code,
    name,
    catName,
    price,
    inStock: item?.inStock ?? false,
    keySpecText: keySpecs.join(" · "),
    img,
    // Links directly to the individual product page
    href: `/hardware/${item ? item.slug : code.toLowerCase()}`,
    waOrder: waLink(`Hi MariaPoS, I'd like to order: ${name} (${formatLkr(price)}). Delivery to: ___`),
  };
});

export const hardwareProductCount = hardwareCatalog.length;

export const featuredHero = {
  terminal: featuredProducts[0],
  printer: featuredProducts[1],
  scanner: featuredProducts[2],
  drawer: featuredProducts[3],
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
