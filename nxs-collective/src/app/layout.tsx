import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import AnalyticsEventListener from "@/components/analytics/AnalyticsEventListener";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const siteUrl = `https://${siteConfig.business.domain}`;

/**
 * GA4 measurement ID for NXS Collective's Google Analytics property.
 * This is a public, client-exposed identifier (it ships inside the GA
 * script tag itself once loaded) — not a secret — so it's safe to keep
 * as a plain constant here rather than an environment variable.
 */
const GA_MEASUREMENT_ID = "G-HE22N55HMK";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "NXS Collective | Physiotherapy, Sports Therapy & Personal Training, Clarke Quay Singapore",
    template: "%s | NXS Collective",
  },
  description:
    "NXS Collective is an integrated physiotherapy, sports therapy and personal training centre above Clarke Quay MRT, Singapore — assessment-led care from recovery to performance.",
  keywords: [
    "physiotherapy Singapore",
    "sports therapy Singapore",
    "personal training Singapore",
    "movement assessment Singapore",
    "Clarke Quay physiotherapy",
    "Clarke Quay personal training",
  ],
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: siteUrl,
    siteName: "NXS Collective",
    title:
      "NXS Collective | Physiotherapy, Sports Therapy & Personal Training",
    description:
      "Integrated physiotherapy, sports therapy and personal training above Clarke Quay MRT, Singapore.",
    images: [
      {
        url: "/images/logo-full.jpg",
        width: 1098,
        height: 706,
        alt: "NXS Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NXS Collective",
    description:
      "Integrated physiotherapy, sports therapy and personal training above Clarke Quay MRT, Singapore.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <AnalyticsEventListener />

        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
      {/*
        GOOGLE ANALYTICS (GA4) — SINGLE INSTANCE, SITE-WIDE, PRODUCTION ONLY.
        Uses the official @next/third-parties/google integration, placed as
        a sibling to <body> per Next.js's own documented pattern:
        https://nextjs.org/docs/app/guides/third-party-libraries
        Gated on NODE_ENV so it never fires during local development or
        preview/test runs — only on `next build && next start` / production
        deploys, where NODE_ENV is automatically set to "production".
      */}
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
