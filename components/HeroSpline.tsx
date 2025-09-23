"use client";

import Script from "next/script";
import React from "react";

type Props = {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
};

function HeroSpline({ scene, className, style }: Props) {
  return (
    <div className={className} style={style}>
      <>
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.61/build/spline-viewer.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {/* @ts-expect-error web component */}
        <spline-viewer url={scene} style={{ width: "100%", height: "100%" }} />
      </>
    </div>
  );
}

export default React.memo(HeroSpline);


