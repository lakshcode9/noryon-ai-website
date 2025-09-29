import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Quicksand } from "next/font/google";
import OpeningSplash from "@/components/OpeningSplash";
import "@/app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const description = t("description");

  return {
    title: `Noryon - ${description}`,
    description,
    icons: {
      icon: [
        { url: "/@favicon.png", type: "image/png", sizes: "16x16" },
        { url: "/@favicon.png", type: "image/png", sizes: "32x32" },
        { url: "/@favicon.png", type: "image/png", sizes: "48x48" },
        { url: "/@favicon.png", type: "image/png", sizes: "180x180" },
        { url: "/@favicon.png", type: "image/png", sizes: "256x256" },
        { url: "/@favicon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: "/@favicon.png",
      shortcut: "/@favicon.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Ensure server components read the correct locale
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  const Quick = Quicksand({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
  });

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        {/* Performance hints for Spline viewer */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link
          rel="preload"
          as="script"
          href="https://unpkg.com/@splinetool/viewer@1.10.61/build/spline-viewer.js"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${Quick.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <OpeningSplash />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
