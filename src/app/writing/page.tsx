import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { writing } from "@/content/portfolio";
import { ContactBand } from "@/components/site/contact-band";
export const metadata: Metadata = { title: "Writing", description: "Personal writing about my coding journey and life beyond the screen." };
export default function Writing() { return <main id="main"><section className="page-intro writing-intro content-width"><h1>Beyond<br /><span>the code.</span></h1><p>A small collection of personal writing, from finding my way into programming to reflections beyond the screen.</p></section><section className="writing-list content-width" aria-label="Published writing">{writing.map(article => <article key={article.href}><div className="writing-category">{article.category}</div><div><h2><a href={article.href} target="_blank" rel="noreferrer">{article.title} <ArrowUpRight size={27} /></a></h2><p>{article.description}</p><a className="text-link" href={article.href} target="_blank" rel="noreferrer">Read on my blog <ArrowUpRight size={17} /></a></div></article>)}</section><ContactBand /></main>; }
