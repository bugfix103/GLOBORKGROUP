import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n/request';

export default createMiddleware({
  defaultLocale: 'en',
  locales
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ar|hi|ru|zh|ja|ko|es|de|fr)/:path*']
};
