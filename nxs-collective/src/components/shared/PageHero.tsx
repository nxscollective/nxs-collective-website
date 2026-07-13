import { Container } from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-fine-grid relative border-b border-hairline bg-ink py-20 md:py-28">
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
