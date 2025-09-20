"use client";

import React from "react";
import { ThumbsUp, ShieldCheck, Clock, Share, Rocket, Zap, Gem, MessageSquare, Headset, BarChart3 } from "lucide-react";
import { TestimonialStack, Testimonial } from "@/components/ui/glass-testimonial-swiper";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: "CS",
    name: "Ops Lead, Retail Brand",
    role: "Inbound Support Automation",
    quote:
      "Our chatbot deflects 62% of tickets while CSAT is up 18%. Customers get instant answers, and my team focuses on the hard stuff.",
    tags: [
      { text: "FEATURED", type: "featured" },
      { text: "LangGraph • RAG • WhatsApp", type: "default" },
    ],
    stats: [
      { icon: MessageSquare, text: "62% deflection" },
      { icon: ThumbsUp, text: "+18% CSAT" },
    ],
    avatarGradient: "linear-gradient(135deg, #5e6ad2, #8b5cf6)",
  },
  {
    id: 2,
    initials: "VA",
    name: "Clinic Manager",
    role: "Voice Booking Agent",
    quote:
      "After-hours bookings grew 35%. The agent books, takes deposits, and speaks our patients’ language — literally.",
    tags: [
      { text: "Twilio • Calendars • Stripe", type: "default" },
    ],
    stats: [
      { icon: Headset, text: "+35% after-hours" },
      { icon: ShieldCheck, text: "PCI ready" },
    ],
    avatarGradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    id: 3,
    initials: "BO",
    name: "Ops Director, B2B SaaS",
    role: "Back‑Office Automations",
    quote:
      "We recovered ~40 hours every week through CRM syncs, invoicing, and reporting. It just runs in the background.",
    tags: [
      { text: "HubSpot • Sheets • Make/Zapier", type: "default" },
    ],
    stats: [
      { icon: Clock, text: "~40 hrs saved/wk" },
      { icon: Share, text: "Data unified" },
    ],
    avatarGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    id: 4,
    initials: "RR",
    name: "Marketing Lead, Multi‑location",
    role: "Review & Reputation",
    quote:
      "Reviews tripled and our average rating climbed by 1.2 stars in 8 weeks. Negative feedback gets routed privately.",
    tags: [
      { text: "Google • Facebook • Yelp", type: "default" },
    ],
    stats: [
      { icon: Rocket, text: "3x review volume" },
      { icon: Zap, text: "+1.2★ rating" },
    ],
    avatarGradient: "linear-gradient(135deg, #ec4899, #d946ef)",
  },
  {
    id: 5,
    initials: "AR",
    name: "COO, Marketplace",
    role: "Analytics & Reporting",
    quote:
      "Leaders finally get one dashboard that answers ‘how are we doing?’ AI highlights trends and sends weekly summaries.",
    tags: [
      { text: "CRM • Ads • Bookings • Web", type: "default" },
    ],
    stats: [
      { icon: BarChart3, text: "Exec dashboards" },
      { icon: Gem, text: "Forecasting" },
    ],
    avatarGradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
];

export default function TestimonialStackDemo() {
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


