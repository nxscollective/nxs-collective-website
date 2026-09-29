import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Physiotherapy & Rehabilitation Blog Singapore",
  description:
    "Evidence-informed articles from NXS Collective on physiotherapy, rehabilitation, sports injuries, strength and movement in Singapore.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    href: "/blog/knee-pain-physiotherapy-singapore",
    title: "Knee Pain Explained",
    subtitle: "Causes, Exercise, Scans & Physiotherapy in Singapore",
    excerpt:
      "Knee pain can come from many different sources — including the kneecap, osteoarthritis, tendons, a meniscus or simply a sudden increase in activity. We look at why knee pain develops, whether you should keep exercising, when scans are useful, and how physiotherapy can help rebuild strength and confidence.",
    image: "/images/blog/knee-pain/knee-pain-anatomy-nxs-collective.webp",
    alt: "Front-view knee anatomy highlighting the general knee pain region",
    category: "Physiotherapy",
  },
  {
    href: "/blog/tennis-elbow-physiotherapy-singapore",
    title: "Tennis Elbow Explained",
    subtitle: "Causes, Rehabilitation & Physiotherapy in Singapore",
    excerpt:
      "Pain around the outside of the elbow can affect far more than tennis. Gripping, lifting, gym training, racket sports and repetitive work can all aggravate lateral elbow tendinopathy. We look at why tennis elbow develops, how rehabilitation works, and where treatments such as dry needling and shockwave may fit.",
    image: "/images/blog/tennis-elbow/tennis-elbow-lateral-epicondyle-anatomy-nxs-collective.webp",
    alt: "Lateral elbow anatomy showing the common area of pain associated with tennis elbow.",
    category: "Physiotherapy",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="NXS Journal"
        title="Clinical insight, explained clearly"
        description="Evidence-informed articles on pain, rehabilitation, movement and performance — written to help you understand what may be going on and what a sensible next step can look like."
      />

      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-8 border-b border-hairline pb-6">
            <div>
              <p className="eyebrow mb-3">Latest</p>
              <h2 className="font-display text-2xl font-semibold text-bone md:text-3xl">
                From the NXS Collective team
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.href}
                className="group overflow-hidden border border-hairline bg-graphite transition-colors duration-300 hover:border-sand/50"
              >
                <Link
                  href={post.href}
                  className="grid md:grid-cols-[0.92fr_1.08fr]"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="relative min-h-[280px] overflow-hidden border-b border-hairline bg-[#0d0e10] md:min-h-[390px] md:border-b-0 md:border-r">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-14">
                    <p className="eyebrow mb-5">{post.category}</p>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-bone sm:text-3xl lg:text-4xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-display text-base font-medium text-sand md:text-lg">
                      {post.subtitle}
                    </p>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-mist md:text-base md:leading-8">
                      {post.excerpt}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-bone">
                      Read Article
                      <ArrowRight
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
