/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "upload.wikimedia.org"],
    formats: ['image/avif', 'image/webp'],
  },
}
