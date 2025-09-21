'use client';

import { useEffect } from 'react';

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
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={className}>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
    </div>
  );
}
