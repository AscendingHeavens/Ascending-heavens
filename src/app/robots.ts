import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ascending-heavens.com/sitemap.xml",
    host: "https://ascending-heavens.com",
  };
}
