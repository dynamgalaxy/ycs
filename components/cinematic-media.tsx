"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CinematicMediaProps = {
  poster: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  webmSrc?: string;
  mp4Src?: string;
  controls?: boolean;
  autoPlayOnMobile?: boolean;
};

/** Image-first media with an optional local MP4/WebM loop. The poster remains visible at all times. */
export function CinematicMedia({ poster, alt, className = "", priority = false, sizes = "100vw", webmSrc, mp4Src, controls = false, autoPlayOnMobile = false }: CinematicMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(webmSrc || mp4Src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 760px)");
    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    const shouldAutoplay = () => !motionPreference.matches && (autoPlayOnMobile || !smallScreen.matches) && !connection.connection?.saveData;
    const pause = () => {
      video.pause();
      setPlaying(false);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && shouldAutoplay()) {
        void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else if (!entry.isIntersecting || motionPreference.matches) {
        pause();
      }
    }, { threshold: 0.15 });
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) pause();
    };
    observer.observe(video);
    motionPreference.addEventListener("change", onMotionPreferenceChange);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      pause();
    };
  }, [autoPlayOnMobile, hasVideo]);

  return (
    <div className={`cinematic-media ${className}${playing ? " is-playing" : ""}`}>
      <Image src={poster} alt={alt} fill priority={priority} sizes={sizes} quality={85} />
      {hasVideo && (
        <video ref={videoRef} className="cinematic-video" muted loop playsInline preload="none" controls={controls} aria-label={controls ? alt : undefined} aria-hidden={controls ? undefined : true} tabIndex={controls ? 0 : -1} onError={() => setPlaying(false)}>
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
