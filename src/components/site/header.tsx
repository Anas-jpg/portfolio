"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { owner } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
const nav = [{ href: "/", label: "Home" }, { href: "/about/", label: "About" }, { href: "/projects/", label: "Projects" }, { href: "/contact/", label: "Contact" }];
export function Header() {
  const pathname = usePathname();
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Muhammad Anas, home"><span className="brand-mark">MA</span><span>Muhammad Anas</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="header-actions"><a className="social-link" href={owner.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={23} /></a><a className="social-link linkedin" href={owner.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={23} /></a><Button asChild size="sm" className="resume-link"><a href={owner.resume} download>Resume <Download size={16} /></a></Button></div>
    <Dialog.Root><Dialog.Trigger asChild><Button variant="outline" size="icon" className="mobile-menu" aria-label="Open navigation"><Menu size={22} /></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="menu-overlay" /><Dialog.Content className="menu-panel"><Dialog.Title className="menu-title">Explore the portfolio</Dialog.Title><Dialog.Description className="sr-only">Pages and links for Muhammad Anas.</Dialog.Description><Dialog.Close asChild><Button variant="outline" size="icon" className="menu-close" aria-label="Close navigation"><X size={22} /></Button></Dialog.Close><nav aria-label="Mobile navigation">{[...nav, { href: "/writing/", label: "Writing" }].map(item => <Dialog.Close key={item.href} asChild><Link href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link></Dialog.Close>)}</nav><Button asChild><a href={owner.resume} download>Download resume <Download size={18} /></a></Button></Dialog.Content></Dialog.Portal></Dialog.Root>
  </header>;
}
