/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'img.youtube.com'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/wasm/[name][ext]',
      },
    });

    // This is to handle binary files from canvas and other native modules
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // For canvas specifically
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        canvas: false,
        crypto: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;