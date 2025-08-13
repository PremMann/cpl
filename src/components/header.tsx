'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mainLogo from './../../public/premier_league.svg';
import league_1 from './../../public/league_1.svg';
import league_2 from './../../public/league_2.svg';
import league_cup from './../../public/league_cup.svg';




  import {
    DropdownMenu,
    DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
  } from './ui/dropdown-menu'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLink = [
        { label: 'Home', href: '/' },
        { label: 'About US', href: '/clubs' },
        { label: 'PRODUCTS', href: '/fixtures' },
        { label: 'PROMOTION', href: '/results' },
        { label: 'CONTACT US', href: '/standings' },
        { label: 'Stats', href: '/stats' },
        { label: 'Videos', href: '/videos' },
        { label: 'Download', href: '/downloads' },
        { label: 'Contact US', href: '/contacts' },
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
       <header ref={navRef} className="flex md:flex-col justify-between items-center w-full bg-black md:bg-[#f03134]">
      {/* Top Section */}
      <div className="flex flex-row justify-between w-full py-4 px-4 md:px-7">
        <div>
          <Link href="/">
            <Image src={mainLogo} alt="logo" width={50} height={50} className="md:w-[100px] md:h-[100px] bg-white" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-2 md:gap-x-5">
          <Link href="/">
            <Image src={league_1} alt="logo" width={20} height={20} className="md:w-[35px] md:h-[35px]" />
          </Link>
          <Link href="/">
            <Image src={league_2} alt="logo" width={20} height={20} className="md:w-[35px] md:h-[35px]" />
          </Link>
          <Link href="/">
            <Image src={league_cup} alt="logo" width={20} height={20} className="md:w-[35px] md:h-[35px]" />
          </Link>
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav ref={navRef} className="bg-[#f03134] w-fit md:w-full flex flex-col md:flex-row justify-center py-2 md:py-4 px-4 md:px-7 shadow-md">
        <div className="flex justify-between items-center w-full md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <ul className={`flex-col md:flex-row items-center md:flex gap-2 md:gap-5 text-[12px] md:text-[14px] hidden md:flex`}>
          {navLink.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? 'text-zinc-400 font-bold' : 'text-white'
                } text-[14px] md:text-[18px]`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}

                <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              </Link>
            </li>
          ))}
        </ul>
      </nav>

        </header>

        <header className={`flex md:flex-col justify-between items-center w-full md:hidden w-full`}>

      {/* Sticky Navigation */}
      <nav className={`bg-[#313b48] mr-4 w-full flex flex-col md:flex-row justify-center py-2 md:py-4 shadow-md  ${isMenuOpen ? 'flex md:sticky-nav-sab' : 'hidden'}`}>
        <ul className={`flex-col md:flex-row items-center md:flex gap-2 md:gap-5 text-[12px] md:text-[14px md:flex `}>
          {navLink.map((link, index) => (
            <li key={index} className='border-b border-b-[#13130D last:border-none last:mb-[-2px] '>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  pathname === link.href ? 'text-zinc-400 font-bold' : 'text-white'
                } text-base leading-[48px] md:text-[18px] px-4 hover:text-[#773e75]`}
              >
                {link.label}

                
                            </Link>
            </li>
          ))}
        </ul>
      </nav>

        </header>

    </div> 
  );
}