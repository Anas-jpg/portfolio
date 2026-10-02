import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <main id="main" className="not-found content-width"><h1>This page<br />took a detour.</h1><p>The link may have changed. There&apos;s still plenty to explore.</p><Button asChild><Link href="/">Back to home <ArrowRight size={18} /></Link></Button><Link className="text-link" href="/projects/">Explore my projects</Link></main>; }
