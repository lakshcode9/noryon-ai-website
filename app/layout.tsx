import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import OpeningSplash from "../components/OpeningSplash";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noryon - AI-Powered Business Solutions",
  description: "Automate your business with AI chatbots, voice agents, and automation services. 24/7 customer support, lead generation, and growth automation.",
  keywords: "AI automation, chatbots, voice agents, business automation, lead generation, customer support, AI solutions",
  authors: [{ name: "Noryon" }],
  creator: "Noryon",
  publisher: "Noryon",
  robots: "index, follow",
  icons: {
    icon: "/@favicon.png",
    shortcut: "/@favicon.png",
    apple: "/@favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noryon.ai",
    title: "Noryon - AI-Powered Business Solutions",
    description: "Automate your business with AI chatbots, voice agents, and automation services. 24/7 customer support, lead generation, and growth automation.",
    siteName: "Noryon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noryon - AI-Powered Business Solutions",
    description: "Automate your business with AI chatbots, voice agents, and automation services. 24/7 customer support, lead generation, and growth automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <OpeningSplash />
        {/* Prevent FOUC: set initial theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              try {
                var saved = localStorage.getItem('theme');
                var d = document.documentElement;
                if (saved === 'dark') {
                  d.classList.add('dark');
                  d.removeAttribute('data-theme');
                } else {
                  d.setAttribute('data-theme','light');
                  d.classList.remove('dark');
                }
              } catch (e) {
                document.documentElement.setAttribute('data-theme','light');
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
