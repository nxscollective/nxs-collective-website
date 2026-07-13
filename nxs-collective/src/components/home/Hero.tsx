import Image from "next/image";
import { Activity, HeartPulse, MapPin, Target, UserRound } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const benefits = [
  { icon: UserRound, title: "Individualised Care", text: "Assessment-led plans built around you." },
  { icon: Target, title: "Objective Assessment", text: "Strength and movement data where appropriate." },
  { icon: Activity, title: "Integrated Approach", text: "Treatment, rehabilitation and training connected." },
  { icon: HeartPulse, title: "Long-Term Capacity", text: "Progress beyond short-term symptom management." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-ink pt-20">
      <div className="grid min-h-[650px] lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:px-[max(2.5rem,calc((100vw-72rem)/2))] lg:pr-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(188,166,135,.12),transparent_42%)]" />
          <div className="relative max-w-2xl animate-fadeUp">
            <p className="eyebrow mb-6">Movement Health · Rehabilitation · Performance</p>
            <h1 className="font-display text-5xl font-semibold uppercase leading-[.98] tracking-[-0.035em] text-bone sm:text-6xl xl:text-7xl">
              Move Better.
              <br />
              Recover Stronger.
              <br />
              <span className="text-sand">Perform at Your Best.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist md:text-lg">
              Integrated physiotherapy, sports therapy and personal training designed to take you from assessment and recovery to long-term strength and performance.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-silver">
              <MapPin size={16} strokeWidth={1.5} /> Directly above Clarke Quay MRT.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">
                Book an Appointment
              </Button>
              <Button href="#services" variant="secondary" showExternalIcon={false}>
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] lg:min-h-full">
          <Image
            src="/images/hero-movement-assessment.svg"
            alt="Clinical movement assessment at NXS Collective"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/20 to-transparent lg:from-ink/55" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </div>

      <Container className="relative -mt-px grid border border-hairline bg-graphite/95 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className={`flex gap-4 px-6 py-6 ${index ? "border-t border-hairline sm:border-l sm:border-t-0" : ""}`}>
              <Icon size={24} strokeWidth={1.35} className="mt-0.5 shrink-0 text-sand" />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-bone">{benefit.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-mist">{benefit.text}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
