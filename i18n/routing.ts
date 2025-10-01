export const routing = {
  locales: ['fr', 'en'],
  defaultLocale: 'en',
  // Do not prefix the default locale (EN) in the URL; FR will be under /fr
  localePrefix: 'as-needed'
} as const;
