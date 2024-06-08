/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // images: {
  //   remotePatterns: [{ hostname: "", protocol: "https" }],
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
