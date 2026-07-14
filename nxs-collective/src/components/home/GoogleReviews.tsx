"use client";

import { useState } from "react";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

/**
 * Public Trustindex widget loader URL for NXS Collective's Google Reviews
 * widget. The hash in the query string identifies the widget configuration
 * (layout, fields shown, review source) set up in the Trustindex dashboard
 * — it is a public widget ID, not a private credential, and is safe to
 * ship in client-side code exactly as Trustindex issues it.
 */
const TRUSTINDEX_SRC =
  "https://cdn.trustindex.io/loader.js?37145cd76765647b931632def98";

type WidgetStatus = "loading" | "loaded" | "error";

export default function GoogleReviews() {
  const [status, setStatus] = useState<WidgetStatus>("loading");

  return (
    <section className="border-b border-black/10 bg-[#f1efe9] py-20 text-ink md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[.24em] text-sand-dim">
            Google Reviews
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-ink md:text-4xl">
            Trusted by Clients Across Singapore
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#55565a] md:text-base">
            Read genuine Google reviews from clients who have experienced
            physiotherapy, sports therapy and personal training at NXS
            Collective.
          </p>
        </div>

        {/*
          White widget container. Trustindex's own widget markup (stars,
          reviewer names, dates, slider controls, Google attribution) is
          injected inside the mount element below once the loader script
          runs — what exactly appears is controlled by this widget's
          configuration in your Trustindex dashboard, not by this file.
        */}
        <div className="mx-auto mt-14 max-w-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,.08)] sm:p-10">
          {status === "loading" && <ReviewsLoadingPlaceholder />}

          {status === "error" && (
            <div role="status" className="py-10 text-center">
              <p className="text-sm leading-relaxed text-[#55565a]">
                We&apos;re unable to load live Google reviews right now.
                You can still read them directly on Google.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href={siteConfig.googleReviewsViewUrl} external variant="secondary" className="!text-ink">
                  View Reviews on Google
                </Button>
              </div>
            </div>
          )}

          {/*
            TRUSTINDEX MOUNT POINT — do not remove or rename.
            Trustindex's own documented React/SPA-safe embed pattern is a
            container element carrying the loader script's URL as a plain
            `src` attribute (rather than relying on the <script> tag's
            exact position in the DOM, which next/script does not
            preserve). The loader script scans the page for this element
            and injects the live widget markup into it.

            `src` isn't a valid typed attribute on a React <div>, so the
            marker is rendered as raw HTML here — this keeps the DOM node
            byte-for-byte identical to Trustindex's documented markup.
            Server and client always render the same fixed string (from
            TRUSTINDEX_SRC), so this does not cause a hydration mismatch.

            The wrapper is hidden until the script reports success (so it
            never overlaps the loading placeholder above), and constrained
            with [&_iframe] rules so anything Trustindex injects — including
            any iframe — can never force horizontal overflow on the page.
          */}
          <div
            className={`w-full [&_iframe]:!max-w-full [&_iframe]:!w-full [&_*]:max-w-full ${
              status === "loaded" ? "block" : "hidden"
            }`}
            dangerouslySetInnerHTML={{
              __html: `<div data-trustindex-widget src="${TRUSTINDEX_SRC}"></div>`,
            }}
          />
        </div>

        {/*
          Trustindex's own slider (if the configured widget layout uses
          one) runs its own internal animation/autoplay logic that this
          site's code cannot directly control — reduced-motion support for
          that specific behaviour depends on Trustindex's widget settings.
        */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={siteConfig.googleReviewsViewUrl} external variant="primary">
            View All Google Reviews
          </Button>
          <Button href={siteConfig.googleReviewSubmissionUrl} external variant="secondary" className="!text-ink">
            Leave Us a Google Review
          </Button>
        </div>
      </Container>

      <Script
        src={TRUSTINDEX_SRC}
        strategy="afterInteractive"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </section>
  );
}

function ReviewsLoadingPlaceholder() {
  return (
    <div className="animate-pulse py-4" role="status" aria-label="Loading Google reviews">
      <div className="mx-auto h-4 w-32 bg-black/10" />
      <div className="mx-auto mt-6 h-3 w-full max-w-md bg-black/10" />
      <div className="mx-auto mt-3 h-3 w-full max-w-sm bg-black/10" />
      <div className="mx-auto mt-3 h-3 w-2/3 max-w-xs bg-black/10" />
      <div className="mx-auto mt-6 h-3 w-24 bg-black/10" />
    </div>
  );
}
