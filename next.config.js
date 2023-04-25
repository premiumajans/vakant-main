/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n,
  images: {
    domains: ["ui-avatars.com"],
  },
}

module.exports = nextConfig
