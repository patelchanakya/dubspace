/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "public.blob.vercel-storage.com",
      "f6mocog7o69dcf02.public.blob.vercel-storage.com",
      "res.cloudinary.com",
      "abs.twimg.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "www.google.com",
      "flag.vercel.app",
      "illustrations.popsy.co",
    ],
  },
  reactStrictMode: false,
};
