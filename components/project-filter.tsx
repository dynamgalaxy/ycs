"use client";

import { useMemo, useState } from "react";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectFilter() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => selected === "All" ? projects : projects.filter((project) => project.category === selected), [selected]);
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button key={category} type="button" className="filter-button" aria-pressed={selected === category} onClick={() => setSelected(category)}>{category}</button>
        ))}
      </div>
      <div className="projects-grid-page" aria-live="polite">
        {filtered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} total={filtered.length} />)}
      </div>
      <p className="draft-note" style={{ marginTop: 34 }}>Temporary sample concepts for layout direction. No client work or results are represented.</p>
    </>
  );
}
