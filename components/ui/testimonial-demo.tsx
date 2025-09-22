"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ThumbsUp, ShieldCheck, Clock, Share, Rocket, Zap, Gem, MessageSquare, Headset, BarChart3 } from "lucide-react";
import { TestimonialStack, Testimonial } from "@/components/ui/glass-testimonial-swiper";

const staticData: Omit<Testimonial, "name" | "role" | "quote">[] = [
  {
    id: 1,
    initials: "CS",
    tags: [
      { text: "FEATURED", type: "featured" },
      { text: "LangGraph • RAG • WhatsApp", type: "default" },
    ],
    stats: [
      { icon: MessageSquare, text: "62% deflection" },
      { icon: ThumbsUp, text: "+18% CSAT" },
    ],
    avatarGradient: "linear-gradient(135deg, #5e6ad2, #8b5cf6)",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    initials: "VA",
    tags: [
      { text: "Twilio • Calendars • Stripe", type: "default" },
    ],
    stats: [
      { icon: Headset, text: "+35% after-hours" },
      { icon: ShieldCheck, text: "PCI ready" },
    ],
    avatarGradient: "linear-gradient(135deg, #10b981, #059669)",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    initials: "BO",
    tags: [
      { text: "HubSpot • Sheets • Make/Zapier", type: "default" },
    ],
    stats: [
      { icon: Clock, text: "~40 hrs saved/wk" },
      { icon: Share, text: "Data unified" },
    ],
    avatarGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    initials: "RR",
    tags: [
      { text: "SERP API • Apollo.io • X/Twitter", type: "default" },
    ],
    stats: [
      { icon: Rocket, text: "400+ leads/mo" },
      { icon: Zap, text: "2‑week ramp" },
    ],
    avatarGradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
  },
  {
    id: 5,
    initials: "JG",
    tags: [
      { text: "ElevenLabs • Midjourney • Perplexity", type: "default" },
    ],
    stats: [
      { icon: Gem, text: "4x creative output" },
      { icon: BarChart3, text: "50% faster delivery" },
    ],
    avatarGradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
  },
];

export default function TestimonialStackDemo() {
  const t = useTranslations("testimonialStack");

  const testimonialsData: Testimonial[] = staticData.map((item, index) => ({
    ...item,
    name: t(`items.${index}.name`),
    role: t(`items.${index}.role`),
    quote: t(`items.${index}.quote`),
  }));

  return (
    <div className="relative w-full min-h-[520px] flex items-center justify-center p-4 overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-50 scale-[1.3]"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/drhx7imeb/image/upload/v1756215257/gradient-optimized_nfrakk.svg")',
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <TestimonialStack testimonials={testimonialsData} />
      </div>
    </div>
  );
}


