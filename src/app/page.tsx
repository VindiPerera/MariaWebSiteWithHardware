import {
  BuyingPaths,
  CtaBand,
  FeaturedHardware,
  HowOrdering,
  IndustriesRow,
  SoftwareBento,
  TrustStrip,
} from "@/components/home/HomeSections";
import { PromotionHero } from "@/components/home/PromotionHero";
import { HardwareShowcase } from "@/components/home/HardwareShowcase";
import { VisualExperienceRow } from "@/components/home/VisualExperienceRow";
import { ReceiptShowcase } from "@/components/home/ReceiptShowcase";
import { HomeFaq } from "@/components/home/HomeFaq";

export default function HomePage() {
  return (
    <main id="top" data-screen-label="Home">
      {/* World-Class Animated Hero featuring MariaPOS Promotion Ambassador */}
      <PromotionHero />
      <TrustStrip />

      {/* Complete POS Counter Workstation 3D Showcase */}
      <HardwareShowcase />

      {/* Real-World Retail Operations (Customer SMS Checkout & Warehouse FIFO) */}
      <VisualExperienceRow />

      <FeaturedHardware />
      <ReceiptShowcase />
      <SoftwareBento />
      <BuyingPaths />
      <IndustriesRow />
      <HowOrdering />
      <HomeFaq />
      <CtaBand />
    </main>
  );
}
