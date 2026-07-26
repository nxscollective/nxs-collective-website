"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";

const TRUSTINDEX_SRC =
  "https://cdn.trustindex.io/loader.js?334e1b1772d6740bf446d290be1";

export default function GoogleReviews() {
  const widgetContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetContainer.current;

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = TRUSTINDEX_SRC;
    script.async = true;
    script.defer = true;

    container.appendChild(script);

    return () => {
      script.remove();
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="border-b border-black/10 bg-[#f1efe9] py-8">
      <Container>
        <div
          ref={widgetContainer}
          className="w-full [&_iframe]:!max-w-full [&_iframe]:!w-full [&_*]:max-w-full"
        />
      </Container>
    </section>
  );
}
