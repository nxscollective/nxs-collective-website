import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/why-nxs", label: "Why NXS?" },
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/sports-therapy", label: "Sports Therapy" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-mark.jpg"
              alt="NXS Collective"
              width={848}
              height={580}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Integrated physiotherapy, sports therapy and personal training —
              directly above Clarke Quay MRT, Singapore.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-mist">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-bone transition-colors"
              >
                <Mail size={16} strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-bone transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
                @nxscollective.sg
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} strokeWidth={1.5} />
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Site</p>
            <ul className="flex flex-col gap-3">
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
            <p className="eyebrow mb-4">Legal</p>
            <ul className="flex flex-col gap-3">
              <li>
                {/* Placeholder page — replace href with a real /privacy-policy
                    route once your policy is drafted. */}
                <span className="text-sm text-mist">Privacy Policy (coming soon)</span>
              </li>
              <li>
                {/* Placeholder page — replace href with a real /terms route
                    once your terms are drafted. */}
                <span className="text-sm text-mist">Terms &amp; Conditions (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-hairline pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-mist/80">
            Information on this website is provided for general educational
            purposes and does not replace an individual clinical assessment,
            medical diagnosis or treatment. Treatment and training
            recommendations will vary based on each client&apos;s condition,
            medical history, assessment findings and physical capacity.
          </p>
          <p className="mt-6 text-xs text-mist/60">
            © {new Date().getFullYear()} {siteConfig.business.legalName}. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
