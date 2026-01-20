const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  // i18n: {
  //   locales: ["en", "pt"],
  //   defaultLocale: "pt",
  //   localeDetection: false
  // }
};

module.exports = withNextIntl(nextConfig);
