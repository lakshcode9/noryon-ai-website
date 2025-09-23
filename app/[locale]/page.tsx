import HeroSpline from "@/components/HeroSpline";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import ServiceCard from "@/components/ui/ServiceCard";
import { StarBorder } from "@/components/ui/star-border";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = use(params);
  setRequestLocale(locale);
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <main className="min-h-dvh bg-background text-foreground relative overflow-x-hidden shiny-blue">
      <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-[#20263699]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <Image src="/@favicon.png" alt="Noryon" width={32} height={32} className="h-8 w-8" />
            <span className="font-mono text-base tracking-widest uppercase text-accent">Noryon</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base text-white/80">
            <a href="#services" className="hover:text-white transition-colors">{t("header.services")}</a>
            <a href="#work" className="hover:text-white transition-colors">{t("header.work")}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t("header.contact")}</a>
            <a href="#book" className="hover:text-white transition-colors">{t("header.book")}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Nav */}
            <MobileNav />
            {/* Desktop-only items */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <StarBorder as="a" href="#contact" className="pointer-events-auto" color="#00888a">
                {t("header.startProject")}
              </StarBorder>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,202,209,0.3),transparent_90%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
        {/* Background Spline positioned at extreme right */}
        <div aria-hidden className="hidden lg:block absolute inset-y-0 right-0 w-[100vw] z-0 spline-mix will-change-transform">
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
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-5">{t("hero.subheading")}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              {t("hero.heading")}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <StarBorder as="a" href="#contact" className="pointer-events-auto w-full sm:w-auto text-center" color="#00888a">
                {t("hero.ctaProposal")}
              </StarBorder>
              <StarBorder as="a" href="#services" className="pointer-events-auto w-full sm:w-auto text-center" color="#00888a">
                {t("hero.ctaCapabilities")}
              </StarBorder>
              <StarBorder as="a" href="#book" className="pointer-events-auto w-full sm:w-auto text-center" color="#00888a">
                {t("hero.ctaBookCall")}
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
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">{t("header.services")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{t("services.heading")}</h2>
            <p className="mt-4 text-white/90">{t("services.subheading")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            <ServiceCard
              title={t("services.cards.chatbots.title")}
              dotColor="#00cad1"
              tiers={[
                { key: "basic", label: t("services.cards.chatbots.tiers.basic.label"), tagline: t("services.cards.chatbots.tiers.basic.tagline"), features: t.raw("services.cards.chatbots.tiers.basic.features") as string[] },
                { key: "smart", label: t("services.cards.chatbots.tiers.smart.label"), tagline: t("services.cards.chatbots.tiers.smart.tagline"), features: t.raw("services.cards.chatbots.tiers.smart.features") as string[] },
                { key: "full", label: t("services.cards.chatbots.tiers.full.label"), tagline: t("services.cards.chatbots.tiers.full.tagline"), features: t.raw("services.cards.chatbots.tiers.full.features") as string[] },
              ]}
            />
            <ServiceCard
              title={t("services.cards.voice.title")}
              dotColor="#00cad1"
              tiers={[
                { key: "basic", label: t("services.cards.voice.tiers.basic.label"), tagline: t("services.cards.voice.tiers.basic.tagline"), features: t.raw("services.cards.voice.tiers.basic.features") as string[] },
                { key: "smart", label: t("services.cards.voice.tiers.smart.label"), tagline: t("services.cards.voice.tiers.smart.tagline"), features: t.raw("services.cards.voice.tiers.smart.features") as string[] },
                { key: "full", label: t("services.cards.voice.tiers.full.label"), tagline: t("services.cards.voice.tiers.full.tagline"), features: t.raw("services.cards.voice.tiers.full.features") as string[] },
              ]}
            />
            <ServiceCard
              title={t("services.cards.automation.title")}
              accent="#0584af"
              dotColor="#00cad1"
              tiers={[
                { key: "basic", label: t("services.cards.automation.tiers.basic.label"), tagline: t("services.cards.automation.tiers.basic.tagline"), features: t.raw("services.cards.automation.tiers.basic.features") as string[] },
                { key: "smart", label: t("services.cards.automation.tiers.smart.label"), tagline: t("services.cards.automation.tiers.smart.tagline"), features: t.raw("services.cards.automation.tiers.smart.features") as string[] },
                { key: "full", label: t("services.cards.automation.tiers.full.label"), tagline: t("services.cards.automation.tiers.full.tagline"), features: t.raw("services.cards.automation.tiers.full.features") as string[] },
              ]}
            />
            <ServiceCard
              title={t("services.cards.reputation.title")}
              accent="#00c8cf"
              dotColor="#00cad1"
              tiers={[
                { key: "basic", label: t("services.cards.reputation.tiers.basic.label"), tagline: t("services.cards.reputation.tiers.basic.tagline"), features: t.raw("services.cards.reputation.tiers.basic.features") as string[] },
                { key: "smart", label: t("services.cards.reputation.tiers.smart.label"), tagline: t("services.cards.reputation.tiers.smart.tagline"), features: t.raw("services.cards.reputation.tiers.smart.features") as string[] },
                { key: "full", label: t("services.cards.reputation.tiers.full.label"), tagline: t("services.cards.reputation.tiers.full.tagline"), features: t.raw("services.cards.reputation.tiers.full.features") as string[] },
              ]}
            />
            <div className="xl:col-span-2 h-full">
              <ServiceCard
                title={t("services.cards.analytics.title")}
                accent="#04a8ae"
                dotColor="#00cad1"
                tiers={[
                  { key: "basic", label: t("services.cards.analytics.tiers.basic.label"), tagline: t("services.cards.analytics.tiers.basic.tagline"), features: t.raw("services.cards.analytics.tiers.basic.features") as string[] },
                  { key: "smart", label: t("services.cards.analytics.tiers.smart.label"), tagline: t("services.cards.analytics.tiers.smart.tagline"), features: t.raw("services.cards.analytics.tiers.smart.features") as string[] },
                  { key: "full", label: t("services.cards.analytics.tiers.full.label"), tagline: t("services.cards.analytics.tiers.full.tagline"), features: t.raw("services.cards.analytics.tiers.full.features") as string[] },
                ]}
              />
            </div>
          </div>
          <div className="mt-10">
            <StarBorder as="a" href="#contact" color="#00888a">{t("services.ctaProposal")}</StarBorder>
          </div>
        </div>
      </section>

      {/* Work / Testimonials */}
      <section id="work" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <TestimonialsSection
            title={t("testimonials.heading")}
            description={t("testimonials.description")}
            testimonials={(t.raw("testimonials.items") as Array<{author:{name:string; handle:string; avatar:string}; text:string}>).map(item => ({
              author: {
                name: item.author.name,
                handle: item.author.handle,
                avatar: item.author.avatar
              },
              text: item.text
            }))}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-8">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">{t("header.contact")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{t("contact.heading")}</h2>
            <p className="mt-4 text-white/90">{t("contact.description")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="rounded-xl bg-secondary ring-1 ring-white/10 p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-white/60">{t("contact.form.email")}</div>
                  <a className="text-white hover:text-accent transition-colors" href="mailto:contact@noryon.ai">contact@noryon.ai</a>
                </div>
                <div>
                  <div className="text-white/60">{t("contact.form.phone")}</div>
                  <a className="text-white hover:text-accent transition-colors" href="tel:+15149841671">(514) 984‑1671</a>
                </div>
                <div>
                  <div className="text-white/60">{t("contact.form.location")}</div>
                  <div className="text-white">Montreal, QC, Canada</div>
                </div>
              </div>
              <div className="mt-6">
                <StarBorder as="a" href="#services" color="#00888a">{t("contact.ctaServices")}</StarBorder>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call (Calendly) */}
      <section id="book" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="mb-8">
            <p className="font-mono text-accent/90 text-xs tracking-[0.35em] uppercase mb-4">{t("header.book")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{t("booking.heading")}</h2>
            <p className="mt-4 text-white/90">{t("booking.description")}</p>
          </div>
          {/* Calendly embed */}
          <CalendlyEmbed 
            url="https://calendly.com/shauncere/noryon-strategy-call"
            className="w-full max-w-4xl mx-auto"
            height="700px"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#202636]">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 select-none">
            <Image src="/@favicon.png" alt="Noryon" width={20} height={20} className="h-5 w-5" />
            <span className="font-mono text-xs tracking-widest uppercase text-accent">Noryon</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">{t("header.services")}</a>
            <a href="#work" className="hover:text-white transition-colors">{t("header.work")}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t("header.contact")}</a>
          </nav>
          <div className="text-xs text-white/60">{t("footer.copyright", { year })}</div>
        </div>
      </footer>
    </main>
  );
}
