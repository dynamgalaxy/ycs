"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { projects, type Project } from "@/lib/projects";

export function ProjectCard({ project, index, total = projects.length, featured = false }: { project: Project; index: number; total?: number; featured?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.previewVideo || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !video.paused) {
        video.pause();
        video.currentTime = 0;
        setPreviewPlaying(false);
      }
    }, { threshold: 0.1 });
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) stopPreview();
    };
    observer.observe(video);
    motionPreference.addEventListener("change", stopForReducedMotion);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", stopForReducedMotion);
      video.pause();
    };
  }, [project.previewVideo]);

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPreviewPlaying(false);
  };

  const startPreview = (event?: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event && event.pointerType !== "mouse") return;
    if (!project.previewVideo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const video = videoRef.current;
    if (!video) return;
    // play() resolves before the first decoded frame. Keep the poster visible until
    // the browser has a real video frame, otherwise the card flashes its #24251f base.
    void video.play().catch(() => setPreviewPlaying(false));
  };

  const moveImage = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    event.currentTarget.style.setProperty("--drift-x", `${x.toFixed(1)}px`);
    event.currentTarget.style.setProperty("--drift-y", `${y.toFixed(1)}px`);
  };

  const resetImage = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--drift-x", "0px");
    event.currentTarget.style.setProperty("--drift-y", "0px");
  };

  const revealDecodedFrame = (video: HTMLVideoElement) => {
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || video.videoWidth === 0 || video.videoHeight === 0) return;
    const frameVideo = video as HTMLVideoElement & { requestVideoFrameCallback?: (callback: () => void) => number };
    if (frameVideo.requestVideoFrameCallback) {
      frameVideo.requestVideoFrameCallback(() => {
        if (!video.paused && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) setPreviewPlaying(true);
      });
    } else {
      setPreviewPlaying(true);
    }
  };
  const sizes = featured
    ? "(max-width: 760px) 92vw, 44vw"
    : project.layout === "wide"
      ? "(max-width: 760px) 92vw, 60vw"
      : project.layout === "portrait"
        ? "(max-width: 760px) 92vw, 42vw"
        : "(max-width: 760px) 92vw, 34vw";

  return (
    <article className="project-card" data-layout={project.layout} data-reveal="rise" style={{ "--reveal-delay": `${Math.min(index, 5) * 65}ms` } as React.CSSProperties}>
      <Link href={`/projects/${project.slug}`} className={`project-media${previewPlaying ? " is-playing" : ""}`} data-reveal={project.layout === "portrait" ? "mask-bottom" : project.layout === "square" ? "mask-right" : "mask"} data-cursor="VIEW PROJECT" aria-label={`View ${project.title}`} onPointerMove={moveImage} onPointerEnter={startPreview} onPointerLeave={(event) => { stopPreview(); resetImage(event); }} onFocus={() => startPreview()} onBlur={stopPreview}>
        <Image className="project-poster" src={project.image} alt={project.imageAlt} fill sizes={sizes} quality={82} />
        {project.previewVideo && <video ref={videoRef} className="project-preview-video" poster={project.image} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={(event) => revealDecodedFrame(event.currentTarget)} onError={() => setPreviewPlaying(false)}>
          {project.previewVideo.webm && <source src={project.previewVideo.webm} type="video/webm" />}
          {project.previewVideo.mp4 && <source src={project.previewVideo.mp4} type="video/mp4" />}
        </video>}
        <span className="project-overlay"><span className="project-index">SAMPLE &nbsp;·&nbsp; {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><span className="project-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span></span>
      </Link>
      <div className="project-info"><h3>{project.title}</h3><p>{project.category}</p></div>
    </article>
  );
}
