import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://github.com/Jhuleebaba", // Replace with user's custom production URL if any
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
