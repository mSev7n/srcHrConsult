import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/services",
  "/study-abroad",
  "/scholarships",
  "/canada-teaching-jobs",
  "/visa-services",
  "/immigration-services",
  "/success-stories",
  "/blog",
  "/eligibility-assessment",
  "/book-consultation",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
