import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog | Physiotherapy, Rehabilitation & Performance",
  description:
    "Evidence-based insights from NXS Collective on physiotherapy, rehabilitation, movement health, strength and performance.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <section className="bg-fine-grid relative flex min-h-[calc(100vh-5rem)] items-center border-b border-hairline bg-ink py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center animate-fadeUp">
          <p className="eyebrow mb-5">NXS Collective Blog</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-bone md:text-6xl">
            Coming Soon
          </h1>
          <div className="mx-auto mt-7 h-px w-16 bg-sand" />
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            We are preparing evidence-based insights on physiotherapy, rehabilitation, movement health, strength and performance.
          </p>
        </div>
      </Container>
    </section>
  );
}
