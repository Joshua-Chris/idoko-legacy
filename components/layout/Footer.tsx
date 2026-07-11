import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/hipaa-compliance', label: 'HIPAA compliance' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/careers', label: 'Careers' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-service', label: 'Terms of service' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-32 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          <div className="lg:pr-8">
            <Image
              src="/assets/icons/light-logo-t.png"
              alt="Idoko Legacy Medical Courier"
              width={200}
              height={80}
              className="h-14 w-auto object-contain sm:h-16"
            />
            <p className="mt-5 text-lg font-bold text-white">
              Trust today. Legacy tomorrow.
            </p>
            <p className="mt-3 text-sm text-primary-100/80">
              Healthcare logistics &amp; medical courier services
            </p>
            <p className="mt-5 text-sm leading-relaxed text-primary-100/70">
              A professional healthcare logistics and medical courier company
              delivering secure, dependable, and efficient transportation
              throughout Houston, Texas. Every delivery represents
              someone&apos;s health.
            </p>
          </div>

          <div className="lg:border-l lg:border-white/2 lg:pl-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/2 lg:pl-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-primary-100/70">
                  14781 Memorial Drive #569
                  <br />
                  Houston, Texas 77079
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-accent-400"
                  aria-hidden="true"
                />
                <a
                  href="tel:+18329779202"
                  className="text-sm text-primary-100/70 transition-colors hover:text-white"
                >
                  (832) 977-9202
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-accent-400"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@idokolegacy.com"
                  className="text-sm text-primary-100/70 transition-colors hover:text-white"
                >
                  Info@idokolegacy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-4 border-t border-white/10 pt-6 text-xs text-primary-100/60 sm:grid-cols-3">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Idoko Legacy LLC. All rights
            reserved.
          </p>

          <p className="text-center">
            Designed by{' '}
            <a
              href="https://meltechgrp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100/80 transition-colors hover:text-white"
            >
              MEL-Technologies
            </a>
          </p>

          <div className="flex items-center justify-center gap-5 sm:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
