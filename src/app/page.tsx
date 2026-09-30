import {
  BuyingPaths,
  CtaBand,
  FeaturedHardware,
  HowOrdering,
  IndustriesRow,
  SoftwareBento,
  ThermalBillEngineSection,
  TrustStrip,
} from "@/components/home/HomeSections";
import { InteractiveCounterHero } from "@/components/home/InteractiveCounterHero";
import { HomeFaq } from "@/components/home/HomeFaq";

export default function HomePage() {
  return (
    <main id="top" data-screen-label="Home">
      <InteractiveCounterHero />
      <TrustStrip />
      <BuyingPaths />
      <FeaturedHardware />
      <ThermalBillEngineSection />
      <SoftwareBento />
      <IndustriesRow />
      <HowOrdering />
      <HomeFaq />
      <CtaBand />
    </main>
  );
}
