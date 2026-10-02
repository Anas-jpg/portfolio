/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Braces, Cpu, Database, Network, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { ContactBand } from "@/components/site/contact-band";
import { projects, capabilities, owner } from "@/content/portfolio";
export default function Home() { return <main id="main">
  <section className="home-hero" aria-labelledby="hero-name">
    <img className="hero-art" src="/assets/plates/portrait.png" alt="Muhammad Anas in a sage arch with emerald linework" width={1413} height={1113} fetchPriority="high" />
    <Link className="portrait-contact" href="/contact/">Let&apos;s talk <ArrowRight size={19} /></Link>
    <div className="hero-intro"><h1 id="hero-name">Muhammad Anas</h1><p className="hero-role">{owner.role}</p><p className="hero-summary">{owner.summary}</p><div className="hero-actions"><Button asChild><Link href="/projects/">View projects <ArrowRight size={19} /></Link></Button><Link className="text-link" href="/contact/">Contact me</Link></div></div>
    <ul className="capability-strip" aria-label="Core capabilities"><li><Braces />FastAPI</li><li><Database />Django</li><li><Search />RAG</li><li><Network />LangGraph</li><li><Phone />Twilio</li><li><Cpu />Azure OpenAI</li></ul>
  </section>
  <section className="featured-preview" id="work" aria-labelledby="featured-title"><div className="featured-heading"><h2 id="featured-title">Featured projects</h2><p>A few things I&apos;ve built, ready for a closer look.</p><Link className="text-link" href="/projects/">View all work <ArrowRight size={17} /></Link></div>{projects.slice(0,2).map(project => <ProjectCard key={project.slug} project={project} featured />)}</section>
  <section className="home-about content-width" id="about"><h2>From your data<br />to useful intelligence.</h2><div><p>I&apos;m Muhammad Anas, a software engineering graduate from FAST NUCES. My work spans Python backends, retrieval-augmented generation, and AI agents.</p><p>I enjoy connecting the pieces of an application and turning a practical idea into software people can use.</p><Link className="text-link" href="/about/">More about me <ArrowRight size={17} /></Link></div></section>
  <section className="capability-section content-width" id="service"><h2>Where I can contribute.</h2>{capabilities.map(item => <div className="capability-row" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><ul className="tags">{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</section>
  <ContactBand />
</main>; }
