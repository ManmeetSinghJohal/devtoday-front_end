/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      {
        hostname: 'utfs.io'
      }
    ]
  },
};

export default nextConfig;
