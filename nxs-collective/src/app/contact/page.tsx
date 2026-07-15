import type { Metadata } from "next";
import { Mail, Instagram, MapPin, Clock } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsappUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NXS Collective above Clarke Quay MRT, Singapore — book an appointment, send an enquiry or message us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Tell us what you are currently experiencing and our team will guide you towards the most suitable starting point."
        image={{
          src: "/images/homepage/hero-home.webp",
          alt: "The NXS Collective training and treatment space",
          objectPosition: "70% 35%",
        }}
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Send an Enquiry" title="Send us a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div>
              <p className="eyebrow mb-4">Contact Details</p>
              <ul className="flex flex-col gap-4 text-sm text-mist md:text-base">
                <li className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sand" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-bone">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sand" />
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bone"
                  >
                    @nxscollective.sg
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sand" />
                  {siteConfig.contact.address}
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <Clock size={14} strokeWidth={1.75} />
                Operating Hours
              </p>
              <ul className="flex flex-col gap-2 text-sm text-mist md:text-base">
                {siteConfig.contact.operatingHours.map((slot) => (
                  <li key={slot.days} className="flex items-center justify-between gap-6 border-b border-hairline pb-2">
                    <span>{slot.days}</span>
                    <span className="text-bone">{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={siteConfig.booking.generalBookingUrl} external variant="primary" className="flex-1">
                Book Now
              </Button>
              <Button
                href={getWhatsappUrl("Hi NXS Collective, I'd like to make an enquiry.")}
                external
                variant="secondary"
                className="flex-1"
              >
                WhatsApp Us
              </Button>
            </div>

            <div>
              <p className="eyebrow mb-4">Location</p>
              {siteConfig.contact.mapEmbedUrl ? (
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  className="h-64 w-full border border-hairline"
                  loading="lazy"
                  title="NXS Collective location map"
                />
              ) : (
                <div className="flex h-64 w-full flex-col items-center justify-center gap-2 border border-hairline bg-ink text-center">
                  <MapPin size={22} strokeWidth={1.5} className="text-mist" />
                  <p className="px-6 text-sm text-mist">
                    Map will appear here once a Google Maps embed link is
                    added to <code className="text-silver">config/site.ts</code>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
