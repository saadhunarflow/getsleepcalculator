import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Static HTML export — Hostinger Business Hosting compatible
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export (no Next.js image optimization server)
  },
};

export default nextConfig;

