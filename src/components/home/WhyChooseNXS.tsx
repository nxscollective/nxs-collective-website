import {
  Layers,
  Activity,
  UserCog,
  TrendingUp,
  MapPin,
  ClipboardCheck,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";

const points = [
  {
    icon: Layers,
    title: "One roof, one team",
    description: "Physiotherapy, sports therapy and personal training under one roof, working from one plan.",
  },
  {
    icon: Activity,
    title: "Objective assessment",
    description: "Strength and movement assessment used to guide decisions, not guesswork.",
  },
  {
    icon: UserCog,
    title: "Individualised care",
    description: "Treatment and programming built around your findings, history and goals.",
  },
  {
    icon: TrendingUp,
    title: "Beyond symptom relief",
    description: "A structured pathway toward long-term strength and physical capacity.",
  },
  {
    icon: MapPin,
    title: "Central location",
    description: "Directly above Clarke Quay MRT, easy to reach before or after work.",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical, performance-based",
    description: "A healthcare-first approach to movement, not a conventional gym experience.",
  },
];

export default function WhyChooseNXS() {
  return (
    <section className="border-b border-hairline bg-graphite py-24 md:py-28">
      <Container>
        <SectionHeading eyebrow="Why NXS Collective" title="Why choose NXS Collective" />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-hairline">
                  <Icon size={19} strokeWidth={1.5} className="text-sand" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-bone">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
