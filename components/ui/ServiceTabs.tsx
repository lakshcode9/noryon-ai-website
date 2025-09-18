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

  return (
    <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]"
          style={{ backgroundColor: colorClass }}
        />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>

      <div className="flex gap-2 flex-wrap text-[11px]">
        {tiers.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded px-2 py-1 ring-1 ring-white/15 transition-colors ${
              active === t.key ? "bg-white/15 text-white" : "bg-white/5 text-white/80 hover:bg-white/10"
            }`}
            style={active === t.key ? { boxShadow: "0 0 14px 6px rgba(0,202,209,0.25)" } : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm text-white/90">{activeTier.tagline}</p>
        <p className="mt-2 text-sm text-white/80 whitespace-pre-line">{activeTier.description}</p>
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


