/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '54.162.89.235',
        port: '4750',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iamgfserver.devoptixtech.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
