import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import PathwaySteps from "@/components/shared/PathwaySteps";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Why NXS? | Our Approach to Movement Health",
  description:
    "Why NXS Collective connects physiotherapy, sports therapy and personal training into one assessment-led pathway, in Clarke Quay, Singapore.",
};

const concepts = [
  "Pain and injury should not be treated separately from movement and strength.",
  "Clients should have a clear progression pathway, not a single isolated appointment.",
  "Assessment should guide treatment and training — not the other way around.",
  "Rehabilitation should prepare the client for everyday activity, exercise or sport.",
  "Services should work together rather than operate in isolation.",
  "Objective testing may be used where appropriate to support decision-making and progress tracking.",
];

export default function WhyNxsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why NXS?"
        title="Connected care, from first assessment to long-term performance"
        description="NXS Collective was created to connect treatment, rehabilitation, strength development and long-term physical performance — under one team, working from one plan."
      />

      <section className="border-b border-hairline bg-graphite py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Thinking" title="What we believe about movement health" />
            <ul className="mt-8 flex flex-col gap-5">
              {concepts.map((concept) => (
                <li key={concept} className="border-l border-sand/50 pl-5 text-sm leading-relaxed text-mist md:text-base">
                  {concept}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
            {/*
              REPLACE THIS IMAGE:
              Swap /public/images/anatomical-line-art.svg for a real photo
              or illustration if you'd like — the aspect ratio and border
              will stay identical as long as the file name matches.
            */}
            <Image
              src="/images/anatomical-line-art.svg"
              alt="Anatomical line illustration representing an integrated view of the body"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Pathway"
            title="Assess. Treat. Rebuild. Perform."
            description="A single pathway that carries you from your first assessment through to long-term physical performance — whichever stage you start at."
          />
          <div className="mt-16">
            <PathwaySteps />
          </div>
          <div className="mt-16">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
