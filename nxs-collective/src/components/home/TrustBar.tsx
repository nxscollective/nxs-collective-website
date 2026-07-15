import { Layers, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Slim, restrained trust bar shown directly below the hero. Wraps neatly
 * on narrow screens (no horizontal scrolling or cramped text) and sits in
 * a single row on desktop. Deliberately minimal padding.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-hairline bg-ink">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2.5 py-3.5 text-center">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-mist">
            <MapPin size={14} strokeWidth={1.75} className="shrink-0 text-sand" aria-hidden="true" />
            <span>Directly Above Clarke Quay MRT</span>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-mist">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} strokeWidth={1.5} className="fill-sand text-sand" />
              ))}
            </span>
            <span>Google Reviews</span>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-mist">
            <Layers size={14} strokeWidth={1.75} className="shrink-0 text-sand" aria-hidden="true" />
            <span>Physiotherapy · Sports Therapy · Personal Training</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
