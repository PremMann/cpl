'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mainLogo from './../../public/main_logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLink = [
    {
      label: 'ABOUT US',
      href: '/about',
      children: [
        { label: 'Our History', href: '/aboutus' },
        { label: 'Vision & Mission', href: '/aboutus/vision-and-mission' },
        { label: 'Board of Directors', href: '/aboutus/board-of-directors' },
        { label: 'Management Team', href: '/aboutus/management-team' },
        { label: 'Organizational Chart', href: '/aboutus/organizational-chart' },
        { label: 'Annual Report', href: '/aboutus/annual-report' }
      ]
    },
    {
      label: 'PRODUCTS',
      href: '/products',
      children: [
        { label: 'Quick Loan', href: '/products/quick-loan' },
        { label: 'Electronics Installment Loan', href: '/products/electronics-installment-loan' },
        { label: 'Motorbike Installment Loan', href: '/products/motorbike-installment-loan' },
        // { label: 'Car Installment Loan', href: '/products/car-installment-loan' },
        // { label: 'Land Installment Loan', href: '/products/land-installment-loan' },
        // { label: 'Secured Installment Loan', href: '/products/secured-installment-loan' }
      ]
    },
    { label: 'PROMOTION', href: '/promotions' },
    { label: 'CONTACT US', href: '/contacts' },
    { label: 'Admin', href: '/admin' }
  ];

  const baseLinkClass = (href: string) =>
    `${pathname === href ? 'text-red-700 font-bold' : 'text-red-500 font-bold hover:text-red-700'} transition-colors duration-200 text-[15px]`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* Top utility bar */}
      <div className="flex justify-end bg-red-600 text-white text-xs md:text-sm px-6 py-2 gap-3">
        <Link href="/calculation" className="hover:underline">Loan Calculator test</Link>
        <Link href="/" className="hover:underline">Loan Car</Link>
        <Link href="/" className="hover:underline">Apply Loan</Link>
        <Link href="/" className="hover:underline">Career</Link>
        <Link href="/" className="hover:underline">KH</Link>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={mainLogo}
            alt="APMF logo"
            width={180}
            height={90}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLink.map((link, index) => (
            <li key={index} className="relative">
              {link.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`${baseLinkClass(link.href)} flex items-center gap-1`}>
                      {link.label}
                      <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-white shadow-md rounded-md">
                    {link.children.map((child, cIdx) => (
                      <DropdownMenuItem key={cIdx} asChild>
                        <Link
                          href={child.href}
                          className="px-4 py-2 text-sm text-red-600 hover:bg-blue-50 hover:text-red-900 rounded-md block"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={link.href} className={baseLinkClass(link.href)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-red-600 hover:bg-red-50"
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile nav menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <ul className="flex flex-col gap-3">
            {navLink.map((link, idx) => (
              <li key={idx}>
                {link.children ? (
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-red-600 hover:text-red-600">
                      {link.label}
                      <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-red-600 group-open:rotate-180 transition-transform" />
                    </summary>
                    <ul className="mt-2 pl-4 flex flex-col gap-2">
                      {link.children.map((child, cIdx) => (
                        <li key={cIdx}>
                          <Link
                            href={child.href}
                            className="block text-sm text-red-600 hover:text-red-900"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className={`block text-sm ${pathname === link.href ? 'text-red-700 font-semibold' : 'text-red-600 hover:text-red-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
