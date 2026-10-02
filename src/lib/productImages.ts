import { StaticImageData } from "next/image";

// Real Hardware Product Images
import acc1639 from "@/assets/images/products/ACC1639.png";
import acc1639_2 from "@/assets/images/products/ACC1639-2.jpg";
import cas2131 from "@/assets/images/products/CAS2131.png";
import cas2449_main from "@/assets/images/products/CAS2449-main.png";
import cas2449_2 from "@/assets/images/products/CAS2449-2.png";
import cas2449_3 from "@/assets/images/products/CAS2449-3.png";
import pap2134_main from "@/assets/images/products/PAP2134-main.webp";
import pap2259_main from "@/assets/images/products/PAP2259-main.png";
import pri2124_main from "@/assets/images/products/PRI2124-main.png";
import pri2124_3 from "@/assets/images/products/PRI2124-3.jpg";
import pri2124_4 from "@/assets/images/products/PRI2124-4.jpg";
import xp246b_1 from "@/assets/images/products/XP246B-1.webp";
import xp246b_2 from "@/assets/images/products/XP246B-2.png";
import xp246b_3 from "@/assets/images/products/XP246B-3.png";
import xp246b_4 from "@/assets/images/products/XP246B-4.png";
import pri2352_main from "@/assets/images/products/PRI2352-main.png";
import pri2352_2 from "@/assets/images/products/PRI2352-2.png";
import pri2448_main from "@/assets/images/products/PRI2448-main.png";
import pri2448_2 from "@/assets/images/products/PRI2448-2.png";
import pri2448_3 from "@/assets/images/products/PRI2448-3.png";
import pri2716_main from "@/assets/images/products/PRI2716-main.webp";
import pri2716_2 from "@/assets/images/products/PRI2716-2.webp";
import pri2914_main from "@/assets/images/products/PRI2914-main2.png";
import pri2915_main from "@/assets/images/products/PRI2915-main.png";
import pri3055 from "@/assets/images/products/PRI3055.png";
import sca2126 from "@/assets/images/products/SCA2126.png";
import sca2126_main from "@/assets/images/products/SCA2126-main.jpg";
import sca2126_2 from "@/assets/images/products/SCA2126-2.jpg";
import sca2126_3 from "@/assets/images/products/SCA2126-3.jpg";
import sca3064_main from "@/assets/images/products/SCA3064-main.png";
import sca2127_main from "@/assets/images/products/SCA2127-main.webp";
import sca2128_main from "@/assets/images/products/SCA2128-main.jpg";
import ton2287_2 from "@/assets/images/products/TON2287-2.png";
import ton2290 from "@/assets/images/products/TON2290.png";
import ton2290_2 from "@/assets/images/products/TON2290-2.png";
import ton2291_1 from "@/assets/images/products/TON2291-1.png";
import ton2291_2 from "@/assets/images/products/TON2291-2.png";
import ton2291_3 from "@/assets/images/products/TON2291-3.png";
import ton2291_4 from "@/assets/images/products/TON2291-4.png";

// Each product code maps to one or more real photos, shown as separate gallery tabs.
export const realProductImages: Record<string, StaticImageData[]> = {
  ACC1639: [acc1639, acc1639_2],
  CAS2131: [cas2131],
  CAS2449: [cas2449_main, cas2449_2, cas2449_3],
  PAP2134: [pap2134_main],
  PAP2259: [pap2259_main],
  PRI2124: [pri2124_main, pri2124_3, pri2124_4],
  // XP-246B dual-mode chassis is shared between the USB and USB+Bluetooth variants
  PRI2133: [xp246b_1, xp246b_2, xp246b_3, xp246b_4],
  PRI2178: [xp246b_2, xp246b_1, xp246b_4, xp246b_3],
  PRI2352: [pri2352_main, pri2352_2],
  PRI2448: [pri2448_main, pri2448_2, pri2448_3],
  PRI2716: [pri2716_main, pri2716_2],
  PRI2914: [pri2914_main],
  PRI2915: [pri2915_main],
  PRI3055: [pri3055],
  SCA2125: [sca2126], // A7 2D Wired USB Barcode Scanner (placeholder, shares A9's old photo)
  SCA2126: [sca2126_main, sca2126_2, sca2126_3],
  SCA2127: [sca2127_main],
  SCA2128: [sca2128_main],
  SCA3064: [sca3064_main],
  TON2287: [ton2287_2],
  TON2290: [ton2290, ton2290_2],
  TON2291: [ton2291_1, ton2291_2, ton2291_3, ton2291_4],
};

export function getProductPhotos(code: string): StaticImageData[] {
  const normalized = code.trim().toUpperCase();
  return realProductImages[normalized] || [];
}

export function getProductPhoto(code: string): StaticImageData | null {
  return getProductPhotos(code)[0] || null;
}
