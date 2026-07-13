/**
 * ─────────────────────────────────────────────────────────────────────────
 *  NXS COLLECTIVE — SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────
 *  This is the ONLY file you should need to edit for day-to-day changes:
 *  booking links, contact details, address and opening hours.
 *
 *  Every "Book Now" / "Book Physiotherapy" / "Book Complete Healthcheck"
 *  button on the whole website reads its link from this file. Nothing is
 *  hard-coded on individual pages, so changing a value here updates it
 *  everywhere on the site automatically.
 *
 *  HOW TO EDIT:
 *  1. Find the field you want to change below (e.g. physiotherapyBookingUrl).
 *  2. Replace the placeholder text between the quotes " " with your real
 *     link or detail.
 *  3. Save the file. That's it — no other file needs to change.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  business: {
    name: "NXS Collective",
    legalName: "NXS Collective Pte Ltd",
    domain: "nxscollective.net",
    tagline: "Physiotherapy · Sports Therapy · Personal Training",
  },

  /**
   * BOOKING LINKS
   * ─────────────────────────────────────────────────────────────────────
   * Booking links for NXS Collective are configured below.
   * Every button labelled "Book Now" / "Book an Appointment" across the
   * site uses `generalBookingUrl`. Buttons specific to a service use their
   * own dedicated link so clients land on the correct Mindbody schedule.
   *
   * Where to get these links: log in to your Mindbody business dashboard →
   * Marketing → Widgets & Links (or Bookable Items) → copy the "Direct
   * link" for the relevant service or staff schedule.
   */
  booking: {
    // General "Book Now" button in the navigation bar and most CTAs.
    generalBookingUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=5753749&stype=-9&sView=day&sLoc=1",

    // Used by every "Book Physiotherapy" button. Point this at Samuel's
    // Mindbody staff schedule so clients see his real available times.
    physiotherapyBookingUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=5753749&stype=-9&sTG=4&sView=day&sLoc=1&sTrn=100000001",

    // Used by the "Book Complete Healthcheck" button on the homepage.
    movementHealthcheckBookingUrl:
      "https://clients.mindbodyonline.com/classic/ws?studioid=5753749&stype=-9&sTG=7&sView=day&sLoc=1&sTrn=100000001",
  },

  /**
   * CONTACT DETAILS
   * ─────────────────────────────────────────────────────────────────────
   */
  contact: {
    email: "contact@nxscollective.net",

    // Digits only, with country code, no spaces or symbols (used to build
    // the wa.me WhatsApp deep link). e.g. "6591234567" for a Singapore
    // mobile number +65 9123 4567.
    whatsappNumber: "6583153134",

    instagramUrl: "https://instagram.com/nxscollective.sg",

    address: "6 Eu Tong Sen Street, #10-17, SOHO1 @ The Central, Singapore 059817",

    // Displayed on the Contact page and in the footer. Replace with your
    // real opening hours once confirmed.
    operatingHours: [
      { days: "Monday – Thursday", hours: "8:00 AM – 9:00 PM" },
      { days: "Friday", hours: "Closed" },
      { days: "Saturday – Sunday", hours: "8:00 AM – 6:00 PM" },
    ],

    // Used for the Contact page map placeholder. Replace with a real
    // Google Maps embed URL once available (Google Maps → Share → Embed
    // a map → copy the src="..." value).
    mapEmbedUrl: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Builds a wa.me WhatsApp link with an optional pre-filled message.
 * Used anywhere the site shows a "WhatsApp Us" button.
 */
export function getWhatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Builds a mailto: link for the enquiries email address.
 */
export function getMailtoUrl(subject?: string): string {
  const base = `mailto:${siteConfig.contact.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
