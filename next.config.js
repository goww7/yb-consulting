/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/prevarie',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/inavrie',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/duerp',
        destination: '/services#duerp',
        permanent: true,
      },
      {
        source: '/duerp/tarifs',
        destination: '/services#duerp',
        permanent: true,
      },
      {
        source: '/devis',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/rapport-audit',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
