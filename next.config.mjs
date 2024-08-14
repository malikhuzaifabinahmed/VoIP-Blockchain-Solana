/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@solana/wallet-adapter-wallets"],
  },
};

export default nextConfig;
