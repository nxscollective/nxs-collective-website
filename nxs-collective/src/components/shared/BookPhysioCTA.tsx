import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function BookPhysioCTA({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm text-mist">
        View Samuel&apos;s available appointment schedule and book directly
        through Mindbody.
      </p>
      <Button href={siteConfig.booking.physiotherapyBookingUrl} external variant="primary">
        Book Physiotherapy
      </Button>
    </div>
  );
}
