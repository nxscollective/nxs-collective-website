import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import BookPhysioCTA from "@/components/shared/BookPhysioCTA";
import TreatmentCard from "@/components/shared/TreatmentCard";
import { Check, Dumbbell, Gauge } from "lucide-react";

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

const treatments = [
  {
    title: "Manual Therapy",
    description: "Hands-on joint and soft-tissue techniques to support pain relief and mobility.",
    image: { src: "/images/physiotherapy/manual-therapy-1.webp", alt: "Physiotherapist performing manual therapy on a client" },
  },
  {
    title: "Therapeutic Ultrasound",
    description: "Targeted ultrasound therapy used to support tissue healing and reduce discomfort.",
    image: { src: "/images/physiotherapy/therapeutic-ultrasound.webp", alt: "Therapeutic ultrasound being applied during a physiotherapy session" },
  },
  {
    title: "Shockwave Therapy",
    description: "Focused shockwave treatment for persistent tendon and soft-tissue conditions.",
    image: { src: "/images/physiotherapy/shockwave-therapy.webp", alt: "Shockwave therapy device being used on a client" },
  },
  {
    title: "Exercise Rehabilitation",
    description: "Structured, progressive exercise to rebuild strength, control and confidence.",
    icon: Dumbbell,
  },
  {
    title: "Strength Assessment",
    description: "Objective strength testing used to guide and track your rehabilitation plan.",
    icon: Gauge,
  },
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
      {/*
        REAL PHOTOGRAPH — never regenerate or replace this image. The
        original, unedited file lives in /image-sources/physiotherapy/ for
        reference. Only CSS crop/position/gradient/brightness are applied
        here, exactly as the creative direction specifies.
      */}
      <PageHero
        eyebrow="Physiotherapy"
        title="Physiotherapy at NXS Collective"
        description="Physiotherapy at NXS Collective is suitable for musculoskeletal pain, injury rehabilitation, movement limitations and a structured return to activity."
        image={{
          src: "/images/physiotherapy/physio-hero-samuel.webp",
          alt: "Samuel, physiotherapist at NXS Collective, treating a client",
          objectPosition: "62% 38%",
          brightness: 1.12,
        }}
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Who This Is For" title="Conditions we commonly work with" />
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist md:text-base">
                <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                {item}
              </li>
            ))}
          </ul>
          <BookPhysioCTA className="mt-9" />
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Treatment"
            title="What treatment may involve"
            description="The exact combination depends on your assessment findings."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.title} {...treatment} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="What To Expect"
            title="What a physiotherapy appointment may involve"
            description="Every appointment is built around your assessment findings, so the exact combination below will vary from person to person."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {appointmentIncludes.map((item, index) => (
              <div key={item} className="border border-hairline p-5">
                <p className="eyebrow mb-2.5 !text-mist">0{index + 1}</p>
                <p className="text-sm leading-relaxed text-bone md:text-base">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 max-w-2xl text-sm leading-relaxed text-mist">
            Physiotherapy at NXS Collective is delivered by a clinician and is
            intended to support recovery and function. It does not guarantee
            a specific outcome, and recommendations will be adjusted based on
            your individual assessment, history and progress.
          </p>
          <BookPhysioCTA className="mt-9" />
        </Container>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold text-bone md:text-3xl">
            Ready to have your condition assessed?
          </h2>
          <div className="mt-7 flex justify-center">
            <BookPhysioCTA />
          </div>
        </Container>
      </section>
    </>
  );
}
