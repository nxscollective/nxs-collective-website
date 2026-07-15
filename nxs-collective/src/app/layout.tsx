import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const siteUrl = `https://${siteConfig.business.domain}`;

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
        {/*
          TRUSTINDEX LOADER — SINGLE INSTANCE, SITE-WIDE.
          This is Trustindex's own documented "ReactJS / SPA" integration
          (see https://www.trustindex.io/how-to-insert-your-widgets-code-into-your-site/,
          "Alternative method (ReactJS, ...)"):
            1. A single script tag loading the BASE loader.js, with no widget
               ID in the query string, placed in <head> — this is that script.
               `strategy="beforeInteractive"` is what makes Next.js inject it
               into <head>, per Next's own next/script docs.
            2. Wherever a widget should render, a plain `<div src="...loader.js?WIDGET_ID">`
               marker (see GoogleReviews.tsx) — the loader scans the page for
               these markers and mounts one widget into each.
          Do not add a second copy of this script, and do not load loader.js
          with a widget ID attached anywhere else — that combination (a
          self-mounting ID'd script PLUS a marker div) is what previously
          caused the widget to render twice: once at the marker's correct
          position, and once wherever Next injected the ID'd script tag
          (which turned out to be after the footer).
        */}
        <Script
          src="https://cdn.trustindex.io/loader.js"
          strategy="beforeInteractive"
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
