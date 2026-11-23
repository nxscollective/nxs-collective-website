"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const MINDBODY_WIDGET_SCRIPT = "https://brandedweb.mindbodyonline.com/embed/widget.js";

export default function MindbodyAppointmentsWidget({ widgetId }: { widgetId: string }) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    setIsReady(false);

    const markReady = () => {
      if (widget.childElementCount > 0) setIsReady(true);
    };

    markReady();
    const observer = new MutationObserver(markReady);
    observer.observe(widget, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [widgetId]);

  return (
    <div className="relative min-h-[560px] overflow-x-auto bg-[#f5f2ec] text-ink md:min-h-[680px]">
      {!isReady && (
        <div
          className="absolute inset-x-0 top-0 z-0 flex min-h-[420px] items-center justify-center px-6 text-center"
          aria-live="polite"
        >
          <div>
            <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-ink/20 border-t-sand" />
            <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[.2em] text-ink/60">
              Loading live availability
            </p>
          </div>
        </div>
      )}

      <div
        ref={widgetRef}
        key={widgetId}
        className="mindbody-widget relative z-10"
        data-widget-type="Appointments"
        data-widget-id={widgetId}
      />

      <Script
        id={`mindbody-appointments-widget-${widgetId}`}
        src={MINDBODY_WIDGET_SCRIPT}
        strategy="afterInteractive"
      />
    </div>
  );
}
