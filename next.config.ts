import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // IMPORTANT FIX
  assetPrefix: isProd ? "" : "",
  basePath: isProd ? "" : ""
};

export default nextConfig;