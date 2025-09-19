import HeroSpline from "../components/HeroSpline";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";
import Image from "next/image";
import ServiceTabs from "../components/ui/ServiceTabs";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative overflow-hidden shiny-blue">
      <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-[#20263699] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <Image src="/@favicon.png" alt="Noryon" width={24} height={24} className="h-6 w-6" />
            <span className="font-mono text-sm tracking-widest uppercase text-accent">Noryon AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#book" className="hover:text-white transition-colors">Book</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <MobileNav />
            <ThemeToggle />
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#04a8ae] px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_8px_rgba(0,200,207,0.35)] hover:bg-[#00cad1] transition-colors">
            Start a project
            </a>
          </div>
        </div>
      </header>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[#04a8ae33] blur-3xl" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#00c8cf33] blur-3xl" />
        <div className="absolute bottom-10 left-1/5 h-72 w-72 rounded-full bg-[#0584af33] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,132,175,0.08),transparent_60%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24 theme-blur-blob">
        {/* Background Spline in top-right, free-floating without borders */}
        <div aria-hidden className="absolute inset-y-0 right-0 w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[72%] max-w-none z-0 spline-mix will-change-transform">
          <HeroSpline
            scene="https://prod.spline.design/czRKzd-MFaaJMpVz/scene.splinecode"
            style={{ filter: "var(--spline-filter, none)", transform: "scale(1.5) translateX(6%)", transformOrigin: "right center" }}
          />
          <div className="pointer-events-none absolute -bottom-10 right-[6%] w-[26rem] h-[16rem] md:w-[30rem] md:h-[18rem] blur-2xl" style={{ background: "radial-gradient(60% 60% at 50% 20%, rgba(0,202,209,0.35) 0%, rgba(0,200,207,0.25) 36%, rgba(5,132,175,0.2) 52%, transparent 78%)" }} />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pointer-events-none">
          <div className="text-center lg:text-left">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-5">AI Automation Agency</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Future-Proof Your Business with AI Automation.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90">
              We build custom AI agents and workflows that save you time, cut costs, and help you scale faster and smarter while you sleep.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-[#04a8ae] px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_12px_rgba(0,200,207,0.25)] hover:bg-[#00cad1] transition-colors w-full sm:w-auto"
              >
                Get a proposal
              </a>
              <a
                href="#services"
                className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-secondary ring-1 ring-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                See capabilities
              </a>
              <a
                href="#book"
                className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-[#0584af] px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_12px_rgba(5,132,175,0.25)] hover:bg-[#00cad1] transition-colors w-full sm:w-auto"
              >
                Book a call
              </a>
            </div>
          </div>
          <div />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">AI‑Powered Business Solutions</h2>
            <p className="mt-4 text-white/90">Chatbots · Voice Agents · Automations · Analytics · Review & Reputation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Chatbot Services */}
            <ServiceTabs
              title="Chatbot Services"
              colorClass="#00cad1"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline:
                    "A simple AI assistant that gives your business a modern touch and saves time.",
                  description:
                    "It answers customer questions automatically and captures leads so you never miss an opportunity.",
                  features: [
                    "Instantly answers common customer questions (hours, pricing, services)",
                    "Collects customer info and sends it straight to your inbox or CRM",
                    "Guides visitors toward booking forms or next steps automatically",
                    "Provides 24/7 coverage so you never miss a lead",
                    "Passes complex requests to a human when needed",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart Booking",
                  tagline:
                    "More than just a Q&A bot — this chatbot books appointments, takes payments, and integrates with your systems.",
                  description:
                    "Built to keep your business running smoothly while handling FAQs and bookings in one conversation.",
                  features: [
                    "Handles FAQs and booking in one conversation",
                    "Automatically logs leads in your CRM for easy follow-up",
                    "Accepts deposits or booking fees securely online",
                    "Works seamlessly across your website, Messenger, and Instagram",
                    "Provides a simple analytics dashboard for tracking performance",
                  ],
                },
                {
                  key: "full",
                  label: "Full Omnichannel AI",
                  tagline:
                    "An enterprise-grade chatbot built for scale.",
                  description:
                    "Engages customers across every major channel, supports multiple languages, and delivers advanced insights — all while staying compliant and secure.",
                  features: [
                    "Includes Basic + Smart features",
                    "Advanced AI with memory for natural conversations",
                    "Connects on all major platforms (Instagram, Messenger, WhatsApp, etc.)",
                    "Multi-language support for global customers",
                    "Custom dashboards & analytics",
                    "Full compliance (GDPR, HIPAA, SOC2)",
                    "Dedicated support & uptime guarantees",
                  ],
                },
              ]}
            />

            {/* Voice AI Services */}
            <ServiceTabs
              title="Voice AI Services"
              colorClass="#00cad1"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline:
                    "A professional voice for your business without extra staff.",
                  description:
                    "This AI phone assistant makes sure every call is answered and every lead is captured.",
                  features: [
                    "Instantly answers common questions like hours, pricing, and services",
                    "Collects caller details and sends them directly to your inbox/CRM",
                    "Transfers calls to the right person so customers reach help faster",
                    "Always on — never miss a call, even after hours",
                    "Provides simple voicemail and call forwarding for backup",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart Booking",
                  tagline:
                    "Turn missed calls into booked appointments.",
                  description:
                    "This AI-powered agent manages scheduling and payments while keeping your calendar full.",
                  features: [
                    "Books appointments directly into your calendar",
                    "Automatically adds caller info into your CRM for follow-up",
                    "Accepts deposits or booking fees securely over the phone",
                    "Supports multiple languages so no customer is left out",
                    "Tracks call activity and provides clear booking analytics",
                  ],
                },
                {
                  key: "full",
                  label: "Full AI Assistant",
                  tagline:
                    "A complete enterprise-ready voice system that works like a virtual call center.",
                  description:
                    "Handles complex workflows, multiple locations, and delivers advanced insights at scale.",
                  features: [
                    "Provides natural, human-like conversations with memory of past interactions",
                    "Manages advanced tasks like rescheduling, order tracking, and ticket creation",
                    "Supports multiple languages and multiple business locations seamlessly",
                    "Connects across all voice channels (phone, WhatsApp, call centers, etc.)",
                    "Generates in-depth analytics and custom reports for management",
                    "Meets strict enterprise security and compliance standards (GDPR/HIPAA/SOC2)",
                    "Backed by dedicated support and guaranteed uptime",
                  ],
                },
              ]}
            />

            {/* Automation Services */}
            <ServiceTabs
              title="Automation Services"
              colorClass="#0584af"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline:
                    "A simple automation setup to save time on repetitive tasks and keep workflows running smoothly.",
                  description: "",
                  features: [
                    "Automates workflows (forms, reminders, notifications)",
                    "Connects core tools (Google Sheets, email, calendar)",
                    "Stores and organizes lead data automatically",
                    "Cuts down admin work and saves time",
                    "Runs 24/7 in the background",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline:
                    "An advanced system that links your key business tools to streamline operations and boost efficiency.",
                  description: "",
                  features: [
                    "All Basic features included",
                    "CRM integration (HubSpot, Zoho, Salesforce)",
                    "Payment gateway automation (Stripe, Square, PayPal)",
                    "Automated reports (daily, weekly, monthly)",
                    "Multi-step workflows across multiple apps",
                    "Performance dashboard with analytics",
                  ],
                },
                {
                  key: "full",
                  label: "Full Back-End AI",
                  tagline:
                    "A custom-built automation suite for mid-to-large businesses, powered by AI and designed for scale.",
                  description: "",
                  features: [
                    "All Basic + Smart features included",
                    "AI document processing (contracts, invoices, forms)",
                    "Custom API integrations with existing systems",
                    "Automated data extraction & enrichment",
                    "Advanced analytics & reporting tools",
                    "Scalable workflows for high-volume tasks",
                    "Enterprise security, compliance & monitoring",
                  ],
                },
              ]}
            />

            {/* Review & Reputation */}
            <ServiceTabs
              title="Review & Reputation"
              colorClass="#00c8cf"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline:
                    "A simple system that helps small businesses collect more positive reviews with minimal effort.",
                  description: "",
                  features: [
                    "Sends automated SMS or email requests after service",
                    "Drives customers directly to Google & Facebook review pages",
                    "Tracks requests and responses in a simple dashboard",
                    "Follows up automatically until feedback is left",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline:
                    "An advanced review automation system designed to protect and grow a brand’s reputation.",
                  description: "",
                  features: [
                    "Includes all Basic features",
                    "Requests reviews on Google, Facebook, Yelp & more",
                    "Filters negative feedback privately before it goes public",
                    "Sends reminders to customers who don’t respond",
                    "Provides a branded, customizable review request experience",
                    "Tracks ratings, volume, and trends in an analytics dashboard",
                  ],
                },
                {
                  key: "full",
                  label: "AI Suite",
                  tagline:
                    "A fully customized AI-powered reputation management system for enterprises.",
                  description:
                    "Built to monitor, analyze, and respond to reviews across multiple channels.",
                  features: [
                    "Includes all Basic + Smart features",
                    "Analyzes reviews with AI sentiment analysis (positive, neutral, negative)",
                    "Monitors competitors and provides comparison reports",
                    "Generates personalized AI-assisted replies to reviews",
                    "Supports multiple locations and languages",
                    "Provides custom analytics dashboards for leadership",
                    "Ensures enterprise security, compliance, and uptime guarantees",
                  ],
                },
              ]}
            />

            {/* Analytics & Reporting */}
            <div className="xl:col-span-2">
              <ServiceTabs
                title="Analytics & Reporting"
                colorClass="#04a8ae"
                tiers={[
                  {
                    key: "basic",
                    label: "Basic",
                    tagline:
                      "A simple AI-powered dashboard that gives small businesses clear visibility into their key numbers.",
                    description:
                      "No more digging through spreadsheets — data is tracked 24/7 so insights are always available.",
                    features: [
                      "Generates automated daily/weekly lead & sales reports",
                      "Displays top KPIs in a simple web dashboard",
                      "Delivers summary reports via email or SMS",
                      "Tracks data 24/7 so insights are always available",
                    ],
                  },
                  {
                    key: "smart",
                    label: "Smart",
                    tagline:
                      "An advanced analytics system that integrates with multiple platforms to give growing businesses a complete view of performance.",
                    description: "",
                    features: [
                      "Includes all Basic features",
                      "Integrates data from CRM, ads, website & booking tools",
                      "Tracks custom KPIs tailored to business goals",
                      "Detects trends with AI-powered insights",
                      "Provides performance comparisons (week-over-week, month-over-month)",
                      "Creates exportable reports for team collaboration",
                    ],
                  },
                  {
                    key: "full",
                    label: "AI Suite",
                    tagline:
                      "A fully customized analytics and reporting platform designed for enterprises.",
                    description:
                      "Built to deliver real-time insights, predictive forecasts, and executive-level dashboards.",
                    features: [
                      "Includes all Basic + Smart features",
                      "Predicts sales, churn, and demand with AI forecasting",
                      "Builds custom dashboards for leadership & departments",
                      "Supports multi-location & multi-language reporting",
                      "Integrates with ERP systems & enterprise data warehouses",
                      "Offers advanced visualizations & in-depth reports",
                      "Guarantees enterprise-level security, compliance & uptime",
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#04a8ae] px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_12px_rgba(0,200,207,0.25)] hover:bg-[#00cad1] transition-colors">Get a proposal</a>
          </div>
        </div>
      </section>

      {/* Work / Case Studies */}
      <section id="work" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Recent outcomes</h2>
            <p className="mt-4 text-white/90">A snapshot of measurable results we deliver with automation and AI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-medium">Inbound support automation</h3>
              <p className="mt-2 text-sm text-white/70">Deflected 62% tickets with a production chatbot. CSAT +18%.</p>
              <div className="mt-4 text-xs text-white/60">Stack: LangGraph, RAG, WhatsApp API</div>
            </div>
            <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-medium">Voice booking agent</h3>
              <p className="mt-2 text-sm text-white/70">Filled 35% more slots after‑hours with a multilingual agent.</p>
              <div className="mt-4 text-xs text-white/60">Stack: Twilio, Calendars, Stripe</div>
            </div>
            <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-medium">Back‑office automations</h3>
              <p className="mt-2 text-sm text-white/70">Saved ~40 hrs/week via CRM sync, invoices, and reporting.</p>
              <div className="mt-4 text-xs text-white/60">Stack: HubSpot, Sheets, Make/Zapier</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-8">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Let’s automate your growth</h2>
            <p className="mt-4 text-white/90">Tell us about your goals. We’ll send a short plan and pricing.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form
              className="rounded-xl bg-secondary ring-1 ring-white/10 p-6 space-y-4"
              action="mailto:contact@noryon.ai"
              method="post"
              encType="text/plain"
            >
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input className="w-full rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-[rgba(0,202,209,0.4)]" placeholder="Your name" name="name" required />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input type="email" className="w-full rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-[rgba(0,202,209,0.4)]" placeholder="you@company.com" name="email" required />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">What do you want to automate?</label>
                <textarea className="w-full min-h-28 rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-[rgba(0,202,209,0.4)]" placeholder="Short description" name="message" />
              </div>
              <button type="submit" className="inline-flex items-center rounded-md bg-[#04a8ae] px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_12px_rgba(0,200,207,0.25)] hover:bg-[#00cad1] transition-colors">Send email</button>
            </form>

            <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-white/60">Email</div>
                  <a className="text-white hover:text-accent transition-colors" href="mailto:contact@noryon.ai">contact@noryon.ai</a>
                </div>
                <div>
                  <div className="text-white/60">Phone</div>
                  <a className="text-white hover:text-accent transition-colors" href="tel:+15149841671">(514) 984‑1671</a>
                </div>
                <div>
                  <div className="text-white/60">Location</div>
                  <div className="text-white">Montreal, QC, Canada</div>
                </div>
              </div>
              <div className="mt-6">
                <a href="#services" className="inline-flex items-center rounded-md bg-secondary ring-1 ring-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">See services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call (Calendly) */}
      <section id="book" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-8">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">Book</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Schedule a strategy call</h2>
            <p className="mt-4 text-white/90">Pick a time that works for you — no back and forth.</p>
          </div>
          <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-2">
            <div
              className="calendly-inline-widget rounded-lg"
              data-url="https://calendly.com/shauncere/noryon-strategy-call"
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#202636]">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 select-none">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00cad1] shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]" />
            <span className="font-mono text-xs tracking-widest uppercase text-accent">Noryon AI</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} Noryon. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
