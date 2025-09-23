"use client";

import Script from "next/script";
import React from "react";

type Props = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

function HeroSpline({ scene, className, style }: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = React.useState(false); // load once when near viewport

  React.useEffect(() => {
    if (!containerRef.current || shouldLoad) return;
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldLoad(true); // trigger load once
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "600px", threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldLoad ? (
        <>
          <Script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.10.61/build/spline-viewer.js"
            strategy="afterInteractive"
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

export default React.memo(HeroSpline);


