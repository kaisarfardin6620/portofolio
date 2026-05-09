import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Commented out to prevent build conflicts with next/dynamic ssr:false. Uncomment if deploying strictly to static hosts like GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
