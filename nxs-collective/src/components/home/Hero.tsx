import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

/**
 * Homepage hero — full-bleed approved photograph with a left-to-right dark
 * gradient for text legibility. Deliberately height-constrained (not
 * min-h-screen) so nav + heading + copy + CTAs + most of the image are
 * visible on a normal laptop viewport without scrolling.
 *
 * REPLACE THIS IMAGE: swap /public/images/homepage/hero-home.webp — the
 * original, unedited source lives in /image-sources/homepage/ for
 * reference. Keep the same file name to avoid touching this component.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/homepage/hero-home.webp"
          alt="An NXS Collective coach assessing a client's shoulder in the training space"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "68% 35%" }}
        />
        {/* Left-to-right dark gradient — keeps the text panel legible while
            letting the image read clearly on the right and blend at the
            edges rather than sit behind a hard rectangular panel. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20 md:to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[560px] items-center py-16 md:min-h-[600px] lg:min-h-[640px] lg:py-20">
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow mb-6">Movement Health · Rehabilitation · Performance</p>
          <h1 className="font-display text-[2.75rem] font-semibold uppercase leading-[.96] tracking-[-0.03em] text-bone sm:text-6xl xl:text-[4.5rem]">
            Move Better.
            <br />
            Recover Stronger.
            <br />
            <span className="text-sand">Perform at Your Best.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist md:text-lg">
            Integrated physiotherapy, sports therapy and personal training
            designed to take you from assessment and recovery to long-term
            strength and performance.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-silver">
            <MapPin size={16} strokeWidth={1.5} /> Directly above Clarke Quay MRT.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
              Book an Appointment
            </Button>
            <Button href="#services" variant="secondary" showExternalIcon={false}>
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 right-6 z-10 hidden max-w-[230px] border border-white/10 bg-black/30 p-5 backdrop-blur-md md:right-10 lg:block">
        <p className="eyebrow !text-[9px]">The NXS Pathway</p>
        <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-bone">
          Assess → Treat → Rebuild → Perform
        </p>
      </div>
    </section>
  );
}
