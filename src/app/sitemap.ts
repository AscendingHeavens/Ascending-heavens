import type { MetadataRoute } from "next";

const baseUrl = "https://ascending-heavens.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/FAQ", "/pricing", "/showcase"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
