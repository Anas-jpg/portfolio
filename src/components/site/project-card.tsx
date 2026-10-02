import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/portfolio";
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={featured ? "project-card featured-card" : "project-card"}><Link href={`/projects/${project.slug}/`} className="project-card-link"><div className="project-card-heading"><h3>{project.title}</h3><ArrowUpRight size={20} /></div>{project.image ? <div className="project-image"><Image src={project.image} alt={`${project.title} application screenshot`} width={1000} height={680} sizes={featured ? "(max-width: 760px) 90vw, 35vw" : "(max-width: 760px) 90vw, 45vw"} /></div> : <div className={`project-code-cover cover-${project.coverTone}`} aria-hidden="true"><strong>{project.cover}</strong><span>{project.stack.slice(0, 3).join(" / ")}</span></div>}<div className="project-card-body"><p className="project-type">{project.type}</p><p>{project.summary}</p><ul className="tags" aria-label={`${project.title} technologies`}>{project.stack.map(skill => <li key={skill}>{skill}</li>)}</ul><span className="text-link">Explore project</span></div></Link></article>;
}
