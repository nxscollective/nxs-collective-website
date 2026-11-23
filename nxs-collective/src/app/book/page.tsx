import type { Metadata } from "next";
import BookingPageView from "@/components/booking/BookingPageView";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "View live availability and book an appointment with NXS Collective in Clarke Quay, Singapore.",
  alternates: { canonical: "/book" },
  robots: { index: false, follow: true },
};

export default function BookPage() {
  return (
    <BookingPageView
      titleLines={["Book Your", "Appointment"]}
      description="Choose from all NXS Collective services and view live availability directly through Mindbody."
      widgetId={siteConfig.booking.appointmentsWidgetIds.general}
      fallbackUrl={siteConfig.booking.generalBookingUrl}
      whatsappMessage="Hi NXS Collective, I need some help choosing the right service before booking."
    />
  );
}
