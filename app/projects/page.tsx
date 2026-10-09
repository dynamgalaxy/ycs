import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = { title: "Selected Work", description: "Campaign concepts across commercials, brand films, food, lifestyle, social content, and events." };

export default function ProjectsPage() {
  return <section className="wrap page-intro"><p className="eyebrow">The work / Temporary sample concepts</p><h1 className="display">Ideas into<br /><span style={{ color: "var(--lime)" }}>campaigns.</span></h1><p className="lede">We connect creative strategy with production, making brand stories people want to watch and share.</p><ProjectFilter /></section>;
}
