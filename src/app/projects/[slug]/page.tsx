import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/components/site/contact-band";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = projects.find(p => p.slug === slug); return { title: project?.title || "Project", description: project?.summary }; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find(p => p.slug === slug); if (!project) notFound(); const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main id="main"><section className="project-detail-intro content-width"><Link className="back-link" href="/projects/"><ArrowLeft size={17} /> All projects</Link><div className="detail-heading"><div><h1>{project.title}</h1><p>{project.summary}</p></div>{project.href && <Button asChild><a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={18} /></a></Button>}</div><ul className="tags">{project.stack.map(skill => <li key={skill}>{skill}</li>)}</ul></section>{project.image && <div className="detail-image content-width"><Image src={project.image} alt={`${project.title} application screenshot`} width={1400} height={950} sizes="90vw" priority /></div>}<section className="project-overview content-width"><h2>Project overview.</h2><div><p>{project.description}</p><p className="project-type">{project.type}</p><ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>{project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={17} /></a>}{project.demoHref && <a className="text-link project-demo-link" href={project.demoHref} target="_blank" rel="noreferrer">Open live demo <ArrowUpRight size={17} /></a>}</div></section><Link className="next-project content-width" href={`/projects/${next.slug}/`}><span>Explore next</span><strong>{next.title}</strong><ArrowRight size={32} /></Link><ContactBand /></main>;
}
