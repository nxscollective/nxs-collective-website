import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingPageView from "@/components/booking/BookingPageView";
import { siteConfig } from "@/config/site";

const widgetUrl = (widgetId: string) =>
  `https://go.mindbodyonline.com/book/widgets/appointments/view/${widgetId}/services`;

const bookingPages = {
  physiotherapy: {
    metadataTitle: "Book Physiotherapy",
    description:
      "Book an initial physiotherapy assessment with Samuel at NXS Collective.",
    titleLines: ["Book", "Physiotherapy"],
    heroDescription:
      "View Samuel's live availability and book your initial physiotherapy assessment directly through Mindbody.",
    widgetId: siteConfig.booking.appointmentsWidgetIds.physiotherapy,
    fallbackUrl: siteConfig.booking.physiotherapyBookingUrl,
    whatsappMessage:
      "Hi NXS Collective, I need some help with booking an initial physiotherapy assessment.",
  },
  "complete-movement-healthcheck": {
    metadataTitle: "Book the NXS Complete Movement Healthcheck",
    description:
      "Book the NXS Complete Movement Healthcheck and view live availability.",
    titleLines: ["Book the Complete", "Movement Healthcheck"],
    heroDescription:
      "Book the complete 90-minute assessment combining objective strength testing and digital movement analysis.",
    widgetId: siteConfig.booking.appointmentsWidgetIds.movementHealthcheck,
    fallbackUrl: widgetUrl(siteConfig.booking.appointmentsWidgetIds.movementHealthcheck),
    whatsappMessage:
      "Hi NXS Collective, I need some help with booking the Complete Movement Healthcheck.",
  },
  "strength-analysis": {
    metadataTitle: "Book Strength Analysis",
    description: "Book an NXS Strength Analysis and view live availability.",
    titleLines: ["Book Your", "Strength Analysis"],
    heroDescription:
      "Book a 45-minute objective strength assessment with multi-joint testing and left-to-right comparison.",
    widgetId: siteConfig.booking.appointmentsWidgetIds.strengthAnalysis,
    fallbackUrl: widgetUrl(siteConfig.booking.appointmentsWidgetIds.strengthAnalysis),
    whatsappMessage: "Hi NXS Collective, I need some help with booking a Strength Analysis.",
  },
  "movement-analysis": {
    metadataTitle: "Book Movement Analysis",
    description: "Book an NXS Movement Analysis and view live availability.",
    titleLines: ["Book Your", "Movement Analysis"],
    heroDescription:
      "Book a 45-minute digital movement assessment covering mobility, control and functional movement patterns.",
    widgetId: siteConfig.booking.appointmentsWidgetIds.movementAnalysis,
    fallbackUrl: widgetUrl(siteConfig.booking.appointmentsWidgetIds.movementAnalysis),
    whatsappMessage: "Hi NXS Collective, I need some help with booking a Movement Analysis.",
  },
} as const;

type BookingService = keyof typeof bookingPages;

function getBookingPage(service: string) {
  return bookingPages[service as BookingService];
}

export function generateStaticParams() {
  return Object.keys(bookingPages).map((service) => ({ service }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const page = getBookingPage(params.service);
  if (!page) return {};

  return {
    title: page.metadataTitle,
    description: page.description,
    alternates: { canonical: `/book/${params.service}` },
    robots: { index: false, follow: true },
  };
}

export default function ServiceBookingPage({ params }: { params: { service: string } }) {
  const page = getBookingPage(params.service);
  if (!page) notFound();

  return (
    <BookingPageView
      titleLines={page.titleLines}
      description={page.heroDescription}
      widgetId={page.widgetId}
      fallbackUrl={page.fallbackUrl}
      whatsappMessage={page.whatsappMessage}
    />
  );
}
