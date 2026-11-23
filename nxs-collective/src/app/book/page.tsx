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
      description="Choose your service and view our current availability directly through Mindbody. Your booking is confirmed securely in real time."
      widgetId={siteConfig.booking.appointmentsWidgetIds.general}
      fallbackUrl={siteConfig.booking.generalBookingUrl}
      whatsappMessage="Hi NXS Collective, I need some help choosing the right service before booking."
    />
  );
}
