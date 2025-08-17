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
        { label: 'Our History', href: '/' },
        { label: 'Vision & Mission', href: '/about/vision-and-mission' },
        { label: 'Board of Directors', href: '/about/board-of-directors' },
        { label: 'Management Team', href: '/about/management-team' },
        { label: 'Organizational Chart', href: '/clubs/organizational-chart' },
        { label: 'Annual Report', href: '/clubs/annual-report' }
      ]
    },
    {
      label: 'PRODUCTS',
      href: '/products',
      children: [
        { label: 'Quick Loan', href: '/products/quick-loan' },
        { label: 'Electronics Installment Loan', href: '/products/electronics-installment-loan' },
        { label: 'Motorbike Installment Loan', href: '/products/motorbike-installment-loan' },
        { label: 'Car Installment Loan', href: '/products/car-installment-loan' },
        { label: 'Land Installment Loan', href: '/products/land-installment-loan' },
        { label: 'Secured Installment Loan', href: '/products/secured-installment-loan' }
      ]
    },
    { label: 'PROMOTION', href: '/promotions' },
    {
      label: 'CONTACT US',
      href: '/contact-us',
      children: [
        { label: 'Branch Locator', href: '/contact-us/branch-locator' },
        { label: 'Business Hour', href: '/contact-us/business-hour' },
        { label: 'Call Center', href: '/contact-us/call-center' },
        { label: 'Customer Complaint', href: '/contact-us/customer-complaint' }
      ]
    },
    { label: 'Admin', href: '/admin' }
  ];

  const baseLinkClass = (href: string) =>
    `${pathname === href ? 'text-zinc-400 font-bold' : 'text-[#f03134]'} text-[14px] md:text-[18px]`;

  return (
    <header className="z-50 w-full bg-black md:bg-gray-200">
      {/* Top bar (now visible on all screens, scrollable on mobile) */}
      <div className="flex flex-row-reverse justify-between w-full px-4 py-1 text-xs md:text-sm">
        <div className="flex flex-row items-center gap-x-2 md:gap-x-1 overflow-x-auto">
          <Link href="/calculation" className="whitespace-nowrap text-white px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-[#f03134] bg-[#f03134]">
            Loan Calculation
          </Link>
          <Link href="/" className="whitespace-nowrap text-white px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-[#f03134] bg-[#f03134]">
            Loan Car
          </Link>
          <Link href="/" className="whitespace-nowrap text-white px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-[#f03134] bg-[#f03134]">
            Apply Loan
          </Link>
          <Link href="/" className="whitespace-nowrap text-white px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-[#f03134] bg-[#f03134]">
            Career
          </Link>
          <Link href="/" className="whitespace-nowrap text-white px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-[#f03134] bg-[#f03134]">
            KH
          </Link>
        </div>
      </div>

      {/* Navigation (sticky on desktop) */}
      <nav className="main-nav bg-white md:w-full shadow-sm md:sticky md:top-0 md:z-50">
        {/* Mobile bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={mainLogo}
              alt="APMF logo"
              width={140}
              height={84}
              priority
              placeholder="blur"
              sizes="100px"
            />
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#f03134] hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-[#f03134]"
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>

          <style jsx global>{`
            @media (max-width: 768px) {
              /* Hide scrollbars on small screens (while keeping scroll functional) */
              ::-webkit-scrollbar { display: none; }
              html { -ms-overflow-style: none; scrollbar-width: none; }
            }
          `}</style>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-14 py-2">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                src={mainLogo}
                alt="APMF logo"
                width={250}
                height={150}
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 100px, 50px"
              />
            </Link>
          </div>

          <ul className="flex items-center gap-5 text-[12px] md:text-[14px]">
            {navLink.map((link, index) => (
              <li key={index}>
                {link.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link href={link.href} className={baseLinkClass(link.href)} onClick={(e) => e.preventDefault()}>
                        {link.label}
                        <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 ml-2" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {link.children.map((child, cIdx) => (
                        <DropdownMenuItem key={cIdx} asChild>
                          <Link href={child.href} className="text-[#f03134] hover:text-white bg-white hover:bg-[#f03134]">
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href} className={baseLinkClass(link.href)} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-100 px-2 pb-4">
            <ul className="flex flex-col">
              {navLink.map((link, idx) => (
                <li key={idx} className="border-b last:border-b-0 border-gray-100">
                  {link.children ? (
                    <details className="group">
                      <summary className="flex w-full items-center justify-between px-3 py-3 cursor-pointer list-none">
                        <span className={`text-sm font-medium ${pathname === link.href ? 'text-zinc-500' : 'text-[#f03134]'}`}>
                          {link.label}
                        </span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="h-4 w-4 text-[#f03134] transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="pb-3 pl-5">
                        <ul className="flex flex-col gap-1">
                          {link.children.map((child, cIdx) => (
                            <li key={cIdx}>
                              <Link
                                href={child.href}
                                className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#f03134]"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-3 text-sm font-medium ${pathname === link.href ? 'text-zinc-500' : 'text-[#f03134]'}`}
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
      </nav>
    </header>
  );
}