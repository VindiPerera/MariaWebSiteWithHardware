import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["169.254.198.95"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
