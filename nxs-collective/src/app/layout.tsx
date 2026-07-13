import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
