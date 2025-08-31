module.exports = {
  i18n: {
    defaultLocale: 'en',
  // NOTE: folder name under public/locales is "kh" so use that code here.
  // If you prefer the official ISO code "km", rename the folder instead.
  locales: ['en','kh'],
  // Next.js App Router does not support automatic locale detection in the same way;
  // setting this to false silences the Next.js warning.
  localeDetection: false,
  },
  ns: ['common'],
  defaultNS: 'common',
};