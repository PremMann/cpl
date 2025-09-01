'use client';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  const socials = [
    { name: t('facebook'), icon: faFacebook, url: "https://www.facebook.com/" },
    { name: t('twitter'), icon: faTwitter, url: "https://twitter.com/" },
    { name: t('instagram'), icon: faInstagram, url: "https://www.instagram.com/" },
    { name: t('youtube'), icon: faYoutube, url: "https://www.youtube.com/" },
    { name: t('linkedin'), icon: faLinkedin, url: "https://www.linkedin.com/" },
    { name: t('tiktok'), icon: faTiktok, url: "https://www.tiktok.com/" },
  ];

  return (
  <footer className="mt-auto bg-[#f03135] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-semibold">{t('brand_short', { defaultValue: 'APMF' })}</h3>
            <p className="mt-3 text-sm text-white/90">{t('brand_tagline')}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t('products_header')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/90 hover:text-white" href="/products">{t('all_products')}</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/quick-loan">{t('quick_loan')}</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/motorbike-installment-loan">{t('motorbike_installment_loan', { defaultValue: t('motorbike_installment') })}</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/car-installment-loan">{t('car_installment_loan', { defaultValue: t('car_installment') })}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t('company_header')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/90 hover:text-white" href="/">{t('home')}</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products">{t('products_header')}</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/standings/call-center">{t('support')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t('contact_header')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="mt-0.5 text-white/90" />
                <a className="text-white/90 hover:text-white" href="tel:+85500000000">+855 00 000 000</a>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="mt-0.5 text-white/90" />
                <a className="text-white/90 hover:text-white" href="mailto:info@apmf.com">info@apmf.com</a>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 text-white/90" />
                <span className="text-white/90">{t('address_head_office')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/90">{t('copyright', { year, defaultValue: `© ${year} APMF. All rights reserved.` })}</p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white transition"
                title={s.name}
              >
                <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-white/90 hover:text-white">{t('privacy_policy', { defaultValue: t('privacy') })}</Link>
            <Link href="#" className="text-white/90 hover:text-white">{t('terms_of_service', { defaultValue: t('terms') })}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}