import { Layers, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: MapPin, label: "Directly Above Clarke Quay MRT" },
  { icon: Star, label: "5-Star Google Reviews" },
  { icon: Layers, label: "Physiotherapy · Sports Therapy · Personal Training" },
];

/**
 * Slim, restrained trust bar shown directly below the hero. Wraps neatly
 * on narrow screens (no horizontal scrolling or cramped text) and sits in
 * a single row on desktop.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-hairline bg-ink">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-mist"
              >
                <Icon size={15} strokeWidth={1.75} className="shrink-0 text-sand" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
