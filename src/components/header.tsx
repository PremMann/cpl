'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mainLogo from './../../public/main_logo.png';

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from './ui/dropdown-menu'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLink = [
   { label: 'ABOUT US', href: '/clubs', children: [
    { label: 'Our History', href: '/clubs/our-history' },
    { label: 'Vision & Mission', href: '/clubs/vision-and-mission' },
    { label: 'Board of Directors', href: '/clubs/board-of-directors' },
    { label: 'Management Team', href: '/clubs/management-team' },
    { label: 'Organizational Chart', href: '/clubs/organizational-chart' },
    { label: 'Annual Report', href: '/clubs/annual-report' }
   ]},
   { label: 'PRODUCTS', href: '/products', children: [
    { label: 'Quick Loan', href: '/products/quick-loan' },
    { label: 'Electronics Installment Loan', href: '/products/electronics-installment-loan' },
    { label: 'Motorbike Installment Loan', href: '/products/motorbike-installment-loan' },
    { label: 'Car Installment Loan', href: '/products/car-installment-loan' },
    { label: 'Land Installment Loan', href: '/products/land-installment-loan' },
    { label: 'Secured Installment Loan', href: '/products/secured-installment-loan' },
   ]},
   { label: 'PROMOTION', href: '/results' },
   { label: 'CONTACT US', href: '/standings', children: [
    { label: 'Branch Locator', href: '/standings/branch-locator' },
    { label: 'Business Hour', href: '/standings/business-hour' },
    { label: 'Call Center', href: '/standings/call-center' },
    { label: 'Customer Complaint', href: '/standings/customer-complaint' },
   ]},
   { label: 'Admin', href: '/admin' },
  ];

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 135) {
          navRef.current.classList.add('sticky-nav');
        } else {
          navRef.current.classList.remove('sticky-nav');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
       <header ref={navRef} className="flex md:flex-col justify-between items-center w-full bg-black md:bg-gray-200">
      {/* Top Section */}
      <div className="flex flex-row-reverse justify-between w-full px-4 text-sm"> 
        <div className="flex flex-row items-center md:gap-x-1">
          <Link href="/" 
            className="text-white px-3 py-1 transition-colors duration-200 hover:bg-white hover:text-[#f03134] py-1 bg-[#f03134]">
            Loan Car
          </Link>
            <Link
            href="/"
            className="text-white px-3 py-1 transition-colors duration-200 hover:bg-white hover:text-[#f03134] py-1 bg-[#f03134]"
            >
            Apply Loan
            </Link>
          <Link href="/" 
            className="text-white px-3 py-1 transition-colors duration-200 hover:bg-white hover:text-[#f03134] py-1 bg-[#f03134]">
            Career
          </Link>
          <Link href="/"
            className="text-white px-3 py-1 transition-colors duration-200 hover:bg-white hover:text-[#f03134] py-1 bg-[#f03134]">
            KH
          </Link>
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav ref={navRef} className="main-nav bg-white w-fit md:w-full flex flex-col py-2 md:flex-row justify-between px-14 shadow-sm">
        <div className="flex justify-between items-center w-full md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        <div className='flex items-center gap-5 hidden md:block bg-gray md:bg-white'>
          <Link href="/">
            <Image
              src={mainLogo}
              alt="APMF logo"
              width={250}
              height={150}
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 100px, 50px"
              className='bg-red'
            />
          </Link>
        </div>

        <ul className="flex-col md:flex-row items-center md:flex gap-2 md:gap-5 text-[12px] md:text-[14px] hidden md:flex">
          {navLink.map((link, index) => {
            const baseLinkClass = `${pathname === link.href ? 'text-zinc-400 font-bold' : 'text-[#f03134]'} text-[14px] md:text-[18px]`;
            return (
              <li key={index}>
                {link.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link href={link.href} className={baseLinkClass} onClick={(e) => e.preventDefault()}>
                        {link.label}
                          <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 ml-2" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {link.children.map((child, cIdx) => (
                        <DropdownMenuItem key={cIdx} asChild>
                          <Link href={child.href} className='text-[#f03134] hover:text-white bg-white hover:bg-[#f03134]'>{child.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href} className={baseLinkClass} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        </nav>
      </header>

        {/* <header className={`flex md:flex-col justify-between items-center w-full md:hidden w-full`}> */}

      {/* Sticky Navigation */}
      <header className="flex md:flex-col justify-between items-center w-full md:hidden">
        <nav className={`bg-[#313b48] mr-4 w-full flex flex-col justify-center py-2 shadow-md ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex-col items-start gap-1 text-[14px]">
            {navLink.map((link, index) => (
              <li key={index} className="w-full border-b border-b-[#13130D] last:border-none">
                {link.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white text-base leading-[48px] px-4 w-full text-left">
                        {link.label}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 cursor-pointer" align="start">
                      {link.children.map((child, cIdx) => (
                        <DropdownMenuItem key={cIdx} asChild >
                          <Link href={child.href} onClick={() => setIsMenuOpen(false)} className='bg-red-100'>
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${pathname === link.href ? 'text-zinc-400 font-bold' : 'text-white'} text-base leading-[48px] px-4 hover:text-[#773e75]`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}