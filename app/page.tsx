import Image from "next/image";
import { ArrowLink, ScrollLink } from "@/components/site-shell";
import { ProjectCard } from "@/components/project-card";
import { CinematicMedia } from "@/components/cinematic-media";
import { projects } from "@/lib/projects";
import { sampleVideos } from "@/lib/sample-media";

const capabilities = [
  { title: "Commercial production", detail: "Brand films, advertising, and social-first video built from the first idea through final edit." },
  { title: "Campaign strategy", detail: "Positioning, concepts, and content plans that give every channel a clear role." },
  { title: "Brand worlds", detail: "Creative direction and visual identity that make a business instantly recognizable." },
  { title: "Content & performance", detail: "Campaign assets and social content shaped to reach the right people and keep them watching." },
];

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-top">
          <div className="hero-copy-block">
            <p className="eyebrow">Production house & creative marketing studio</p>
            <h1 className="display hero-title"><span className="hero-line"><span className="hero-line-inner">Make it</span></span><span className="hero-line"><span className="hero-line-inner"><em>mean</em> something.</span></span></h1>
            <p className="hero-copy">We shape the idea, produce the story, and build campaigns that connect brands with people.</p>
            <div className="hero-actions"><ArrowLink href="/projects" className="button button-fill" magnetic>Enter the work</ArrowLink><ScrollLink href="#selected">Scroll to explore</ScrollLink></div>
          </div>
          <p className="hero-stamp">Islamabad based.<br />Curiosity led.<br />Available everywhere.</p>
        </div>
        <div className="hero-image" data-reveal="mask" data-parallax>
          <CinematicMedia className="hero-cinematic" poster="https://images.pexels.com/videos/13796181/pexels-photo-13796181.jpeg?auto=compress&dpr=1&h=750&w=1260" alt="A dynamic nighttime automotive campaign shot with a dark sports car" priority mp4Src={sampleVideos.automotive} />
        </div>
      </section>

      <section className="wrap intro-row section-tight intro-bridge">
        <p>We make films, campaigns, and ideas that give brands something worth feeling.</p>
        <div><ScrollLink href="#selected">See what we mean</ScrollLink></div>
      </section>

      <section className="wrap section" id="selected">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20 }} data-reveal>
          <div><p className="eyebrow">Campaign concepts / Made to be replaced with approved work</p><h2 className="title-lg" style={{ marginTop: 18 }}>Selected work<span style={{ color: "var(--lime)" }}>.</span></h2></div>
          <span className="mono" style={{ color: "var(--muted)", fontSize: 9 }}>Temporary sample concepts</span>
        </div>
        <div className="project-grid">{projects.slice(0, 4).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured />)}</div>
        <div className="projects-end"><span className="eyebrow">Made with intention, always</span><ArrowLink href="/projects">All projects</ArrowLink></div>
      </section>

      <section className="interlude">
        <div className="interlude-image" data-reveal="mask" data-parallax><Image src="/studio-assets/between-takes.webp" alt="Two filmmakers observing a scene together through a camera" width={1200} height={801} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="interlude-copy" data-reveal="rise">
          <p className="eyebrow">A studio with the door open</p>
          <div><h2>Good work starts with a good question.</h2><p>We’re a close-knit crew of makers, thinkers and patient listeners. Small enough to stay curious. Big enough to make the thing real.</p></div>
          <ArrowLink href="/about" className="text-link">Get to know us</ArrowLink>
        </div>
      </section>

      <section className="wrap section">
        <div className="capability-layout">
          <div data-reveal="rise"><p className="eyebrow">What we bring to the table</p><h2 className="title-lg" style={{ marginTop: 20 }}>The craft<br />behind the feeling.</h2><p className="lede" style={{ fontSize: 16, marginTop: 26 }}>From first idea to final frame: production, campaigns, and content built around a clear point of view.</p></div>
          <div className="capability-list" data-reveal="rise">{capabilities.map((item, index) => <details className="capability" key={item.title} open={index === 0}><summary><span>{item.title}</span><span aria-hidden="true">+</span></summary><p>{item.detail}</p></details>)}</div>
        </div>
      </section>

      <section className="wrap cta-band">
        <div className="cta-row" data-reveal="rise"><div><p className="eyebrow">Have a feeling about something?</p><h2>Let’s make<br /><span>it real.</span></h2></div><div className="cta-action"><ArrowLink href="/contact" className="button button-fill" magnetic>Tell us about it</ArrowLink></div></div>
      </section>
    </>
  );
}

