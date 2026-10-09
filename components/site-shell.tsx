"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "Studio" },
  ];
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Yousaf’s Creative Studio home">
          <span className="brand-mark" aria-hidden="true">Y</span> YOUSAF’S CREATIVE STUDIO
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
        </div>
        <Link href="/contact" className="nav-cta">Start a project <ArrowUpRight size={12} aria-hidden="true" /></Link>
        <button type="button" className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className={`menu-lines${menuOpen ? " is-open" : ""}`} aria-hidden="true"><span /><span /></span>
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-panel${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Studio</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>
        <span className="mono mobile-panel-note">Islamabad · Working everywhere</span>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">Y</span> YOUSAF’S CREATIVE STUDIO</Link>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/projects">Projects</Link><Link href="/about">Studio</Link><Link href="/contact">Contact</Link>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={10} aria-hidden="true" /></a>
            <a href="https://vimeo.com/" target="_blank" rel="noreferrer">Vimeo <ArrowUpRight size={10} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Yousaf’s Creative Studio | Gift by Dynam Galaxy</span>
          <span>Islamabad, Pakistan · Working everywhere</span>
          <span><Link href="/privacy">Privacy</Link> &nbsp;·&nbsp; <Link href="/terms">Terms</Link> &nbsp;·&nbsp; <Link href="/sitemap">Sitemap</Link></span>
        </div>
      </div>
    </footer>
  );
}

export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window) || !("MutationObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    document.body.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });
    const watch = (root: ParentNode) => root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((item) => observer.observe(item));
    watch(document);
    const mutations = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        if (node.matches("[data-reveal]:not(.is-visible)")) observer.observe(node);
        watch(node);
      }
    })));
    mutations.observe(document.body, { childList: true, subtree: true });

    const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;
      parallaxTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;
        const position = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const shift = Math.max(-14, Math.min(14, position * -22));
        target.style.setProperty("--scroll-shift", `${shift.toFixed(1)}px`);
      });
    };
    const requestParallaxFrame = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    window.addEventListener("scroll", requestParallaxFrame, { passive: true });
    window.addEventListener("resize", requestParallaxFrame);
    requestParallaxFrame();

    const cursor = document.createElement("div");
    cursor.className = "cursor-label";
    cursor.setAttribute("aria-hidden", "true");
    document.body.append(cursor);
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const move = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };
    let activeTarget: HTMLElement | null = null;
    const enter = (event: PointerEvent) => {
      const source = event.target;
      if (!(source instanceof Element)) return;
      const target = source.closest<HTMLElement>("[data-cursor]");
      if (!target || target === activeTarget) return;
      activeTarget = target;
      cursor.textContent = target.dataset.cursor || "View project";
      cursor.style.opacity = "1";
    };
    const leave = (event: PointerEvent) => {
      const source = event.target;
      if (!(source instanceof Element) || !activeTarget || !activeTarget.contains(source)) return;
      if (event.relatedTarget instanceof Node && activeTarget.contains(event.relatedTarget)) return;
      activeTarget = null;
      cursor.style.opacity = "0";
    };
    if (finePointer) {
      window.addEventListener("pointermove", move);
      document.addEventListener("pointerover", enter);
      document.addEventListener("pointerout", leave);
    }
    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.body.classList.remove("reveal-ready");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", leave);
      window.removeEventListener("scroll", requestParallaxFrame);
      window.removeEventListener("resize", requestParallaxFrame);
      if (frame) window.cancelAnimationFrame(frame);
      cursor.remove();
    };
  }, [pathname]);
  return null;
}

export function ScrollLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-link">{children}<ArrowDown size={13} aria-hidden="true" /></a>;
}

export function ArrowLink({ href, children, className = "button", magnetic = false }: { href: string; children: React.ReactNode; className?: string; magnetic?: boolean }) {
  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (!magnetic || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.09;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.09;
    event.currentTarget.style.setProperty("--mag-x", `${Math.max(-4, Math.min(4, x)).toFixed(1)}px`);
    event.currentTarget.style.setProperty("--mag-y", `${Math.max(-4, Math.min(4, y)).toFixed(1)}px`);
  };
  const resetMagnet = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--mag-x", "0px");
    event.currentTarget.style.setProperty("--mag-y", "0px");
  };
  return <Link href={href} className={className} data-magnetic={magnetic || undefined} onPointerMove={magnetic ? handlePointerMove : undefined} onPointerLeave={magnetic ? resetMagnet : undefined}>{children}<ArrowRight size={14} aria-hidden="true" /></Link>;
}
