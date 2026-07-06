'use client';

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
    <div className="fixed inset-0 z-[60] bg-primary-950 lg:hidden flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-white">
            Idoko Legacy
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-accent-400">
            Trust today &middot; Legacy tomorrow
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-white p-2"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 flex flex-col justify-center px-6 gap-2.5 py-6">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-2xl px-6 py-4 text-lg font-medium text-center transition-colors ${
                active
                  ? 'bg-white/10 text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/quote"
          onClick={onClose}
          className="mt-4 rounded-2xl border border-accent-400 px-6 py-4 text-center text-lg font-semibold text-accent-400 hover:bg-accent-500 hover:text-white transition-all"
        >
          Request a quote
        </Link>
      </nav>

      {/* Compact Contact */}
      <div className="px-6 pb-8 text-white text-sm border-t border-white/10 pt-5">
        <div className="flex flex-col items-center gap-4">
          <a
            href="tel:+18329779202"
            className="flex items-center gap-2 hover:text-accent-400"
          >
            <Phone className="h-4 w-4" />
            (832) 977-9202
          </a>
          <a
            href="mailto:Info@idokolegacy.com"
            className="flex items-center gap-2 hover:text-accent-400"
          >
            <Mail className="h-4 w-4" />
            Info@idokolegacy.com
          </a>
        </div>
      </div>
    </div>
  );
}
