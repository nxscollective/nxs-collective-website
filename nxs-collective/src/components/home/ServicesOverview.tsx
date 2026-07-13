import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const services = [
  { title: "Physiotherapy", index: "01", image: "/images/physio-assessment.svg", alt: "Physiotherapist assessing shoulder movement", description: "Clinical assessment and rehabilitation for musculoskeletal pain, injuries, movement limitations and post-operative recovery.", cta: { label: "Book Physiotherapy", href: siteConfig.booking.physiotherapyBookingUrl, external: true } },
  { title: "Sports Therapy", index: "02", image: "/images/sports-therapy-manual.svg", alt: "Sports therapist performing manual therapy", description: "Hands-on therapy, mobility work and exercise-based rehabilitation to support recovery and physical function.", cta: { label: "Explore Sports Therapy", href: "/sports-therapy", external: false } },
  { title: "Personal Training", index: "03", image: "/images/personal-training-session.svg", alt: "Strength coach supervising controlled resistance training", description: "Individualised strength, body-composition and performance training based on your current capacity and goals.", cta: { label: "Explore Personal Training", href: "/personal-training", external: false } },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-hairline bg-graphite py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Our Services" title="Three disciplines. One integrated centre." description="Each service forms part of one connected pathway—from assessment and treatment to rehabilitation, strength and long-term performance." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group overflow-hidden border border-hairline bg-ink transition-all duration-500 hover:-translate-y-1 hover:border-sand/45 hover:shadow-[0_24px_80px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline">
                <Image src={service.image} alt={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 font-display text-[10px] uppercase tracking-[.24em] text-sand">{service.index}</span>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-bone">{service.title}</h3>
                  <ArrowUpRight size={18} className="text-sand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 min-h-[96px] text-sm leading-7 text-mist">{service.description}</p>
                <Button href={service.cta.href} external={service.cta.external} variant="secondary" className="mt-7 w-full" showExternalIcon={false}>{service.cta.label}</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
