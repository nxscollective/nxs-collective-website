import Image from "next/image";
import { Check, ArrowDown } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
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

const pricingTiers = [
  {
    name: "Strength Analysis",
    price: "$169",
    description: "Multi-joint strength testing and left-to-right comparison.",
    highlighted: false,
  },
  {
    name: "Movement Analysis",
    price: "$129",
    description: "Digital movement assessment and mobility screening.",
    highlighted: false,
  },
  {
    name: "NXS Complete Movement Healthcheck",
    price: "$249",
    description: "Strength analysis and movement analysis, combined and interpreted together.",
    highlighted: true,
  },
];

export default function MovementHealthcheck() {
  return (
    <section className="border-b border-hairline bg-ink py-24 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Flagship Assessment</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-bone">
              NXS Complete Movement Healthcheck
            </h2>
            <p className="mt-4 font-display text-2xl text-sand">$249</p>
            <p className="mt-5 text-lg text-bone">
              Understand How Your Body Moves, Performs and Compensates.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              The NXS Complete Movement Healthcheck combines objective
              strength testing with digital movement analysis to identify
              strength deficits, muscular asymmetries, mobility restrictions
              and movement compensations — giving you a clearer picture of
              your physical capacity, movement quality and areas requiring
              further development.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                href={siteConfig.booking.movementHealthcheckBookingUrl}
                external
                variant="primary"
              >
                Book Complete Healthcheck
              </Button>
              <Button href="#healthcheck-details" variant="secondary" showExternalIcon={false}>
                Learn More
                <ArrowDown size={15} strokeWidth={1.75} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/*
              REPLACE THESE IMAGES:
              Swap the two files in /public/images below for real photos
              of dynamometer strength testing and a digital movement
              assessment session. Same file names = zero layout changes.
            */}
            <div className="relative aspect-[3/4] overflow-hidden border border-hairline">
              <Image
                src="/images/dynamometer-strength-test.svg"
                alt="Strength testing using a hand-held dynamometer"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden border border-hairline">
              <Image
                src="/images/digital-movement-assessment.svg"
                alt="Digital movement assessment with motion markers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div id="healthcheck-details" className="mt-24 scroll-mt-24 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">
              What the assessment covers
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {findings.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                  <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-sand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-bone">
              Choose your assessment
            </h3>
            <div className="mt-6 grid gap-4">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  highlighted={tier.highlighted}
                  className="flex items-center justify-between gap-6"
                >
                  <div>
                    {tier.highlighted && (
                      <p className="eyebrow mb-2 !text-sand">Recommended · Best Value</p>
                    )}
                    <p className="font-display text-base font-semibold text-bone">
                      {tier.name}
                    </p>
                    <p className="mt-1 text-sm text-mist">{tier.description}</p>
                  </div>
                  <p className="font-display shrink-0 text-2xl font-semibold text-bone">
                    {tier.price}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
