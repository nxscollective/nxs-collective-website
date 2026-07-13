import Image from "next/image";
import { Activity, ArrowDown, HeartPulse, MapPin, Target, UserRound } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-hairline bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(188,166,135,.14),transparent_28%),radial-gradient(circle_at_82%_36%,rgba(124,135,148,.12),transparent_34%)]" />
      <div className="grid min-h-[720px] lg:grid-cols-[1.04fr_.96fr]">
        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:px-[max(2.5rem,calc((100vw-72rem)/2))] lg:pr-16">
          <div className="relative z-10 max-w-2xl animate-fadeUp">
            <p className="eyebrow mb-7">Movement Health · Rehabilitation · Performance</p>
            <h1 className="font-display text-[3.25rem] font-semibold uppercase leading-[.94] tracking-[-0.045em] text-bone sm:text-6xl xl:text-[5.15rem]">
              Move Better.
              <br />Recover Stronger.
              <br /><span className="text-sand">Perform at Your Best.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-mist md:text-lg">
              Integrated physiotherapy, sports therapy and personal training designed to take you from assessment and recovery to long-term strength and performance.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-silver">
              <MapPin size={16} strokeWidth={1.5} /> Directly above Clarke Quay MRT.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={siteConfig.booking.generalBookingUrl} external variant="primary">Book an Appointment</Button>
              <Button href="#services" variant="secondary" showExternalIcon={false}>Explore Our Services</Button>
            </div>
            <a href="#services" className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-[.24em] text-mist transition-colors hover:text-bone">
              Discover NXS <ArrowDown size={14} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
          <Image src="/images/hero-movement-assessment.svg" alt="Clinical movement assessment at NXS Collective" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent lg:from-ink/45" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
          <div className="absolute bottom-8 right-8 hidden max-w-[250px] border border-white/10 bg-black/30 p-5 backdrop-blur-md md:block">
            <p className="eyebrow !text-[9px]">The NXS Pathway</p>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-bone">Assess → Treat → Rebuild → Perform</p>
          </div>
        </div>
      </div>

      <Container className="relative z-10 -mt-px grid border border-hairline bg-graphite/95 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className={`flex gap-4 px-6 py-7 ${index ? "border-t border-hairline sm:border-l sm:border-t-0" : ""}`}>
              <Icon size={24} strokeWidth={1.35} className="mt-0.5 shrink-0 text-sand" />
              <div><p className="font-display text-xs font-semibold uppercase tracking-wide text-bone">{benefit.title}</p><p className="mt-1 text-xs leading-relaxed text-mist">{benefit.text}</p></div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
