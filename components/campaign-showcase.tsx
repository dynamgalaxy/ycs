import Image from "next/image";
import type { Project } from "@/lib/projects";

/** Editorial campaign extension mockups. Everything shown here is illustrative sample creative. */
export function CampaignShowcase({ project }: { project: Project }) {
  return (
    <section className="campaign-showcase" aria-labelledby="campaign-showcase-title">
      <div className="campaign-showcase-heading">
        <p className="eyebrow">Campaign extensions / Illustrative</p>
        <h2 id="campaign-showcase-title">One idea.<br /><span>More ways in.</span></h2>
        <p>Sample creative showing how a campaign thought can travel across brand, social, and paid placements.</p>
      </div>
      <div className="campaign-display">
        <div className="campaign-phone" aria-label={`Illustrative mobile social creative for ${project.title}`}>
          <div className="campaign-phone-top"><span className="campaign-avatar">YS</span><span><strong>STUDIO / SAMPLE</strong><small>Sponsored concept</small></span><span aria-hidden="true">···</span></div>
          <div className="campaign-phone-media">
            <Image src={project.image} alt="" fill sizes="(max-width:760px) 62vw, 250px" />
            <span className="campaign-phone-tag">THE CAMPAIGN / 01</span>
            <span className="campaign-phone-copy">{project.title}<i>MADE TO MOVE</i></span>
          </div>
          <div className="campaign-phone-actions"><span>♡ &nbsp; ◌ &nbsp; ↗</span><span>•••</span></div>
          <div className="campaign-phone-caption"><b>Campaign concept</b> / Creative direction, production, and channel-ready edits.</div>
        </div>
        <div className="campaign-board">
          <div className="campaign-board-top"><span>YCS / CREATIVE SYSTEM</span><span>01 — 03 / SAMPLE</span></div>
          <h3>A single thought,<br /><em>built for every frame.</em></h3>
          <div className="campaign-ad-variations">
            <div className="campaign-ad campaign-ad--wide"><Image src={project.image} alt="" fill sizes="(max-width:760px) 85vw, 520px" /><span>01 / BRAND FILM</span></div>
            <div className="campaign-ad campaign-ad--crop"><Image src={project.secondImage} alt="" fill sizes="(max-width:760px) 42vw, 260px" /><span>02 / SOCIAL</span></div>
            <div className="campaign-ad campaign-ad--copy"><span>03 / PAID CREATIVE</span><strong>Make a reason<br />to look closer.</strong><small>Awareness / Consideration / Action</small></div>
          </div>
          <div className="campaign-board-foot"><span>Creative direction + content system</span><span>Example layouts / Not campaign results</span></div>
        </div>
      </div>
    </section>
  );
}
