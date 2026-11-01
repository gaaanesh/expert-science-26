import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://expertscience.in";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/signin/", "/signup/", "/documentation/"],
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
