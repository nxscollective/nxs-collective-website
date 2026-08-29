import Image from "next/image";
import { Check } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const findings = [
  "Multi-joint strength analysis",
  "Left-to-right strength comparison",
  "Digital movement assessment",
  "Mobility and control screening",
  "Functional movement analysis",
  "Identification of strength deficits",
  "Identification of muscular asymmetries",
  "Identification of movement compensations",
  "Personalised explanation of findings",
  "Recommended next steps",
];

const tiers = [
  {
    name: "Strength Analysis",
    price: "$169",
    description: "Multi-joint strength testing and left-to-right comparison.",
    image: "/images/movement-health/strength-analysis.webp",
    alt: "Objective strength testing using force-plate equipment",
    label: "Book Strength Analysis",
    href: siteConfig.booking.generalBookingUrl,
    highlighted: false,
  },
  {
    name: "Movement Analysis",
    price: "$129",
    description: "Digital movement assessment, mobility and control screening.",
    image: "/images/movement-health/movement-analysis-sketch.webp",
    alt: "Digital motion-capture functional movement assessment",
    label: "Book Movement Analysis",
    href: siteConfig.booking.generalBookingUrl,
    highlighted: false,
  },
  {
    name: "NXS Complete Movement Healthcheck",
    price: "$249",
    description: "Strength and movement analysis combined and interpreted together.",
    image: "/images/movement-health/complete-healthcheck-consultation.webp",
    alt: "Coach and client reviewing complete movement healthcheck results",
    label: "Book Complete Healthcheck",
    href: siteConfig.booking.movementHealthcheckBookingUrl,
    highlighted: true,
  },
];

export default function MovementHealthcheck() {
  return (
    <section className="border-b border-hairline bg-[linear-gradient(120deg,#15171a,#0a0a0b)] py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.55fr] lg:items-end">
          <div>
            <Eyebrow>Know Your Body. Move Better.</Eyebrow>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-bone md:text-4xl">
              NXS Complete
              <br />Movement Healthcheck
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-mist">
              A comprehensive assessment combining objective strength testing and digital movement analysis to identify deficits, asymmetries, mobility restrictions and movement compensations.
            </p>
            <div className="mt-7">
              <Button href={siteConfig.booking.movementHealthcheckBookingUrl} external variant="primary">
                Book Complete Healthcheck
              </Button>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[.24em] text-silver">Recommended · Best Value · Most Comprehensive</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`media-zoom-wrap relative overflow-hidden border bg-ink ${
                  tier.highlighted ? "border-sand shadow-[0_0_40px_rgba(188,166,135,.12)]" : "border-hairline"
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-sand px-4 py-1.5 text-center font-display text-[10px] font-semibold uppercase tracking-[.18em] text-ink">
                    Recommended · Best Value
                  </div>
                )}
                <div className="relative aspect-[16/11] overflow-hidden border-b border-hairline">
                  <Image
                    src={tier.image}
                    alt={tier.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="media-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </div>
                <div className="flex flex-col p-5 text-center">
                  <h3 className="font-display text-base font-semibold uppercase leading-tight text-bone">{tier.name}</h3>
                  <p className="mt-3 font-display text-2xl font-semibold text-sand">{tier.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{tier.description}</p>
                  <Button
                    href={tier.href}
                    external
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="!mt-5 w-full !whitespace-normal !px-3 !py-2.5 text-center text-[11px] leading-snug uppercase tracking-wide"
                    showExternalIcon={false}
                  >
                    {tier.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-hairline pt-10">
          <h3 className="font-display text-xl font-semibold text-bone">What the complete assessment covers</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
            {findings.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist">
                <Check size={15} strokeWidth={2} className="mt-1 shrink-0 text-sand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
