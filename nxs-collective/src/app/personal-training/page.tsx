import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training in Clarke Quay, Singapore",
  description:
    "Individualised personal training for strength, muscle gain, fat loss and sports performance — built around your current capacity and goals, in Singapore.",
};

const focusAreas = [
  "Strength development",
  "Muscle gain",
  "Fat loss",
  "Body recomposition",
  "General fitness",
  "Exercise confidence",
  "Post-rehabilitation strength development",
  "Movement quality",
  "Sports performance",
];

const individualisedOn = [
  "Current strength",
  "Movement capacity",
  "Injury history",
  "Training experience",
  "Physical goals",
  "Weekly availability",
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Training"
        title="Personal Training at NXS Collective"
        description="Individualised strength, body-composition and performance training based on your current physical capacity and goals — supervised by trained coaches."
      />

      <section className="border-b border-hairline bg-graphite py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline lg:order-2">
            {/*
              REPLACE THIS IMAGE:
              Swap /public/images/personal-training-session.svg for a real
              photo of a supervised training session. Same file name =
              layout unchanged.
            */}
            <Image
              src="/images/personal-training-session.svg"
              alt="Strength coach supervising a client during controlled resistance training"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <SectionHeading eyebrow="What We Train For" title="What personal training can focus on" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist md:text-base">
                  <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="How Programmes Are Built"
            title="Every programme is individualised"
            description="No two programmes at NXS Collective look the same. Yours is built around the following:"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {individualisedOn.map((item, index) => (
              <Card key={item} className="flex items-center gap-4">
                <span className="eyebrow !text-sand">0{index + 1}</span>
                <span className="text-sm text-bone md:text-base">{item}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-20 md:py-24">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Start with a consultation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mist md:text-base">
            Tell us about your current training, injury history and goals,
            and we&apos;ll recommend a suitable starting point.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book a Consultation
            </Button>
            <Button href="/contact" variant="secondary" showExternalIcon={false}>
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
