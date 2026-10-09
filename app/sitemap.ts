import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const base = "https://ycs-studio.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/contact", "/privacy", "/terms", "/sitemap"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
