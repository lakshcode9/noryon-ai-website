"use client";

import Script from "next/script";
import React from "react";

type Props = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function HeroSpline({ scene, className, style }: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(false);
  const [isTabVisible, setIsTabVisible] = React.useState(true);

  // Toggle mount based on viewport
  React.useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "200px", threshold: 0.01 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Pause when tab not visible (unmount the viewer)
  React.useEffect(() => {
    const handler = () => setIsTabVisible(document.visibilityState === "visible");
    handler();
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {isInView && isTabVisible ? (
        <>
          <Script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.10.61/build/spline-viewer.js"
            strategy="lazyOnload"
          />
          {/* @ts-expect-error web component */}
          <spline-viewer url={scene} style={{ width: "100%", height: "100%" }} />
        </>
      ) : (
        <div style={{ width: "100%", height: "100%" }} />
      )}
    </div>
  );
}


