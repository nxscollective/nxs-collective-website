import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = `https://${siteConfig.business.domain}`;

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/physiotherapy", changeFrequency: "monthly", priority: 0.9 },
    { path: "/personal-training", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sports-therapy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/why-nxs", changeFrequency: "monthly", priority: 0.7 },
    { path: "/physiotherapy/samuel-mak", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
