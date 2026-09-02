import { siteConfig } from "@/config/site";

export const siteUrl = `https://${siteConfig.business.domain}`;
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

const openingHoursSpecification = siteConfig.contact.operatingHours.flatMap((slot) => {
  if (!slot.opens || !slot.closes) return [];

  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.schemaDays.map((day) => `https://schema.org/${day}`),
      opens: slot.opens,
      closes: slot.closes,
    },
  ];
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": organizationId,
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: siteUrl,
  email: siteConfig.contact.email,
  image: `${siteUrl}/images/logo-full.jpg`,
  description:
    "Integrated physiotherapy, sports therapy and personal training in Clarke Quay, Singapore.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Eu Tong Sen Street, #10-17, SOHO1 @ The Central",
    addressLocality: "Singapore",
    postalCode: "059817",
    addressCountry: "SG",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  sameAs: [siteConfig.contact.instagramUrl],
  openingHoursSpecification,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NXS Collective Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Physiotherapy",
          url: `${siteUrl}/physiotherapy`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Therapy",
          url: `${siteUrl}/sports-therapy`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
          url: `${siteUrl}/personal-training`,
        },
      },
    ],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: siteConfig.business.name,
  publisher: {
    "@id": organizationId,
  },
  inLanguage: "en-SG",
};

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name,
    serviceType,
    description,
    url: `${siteUrl}${path}`,
    provider: {
      "@id": organizationId,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
  };
}

export const samuelPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/physiotherapy/samuel-mak#person`,
  name: "Samuel Mak Han Wei",
  jobTitle: "Clinical Director & Principal Physiotherapist",
  url: `${siteUrl}/physiotherapy/samuel-mak`,
  worksFor: {
    "@id": organizationId,
  },
  knowsAbout: [
    "Physiotherapy",
    "Musculoskeletal physiotherapy",
    "Racket-sport injuries",
    "Knee rehabilitation",
    "Neck pain",
    "Lower-back pain",
    "Progressive strength rehabilitation",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional registration",
    name: "AHPC-registered physiotherapist",
  },
};
