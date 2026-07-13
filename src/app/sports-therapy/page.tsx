import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Sports Therapy in Clarke Quay, Singapore",
  description:
    "Hands-on sports therapy, soft-tissue work and exercise-based rehabilitation to support recovery, mobility and physical function in Singapore.",
};

const techniques = [
  "Soft-tissue therapy",
  "Instrument-assisted soft-tissue mobilisation",
  "Dry cupping",
  "Trigger-point therapy",
  "Assisted stretching",
  "Mobility work",
  "Exercise-based rehabilitation",
  "Recovery support",
];

const suitedFor = [
  "Muscular tightness",
  "Restricted mobility",
  "Exercise-related soreness",
  "Recovery support",
  "Active individuals",
  "Office workers",
  "Recreational athletes",
];

export default function SportsTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports Therapy"
        title="Sports Therapy at NXS Collective"
        description="Hands-on therapy, mobility work and exercise-based rehabilitation to support recovery and physical function — for active individuals and everyday clients alike."
      />

      <section className="border-b border-hairline bg-graphite py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
            {/*
              REPLACE THIS IMAGE:
              Swap /public/images/sports-therapy-manual.svg for a real photo
              of a manual therapy session. Same file name = layout unchanged.
            */}
            <Image
              src="/images/sports-therapy-manual.svg"
              alt="Sports therapist performing manual therapy on a client's calf"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Techniques" title="What sports therapy may include" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {techniques.map((item) => (
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
            eyebrow="Who This Is For"
            title="Who sports therapy may be suitable for"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suitedFor.map((item) => (
              <Card key={item} className="text-sm text-mist md:text-base">
                {item}
              </Card>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mist">
            Sports therapy is a hands-on, exercise-based service and is not a
            substitute for a medical assessment or diagnosis. If you have an
            unclear or ongoing medical concern, our physiotherapy service —
            or your doctor — is the appropriate starting point.
          </p>
        </Container>
      </section>

      <section className="bg-graphite py-20 md:py-24">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Ready to book a sports therapy session?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
