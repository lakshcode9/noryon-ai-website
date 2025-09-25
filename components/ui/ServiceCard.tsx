"use client";

import React from "react";
import GlowCard from "./GlowCard";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import { useTranslations, useLocale } from "next-intl";

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
  dotColor?: string; // hex color
  ctaHref?: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  tiers,
  accent = "#00cad1",
  dotColor,
  ctaHref = "#contact",
  className,
  icon,
}: ServiceCardProps) {
  const t = useTranslations();
  const locale = useLocale();
  const isFR = (locale || "").toLowerCase().startsWith("fr");
  const [active, setActive] = React.useState<TierKey>(tiers[0]?.key || "basic");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <GlowCard accentColor={accent} className={cn("h-full flex flex-col", className)}>
      <div className={cn("p-4", "flex flex-col flex-1")}> 
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]"
            style={{ backgroundColor: dotColor || accent }}
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
        <div className="mt-4 flex items-center gap-2">
          {tiers.map((t) => {
            const isActive = active === t.key;
            if (!isMounted) {
              return (
                <div
                  key={t.key}
                  className="flex-1 rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors bg-background/40 text-white/70"
                />
              );
            }
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

        {/* Content area that changes */}
        <div className="grid">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              style={{ gridArea: '1 / 1 / 2 / 2' }}
              className={cn('transition-opacity', {
                'visible opacity-100': active === tier.key,
                'invisible opacity-0': active !== tier.key,
              })}
            >
              {tier?.tagline && (
                <p className={cn("mt-2", "text-sm text-white/90")}>{tier.tagline}</p>
              )}

              {tier?.features?.length ? (
                <ul className={cn("mt-3", "space-y-2 text-sm text-white/80 list-disc list-inside")}> 
                  {tier.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className={cn("mt-4 pt-3", "flex")}> 
          <StarBorder as="a" href={ctaHref} className={cn("mx-auto", "text-center")} color="#00888a" size="xs">
            {t("services.cards.getThis")}
          </StarBorder>
        </div>
      </div>
    </GlowCard>
  );
}


