import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsappUrl } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="bg-graphite py-16 md:py-20">
      <Container className="text-center">
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight text-bone md:text-4xl">
          Not Sure Which Service You Need?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist md:text-lg">
          Tell us what you are currently experiencing and our team will guide
          you towards the most suitable starting point.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button
            href={getWhatsappUrl("Hi NXS Collective, I'd like some guidance on which service is right for me.")}
            external
            variant="secondary"
          >
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
