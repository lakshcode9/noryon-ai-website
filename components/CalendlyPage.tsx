'use client';

import CalendlyEmbed from './CalendlyEmbed';
import { useTranslations } from 'next-intl';

export default function CalendlyPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">
            {t("header.book")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            {t("booking.heading")}
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            {t("booking.description")}
          </p>
        </div>
        
        <CalendlyEmbed 
          url="https://calendly.com/shauncere/noryon-strategy-call"
          className="w-full max-w-5xl mx-auto"
          height="800px"
        />
      </div>
    </div>
  );
}
