"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setNotice("Thanks — your details are ready. Connect an email or form service to enable delivery.");
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="Name" required minLength={2} /></div>
      <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
      <div className="field"><label htmlFor="project-type">What are you thinking?</label><select id="project-type" name="project-type" defaultValue="" required><option value="" disabled>Select a starting point</option><option>Commercial or brand film</option><option>Campaign strategy and content</option><option>Social media production</option><option>Branding and creative direction</option><option>Product or lifestyle photography</option><option>Event or corporate film</option><option>Something else</option></select></div>
      <div className="field"><label htmlFor="message">A little about the project</label><textarea id="message" name="message" placeholder="The idea, the timing, the feeling…" required minLength={10} /></div>
      <button type="submit" className="button button-fill">Review enquiry <ArrowRight size={14} aria-hidden="true" /></button>
      {notice && <p className="form-feedback" role="status">{notice}</p>}
      <p className="draft-note">This form validates in your browser and does not send or store your details.</p>
    </form>
  );
}
