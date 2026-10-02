import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const moderustic = localFont({ src: "../../public/fonts/Moderustic.ttf", variable: "--font-moderustic", display: "swap", weight: "300 800" });
export const metadata: Metadata = {
  title: { default: "Muhammad Anas — Backend & AI engineer", template: "%s | Muhammad Anas" },
  description: "Backend & AI engineer building AI agents, RAG systems, and Python backends. Explore my work, experience, and get in touch.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={moderustic.variable}><a className="skip-link" href="#main">Skip to content</a><div className="site-canvas"><Header />{children}<Footer /></div></body></html>;
}
