import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Start a Conversation", description: "Tell Yousaf’s Creative Studio about your film, campaign, or production project." };

export default function ContactPage() {
  return <section className="wrap page-intro"><p className="eyebrow">Start something good</p><h1 className="display">Have a good<br /><span style={{ color: "var(--lime)" }}>one in mind?</span></h1><p className="lede">Tell us a little about it. We’ll take it from there.</p><div className="contact-layout" style={{ marginTop: 70 }}><aside className="contact-aside"><p>Big brief, first thought, voice memo in paragraph form — all welcome.</p><p className="draft-note">Replace the email and location below with the studio’s current details.</p><a className="contact-email" href="mailto:hello@ycs-studio.example">hello@ycs-studio.example</a><p className="mono" style={{ fontSize: 9, textTransform: "uppercase", marginTop: 28 }}>Islamabad, Pakistan<br />Working everywhere</p></aside><ContactForm /></div></section>;
}

