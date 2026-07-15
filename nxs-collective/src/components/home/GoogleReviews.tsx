import { Container } from "@/components/ui/Container";

/**
 * Public Trustindex widget loader URL for NXS Collective's Google Reviews
 * widget. The hash in the query string identifies the widget configuration
 * (layout, fields shown, review source) set up in the Trustindex dashboard
 * — it is a public widget ID, not a private credential, and is safe to
 * ship in client-side code exactly as Trustindex issues it.
 */
const TRUSTINDEX_SRC =
  "https://cdn.trustindex.io/loader.js?ae77aef76cfd668bd756ae6f709";

/**
 * Homepage Google Reviews. The Trustindex widget renders its own complete
 * review interface (heading, stars, reviewer cards, navigation, Google
 * attribution) once the site-wide loader script (in layout.tsx) finds this
 * component's mount point, so this component deliberately adds no
 * heading, copy, card chrome or buttons of its own — just a compact
 * section wrapper and the widget's mount point. Adding our own
 * heading/card around the widget's own produced a visual double-up of
 * the section, which is what this simplification fixes.
 */
export default function GoogleReviews() {
  return (
    <section className="border-b border-black/10 bg-[#f1efe9] py-8">
      <Container>
        {/*
          TRUSTINDEX MOUNT POINT — do not remove or rename.
          This is Trustindex's own documented ReactJS/SPA marker syntax:
          a bare <div src="...loader.js?WIDGET_ID"> with nothing else on
          it. The site-wide loader script in layout.tsx scans the page for
          exactly this pattern and mounts one widget into each match.

          `src` isn't a valid typed attribute on a React <div>, so the
          marker is rendered as raw HTML here — this keeps the DOM node
          byte-for-byte identical to Trustindex's documented markup. The
          string is a fixed constant on both server and client, so this
          cannot cause a hydration mismatch.

          There must be no separate <Script> loading this same ID'd URL
          anywhere on the site — that combination is what caused the
          widget to render twice (see layout.tsx for the one script that
          should exist).

          [&_iframe] rules constrain anything Trustindex injects so it can
          never force horizontal overflow on the page.
        */}
        <div
          className="w-full [&_iframe]:!max-w-full [&_iframe]:!w-full [&_*]:max-w-full"
          dangerouslySetInnerHTML={{
            __html: `<div src="${TRUSTINDEX_SRC}"></div>`,
          }}
        />
      </Container>
    </section>
  );
}
