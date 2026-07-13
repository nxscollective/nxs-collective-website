import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const services = [
  {
    title: "Physiotherapy",
    image: "/images/physio-assessment.svg",
    alt: "Physiotherapist assessing a client's shoulder movement",
    description:
      "Clinical assessment and rehabilitation for musculoskeletal pain, injuries, movement limitations and post-operative recovery.",
    cta: { label: "Book Physiotherapy", href: siteConfig.booking.physiotherapyBookingUrl, external: true },
  },
  {
    title: "Sports Therapy",
    image: "/images/sports-therapy-manual.svg",
    alt: "Sports therapist performing manual therapy on a client",
    description:
      "Hands-on therapy, mobility work and exercise-based rehabilitation to support recovery and physical function.",
    cta: { label: "Learn More", href: "/sports-therapy", external: false },
  },
  {
    title: "Personal Training",
    image: "/images/personal-training-session.svg",
    alt: "Strength coach supervising a client during resistance training",
    description:
      "Individualised strength, body-composition and performance training based on the client's current physical capacity and goals.",
    cta: { label: "Learn More", href: "/personal-training", external: false },
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-hairline bg-graphite py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Three disciplines. One integrated centre."
          description="Every service is delivered by the same team, informed by the same assessment — so care and training always move in the same direction."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col p-0 overflow-hidden">
              <div className="relative aspect-[4/3] w-full border-b border-hairline">
                {/*
                  REPLACE THIS IMAGE:
                  Swap the file in /public/images matching `service.image`
                  above for a real photo. Same file name = zero layout
                  changes.
                */}
                <Image src={service.image} alt={service.alt} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-xl font-semibold text-bone">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
                <div className="mt-7">
                  <Button
                    href={service.cta.href}
                    external={service.cta.external}
                    variant="secondary"
                    className="w-full"
                    showExternalIcon={service.cta.external}
                  >
                    {service.cta.label}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
