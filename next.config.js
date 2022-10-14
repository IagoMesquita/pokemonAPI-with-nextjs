/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['cdn.traction.one'],
    domains: ["raw.githubusercontent.com"],
  },
}

module.exports = nextConfig
