"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function HeroSpline({ scene, className, style }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile once on client
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Only mount the heavy Spline canvas while the section is in view
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

  if (isMobile) return <div ref={containerRef} className={className} style={style} />;

  return (
    <div ref={containerRef} className={className} style={style}>
      {inView ? (
        <Spline
          scene={scene}
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
}


