"use client";
import { useState } from "react";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "./project-card";
const filters = ["All work", "AI engineering", "Backend", "Machine learning"] as const;
export function ProjectGrid() {
  const [filter, setFilter] = useState<typeof filters[number]>("All work");
  const visible = projects.filter(p => filter === "All work" || p.category === filter);
  return <><div className="project-filters" aria-label="Filter projects">{filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}</div><p className="sr-only" role="status">Showing {visible.length} projects</p><div className="project-grid">{visible.map(project => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
