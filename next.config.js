/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'chris-t-next-food-app-bucket.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

module.exports = nextConfig
