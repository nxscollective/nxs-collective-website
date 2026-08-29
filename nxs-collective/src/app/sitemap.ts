import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = `https://${siteConfig.business.domain}`;
  const routes = [
    "",
    "/why-nxs",
    "/physiotherapy",
    "/physiotherapy/samuel-mak",
    "/sports-therapy",
    "/personal-training",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
