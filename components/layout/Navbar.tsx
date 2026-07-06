'use client';

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
      {/* Navbar Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white py-3.5 shadow-sm border-b border-gray-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="flex flex-col leading-none"
            onClick={() => setOpen(false)}
          >
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-primary-950' : 'text-white'
              }`}
            >
              Idoko Legacy
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-accent-400">
              Trust today &middot; Legacy tomorrow
            </span>
          </Link>

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
                        ? 'text-primary-950 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:bg-primary-600'
                        : 'text-gray-600 hover:text-gray-900'
                      : active
                        ? 'text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:bg-white'
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
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all border-accent-400 text-accent-400 hover:bg-accent-500 hover:text-white'
              }`}
            >
              Request a quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`lg:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
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
