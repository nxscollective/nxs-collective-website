import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import PathwaySteps from "@/components/shared/PathwaySteps";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Check, ClipboardList, LineChart, SearchCheck, Trophy, Users } from "lucide-react";

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

const pathway = [
  { label: "Assessment", description: "Understanding your current strength, movement and history.", icon: SearchCheck },
  { label: "Programme Design", description: "A plan built around your goals and weekly availability.", icon: ClipboardList },
  { label: "Coaching", description: "Supervised sessions with attention to technique and load.", icon: Users },
  { label: "Progress Tracking", description: "Monitoring progress so your programme keeps evolving.", icon: LineChart },
  { label: "Long-Term Results", description: "Sustainable strength and performance beyond the short term.", icon: Trophy },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Training"
        title="Personal Training at NXS Collective"
        description="Individualised strength, body-composition and performance training based on your current physical capacity and goals — supervised by trained coaches."
        image={{
          src: "/images/personal-training/personal-training-female.webp",
          alt: "Personal trainer coaching a client through resistance training at NXS Collective",
          objectPosition: "50% 35%",
        }}
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="What We Train For" title="What personal training can focus on" />
          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist md:text-base">
                <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A structured path to long-term results"
            description="Every programme follows the same considered pathway, individualised to you at each stage."
          />
          <div className="mt-12">
            <PathwaySteps stages={pathway} />
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Start with a consultation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mist md:text-base">
            Tell us about your current training, injury history and goals,
            and we&apos;ll recommend a suitable starting point.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
