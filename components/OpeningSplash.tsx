"use client";

import React from "react";
import Image from "next/image";

export default function OpeningSplash() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const seen = sessionStorage.getItem("noryon:splash:seen");
    if (seen === "1") {
      setHidden(true);
      return;
    }
    const timer = window.setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("noryon:splash:seen", "1");
    }, 2300);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#202636] splash-mask"
      aria-hidden
    >
      <Image
        src="/@favicon.png"
        alt="Noryon logo"
        className="splash-logo"
        width={160}
        height={160}
        priority
      />
    </div>
  );
}


