"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

  // Detect mobile once on client
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  if (isMobile) return null;

  return (
    <Spline
      scene={scene}
      className={className}
      style={{ width: "100%", height: "100%", ...(style || {}) }}
    />
  );
}


