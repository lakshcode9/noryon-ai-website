"use client";

import React from "react";

type TierKey = "basic" | "smart" | "full";

export type ServiceTier = {
  key: TierKey;
  label: string;
  tagline: string;
  description: string;
  features: string[];
};

export type ServiceTabsProps = {
  title: string;
  colorClass?: string;
  tiers: ServiceTier[];
};

export default function ServiceTabs({ title, colorClass = "#00cad1", tiers }: ServiceTabsProps) {
  const [active, setActive] = React.useState<TierKey>(tiers[0]?.key ?? "basic");
  const activeTier = tiers.find(t => t.key === active) ?? tiers[0];

  function hexToRgba(hex: string, alpha: number): string {
    const sanitized = hex.replace("#", "");
    const bigint = parseInt(sanitized.length === 3
      ? sanitized.split("").map(c => c + c).join("")
      : sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return (
    <div className="rounded-xl ring-1 ring-white/10 overflow-hidden">
      {/* Header Tabs (new design) */}
      <div className="flex divide-x divide-white/10 border-b border-white/10">
        {tiers.map(t => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="flex-1 px-4 py-3 text-left uppercase tracking-wide font-semibold text-white transition-all"
              aria-pressed={isActive}
              style={{
                backgroundColor: isActive
                  ? hexToRgba(colorClass, 0.28) // lighter when selected
                  : hexToRgba("#202636", 1),
                boxShadow: isActive ? "inset 0 -2px 0 0 rgba(255,255,255,0.18)" : undefined,
                filter: isActive ? "saturate(115%)" : undefined,
              }}
            >
              <span className="text-2xl">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div className="bg-secondary p-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]"
            style={{ backgroundColor: colorClass }}
          />
          <h3 className="text-xl font-medium">{title}</h3>
        </div>

        <p className="text-sm text-white/90">{activeTier.tagline}</p>
        {activeTier.description && (
          <p className="mt-2 text-sm text-white/80 whitespace-pre-line">{activeTier.description}</p>
        )}
        {activeTier.features?.length > 0 && (
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            {activeTier.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


