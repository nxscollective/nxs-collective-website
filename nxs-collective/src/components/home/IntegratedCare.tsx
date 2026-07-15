import { Container, SectionHeading } from "@/components/ui/Container";
import PathwaySteps from "@/components/shared/PathwaySteps";

export default function IntegratedCare() {
  return (
    <section className="border-b border-hairline bg-ink py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="One Team. One Integrated Approach."
          description="Pain, movement, strength and long-term performance are rarely separate problems, so at NXS Collective they are not treated as separate services. Our physiotherapists, sports therapists and strength coaches work from one shared assessment and one shared plan."
        />

        <div className="mt-12">
          <PathwaySteps />
        </div>
      </Container>
    </section>
  );
}
