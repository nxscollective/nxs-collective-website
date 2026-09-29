import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = `https://${siteConfig.business.domain}`;
  const routes = [
    "",
    "/why-nxs",
    "/physiotherapy",
    "/sports-therapy",
    "/personal-training",
    "/blog",
    "/blog/tennis-elbow-physiotherapy-singapore",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.8 : 0.7,
  }));
}
