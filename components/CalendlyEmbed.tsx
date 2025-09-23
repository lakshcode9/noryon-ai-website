'use client';

import { useEffect, useRef } from 'react';

type CalendlyAPI = {
  initInlineWidget(options: { url: string; parentElement: HTMLElement }): void;
};

declare global {
  interface Window {
    Calendly?: CalendlyAPI;
  }
}

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  height?: string;
}

export default function CalendlyEmbed({ 
  url, 
  className = "w-full", 
  height = "700px" 
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure Calendly stylesheet is present (improves reliability on mobile)
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const initialize = () => {
      const Calendly = window.Calendly;
      if (!Calendly || !containerRef.current) return;
      // Clear previous content to avoid duplicate iframes on hot reloads
      containerRef.current.innerHTML = '';
      Calendly.initInlineWidget({ url, parentElement: containerRef.current });
    };

    // Load Calendly widget script if not already loaded
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      if (window.Calendly) {
        initialize();
      } else {
        existingScript.addEventListener('load', initialize, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = initialize;
    document.head.appendChild(script);
  }, [url]);

  return (
    <div className={className}>
      {/* Calendly will render the inline iframe into this container */}
      <div ref={containerRef} style={{ width: '100%', minWidth: 0, height }} />
    </div>
  );
}
