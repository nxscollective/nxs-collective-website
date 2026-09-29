import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function BookPhysioCTA({
  className,
  label = "Book Physiotherapy",
  buttonClassName,
}: {
  className?: string;
  label?: string;
  buttonClassName?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm text-mist">View Our Availability</p>
      <Button
        href={siteConfig.booking.physiotherapyBookingUrl}
        external
        variant="primary"
        className={buttonClassName}
        analyticsEvent="physio_booking_click"
        analyticsLabel="Physiotherapy Booking"
      >
        {label}
      </Button>
    </div>
  );
}
