// eslint-disable-next-line import/no-anonymous-default-export
export default {
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    })

    return config
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      {
        hostname: "plus.unsplash.com",
      },
    ],
  },
}
