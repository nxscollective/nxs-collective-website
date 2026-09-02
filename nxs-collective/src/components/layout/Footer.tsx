import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { siteConfig, getWhatsappUrl } from "@/config/site";
import { Container } from "@/components/ui/Container";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/why-nxs", label: "Why NXS?" },
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/sports-therapy", label: "Sports Therapy" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-mark.jpg"
              alt="NXS Collective"
              width={848}
              height={580}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Integrated physiotherapy, sports therapy and personal training —
              directly above Clarke Quay MRT, Singapore.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-mist">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-bone transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
              <a
                href={getWhatsappUrl("Hi NXS Collective, I'd like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_click"
                data-analytics-label="Footer WhatsApp"
                className="flex items-center gap-2 hover:text-bone transition-colors"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp Us
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-bone transition-colors"
              >
                <Instagram size={15} strokeWidth={1.5} />
                @nxscollective.sg
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Site</p>
            <ul className="flex flex-col gap-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist hover:text-bone transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 flex items-center gap-2">
              <Clock size={13} strokeWidth={1.75} />
              Hours
            </p>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.contact.operatingHours.map((slot) => (
                <li key={slot.days} className="text-sm text-mist">
                  <span className="block text-bone">{slot.days}</span>
                  {slot.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist/60">
            © {new Date().getFullYear()} {siteConfig.business.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-mist/60 hover:text-bone transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-xs text-mist/60 hover:text-bone transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-mist/50">
          Information on this website is provided for general educational
          purposes and does not replace an individual clinical assessment,
          medical diagnosis or treatment. Treatment and training
          recommendations will vary based on each client&apos;s condition,
          medical history, assessment findings and physical capacity.
        </p>
      </Container>
    </footer>
  );
}
