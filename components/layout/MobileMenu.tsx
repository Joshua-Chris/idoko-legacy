'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({
  links,
  open,
  onClose,
  pathname,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-hidden bg-primary-950 lg:hidden">
      {/* Header */}
      <div className="shrink-0 border-b border-white/10 px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose}>
            <Image
              src="/assets/icons/light-logo-t.png"
              alt="Idoko Legacy LLC"
              width={190}
              height={70}
              className="h-11 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-white"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 items-center justify-center px-6">
        <div className="flex w-full max-w-sm flex-col gap-4">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`rounded-2xl px-6 py-4 text-center text-lg font-medium transition-all duration-300 ${
                  active
                    ? 'bg-white text-primary-950 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/quote"
            onClick={onClose}
            className="mt-3 rounded-2xl bg-accent-500 px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600"
          >
            Request a Quote
          </Link>
        </div>
      </nav>

      {/* Contact */}
      <div className="shrink-0 border-t border-white/10 px-4 py-5">
        <div className="flex items-center justify-center gap-6 whitespace-nowrap text-[11px] text-white/70">
          <a
            href="tel:+18329779202"
            className="flex items-center gap-1.5 transition-colors hover:text-accent-400"
          >
            <Phone className="h-3 w-3" />
            <span>(832) 977-9202</span>
          </a>

          <span className="h-3 w-px bg-white/20" />

          <a
            href="mailto:Info@idokolegacy.com"
            className="flex items-center gap-1.5 transition-colors hover:text-accent-400"
          >
            <Mail className="h-3 w-3" />
            <span>Info@idokolegacy.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
