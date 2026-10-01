import {
  BuyingPaths,
  CtaBand,
  FeaturedHardware,
  HowOrdering,
  IndustriesRow,
  SoftwareBento,
  TrustStrip,
} from "@/components/home/HomeSections";
import { InteractiveCounterHero } from "@/components/home/InteractiveCounterHero";
import { ReceiptShowcase } from "@/components/home/ReceiptShowcase";
import { HomeFaq } from "@/components/home/HomeFaq";

export default function HomePage() {
  return (
    <main id="top" data-screen-label="Home">
      <InteractiveCounterHero />
      <TrustStrip />
      <BuyingPaths />
      <FeaturedHardware />
      <ReceiptShowcase />
      <SoftwareBento />
      <IndustriesRow />
      <HowOrdering />
      <HomeFaq />
      <CtaBand />
    </main>
  );
}
