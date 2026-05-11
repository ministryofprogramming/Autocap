import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/investors/case',
        destination: '/investors/why',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
