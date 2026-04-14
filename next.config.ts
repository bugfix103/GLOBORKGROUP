import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add direct support for Turbopack if needed, though default should work
};

export default withNextIntl(nextConfig);
