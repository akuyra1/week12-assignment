/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "", // optional
        pathname: "/**", // match all paths
      },
      // Add other external hosts here
    ],
  },
};

export default nextConfig;
