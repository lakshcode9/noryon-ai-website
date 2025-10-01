import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Redirect any French-prefixed path to the root equivalent
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true }
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default withNextIntl(nextConfig);
