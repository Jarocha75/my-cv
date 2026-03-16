import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sk', 'en'],
  defaultLocale: 'sk',
});

export const config = {
  // Matcher ignoruje statické súbory a api
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
