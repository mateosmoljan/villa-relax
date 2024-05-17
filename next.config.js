const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://villarelaxpula.com",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
