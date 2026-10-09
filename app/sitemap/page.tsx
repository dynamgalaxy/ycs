import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "HTML Sitemap", description: "Pages on the Yousaf’s Creative Studio website." };

const pages = [
  ["Home", "/"], ["Studio", "/about"], ["Projects", "/projects"], ["Contact", "/contact"], ["Privacy policy", "/privacy"], ["Terms & conditions", "/terms"],
];

export default function HtmlSitemapPage() {
  return <section className="wrap page-intro"><p className="eyebrow">Find your way</p><h1 className="display">Site<br /><span style={{ color: "var(--lime)" }}>map.</span></h1><nav className="sitemap-list" aria-label="All website pages" style={{ marginTop: 50 }}>{pages.map(([name, href]) => <Link href={href} key={href}>{name} ↗</Link>)}{projects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug}>{project.title} ↗</Link>)}</nav></section>;
}
