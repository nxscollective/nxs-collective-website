import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntegratedCare from "@/components/home/IntegratedCare";
import ServicesOverview from "@/components/home/ServicesOverview";
import MovementHealthcheck from "@/components/home/MovementHealthcheck";
import WhyChooseNXS from "@/components/home/WhyChooseNXS";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
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
      <IntegratedCare />
      <ServicesOverview />
      <MovementHealthcheck />
      <WhyChooseNXS />
      <ReviewsCarousel />
      <WhoWeHelp />
      <FinalCTA />
    </>
  );
}
