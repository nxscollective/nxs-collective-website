import type { Metadata } from "next";
import GeneralBookingHub from "@/components/booking/GeneralBookingHub";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "View live availability and book an appointment with NXS Collective in Clarke Quay, Singapore.",
  alternates: { canonical: "/book" },
  robots: { index: false, follow: true },
};

export default function BookPage() {
  return <GeneralBookingHub />;
}
