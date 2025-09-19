import HeroSpline from "../components/HeroSpline";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";
import Image from "next/image";
import ServiceCard from "@/components/ui/ServiceCard";
import { StarBorder } from "@/components/ui/star-border";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative overflow-hidden shiny-blue">
      <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-[#20263699]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <Image src="/@favicon.png" alt="Noryon" width={24} height={24} className="h-6 w-6" />
            <span className="font-mono text-sm tracking-widest uppercase text-accent">Noryon</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#book" className="hover:text-white transition-colors">Book</a>
          </nav>
          <div className="flex items-center gap-3">
            <MobileNav />
            <ThemeToggle />
            <StarBorder as="a" href="#contact" className="pointer-events-auto">
              Start a project
            </StarBorder>
          </div>
        </div>
      </header>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[#04a8ae33]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#00c8cf33]" />
        <div className="absolute bottom-10 left-1/5 h-72 w-72 rounded-full bg-[#0584af33]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,132,175,0.08),transparent_60%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
        {/* Background Spline positioned at extreme right */}
        <div aria-hidden className="absolute inset-y-0 right-0 w-[100vw] z-0 spline-mix will-change-transform">
          <HeroSpline
            scene="https://prod.spline.design/czRKzd-MFaaJMpVz/scene.splinecode"
            style={{ filter: "var(--spline-filter, none)", transform: "translateX(40%) scale(1.2)", transformOrigin: "right center" }}
          />
          {/* Solid bottom overlay to cover the leg seam exactly */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[18vh] md:h-[20vh] lg:h-[22vh] bg-background opacity-95 pointer-events-none z-[1]"
          />
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
              <StarBorder as="a" href="#contact" className="pointer-events-auto w-full sm:w-auto text-center">
                Get a proposal
              </StarBorder>
              <StarBorder as="a" href="#services" className="pointer-events-auto w-full sm:w-auto text-center">
                See capabilities
              </StarBorder>
              <StarBorder as="a" href="#book" className="pointer-events-auto w-full sm:w-auto text-center">
                Book a call
              </StarBorder>
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
            {/* Chatbots */}
            <ServiceCard
              title="Chatbot Services"
              accent="#00cad1"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline: "A simple AI assistant that answers FAQs and captures leads automatically.",
                  features: [
                    "Instant answers for hours, pricing, services",
                    "Lead capture to inbox or CRM",
                    "Guides to booking/forms",
                    "24/7 coverage; hands‑off",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline: "Booking + payments with integrated workflows.",
                  features: [
                    "Handles FAQs and booking in one flow",
                    "Logs leads to CRM automatically",
                    "Takes deposits or fees online",
                    "Works across site, Messenger, Instagram",
                  ],
                },
                {
                  key: "full",
                  label: "Full AI",
                  tagline: "Omnichannel AI with memory, analytics and compliance.",
                  features: [
                    "Advanced AI with conversation memory",
                    "Instagram, Messenger, WhatsApp and more",
                    "Custom dashboards and analytics",
                    "Compliance: GDPR / HIPAA / SOC2",
                  ],
                },
              ]}
            />

            {/* Voice */}
            <ServiceCard
              title="Voice AI Services"
              accent="#00cad1"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline: "A professional voice that answers every call and captures leads.",
                  features: [
                    "Instant answers for common questions",
                    "Sends caller details to inbox/CRM",
                    "Smart transfers so callers reach the right person",
                    "After‑hours coverage + voicemail",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline: "Turn missed calls into booked appointments.",
                  features: [
                    "Books directly into your calendar",
                    "Adds caller info to CRM",
                    "Accepts deposits during the call",
                    "Multi‑language support",
                  ],
                },
                {
                  key: "full",
                  label: "Full AI",
                  tagline: "Enterprise voice system with complex workflows and analytics.",
                  features: [
                    "Natural conversations with memory",
                    "Rescheduling, order tracking, ticket creation",
                    "All voice channels: phone, WhatsApp, call centers",
                    "Deep analytics + compliance (GDPR/HIPAA/SOC2)",
                  ],
                },
              ]}
            />

            {/* Automation */}
            <ServiceCard
              title="Automation Services"
              accent="#0584af"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline: "Save time on repetitive tasks and keep workflows running.",
                  features: [
                    "Automates forms, reminders, notifications",
                    "Connects Sheets, email, calendar",
                    "Auto‑stores and organizes leads",
                    "Runs 24/7 in the background",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline: "Connect core tools to streamline operations and boost efficiency.",
                  features: [
                    "Includes all Basic",
                    "CRM integrations (HubSpot, Zoho, Salesforce)",
                    "Payments (Stripe, Square, PayPal)",
                    "Multi‑step workflows + performance dashboard",
                  ],
                },
                {
                  key: "full",
                  label: "Full AI",
                  tagline: "Custom AI‑powered back‑end built for scale.",
                  features: [
                    "AI document processing",
                    "Custom API integrations",
                    "Data extraction & enrichment",
                    "Advanced analytics, monitoring, compliance",
                  ],
                },
              ]}
            />

            {/* Reputation */}
            <ServiceCard
              title="Review & Reputation"
              accent="#00c8cf"
              tiers={[
                {
                  key: "basic",
                  label: "Basic",
                  tagline: "Collect more positive reviews with minimal effort.",
                  features: [
                    "Automated SMS/email requests",
                    "Direct to Google & Facebook",
                    "Simple request tracking",
                    "Follow‑ups until feedback is left",
                  ],
                },
                {
                  key: "smart",
                  label: "Smart",
                  tagline: "Protect and grow your brand’s reputation.",
                  features: [
                    "Includes all Basic",
                    "Requests on Google, Facebook, Yelp & more",
                    "Filters negative feedback privately",
                    "Branded experience + trends dashboard",
                  ],
                },
                {
                  key: "full",
                  label: "Full AI",
                  tagline: "Enterprise AI reputation management suite.",
                  features: [
                    "AI sentiment analysis",
                    "Competitor monitoring + comparison",
                    "Personalized AI replies",
                    "Multi‑location/language + executive dashboards",
                  ],
                },
              ]}
            />

            {/* Analytics */}
            <div className="xl:col-span-2">
              <ServiceCard
                title="Analytics & Reporting"
                accent="#04a8ae"
                tiers={[
                  {
                    key: "basic",
                    label: "Basic",
                    tagline: "Simple KPIs always available without spreadsheets.",
                    features: [
                      "Daily/weekly lead & sales reports",
                      "Top KPIs in a clean dashboard",
                      "Summary reports via email/SMS",
                      "24/7 data tracking",
                    ],
                  },
                  {
                    key: "smart",
                    label: "Smart",
                    tagline: "Integrates multiple platforms to give a complete view.",
                    features: [
                      "Includes all Basic",
                      "CRM, ads, website & booking data",
                      "Custom KPIs + AI trend detection",
                      "Week‑over‑week/month‑over‑month comparisons",
                    ],
                  },
                  {
                    key: "full",
                    label: "Full AI",
                    tagline: "Enterprise analytics with forecasting and exec dashboards.",
                    features: [
                      "Predictive forecasting",
                      "Executive & departmental dashboards",
                      "Multi‑location/language reporting",
                      "ERP/data warehouse integrations",
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div className="mt-10">
            <StarBorder as="a" href="#contact">Get a proposal</StarBorder>
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
              <StarBorder as="button" type="submit">Send email</StarBorder>
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
                <StarBorder as="a" href="#services">See services</StarBorder>
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
            <Image src="/@favicon.png" alt="Noryon" width={20} height={20} className="h-5 w-5" />
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
