/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Solusi untuk error Call Stack: Matikan tracing sementara */
  outputFileTracing: false,

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'picsum.photos', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;