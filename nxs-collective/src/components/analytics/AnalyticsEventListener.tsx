"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function AnalyticsEventListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-analytics-event]");

      if (!element) return;

      const eventName = element.dataset.analyticsEvent;
      if (!eventName) return;

      const label =
        element.dataset.analyticsLabel || element.textContent?.trim().slice(0, 120) || undefined;
      const linkUrl = element instanceof HTMLAnchorElement ? element.href : undefined;

      trackAnalyticsEvent(eventName, {
        link_text: label,
        link_url: linkUrl,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
