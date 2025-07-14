// next.config.js or next.config.ts (if using TypeScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'bloximages.newyork1.vip.townnews.com',
      'tpc.googlesyndication.com' // required for the Image component using this domain
    ]
  }
};

export default nextConfig;
