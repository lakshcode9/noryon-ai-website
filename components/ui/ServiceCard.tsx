"use client";

import React from "react";
import GlowCard from "./GlowCard";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";

type ServiceCardProps = {
  title: string;
  tagline?: string;
  features?: string[];
  accent?: string; // hex color
  ctaHref?: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  tagline,
  features = [],
  accent = "#00cad1",
  ctaHref = "#contact",
  className,
  icon,
}: ServiceCardProps) {
  return (
    <GlowCard accentColor={accent} className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]"
            style={{ backgroundColor: accent }}
          />
          <h3 className="text-xl font-semibold flex-1">{title}</h3>
          {icon && (
            <div
              className="shrink-0 h-10 w-10 grid place-items-center rounded-xl ring-1 ring-white/15"
              style={{
                background: `linear-gradient(180deg, ${accent}22, transparent)`
              }}
            >
              <div className="text-white/90">{icon}</div>
            </div>
          )}
        </div>

        {tagline && <p className="mt-3 text-sm text-white/90">{tagline}</p>}

        {features.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <StarBorder as="a" href={ctaHref} className="w-full text-center">
            Get this
          </StarBorder>
        </div>
      </div>
    </GlowCard>
  );
}


