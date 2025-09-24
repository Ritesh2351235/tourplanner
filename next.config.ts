import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    // Fix for workUnitAsyncStorage errors in hosting environments
    workerThreads: false,
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['async_hooks'],
  },
  // Additional configuration to prevent async storage issues
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'async_hooks'];
    }
    return config;
  },
};

export default nextConfig;
