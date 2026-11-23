import { CalendarDays, MessageCircle } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsappUrl, siteConfig } from "@/config/site";

const bookingOptions = [
  {
    category: "Physiotherapy",
    name: "Initial Physiotherapy Assessment",
    description:
      "A comprehensive initial assessment with Samuel for pain, injuries, rehabilitation and return to activity.",
    meta: "60 minutes · $220",
    href: siteConfig.booking.physiotherapyBookingPath,
    external: false,
    label: "View Physio Availability",
  },
  {
    category: "Sports Therapy",
    name: "Sports & Manual Therapy",
    description:
      "Hands-on treatment, mobility work and exercise-based support for recovery and physical function.",
    meta: "Select your preferred appointment in Mindbody",
    href: siteConfig.booking.generalBookingUrl,
    external: true,
    label: "View Sports Therapy",
  },
  {
    category: "Personal Training",
    name: "Personal Training",
    description:
      "Individualised strength, body-composition and performance training based on your current capacity and goals.",
    meta: "Select your preferred appointment in Mindbody",
    href: siteConfig.booking.generalBookingUrl,
    external: true,
    label: "View Training Availability",
  },
  {
    category: "Movement Health",
    name: "Complete Movement Healthcheck",
    description:
      "Objective strength testing and digital movement analysis combined and interpreted together.",
    meta: "90 minutes · $249",
    href: siteConfig.booking.movementHealthcheckBookingPath,
    external: false,
    label: "View Healthcheck Availability",
  },
  {
    category: "Movement Health",
    name: "Strength Analysis",
    description:
      "Multi-joint objective strength testing with left-to-right comparison and explanation of findings.",
    meta: "45 minutes · $169",
    href: siteConfig.booking.strengthAnalysisBookingPath,
    external: false,
    label: "View Strength Availability",
  },
  {
    category: "Movement Health",
    name: "Movement Analysis",
    description:
      "Digital movement assessment covering mobility, control and functional movement patterns.",
    meta: "45 minutes · $129",
    href: siteConfig.booking.movementAnalysisBookingPath,
    external: false,
    label: "View Movement Availability",
  },
] as const;

export default function GeneralBookingHub() {
  const whatsappUrl = getWhatsappUrl(
    "Hi NXS Collective, I need some help choosing the right service before booking.",
  );

  return (
    <>
      <section className="border-b border-hairline bg-[radial-gradient(circle_at_top_right,rgba(188,166,135,.13),transparent_34%),linear-gradient(135deg,#15171a,#09090a)] pt-32 pb-14 md:pt-40 md:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <Eyebrow>All Services</Eyebrow>
              <h1 className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.05] text-bone md:text-6xl">
                Book Your
                <br />Appointment
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
                Choose the service you need and view the relevant live
                availability through Mindbody.
              </p>
            </div>

            <div className="border-l border-sand/60 pl-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[.2em] text-sand">
                NXS Collective
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                6 Eu Tong Sen Street, #10-17<br />
                SOHO1 @ The Central<br />
                Directly above Clarke Quay MRT
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_2.15fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-hairline bg-panel p-6 md:p-7">
                <CalendarDays className="text-sand" size={25} strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-xl font-semibold uppercase text-bone">
                  All Services
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  Prefer to browse every appointment type together? Open the
                  complete Mindbody service list and choose your preferred
                  service, practitioner, date and time.
                </p>
                <Button
                  href={siteConfig.booking.generalBookingUrl}
                  external
                  showExternalIcon={false}
                  variant="primary"
                  className="mt-6 w-full !whitespace-normal !px-4 text-center text-xs"
                >
                  View All Availability
                </Button>
              </div>

              <div className="mt-5 border border-hairline p-6 md:p-7">
                <MessageCircle className="text-sand" size={24} strokeWidth={1.5} />
                <h2 className="mt-4 font-display text-base font-semibold uppercase text-bone">
                  Unsure What to Book?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Message us on WhatsApp and we will guide you towards the most
                  appropriate starting point.
                </p>
                <Button
                  href={whatsappUrl}
                  external
                  showExternalIcon={false}
                  variant="secondary"
                  className="mt-5 w-full !whitespace-normal !px-4 text-center text-xs"
                >
                  WhatsApp NXS
                </Button>
              </div>
            </aside>

            <div>
              <div className="mb-7">
                <Eyebrow>Choose a Service</Eyebrow>
                <h2 className="font-display text-2xl font-semibold uppercase text-bone md:text-3xl">
                  View the Right Availability
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
                  Select a service below to open its relevant Mindbody booking calendar.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {bookingOptions.map((option) => (
                  <article
                    key={option.name}
                    className="flex min-h-[285px] flex-col border border-hairline bg-panel p-6 transition-colors duration-300 hover:border-sand/50 md:p-7"
                  >
                    <p className="font-display text-xs font-semibold uppercase tracking-[.18em] text-sand">
                      {option.category}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold uppercase leading-tight text-bone">
                      {option.name}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">
                      {option.description}
                    </p>
                    <p className="mt-5 border-t border-hairline pt-4 text-sm font-medium text-silver">
                      {option.meta}
                    </p>
                    <Button
                      href={option.href}
                      external={option.external}
                      showExternalIcon={false}
                      variant="secondary"
                      className="mt-5 w-full !whitespace-normal !px-4 text-center text-xs"
                    >
                      {option.label}
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
