import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PageHeroImage {
  src: string;
  alt: string;
  /** CSS object-position value, e.g. "50% 30%" — tune per photo so the
      subject stays clear of the text gradient and any crop. */
  objectPosition?: string;
  /** Slightly lift shadows on real (non-studio) photography so it reads
      consistently with the rest of the site without editing the source
      file itself. */
  brightness?: number;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: PageHeroImage;
}) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-hairline bg-ink">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: image.objectPosition ?? "50% 40%",
              filter: image.brightness ? `brightness(${image.brightness})` : undefined,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/15 md:to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />
        </div>
        <Container className="relative z-10 flex min-h-[380px] items-center py-16 md:min-h-[440px]">
          <div className="max-w-2xl animate-fadeUp">
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-bone md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
                {description}
              </p>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-fine-grid relative border-b border-hairline bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-bone md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
