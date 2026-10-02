"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emailConfig } from "@/lib/email";
import { owner } from "@/content/portfolio";
const configured = Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey);
export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error" | "draft">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!configured) {
      const subject = String(data.get("subject"));
      const body = `${data.get("message")}\n\n${data.get("user_name")}\n${data.get("user_email")}`;
      window.location.href = `mailto:${owner.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setState("draft"); return;
    }
    setState("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, form, { publicKey: emailConfig.publicKey });
      form.reset(); setState("sent");
    } catch { setState("error"); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <fieldset disabled={state === "sending"}><legend className="sr-only">Your message</legend>
      <div className="form-row"><div className="field"><label htmlFor="user-name">Your name</label><input id="user-name" name="user_name" autoComplete="name" placeholder="What should I call you?" maxLength={100} required /></div><div className="field"><label htmlFor="user-email">Email address</label><input id="user-email" name="user_email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={200} required /></div></div>
      <div className="field"><label htmlFor="subject">What would you like to discuss?</label><input id="subject" name="subject" placeholder="A role, a project, or something else" maxLength={200} required /></div>
      <div className="field"><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} placeholder="Tell me a little about what you have in mind…" maxLength={5000} required /></div>
      <Button type="submit" disabled={state === "sending"}>{state === "sending" ? <><LoaderCircle className="sending-icon" size={18} />Sending…</> : <>{configured ? "Send message" : "Create email draft"}<ArrowUpRight size={18} /></>}</Button>
    </fieldset>
    {state === "sent" && <p className="form-feedback" role="status"><Check size={19} />Your message has been sent. Thank you for getting in touch.</p>}
    {state === "error" && <p className="form-feedback form-error" role="alert">Your message couldn&apos;t be sent. Please try again or <a className="text-link" href={`mailto:${owner.email}`}>email me directly</a>.</p>}
    {state === "draft" && <p className="form-feedback" role="status">Your email app should open with a draft. Review and send it there. You can also <a className="text-link" href={`mailto:${owner.email}`}>email me directly</a>.</p>}
    {!configured && state !== "draft" && <p className="form-note">This form prepares a draft in your email app. You can also use the email link.</p>}
  </form>;
}
