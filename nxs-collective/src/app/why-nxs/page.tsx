import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import PathwaySteps from "@/components/shared/PathwaySteps";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Why NXS? | Our Approach to Movement Health",
  description:
    "Why NXS Collective connects physiotherapy, sports therapy and personal training into one assessment-led pathway, in Clarke Quay, Singapore.",
  alternates: {
    canonical: "/why-nxs",
  },
};

const thinkingConcepts = [
  "Pain and injury should not be treated separately from movement and strength.",
  "Clients should have a clear progression pathway, not a single isolated appointment.",
  "Rehabilitation should prepare the client for everyday activity, exercise or sport.",
];

const workingConcepts = [
  "Assessment should guide treatment and training — not the other way around.",
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

      {/* Band 1 — light, image left / text right */}
      <section className="border-b border-black/10 bg-[#f1efe9] py-14 text-ink md:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-black/10 order-2 lg:order-1">
            <Image
              src="/images/physiotherapy/manual-therapy-sketch.webp"
              alt="Hands-on treatment at NXS Collective"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-display text-xs font-semibold uppercase tracking-[.24em] text-sand-dim">Our Thinking</p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">
              What we believe about movement health
            </h2>
            <ul className="mt-7 flex flex-col gap-4">
              {thinkingConcepts.map((concept) => (
                <li key={concept} className="border-l-2 border-sand pl-5 text-sm leading-relaxed text-[#55565a] md:text-base">
                  {concept}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Band 2 — dark, pathway, subtle carbon-fibre texture */}
      <section className="relative overflow-hidden border-b border-hairline bg-ink py-14 md:py-16">
        <div className="bg-carbon pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">The Pathway</p>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-bone md:text-4xl">
              Assess. Treat. Rebuild. Perform.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist">
              A single pathway that carries you from your first assessment
              through to long-term physical performance — whichever stage
              you start at.
            </p>
          </div>
          <div className="mt-14">
            <PathwaySteps />
          </div>
        </Container>
      </section>

      {/* Band 3 — light, image right / text left */}
      <section className="border-b border-black/10 bg-[#f1efe9] py-14 text-ink md:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[.24em] text-sand-dim">How We Work</p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">
              Assessment leads. Everything else follows.
            </h2>
            <ul className="mt-7 flex flex-col gap-4">
              {workingConcepts.map((concept) => (
                <li key={concept} className="border-l-2 border-sand pl-5 text-sm leading-relaxed text-[#55565a] md:text-base">
                  {concept}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-black/10">
            <Image
              src="/images/movement-health/complete-healthcheck-consultation.webp"
              alt="Coach and client reviewing assessment results together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </div>
        </Container>
      </section>

      {/* Band 4 — closing banner with CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/personal-training/personal-training-female.webp"
            alt="Coaching in progress at NXS Collective"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        </div>
        <Container className="relative z-10 flex min-h-[320px] flex-col items-center justify-center py-16 text-center md:min-h-[360px]">
          <h2 className="font-display max-w-xl text-2xl font-semibold uppercase leading-tight text-bone md:text-3xl">
            One team. One plan. Every stage of your progress.
          </h2>
          <div className="mt-8">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
