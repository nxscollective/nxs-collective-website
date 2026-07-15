import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface TreatmentCardProps {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  icon?: LucideIcon;
}

/**
 * Compact card used for treatment/technique listings (Physiotherapy,
 * Sports Therapy). Pass `image` for a photo-led card, or `icon` for a
 * lightweight icon-led card when no approved photo exists for that item —
 * both share the same footprint so a mixed grid still lines up cleanly.
 */
export default function TreatmentCard({ title, description, image, icon: Icon }: TreatmentCardProps) {
  return (
    <Card className="media-zoom-wrap flex h-full flex-col overflow-hidden !p-0">
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="media-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
      ) : (
        Icon && (
          <div className="flex aspect-[16/10] items-center justify-center border-b border-hairline bg-graphite-alt">
            <Icon size={30} strokeWidth={1.35} className="text-sand" />
          </div>
        )
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold uppercase tracking-tight text-bone">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p>
      </div>
    </Card>
  );
}
