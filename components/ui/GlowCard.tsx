"use client";

import React from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & {
  accentColor?: string;
};

export default function GlowCard({
  className,
  accentColor = "#00cad1",
  children,
  ...props
}: GlowCardProps) {
  return (
    <div className={cn("relative group", className)} {...props}>
      {/* Outer animated gradient border */}
      <div
        aria-hidden
        className="absolute -inset-[1px] rounded-2xl opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 140deg at 50% 50%, rgba(0,202,209,0.35), rgba(5,132,175,0.25), rgba(255,255,255,0.08), rgba(0,202,209,0.35))",
          filter: "saturate(120%)",
        }}
      />

      {/* Background glows */}
      <div aria-hidden className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: `${accentColor}33` }}
        />
        <div
          className="absolute -bottom-20 -right-14 h-52 w-52 rounded-full blur-3xl"
          style={{ backgroundColor: `${accentColor}22` }}
        />
      </div>

      {/* Content card */}
      <div
        className={cn(
          "h-full relative rounded-2xl bg-secondary/70 ring-1 ring-white/15 backdrop-blur-[2px]",
          "transition-transform duration-300 group-hover:translate-y-[-2px]",
          "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
        )}
      >
        {children}
      </div>
    </div>
  );
}


