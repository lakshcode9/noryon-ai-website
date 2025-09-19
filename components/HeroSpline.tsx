"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type Props = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

// Wrapper to satisfy JSX typing for the custom element at compile-time
const SplineViewer = ("spline-viewer" as unknown) as React.ElementType;

export default function HeroSpline({ scene, className, style }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile once on client
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Only mount the Spline viewer while the section is in view
  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(false);
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Hook up load event and fail-safe timeout when in view
  useEffect(() => {
    if (!inView || !containerRef.current) return;
    setIsLoaded(false);
    const el = containerRef.current.querySelector("spline-viewer") as (Element & { addEventListener?: any; removeEventListener?: any }) | null;
    const handleLoad = () => setIsLoaded(true);
    el?.addEventListener?.("load", handleLoad, { once: true });
    const failSafe = window.setTimeout(() => setIsLoaded(true), 8000);
    return () => {
      el?.removeEventListener?.("load", handleLoad);
      window.clearTimeout(failSafe);
    };
  }, [inView, scene]);

  if (isMobile) return <div ref={containerRef} className={`${className ?? ""} relative`} style={style} />;

  return (
    <div ref={containerRef} className={`${className ?? ""} relative`} style={style}>
      {inView ? (
        <>
          <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.61/build/spline-viewer.js" strategy="afterInteractive" />
          {/* web component */}
          <SplineViewer url={scene} style={{ width: "100%", height: "100%" }} />
          {!isLoaded ? (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-[linear-gradient(to_bottom,rgba(32,38,54,0.55),transparent_40%)]">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 rounded-full border-2 border-[#00cad1]/50 border-t-transparent animate-spin" />
                <div className="text-xs tracking-widest uppercase text-white/70">Loading 3D</div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}


