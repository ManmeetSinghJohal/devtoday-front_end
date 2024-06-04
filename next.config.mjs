/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**'
      }
    ]
  },
};

export default nextConfig;
