import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../../public/locales/en/common.json';
import khCommon from '../../public/locales/kh/common.json';
import enAnnual from '../../public/locales/en/annualReports.json';
import khAnnual from '../../public/locales/kh/annualReports.json';

const resources = {
  en: { common: enCommon, annualReports: enAnnual },
  kh: { common: khCommon, annualReports: khAnnual },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: ['en', 'kh'],
  ns: ['common', 'annualReports'],
  defaultNS: 'common',
      fallbackLng: 'en',
      lng: 'en',
      interpolation: { escapeValue: false },
    })
    .catch((e) => console.error('i18n init error', e));
}

export default i18n;
