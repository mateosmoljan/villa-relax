const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "http://www.villarelaxpula.com",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
