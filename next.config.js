/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  experimental: { 
    appDir: true,
  },
  images: {
    domains: ["polydot.network"],
  },
  output: 'standalone',
}

module.exports = nextConfig
