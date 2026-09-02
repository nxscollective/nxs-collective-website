import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const services = [
  {
    title: "Physiotherapy",
    index: "01",
    pageHref: "/physiotherapy",
    image: "/images/physiotherapy/physio-consult-sketch.webp",
    objectPosition: "50% 43%",
    alt: "Physiotherapist treating a client at NXS Collective",
    description:
      "Clinical assessment and rehabilitation for musculoskeletal pain, injuries, movement limitations and post-operative recovery.",
    cta: {
      label: "Book Physiotherapy",
      href: siteConfig.booking.physiotherapyBookingUrl,
      external: true,
      analyticsEvent: "physio_booking_click",
    },
  },
  {
    title: "Sports Therapy",
    index: "02",
    pageHref: "/sports-therapy",
    image: "/images/sports-therapy/sports-therapy-hero.webp",
    objectPosition: "50% 50%",
    alt: "Sports therapist performing manual therapy",
    description:
      "Hands-on therapy, mobility work and exercise-based rehabilitation to support recovery and physical function.",
    cta: {
      label: "Explore Sports Therapy",
      href: "/sports-therapy",
      external: false,
      analyticsEvent: undefined,
    },
  },
  {
    title: "Personal Training",
    index: "03",
    pageHref: "/personal-training",
    image: "/images/personal-training/personal-training-female.webp",
    objectPosition: "50% 50%",
    alt: "Strength coach supervising controlled resistance training",
    description:
      "Individualised strength, body-composition and performance training based on your current capacity and goals.",
    cta: {
      label: "Explore Personal Training",
      href: "/personal-training",
      external: false,
      analyticsEvent: undefined,
    },
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-hairline bg-graphite py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Three disciplines. One integrated centre."
          description="Each service forms part of one connected pathway—from assessment and treatment to rehabilitation, strength and long-term performance."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="media-zoom-wrap group flex flex-col overflow-hidden border border-hairline bg-ink transition-all duration-500 hover:-translate-y-1 hover:border-sand/45 hover:shadow-[0_24px_80px_rgba(0,0,0,.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="media-zoom object-cover"
                  style={{ objectPosition: service.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 font-display text-[10px] uppercase tracking-[.24em] text-sand">
                  {service.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <Link
                  href={service.pageHref}
                  className="flex items-start justify-between gap-4"
                  aria-label={`Explore ${service.title}`}
                >
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-bone">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-sand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{service.description}</p>
                <Button
                  href={service.cta.href}
                  external={service.cta.external}
                  variant="secondary"
                  className="mt-6 w-full"
                  showExternalIcon={false}
                  analyticsEvent={service.cta.analyticsEvent}
                  analyticsLabel={service.cta.label}
                >
                  {service.cta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
