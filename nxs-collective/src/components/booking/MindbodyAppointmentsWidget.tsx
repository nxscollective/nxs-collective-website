"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const MINDBODY_WIDGET_SCRIPT = "https://brandedweb.mindbodyonline.com/embed/widget.js";

export default function MindbodyAppointmentsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const markReady = () => {
      if (widget.childElementCount > 0) setIsReady(true);
    };

    markReady();
    const observer = new MutationObserver(markReady);
    observer.observe(widget, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

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
        className="mindbody-widget relative z-10"
        data-widget-type="Appointments"
        data-widget-id={siteConfig.booking.appointmentsWidgetId}
      />

      <Script
        id="mindbody-appointments-widget"
        src={MINDBODY_WIDGET_SCRIPT}
        strategy="afterInteractive"
      />
    </div>
  );
}
