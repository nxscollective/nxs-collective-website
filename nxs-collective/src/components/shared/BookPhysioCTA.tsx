import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function BookPhysioCTA({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm text-mist">View Our Availability</p>
      <Button
        href={siteConfig.booking.physiotherapyBookingUrl}
        external
        variant="primary"
        analyticsEvent="physio_booking_click"
        analyticsLabel="Physiotherapy Booking"
      >
        Book Physiotherapy
      </Button>
    </div>
  );
}
