import Link from "next/link";
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
  const year = new Date().getFullYear();

  const socials = [
    { name: "Facebook", icon: faFacebook, url: "https://www.facebook.com/" },
    { name: "Twitter", icon: faTwitter, url: "https://twitter.com/" },
    { name: "Instagram", icon: faInstagram, url: "https://www.instagram.com/" },
    { name: "YouTube", icon: faYoutube, url: "https://www.youtube.com/" },
    { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/" },
    { name: "TikTok", icon: faTiktok, url: "https://www.tiktok.com/" },
  ];

  return (
    <footer className="mt-auto bg-[#f03135] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-semibold">Active People’s Microfinance</h3>
            <p className="mt-3 text-sm text-white/90">
              Responsible microfinance for individuals and SMEs with transparent pricing and flexible terms.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/90 hover:text-white" href="/products">All Products</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/quick-loan">Quick Loan</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/motorbike-installment-loan">Motorbike Installment</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products/car-installment-loan">Car Installment</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/90 hover:text-white" href="/">Home</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/products">Products</Link></li>
              <li><Link className="text-white/90 hover:text-white" href="/standings/call-center">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
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
                <span className="text-white/90">Head Office, Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/90">
            © {year} Active People’s Microfinance Institution Plc. All rights reserved.
          </p>

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
            <Link href="#" className="text-white/90 hover:text-white">Privacy</Link>
            <Link href="#" className="text-white/90 hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}