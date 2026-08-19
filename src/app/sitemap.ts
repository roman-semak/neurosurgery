import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/content/site";

const ROUTES = ["/", "/about", "/services", "/cases", "/appointment", "/privacy"];

// Bumped when route content changes; keeps lastModified stable instead of
// always reporting "now" on every request.
const LAST_MODIFIED = new Date("2026-08-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: LAST_MODIFIED,
  }));
}
