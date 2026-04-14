import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export' as const,
};

export default withNextIntl(nextConfig);
