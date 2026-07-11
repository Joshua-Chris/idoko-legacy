'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/hipaa-compliance', label: 'HIPAA compliance' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 py-2 shadow-md shadow-black/[0.06] backdrop-blur-sm'
            : 'bg-transparent py-4'
        }`}
      >
        {/*
          Logo lives in an absolutely-positioned wrapper inside a fixed-width
          spacer. That takes it out of the flex row entirely, so the row's
          own height (driven by py-2 / py-4) can shrink on scroll while the
          logo itself stays a fixed, comfortable size and is simply centered
          on top of the bar. No overflow-hidden anywhere, so nothing clips.
        */}
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10">
          <div className="relative h-9 w-[140px] shrink-0 sm:h-12 sm:w-[170px]">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <Image
                src={
                  scrolled
                    ? '/assets/icons/legacy-logo.png'
                    : '/assets/icons/light-logo-t.png'
                }
                alt="Idoko Legacy Medical Courier"
                width={200}
                height={80}
                priority
                className="h-14 w-auto object-contain transition-all duration-300 sm:h-16"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? active
                        ? 'text-primary-950 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-primary-600'
                        : 'text-gray-600 hover:text-gray-900'
                      : active
                        ? 'text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-white'
                        : 'text-primary-100/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/quote"
              className="rounded-full border border-accent-400 px-5 py-2.5 text-sm font-semibold text-accent-400 transition-all hover:bg-accent-500 hover:text-white"
            >
              Request a quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`transition-colors lg:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <MobileMenu
        links={navLinks}
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
