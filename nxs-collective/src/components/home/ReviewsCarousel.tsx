"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

const AUTOPLAY_DELAY_MS = 5000;

/**
 * Homepage "What Our Clients Say" carousel.
 *
 * Built with plain React state + timers (no carousel library). Shows one
 * review at a time — full-width on mobile, centred in a max-width card on
 * desktop — advances automatically every 5 seconds, and pauses on hover,
 * focus, or when the visitor has requested reduced motion.
 *
 * The reviews themselves live in `src/data/reviews.ts` and are placeholders
 * — see the comment at the top of that file before publishing this site.
 */
export default function ReviewsCarousel() {
  const total = reviews.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect the visitor's reduced-motion preference so we can stop the
  // autoplay timer entirely for them (CSS alone only shortens transitions).
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Autoplay: advances one review every 5 seconds unless paused (hover /
  // keyboard focus) or the visitor prefers reduced motion.
  useEffect(() => {
    if (paused || prefersReducedMotion || total <= 1) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_DELAY_MS);

    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, total]);

  function goTo(nextIndex: number) {
    setIndex(((nextIndex % total) + total) % total);
  }

  function goPrev() {
    goTo(index - 1);
  }

  function goNext() {
    goTo(index + 1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  if (total === 0) return null;

  const active = reviews[index];

  return (
    <section className="border-b border-hairline bg-graphite py-24 md:py-28">
      <Container>
        <div className="text-center">
          <Eyebrow>Client Reviews</Eyebrow>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold uppercase leading-tight text-bone md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
            Real experiences from clients across physiotherapy, sports
            therapy and personal training.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative mx-auto mt-14 max-w-3xl outline-none focus-visible:ring-1 focus-visible:ring-sand/60"
        >
          <div
            key={active.id}
            aria-live="polite"
            className="animate-fadeUp border border-hairline bg-ink px-6 py-10 text-center sm:px-14 sm:py-16"
          >
            <Quote
              size={28}
              strokeWidth={1.5}
              className="mx-auto text-sand/60"
              aria-hidden="true"
            />

            <div
              className="mt-6 flex items-center justify-center gap-1"
              role="img"
              aria-label={`${active.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  strokeWidth={1.5}
                  className={i < active.rating ? "fill-sand text-sand" : "text-mist/25"}
                />
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone md:text-lg">
              &ldquo;{active.quote}&rdquo;
            </p>

            <div className="mt-7">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-bone">
                {active.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[.2em] text-sand-dim">
                {active.category} · Google Review
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-hairline text-mist transition-colors hover:border-sand/60 hover:text-bone"
            >
              <ChevronLeft size={19} strokeWidth={1.75} />
            </button>

            <div className="flex items-center gap-2.5">
              {reviews.map((review, i) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1} of ${total}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-sand" : "w-2 bg-hairline hover:bg-silver/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-hairline text-mist transition-colors hover:border-sand/60 hover:text-bone"
            >
              <ChevronRight size={19} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={siteConfig.googleReviewsUrl} external variant="secondary">
            View All Google Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
