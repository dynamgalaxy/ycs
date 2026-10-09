import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/site-shell";
import { CinematicMedia } from "@/components/cinematic-media";
import { CampaignShowcase } from "@/components/campaign-showcase";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary, openGraph: { images: [project.image] } } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <>
      <section className="wrap detail-hero">
        <p className="eyebrow"><a href="/projects">Projects</a> &nbsp;/&nbsp; {project.category}</p>
        <div className="detail-heading"><h1>{project.title}</h1><p>{project.discipline}<br />Sample concept · no client</p></div>
        <div className={`detail-image-frame detail-image-frame--${project.layout}${project.previewVideo ? " detail-video-frame" : ""}`} data-reveal="mask">
          {project.previewVideo ? <CinematicMedia className="detail-video-media" poster={project.image} alt={`${project.title}, sample campaign footage`} mp4Src={project.previewVideo.mp4} webmSrc={project.previewVideo.webm} priority sizes="(max-width:760px) 94vw, 84vw" controls /> : <Image className="detail-image" src={project.image} alt={project.imageAlt} fill priority sizes="(max-width:760px) 94vw, 84vw" />}
        </div>
        <div className="detail-meta"><div><small>Discipline</small><strong>{project.category}</strong></div><div><small>Example scope</small><strong>{project.discipline}</strong></div><div><small>Portfolio status</small><strong>Temporary sample concept</strong></div></div>
        <div className="detail-story" data-reveal="rise"><p className="eyebrow">The starting point</p><p>{project.summary}</p></div>
        <div className="detail-brief" data-reveal="rise">
          <div><p className="eyebrow">Objective</p><p>{project.objective}</p></div>
          <div><p className="eyebrow">Creative approach</p><p>{project.concept}</p></div>
          <div><p className="eyebrow">Campaign thinking</p><p>{project.marketing}</p></div>
          <div><p className="eyebrow">Sample deliverables</p><ul>{project.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></div>
        </div>
        <div className="detail-secondary-frame" data-reveal="mask"><Image className="detail-secondary" src={project.secondImage} alt={`A further frame from ${project.title}`} fill sizes="(max-width:760px) 94vw, 74vw" /></div>
        <CampaignShowcase project={project} />
        <p className="draft-note" style={{ marginTop: 22 }}>Temporary sample concept for layout direction. This is not a client commission or a claim of completed work.</p>
      </section>
      <section className="wrap project-next" aria-label="Next project"><p className="eyebrow">Continue through the sample work</p><ArrowLink href={`/projects/${nextProject.slug}`} className="project-next-link"><span><small>Next / {nextProject.category}</small><strong>{nextProject.title}</strong></span><span aria-hidden="true">↗</span></ArrowLink></section>
      <section className="wrap cta-band"><div className="cta-row"><div><p className="eyebrow">Have a project of your own?</p><h2>Make the<br /><span>first move.</span></h2></div><div className="cta-action"><ArrowLink href="/contact" className="button button-fill">Start a project</ArrowLink></div></div></section>
    </>
  );
}
