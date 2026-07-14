import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import GoogleReviews from "@/components/home/GoogleReviews";
import ServicesOverview from "@/components/home/ServicesOverview";
import MovementHealthcheck from "@/components/home/MovementHealthcheck";
import IntegratedCare from "@/components/home/IntegratedCare";
import WhyChooseNXS from "@/components/home/WhyChooseNXS";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Physiotherapy, Sports Therapy & Personal Training in Clarke Quay, Singapore",
  description:
    "NXS Collective offers integrated physiotherapy, sports therapy and personal training above Clarke Quay MRT — from clinical assessment to long-term performance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <GoogleReviews />
      <ServicesOverview />
      <MovementHealthcheck />
      <IntegratedCare />
      <WhyChooseNXS />
      <WhoWeHelp />
      <FinalCTA />
    </>
  );
}
