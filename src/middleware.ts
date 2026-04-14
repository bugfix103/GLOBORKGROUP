import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n/request';

export default createMiddleware({
  defaultLocale: 'en',
  locales
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
