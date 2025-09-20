"use client";

import React from "react";
import GlowCard from "./GlowCard";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";

type TierKey = "basic" | "smart" | "full";

type Tier = {
  key: TierKey;
  label: string;
  tagline?: string;
  features?: string[];
};

type ServiceCardProps = {
  title: string;
  tiers: Tier[]; // must be in order basic -> smart -> full
  accent?: string; // hex color
  ctaHref?: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  tiers,
  accent = "#00cad1",
  ctaHref = "#contact",
  className,
  icon,
}: ServiceCardProps) {
  const [active, setActive] = React.useState<TierKey>(tiers[0]?.key || "basic");
  const activeTier = tiers.find(t => t.key === active) || tiers[0];
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

        {/* Tier tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tiers.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "flex-1 rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "bg-background/40 text-white/70 hover:text-white"
                )}
                aria-pressed={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {activeTier?.tagline && <p className="mt-3 text-sm text-white/90">{activeTier.tagline}</p>}

        {activeTier?.features?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
            {activeTier.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6">
          <StarBorder as="a" href={ctaHref} className="w-full text-center">
            Get this
          </StarBorder>
        </div>
      </div>
    </GlowCard>
  );
}


