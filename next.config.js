/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          // https://nextjs.org/docs/advanced-features/security-headers#x-frame-options
          // prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
  eslint: {
    // disable eslint during build phase
    ignoreDuringBuilds: true,
  },
  typescript: {
    // disable type-checking during build phase
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
