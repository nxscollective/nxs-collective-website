import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import MindbodyAppointmentsWidget from "@/components/booking/MindbodyAppointmentsWidget";
import { Container, Eyebrow } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsappUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "View live availability and book an appointment with NXS Collective in Clarke Quay, Singapore.",
  alternates: { canonical: "/book" },
  robots: { index: false, follow: true },
};

const steps = [
  "Choose the service that best matches your needs",
  "Select your preferred practitioner, date and time",
  "Sign in or create your Mindbody account to confirm",
];

export default function BookPage() {
  const whatsappUrl = getWhatsappUrl(
    "Hi NXS Collective, I need some help choosing the right service before booking.",
  );

  return (
    <>
      <section className="border-b border-hairline bg-[radial-gradient(circle_at_top_right,rgba(188,166,135,.13),transparent_34%),linear-gradient(135deg,#15171a,#09090a)] pt-32 pb-14 md:pt-40 md:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <Eyebrow>Live Availability</Eyebrow>
              <h1 className="max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-bone md:text-6xl">
                Book Your
                <br />Appointment
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
                Choose your service and view our current availability directly through Mindbody. Your booking is confirmed securely in real time.
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
                  How to Book
                </h2>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-4 text-sm leading-relaxed text-mist">
                      <span className="font-display text-xs font-semibold text-sand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 border border-hairline p-6 md:p-7">
                <MessageCircle className="text-sand" size={24} strokeWidth={1.5} />
                <h2 className="mt-4 font-display text-base font-semibold uppercase text-bone">
                  Unsure What to Book?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Message us on WhatsApp and we will help you choose the most appropriate service.
                </p>
                <Button
                  href={whatsappUrl}
                  external
                  variant="secondary"
                  className="mt-5 w-full !whitespace-normal !px-4 text-center text-xs"
                >
                  WhatsApp NXS
                </Button>
              </div>
            </aside>

            <div>
              <div className="border border-sand/40 bg-[#f5f2ec] p-2 shadow-[0_20px_70px_rgba(0,0,0,.35)] md:p-4">
                <MindbodyAppointmentsWidget />
              </div>

              <div className="mt-5 flex flex-col gap-3 border border-hairline bg-panel px-5 py-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
                <span>Having trouble loading the booking calendar?</span>
                <a
                  href={siteConfig.booking.generalBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[.12em] text-sand transition-colors hover:text-bone"
                >
                  Open Mindbody Directly
                  <ArrowUpRight size={15} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
