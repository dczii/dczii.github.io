import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures the app is built for static export
  distDir: "out", // Specifies the output folder for the exported static files
  trailingSlash: true, // Adds trailing slashes to paths for compatibility with static hosting
  images: {
    unoptimized: true, // Disables Next.js's image optimization for static export
  },
};

export default nextConfig;
