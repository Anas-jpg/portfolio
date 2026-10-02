import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function ContactBand() { return <section className="contact-band"><div><h2>Good ideas start<br />with a conversation.</h2><p>Have a role in mind or a project to discuss?</p></div><Link href="/contact/" className="contact-circle" aria-label="Let's talk, go to contact">Let&apos;s talk <ArrowUpRight size={32} strokeWidth={1.4} /></Link></section>; }
