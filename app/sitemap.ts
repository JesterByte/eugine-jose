import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-identity";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }];
}
