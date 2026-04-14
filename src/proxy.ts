import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n/request';

const intlMiddleware = createMiddleware({
  defaultLocale: 'en',
  locales
});

export default function proxy(request: import('next/server').NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
