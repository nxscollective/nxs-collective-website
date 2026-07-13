import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import NexusNetwork from "@/components/shared/NexusNetwork";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-ink">
      <div className="bg-fine-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <NexusNetwork className="pointer-events-none absolute -right-32 -top-16 h-[560px] w-[560px] opacity-40 md:opacity-60" />

      <Container className="relative grid gap-14 py-24 md:grid-cols-2 md:py-32 md:items-center">
        <div className="animate-fadeUp">
          <p className="eyebrow mb-6">Physiotherapy · Sports Therapy · Personal Training</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.12] text-bone sm:text-5xl md:text-6xl">
            Move Better.
            <br />
            Recover Stronger.
            <br />
            Perform at Your Best.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-mist md:text-lg">
            Integrated physiotherapy, sports therapy and personal training
            designed to take you from assessment and recovery to long-term
            strength and performance.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-silver">
            <MapPin size={16} strokeWidth={1.5} />
            Directly above Clarke Quay MRT.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book an Appointment
            </Button>
            <Button href="#services" variant="secondary" showExternalIcon={false}>
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline">
            {/*
              REPLACE THIS IMAGE:
              Swap /public/images/hero-movement-assessment.svg for a real
              photo of a clinical movement assessment or rehabilitation
              session. Keep the same file name (or update the src below)
              and the layout, cropping and border will stay identical.
            */}
            <Image
              src="/images/hero-movement-assessment.svg"
              alt="A clinical movement assessment session at NXS Collective"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
