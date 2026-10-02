import type { Metadata } from "next";
import { ProjectGrid } from "@/components/site/project-grid";
import { ContactBand } from "@/components/site/contact-band";
export const metadata: Metadata = { title: "Projects", description: "Explore my AI applications, Python backends, and machine learning projects." };
export default function Projects() { return <main id="main"><section className="page-intro content-width"><h1>Built to be<br /><span>explored.</span></h1><p>Memory retrieval, agent workflows, backend systems, and machine learning. Explore the problems, tools, and implementation behind my work.</p></section><section className="archive-section content-width" aria-label="Project archive"><ProjectGrid /></section><ContactBand /></main>; }
