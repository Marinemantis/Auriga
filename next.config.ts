import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed for the "ghizer valley" keyword (SEO-KEYWORD-PLAN.md).
      { source: "/destinations/phunder", destination: "/destinations/ghizer", permanent: true },
      { source: "/destinations/phunder/:path*", destination: "/destinations/ghizer/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aurigaventure.com",
      },
    ],
  },
};

export default nextConfig;
