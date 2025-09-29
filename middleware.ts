import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware({
  ...routing,
  localePrefix: 'as-needed',
  localeDetection: false
});
 
export const config = {
  // Match all pathnames except for api/_next/_vercel and files with an extension
  matcher: '/((?!api|_next|_vercel|.*\..*).*)'
};
