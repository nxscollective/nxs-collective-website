import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import BookPhysioCTA from "@/components/shared/BookPhysioCTA";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy in Clarke Quay, Singapore",
  description:
    "Clinical physiotherapy assessment and rehabilitation for musculoskeletal pain, injuries and post-operative recovery. Book directly through Mindbody.",
};

const conditions = [
  "Neck pain",
  "Lower-back pain",
  "Shoulder conditions",
  "Hip and knee conditions",
  "Sports injuries",
  "Tendon conditions",
  "Joint conditions",
  "Post-operative rehabilitation",
  "Return to exercise",
  "Return to sport",
];

const appointmentIncludes = [
  "Clinical history",
  "Physical assessment",
  "Movement assessment",
  "Strength assessment where appropriate",
  "Manual therapy where appropriate",
  "Rehabilitation exercise",
  "Load management guidance",
  "Home exercise recommendations",
  "Progression planning",
];

export default function PhysiotherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Physiotherapy"
        title="Physiotherapy at NXS Collective"
        description="Physiotherapy at NXS Collective is suitable for musculoskeletal pain, injury rehabilitation, movement limitations and a structured return to activity."
      />

      <section className="border-b border-hairline bg-graphite py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline lg:order-2">
            {/*
              REPLACE THIS IMAGE:
              Swap /public/images/physio-assessment.svg for a real photo of
              a physiotherapy assessment. Same file name = layout unchanged.
            */}
            <Image
              src="/images/physio-assessment.svg"
              alt="Physiotherapist assessing a client's shoulder movement on a treatment plinth"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <SectionHeading eyebrow="Who This Is For" title="Conditions we commonly work with" />
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {conditions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist md:text-base">
                  <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                  {item}
                </li>
              ))}
            </ul>
            <BookPhysioCTA className="mt-10" />
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What To Expect"
            title="What a physiotherapy appointment may involve"
            description="Every appointment is built around your assessment findings, so the exact combination below will vary from person to person."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appointmentIncludes.map((item, index) => (
              <div key={item} className="border border-hairline p-6">
                <p className="eyebrow mb-3 !text-mist">0{index + 1}</p>
                <p className="text-sm leading-relaxed text-bone md:text-base">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mist">
            Physiotherapy at NXS Collective is delivered by a clinician and is
            intended to support recovery and function. It does not guarantee
            a specific outcome, and recommendations will be adjusted based on
            your individual assessment, history and progress.
          </p>
          <BookPhysioCTA className="mt-10" />
        </Container>
      </section>

      <section className="bg-graphite py-20 md:py-24">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Ready to have your condition assessed?
          </h2>
          <div className="mt-8 flex justify-center">
            <BookPhysioCTA />
          </div>
        </Container>
      </section>
    </>
  );
}
