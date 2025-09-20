import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Point file tracing to this app folder to avoid multi-lockfile root guesses
  outputFileTracingRoot: path.join(__dirname),
  // Silence Turbopack workspace root warning by pinning the root to this app
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
