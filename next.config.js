/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["media.graphassets.com"],
  },
  reactStrictMode: true,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};
