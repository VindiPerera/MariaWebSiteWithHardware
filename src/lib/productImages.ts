import { StaticImageData } from "next/image";

// Real Hardware Product Images
import acc1639 from "@/assets/images/products/ACC1639.png";
import cas2131 from "@/assets/images/products/CAS2131.png";
import cas2449 from "@/assets/images/products/CAS2449.png";
import pap2134 from "@/assets/images/products/PAP2134.png";
import pap2259 from "@/assets/images/products/PAP2259.png";
import pri2124 from "@/assets/images/products/PRI2124.png";
import pri2133 from "@/assets/images/products/PRI2133.png";
import pri2178 from "@/assets/images/products/PRI2178.png";
import pri2352 from "@/assets/images/products/PRI2352.png";
import pri2448 from "@/assets/images/products/PRI2448.png";
import pri2716 from "@/assets/images/products/PRI2716.png";
import pri2914 from "@/assets/images/products/PRI2914.png";
import pri2915 from "@/assets/images/products/PRI2915.png";
import pri3055 from "@/assets/images/products/PRI3055.png";
import sca2126 from "@/assets/images/products/SCA2126.png";
import sca2127 from "@/assets/images/products/SCA2127.png";
import sca2128 from "@/assets/images/products/SCA2128.png";
import ton2287 from "@/assets/images/products/TON2287.png";
import ton2290 from "@/assets/images/products/TON2290.png";
import ton2291 from "@/assets/images/products/TON2291.png";

export const realProductImages: Record<string, StaticImageData> = {
  ACC1639: acc1639,
  CAS2131: cas2131,
  CAS2449: cas2449,
  PAP2134: pap2134,
  PAP2259: pap2259,
  PRI2124: pri2124,
  PRI2133: pri2133,
  PRI2178: pri2178,
  PRI2352: pri2352,
  PRI2448: pri2448,
  PRI2716: pri2716,
  PRI2914: pri2914,
  PRI2915: pri2915,
  PRI3055: pri3055,
  SCA2125: sca2126, // A7 2D Wired USB Barcode Scanner
  SCA2126: sca2126,
  SCA2127: sca2127,
  SCA2128: sca2128,
  SCA3064: sca2126, // Handheld 1D barcode scanner
  TON2287: ton2287,
  TON2290: ton2290,
  TON2291: ton2291,
};

export function getProductPhoto(code: string): StaticImageData | null {
  const normalized = code.trim().toUpperCase();
  return realProductImages[normalized] || null;
}
