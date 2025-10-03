import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.shreemahavidya.example"
  return [
    {
      url: `${base}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
  ]
}


