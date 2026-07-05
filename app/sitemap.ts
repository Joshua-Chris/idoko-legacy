import type { MetadataRoute } from "next";

const BASE_URL = "https://www.idokolegacy.com";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/hipaa-compliance",
  "/service-areas",
  "/quote",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" ? 0.9 : 0.7,
  }));
}