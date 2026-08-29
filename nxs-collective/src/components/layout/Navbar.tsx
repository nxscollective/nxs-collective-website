"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-nxs", label: "Why NXS?" },
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/sports-therapy", label: "Sports Therapy" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-ink/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10"
      >
        <Link href="/" className="flex items-center" aria-label="NXS Collective — home">
          {/*
            REPLACE THIS LOGO:
            This is the real NXS Collective logo (public/images/logo-mark.jpg).
            To swap it for an updated version later, replace that file with
            your new artwork using the same file name — the height/width
            below will keep it sized consistently in the nav bar.
          */}
          <Image
            src="/images/logo-mark.jpg"
            alt="NXS Collective"
            width={848}
            height={580}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={isActive}
                  className={`nav-underline text-sm tracking-wide transition-colors duration-300 ${
                    isActive ? "text-bone" : "text-mist hover:text-bone"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={siteConfig.booking.generalBookingUrl}
            external
            variant="primary"
            className="!px-6 !py-2.5 text-xs uppercase tracking-widest2"
            showExternalIcon={false}
          >
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-bone lg:hidden"
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-ink px-6 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-base text-mist hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              href={siteConfig.booking.generalBookingUrl}
              external
              variant="primary"
              className="w-full text-xs uppercase tracking-widest2"
              showExternalIcon={false}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
