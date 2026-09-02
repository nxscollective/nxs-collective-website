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
  title: {
    absolute: "NXS Collective | Physiotherapy & Personal Training Singapore",
  },
  description:
    "Integrated physiotherapy, sports therapy and personal training above Clarke Quay MRT, Singapore — from clinical assessment and rehabilitation to strength and performance.",
  alternates: {
    canonical: "/",
  },
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
