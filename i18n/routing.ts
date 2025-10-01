export const routing = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  // Do not prefix the default locale (FR) in the URL; EN will be under /en
  localePrefix: 'as-needed'
} as const;
