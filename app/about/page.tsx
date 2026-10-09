import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/site-shell";

export const metadata: Metadata = { title: "The Studio", description: "Get to know Yousaf’s Creative Studio, an independent production and creative marketing studio based in Islamabad." };

export default function AboutPage() {
  return (
    <>
      <section className="wrap page-intro"><p className="eyebrow">Production meets marketing</p><h1 className="display">Make work<br /><span style={{ color: "var(--lime)" }}>mean more.</span></h1><p className="lede">An independent production and marketing company shaping brand stories from strategy through screen.</p></section>
      <section className="wrap about-grid">
        <div data-reveal><Image src="https://images.pexels.com/videos/13796181/pexels-photo-13796181.jpeg?auto=compress&dpr=1&h=750&w=1260" alt="A dramatic automotive campaign image showing a premium sports car" width={1500} height={1700} sizes="(max-width: 760px) 92vw, 42vw" /></div>
        <div className="about-copy" data-reveal><p className="eyebrow">Independent by nature</p><div style={{ marginTop: 30 }}><p>Yousaf’s Creative Studio connects brand strategy, campaign thinking, and hands-on film production.</p><p>We help businesses find a clear story, make compelling content, and carry that story across the places their audiences spend time.</p><p>Based in Islamabad and open to the world, we bring a curious, collaborative approach from first conversation through final cut.</p></div><ArrowLink href="/contact" className="text-link">Let’s work together</ArrowLink></div>
      </section>
      <section className="wrap manifesto" data-reveal><p>We believe the best work comes from <em>paying attention</em> — then making something people want to spend time with.</p></section>
      <section className="wrap section"><div className="capability-layout"><div><p className="eyebrow">Our point of view</p><h2 className="title-lg" style={{ marginTop: 20 }}>Care is a<br />creative tool.</h2></div><div className="about-copy"><p>We keep teams close and conversations open. Every brief gets a fresh look, every production gets the attention it needs.</p><p>Good collaborations have room for surprise. We bring a plan, stay generous with ideas and remain present for the details.</p><p className="draft-note">Studio story is editable placeholder copy. Add the owner’s real biography, team details and approved studio photography.</p></div></div></section>
      <section className="wrap cta-band"><div className="cta-row"><div><p className="eyebrow">Have a story in mind?</p><h2>We’re all<br /><span>ears.</span></h2></div><div className="cta-action"><ArrowLink href="/contact" className="button button-fill">Start a conversation</ArrowLink></div></div></section>
    </>
  );
}
