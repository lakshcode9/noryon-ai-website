"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

// Data adapted from Services English.txt with on-brand wording
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Chatbots answer FAQs, capture leads, and guide to booking 24/7.",
    by: "Chatbot Services · Basic",
    imgSrc: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial:
      "Smart booking chatbots take deposits and log leads in your CRM.",
    by: "Chatbot Services · Smart",
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial:
      "Omnichannel AI with memory, analytics, and compliance ready.",
    by: "Chatbot Services · Full AI",
    imgSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial:
      "Every call answered. Lead capture and smart routing built‑in.",
    by: "Voice AI · Basic",
    imgSrc: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial:
      "Turn missed calls into booked appointments, in multiple languages.",
    by: "Voice AI · Smart",
    imgSrc: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial:
      "Enterprise voice: rescheduling, order tracking, tickets and analytics.",
    by: "Voice AI · Full AI",
    imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial:
      "Automate forms, reminders, notifications; save hours weekly.",
    by: "Automation · Basic",
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 7,
    testimonial:
      "CRM + payments + multi‑step workflows with performance dashboards.",
    by: "Automation · Smart",
    imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 8,
    testimonial:
      "AI document processing, custom APIs, monitoring and compliance.",
    by: "Automation · Full AI",
    imgSrc: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 9,
    testimonial:
      "Collect more positive reviews with automated requests and follow‑ups.",
    by: "Reputation · Basic",
    imgSrc: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 10,
    testimonial:
      "Protect your brand; filter negatives and track trends in a dashboard.",
    by: "Reputation · Smart",
    imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 11,
    testimonial:
      "Enterprise suite with AI replies, competitor monitoring and analytics.",
    by: "Reputation · Full AI",
    imgSrc: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 12,
    testimonial:
      "Simple KPIs, automated reports and always‑on tracking.",
    by: "Analytics · Basic",
    imgSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 13,
    testimonial:
      "Unify CRM, ads, web & bookings; detect trends with AI.",
    by: "Analytics · Smart",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
  },
  {
    tempId: 14,
    testimonial:
      "Forecasting, exec dashboards, and warehouse integrations.",
    by: "Analytics · Full AI",
    imgSrc: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter ? "z-10 bg-primary text-primary-foreground border-primary" : "z-0 bg-card text-card-foreground border-border hover:border-primary/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span className="absolute block origin-top-right rotate-45 bg-border" style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }} />
      <Image
        src={testimonial.imgSrc}
        alt={testimonial.by}
        width={48}
        height={56}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{ boxShadow: "3px 3px 0px hsl(var(--background))" }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-primary-foreground" : "text-foreground")}>&ldquo;{testimonial.testimonial}&rdquo;</h3>
      <p className={cn("absolute bottom-8 left-8 right-8 mt-2 text-sm italic", isCenter ? "text-primary-foreground/80" : "text-muted-foreground")}>- {testimonial.by}</p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-secondary" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2;
        return (
          <TestimonialCard key={testimonial.tempId} testimonial={testimonial} handleMove={handleMove} position={position} cardSize={cardSize} />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StaggerTestimonials;


