import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import TreatmentCard from "@/components/shared/TreatmentCard";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildServiceJsonLd } from "@/lib/seo";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sports Therapy Singapore | Clarke Quay",
  description:
    "Sports therapy in Clarke Quay, Singapore with hands-on soft-tissue work, mobility support and exercise-based rehabilitation for active individuals and everyday clients.",
  alternates: {
    canonical: "/sports-therapy",
  },
};

const sportsTherapyJsonLd = buildServiceJsonLd({
  name: "Sports Therapy at NXS Collective",
  description:
    "Hands-on sports therapy, soft-tissue work, mobility support and exercise-based rehabilitation in Singapore.",
  path: "/sports-therapy",
  serviceType: "Sports Therapy",
});

const treatments = [
  {
    title: "IASTM",
    description: "Instrument-assisted soft-tissue mobilisation to address tightness and restricted mobility.",
    image: { src: "/images/sports-therapy/iastm.webp", alt: "Instrument-assisted soft-tissue mobilisation being performed" },
  },
  {
    title: "Clinical Dry Cupping",
    description: "Targeted dry cupping used to support recovery and reduce muscular tightness.",
    image: { src: "/images/sports-therapy/dry-cupping.webp", alt: "Clinical dry cupping being applied to a client's back" },
  },
  {
    title: "Soft-Tissue & Mobility Work",
    description: "Trigger-point therapy, assisted stretching and exercise-based rehabilitation for recovery and movement.",
    icon: Sparkles,
  },
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
      <JsonLd data={sportsTherapyJsonLd} />

      <PageHero
        eyebrow="Sports Therapy"
        title="Sports Therapy at NXS Collective"
        description="Hands-on therapy, mobility work and exercise-based rehabilitation to support recovery and physical function — for active individuals and everyday clients alike."
        image={{
          src: "/images/sports-therapy/sports-therapy-hero.webp",
          alt: "Sports therapist treating a client at NXS Collective",
          objectPosition: "60% 35%",
        }}
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Techniques" title="What sports therapy may include" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.title} {...treatment} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who This Is For"
            title="Who sports therapy may be suitable for"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suitedFor.map((item) => (
              <Card key={item} className="flex items-center gap-2.5 !p-5 text-sm text-mist md:text-base">
                <Check size={16} strokeWidth={1.75} className="shrink-0 text-sand" />
                {item}
              </Card>
            ))}
          </div>
          <p className="mt-9 max-w-2xl text-sm leading-relaxed text-mist">
            Sports therapy is a hands-on, exercise-based service and is not a
            substitute for a medical assessment or diagnosis. If you have an
            unclear or ongoing medical concern, our{" "}
            <Link href="/physiotherapy" className="transition-colors hover:text-bone">
              physiotherapy service
            </Link>{" "}
            — or your doctor — is the appropriate starting point.
          </p>
        </Container>
      </section>

      <section className="bg-graphite py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Ready to book a sports therapy session?
          </h2>
          <div className="mt-7 flex justify-center">
            <Button
              href={siteConfig.booking.generalBookingUrl}
              external
              variant="primary"
              analyticsEvent="sports_therapy_booking_click"
              analyticsLabel="Sports Therapy Booking"
            >
              Book Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
