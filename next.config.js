/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'picsum.photos', 'via.placeholder.com'],
    // Tambahkan domain lain jika Anda menggunakan gambar dari sumber eksternal
  },
};

module.exports = nextConfig;
