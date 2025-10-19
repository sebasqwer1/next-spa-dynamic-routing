import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",          // Export estática
  trailingSlash: true,       // Todas las rutas terminan con /
  images: { unoptimized: true } // Para que next/image funcione sin servidor
};

export default nextConfig;