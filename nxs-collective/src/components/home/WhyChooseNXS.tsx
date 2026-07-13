import { Activity, Layers, MapPin, TrendingUp, UserCog } from "lucide-react";
import { Container } from "@/components/ui/Container";

const points = [
  { icon: Layers, title: "Integrated Care", description: "Physiotherapy, sports therapy and personal training connected under one roof." },
  { icon: Activity, title: "Objective Assessment", description: "Strength and movement data used where appropriate to support decisions." },
  { icon: UserCog, title: "Individualised Plans", description: "Treatment and training based on your findings, history and goals." },
  { icon: TrendingUp, title: "Progression Beyond Symptoms", description: "A structured pathway towards movement capacity, strength and performance." },
  { icon: MapPin, title: "Central Location", description: "Located directly above Clarke Quay MRT in central Singapore." },
];

export default function WhyChooseNXS() {
  return (
    <section className="border-b border-black/10 bg-[#f1efe9] py-20 text-ink md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:items-start">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[.24em] text-sand-dim">Why NXS Collective?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">One connected pathway.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#55565a]">
              We connect clinical assessment, rehabilitation and strength development so every stage of care moves in the same direction.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className={`px-5 text-center ${index ? "lg:border-l lg:border-black/15" : ""}`}>
                  <Icon size={31} strokeWidth={1.35} className="mx-auto text-ink" />
                  <h3 className="mt-5 font-display text-xs font-semibold uppercase tracking-wide">{point.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#5e6064]">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
