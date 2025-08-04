import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "upload.wikimedia.org"
    ],
  },
};

export default nextConfig;
