import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../../public/locales/en/common.json';
import khCommon from '../../public/locales/kh/common.json';
import enAnnual from '../../public/locales/en/annualReports.json';
import khAnnual from '../../public/locales/kh/annualReports.json';
import enOrgChart from '../../public/locales/en/orgChart.json';
import khOrgChart from '../../public/locales/kh/orgChart.json';
import enProducts from '../../public/locales/en/products.json';
import khProducts from '../../public/locales/kh/products.json';
import enPromotions from '../../public/locales/en/promotions.json';
import khPromotions from '../../public/locales/kh/promotions.json';
import enContacts from '../../public/locales/en/contacts.json';
import khContacts from '../../public/locales/kh/contacts.json';

const resources = {
  en: { common: enCommon, annualReports: enAnnual, orgChart: enOrgChart, products: enProducts, promotions: enPromotions, contacts: enContacts },
  kh: { common: khCommon, annualReports: khAnnual, orgChart: khOrgChart, products: khProducts, promotions: khPromotions, contacts: khContacts },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: ['en', 'kh'],
  ns: ['common', 'annualReports', 'orgChart', 'products', 'promotions', 'contacts'],
  defaultNS: 'common',
      fallbackLng: 'en',
      lng: 'en',
      interpolation: { escapeValue: false },
    })
    .catch((e) => console.error('i18n init error', e));
}

export default i18n;
