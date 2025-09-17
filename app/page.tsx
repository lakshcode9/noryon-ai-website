import HeroSpline from "../components/HeroSpline";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative overflow-hidden shiny-blue">
      <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-[#20263699] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <span className="inline-block h-3 w-3 rounded-full bg-[#00cad1] shadow-[0_0_20px_6px_rgba(0,202,209,0.7)]" />
            <span className="font-mono text-sm tracking-widest uppercase text-accent">Noryon AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
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
        <div aria-hidden className="absolute inset-y-0 right-0 w-[55%] max-w-[48rem] z-0 spline-mix">
          <HeroSpline
            scene="https://prod.spline.design/KAINVqb7zStDrlph/scene.splinecode"
            style={{ filter: "var(--spline-filter, none)" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pointer-events-none">
          <div className="text-center lg:text-left">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-5">AI Automation Agency</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight uppercase">
              Build once. Automate everything. Grow while you sleep.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90">
              We design, ship, and maintain end‑to‑end AI systems that automate ops, support, and growth. From agents to integrations—production‑ready, secure, and measurable.
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
            <div className="group rounded-xl bg-secondary ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00cad1] shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]" />
                <h3 className="text-xl font-medium">Chatbot Services</h3>
              </div>
              <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
                <li>Answers FAQs instantly and captures leads 24/7</li>
                <li>Guides visitors to bookings or next steps</li>
                <li>Omnichannel: Web, Instagram, Messenger, WhatsApp</li>
                <li>Advanced AI with memory, analytics, and compliance</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">Basic</span>
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">Smart Booking</span>
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">Omnichannel</span>
              </div>
            </div>

            {/* Voice AI Services */}
            <div className="group rounded-xl bg-secondary ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00cad1] shadow-[0_0_14px_6px_rgba(0,202,209,0.35)]" />
                <h3 className="text-xl font-medium">Voice AI Services</h3>
              </div>
              <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
                <li>Answers calls, captures leads, routes or forwards intelligently</li>
                <li>Books appointments and takes deposits over the phone</li>
                <li>Multi‑language, call analytics, voicemail fallback</li>
                <li>Enterprise‑ready security & compliance</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded bg-[#00cad11a] text-white ring-1 ring-white/15 px-2 py-1">Basic</span>
                <span className="rounded bg-[#00cad11a] text-white ring-1 ring-white/15 px-2 py-1">Smart Booking</span>
                <span className="rounded bg-[#00cad11a] text-white ring-1 ring-white/15 px-2 py-1">Full Assistant</span>
              </div>
            </div>

            {/* Automation Services */}
            <div className="group rounded-xl bg-secondary ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0584af] shadow-[0_0_14px_6px_rgba(5,132,175,0.35)]" />
                <h3 className="text-xl font-medium">Automation Services</h3>
              </div>
              <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
                <li>Automates forms, reminders, notifications, and data capture</li>
                <li>Integrates CRM, payments, and multi‑step workflows</li>
                <li>AI document processing and data enrichment</li>
                <li>Dashboards, reports, and enterprise monitoring</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded bg-[#0584af1a] text-white ring-1 ring-white/15 px-2 py-1">Basic</span>
                <span className="rounded bg-[#0584af1a] text-white ring-1 ring-white/15 px-2 py-1">Smart</span>
                <span className="rounded bg-[#0584af1a] text-white ring-1 ring-white/15 px-2 py-1">Full Back‑End AI</span>
              </div>
            </div>

            {/* Review & Reputation */}
            <div className="group rounded-xl bg-secondary ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00c8cf] shadow-[0_0_14px_6px_rgba(0,200,207,0.35)]" />
                <h3 className="text-xl font-medium">Review & Reputation</h3>
              </div>
              <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
                <li>Automated review requests via SMS and email</li>
                <li>Filters negative feedback and sends reminders</li>
                <li>Multi‑platform: Google, Facebook, Yelp & more</li>
                <li>Analytics to track volume, ratings, and trends</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded bg-[#00c8cf1a] text-white ring-1 ring-white/15 px-2 py-1">Basic</span>
                <span className="rounded bg-[#00c8cf1a] text-white ring-1 ring-white/15 px-2 py-1">Smart</span>
                <span className="rounded bg-[#00c8cf1a] text-white ring-1 ring-white/15 px-2 py-1">AI Suite</span>
              </div>
            </div>

            {/* Analytics */}
            <div className="group rounded-xl bg-secondary ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors xl:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#04a8ae] shadow-[0_0_14px_6px_rgba(4,168,174,0.35)]" />
                <h3 className="text-xl font-medium">Analytics & Reporting</h3>
              </div>
              <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
                <li>Automated KPI dashboards and scheduled reports</li>
                <li>Integrates data across CRM, ads, website, and bookings</li>
                <li>AI insights, forecasting, and executive dashboards</li>
                <li>Enterprise‑grade security, compliance, and uptime</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">Basic</span>
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">Smart</span>
                <span className="rounded bg-[#04a8ae1a] text-white ring-1 ring-white/15 px-2 py-1">AI Suite</span>
              </div>
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
