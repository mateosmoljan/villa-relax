import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const locales = ["en", "de", "hr", "it"];
const routes = ["", "/villa-relax", "/photogallery", "/pricelist", "/environs", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
